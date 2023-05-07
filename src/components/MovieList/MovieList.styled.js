import styled from "styled-components";

export const MainTitle = styled.h1`
  margin-bottom: 24px;
  font-size: 2.25rem;
  font-weight: 700;
  text-align: center;
  filter: drop-shadow(0 4px 4px #51AAFF);
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  @media screen and (max-width: 767px) {
    gap: 16px;
  }

  @media screen and (min-width: 768px) {
    gap: 32px;
  }
`;