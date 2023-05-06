import { Suspense } from "react"
import { Outlet } from "react-router-dom"
import { Container } from "./Container/Container.styled"
import { Header, HeaderNavLink, HeaderNavList, Main } from "./Header/Header.styled"

export const Layout = () => {
  return (
    <Container>
      <Header>
        <nav>
          <HeaderNavList>
            <li><HeaderNavLink to="/">Home</HeaderNavLink></li>
            <li><HeaderNavLink to="/movies">Movies</HeaderNavLink></li>
          </HeaderNavList>
        </nav>
      </Header>
      <Main>
        <Suspense>
          <Outlet />
        </Suspense>
      </Main>
    </Container>
  )
}