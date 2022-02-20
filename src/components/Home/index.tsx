import { MetricsWrapper, Wrapper } from "./styles";

function Home() {
  return (
    <Wrapper>
      <h1>Welcome To El Banco Bank !</h1>
      <MetricsWrapper>
        <div>Deposited: 0</div>
        <div>Interest Earned: 0</div>
        <div>Loan: 0</div>
      </MetricsWrapper>
    </Wrapper>
  );
}

export default Home;
