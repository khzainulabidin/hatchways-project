import React, { useState } from "react";
import { Redirect, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { register } from "../../../store/utils/thunkCreators";
import Account from "../Account";

const Login = (props) => {
    const history = useHistory();
    const { user, register } = props;
    const [formErrorMessage, setFormErrorMessage] = useState({});
    const [inputs, setInputs] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const handleInput = update => {
        return setInputs(prevState => ({ ...prevState, ...update }))
    }

    const handleRegister = async (event) => {
        event.preventDefault();
        const { username, email, password, confirmPassword } = inputs;

        if (password !== confirmPassword) {
            setFormErrorMessage({ confirmPassword: "Passwords must match" });
            return;
        }

        await register({ username, email, password });
    };

    if (user.id) {
        return <Redirect to="/home" />;
    }

    return (
        <Account>

        </Account>
    );
};

const mapStateToProps = (state) => {
    return {
        user: state.user,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        register: (credentials) => {
            dispatch(register(credentials));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
