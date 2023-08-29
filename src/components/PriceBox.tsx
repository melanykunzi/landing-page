import React from "react";
import styled from "styled-components"
import Button from "./ButtonOne"

interface PriceBoxProps {
    planName: string;
    benefits: string[];
    price: string;
    currency: string;
    type: string;
}
  
interface LineaProps {
    index: number;
}

function Linea({ children }: React.PropsWithChildren<LineaProps>) {
    return (
      <LineaContainer>
        <Check src="./img/check2.png" />
        {children}
      </LineaContainer>
    );
}

const Container = styled.div`
    width: 250px;
    height: 650px;
    border: 2px solid #DDDDDD;
    background-color: #ffffff;
    border-radius: 7px;
    margin: 20px;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding-top: 50px;
    padding-bottom: 30px;
    transition: border-color 0.3s ease;
    &:hover {
        border-color: #F53838;
    }
`
const Image = styled.img`
    width: 110px;
`
const Plan = styled.p`
    font-size: 18px;
    font-weight: 500;
    margin-top: 30px;
    color: #0B132A;
    margin-bottom: 30px;
`
const LineaContainer = styled.div`
    width: 200px;
    height: 30px;
    display: flex; 
    flex-direction: row;
    align-items: center;
    font-size: 14px;
    color: #4F5665;
    margin-bottom: 10px;
`
const Check = styled.img`
    width: 27px;
    margin-right: 15px;
`
const Price = styled.p`
    font-size: 21px;
    font-weight: 500;
    color: #0B132A;
`
const BoxPrice = styled.div`
    width: 200px;
    display: flex;
    flex-direction: row;
    margin-top: 50px;
    margin-bottom: 20px;
    align-items: center;
    justify-content: center;
    margin-top: auto;
`
const Month = styled.p`
    font-size: 21px;
    color: #4F5665;
    margin-left: 10px;
`
function PriceBox(props: PriceBoxProps) {
    const { planName, benefits, price, currency} = props;
  return (
    <div>
    <Container>
      <Image src="./img/box.png" alt="" />
      <Plan>{planName}</Plan>
      {benefits.map((benefit, index) => (
        <Linea key={index} index={index}>{benefit}</Linea>
      ))}
      <BoxPrice>
        <Price>{price}</Price>
        <Month>{currency}</Month>
        {price !== "Free" && <Month>/ mo</Month>}
      </BoxPrice>
      <Button text="Select" />
    </Container>
    </div>
  )
}

export default PriceBox