import { useRef, useState, useCallback } from "react";
import Webcam from "react-webcam";
import * as S from "./style";
import Image from "next/image";
const videoConstraints = {
  width: 1520,
  height: 860,
  facingMode: "user",
};

const WebcamComponent = () => {
  const webcamRef = useRef<Webcam>(null);
  const [url, setUrl] = useState<string | null>(null);
  const capture = useCallback(() => {
    const imageSrc = webcamRef.current?.getScreenshot();
    if (imageSrc) {
      setUrl(imageSrc);
    }
  }, [webcamRef]);

  return (
    <S.WebcamComponent>
      <header>
        <h1>첫번째 포즈 : ~~~~~~~</h1>
      </header>
      <>
        <div>
          <Webcam
            audio={false}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            videoConstraints={videoConstraints}
          />
        </div>
        <S.Button onClick={capture}>사진 찍기</S.Button>
      </>
      {url && (
        <>
          <div>
            <S.Button
              onClick={() => {
                setUrl(null);
              }}
            >
              다시 찍기
            </S.Button>
            <S.Button
              onClick={() => {
                setUrl(null);
              }}
            >
              다음
            </S.Button>
          </div>
          <S.CaptureImg>
            <Image width={200} height={100} src={url} alt="Screenshot" />
          </S.CaptureImg>
        </>
      )}
    </S.WebcamComponent>
  );
};

export default WebcamComponent;
