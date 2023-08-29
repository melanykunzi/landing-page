import styled from "styled-components"
import PriceBox from "./PriceBox"
import { useEffect, useState } from "react"

const Container = styled.div`
    display: flex;
    width: 100%;
    margin-bottom: 50px;
    flex-direction: column;
    align-items: center;
    background: linear-gradient(to bottom, #F8F8F8, #FFFFFF);
    padding-top: 50px;
    @media (max-width: 768px) {
      margin-bottom: 30px;
    }
`
const Titulo = styled.p`
    font-size: 30px;
    color: #0B132A;
    font-weight: bold;
`
const Parrafo = styled.p`
    font-size: 16px;
    line-height: 30px;
    color: #4F5665;
    text-align: center;
`
const Boxes = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 50px;
    align-items: center;
    @media (max-width: 768px) {
      flex-direction: column;
    }
`
interface Plan {
    title: string;
    price: string;
    benefits: string[];
    currency: string;
    type: string;
}
function Pricing() { 
    const [plans, setPlans] = useState<Plan[]>([]);

    useEffect(() => {
      const apiUrl = 'https://6xrb5goi1l.execute-api.us-east-1.amazonaws.com/api/subscription';
  
      fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
          setPlans(data);
        })
        .catch(error => {
          console.error('Error al obtener los datos:', error);
        });
    }, []);
  return (
    <>
        <Container>
            <Titulo>Choose Your Plan</Titulo>
            <br />
            <Parrafo>Let's choose the package that is best for you and explore it happily and<br />cheerfully.</Parrafo>
            <Boxes>
                {plans.map(plan => (
                    <PriceBox
                     planName={plan.title}
                     benefits={plan.benefits}
                     price={plan.price}
                     currency={plan.currency}
                     type={plan.type}
                    />
                ))}
            </Boxes>
        </Container>
    </>
  )
}

export default Pricing