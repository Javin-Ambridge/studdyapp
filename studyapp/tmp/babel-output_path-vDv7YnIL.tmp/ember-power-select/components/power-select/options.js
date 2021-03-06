define('ember-power-select/components/power-select/options', ['exports', 'ember', 'ember-power-select/templates/components/power-select/options'], function (exports, _ember, _emberPowerSelectTemplatesComponentsPowerSelectOptions) {
  'use strict';

  exports['default'] = _ember['default'].Component.extend({
    isTouchDevice: !!self.window && 'ontouchstart' in self.window,
    layout: _emberPowerSelectTemplatesComponentsPowerSelectOptions['default'],
    tagName: 'ul',
    attributeBindings: ['role', 'aria-controls'],
    role: 'listbox',

    // Lifecycle hooks
    didInsertElement: function didInsertElement() {
      var _this = this;

      this._super.apply(this, arguments);
      if (this.get('role') === 'group') {
        return;
      }
      var findOptionAndPerform = function findOptionAndPerform(action, e) {
        var optionItem = _ember['default'].$(e.target).closest('[data-option-index]');
        if (!optionItem || !(0 in optionItem)) {
          return;
        }
        action(_this._optionFromIndex(optionItem[0].dataset.optionIndex), e);
      };
      this.element.addEventListener('mouseup', function (e) {
        return findOptionAndPerform(_this.get('select.actions.choose'), e);
      });
      this.element.addEventListener('mouseover', function (e) {
        return findOptionAndPerform(_this.get('select.actions.highlight'), e);
      });
      if (this.get('isTouchDevice')) {
        this._addTouchEvents();
      }
    },

    // Methods
    _addTouchEvents: function _addTouchEvents() {
      var _this2 = this;

      var touchMoveHandler = function touchMoveHandler() {
        _this2.hasMoved = true;
        _this2.element.removeEventListener('touchmove', touchMoveHandler);
      };
      // Add touch event handlers to detect taps
      this.element.addEventListener('touchstart', function () {
        _this2.element.addEventListener('touchmove', touchMoveHandler);
      });
      this.element.addEventListener('touchend', function (e) {
        var optionItem = _ember['default'].$(e.target).closest('[data-option-index]');

        if (!optionItem || !(0 in optionItem)) {
          return;
        }

        e.preventDefault();
        if (_this2.hasMoved) {
          _this2.hasMoved = false;
          return;
        }

        _this2.get('select.actions.choose')(_this2._optionFromIndex(optionItem[0].dataset.optionIndex), e);
      });
    },

    _optionFromIndex: function _optionFromIndex(index) {
      var parts = index.split('.');
      var options = this.get('options');
      if (!options.objectAt) {
        options = _ember['default'].A(options);
      }
      var option = options.objectAt(parseInt(parts[0], 10));
      for (var i = 1; i < parts.length; i++) {
        var groupOptions = option.options;
        if (!groupOptions.objectAt) {
          groupOptions = _ember['default'].A(groupOptions);
        }
        option = groupOptions.objectAt(parseInt(parts[i], 10));
      }
      return option;
    }
  });
});