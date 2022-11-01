import styled from "styled-components";
const ListLiBox = styled.li``;
const ListItem = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 23px;
  width: 500px;
  margin-bottom: 10px;
`;
const ColorBox = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 30%;
  ${(props) => {
    switch (props.colorNum) {
      case "red":
        return `background-color: red`;
      case `blue`:
        return `background-color: blue`;
    }
  }};
`;

const MintItem = ({data}) => {
  return (
    <>
      <ListLiBox >
        <ListItem>
          <p>{data.id} )</p>
          <ColorBox colorNum={data.colorNum}></ColorBox>
          <p>{data.hash}</p>
          <p>level : {data.level}</p>
        </ListItem>
      </ListLiBox>
    </>
  );
};

export default MintItem;
