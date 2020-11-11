import React from "react"; 
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { styled } from '@material-ui/styles'
import Grid from '@material-ui/core/Grid'
import Styled from 'styled-components'
import { useState, useEffect } from 'react'
import axios from 'axios'
import {baseUrl} from '../constants/axiosConstants'
import { useHistory } from "react-router-dom";
import AccountCircle from '@material-ui/icons/AccountCircle';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import InputAdornment from '@material-ui/core/InputAdornment';
import {goToSignUpPage} from '../router/goToPages'

const FormDiv = styled(Grid)({
    display: "grid",
    gap: "1em",
    justifyItems: "center",
    width: "100vw",
    marginBottom: "50px",
    marginTop: "100px;"
})

const Buttonn = styled(Button)({
    width: "150px",
    marginTop: "5px",
    height: "35px"
})

const Cadastrar = Styled.span`
    text-decoration: underline;
    &:hover {
        color: #4169E1;
    } 
`

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
      },
      margin: {
        margin: theme.spacing(1),
      },
      withoutLabel: {
        marginTop: theme.spacing(1),
      },
      textField: {
        width: '25ch',
      },
    }));

const useInput = () => {
    const [value, setValue] = useState("");
  
    const handleValue = (event) => {
      setValue(event.target.value);
    };
  
    return [value, handleValue];
  };


export default function Login() {
    const emailRegex = new RegExp('/\S+@\S+\.\S+/');
    const classes = useStyles();
    const history = useHistory()
    const [email, changeEmail] = useInput()
    const [values, setValues] = React.useState({
        password: '',
        showPassword: false,
      });
    

    
    const login = () => {
        const body = {
            email: email,
            password: values.password
        }
        axios.post(`${baseUrl}/login`, body)
        .then((response) => {
            localStorage.setItem("token", response.data.token);
            history.push("/criarViagem");
        })
        .catch((error) => {
            console.log(error.messege)
        })
    }
    useEffect(() => {
        const token = window.localStorage.getItem("token");

        if (token) {
            history.push("/criarViagem");
          }
        }, [history]);

        const handleChange = (prop) => (event) => {
            setValues({ ...values, [prop]: event.target.value });
          };
        
          const handleClickShowPassword = () => {
            setValues({ ...values, showPassword: !values.showPassword });
          };
        
          const handleMouseDownPassword = (event) => {
            event.preventDefault();
          };

        const pressEnter = (event) => {
            if (event.key === 'Enter'){
             login()
          } }

    return (
        <div>
            <FormDiv container>
                <h2>Login</h2>
                 <FormControl className={classes.margin}>
                    <InputLabel htmlFor="input-with-icon-adornment">Email</InputLabel>
                        <Input
                            value={email}
                            onChange={changeEmail}
                            id="input-with-icon-adornment"
                            startAdornment={
                            <InputAdornment position="start">
                                <AccountCircle />
                            </InputAdornment>
                            }
                         />
                </FormControl>
                <FormControl className={clsx(classes.margin, classes.textField)}>
                    <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                        <Input
                            id="standard-adornment-password"
                            type={values.showPassword ? 'text' : 'password'}
                            value={values.password}
                            onChange={handleChange('password')}
                            onKeyDown={pressEnter}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                    >
                                        {values.showPassword ? <Visibility /> : <VisibilityOff />}
                                    </IconButton>
                                </InputAdornment>
                            }
                         />
                        </FormControl>
                            <Buttonn 
                                variant="contained" 
                                color="primary" 
                                onClick={login}
                            >
                                entrar
                            </Buttonn>
                            <p>Caso não tenha cadastro clique em <Cadastrar onClick={() => goToSignUpPage(history)}>cadastrar</Cadastrar></p> 
                </FormDiv>
            
        </div>
    )
}