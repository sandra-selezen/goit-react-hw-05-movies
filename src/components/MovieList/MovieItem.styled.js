import styled from "styled-components";

export const Item = styled.li`
  border-radius: 5px;

  @media screen and (min-width: 768px) {
    flex-basis: calc((100% - 96px) / 3);
  }

  @media screen and (min-width: 1280px) {
    flex-basis: calc((100% - 96px) / 3);
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
  margin: 12px 0;
  font-size: 1.25rem;
  font-weight: 400;

  @media screen and (max-width: 767px) {
    width: 200px;
  }

  @media screen and (min-width: 1280px) {
    width: 310px;
  }
`;