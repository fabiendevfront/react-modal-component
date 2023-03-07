import "../styles/main.scss";

const ReactModalComponent = ({ displayModal, title, children }) => {
    return (
        <div className="react-modal-component">
            <div className="react-modal-component__overlay">
                <div className="react-modal-component__container">
                    <div className="react-modal-component__head">
                        <h3 className="react-modal-component__title">{title}</h3>
                        <span className="react-modal-component__btn" onClick={() => displayModal(false)}>
                            x
                        </span>
                    </div>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default ReactModalComponent;