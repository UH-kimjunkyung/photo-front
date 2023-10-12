import { useEffect, useState } from "react";

import { css } from "@emotion/react";
import useStore from "Stores/StoresContainer";
import * as S from "./style";
import axios from "axios";
import Image from "next/image";
const AiButton: React.FC = () => {
  const { imgUrl } = useStore();

  const getAiImages = async () => {
    try {
      const response = await axios.get(
        "http://3.34.22.93:8080/v2/image/upload/"
      );

      console.log("Response:", response);

      if (response.status === 200) {
        console.log("Images uploaded successfully!");
      } else {
        console.error("Failed to upload images.");
      }
    } catch (error) {
      console.error("Network error:", error);
    }
  };

  return (
    <S.AiButton onClick={getAiImages}>
      <img src="/imgs/333.png" width={74} height={74} />
    </S.AiButton>
  );
};

export default AiButton;
