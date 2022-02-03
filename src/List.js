import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  loadDictionaryFB,
  deleteDictionaryFB,
} from "./redux/modules/dictionary";
import styled from "styled-components";

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
      <Title>My Dictionary</Title>
      <Wrap>
        {my_lists.map((list, index) => {
          return (
            <Card key={index}>
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
              <Name>단어</Name>
              <div>{list.word}</div>
              <Name>설명</Name>
              <div>{list.explanation}</div>
              <Name>예시</Name>
              <div style={{ color: "blue" }}>{list.example}</div>
            </Card>
          );
        })}
      </Wrap>
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
const Title = styled.div`
  text-align: center;
  font-size: 50px;
`;
const Wrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
const Card = styled.div`
  min-width: 26vw;
  max-width: 26vw;
  min-height: 30vh;
  max-height: 30vh;
  padding: 30px;
  margin: 20px;
  border: 1px solid #ddd;
  background-color: aliceblue;
  word-break: break-all;
  overflow: auto;
`;
const Name = styled.p`
  font-size: 3px;
  text-decoration: underline;
`;
export default List;
