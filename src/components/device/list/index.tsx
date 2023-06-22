import styled from "styled-components";
import { useEffect, useRef } from "react";
import DisplayItem from "../../displayItem";
import { DoorImg, WallImg } from "../../../assets/images";
import Spinner from "../../spinner";
import { DeviceItem } from "../item";
import { isMouseAvailable } from "../../../libs/constants/agent";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  DeviceStateAtom,
  DeviceStateAtomType,
} from "../../../atoms/deviceState";
import { PageStateAtom, PageStateAtomType } from "../../../atoms/pageState";

export const DeviceList = () => {
  const deviceState = useRecoilValue<DeviceStateAtomType>(DeviceStateAtom);
  const [pageState, setPageState] =
    useRecoilState<PageStateAtomType>(PageStateAtom);
  const listRef = useRef<HTMLUListElement>(null);
  const formattedDeviceResponses = deviceState.devicePair.slice(
    (pageState.page - 1) * deviceState.pageSize,
    pageState.page * deviceState.pageSize
  );
  const isDeviceStateEmpty = deviceState.deviceResponses.length === 0;
  const isMouseNotAvailable = !isMouseAvailable;
  useEffect(() => {
    if (listRef.current)
      if (isDeviceStateEmpty)
        setPageState((prevState) => ({ ...prevState, side: undefined }));
      else if (pageState.side === undefined) {
        setPageState((prevState) => ({ ...prevState, side: "door" }));
        setTimeout(
          () => listRef.current?.scrollTo(0, listRef.current!.scrollHeight),
          0
        );
      } else if (isMouseAvailable)
        if (pageState.side === "wall")
          setTimeout(
            () =>
              listRef.current!.scrollTo({
                top: 0,
                behavior: "smooth",
              }),
            0
          );
        else if (pageState.side === "door")
          setTimeout(
            () =>
              listRef.current!.scrollTo({
                top: listRef.current!.scrollHeight,
                behavior: "smooth",
              }),
            0
          );
  }, [deviceState.deviceResponses, pageState.side]);
  return (
    <Wrapper key={`page${pageState.page}`}>
      {isDeviceStateEmpty ? (
        <Spinner fit="contain" />
      ) : (
        <>
          {pageState.side === "wall" && (
            <DisplayItem src={WallImg} alt="벽" text="벽" />
          )}
          <ul
            ref={listRef}
            onScroll={() => {
              if (isMouseNotAvailable) {
                const scrollHeight: number = listRef.current?.scrollHeight!,
                  scrollTop = listRef.current?.scrollTop!;
                const scrollStart = scrollTop,
                  scrollEnd = scrollHeight - scrollTop;
                if (scrollStart + 128 > scrollEnd / 2) {
                  if (pageState.side === "wall")
                    setPageState((prevState) => ({
                      ...prevState,
                      side: "door",
                    }));
                } else if (pageState.side === "door")
                  setPageState((prevState) => ({ ...prevState, side: "wall" }));
              }
            }}
            onWheel={(e) => {
              if (isMouseAvailable)
                if (e.deltaY > 0)
                  if (pageState.side === "door")
                    listRef.current!.scrollTo(0, listRef.current!.scrollHeight);
                  else
                    setPageState((prevState) => ({
                      ...prevState,
                      side: "door",
                    }));
                else if (e.deltaY)
                  if (pageState.side === "wall")
                    listRef.current!.scrollTo(0, 0);
                  else
                    setPageState((prevState) => ({
                      ...prevState,
                      side: "wall",
                    }));
            }}
          >
            {formattedDeviceResponses.map((v) => {
              const pairLeft = deviceState.deviceResponses[v[0]],
                pairRight = v[1] && deviceState.deviceResponses[v[1]];
              return [
                <li key={`${pairLeft.device_type}${pairLeft.id}`}>
                  <DeviceItem
                    id={pairLeft.id}
                    state={pairLeft.state}
                    device_type={pairLeft.device_type}
                    alive={pairLeft.alive}
                  />
                </li>,
                pairRight && (
                  <li key={`${pairRight.device_type}${pairRight.id}`}>
                    <DeviceItem
                      id={pairRight.id}
                      state={pairRight.state}
                      device_type={pairRight.device_type}
                      alive={pairRight.alive}
                    />
                  </li>
                ),
              ];
            })}
          </ul>
          {pageState.side === "door" && (
            <DisplayItem src={DoorImg} alt="출입문" text="출입문" />
          )}
        </>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.article`
  width: 224px;
  height: 684px;

  overflow-x: visible;

  ${({ theme }) => theme.animations.fade}

  animation: fade 0.75s ease-in;

  .spinner {
    margin: 8px;
    margin-bottom: 0;

    width: calc(100% - 16px);
    height: calc(100% - 8px);
  }

  ul {
    padding: 8px;

    width: 100%;
    height: calc(100% - 40px);

    display: flex;
    flex-flow: row wrap;
    align-content: flex-start;
    gap: 8px;

    overflow-y: scroll;
    scrollbar-width: none;
    list-style-type: none;

    li {
      scroll-snap-align: center;
    }
  }

  ul::-webkit-scrollbar {
    display: none;
  }
`;
