;(function(global) {
  global.DeclarativeFields = {}
  global.DeclarativeFields.init = function(view) {
    var initial = view.fields

    view.fields = {
      add: function(selectors) {
        var container = this

        _(selectors).each(function(selector, name) {
          container[name] = function() {
            return view.$(selector)
          }
        })
      }
    }

    if (initial) view.fields.add(initial)
  }
})(this)
