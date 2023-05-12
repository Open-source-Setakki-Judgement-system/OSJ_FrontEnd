import Device from "./components/device";
import useSocket from "./hooks/useSocket";

function App() {
  const { data, status, connect, disconnect } = useSocket();

  return (
    <>
      <Device id={1} state={1} device_type="WASH" alive={1} />
      <h1>{status}</h1>
      <button onClick={connect}>서버 접속</button>
      <button onClick={disconnect}>서버 퇴장</button>
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
