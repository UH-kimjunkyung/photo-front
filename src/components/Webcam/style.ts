import styled from "@emotion/styled";

export const WebcamComponent = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: black;
`;

export const CaptureImg = styled.div`
  position: absolute;
  top: 100px;
  left: 0px;
  width: 230px;
  height: 430px;
  display: flex;
  flex-direction: column;
  border-radius: 12px;
  background: #fff;
  box-shadow: 0px 4px 30px 0px rgba(112, 144, 176, 0.08);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ButtonContainer = styled.div`
  width: 408px;
  height: 86px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const CameraButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 86px;
  height: 86px;
  z-index: 10000000;
  border-radius: 100%;
  background-color: #ffffff;
  cursor: pointer;
`;

export const ImgContainer = styled.div``;
export const TitleBox = styled.div`
  width: 408px;
  height: 90px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
export const Title = styled.div`
  color: #fff;
  font-family: Inter;
  font-size: 34px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
export const Text = styled.div`
  color: rgba(255, 255, 255, 0.8);
  font-family: Inter;
  font-size: 24px;
  font-style: normal;
  font-weight: 200;
  line-height: normal;
  cursor: pointer;
`;
