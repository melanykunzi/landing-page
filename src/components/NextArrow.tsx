import styled from "styled-components";

const SampleNextArrowWrapper = styled.img`
  display: block;
  position: absolute;
  width: 120px;
  cursor: pointer;
  margin-top: -5px;
  margin-left: 800px;

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

function SampleNextArrow(props: ArrowProps) {
  const { onClick } = props;
  return (
    <SampleNextArrowWrapper
      src="/img/right.png"
      onClick={onClick}
    />
  );
}

export default SampleNextArrow;