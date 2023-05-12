import styled from "styled-components";
import { TdImg, WmImg } from "../../assets/images";
import { DeviceType } from "../../types/device";

const Device = ({ id, state, device_type, alive }: DeviceType) => {
  return (
    <Wrapper>
      <picture>
        <source
          type="image/webp"
          srcSet={device_type === "DRY" ? TdImg : WmImg}
        />
        <img
          src={device_type === "DRY" ? TdImg : WmImg}
          alt={device_type === "DRY" ? `${id}번 건조기` : `${id}번 세탁기`}
          width="96"
          height="96"
        />
      </picture>
    </Wrapper>
  );
};

const Wrapper = styled.article``;

export default Device;
