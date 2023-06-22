import styled from "styled-components";
import { useEffect, useState } from "react";
import { LogoImg } from "../../assets/images";

export const Header = () => {
  const [hideState, setHideState] = useState<boolean>(false);
  useEffect(() => {
    let prevScrollTop = 0;
    const toggleHeader = () => {
      const nextScrollTop = window.pageYOffset || 0;
      if (prevScrollTop > 48 && nextScrollTop > prevScrollTop)
        setHideState(true);
      else if (nextScrollTop < prevScrollTop) setHideState(false);
      prevScrollTop = nextScrollTop;
    };
    document.addEventListener("scroll", toggleHeader);
    return () => document.removeEventListener("scroll", toggleHeader);
  }, []);
  return (
    <Wrapper hide={`${hideState}`}>
      <h1>
        <figure>
          <picture>
            <source type="image/svg+xml" srcSet={LogoImg} />
            <img alt="로고" width="24" height="24" />
          </picture>
        </figure>
        OSJ
      </h1>
    </Wrapper>
  );
};

interface WrapperProps {
  hide: "true" | "false";
}

const Wrapper = styled.header<WrapperProps>`
  position: fixed;
  ${(props) => (props.hide === "true" ? `top: -48px;` : "top: 0;")}
  left: 0;

  background-color: ${({ theme }) => theme.colors.background6};

  width: 100%;
  height: 48px;

  display: flex;

  transition: top 0.25s ease;
  z-index: 99;

  h1 {
    margin: auto;

    display: flex;
    align-items: center;
    gap: 8px;

    color: ${({ theme }) => theme.colors.background1};
    font-size: ${({ theme }) => theme.fontSizes.subTitle};

    figure picture img {
      transform: translateY(-2px);

      filter: invert(1);
    }
  }
`;
