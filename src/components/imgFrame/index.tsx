import styled from "@emotion/styled";

const ImgFrame = () => {
  return (
    <Container>
      <ImgContainer></ImgContainer>
    </Container>
  );
};

export default ImgFrame;

const Container = styled.div`
  width: 1120px;
  height: 700px;

  padding: 50px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 12px;
  box-shadow: 0 4px 30px 0 rgba(112, 144, 176, 0.1);
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
`;
