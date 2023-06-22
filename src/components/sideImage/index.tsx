import { useRecoilValue } from "recoil";
import { PageStateAtom, PageStateAtomType } from "../../atoms/pageState";
import { styled } from "styled-components";
import { Room1, Room2 } from "../../assets/images/room";

export const SideImage = () => {
  const pageState = useRecoilValue<PageStateAtomType>(PageStateAtom);
  const src = pageState.page === 1 ? Room1 : pageState.page === 2 && Room2;

  return (
    <Wrapper>
      <picture>
        <source type="image/png" srcSet={src as string} />
        <img alt={`${pageState.page}번 세탁실`} width="912" height="684" />
      </picture>
    </Wrapper>
  );
};

const Wrapper = styled.figure`
  picture {
    filter: brightness(90%) blur(2px);
    transition: filter 0.25s ease, transform 0.25s ease;
    overflow: hidden;
    will-change: filter, transform;

    img {
      width: 912px;
      height: 684px;

      object-fit: cover;
      border-radius: 10px;
    }
  }

  picture:hover {
    filter: none;
    transform: translateX(-216px);
  }
`;
