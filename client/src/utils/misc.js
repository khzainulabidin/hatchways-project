export const handleInput = (update, setInputs) => {
    return setInputs(prevState => ({ ...prevState, ...update }));
}
