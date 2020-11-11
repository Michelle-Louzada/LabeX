import React, {useEffect, useState} from 'react'
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select'
import Button from '@material-ui/core/Button';
import { styled } from '@material-ui/styles'
import Grid from '@material-ui/core/Grid'
import { InputLabel, FormControl } from '@material-ui/core';
import axios from "axios"
import { baseUrl } from "../constants/axiosConstants"
import useForm from '../hooks/useForm'
import { useParams, useHistory } from "react-router-dom";
import { goToTripPage } from '../router/goToPages';

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
})

export default function ApplicationFormPage() {
    const params = useParams();
    const history = useHistory()
    const { form, onChange, resetState } = useForm({
        name: "",
        age: "",
        profession: "",
        applicationText: "",
        // country: "",
      });
    
    const handleInputChange = (event) => {
       
        const { name, value } = event.target;

        onChange(name, value);
      };
    
    const handleSubmittion = () => {    
        const body = {
            name: form.name,
            age: form.age,
            applicationText: form.applicationText,
            profession: form.profession,
            country: selectedCountry
        }
        axios.post(`${baseUrl}/trips/${params.id}/apply`, body)
        .then((response) => {
            alert(`Sua inscrição foi realizada com sucesso!`)
            goToTripPage(history)
        })
        .catch((error) => {
            alert(`Algo de errado não esta certo`)
        })
    
        resetState();
      };

    const [countryList, setCountryList] = useState()
    const [selectedCountry, setSelectedCountry] = useState()

        const getCountry = () => {
          axios.get("https://restcountries.eu/rest/v2/all")
          .then((response) => {
            setCountryList(response.data)

          })
          .catch((error) => {
              console.log(error)
          })
      }

      useEffect(() => {
        getCountry()
      }, [] );

    const onChangeCountry = (event) => {
        setSelectedCountry(event.target.value)
    }

    return (
        <div>
            <FormDiv container>
                <h2>Inscrição</h2>
                <NamesInputField type="text" name="name" variant="outlined" required inputProps={{ pattern: "[A-Za-z]{3,}", }}
                placeholder="Nome" value={form.name} onChange={handleInputChange}   /> 
                
                <InputField type="number" name="age" variant="outlined" required  inputProps={{ type: "number" }}
                placeholder="Idade" value={form.age} onChange={handleInputChange} />
                
                <InputField type="text" name="profession" variant="outlined" required
                placeholder="Profissão" value={form.profession} onChange={handleInputChange} />
                
                <DescriptionInputField type="text" name="applicationText" variant="outlined" 
                multiline rows={10} placeholder={"Conte-nos sua motivação"} value={form.applicationText} 
                onChange={handleInputChange} required />
        
                    <FormControl variant="outlined">
                        <InputLabel id="category-label">Pais</InputLabel>
                        <SelectOption
                            name={selectedCountry}
                            labelId="country-label"
                            label="country"
                            native
                            variant="outlined"
                            value={selectedCountry}
                            onChange={onChangeCountry}
                        >
                            <option value="" ></option>
                            {countryList && countryList.map((c) => {
                                return (                          
                                    <option key={c.id} value={c.name}>{c.name}</option>
                                )
                            })}   
                        </SelectOption>  
                    </FormControl>   
                <Button 
                    variant="contained" 
                    color="primary" 
                    onClick={handleSubmittion}
                >
                    Enviar
                </Button>
            </FormDiv>
        </div>
    )
}

