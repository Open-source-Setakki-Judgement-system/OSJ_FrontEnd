import { useState } from "react";
import { io } from "socket.io-client";
import { DeviceType } from "../../types/device";

const useSocket = () => {
  const [data, setData] = useState<DeviceType[]>([]);
  const [status, setStatus] = useState<"connected" | "disconnected">(
    "disconnected"
  );

  const socket = io(import.meta.env.VITE_BASE_URL, {
    autoConnect: false,
    forceNew: true,
    transports: ["websocket"],
  });

  const connect = () => {
    if (status === "disconnected") {
      socket.connect();
      setStatus("connected");
      socket.on("update", (data: DeviceType[]) => {
        setData(data);
      });
    }
  };

  const disconnect = () => {
    if (status === "connected") {
      socket.off("update");
      socket.disconnect();
      setStatus("disconnected");
      setData([]);
    }
  };

  return { data, status, connect, disconnect };
};

export default useSocket;
