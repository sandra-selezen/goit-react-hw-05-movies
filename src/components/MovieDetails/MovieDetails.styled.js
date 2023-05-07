import { Link } from "react-router-dom";
import styled from "styled-components";

export const GoBackBtn = styled(Link)`
  display: block;
  width: 60px;
  margin: 0 auto;
  padding: 4px 8px;
  text-align: center;
  border-radius: 5px;
  background: linear-gradient(90deg, hsl(277, 56%, 68%) 0%, hsl(203, 71%, 60%) 100%);
  transition: box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover {
    box-shadow: 0 8px 48px hsla(203, 71%, 25%, .5);
  }
`;

export const Wrapper = styled.div`
  margin: 24px auto;

  @media screen and (max-width: 767px) {
    width: 280px;
  }

  @media screen and (min-width: 768px) {
    width: 704px;
  }

  @media screen and (min-width: 1280px) {
    width: 846px;
  }
`;

export const DetailsList = styled.ul`
  padding: 24px;
  display: flex;
  gap: 20px;
  @media screen and (max-width: 767px) {
    flex-direction: column;
  }

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

export const DetailsItem = styled.li`
  @media screen and (min-width: 768px) {
    width: calc(100% / 2);
  }
`;

export const DetailsImg = styled.img`
  width: 248px;
  height: 315px;
  border-radius: 5px;

  @media screen and (min-width: 768px) {
    width: 294px;
    height: 400px;
  }

  @media screen and (min-width: 1280px) {
    width: 375px;
    height: 478px;
  }
`;

export const MovieTitle = styled.h1`
  margin-bottom: 20px;
  font-weight: 700;
  filter: drop-shadow(0 4px 4px #51AAFF);
  
  @media screen and (max-width: 767px) {
    font-size: 1rem;
  }
`;

export const MovieSubtitle = styled.h2`
  margin-bottom: 12px;
  font-size: 1rem;
  font-weight: 600;
`;

export const MovieText = styled.p`
  margin-bottom: 12px;
`;

export const InfoList = styled.ul`
  display: flex;
  gap: 20px;
`;

export const InfoLink = styled(Link)`
  padding: 8px 12px;
  font-weight: 600;
  text-transform: uppercase;
  border-radius: 5px;
  transition: background 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover,
  :focus {
    background: linear-gradient(90deg, hsl(277, 56%, 68%) 0%, hsl(203, 71%, 60%) 100%);
  }
`;