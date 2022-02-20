import styled from "styled-components";

export const Nav = styled.div`
  box-sizing: border-box;
  display: flex;
  height: 64px;
  align-items: center;
  justify-content: space-between;
  padding: 20px 40px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0px 0px 10px #000;
  position: fixed;
  width: 100%;
`;

export const NavItem = styled.div`
  box-sizing: border-box;
  cursor: pointer;
  transition: all 0.5s;

  &:hover {
    border-bottom: 2px solid black;
  }
`;

export const NavItemWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 50%;
`;

export const Logo = styled.button`
  outline: none;
  border: 2px solid black;
  border-radius: 8px;
  cursor: pointer;
  font-size: 24px;
  background: none;
  transition: all 0.5s;
  &:hover {
    background: black;
    color: white;
  }
`;
