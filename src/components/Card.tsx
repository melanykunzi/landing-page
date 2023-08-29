import styled from "styled-components";

interface Testimonial {
  avatar: string;
  fullName: string;
  testimonial: string;
}

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const Container = styled.div`
  width: 340px;
  height: 200px;
  border: 2px solid #DDDD;
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;
  padding: 20px;
  border-radius: 10px;
  justify-content: space-around;
  @media (max-width: 768px) {
    width: 100%;
  }
`
const Image = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 15px;
`
const Name = styled.p`
  font-size: 18px;
  font-weight: 500;
`
const Comment = styled.p`
  font-size: 16px;
  line-height: 25px;
  color: #0B132A;
`
const GroupOne = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`
const GroupTwo = styled.div`
  flex: 4;
  margin-top: 10px;
`
const Star = styled.img`
  width: 15px;
`
const Rate = styled.p`
  font-size: 12px;
`
const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`
function Card({ testimonial }: TestimonialCardProps) {
  return (
    <Container>
      <GroupOne>
        <Row>
          <Image src={testimonial.avatar} alt={testimonial.fullName} />
          <Name>{testimonial.fullName}</Name>
        </Row>
        <Row>
          <Rate>4.5</Rate>
          <Star src='/img/star.png'></Star>
        </Row>
      </GroupOne>
      <GroupTwo>
        <Comment>{testimonial.testimonial}</Comment>
      </GroupTwo>
    </Container>
  );
}

export default Card;
