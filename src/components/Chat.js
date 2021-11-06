import { Container, Button, Grid} from '@material-ui/core';
import React, { useContext} from 'react';
import { useCollectionData } from "react-firebase-hooks/firestore"
import { useAuthState } from "react-firebase-hooks/auth";
import { Context } from './../index';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const Chat = () => {
    const firestore = firebase.firestore();
    const { auth } = useContext(Context);
    const [user] = useAuthState(auth);
    //  const [value, setValue] = useState("");
    const [messages] = useCollectionData(
        firestore.collection('messages').orderBy('createdAt')

    );

    const sendBro = async () => {
        firestore.collection('messages').add({
            uid: user.uid,
            displayName: user.displayName,
            photoUrl: user.photoURL,
            text: "BRO!",
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
        })
    }
    const sendSis = async () => {
        firestore.collection('messages').add({
            uid: user.uid,
            displayName: user.displayName,
            photoUrl: user.photoURL,
            text: "SIS!",
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
        })

    }

    return (
        <Container>
            <Grid container justify={"center"} style={{marginTop: 20 }}>
                <div style={{ width: '80%', height: '20hv', textAlign: "center"}}>
                    {messages && 
                        <div >
                            {messages.slice(-1).pop().displayName + ": " + messages.slice(-1).pop().text}
                        </div>
                    }
                </div>
                <Grid container direction={"column"} style={{ width: "30%", marginTop: 10 }}>
                    {/* <TextField fullWidth rowsMax={2} variant={"outlined"} value={value} onChange={e => setValue(e.target.value)}/> */}
                    <Button onClick={sendBro} variant={"outlined"}>Bro!</Button>
                    <Button onClick={sendSis} variant={"outlined"}>Sis!</Button>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Chat;
