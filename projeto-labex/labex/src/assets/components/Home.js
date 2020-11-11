import React from "react";
import styled from "styled-components"
import Carousel from 'react-elastic-carousel'
import Cosmos from '../imgs/cosmos.jpg'
import Cosmos2 from '../imgs/cosmos1.jpg'
import Saturno from '../imgs/jupter.jpg'
import Marte from '../imgs/marte.jpg'
import Saturno2 from '../imgs/saturno.jpg'
import amostra from '../imgs/amostra-1.jpg'
import amostra2 from '../imgs/amostra2.png'
import pessoa from '../imgs/pessoa-1.jpg'
import pessoa2 from '../imgs/pessoa2.jpg'
import pessoa3 from '../imgs/pessoa3.jpg'
import Rating from '@material-ui/lab/Rating';
import Paper from '@material-ui/core/Paper';

const ContainerHome = styled.div`
    max-width: 1024px;
    margin: 24px auto;
    padding: 0 24px;
    text-align: center;
`

const SlideShow = styled.div`
    margin: 2em 0em 2em 0em;
    padding: 2vw;
    width: 950px;
    height: 280px;
    display: flex;
    align-items: center;
    
    `
const Img = styled.img`
    width: 820px;
    height: 300px;
    border-radius: 10px;
`
const ImgAmost = styled.img`
    border-radius: 10px;
    width: 400px;
    border: 1px solid black;
    height: 350px;
    margin: 50px 30px;
    
`
const ContainerRating = styled.div`
    width: 300px;
    height: 300px;
    border: solid 1px #EEE9E9;
    border-radius: 10px;
    margin: 35px 10px;
    text-align: center;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    
`
const ImgAvatar = styled.img`
    width: 100px;
    height: 100px;
    border-radius:50%;
    margin: 20px;
`
const Container1 = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 80px;
`
export default function Home() {

    return (
        <ContainerHome> 
                <SlideShow>
                    <Carousel  itemsToShow={1} enableAutoPlay>
                        <Img src={Cosmos} />
                        <Img src={Cosmos2} />
                        <Img src={Saturno} />
                        <Img src={Marte} />
                        <Img src={Saturno2} />
                    </Carousel>
                </SlideShow>
                <h3>Viagem em segurança e conforto com a maior e melhor equipe de vôo da América Latina </h3>
                <ImgAmost src={amostra} />
                <ImgAmost src={amostra2} />
                <Container1>
                    <ContainerRating>
                        <ImgAvatar src={pessoa} />
                        <p>foi incrivel, a melhor experiencia da minha vida</p>
                        <Rating name="half-rating-read" defaultValue={5} precision={0.5} readOnly />
                    </ContainerRating>
                    <ContainerRating>
                        <ImgAvatar src={pessoa2} />
                        <p>O serviço é de qualidade não me arrependo</p>
                        <Rating name="half-rating-read" defaultValue={4} precision={0.5} readOnly />
                    </ContainerRating>
                    <ContainerRating>
                        <ImgAvatar src={pessoa3} />
                        <p>Quero um replay, foi tudo maravilhoso, recomendo muito</p>
                        <Rating name="half-rating-read" defaultValue={5} precision={0.5} readOnly />
                    </ContainerRating>
                </Container1>
                
        </ContainerHome> 
    )
}