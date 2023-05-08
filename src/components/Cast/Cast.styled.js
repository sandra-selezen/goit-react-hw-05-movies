import styled from "styled-components";

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 16px;
  padding-left: 44px;
  padding-right: 44px;
`;

export const Item = styled.li`
  width: calc((100% - 80) / 6);
`;

export const Image = styled.img`
  width: 180px;
  margin-bottom: 8px;
  border-radius: 5px;
`;

export const Title = styled.p`
  width: 140px;
`;