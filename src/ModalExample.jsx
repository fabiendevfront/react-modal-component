import ReactModalComponent from "./lib/components/ReactModalComponent";
import { useState } from "react";

const ModalExample = () => {
	const [displayModal, setDisplayModal] = useState(false);

	return (
		<div className="modal-example">
			<div className="modal-example__head">
				<h2 className="modal-example__title">Modal Example</h2>
				<p className="modal-example__subtitle">Click on button for example of the modale</p>
				<span
					type="button"
					className="modal-example__btn"
					onClick={() => setDisplayModal(!displayModal)}
				>
					Open Modale
				</span>
			</div>
			{displayModal &&
				<div className="modal-example__modale">
					<ReactModalComponent
						displayModal={setDisplayModal}
						title="Modal Title"
					>
						<p className="react-modal-component__text">Texte de la modale</p>
					</ReactModalComponent>
				</div>
			}
		</div>
	);
}

export default ModalExample;
