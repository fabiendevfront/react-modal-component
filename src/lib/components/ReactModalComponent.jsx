import { useEffect } from "react";
import "../styles/main.scss";
import PropTypes from 'prop-types';

const ReactModalComponent = (props) => {

    const modalStyle = {
        width: props.customModalWidth || "",
        height: props.customModalHeight || "",
        color: props.modalTextColor || ""
    }

    const btnModalStyle = {
        backgroundColor: props.closeBtnContainerColor || ""
    }

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
                        props.modalSize === "large" ? "react-modal-component__container--large"
                        : props.modalSize === "medium" ? "react-modal-component__container--medium"
                        : props.modalSize === "small" ? "react-modal-component__container--small"
                        : ""} ${props.darkMode ? "react-modal-component__container--dark" : ""}`}
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