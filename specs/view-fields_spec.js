describe("Declarative Fields", function() {
  beforeEach(function() {
    var TestView = Backbone.View.extend({
      fields: { foo: '.bar' },

      initialize: function() {
        ViewFields.init(this)
      }
    })

    this.view = new TestView()
  })

  it("creates methods from initial fields hash", function() {
    expect(typeof this.view.fields.foo).toBe('function')
  })

  it("is able to add new fields", function() {
    this.view.fields.add({bar: '.baz'})
    expect(typeof this.view.fields.bar).toBe('function')
  })


  describe('methods', function() {
    it("return scoped jquery objects", function() {
      spyOn(this.view, '$')
      this.view.fields.foo()

      expect(this.view.$).toHaveBeenCalledWith('.bar')
    })

    it("can be overridden", function() {
      spyOn(this.view, '$')
      this.view.fields.add({foo: '.baz'})
      this.view.fields.foo()

      expect(this.view.$).toHaveBeenCalledWith('.baz')
    })
  })
})
