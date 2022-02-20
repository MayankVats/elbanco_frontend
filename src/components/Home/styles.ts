import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  height: 100vh;

  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const MetricsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 10vh;
  width: 50%;
  font-size: 18px;
  background: rgba(0, 0, 0, 0.08);
  padding: 0 64px;
  border-radius: 10px;
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.1);
`;
