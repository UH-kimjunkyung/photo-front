"use client";

import styled from "@emotion/styled";
import { FrameTemplate } from "components";

const Frame = () => {
  return (
    <Container>
      <FrameTemplate />
    </Container>
  );
};

export default Frame;

const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #f5f5f5;
  font-family: Pretendard;
`;
