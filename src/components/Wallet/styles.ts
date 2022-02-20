import styled from "styled-components";

export const WalletBtn = styled.button`
  outline: none;
  border: 2px solid black;
  border-radius: 8px;
  cursor: pointer;
  font-size: 18px;
  background: none;
  transition: all 0.5s;
  &:hover {
    background: black;
    color: white;
  }
`;
