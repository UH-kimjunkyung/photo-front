import { useEffect, useState } from "react";

import { css } from "@emotion/react";
import useStore from "Stores/StoresContainer";
import * as S from "./style";
import axios from "axios";
import Image from "next/image";
const AiButton: React.FC = () => {
  const { imgUrl } = useStore();
  const [loading, setLoading] = useState(false);
  const [images, setImages] = useState(Array(4).fill(""));

  const getAiImages = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        "https://snap.team-alt.com/v2/image/conversion?image=http://uh-alb-2127268112.ap-northeast-2.elb.amazonaws.com/v2/image/download/preview/4c1df73d-f486-4b17-b2d0-8bea9d822887&text=anime"
      );

      console.log("Response:", response);

      if (response.status === 200) {
        setLoading(false);
        alert("이미지 요청에 성공하였습니다");
        for (let i = 0; i < 4; i++) {
          setImages((prevImages) => {
            const updatedImages = [...prevImages];
            updatedImages[i] = response.data.data.images[i];
            return updatedImages;
          });
        }
        console.log(images);
      } else {
        console.error("Failed to upload images.");
      }
    } catch (error) {
      console.error("Network error:", error);
    }
  };

  return (
    <>
      {loading && (
        <S.AiButtonTitle>Ai 이미지로 변환하는 중이에요···</S.AiButtonTitle>
      )}
      <S.AiButton onClick={getAiImages}>
        <img src="/imgs/333.png" width={74} height={74} />
      </S.AiButton>
    </>
  );
};

export default AiButton;
