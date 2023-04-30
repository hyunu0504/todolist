import { useContext } from "react";
import styled from "styled-components";
import { setContext } from "../UseContext";
import List from "./List";
import Nav from "./Nav";

// styled.components 시작
const SectionContainer = styled.div`
  height: 100%;
  background-color: ${({ darkMode }) =>
    darkMode ? "rgb(26, 27, 30)" : "white"};
`;

const SectionItmesContainer = styled.div`
  width: 768px;
  margin: 0 auto;
  background-color: ${({ darkMode }) =>
    darkMode ? "rgb(26, 27, 30)" : "white"};
  @media screen and (max-width: 1023px) {
    width: 90%;
  }
`; // styled.components 끝

export default function Section() {
  const { list } = useContext(setContext);
  return (
    <SectionContainer darkMode={list.darkMode}>
      <SectionItmesContainer darkMode={list.darkMode}>
        <Nav />
        {list.list.map((e) => {
          return (
            <List
              taskValue={e.list}
              listClass={e.id}
              toggle={e.toggle}
              key={e.id}
            />
          );
        })}
      </SectionItmesContainer>
    </SectionContainer>
  );
}
