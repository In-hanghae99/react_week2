import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { updateDictionaryFB } from "./redux/modules/dictionary";

const UpdateDictionary = () => {
  let wordRef = useRef();
  let explanationRef = useRef();
  let exampleRef = useRef();

  const dispatch = useDispatch();
  const history = useHistory();

  const { id } = useParams();

  const dictionary_list = useSelector((state) => state.dictionary.list);

  //수정 기능
  const updateBtn = () => {
    let wordVal = wordRef.current.value;
    let explanationVal = explanationRef.current.value;
    let exampleVal = exampleRef.current.value;
    dispatch(updateDictionaryFB(id, wordVal, explanationVal, exampleVal));

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
        <h2 style={{ color: "blue" }}>단어 수정하기</h2>
        <hr style={{ margin: "16px 0px" }}></hr>
        <form>
          <div style={{ padding: "10px" }}>
            <label>단어</label>
            <input ref={wordRef} type="text"></input>
          </div>
          <div style={{ padding: "10px" }}>
            <label>설명</label>
            <input ref={explanationRef} type="text"></input>
          </div>
          <div style={{ padding: "10px" }}>
            <label>예시</label>
            <input ref={exampleRef} type="text"></input>
          </div>
          <button
            onClick={() => {
              updateBtn();
            }}
            style={{ padding: "10px" }}
          >
            수정하기
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateDictionary;
