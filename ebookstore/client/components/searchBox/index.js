import React, { Component } from 'react'
import { connect } from 'react-redux'

export default class SearchBox extends Component {
  constructor(props){
    super(props);
    this.onSearch = this.onSearch.bind(this)
  }

  onSearch(event){
    this.props.search(event.target.value);
  }

  render(){
    return (
      <div className="row" style={{padding: '1%'}}>
        <input type="text" style={{padding: '0 5px', width: '20%'}} placeholder="Search books" onChange={this.onSearch} />
      </div>
    )
  }
}
