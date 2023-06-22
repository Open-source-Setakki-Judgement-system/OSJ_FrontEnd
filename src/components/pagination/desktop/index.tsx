import { styled } from "styled-components";
import PageItem from "../item";
import { useRecoilValue } from "recoil";
import {
  DeviceStateAtom,
  DeviceStateAtomType,
} from "../../../atoms/deviceState";
import { PageStateAtom, PageStateAtomType } from "../../../atoms/pageState";
import Spinner from "../../spinner";

const DesktopPagination = () => {
  const deviceState = useRecoilValue<DeviceStateAtomType>(DeviceStateAtom);
  const pageState = useRecoilValue<PageStateAtomType>(PageStateAtom);
  const isDeviceStateEmpty = deviceState.deviceResponses.length === 0;
  return (
    <Wrapper>
      <h1>
        사내 세탁실
        <span className="offscreen">{`${pageState.page} 페이지`}</span>
      </h1>
      {isDeviceStateEmpty ? (
        <Spinner fit="contain" />
      ) : (
        <ul role="navigation" aria-label="Page selection area">
          {Array.from(
            { length: deviceState.totalPage },
            (_, index) => index + 1
          ).map((v) => (
            <PageItem key={`page${v}`} page={v} />
          ))}
        </ul>
      )}
    </Wrapper>
  );
};

export default DesktopPagination;

const Wrapper = styled.article`
  height: 684px;

  h1 {
    margin-left: 8px;

    width: calc(100% - 8px);

    color: ${({ theme }) => theme.colors.background6};
    font-size: ${(props) => props.theme.fontSizes.title};
    text-align: center;

    border-bottom: 2px solid ${({ theme }) => theme.colors.background6};

    .offscreen {
      font-size: 0;
    }
  }

  .spinner {
    margin: 8px;

    width: calc(100% - 8px);
    height: calc(100% - 66px);
  }

  ul {
    padding: 8px;
    padding-right: 0;
    padding-bottom: 0;

    width: 100%;
    height: calc(100% - 50px);

    display: flex;
    flex-direction: column;
    gap: 8px;

    overflow-x: hidden;
    overflow-y: auto;
    list-style-type: none;
  }
`;
