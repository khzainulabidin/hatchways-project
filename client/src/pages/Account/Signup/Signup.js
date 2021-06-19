import React, { useState } from "react";
import { Redirect, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { register } from "../../../store/utils/thunkCreators";
import Account from "../Account";
import { handleInput } from "../../../utils/misc";
import {Button, FormControl, TextField} from "@material-ui/core";

const Signup = (props) => {
    const history = useHistory();
    const { user, register } = props;

    // State to store user input in the register form
    const [inputs, setInputs] = useState({
        username: '',
        email: '',
        password: '',
    });

    const handleRegister = async (event) => {
        event.preventDefault();
        const { username, email, password } = inputs;

        await register({ username, email, password });
    };

    if (user.id) {
        return <Redirect to="/home" />;
    }

    // Utilizing Account page template
    return (
        <Account
            alternateQuestion={'Already have an account?'}
            alternateActionText={'Login'}
            alternateAction={() => history.push("/login")}
        >
            <form onSubmit={handleRegister}>
                <h1>Create an account.</h1>

                <FormControl fullWidth>
                    <TextField
                        aria-label="username"
                        label="Username"
                        name="username"
                        type="text"
                        value={inputs.username}
                        onChange={e => handleInput({ username: e.target.value }, setInputs)}
                        required
                    />
                </FormControl>

                <FormControl fullWidth>
                    <TextField
                        label="E-mail address"
                        aria-label="e-mail address"
                        type="email"
                        name="email"
                        value={inputs.email}
                        onChange={e => handleInput({ email: e.target.value }, setInputs)}
                        required
                    />
                </FormControl>

                <FormControl fullWidth>
                    <TextField
                        aria-label="password"
                        label="Password"
                        type="password"
                        inputProps={{ minLength: 6 }}
                        name="password"
                        value={inputs.password}
                        onChange={e => handleInput({ password: e.target.value }, setInputs)}
                        required
                    />
                </FormControl>

                <Button type={"submit"} variant={"contained"} color={"primary"}>
                    Create
                </Button>
            </form>
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

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
