import { useContext } from "react";
import styled from "styled-components";
import { setContext } from "../UseContext";

//styled.components 시작
const ModalContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  height: 100%;
  width: 100%;
  position: fixed;
`;
const WhiteModal = styled.div`
  width: 700px;
  height: 300px;
  border-radius: 8px;
  padding: 15px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 300px;
  background-color: ${({ darkMode }) =>
    darkMode ? "#eee" : "rgb(37, 38, 43)"};

  @media screen and (max-width: 1023px) {
    margin-top: 80px;
    width: 60%;
    height: 400px;
  }
  @media screen and (max-height: 500px) and (max-width: 1023px) {
    height: 200px;
    margin-top: 100px;
  }
`;
const NewTask = styled.div`
  text-align: center;
  font-weight: bold;
  font-size: 24px;
  margin-top: 15px;
  color: ${({ darkMode }) => (darkMode ? "black" : "white")};
`;
const InputModal = styled.input`
  padding: 15px;
  display: flex;
  margin: 0 auto;
  width: 80%;
  margin-top: 60px;
  margin-bottom: 60px;
  border-radius: 10px;
  border: solid 1px black;
  :hover {
    border: solid 1px rgb(34, 139, 230);
  }
  @media screen and (max-width: 1023px) {
    margin-top: 45px;
    margin-bottom: 45px;
    padding: 25px;
  }
  @media screen and (max-height: 500px) and (max-width: 1023px) {
    padding: 10px;
    margin: 0 auto;
    margin-bottom: 10px;
  }
`;
const BtnContainer = styled.div`
  display: flex;
  justify-content: space-around;
  @media screen and (max-width: 1023px) {
    flex-wrap: wrap;
  }
`;
const CancelBtn = styled.button`
  border: none;
  background-color: white;
  color: rgb(34, 139, 230);
  width: 40%;
  padding-top: 10px;
  padding-bottom: 10px;
  border-radius: 20px;
  font-size: 24px;

  :hover {
    background-color: #eee;
  }

  @media screen and (max-width: 1023px) {
    order: 1;
    width: 90%;
    margin: 0 auto;
  }
  @media screen and (max-height: 500px) and (max-width: 1023px) {
    padding: 0;
  }
`;
const CreateBtn = styled.button`
  border: none;
  background-color: rgb(34, 179, 400);
  color: white;
  width: 40%;
  padding-top: 10px;
  padding-bottom: 10px;
  border-radius: 20px;
  font-size: 24px;

  :hover {
    background-color: rgb(34, 139, 230);
  }
  @media screen and (max-width: 1023px) {
    order: 0;
    width: 90%;
    margin: 0 auto;
    margin-bottom: 30px;
  }
  @media screen and (max-height: 500px) and (max-width: 1023px) {
    padding: 0;
  }
`;
//styled.components 끝

export default function Modal() {
  const { list, dispatchList, inputValue, setInputValue, inputFocus } =
    useContext(setContext);
  const enterFun = (e) => {
    if (e.key === "Enter") {
      addList();
    }
  };
  const addList = (e) => {
    dispatchList({ type: "add-btn", task: { inputValue } });
    setInputValue("");
    if (inputValue !== "") {
      document.querySelector(".bodys").style.overflowY = "scroll";
    }
  };
  const cancelBtn = (e) => {
    dispatchList({ type: "cancel-btn" });
    setInputValue("");
    document.querySelector(".bodys").style.overflowY = "scroll";
  };

  return (
    <ModalContainer
      onClick={cancelBtn}
      style={{ display: list.ModalToggle ? "block" : "none" }}
    >
      <WhiteModal onClick={(e) => e.stopPropagation()} darkMode={list.darkMode}>
        <NewTask darkMode={list.darkMode}>New Task</NewTask>
        <InputModal
          ref={inputFocus}
          type="text"
          placeholder="New Task"
          value={inputValue}
          onKeyDown={enterFun}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <BtnContainer>
          <CancelBtn onClick={cancelBtn}>취소</CancelBtn>
          <CreateBtn onClick={addList}>추가</CreateBtn>
        </BtnContainer>
      </WhiteModal>
    </ModalContainer>
  );
}
