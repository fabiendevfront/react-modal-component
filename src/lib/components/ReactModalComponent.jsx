import "../styles/main.scss";

const ReactModalComponent = ({ displayModal, title, children }) => {
    return (
        <div className="react-modal-component">
            <div className="react-modal-component__container">
                <div className="react-modal-component__head">
                    <h3 className="react-modal-component__title">{title}</h3>
                    <button className="react-modal-component__btn" onClick={() => displayModal(false)}>
                        X
                    </button>
                </div>
                {children}
            </div>
        </div>
    );
};

export default ReactModalComponent;