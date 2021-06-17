/*
* Handles the user input
* Takes an object as update and setInputs function
* */

const handleInput = (update, setInputs) => {
    return setInputs(prevState => ({ ...prevState, ...update }));
}

export default handleInput;
