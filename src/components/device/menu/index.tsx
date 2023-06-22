import styled from "styled-components";
import { isMobile } from "../../../libs/constants/agent";
import DesktopPagination from "../../pagination/desktop";
import MobilePagination from "../../pagination/mobile";
import { DeviceList } from "../list";

export const DeviceMenu = () => {
  return (
    <>
      {isMobile ? (
        <Mobile>
          <DeviceList />
          <MobilePagination />
        </Mobile>
      ) : (
        <Desktop>
          <DesktopPagination />
          <DeviceList />
        </Desktop>
      )}
    </>
  );
};

const Mobile = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Desktop = styled.article`
  display: flex;
`;
