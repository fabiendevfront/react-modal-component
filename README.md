# React Modal Component

## Presentation

Customizable modal component for React JS

## Install the modal

Use NPM command:

```bash
npm i @fabiendev/react-modal-component
```

## Import modal in your project

```js
import  ReactModalComponent  from "@fabiendev/react-modal-component";
```

## Example in component

```js
import { useState } from "react";
import ReactModalComponent  from "@fabiendev/react-modal-component";

const ModalExample = () => {
    const [displayModal, setDisplayModal] = useState(false);
    const toggleModal = () => setDisplayModal(!displayModal);

    return (
        <div>
            <h2>Modal Example</h2>
            <button onClick={toggleModal}>Open Modale</button>
            {displayModal &&
                <ReactModalComponent
                    hideModal={toggleModal}
                    title="Modal Title"
                    darkMode
                    modalSize="large"
                >
                    <p>Message in modal</p>
                </ReactModalComponent>
            }
        </div>
    );
};

export default ModalExample;
```

## Properties

| Properties              | Types    | Required |
| ----------              | ---------| -------- |
| `hideModal`             | function |    X     |
| `title`                 | string   |          |
| `children`              | node     |    X     |
| `darkMode`              | bool     |          |
| `modalSize`             | string   |          |
| `customModalWidth`      | string   |          |
| `customModalHeight`     | string   |          |
| `modalTextColor`        | string   |          |
| `closeBtnContainerColor`| string   |          |


### Properties description

* `hideModal` {function}: Function to hide modal
    * example:
        ```js
            hideModal={toggleModal}
        ```
* `title` {string}: Title of modal
    * example:
        ```js
            title="Modal Title"
        ```
* `children` {node}: Content to display inside modal
    * example:
        ```js
            <ReactModalComponent>
                <p>Message in modal</p>
            </ReactModalComponent>
        ```
* `darkMode` {bool}: Whether to display modal in dark mode
    * example:
        ```js
            darkMode={true}
        ```
* `modalSize` {string}: Predefined size of modal ("large", "medium", "small")
    * example:
        ```js
            modalSize="large"
        ```
* `customModalWidth` {string}: Custom width for modal
    * example:
        ```js
            customModalWidth="500px"
        ```
* `customModalHeight` {string}: Custom height for modal
    * example:
        ```js
            customModalHeight="500px"
        ```
* `modalTextColor` {string}: Text color for modal
    * example:
        ```js
            modalTextColor="#93AD18"
        ```
* `closeBtnContainerColor` {string}: Background color for close button
    * example:
        ```js
            closeBtnContainerColor="#748813"
        ```

## NPM Package
- [@fabiendev/react-modal-component](https://www.npmjs.com/package/@fabiendev/react-modal-component)