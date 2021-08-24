import styled from "styled-components";
import Title from "../Title";

const StyledTitle = styled(Title)``;

const CardWrapper = styled.div`
  border-radius: 12px;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.25);
  background: cyan;
  width: 50%;
  height: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function Card(props) {
  const classes = "card " + props.className;
  return <CardWrapper className={classes}>{props.children}</CardWrapper>;
}

export default Card;
