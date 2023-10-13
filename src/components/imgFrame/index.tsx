"use client";
import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { getImage } from "apis/getImage";
import useStore from "Stores/StoresContainer";
import { css } from "@emotion/react";
import axios from "axios";
import { AiButton } from "components";
import { useDidMountEffect } from "hooks/useDidMountEffect";

const ImgFrame = () => {
  const { imgUrl, aiImgUrl, preview, visible } = useStore();
  const [images, setImages] = useState<string[]>([]);
  const [aiImages, setAiImages] = useState<string[]>([]);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    setInterval(() => 5000);
    const getImages = async () => {
      try {
        const newImages = [];
        for (let i = 0; i < 4; i++) {
          const response = await axios.get(
            `https://snap.team-alt.com/v2/image/download/preview/${imgUrl[i].uuid}`,
            {
              responseType: "blob",
            }
          );
          newImages[i] = response.request.responseURL;
        }
        setImages(newImages);
      } catch (error) {
        console.error("Network error:", error);
      }
    };

    getImages();
  }, []);

  const [loading, setLoading] = useState(false);
  const getAiImages = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `https://snap.team-alt.com/v2/image/conversion?image=https://snap.team-alt.com/v2/image/download/preview/${imgUrl[0].uuid}&text=anime`
      );

      console.log("Response:", response);

      if (response.status === 200) {
        setLoading(false);
        setSuccess(true);
        alert("이미지 요청에 성공하였습니다");
      } else {
        console.error("Failed to upload images.");
      }

      setAiImages(response.data.data.images);
    } catch (error) {
      setSuccess(false);
      console.error("Network error:", error);
    }
  };
  const getAi2dImg = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `https://snap.team-alt.com/v2/image/conversion?image=https://snap.team-alt.com/v2/image/download/preview/${imgUrl[0].uuid}&text=2d style, pixel`
      );

      console.log("Response:", response);

      if (response.status === 200) {
        setLoading(false);
        setSuccess(true);
        alert("이미지 요청에 성공하였습니다");
      } else {
        console.error("Failed to upload images.");
      }

      setAiImages(response.data.data.images);
    } catch (error) {
      setSuccess(false);
      console.error("Network error:", error);
    }
  };

  const { frameStyle, setFrameStyle } = useStore();

  return (
    <Container data={frameStyle.data} type={frameStyle.type}>
      {loading && (
        <>
          <AiButtonTitle>Ai 이미지로 변환하는 중이에요···</AiButtonTitle>
        </>
      )}
      <ImgContainer>
        {success === true ? (
          <>
            {aiImages.length > 0 &&
              aiImages.map((e: string, index) => {
                return <Img src={e} key={e} />;
              })}
          </>
        ) : (
          <>
            {preview.map((e: string, index) => {
              if (index >= 0) {
                return <Img src={e} key={e} />;
              } else {
                return null;
              }
            })}
          </>
        )}
      </ImgContainer>
      {visible && (
        <>
          <div onClick={getAiImages}>
            <AiButton />
          </div>
          <div onClick={getAi2dImg}>
            <Color>
              <img width={74} height={74} src="imgs/어몽어스.webp" />
            </Color>
          </div>
        </>
      )}
      <Title data={frameStyle.data} type={frameStyle.type}>
        SNAP
      </Title>
    </Container>
  );
};

export default ImgFrame;
const Color = styled.div`
  width: 74px;
  min-height: 74px;
  display: flex;

  border-radius: 999px;

  background-color: red;
  position: absolute;
  box-shadow: 0 4px 20px 0 rgba(112, 144, 176, 0.4);
  top: 510px;
  left: 395px;
  cursor: pointer;

  &:active {
    transform: scale(0.9);
  }
`;

const Container = styled.div<{ data: string; type: string }>`
  width: 1120px;
  height: 700px;

  padding: 50px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;

  ${({ data, type }) =>
    type === "color"
      ? css`
          background-color: ${data};
        `
      : css`
          background-image: url("${data}");
        `}

  border-radius: 12px;
  box-shadow: 0 4px 30px 0 rgba(112, 144, 176, 0.1);

  transition: 0.5s cubic-bezier(0.19, 1, 0.22, 1);
`;

const ImgContainer = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 1fr;
  grid-gap: 32px;
  position: relative;
  right: 50px;
`;

const Img = styled.img`
  width: 400px;
  height: 275px;

  border-radius: 8px;
  background-size: cover;
`;
const AiImg = styled.div``;

const AiButtonTitle = styled.div`
  position: absolute;
  top: 230px;
  left: 1000px;
  color: #809cff;

  font-family: Inter;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

const Title = styled.div<{ data: string; type: string }>`
  transform: rotate(-90deg);
  ${({ data, type }) =>
    type === "color"
      ? css`
          color: ${data};
          filter: invert();
        `
      : css`
          color: #9ccaff;
        `}

  font-family: Inter;
  font-size: 36px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;
