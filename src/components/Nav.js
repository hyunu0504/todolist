import { useContext } from "react";
import styled from "styled-components";
import { setContext } from "../UseContext";

// styled.components 시작
const ModalToggle = styled.button`
  text-align: center;
  border: none;
  background-color: rgb(34, 179, 400);
  color: white;
  width: 100%;
  font-weight: bolder;
  padding-top: 20px;
  padding-bottom: 20px;
  border-radius: 20px;
  font-size: 48px;
  margin-top: 15px;
  margin-bottom: 15px;
  cursor: pointer;
  :hover {
    background-color: rgb(34, 139, 230);
  }
`;
const StateCount = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
  font-weight: bold;
  color: ${({ darkMode }) => (darkMode ? "powderblue" : "green")};
`;
// styled.components 끝

export default function Nav() {
  const { list, dispatchList } = useContext(setContext);
  const modalCreateBtn = () => {
    dispatchList({ type: "Modal-toggle" });
    document.querySelector(".bodys").style.overflowY = "hidden";
  };
  return (
    <div>
      <ModalToggle onClick={modalCreateBtn}> create </ModalToggle>
      <StateCount darkMode={list.darkMode}>
        <span>Created Tasks {list.count} </span>
        <span>
          Done Tasks {list.doneCount} of {list.count}
        </span>
      </StateCount>
    </div>
  );
}
