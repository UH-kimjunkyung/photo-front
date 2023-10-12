import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { getImage } from "apis/getImage";
import useStore from "Stores/StoresContainer";
import { css } from "@emotion/react";

const ImgFrame = () => {
  const [imageData, setImageData] = useState<any>();
  const { frameStyle, setFrameStyle } = useStore();

  const getImages = async () => {
    const res = await getImage();

    setImageData(res);
    console.log(res);
  };

  useEffect(() => {
    getImages();
  }, []);

  return (
    <Container data={frameStyle.data} type={frameStyle.type}>
      <ImgContainer>
        <Img src={imageData} />
      </ImgContainer>
    </Container>
  );
};

export default ImgFrame;

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
`;

const Img = styled.img`
  width: 400px;
  height: 275px;

  border-radius: 8px;
  background-size: cover;
`;
