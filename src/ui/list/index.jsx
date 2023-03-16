import styled from "styled-components";
const List = ({ collection, renderItem = (item) => item }) => {
  return <Wrapper>{collection.map((item) => renderItem(item))}</Wrapper>;
};

export default List;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 8px;
  gap: 10px;
`;
