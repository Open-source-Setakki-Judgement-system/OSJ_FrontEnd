import { styled } from "styled-components";
import { FacebookImg, GithubImg, LogoImg } from "../../assets/images";

interface FooterProps {
  status: "loading" | "connected" | "disconnected";
  uptime: string;
}

export const Footer = ({ status, uptime }: FooterProps) => {
  return (
    <Wrapper>
      <div>
        <h1>
          <figure>
            <picture>
              <source type="image/svg+xml" srcSet={LogoImg} />
              <img alt="로고" width="24" height="24" />
            </picture>
          </figure>
          Team OSJ
        </h1>
        <div>
          <a
            href="https://www.facebook.com/DSMNonamed"
            target="_blank"
            rel="noopener noreferer nofollow"
          >
            <picture>
              <source type="image/svg+xml" srcSet={FacebookImg} />
              <img alt="페이스북" width="16" height="16" />
            </picture>
          </a>
          <a
            href="https://github.com/team-osj"
            target="_blank"
            rel="noopener noreferer nofollow"
          >
            <picture>
              <source type="image/svg+xml" srcSet={GithubImg} />
              <img alt="깃허브" width="16" height="16" />
            </picture>
          </a>
        </div>
      </div>
      <div>
        <ul>
          <li>
            <h2>Embedded</h2>
            <a
              href="https://github.com/phoenix9469"
              target="_blank"
              rel="noopener noreferer nofollow"
            >
              phoenix9469
            </a>
            <a
              href="https://github.com/wksoskwl"
              target="_blank"
              rel="noopener noreferer nofollow"
            >
              wksoskwl
            </a>
          </li>
          <li>
            <h2>Flutter</h2>
            <a
              href="https://github.com/Yoochanhong"
              target="_blank"
              rel="noopener noreferer nofollow"
            >
              Yoochanhong
            </a>
          </li>
          <li>
            <h2>Front-End</h2>
            <a
              href="https://github.com/izzysden"
              target="_blank"
              rel="noopener noreferer nofollow"
            >
              izzysden
            </a>
          </li>
          <li>
            <h2>Back-End</h2>
            <a
              href="https://github.com/phoenix9469"
              target="_blank"
              rel="noopener noreferer nofollow"
            >
              phoenix9469
            </a>
          </li>
        </ul>
        <p>
          <Dot status={status} />
          {uptime}
          <span>(Session Synced)</span>
        </p>
      </div>
      <p>ⓒ 2023. NoNamed all rights reserved.</p>
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  background-color: ${({ theme }) => theme.colors.background6};

  padding: 8px;
  margin-top: 8px;

  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;

  > div {
    width: 100%;

    display: flex;
    justify-content: space-between;
    align-items: flex-start;

    div,
    h1,
    p {
      display: flex;
      align-items: center;
      gap: 8px;
    }

    div {
      a {
        transition: filter 0.25s ease;
      }

      a:hover {
        filter: drop-shadow(0 0 2px ${({ theme }) => theme.colors.background4});
      }
    }

    h1 {
      color: ${({ theme }) => theme.colors.background1};
      font-size: ${({ theme }) => theme.fontSizes.subTitle};

      figure picture img {
        transform: translateY(-2px);

        filter: invert(1);
      }
    }

    ul {
      display: flex;
      gap: 16px;

      list-style-type: none;

      h2 {
        color: ${({ theme }) => theme.colors.background1};
        font-size: ${({ theme }) => theme.fontSizes.text};
      }

      a {
        height: 21px;

        display: block;

        color: ${({ theme }) => theme.colors.background4};
        font-size: ${({ theme }) => theme.fontSizes.subText};
        text-decoration: none;

        transition: filter 0.25s ease, border-bottom 0.25s ease;
      }

      a:hover {
        filter: drop-shadow(0 0 2px ${({ theme }) => theme.colors.background5});
        border-bottom: 2px solid ${({ theme }) => theme.colors.background4};
      }
    }
  }

  p {
    color: ${({ theme }) => theme.colors.background1};
    font-size: ${({ theme }) => theme.fontSizes.text};

    span {
      display: flex;

      color: ${({ theme }) => theme.colors.background4};
    }
  }
`;

interface DotProps {
  status: "loading" | "connected" | "disconnected";
}

const Dot = styled.strong<DotProps>`
  background-color: ${(props) =>
    props.status === "connected"
      ? props.theme.colors.success
      : props.status === "disconnected"
      ? props.theme.colors.error
      : props.status === "loading" && props.theme.colors.background4};

  width: 8px;
  height: 8px;

  border-radius: 50%;
`;
