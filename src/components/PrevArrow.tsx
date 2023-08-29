import styled from "styled-components";

const SamplePrevArrowWrapper = styled.img`
  position: absolute;
  display: block;
  width: 50px;
  cursor: pointer;
  margin-top: 270px;
  margin-left: 750px;

  @media (max-width: 768px) {
    visibility: hidden;
    margin-left: 0px;
  }
`;

interface ArrowProps {
    className?: string;
    style?: React.CSSProperties;
    onClick?: React.MouseEventHandler<HTMLDivElement>;
}

function SamplePrevArrow(props: ArrowProps) {
    const { onClick } = props;
  
    return (
      <SamplePrevArrowWrapper
        src="/img/left.png"
        onClick={onClick}
      />
    );
  }

export default SamplePrevArrow;