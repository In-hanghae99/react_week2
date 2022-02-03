import { React, useRef } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { addDictionaryFB } from "./redux/modules/dictionary";
import styled from "styled-components";
const AddWord = (props) => {
  const word = useRef();
  const explanation = useRef();
  const example = useRef();

  const dispatch = useDispatch();

  const history = useHistory();

  const addWord = () => {
    dispatch(
      addDictionaryFB({
        word: word.current.value,
        explanation: explanation.current.value,
        example: example.current.value,
      })
    );
    history.push("/");
  };
  return (
    <Container>
      <Wrap>
        <h2 style={{ color: "blue" }}>단어 추가하기</h2>
        <hr style={{ margin: "16px 0px" }}></hr>
        <form>
          <div style={{ padding: "10px" }}>
            <label>단어</label>
            <input ref={word} type="text"></input>
          </div>
          <div style={{ padding: "10px" }}>
            <label>설명</label>
            <input ref={explanation} type="text"></input>
          </div>
          <div style={{ padding: "10px" }}>
            <label>예시</label>
            <input ref={example} type="text"></input>
          </div>
          <button
            onClick={() => {
              addWord();
            }}
            style={{ padding: "10px" }}
          >
            추가하기
          </button>
        </form>
      </Wrap>
    </Container>
  );
};

const Container = styled.div`
  background-color: #eee;
  height: 100vh;
  width: 100vw;
  display: flex;
`;

const Wrap = styled.div`
  background-color: #fff;
  width: 50vw;
  max-width: 350px;
  margin: 10vh auto;
  height: 30vh;
  padding: 16px;
  border: 1px solid #ddd;
  border-radius: 5px;
  text-align: center;
`;
export default AddWord;
