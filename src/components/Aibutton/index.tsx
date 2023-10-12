import { useEffect, useState } from "react";

import { css } from "@emotion/react";
import useStore from "Stores/StoresContainer";
import * as S from "./style";
import axios from "axios";
import Image from "next/image";
const AiButton: React.FC = () => {
  const { imgUrl, setAiImgUrl } = useStore();
  const [loading, setLoading] = useState(false);
  const [images, setImages] = useState(Array(4).fill(""));

  return (
    <>
      <S.AiButton>
        <img src="/imgs/333.png" width={74} height={74} />
      </S.AiButton>
    </>
  );
};

export default AiButton;
