import styled from "styled-components";
import {
  GreenTumbleDryerImg,
  GreenWashingMachineImg,
  RedTumbleDryerImg,
  RedWashingMachineImg,
  RepairImg,
} from "../../../assets/images";
import { DeviceType } from "../../../types/device";

export const DeviceItem = ({ id, state, device_type, alive }: DeviceType) => {
  const broken = !!!alive,
    running = !!!state;
  const icon =
    !broken && !running
      ? device_type === "DRY"
        ? GreenTumbleDryerImg
        : GreenWashingMachineImg
      : device_type === "DRY"
      ? RedTumbleDryerImg
      : RedWashingMachineImg;
  return (
    <Wrapper>
      <h1>{`${id}번 ${device_type === "DRY" ? "건조기" : "세탁기"}`}</h1>
      <figure>
        <Icon broken={`${broken}`} running={`${running}`}>
          <source type="image/svg+xml" srcSet={icon} />
          <img
            alt={device_type === "DRY" ? `${id}번 건조기` : `${id}번 세탁기`}
            width="96"
            height="96"
          />
        </Icon>
      </figure>
      {!!!alive ? (
        <div>
          <figure>
            <picture>
              <source type="image/svg+xml" srcSet={RepairImg} />
              <img alt="수리 도구" width="16" height="16" />
            </picture>
          </figure>
          <p>수리중</p>
        </div>
      ) : (
        <p>{`${!!!state ? "작동중" : "쉬는중"}`}</p>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.article`
  width: 100px;
  height: 151px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ${({ theme }) => theme.commons.boxShadow}

  h1 {
    font-size: ${({ theme }) => theme.fontSizes.text};
  }

  div {
    display: flex;
    align-items: center;

    figure {
      margin-right: 4px;
    }
  }
`;

interface IconProps {
  broken: "true" | "false";
  running: "true" | "false";
}

const Icon = styled.picture<IconProps>`
  ${(props) =>
    props.broken === "false" && props.running === "false"
      ? `filter: drop-shadow(0 0 2px ${props.theme.colors.success})`
      : `filter: drop-shadow(0 0 2px ${props.theme.colors.error})`}
`;
