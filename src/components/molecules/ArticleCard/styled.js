import styled from "styled-components";

const Card = styled.div`
  border-radius: 10px;
  border: 0.5px solid rgba(0, 0, 0, 0.2);
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1);
  margin: 0 25px;
`;

const CardImage = styled.img`
  width: 100%;
  max-width: 100%;
  height: 170px;
`;

const CardTitle = styled.h3`
  color: black;
  font-size: 19px;
`;

const CardTanggal = styled.div`
  color: #4bbe9c;
  font-size: 14px;
  font-weight: 600px;
`;

const CardParagraf = styled.div`
  color: #949494;
`;

const CardBody = styled.div`
  padding: 20px;
`;

export { Card, CardImage, CardBody, CardTitle, CardTanggal };
