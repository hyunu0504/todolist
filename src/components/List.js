import { useContext } from "react";
import styled from "styled-components";
import { setContext } from "../UseContext";

// styled.components 시작
const ListContainer = styled.div`
  border-radius: 15px;
  background-color: ${({ darkMode }) =>
    darkMode ? "rgb(37, 38, 43);" : "#eee"};
`;

const ListItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 10px;
  padding-bottom: 10px;
  margin-bottom: 15px;
  padding-right: 15px;
  padding-left: 15px;
  color: ${({ darkMode, toggle }) => (darkMode && toggle ? "red" : "blue")};
  @media screen and (max-width: 1023px) {
    flex-wrap: wrap;
  }
`;

const ImgSytle = styled.img`
  width: 30px;
  height: 30px;
  cursor: pointer;
  @media screen and (max-width: 1023px) {
    order: 0;
    margin: 0 auto;
    padding-bottom: 10px;
  }
`;

const ListText = styled.div`
  text-decoration: ${({ toggle }) =>
    toggle ? "line-through grey 1px double" : "none"};
  color: ${({ toggle }) => (toggle ? "grey" : "green")};
  @media screen and (max-width: 1023px) {
    order: 1;
    width: 100%;
    text-align: center;
    padding-top: 10px;
    padding-bottom: 20px;
    border-top: ${({ darkMode }) =>
      darkMode ? "solid 2px black" : "solid 2px white"};
  }
`;
// styled.components 끝

export default function List({ taskValue, listClass, toggle }) {
  const { list, dispatchList } = useContext(setContext);
  const removeList = () => {
    dispatchList({ type: "remove-list", listId: { listClass } });
    if (toggle === true) {
      dispatchList({ type: "remove-list2", listId: { listClass } });
    }
  };

  const checkList = () => {
    dispatchList({ type: "check-list", listId: { listClass } });
    if (toggle === true) {
      dispatchList({ type: "check-list2", listId: { listClass } });
    } else if (toggle === false) {
      dispatchList({ type: "check-list3", listId: { listClass } });
    }
  };

  return (
    <ListContainer darkMode={list.darkMode}>
      <ListItem darkMode={list.darkMode} toggle={toggle}>
        <ImgSytle
          src={toggle ? "corretCheckBox.png" : "emptyBox.png"}
          onClick={checkList}
        />
        <ListText darkMode={list.darkMode} toggle={toggle}>
          {taskValue}{" "}
        </ListText>
        <ImgSytle src="trash.png" onClick={removeList} />
      </ListItem>
    </ListContainer>
  );
}
