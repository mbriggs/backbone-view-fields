/* global _ */

;(function(global) {
  global.ViewFields = {}
  global.ViewFields.init = function(view) {
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
})(this);
