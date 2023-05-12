import useSocket from "./hooks/useSocket";

function App() {
  const { data, status, connect, disconnect } = useSocket();

  return (
    <>
      <h1>{status}</h1>
      <button onClick={connect}>소켓 서버 접속</button>
      <button onClick={disconnect}>소켓 서버 퇴장</button>
      <ul>
        {data.map((v) => (
          <li key={`${v.device_type}${v.id}`}>
            {`${v.id}: ${v.state === 1 ? "GRN" : " RED"}`}
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
