import React from "react";
import pollData from "./../data/pollData.json";
const isObject = (x) => typeof x === "object" && typeof x !== null;

const RecursiveComponent = ({ data }) => {
  if (!isObject(data)) {
    return <li>{data}</li>;
  }

  const pairs = Object.entries(data);

  return (
    <>
      {pairs.map(([key, value]) => (
        <li>
          {key}:
          <ul>
            <RecursiveComponent data={value} />
          </ul>
        </li>
      ))}
    </>
  );
};

const Testpage = () => {
  return (
    <div>
      <RecursiveComponent data={pollData} />
    </div>
  );
};

export default Testpage;
