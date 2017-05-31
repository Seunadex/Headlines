import React, { Component } from 'react';
import { Input, InputGroup, Row } from 'reactstrap';


/**
 * @desc Represents a search bar.
 * @class {Component}
 * @extends React.Component
 */
class Search extends React.Component {
  render(){
    return (
      <Row className="search-feed">
        <InputGroup className="searchBar">
          <Input
          className="app-input" placeholder="Search"
          value={this.props.searchValue} onChange={this.props.handleSearch}
          />
            <i className="fa fa-search search-icon" aria-hidden="true"></i>
          </InputGroup>
      </Row>
    )
  }
}

export default Search;