import { React, useRef } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { addDictionaryFB } from "./redux/modules/dictionary";

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
    <div
      style={{
        backgroundColor: "#eee",
        height: "100vh",
        width: "100vw",
        display: "flex",
      }}
    >
      <div
        style={{
          backgroundColor: "#fff",
          width: "50vw",
          maxWidth: "350px",
          margin: "10vh auto",
          height: "30vh",
          padding: "16px",
          border: "1px solid #ddd",
          borderRadius: "5px",
          textAlign: "center",
        }}
      >
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
      </div>
    </div>
  );
};

export default AddWord;
