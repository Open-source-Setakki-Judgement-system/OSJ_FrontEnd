import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import { DeviceType } from "../../types/device";

type StatusType = "loading" | "connected" | "disconnected";

export const useSocket = () => {
  const [data, setData] = useState<DeviceType[]>([]);
  const [status, setStatus] = useState<StatusType>("disconnected");
  const [uptime, setUptime] = useState<string>("00:00:00");
  const socket = io(import.meta.env.VITE_BASE_URL, {
    autoConnect: false,
    forceNew: true,
    transports: ["websocket"],
  });
  useEffect(() => {
    if (status === "loading" && data.length > 0) {
      setStatus("connected");
      const now = new Date();
      setUptime(
        `${now.getHours().toString().padStart(2, "0")}:${now
          .getMinutes()
          .toString()
          .padStart(2, "0")}:${now.getSeconds().toString().padStart(2, "0")}`
      );
    }
  }, [data]);
  const connect = () => {
    if (status === "disconnected") {
      setStatus("loading");
      socket.connect();
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
  return { data, status, uptime, connect, disconnect };
};
