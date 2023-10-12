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
  bottom: 100px;
  right: 100px;
  width: 280px;
  height: 280px;
  display: flex;
  border-radius: 12px;
  box-shadow: 0px 4px 30px 0px rgba(112, 144, 176, 0.08);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: wrap;
`;

export const ButtonContainer = styled.div`
  width: 408px;
  height: 86px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  top: 100px;
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

export const ImgContainer = styled.div`
  width: 132px;
  height: 132px;
  border-radius: 4px;
  border: 7px solid #fff;
`;

export const SecondImgContainer = styled.div`
  width: 132px;
  height: 132px;
  border-radius: 4px;
  border: 7px solid #fff;
`;
export const Second = styled.div`
  width: 280px;
  height: 132px;
  justify-content: space-between;
  position: absolute;
  top: 220px;
  display: flex;
`;
export const First = styled.div`
  width: 280px;
  height: 132px;
  justify-content: space-between;
  position: absolute;
  display: flex;
`;
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
