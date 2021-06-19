/*
* Handles the user input
* Takes an object as update and setInputs function
* */

export const handleInput = (update, setInputs) => {
    return setInputs(prevState => ({ ...prevState, ...update }));
}
