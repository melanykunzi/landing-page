import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import styled from 'styled-components';


const schema = yup.object({
  email: yup.string().email().required(),
  message: yup
    .string()
    .min(10, 'This field must have a minimum of 10 characters.')
    .max(200, 'El mensaje debe tener como máximo 200 carácteres')
    .required(),
  fullName: yup
    .string()
    .min(10, 'This field must have a minimum of 10 characters.')
    .max(25, 'El nombre debe tener como máximo 25 carácteres')
    .required(),
  phone: yup
    .string()
    .min(9, 'This field must have a minimum of 9 characters.')
    .max(15, 'El número de teléfono debe tener como máximo 15 carácteres')
    .required(),
}).required();

type FormData = yup.InferType<typeof schema>;

const Container = styled.div`
  width: 100%;
  max-width: 400px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  text-align: center;
  border-radius: 10px;
  box-shadow: 0px 20px 50px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin-top: 50px;
`;

const Titulo = styled.p`
  font-size: 24px;
  color: #0b132a;
  font-weight: 500;
  margin-top: 10px;
  margin-bottom: 20px;
`;

const Form = styled.form`
  width: 100%;
`;

const Group = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 10px;
`;

const Column = styled.div`
  flex: 1;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Error = styled.span`
  color: #f53838;
  font-size: 14px;
  margin-top: 4px;
`;

const Boton = styled.input`
  width: 100%;
  padding: 10px;
  background-color: #f53838;
  border: none;
  color: #ffffff;
  font-weight: bold;
  border-radius: 5px;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.3s;
  &:hover {
    background-color: #d33737;
  }
`;
const GroupTwo = styled.div`
  margin-bottom: 10px;
`
function Forms() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      const response = await fetch('https://6xrb5goi1l.execute-api.us-east-1.amazonaws.com/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
  
      if (response.ok) {
        console.log('Data sent successfully to the backend');
        reset();
      } else {
        console.log('Error sending data to the backend');
      }
    } catch (error) {
      console.error('An error occurred while sending data:', error);
    }
  };

  return (
    <Container>
      <Titulo>Contact Us!</Titulo>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Group>
          <Column>
            <Input placeholder="Your Name" {...register('fullName')} />
            {errors.fullName && <Error>{errors.fullName.message}</Error>}
          </Column>
          <Column>
            <Input placeholder="Your Number" {...register('phone')} />
            {errors.phone && <Error>{errors.phone.message}</Error>}
          </Column>
        </Group>
        <GroupTwo>
            <Input placeholder="Example@gmail.com" {...register('email')} />
            {errors.email && <Error>This field is required</Error>}
        </GroupTwo>
        <GroupTwo>
            <Input placeholder="Message" {...register('message')} />
            {errors.message && <Error>{errors.message.message}</Error>}
        </GroupTwo>
        <Boton type="submit" value="Submit" />
      </Form>
    </Container>
  );
}

export default Forms;
