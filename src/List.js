import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  loadDictionaryFB,
  deleteDictionaryFB,
} from "./redux/modules/dictionary";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import InfoIcon from "@mui/icons-material/Info";

const List = (props) => {
  const my_lists = useSelector((state) => state.dictionary.list);
  const dispatch = useDispatch();

  const deleteBtn = (id) => {
    if (window.confirm("삭제 하시겠습니까?")) {
      dispatch(deleteDictionaryFB(id));
      dispatch(loadDictionaryFB());
    } else {
      return false;
    }
  };

  const history = useHistory();
  //화면 출력
  return (
    <div>
      <div style={{ textAlign: "center", fontSize: "50px" }}>My Dictionary</div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        {my_lists.map((list, index) => {
          return (
            <div
              key={index}
              style={{
                minWidth: "26vw",
                maxWidth: "26vw",
                minHeight: "30vh",
                maxHeight: "30vh",
                padding: "30px",
                margin: "20px",
                border: "1px solid #ddd",
                backgroundColor: "aliceblue",
                wordBreak: "break-all",
                overflow: "auto",
              }}
            >
              <div style={{ display: "flex", justifyContent: "right" }}>
                <DeleteForeverIcon
                  onClick={() => {
                    deleteBtn(list.id);
                  }}
                ></DeleteForeverIcon>
                <InfoIcon
                  onClick={() => {
                    history.push("/updateDictionary/" + list.id);
                  }}
                ></InfoIcon>
              </div>
              <p style={{ fontSize: "3px", textDecoration: "underline" }}>
                단어
              </p>
              <div>{list.word}</div>
              <p style={{ fontSize: "3px", textDecoration: "underline" }}>
                설명
              </p>
              <div>{list.explanation}</div>
              <p style={{ fontSize: "3px", textDecoration: "underline" }}>
                예시
              </p>
              <div style={{ color: "blue" }}>{list.example}</div>
            </div>
          );
        })}
      </div>
      <Fab
        aria-label="add"
        style={{
          position: "fixed",
          right: "10px",
          bottom: "10px",
        }}
        onClick={() => {
          history.push("/add");
        }}
      >
        <AddIcon />
      </Fab>
    </div>
  );
};

export default List;
