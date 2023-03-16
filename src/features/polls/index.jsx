import styled from "styled-components";
import List from "../../ui/list";

export const colors = [
  { bg: "crimson", border: "1px solid crimson" },
  { bg: "blue", border: "1px solid blue" },
  { bg: "green", border: "1px solid green" },
];

const Poll = ({ _id, color, question, answers = [], onVoted = () => {} }) => {
  return (
    <PollWrapper>
      <Question>{question}</Question>
      <div>
        <List
          {...{
            collection: answers,
            renderItem: (answer) => {
              const max = answers.reduce(
                (acc, answer) => acc + parseInt(answer.votes),
                0
              );
              const { votes, option } = answer;
              const voteWidth = (votes / max) * 100;

              return (
                <PollBorder
                  border={color.border}
                  onClick={() => onVoted(_id, answer)}
                >
                  <PollContent width={voteWidth} bg={color.bg}>
                    <Votes>
                      {option} - {votes}
                    </Votes>
                  </PollContent>
                </PollBorder>
              );
            },
          }}
        />
      </div>
    </PollWrapper>
  );
};

export default Poll;

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
