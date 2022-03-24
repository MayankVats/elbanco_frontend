import styled, { StyledComponentProps } from "styled-components";
import { Logo } from "../Navbar/styles";

export const Modal1 = styled.div<{ hide?: boolean }>`
  position: absolute;
  width: 25%;
  height: 25%;
  background-color: ${(props) => (props.hide ? "rgba(0, 0, 0, 0.6)" : "white")};
  color: black;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  ${({ hide }) => hide && `display:none`};
  border-radius: 10px;
  overflow: hidden;
  z-index: 10;
`;

export const Close = styled.button<{ close?: boolean }>`
  width: 7%;
  height: 7%;
  background-color: red;
  color: white;
  font-weight: bold;
  margin-left: 36em;
  border: none;
  outline: none;
  display: ${(props) => (props.close ? "block" : "none")};
`;

export const Main = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(3px);
  z-index: 5;
`;

export const SubmitBtn = styled(Logo)`
  font-size: 1em;
`;
