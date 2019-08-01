import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import ScrollToTop from './ScrollToTop'


import './../styles/main.css'
import '../slick-1.8.1/slick/slick-theme.css'
import '../slick-1.8.1/slick/slick.css'
import OnePage from './Onepage'
import LegalNotice from './LegalNotice'

function App() {
  return (
    <Router>
      <ScrollToTop>
        <Switch>
          <Route path="/" exact component={OnePage}></Route>
          <Route path="/legal-notice" component={LegalNotice}></Route>
        </Switch>
      </ScrollToTop>
    </Router>
  )
}

export default App;
