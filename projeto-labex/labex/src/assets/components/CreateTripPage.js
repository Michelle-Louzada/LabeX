import React from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { useProtectPage } from "../hooks/useProtectPage"
import {baseUrl} from '../constants/axiosConstants'
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select'
import Button from '@material-ui/core/Button';
import { styled } from '@material-ui/styles'
import Grid from '@material-ui/core/Grid'
import useForm from '../hooks/useForm'
import { useState, useEffect } from 'react'
import { InputLabel, FormControl } from '@material-ui/core';

const FormDiv = styled(Grid)({
    display: "grid",
    gap: "1em",
    alignItems: "center",
    justifyItems: "center",
    width: "100vw",
    marginBottom: "50px"
})

const InputField = styled(TextField)({
    width: "30vw",
})

const NamesInputField = styled(TextField)({
    width: "30vw",
})

const DescriptionInputField = styled(TextField)({
    width: "30vw",
})
const SelectOption = styled(Select)({
  width: "30vw",
  backgroundColor: "#FFFFFF",
})


export default function CreateTripPage() {
    const history = useHistory();

    useEffect(() => {
        const token = window.localStorage.getItem("token");
    
        if (token) {
         
        } else {
          history.push("/login");
        }
      }, [history]);

    const { form, onChange, resetState } = useForm({
        nameTrip: "",
        planet: "",
        date: "",
        description: "",
        durationInDays: "",
      });
    
      const handleInputChange = (event) => {
        const { name, value } = event.target;
    
        onChange(name, value);
      };
    
      const createTrip = () => {    
        const body = {
            name: form.nameTrip,
            planet: form.planet,
            date: form.date,
            description: form.description,
            durationInDays: form.durationInDays,
        }
        axios.post(`${baseUrl}/trips`, body , {
            headers: {
              auth: localStorage.getItem("token")
            }
          })
        .then((response) => {
            alert(`viagem criada com sucesso!`)
        })
        .catch((error) => {
           alert(`Surgiu algum erro, por favor insira todas as informações corretamente`)
        })
    
        resetState();
      };

      

    return (
        
        <FormDiv container>
            <h2>Crie uma viagem</h2>
            <NamesInputField type="text" name="nameTrip" variant="outlined" required inputProps={{ pattern: "[A-Za-z]{3,}" }}
            placeholder="nome da viagem" value={form.nameTrip}  onChange={handleInputChange} />
            <FormControl variant="outlined">
                        <InputLabel id="category-label">Planetas</InputLabel>
                        <SelectOption
                            name="planet"
                            labelId="planet-label"
                            label="planet"
                            native
                            variant="outlined"
                            value={form.planet} 
                            onChange={handleInputChange}
                        >
                            <option value=""/>
                            <option value="mercurio">Mercúrio</option>
                            <option value="venus">Vênus</option>
                            <option value="terra">Terra</option>
                            <option value="marte">Marte</option>
                            <option value="jupter">Júpter</option>
                            <option value="saturno">Saturno</option>
                            <option value="urano">Urano</option>
                            <option value="netuno">Netuno</option>
                            <option value="plutao">Plutão</option>
                        </SelectOption>  
                    </FormControl>
            
            <InputField type="date" name="date" variant="outlined" required
            placeholder="data" value={form.date} onChange={handleInputChange} />
            
            <DescriptionInputField type="text" name="description" variant="outlined" 
            multiline rows={10} placeholder={"descrição"} value={form.description} 
            onChange={handleInputChange} required />
            
            <InputField type="number" name="durationInDays" variant="outlined" required
            placeholder="duração em dias" value={form.durationInDays} onChange={handleInputChange} />
            
            <Button 
                variant="contained" 
                color="primary" 
                onClick={createTrip}
            >
                Enviar
            </Button>
        </FormDiv>
    
    )
}