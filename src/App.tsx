import styled from "styled-components";
import { DeviceMenu } from "./components/device/menu";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { DeviceStateAtom, DeviceStateAtomType } from "./atoms/deviceState";
import { Footer } from "./components/footer";
import { useSocket } from "./hooks/useSocket";
import { Header } from "./components/header";
import { SideImage } from "./components/sideImage";

function App() {
  const { data, status, uptime, connect, disconnect } = useSocket();
  const [deviceState, setDeviceState] =
    useRecoilState<DeviceStateAtomType>(DeviceStateAtom);
  useEffect(() => {
    connect();
    window.onbeforeunload = () => disconnect();
  }, []);
  useEffect(() => {
    const deviceLength = data.length;
    const devicePair: number[][] = [];
    const pageSize = deviceState.pageSize;
    for (let i = 0; i < Math.ceil(deviceLength / 2 / pageSize) * 2; i += 2)
      for (let j = 0; j <= pageSize - 1; j++) {
        const pairLeft = j + i * 8,
          pairRight = j + (i + 1) * 8;
        if (data[pairLeft] && data[pairRight])
          devicePair.push([j + i * 8, j + (i + 1) * 8]);
        else if (data[pairLeft]) devicePair.push([j + i * 8]);
        else break;
      }
    setDeviceState((prevState) => {
      return {
        ...prevState,
        deviceResponses: data,
        devicePair: devicePair,
        totalLength: deviceLength,
        totalPage: Math.ceil(deviceLength / 2 / pageSize),
      };
    });
  }, [data]);
  return (
    <>
      <Header />
      <Wrapper>
        <DeviceMenu />
        <SideImage />
      </Wrapper>
      <Footer status={status} uptime={uptime} />
    </>
  );
}

export default App;

const Wrapper = styled.main`
  margin-top: 56px;

  width: 100vw;
  height: auto;
  min-height: calc(100vh - 222px);

  display: flex;
`;
