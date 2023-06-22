import { atom } from "recoil";
import { DeviceType } from "../../types/device";
import { dummyDevice } from "../../libs/constants/dummy";

const pageSize = 8;

export interface DeviceStateAtomType {
  deviceResponses: DeviceType[];
  devicePair: number[][];
  pageSize: number;
  totalPage: number;
  totalLength: number;
}

export const DeviceStateAtom = atom<DeviceStateAtomType>({
  key: "deviceState",
  default: {
    deviceResponses: dummyDevice,
    devicePair: [],
    pageSize: pageSize,
    totalPage: 0,
    totalLength: 0,
  },
});
