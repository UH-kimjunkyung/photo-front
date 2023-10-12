"use client";


import styled from "@emotion/styled";
import { FrameTemplate, ImageFrame } from "components";

const Frame = () => {
  return (
    <Container>
      <FrameTemplate />
      <ImageFrame />
      <ButtonContainer>
        <SubmitBtn>완료</SubmitBtn>
      </ButtonContainer>
    </Container>
  );
};

export default Frame;

const Container = styled.div`
  width: 100vw;
  height: 100vh;

  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 56px;

  padding: 33px;
  box-sizing: border-box;

  background-color: #f5f5f5;
  font-family: Pretendard;
`;

const ButtonContainer = styled.div`
  width: 205px;
  height: 100%;

  display: flex;
  align-items: flex-end;
`;

const SubmitBtn = styled.button`
  width: 100%;
  height: 64px;
  background-color: #809cff;
  color: white;
  font-size: 20px;
  font-weight: 600;

  border-radius: 10px;

  transition: 0.5s cubic-bezier(0.19, 1, 0.22, 1);
  &:active {
    transform: scale(0.97);
  }
`;

