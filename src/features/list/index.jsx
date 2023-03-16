import { useState } from "react";
import List from "../../ui/list";
import Poll, { colors } from "../polls";

const PollList = ({ pollData }) => {
  const [_pollData, setPollData] = useState(pollData);

  const handleVote = (pollID, answer) => {
    setPollData((prev) =>
      prev.map((data) =>
        data._id === pollID
          ? {
              ...pollID,
              answers: data.answers.map((_answer) =>
                _answer.option === answer.option
                  ? { ..._answer, votes: _answer.votes + 1 }
                  : _answer
              ),
            }
          : data
      )
    );
  };
  return (
    <List
      {...{
        collection: _pollData,
        renderItem: (data) => {
          const color = colors[parseInt(Math.random() * colors.length)];
          return <Poll {...{ ...data, color, onVoted: handleVote }} />;
        },
      }}
    />
  );
};

export default PollList;
