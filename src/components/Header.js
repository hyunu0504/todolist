import { useContext } from "react";
import styled from "styled-components";
import { setContext } from "../UseContext";

// styled.components 시작
const HeaderContainer = styled.div`
  height: 20%;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 32px;
  font-weight: bolder;
  background-color: ${({ darkMode }) => (darkMode ? "#0d0d0d" : "#eee")};
  color: ${({ darkMode }) => (darkMode ? "white" : "black")};
`;
// styled.components 끝

export default function Header() {
  const { list, dispatchList } = useContext(setContext);
  const HeaderBtn = () => {
    dispatchList({ type: "mode-btn" });
    if (list.darkMode === false) {
      document.querySelector(".bodys").style.backgroundColor =
        "rgb(26, 27, 30)";
    } else {
      document.querySelector(".bodys").style.backgroundColor = "white";
    }
  };
  return (
    <HeaderContainer darkMode={list.darkMode}>
      <span>TodoList</span>
      <img
        src={list.darkMode ? "moon.png" : "sun.png"}
        onClick={HeaderBtn}
        style={{ cursor: "pointer" }}
      />
    </HeaderContainer>
  );
}
