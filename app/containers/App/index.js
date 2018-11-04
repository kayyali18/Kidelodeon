/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react'
import { Helmet } from 'react-helmet'
import styled from 'styled-components'
import { Switch, Route } from 'react-router-dom'

import HomePage from 'containers/HomePage/Loadable'
import NotFoundPage from 'containers/NotFoundPage/Loadable'
import Footer from 'components/Footer'
import Header from 'components/Header'
import GlobalStyle from '../../global-styles'

const AppWrapper = styled.div`
  display: grid;
  grid-template-rows: 1fr 9fr 1fr;
  min-height: 100vh;
  background-color: gray;
`

export default function App() {
  return (
    <AppWrapper>
      <Helmet titleTemplate="%s - Kidelodeon" defaultTitle="Kidelodeon">
        <meta
          name="A kid friendly application for kids to explore the web"
          content="Kidelodeon Fumble"
        />
      </Helmet>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route component={NotFoundPage} />
      </Switch>
      <Footer />
      <GlobalStyle />
    </AppWrapper>
  )
}
