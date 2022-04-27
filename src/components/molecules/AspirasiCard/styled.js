import styled from "styled-components";

const Card = styled.div`
  border-radius: 10px;
  border: 0.5px solid rgba(0, 0, 0, 0.2);
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1);
  margin: 0 25px;
`;

const CardHeader = styled.div`
  background-color: #4bbe9c;
  height: 50px;
`;

const CardIcon = styled.img`
  height: 50px;
`;

export { Card, CardHeader, CardIcon };
