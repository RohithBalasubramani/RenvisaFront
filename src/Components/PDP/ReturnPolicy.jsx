import React from "react";
import styled from "styled-components";
import { ReactComponent as DamageIcon } from "../../Assets/PDP/DamagedProdIcon.svg";
import { ReactComponent as DefIcon } from "../../Assets/PDP/DefectiveProdIcon.svg";
import { ReactComponent as ThirtyIcon } from "../../Assets/PDP/ThirtyDayReturnIcon.svg";
import { ReactComponent as WrongProd } from "../../Assets/PDP/WrongProdIcon.svg";

const Container = styled.div`
  display: flex;
  padding-top: 3vh;
  padding-bottom: 3vh;
  background: #ffffff;
`;

const CardInfo = styled.div`
  margin-left: auto;
  margin-right: 0%;
  z-index: 3;
  opacity: 0;
  flex: 0;
  overflow: hidden;
  border-left: 4px;
  border-left-color: grey;
  border-left-style: dashed;
  padding: 1vh;
`;

const Card = styled.div`
  transition: 0.5s;
  display: block;
  opacity: 1;
  padding-left: 2vh;
  padding-right: 2vh;
  flex: 1;
  padding-bottom: 1vh;
  color: var(--gray-1, #333);
  text-align: center;
  font-family: Lexend;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-transform: capitalize;
`;
const CardCont = styled.div`
  background-color: #fafdff;
  display: flex;
  width: 22%;
  height: 30vh;
  margin: 2vh;
  margin-bottom: 3vh;
  transition: 0.5s;
  overflow: hidden;
  padding-bottom: 2vh;
  padding-top: 2vh;
  color: #4f4f4f;

  border-radius: 8px;
  padding: 32px 16px 32px 16px;

  &:hover {
    background-color: #fff8eb;
    cursor: pointer;
  }
`;

const ReturnPolicy = () => {
  return (
    <>
      <Container>
        <CardCont>
          <Card>
            <DamageIcon sx={{ paddingBottom: "2vh" }} />
            <br />
            <br />
            Easy
            <br />
            Replacement{" "}
          </Card>
        </CardCont>

        <CardCont>
          <Card>
            <DefIcon />
            <br />
            <br />
            Shipping
          </Card>
        </CardCont>

        <CardCont>
          <Card>
            <ThirtyIcon />
            <br />
            <br />
            Support
          </Card>
        </CardCont>

        <CardCont>
          <Card>
            <WrongProd />
            <br />
            <br />
            Quality
          </Card>
        </CardCont>
      </Container>
    </>
  );
};

export default ReturnPolicy;
