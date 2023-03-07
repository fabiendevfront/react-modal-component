import "../styles/main.scss";

const ReactModalComponent = () => {
    return (
        <div className="react-modal-component">
            <div className="react-modal-component__container">
                <div className="react-modal-component__head">
                    <h3 className="react-modal-component__title">Titre de la modale</h3>
                    <button onClick={console.log("click")}className="react-modal-component__btn">
                        X
                    </button>
                </div>
                <p className="react-modal-component__text">Texte de la modale</p>
            </div>
        </div>
    );
};

export default ReactModalComponent;