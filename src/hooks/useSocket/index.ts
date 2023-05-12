import { useState } from "react";
import { io } from "socket.io-client";
import { DeviceStatusType } from "../../types/deviceStatus";

const useSocket = () => {
  const [data, setData] = useState<DeviceStatusType[]>([]);
  const [status, setStatus] = useState<"connected" | "disconnected">(
    "disconnected"
  );

  const socket = io(process.env.REACT_APP_BASE_URL, {
    autoConnect: false,
    forceNew: true,
    transports: ["websocket", "polling"],
  });

  const connect = () => {
    if (status === "disconnected") {
      socket.connect();
      setStatus("connected");
      socket.on("update", (data: DeviceStatusType[]) => {
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
