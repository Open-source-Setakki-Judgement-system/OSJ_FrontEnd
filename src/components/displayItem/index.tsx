import styled from "styled-components";

interface DisplayItemProps {
  src: string;
  alt: string;
  text: string;
}

const DisplayItem = ({ src, alt, text }: DisplayItemProps) => {
  return (
    <Wrapper>
      <figure>
        <picture>
          <source type="image/svg+xml" srcSet={src} />
          <img alt={alt} width="16" height="16" />
        </picture>
      </figure>
      <p>{text}</p>
    </Wrapper>
  );
};

export default DisplayItem;

const Wrapper = styled.div`
  margin-left: 8px;
  margin-right: 8px;

  width: calc(100% - 16px);
  height: 37px;

  display: flex;
  justify-content: center;
  align-items: center;

  ${({ theme }) => theme.commons.boxShadow}
  ${({ theme }) => theme.animations.fade}

  animation: fade 0.5s ease;

  p {
    margin-left: 4px;
  }
`;
