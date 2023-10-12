import { useRef, useState, useCallback, useEffect } from "react";
import Webcam from "react-webcam";
import * as S from "./style";
import Image from "next/image";
import axios from "axios";
import { useRouter } from "next/navigation";
import * as I from "assets";
import { AiButton } from "components";

const videoConstraints = {
  width: 1520,
  height: 860,
  facingMode: "user",
};

const WebcamComponent = () => {
  const webcamRef = useRef<Webcam>(null);
  const [capturedImages, setCapturedImages] = useState<string[]>([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imageTitle, setImgTitle] = useState("첫번째");
  const { replace } = useRouter();

  const capture = useCallback(async () => {
    const imageSrc = webcamRef.current?.getScreenshot();
    if (imageSrc) {
      setCapturedImages((prevImages) => {
        const updatedImages = [...prevImages];
        updatedImages[currentImageIndex] = imageSrc;
        return updatedImages;
      });

      if (currentImageIndex < 3) {
        setCurrentImageIndex(currentImageIndex + 1);
      }
      if (currentImageIndex < 4) {
        switch (currentImageIndex) {
          case 0:
            setImgTitle("첫번째");
            break;
          case 1:
            setImgTitle("두번째");
            break;
          case 2:
            setImgTitle("세번째");
            break;
          case 3:
            setImgTitle("네번째");
            break;
          default:
            setImgTitle("");
        }
      }
    }
  }, [webcamRef, currentImageIndex]);

  const resetCapture = () => {
    setCapturedImages([]);
    setCurrentImageIndex(0);
  };

  const sendImages = async () => {
    if (capturedImages.length < 4) {
      console.error("Not enough images to send.");
      return;
    }

    const formData = new FormData();
    for (let i = 0; i < 4; i++) {
      if (capturedImages[i]) {
        const blobImage = await fetch(capturedImages[i]).then((response) =>
          response.blob()
        );
        formData.append(`image${i + 1}`, blobImage, `image${i}.jpg`);
      }
    }

    try {
      const response = await axios.post(
        "http://3.34.22.93:8080/v2/image/upload/",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log("Response:", response);

      if (response.status === 200) {
        console.log("Images uploaded successfully!");
        replace("/frame");
      } else {
        console.error("Failed to upload images.");
      }
    } catch (error) {
      console.error("Network error:", error);
    }
  };

  return (
    <S.WebcamComponent>
      <S.TitleBox>
        <S.Title>{imageTitle} 포즈</S.Title>
        <S.Text>두 손을 모아 하트 모양을 만들어 보세요 !</S.Text>
      </S.TitleBox>
      <div>
        <Webcam
          audio={false}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          videoConstraints={videoConstraints}
        />
      </div>
      <S.ButtonContainer>
        <S.Text onClick={resetCapture}>다시 찍기</S.Text>
        <S.CameraButton onClick={capture}>
          <I.CameraIcon />
        </S.CameraButton>
        <S.Text onClick={sendImages}>사진 보내기</S.Text>
      </S.ButtonContainer>
      <S.CaptureImg>
        {capturedImages.map((image, index) => (
          <S.ImgContainer key={index}>
            <Image
              width={200}
              height={100}
              src={image}
              alt={`Screenshot ${index}`}
            />
          </S.ImgContainer>
        ))}
      </S.CaptureImg>
    </S.WebcamComponent>
  );
};

export default WebcamComponent;
