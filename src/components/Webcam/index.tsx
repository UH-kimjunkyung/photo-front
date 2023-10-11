import { useRef, useState, useCallback } from "react";
import Webcam from "react-webcam";
import * as S from "./style";
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
        <button onClick={capture}>capture</button>
      </>
      {url && (
        <>
          <div>
            <button
              onClick={() => {
                setUrl(null);
              }}
            >
              delete
            </button>
          </div>
          <div>
            <img src={url} alt="Screenshot" />
          </div>
        </>
      )}
    </S.WebcamComponent>
  );
};

export default WebcamComponent;
