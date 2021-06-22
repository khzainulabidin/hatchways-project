import React, {useState} from "react";
import { Redirect, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { login } from "../../../store/utils/thunkCreators";
import Account from "../Account";
import { handleInput } from "../../../utils/misc";
import {Button, FormControl, InputAdornment, Link, TextField} from "@material-ui/core";
import useLoginStyles from "./Login.style";

const Login = (props) => {
    const classes = useLoginStyles();
    const history = useHistory();
    const { user, login } = props;

    const [inputs, setInputs] = useState({
        username: '',
        password: '',
    });

    const handleLogin = async (event) => {
        event.preventDefault();
        const { username, password } = inputs;

        await login({ username, password });
    };

    if (user.id) {
        return <Redirect to="/home" />;
    }

    // Utilizing Account page template
    return (
        <Account
            alternateQuestion={"Don't have an account?"}
            alternateActionText={"Create account"}
            alternateAction={() => history.push("/register")}
        >
            <form onSubmit={handleLogin}>
                <h1>Welcome back!</h1>

                <FormControl fullWidth>
                    <TextField
                        label={"Username"}
                        aria-label={"username"}
                        name={"username"}
                        type={"text"}
                        value={inputs.username}
                        onChange={e => handleInput({ username: e.target.value }, setInputs)}
                        required
                    />
                </FormControl>

                <FormControl fullWidth>
                    <TextField
                        label={"Password"}
                        aria-label={"password"}
                        name={"password"}
                        type={"password"}
                        inputProps={{ minLength: 6 }}
                        InputProps={{ endAdornment: (
                            <InputAdornment position="end">
                                <Link
                                    /*Path to be changed by forgot password page route path*/
                                    onClick={() => history.push('/login')}
                                    classes={{root: classes.forgotPasswordText}}
                                >Forgot?</Link>
                            </InputAdornment>
                            )}}
                        value={inputs.password}
                        onChange={e => handleInput({ password: e.target.value }, setInputs)}
                        required
                    />
                </FormControl>

                <Button type={"submit"} variant={"contained"} color={"primary"}>
                    Login
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
        login: (credentials) => {
            dispatch(login(credentials));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
