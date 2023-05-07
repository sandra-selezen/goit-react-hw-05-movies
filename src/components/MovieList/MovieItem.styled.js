import styled from "styled-components";

export const Item = styled.li`
  border-radius: 5px;
  transform: scale(1);
  transition: box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1),
              transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  @media screen and (min-width: 768px) {
    flex-basis: calc((100% - 96px) / 3);
  }

  @media screen and (min-width: 1280px) {
    flex-basis: calc((100% - 96px) / 3);
  }

  :hover {
    box-shadow: 0px -1px 33px rgba(81, 170, 255, 0.5);
    transform: scale(1.03);
  }
`;

export const ItemImage = styled.img`
  border-radius: 5px;

  @media screen and (max-width: 767px) {
    width: 280px;
    height: 406px;
  }

  @media screen and (min-width: 768px) {
    width: 224px;
    height: 325px;
  }

  @media screen and (min-width: 1280px) {
    width: 395px;
    height: 574px;
  }
`;

export const ItemTitle = styled.h2`
  margin: 12px 8px;
  font-size: 1.25rem;
  font-weight: 400;

  @media screen and (max-width: 767px) {
    width: 200px;
  }

  @media screen and (min-width: 1280px) {
    width: 310px;
  }
`;