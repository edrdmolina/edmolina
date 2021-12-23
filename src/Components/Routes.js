import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router'

import About from '../Pages/About'
import Projects from '../Pages/Projects'
import Photos from '../Pages/Photos'
import Contact from '../Pages/Contact'

export class Routes extends Component {
    render() {
        return (
            <Switch>
                <Route
                    exact
                    path='/about'
                    render={ routeProps => <About {...routeProps } /> }
                />
                <Route
                    exact
                    path='/projects'
                    render={ routeProps => <Projects {...routeProps } /> }
                />
                <Route
                    exact
                    path='/photos'
                    render={ routeProps => <Photos {...routeProps } /> }
                />
                <Route
                    exact
                    path='/contact'
                    render={ routeProps => <Contact {...routeProps } /> }
                />
                <Redirect to='/about' />
            </Switch>
        )
    }
}

export default Routes
