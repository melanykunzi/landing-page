import styled from 'styled-components'

const Boton = styled.button`
  width: 250px;
  height: 50px;
  background-color: #F53838;
  border: none;
  color: #ffffff;
  font-weight: bold;
  border-radius: 10px;
  font-size: 16px;
  transition: background-color 0.3s;
  cursor: pointer;
  box-shadow: 0px 20px 50px rgba(245, 56, 56, 0.4);
  &:hover {
    background-color: #ffffff;
    color: #F53838;
    border: 1px solid #F53838;
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