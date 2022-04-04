import React, { Component } from 'react'
import Navdata from './navData';
import {Link} from 'react-router-dom'


export default class navbar extends Component {
  state={
    data:Navdata
  }
  render() {
    return (
      <div>
          <nav className="navbar navbar-expand-lg navbar-light bg-white b">
  <div className="container-fluid">
  <div className="container">
    <Link to='/'><a className="navbar-brand bareze b" href="#">{this.state.data[0].bareze}</a></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav b">
      <Link to='/new' className='li'>{this.state.data[1].new}</Link>
        <Link to='/casuals' className='li'>{this.state.data[1].casual}</Link>
        <Link to='/formals' className='li'>{this.state.data[1].formal}</Link>
        <Link to='/prints' className='li'>{this.state.data[1].print}</Link>
        <Link to='/shawls' className='li'>{this.state.data[1].shawl}</Link>
        <Link to='/bottoms' className='li'>{this.state.data[1].botom}</Link>
        <Link to='/bareezeman' className='li'>{this.state.data[1].barezemen}</Link>
        <Link to='/lookbook' className='li'>{this.state.data[1].look}</Link>
        <Link to='/sale' className='li'>{this.state.data[1].sale}</Link>
      </div>
    </div>
    <div class="d-flex b icons">
      <div>{this.state.data[2].search}</div>
      <div>{this.state.data[2].user}</div>
      <div>{this.state.data[2].cart}</div>

    </div>
  
    </div>
  </div>
</nav>
      </div>
    )
  }
}
