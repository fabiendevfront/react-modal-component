"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = require("react");
require("../css/main.css");
/**
 * A React component for displaying a modal.
 *
 * @component
 * @param {Object} props - Component props
 * @param {function} props.hideModal - Function to hide modal
 * @param {string} [props.title] - Title of modal
 * @param {node} props.children - Content to display inside modal
 * @param {bool} [props.darkMode] - Whether to display modal in dark mode
 * @param {string} [props.modalSize] - Predefined size of modal ("large", "medium", "small")
 * @param {string} [props.customModalWidth] - Custom width for modal
 * @param {string} [props.customModalHeight] - Custom height for modal
 * @param {string} [props.modalTextColor] - Text color for modal
 * @param {string} [props.closeBtnContainerColor] - Background color for close button
 * @returns {JSX.Element}
 */
var ReactModalComponent = function ReactModalComponent(props) {
  // Modal custom style
  var modalStyle = {
    width: props.customModalWidth || "",
    height: props.customModalHeight || "",
    color: props.modalTextColor || ""
  };

  // Close btn custom style
  var btnModalStyle = {
    backgroundColor: props.closeBtnContainerColor || ""
  };

  // Event Listener for close modal with escape key
  (0, _react.useEffect)(function () {
    var handleKeyDown = function handleKeyDown(event) {
      if (event.key === "Escape") {
        props.hideModal();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return function () {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [props]);

  /**
  * Returns a string with the class name for the modal size based on the modalSize prop.
  @param {Object} props - Props object
  @param {string} props.modalSize - Size of modal ("large", "medium", "small")
  @returns {string} - If valid return className for the modal size
  */
  var getModalSizeClass = function getModalSizeClass(props) {
    var validSizes = ["large", "medium", "small"];
    if (!validSizes.includes(props.modalSize)) {
      console.error("Invalid value modalSize: '".concat(props.modalSize, "'"));
      return "";
    }
    return "react-modal-component__container--".concat(props.modalSize);
  };
  var modalSizeClass = props.modalSize ? getModalSizeClass(props) : "";
  return /*#__PURE__*/React.createElement("div", {
    className: "react-modal-component",
    "aria-modal": "true",
    "aria-labelledby": "modal-title",
    "aria-describedby": "modal-description"
  }, /*#__PURE__*/React.createElement("div", {
    className: "react-modal-component__overlay",
    onClick: props.hideModal
  }, /*#__PURE__*/React.createElement("div", {
    className: "react-modal-component__container ".concat(modalSizeClass, " ").concat(props.darkMode ? "react-modal-component__container--dark" : ""),
    style: modalStyle,
    onClick: function onClick(e) {
      return e.stopPropagation();
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "react-modal-component__head"
  }, /*#__PURE__*/React.createElement("span", {
    className: "react-modal-component__close-btn",
    onClick: props.hideModal,
    style: btnModalStyle,
    "aria-label": "Close modal",
    role: "button",
    tabIndex: "0"
  }), props.title && /*#__PURE__*/React.createElement("h2", {
    className: "react-modal-component__title",
    id: "modal-title"
  }, props.title)), /*#__PURE__*/React.createElement("div", {
    className: "react-modal-component__content",
    id: "modal-description"
  }, props.children))));
};
var _default = ReactModalComponent;
exports.default = _default;