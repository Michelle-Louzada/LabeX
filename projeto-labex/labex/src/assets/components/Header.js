import React from 'react';
import Logo from '../imgs/Logo.png'
import styled from 'styled-components'
import IconButton from '@material-ui/core/IconButton'
import FormControl from '@material-ui/core/FormControl'
import OutlinedInput from '@material-ui/core/OutlinedInput'
import InputAdornment from '@material-ui/core/InputAdornment'
import SearchIcon from '@material-ui/icons/Search'
import { goToHomePage, goToTripPage, goToLoginPage, goToCreatePage, deletToken} from '../router/goToPages'
import { useHistory } from "react-router-dom";

const ImgLogo = styled.img`
    width: 250px;
`
const All = styled.div`
 display: flex;
 justify-content: space-between;
 align-items: center;
 padding: 8px 24px;
 margin: 0 auto;
 border-bottom: 1px solid #EEE9E9;
 max-width: 1024px;
`
const Container1 = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15px;
`
const Container2 = styled.div`
    align-self: center;
`
const SpanStyled = styled.span`
    margin: 15px;
    font-weight: 600;
    cursor: pointer;
    &:hover {
        color: #4169E1;
    }
`

export default function Header() {
    const history = useHistory();

    return (
        <All> 
            <Container1>
                <ImgLogo src={Logo} onClick={() => goToHomePage(history)}/>
                <FormControl variant="outlined">
                        <OutlinedInput 
                            id="component-outlined" 
                            placeholder= "busca..."
                            type="text"
                            name="search"
                            value="buscar..."
                            onChange=""
                            onKeyPress=""
                            margin="dense"
                            color="primary"
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton 
                                        aria-label="search" 
                                        size="small"
                                        onClick=""
                                    >
                                        <SearchIcon />
                                    </IconButton>
                                </InputAdornment>
                            }
                        />
                    </FormControl>
            </Container1>
            <Container2>
                {localStorage.getItem("token") ? <SpanStyled onClick={() => goToCreatePage(history) }>criar viagem</SpanStyled> : <p></p>}
                <SpanStyled onClick={() => goToTripPage(history)}>viagens</SpanStyled>
                {localStorage.getItem("token") ? <SpanStyled onClick={() => deletToken(history)}>sair</SpanStyled> :  <SpanStyled onClick={() => goToLoginPage(history)}>entrar</SpanStyled>}
                
            </Container2>
        </All>
    )
}