import ReactModalComponent from "../lib/components/ReactModalComponent";
import { useState } from "react";

const ModalExample = () => {
	const [displayModal, setDisplayModal] = useState(false);
	const toggleModal = () => setDisplayModal(!displayModal);

	return (
		<div className="modal-example">
			<div className="modal-example__head">
				<h2 className="modal-example__title">Modal Example</h2>
				<p className="modal-example__subtitle">Click on button for example of the modale</p>
				<span
					type="button"
					className="modal-example__btn"
					onClick={toggleModal}
				>
					Open Modale
				</span>
			</div>
			{displayModal &&
					<ReactModalComponent
						hideModal={toggleModal}
						title="Modal Title"
						// darkMode
						// modalSize="large"
						// customModalWidth="400px"
						// customModalHeight="400px"
						// modalTextColor="#FFF258"
						// closeBtnContainerColor="#93AD18"
					>
						<p className="modal-example__text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio expedita facilis laborum, doloremque voluptatum nostrum esse fuga a quia rerum deleniti veritatis rem quisquam corporis saepe iure eaque ex maxime?</p>
						<a href="/" className="modal-example__link-btn">Link</a>
					</ReactModalComponent>
			}
		</div>
	);
}

export default ModalExample;
