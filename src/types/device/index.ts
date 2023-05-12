export interface DeviceType {
  id: number;
  state: number;
  device_type: "DRY" | "WASH";
  alive: number;
}
