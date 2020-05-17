import React from 'react';
import {useState, useEffect} from 'react';
import { Column, Row } from 'simple-flexbox';
import { StyleSheet, css } from 'aphrodite';
import HeaderComponent from '../../components/header/HeaderComponent';
import { connect } from "react-redux";

import { useCookies } from 'react-cookie';
import { Redirect } from 'react-router-dom';

import { Button, TextField } from '@material-ui/core';
import { createMuiTheme, withStyles, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import { indigo } from '@material-ui/core/colors';


const ColorButton = withStyles((theme) => ({
    root: {
      color: theme.palette.getContrastText(indigo[800]),
      backgroundColor: indigo[800],
      '&:hover': {
        backgroundColor: indigo[900],
      },
    },
  }))(Button);

const styles = StyleSheet.create({
    container: {
        height: '100%',
        minHeight: '100vh',
    },
    leftBlock: {
        background: '#000239',
        width: '50%'
    },
    rightBlock: {
        background: '#ECEDFF',
        width: '50%'
    },
    title: {
        textAlign: 'right',
        position: 'absolute',
        bottom: '30px',
        width: '50%'
    },
    subTitle: {
        textAlign: 'right',
        position: 'absolute',
        bottom: '17vw',
        width: '50%'
    },
    signUp: {
        textAlign: 'right',
        position: 'absolute',
        right: '50px',
        top: '50px'
    },
    titleText: {
        fontFamily: 'Rubik mono one, sans-serif',
        fontSize: '7vw',
        fontWeight: '800',
        color: '#fff',
        margin: '0',
        marginRight: '50px',
        lineHeight: '7vw'
    },
    subTitleText: {
        fontFamily: 'Ruda, sans-serif',
        fontSize: '2vw',
        paddingLeft: '250px',
        color: '#fff',
        margin: '0',
        marginRight: '50px',
        lineHeight: '3vw'
    },
    signUpText: {
        fontFamily: 'Rubik mono one, sans-serif',
        fontSize: '6vw',
        color: '#000239',
        margin: '0',
        lineHeight: '6vw'
    },
    formContainer: {
        height: '100%',
        width: '70%',
        margin: '50px',
        padding: '20px',
        marginTop: '250px'
    },
    formDiv: {
        width: '100%',
        textAlign: 'center'
    },
    formHeader: {
        fontFamily: 'Ruda, sans-serif',
        fontSize: '1.5vw',
        fontWeight: '800',
        color: '#000239',
        margin: '0',
        lineHeight: '7vw'
    },
    formElement: {
        marginBottom: '20px'
    }
});

function SignIn(props) {

    //Cookies for session
    const [cookies, setCookie] = useCookies(['loggedIn', 'userToken']);


    return (
        <Row className={css(styles.container)}>
            {cookies.loggedIn ? <Redirect to = "/" /> : ''} 
            <Column flexGrow={1} className={css(styles.leftBlock)}>
                <div className={css(styles.subTitle)}>
                    <h4 className={css(styles.subTitleText)}>A platform that connects students to professional experts</h4>
                </div>
                <div className={css(styles.title)}>
                    <h1 className={css(styles.titleText)}>chr</h1>
                    <h1 className={css(styles.titleText)}>onos</h1>
                </div>
            </Column>
            <Column flexGrow={1} className={css(styles.rightBlock)}>
                <Row className={css(styles.signUp)} >
                <div >
                    <h1 className={css(styles.signUpText)}>sign</h1>
                    <h1 className={css(styles.signUpText)}>up</h1>
                </div>
                </Row>
                <Row vertical="center" className={css(styles.formContainer)}>
                    <div className={css(styles.formDiv)}>
                    <TextField id="outlined-basic" label="Name" variant="outlined" className={css(styles.formElement)} fullWidth/>
                    <TextField id="outlined-basic" label="Email" variant="outlined" className={css(styles.formElement)} fullWidth/>
                    <TextField id="outlined-basic" label="Phone Number" variant="outlined" className={css(styles.formElement)} fullWidth/>
                    <TextField id="outlined-basic" label="Password" type="password" variant="outlined" className={css(styles.formElement)} fullWidth/>
                    <TextField id="outlined-basic" label="Confirm Password" type="password" variant="outlined" className={css(styles.formElement)} fullWidth/>
                    <ColorButton variant="contained" color="primary" className={css(styles.formElement)}>Submit</ColorButton>
                    <div>Already have an Account? <a href="#">Sign In →</a></div> 
                    </div>
                </Row>
            </Column>
        </Row>
    );
}

export default SignIn;