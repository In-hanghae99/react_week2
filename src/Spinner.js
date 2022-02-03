import React from "react";
import styled from "styled-components";
import MenuBookIcon from "@mui/icons-material/MenuBook";

const Spinner = (props) => {
  return (
    <Outter>
      <MenuBookIcon style={{ color: "blue", fontSize: "150px" }} />
    </Outter>
  );
};

const Outter = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: aliceblue;
`;

export default Spinner;
