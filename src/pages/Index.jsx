import React from "react";
import styled from "styled-components";
import pollData from "../data/pollData.json";
import PollList from "../features/list";

const Homepage = () => {
  return (
    <Container>
      <Wrapper>
        <Title>CodeLab Polling App</Title>
        <PollList {...{ pollData }} />
      </Wrapper>
    </Container>
  );
};

export default Homepage;

const Container = styled.div`
  margin-top: 10px;
  padding: 30px 50px;
  margin: 0 auto;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 8px;
  gap: 10px;
`;

const Title = styled.h1`
  font-size: 32px;
  font-weight: 800;
`;
