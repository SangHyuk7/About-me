import React from "react";
import styled from "styled-components";

function TimeMode({ isDarkMode, handleSetIsDarkMode }) {
  return (
    <ToggleButton onClick={handleSetIsDarkMode} isDarkMode={isDarkMode}>
      <ToggleCircle isDarkMode={isDarkMode} />
    </ToggleButton>
  );
}

export default TimeMode;

const ToggleButton = styled.button`
  z-index: 999;
  position: absolute;
  top: 20px;
  right: 40px;
  width: 100px;
  height: 30px;
  background-color: #40414f;
  border-radius: 30px;
  border: ${(props) =>
    props.isDarkMode ? "2px solid #2a2b32" : "2px solid #e5e5e5"};
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 0;
  justify-content: space-between;
  box-sizing: content-box;
  background-image: ${(props) =>
    props.isDarkMode ? 'url("/night-icon.svg")' : 'url("/day-icon.svg")'};
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;

  @media (min-width: 0px) and (max-width: 425px) {
    top: 25px;
    right: 10px;
    width: 75px;
    height: 20px;
  }

  @media (min-width: 426px) and (max-width: 574px) {
    top: 22.5px;
    right: 10px;
    width: 85px;
    height: 25px;
  }
`;

const ToggleCircle = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  transition: all 0.5s;
  margin-left: ${(props) => (props.isDarkMode ? "70px" : "0px")};
  background-image: ${(props) =>
    props.isDarkMode ? 'url("/moon-icon.png")' : 'url("/sun-icon.png")'};
  background-color: ${(props) => (props.isDarkMode ? "black" : "white")};
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;

  @media (min-width: 0px) and (max-width: 425px) {
    width: 20px;
    height: 20px;
    margin-left: ${(props) => (props.isDarkMode ? "55px" : "0px")};
  }

  @media (min-width: 426px) and (max-width: 574px) {
    width: 25px;
    height: 25px;
    margin-left: ${(props) => (props.isDarkMode ? "60px" : "0px")};
  }
`;
