import { useRecoilState, useRecoilValue } from "recoil";
import { styled } from "styled-components";
import { PageStateAtom, PageStateAtomType } from "../../../atoms/pageState";
import {
  DeviceStateAtom,
  DeviceStateAtomType,
} from "../../../atoms/deviceState";

const MobilePagination = () => {
  const deviceState = useRecoilValue<DeviceStateAtomType>(DeviceStateAtom);
  const [pageState, setPageState] =
    useRecoilState<PageStateAtomType>(PageStateAtom);
  const setPageTo = (newPage: number) =>
    newPage !== pageState.page &&
    newPage > 0 &&
    newPage <= deviceState.totalPage &&
    setPageState({ page: newPage, side: undefined });
  const pages = [
    pageState.page > 2 && pageState.page - 2,
    pageState.page > 1 && pageState.page - 1,
    pageState.page,
    pageState.page < deviceState.totalPage && pageState.page + 1,
    pageState.page < deviceState.totalPage - 1 && pageState.page + 2,
  ].filter((v) => v !== false) as number[];
  return (
    <Wrapper>
      <button type="button" onClick={() => setPageTo(1)}>
        «
      </button>
      <button type="button" onClick={() => setPageTo(pageState.page - 1)}>
        ‹
      </button>
      {pages.map((v) => (
        <button
          key={`page${v}`}
          className={v === pageState.page ? "active" : undefined}
          type="button"
          onClick={() => setPageTo(v)}
        >
          {v}
        </button>
      ))}
      <button type="button" onClick={() => setPageTo(pageState.page + 1)}>
        ›
      </button>
      <button type="button" onClick={() => setPageTo(deviceState.totalPage)}>
        »
      </button>
    </Wrapper>
  );
};

export default MobilePagination;

const Wrapper = styled.div`
  margin: 8px;

  button {
    margin-right: 8px;

    width: 28px;

    display: inline-flex;
    justify-content: center;

    cursor: pointer;
    transition: background-color 0.25s ease, color 0.25s ease;

    ${({ theme }) => theme.commons.boxShadow}
    padding: 4px 0;
  }

  button:last-child {
    margin-right: 0;
  }

  .active {
    background-color: ${({ theme }) => theme.colors.background6};

    color: ${({ theme }) => theme.colors.background1};
  }
`;
