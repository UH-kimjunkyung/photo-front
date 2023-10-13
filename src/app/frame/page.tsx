"use client";
import React, { useEffect, useState, useRef } from "react";
import styled from "@emotion/styled";
import axios from "axios";
import { FrameTemplate, ImageFrame, AiButton } from "components";
import useStore from "Stores/StoresContainer";
import ReactToPrint from "react-to-print";

const Frame = () => {
  const componentRef = useRef(null);
  const { imgUrl, aiImgUrl, preview, setVisible, visible } = useStore();
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [aiImages, setAiImages] = useState<string[]>([]);

  return (
    <Container>
      <FrameTemplate />
      <div onClick={() => setVisible(false)}>
        <ReactToPrint
          trigger={() => <Print>프린트하기</Print>}
          content={() => componentRef.current}
        />
      </div>
      <div ref={componentRef}>
        <ImageFrame />
      </div>
      <ButtonContainer />
    </Container>
  );
};

export default Frame;

const Color = styled.div`
  width: 74px;
  min-height: 74px;
  display: flex;

  border-radius: 999px;

  background-color: red;
  position: absolute;
  box-shadow: 0 4px 20px 0 rgba(112, 144, 176, 0.4);
  top: 532px;
  left: 370px;
  cursor: pointer;

  &:active {
    transform: scale(0.9);
  }
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
`;
const Print = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  cursor: pointer;
  width: 74px;
  height: 74px;
  border-radius: 100%;
  background-color: #809cff;
  color: white;
  right: 300px;
  bottom: 100px;
  box-shadow: 0 4px 30px 0 rgba(112, 144, 176, 0.1);
`;

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
  font-family: "Pretendard";
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
