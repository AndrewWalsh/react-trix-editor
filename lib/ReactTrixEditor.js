'use strict';

exports.__esModule = true;

var _class, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('trix');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ReactTrixEditor = (_temp = _class = function (_Component) {
  _inherits(ReactTrixEditor, _Component);

  function ReactTrixEditor() {
    _classCallCheck(this, ReactTrixEditor);

    var _this = _possibleConstructorReturn(this, _Component.call(this));

    _this.id = Math.random().toString(36);
    _this.updateStateValue = _this.updateStateValue.bind(_this);
    return _this;
  }

  ReactTrixEditor.prototype.componentDidMount = function componentDidMount() {
    var _this2 = this;

    // Provide editor to callback on initialisation
    document.getElementById(this.id).addEventListener('trix-initialize', function () {
      _this2.editor = document.getElementById(_this2.id).editor;
      if (_this2.props.onEditor) {
        // Pass the editor & node
        _this2.props.onEditor(_this2.editor, document.getElementById(_this2.id));
      }
    });

    document.getElementById(this.id).addEventListener('trix-change', function (e) {
      return _this2.updateStateValue(e);
    });
  };

  ReactTrixEditor.prototype.updateStateValue = function updateStateValue(e) {
    var value = e.target.value;
    this.props.onChange(value);
  };

  ReactTrixEditor.prototype.render = function render() {
    var _props = this.props;
    var input = _props.input;
    var initialValue = _props.initialValue;
    var placeholder = _props.placeholder;
    var autofocus = _props.autofocus;


    return _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement('input', { id: input, value: initialValue, type: 'hidden', name: 'content' }),
      _react2.default.createElement('trix-editor', {
        id: this.id,
        input: input,
        placeholder: placeholder,
        autofocus: autofocus })
    );
  };

  return ReactTrixEditor;
}(_react.Component), _class.defaultProps = {
  autofocus: false,
  input: 'react-trix-editor',
  placeholder: 'Enter text here...'
}, _temp);
process.env.NODE_ENV !== "production" ? ReactTrixEditor.propTypes = {
  onChange: _react.PropTypes.func.isRequired,
  onEditor: _react.PropTypes.func,
  autofocus: _react.PropTypes.bool,
  input: _react.PropTypes.string,
  placeholder: _react.PropTypes.string,
  initialValue: _react.PropTypes.string
} : void 0;
exports.default = ReactTrixEditor;
module.exports = exports['default'];