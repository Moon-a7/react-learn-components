import React, { Component } from 'react'
import './App.css'
import {
  BrowserRouter as Router,
  NavLink,
  Route,
  Switch,
} from 'react-router-dom'

const Home = () => <h1>Start page</h1>
const Handyman = () => <h1> Lord Handyman</h1>
const Category = () => <h1>Category</h1>
const Announcements = () => <h1>Announcements</h1> // oferuję || szukam
const Search = () => <h1>Search</h1>
const News = () => <h1>News</h1>
const MyProfile = () => <h1>My profil</h1>
const ErrorPage = () => <h1>Error page</h1>

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <header>
            <nav>
              <ul>
                <li>
                  <NavLink
                    to="/"
                    exact
                    activeClassName="home-selected"
                    activeStyle={{
                      backgroundColor: 'gray',
                      letterSpacing: '6px',
                    }}
                  >
                    Start
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/handyman" activeClassName="handyman-selected">
                    Handyman
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/category" activeClassName="category-selected">
                    Category
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/announcements"
                    activeClassName="announcements-selected"
                  >
                    Announcements
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/news" activeClassName="news-selected">
                    News
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/myprofile" activeClassName="myProfile-selected">
                    Profil
                  </NavLink>
                </li>
              </ul>
            </nav>
          </header>
          <section>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/handyman" component={Handyman} />
              <Route path="/category" component={Category} />
              <Route path="/announcements" component={Announcements} />
              <Route path="/search" component={Search} />
              <Route path="/news" component={News} />
              <Route path="/myprofile" component={MyProfile} />
              <Route component={ErrorPage} />
            </Switch>
          </section>
        </div>
      </Router>
    )
  }
}
export default App
