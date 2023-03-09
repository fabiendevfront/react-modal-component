import { useEffect } from "react";
import "../styles/main.scss";
import PropTypes from "prop-types";

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
const ReactModalComponent = (props) => {

    // Modal custom style
    const modalStyle = {
        width: props.customModalWidth || "",
        height: props.customModalHeight || "",
        color: props.modalTextColor || ""
    };

    // Close btn custom style
    const btnModalStyle = {
        backgroundColor: props.closeBtnContainerColor || ""
    };

    // Event Listener for close modal with escape key
    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === "Escape") {
                props.hideModal();
            }
        };

        document.addEventListener("keydown", handleKeyDown);

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, [props]);


    /**
    * Returns a string with the class name for the modal size based on the modalSize prop.
    @param {Object} props - Props object
    @param {string} props.modalSize - Size of modal ("large", "medium", "small")
    @returns {string} - If valid return className for the modal size
    */
    const getModalSizeClass = (props) => {
        const validSizes = ["large", "medium", "small"];

        if (!validSizes.includes(props.modalSize)) {
            console.error(`Invalid value modalSize: '${props.modalSize}'`);
            return "";
        }

        return `react-modal-component__container--${props.modalSize}`;
    };

    const modalSizeClass = props.modalSize ? getModalSizeClass(props) : "";

    return (
        <div
            className="react-modal-component"
            aria-modal="true"
            aria-labelledby="modal-title"
            aria-describedby="modal-description"
        >
            <div className="react-modal-component__overlay" onClick={props.hideModal}>
                <div
                    className={`react-modal-component__container ${
                        modalSizeClass
                    } ${
                        props.darkMode ? "react-modal-component__container--dark" : ""
                    }`}
                    style={modalStyle}
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className="react-modal-component__head">
                        <span
                            className="react-modal-component__close-btn"
                            onClick={props.hideModal}
                            style={btnModalStyle}
                            aria-label="Close modal"
                            role="button"
                            tabIndex="0"
                        ></span>
                        {props.title &&
                            <h2 className="react-modal-component__title" id="modal-title">{props.title}</h2>
                        }
                    </div>
                    <div className="react-modal-component__content" id="modal-description">
                        {props.children}
                    </div>
                </div>
            </div>
        </div>
    );
};

ReactModalComponent.propTypes = {
    hideModal: PropTypes.func.isRequired,
    title: PropTypes.string,
    children: PropTypes.node.isRequired,
    darkMode: PropTypes.bool,
    modalSize: PropTypes.oneOf(["large", "medium", "small"]),
    customModalWidth: PropTypes.string,
    customModalHeight: PropTypes.string,
    modalTextColor: PropTypes.string,
    closeBtnContainerColor: PropTypes.string
};

export default ReactModalComponent;