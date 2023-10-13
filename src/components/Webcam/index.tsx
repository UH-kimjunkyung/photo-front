import { useRef, useState, useCallback, useEffect } from "react";
import Webcam from "react-webcam";
import * as S from "./style";
import Image from "next/image";
import axios from "axios";
import { useRouter } from "next/navigation";
import * as I from "assets";
import { AiButton } from "components";
import useStore from "Stores/StoresContainer";

const videoConstraints = {
  width: 910,
  height: 494,
  facingMode: "user",
};

const WebcamComponent = () => {
  const { gptresData } = useStore();
  const webcamRef = useRef<Webcam>(null);
  const [capturedImages, setCapturedImages] = useState<string[]>([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imageTitle, setImgTitle] = useState("첫번째");
  const [title, setTitle] = useState(gptresData);
  const [responseImg, setResponseImg] = useState<string[]>([]);
  const { replace } = useRouter();
  const steps = title.split("\n");
  const step1 = steps[0];
  const step2 = steps[1];
  const step3 = steps[2];
  const step4 = steps[3];
  const [desc, setDesc] = useState(step1);
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
            setImgTitle("두번째");
            setDesc(step2);
            break;
          case 1:
            setImgTitle("세번째");
            setDesc(step3);
            break;
          case 2:
            setImgTitle("네번째");
            setDesc(step4);
            break;
          case 3:
            setImgTitle("네번째");
            setDesc(step4);
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
        "http://uh-alb-2127268112.ap-northeast-2.elb.amazonaws.com/v2/image/upload/",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.status === 200) {
        const newResponseImg = [];

        for (let i = 0; i < 4; i++) {
          newResponseImg[i] = response.data.data[i];
        }

        setImgUrl([...newResponseImg]);
        console.log(imgUrl);
      } else {
        console.error("Failed to upload images.");
      }
    } catch (error) {
      console.error("Network error:", error);
    }
  };
  const { imgUrl, setImgUrl } = useStore();
  useEffect(() => {
    if (imgUrl[0]) {
      replace("/frame");
    }
  }, [imgUrl]);

  return (
    <S.WebcamComponent>
      <S.TitleBox>
        <S.Title>{imageTitle} 포즈</S.Title>
        <S.Text>{desc}</S.Text>
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
        <S.First>
          {capturedImages.map((image, index) =>
            index === 0 || index === 1 ? (
              <S.ImgContainer key={index}>
                <Image
                  width={117}
                  height={117}
                  src={image}
                  alt={`Screenshot ${index}`}
                />
              </S.ImgContainer>
            ) : null
          )}
        </S.First>
        <S.Second>
          {capturedImages.map((image, index) =>
            index === 2 || index === 3 ? (
              <S.SecondImgContainer key={index}>
                <Image
                  width={117}
                  height={117}
                  src={image}
                  alt={`Screenshot ${index}`}
                />
              </S.SecondImgContainer>
            ) : null
          )}
        </S.Second>
      </S.CaptureImg>
    </S.WebcamComponent>
  );
};

export default WebcamComponent;
