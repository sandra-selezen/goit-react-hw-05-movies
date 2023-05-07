import styled from "styled-components";

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  padding-left: 44px;
  padding-right: 44px;
`;

export const Item = styled.li`
  width: calc((100% - 80) / 6);
`;

export const Image = styled.img`
  width: 180px;
`;

export const Title = styled.p`
  width: 100px;
`;