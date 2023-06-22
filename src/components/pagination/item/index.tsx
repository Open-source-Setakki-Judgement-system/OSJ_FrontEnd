import { styled } from "styled-components";
import { RoomImg } from "../../../assets/images";
import { useRecoilState, useRecoilValue } from "recoil";
import { PageStateAtom, PageStateAtomType } from "../../../atoms/pageState";
import {
  DeviceStateAtom,
  DeviceStateAtomType,
} from "../../../atoms/deviceState";

interface PageItemProps {
  page: number;
}

const PageItem = ({ page }: PageItemProps) => {
  const deviceState = useRecoilValue<DeviceStateAtomType>(DeviceStateAtom);
  const [pageState, setPageState] =
    useRecoilState<PageStateAtomType>(PageStateAtom);
  const setPageTo = (newPage: number) =>
    newPage !== pageState.page &&
    newPage > 0 &&
    newPage <= deviceState.totalPage &&
    setPageState({ page: newPage, side: undefined });
  return (
    <Wrapper>
      <button
        type="button"
        className={page === pageState.page ? "active" : undefined}
        onClick={() => setPageTo(page)}
      >
        <div>
          <span>{page === pageState.page ? "현재 페이지" : "페이지 보기"}</span>
          <picture>
            <source type="image/svg+xml" srcSet={RoomImg} />
            <img alt="방" width="16" height="16" />
          </picture>
          <h2>{`${page}번 세탁실`}</h2>
        </div>
        <p>
          {page * 16 > deviceState.totalLength
            ? `${(page - 1) * 16 + 1}번 ~ ${deviceState.totalLength}번 세탁기`
            : `${(page - 1) * 16 + 1}번 ~ ${page * 16}번 세탁기`}
        </p>
      </button>
    </Wrapper>
  );
};

export default PageItem;

const Wrapper = styled.li`
  width: 100%;

  button {
    width: 100%;

    cursor: pointer;
    transition: background-color 0.25s ease, color 0.25s ease;

    ${({ theme }) => theme.commons.boxShadow}

    div {
      display: flex;
      align-items: center;

      span {
        font-size: 0;
      }

      picture {
        transition: filter 0.25s ease;
      }

      h2 {
        margin-left: 4px;
      }
    }
  }

  .active {
    background-color: ${({ theme }) => theme.colors.background6};

    color: ${({ theme }) => theme.colors.background1};

    div picture {
      filter: invert(1);
    }
  }
`;
