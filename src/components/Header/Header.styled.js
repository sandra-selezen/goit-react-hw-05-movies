import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Header = styled.header`
  padding-top: 24px;
  padding-bottom: 24px;
`;

export const HeaderNavList = styled.ul`
  display: flex;
  justify-content: center;
  gap: 40px;
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const HeaderNavLink = styled(NavLink)`
  font-weight: 600;
  font-size: 1.5rem;
  text-transform: uppercase;
  padding: 8px 16px;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  
  :hover,
  :focus {
    color: hsl(203, 71%, 60%);
  }

  &.active {
    background: linear-gradient(90deg, hsl(277, 56%, 68%) 0%, hsl(203, 71%, 60%) 100%);
    -webkit-background-clip: text;
    color: transparent;
  }
`;

export const Main = styled.main`
  margin: 0 auto;
  padding: 32px 0;
`;