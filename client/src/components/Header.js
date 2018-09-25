import React, {Component} from 'react';
import { connect } from 'react-redux';
import { NavLink, Link, IndexLink} from 'react-router-dom';
import Login from './Login'


class Header extends Component{
  renderContent(){
    switch(this.props.auth){
      case null:
        return;
      case false:
        return <Login />;
      default:
        return [
          <li key="1" class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownNotificationLink" data-toggle="dropdown" aria-haspopup="false" aria-expanded="false">
              <i class="material-icons">
                notifications_none
              </i>
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdownNotificationLink">
              <a class="dropdown-item" href="#">No Notifications</a>
            </div>
          </li>,
          <li key="2" class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <i class="material-icons">
                account_box
              </i>
              Brian Taylor
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <a class="dropdown-item" href="#">Settings</a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="/api/logout">Logout</a>
            </div>
          </li>
        ];
    }
  }





  render(){
    return(
      <nav class="navbar header navbar-expand-md  justify-content-center">
          <Link to={this.props.auth ? '/dashboard' : '/'} className="navbar-brand mb-0 h1">
            FareShare
          </Link>
          <button class="navbar-toggler ml-1" type="button" data-toggle="collapse" data-target="#collapsingNavbar2">
              <span class="navbar-toggler-icon"></span>
          </button>
          <div class="navbar-collapse collapse justify-content-between align-items-center w-100" id="collapsingNavbar2">
              <ul class="navbar-nav mx-auto text-center">
                  <li class="nav-item">
                    <NavLink exact to='/dashboard' className="nav-link" activeClassName="active-header">
                      Dashboard
                    </NavLink>
                  </li>
                  <li class="nav-item">
                    <NavLink exact to='/bills' className="nav-link" activeClassName="active-header">
                      Bills
                    </NavLink>
                  </li>
                  <li class="nav-item">
                      <a class="nav-link" href="#">Calendar</a>
                  </li>
              </ul>
              <ul class="nav navbar-nav flex-row justify-content-center flex-nowrap">
                  {this.renderContent()}
              </ul>
          </div>
      </nav>
    )
  }
}

function mapStateToProps({ auth }){
  return { auth };
}

export default connect(mapStateToProps) (Header);
