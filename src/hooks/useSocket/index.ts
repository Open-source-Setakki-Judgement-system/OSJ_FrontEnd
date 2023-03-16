import { useEffect, useState } from "react";
import { io } from "socket.io-client";

const useSocket = () => {
  const [dataArr, setDataArr] = useState<string[]>([]);
  const [isConnected, setIsConnected] = useState<boolean>(false);

  const socket = io(process.env.REACT_APP_BASE_URL, {
    transports: ["websocket"],
    upgrade: false,
    forceNew: true,
    autoConnect: false,
    reconnection: false,
  });

  const refresh = () => {
    socket.offAny();
    socket.disconnect();
  };

  useEffect(() => {
    return () => {
      refresh();
    }; // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); 

  const connect = () => {
    if (isConnected === false) {
      socket.connect();
      socket.on("connect", () => {
        setIsConnected(true);
        setDataArr((prevState) => {
          return [...prevState, `서버와 연결되었습니다. (${socket.id})`];
        });
        socket.on("disconnect", () => {
          refresh();
          setIsConnected(false);
          setDataArr((prevState) => {
            return [...prevState, `서버와의 연결이 끊어졌습니다.`];
          });
        });
        socket.on("message", (data: string) => {
          const packet = JSON.parse(data);
          setDataArr((prevState) => {
            return [...prevState, packet];
          });
        });
      });
      socket.on("connect_error", (error: Error) => {
        refresh();
        setIsConnected(false);
        setDataArr((prevState) => {
          return [...prevState, error.message];
        });
      });
    }
  };

  const disconnect = () => {
    if (isConnected === true) {
      refresh();
      setIsConnected(false);
      setDataArr((prevState) => {
        return [...prevState, "서버와의 연결이 끊어졌습니다"];
      });
    }
  };

  return { dataArr, isConnected, connect, disconnect };
};

export default useSocket;
