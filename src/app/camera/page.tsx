"use client";
import { WebcamComponent } from "components";
import * as S from "styles/style";

export default function Home() {
  return (
    <div>
      <S.CameraPage>
        <WebcamComponent />
      </S.CameraPage>
    </div>
  );
}
