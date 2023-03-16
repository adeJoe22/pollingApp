import React from "react";
import styled from "styled-components";
import pollData from "../data/pollData.json";

const PostPage = () => {
  const colors = [
    { bg: "crimson", border: "1px solid crimson" },
    { bg: "blue", border: "1px solid blue" },
    { bg: "green", border: "1px solid green" },
  ];

  return (
    <Container>
      <Wrapper>
        <Title>Question page</Title>
        {pollData.map((poll) => {
          const color = colors[parseInt(Math.random() * colors.length)];
          return (
            <PollWrapper>
              <Question>{poll.question}</Question>
              <div>
                {poll.answers.map((answer) => {
                  return (
                    <PollBorder>
                      <PollContent bg={color.bg}>
                        <Votes>{answer.option}</Votes>
                      </PollContent>
                    </PollBorder>
                  );
                })}
              </div>
            </PollWrapper>
          );
        })}
      </Wrapper>
    </Container>
  );
};

export default PostPage;
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
  font-size: 28px;
  font-weight: 800;
`;

const PollWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const Question = styled.h3``;
const Votes = styled.span``;

const PollBorder = styled.div`
  border: ${({ border }) => border};
  width: 100%;
  margin-bottom: 8px;
`;
const PollContent = styled.div`
  background-color: ${({ bg }) => bg};
  padding: 4px;
  overflow-x: visible;
  white-space: nowrap;
  width: ${({ width }) => `${width}%`};
`;
