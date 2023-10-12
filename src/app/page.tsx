"use client";

import styled from "@emotion/styled";
import { KeywordForm } from "components";

export default function Home() {
  return (
    <Container>
      <KeywordForm />
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #f5f5f5;
  font-family: Pretendard;

  border-radius: 12px;
`;
