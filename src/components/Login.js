import { Container, Grid, Button } from '@material-ui/core';
import React, { useContext } from 'react';
import Box from "@material-ui/core/Box"
import {Context} from "../index"
import firebase from 'firebase/compat';

const Login = () => {
const {auth} = useContext(Context);

const loginGoogle = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    const {user} = await auth.signInWithPopup(provider);
}

const loginFacebook = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    const {user} = await auth.signInWithPopup(provider);
}

    return (
        <Container>
            <Grid container
                style={{ height: window.innerHeight - 50 }}
                alignItems={"center"} justify={"center"}>
                <Grid style={{ width: 400, background: 'lightgray' }}
                    container
                    alignItems={'center'}
                    direction={"column"}
                >
                    
                    <Box p={5}>
                        <Button onClick={loginGoogle} variant={"outlined"}>Login with Google</Button>
                        <Button onClick={loginFacebook} variant={"outlined"}>Login with Facebook</Button>                    
                    </Box>
                </Grid>
            </Grid>
        </Container>
    )
}


export default Login;