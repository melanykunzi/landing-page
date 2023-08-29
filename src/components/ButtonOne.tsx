import styled from 'styled-components'

const Boton = styled.button`
  width: 150px;
  height: 45px;
  border: 1px solid #F53855;
  background-color: #ffffff;
  color: #F53855;
  font-weight: bold;
  border-radius: 70px;
  font-size: 15px;
  transition: background-color 0.3s;
  cursor: pointer;
  &:hover {
    background-color: #F53855;
    color: #ffffff;
  }

`
type Buttonprops = {
  text: string;
}

function Button(props: Buttonprops) {
  return (
    <div>
        <Boton>{props.text}</Boton>
    </div>
  )

}

export default Button