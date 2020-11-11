import React, { useEffect, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { useProtectPage } from "../hooks/useProtectPage";
import {baseUrl} from '../constants/axiosConstants'
import Styled from 'styled-components'
import CircularProgress from '@material-ui/core/CircularProgress';
import DetailsCandidates from "./DetailsCandidates";
import { useParams} from "react-router-dom";

const All = Styled.div`
    max-width: 1024px;
    margin: 5px auto;
    padding: 0 24px;
    text-align: center;
    display: flex;
    flex-direction: column;
    height: 80vh;
`
const Progress = Styled.div`
    display: flex;
    justify-content: center;
    margin-top: 150px;
    height: 82vh;
    
`

function TripDetailsPage() {
  const params = useParams();
  const [trip, setTrips] = useState([null]);


  const history = useHistory();

  useEffect(() => {
    const token = window.localStorage.getItem("token");

    if (token) {
      getTripDetail();
    } else {
      history.push("/");
    }
  }, [history], []);

  const getTripDetail = () => {
    axios
      .get(`${baseUrl}/trip/${params.id}`, {
        headers: {
          auth: localStorage.getItem("token")
        }
      })
      .then((response) => {
        setTrips(response.data.trip.candidates);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  if (trip === undefined) {
    return (
        <Progress>
            <CircularProgress color="secondary" />
        </Progress>
      )
}
  
  return (
    <All>
      <h2>Candidatos</h2>
      {trip.map((details) => {
          return (
              <All>{details ? <DetailsCandidates info={details} /> : <CircularProgress /> }</All>
          )
      })}
    </All>
  );
}

export default TripDetailsPage;