import useSocket from "./hooks/useSocket";

function App() {
  const { dataArr, isConnected, connect, disconnect } = useSocket();

  return (
    <>
      <h1>{isConnected ? "연결됨" : "연결되지 않음"}</h1>
      {isConnected ? (
        <button onClick={disconnect}>소켓 서버 퇴장</button>
      ) : (
        <button onClick={connect}>소켓 서버 접속</button>
      )}
      <br />
      <ul>
        {dataArr.map((v, i) => (
          <li key={`socketMessage${i}`}>{v}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
