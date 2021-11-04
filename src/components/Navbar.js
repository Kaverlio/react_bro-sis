import React, {useContext} from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import { Button, Grid } from '@material-ui/core'
import { NavLink } from 'react-router-dom'
import { LOGIN_ROUTE } from '../utils/const'
import {useAuthState} from "react-firebase-hooks/auth";
import { Context } from './../index';

const Navbar = () => {
    const {auth} = useContext(Context);
    const [user] = useAuthState(auth);

    return (
        <AppBar position="static">
            <Toolbar >
                <Grid container justify={'flex-end'}>
                    {
                    user ? <Button onClick={() => auth.signOut()} color="secondary" >Log out</Button> : 
                    <NavLink to={LOGIN_ROUTE}>
                        <Button color="secondary" >Log in</Button>
                    </NavLink>
                    }
                </Grid>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar;
