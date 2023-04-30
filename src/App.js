import { useReducer, useState, useRef, useEffect } from "react";
import { setContext } from "./UseContext";
import styled from "styled-components";
import Header from "./components/Header";
import Modal from "./components/Modal";
import Section from "./components/Section";

// useReducer 시작
const addListReducer = (state, action) => {
  switch (action.type) {
    case "add-btn":
      if (action.task.inputValue !== "") {
        const newList = {
          id: Date.now(),
          list: action.task.inputValue,
          toggle: false,
        };
        return {
          count: state.count + 1,
          doneCount: state.doneCount,
          ModalToggle: !state.ModalToggle,
          darkMode: state.darkMode,
          list: [newList, ...state.list],
        };
      } else {
        alert("값이 비어있습니다.");
        return {
          count: state.count,
          doneCount: state.doneCount,
          ModalToggle: state.ModalToggle,
          darkMode: state.darkMode,
          list: state.list,
        };
      }
    case "cancel-btn":
      return {
        count: state.count,
        doneCount: state.doneCount,
        ModalToggle: !state.ModalToggle,
        darkMode: state.darkMode,
        list: state.list,
      };
    case "check-list":
      return {
        count: state.count,
        doneCount: state.doneCount,
        ModalToggle: state.ModalToggle,
        darkMode: state.darkMode,
        list: state.list.map((e) => {
          if (e.id === action.listId.listClass) {
            return { ...e, toggle: !e.toggle };
          }
          return e;
        }),
      };
    case "check-list2":
      return {
        count: state.count,
        doneCount: state.doneCount - 1,
        ModalToggle: state.ModalToggle,
        darkMode: state.darkMode,
        list: state.list,
      };
    case "check-list3":
      return {
        count: state.count,
        doneCount: state.doneCount + 1,
        ModalToggle: state.ModalToggle,
        darkMode: state.darkMode,
        list: state.list,
      };

    case "remove-list":
      return {
        count: state.count - 1,
        doneCount: state.doneCount,
        ModalToggle: state.ModalToggle,
        darkMode: state.darkMode,
        list: state.list.filter((e) => e.id !== action.listId.listClass),
      };
    case "remove-list2":
      return {
        count: state.count,
        doneCount: state.doneCount - 1,
        ModalToggle: state.ModalToggle,
        darkMode: state.darkMode,
        list: state.list.filter((e) => e.id !== action.listId.listClass),
      };

    case "Modal-toggle":
      return {
        count: state.count,
        doneCount: state.doneCount,
        ModalToggle: !state.ModalToggle,
        darkMode: state.darkMode,
        list: state.list,
      };

    case "mode-btn":
      return {
        count: state.count,
        doneCount: state.doneCount,
        ModalToggle: state.ModalToggle,
        darkMode: !state.darkMode,
        list: state.list,
      };
  }
};

const listInfo = {
  count: 1,
  doneCount: 0,
  ModalToggle: false,
  darkMode: true,
  list: [
    {
      id: Date.now(),
      list: "example",
      toggle: false,
    },
  ],
};


// useReducer 끝

// styled.components 시작
const MainContainer = styled.div`
  height: 1200px;
`;
// styled.components 끝



function App() {
  const [list, dispatchList] = useReducer(addListReducer, listInfo);
  const [inputValue, setInputValue] = useState("");
  const inputFocus = useRef();



  useEffect(() => {
    inputFocus.current.focus();
  }, [list.ModalToggle]);
  return (
    <setContext.Provider
      value={{ list, dispatchList, inputValue, setInputValue, inputFocus }}
    >

      <MainContainer>
        <Modal />
        <Header />
        <Section />
      </MainContainer>
    </setContext.Provider>
  );
}

export default App;
