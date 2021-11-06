import { Container, Grid, Button } from '@material-ui/core';
import { useCollectionData } from "react-firebase-hooks/firestore";
import React, { useContext } from 'react';
import Box from "@material-ui/core/Box"
import {Context} from "../index"
import firebase from 'firebase/compat';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const Login = () => {
const firestore = firebase.firestore();
const {auth} = useContext(Context);

const loginGoogle = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    const {user} = await auth.signInWithPopup(provider);
}

const loginFacebook = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    const {user} = await auth.signInWithPopup(provider);
}

const [messages] = useCollectionData(
    firestore.collection('messages').orderBy('createdAt')

);
let counterBro = 0, counterSis = 0;
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
                    {messages && messages.map(value => {
                        console.log(value.text);
                        if(value.text == "BRO!") counterBro++;
                        else counterSis++;
                    })
                       
                    }
                    <div> Bro: {counterBro}; Sis: {counterSis};</div>
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