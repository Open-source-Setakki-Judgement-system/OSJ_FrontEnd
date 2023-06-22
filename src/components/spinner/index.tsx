import styled from "styled-components";

interface SpinnerProps {
  fit: "cover" | "contain";
}

const Spinner = ({ fit }: SpinnerProps) => {
  return (
    <Wrapper className="spinner" fit={fit}>
      <span />
    </Wrapper>
  );
};

export default Spinner;

const Wrapper = styled.div<SpinnerProps>`
  ${(props) =>
    props.fit === "cover" &&
    `position: fixed;
  top: 0;
  left: 0;

  width: 100vw;
  height: 100vh;`}

  ${(props) =>
    props.fit === "contain" &&
    `width: 100%;
  height: calc(100% + 48px);`}

  background-color: ${({ theme }) => theme.colors.translucent};

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 10px;
  z-index: 100;

  ${({ theme }) => theme.animations.spin}

  span {
    position: absolute;

    width: 48px;
    height: 48px;

    border-radius: 50%;
    border: 3px solid ${({ theme }) => theme.colors.background1};
    border-top: 3px solid ${({ theme }) => theme.colors.translucent};

    animation: spin 1s linear infinite;
  }
`;
