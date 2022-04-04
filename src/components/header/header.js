import React, { Component } from 'react'
import headerdata from './headerData'
import Headerdata from './headerData'

export default class header extends Component {
  state={
      data:headerdata
  }
  render() {
    return (
      <div>
          <div className='container-fluid header'>
              <div className='container'>
                <div className='row'>
                    <div className='col-lg-9 col-md-8 col-sm-7'></div>
                    <div className='col-lg-3 col-md-4 col-sm-5 d-flex justify-content-evenly list-unstyled headtext b'>
                            <li><a href=''>{this.state.data[0].help}</a></li>
                            <li><a href=''>{this.state.data[0].track}</a></li>
                            <li><a href=''>{this.state.data[0].number}</a></li>
                    </div>
                </div>
                </div>
          </div>
      </div>
    )
  }
}
