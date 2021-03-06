import React from 'react';
import { Input, InputGroup, Row, InputGroupAddon } from 'reactstrap';
import PropTypes from 'prop-types';


/**
 * @desc Represents a search bar.
 * @class {Component}
 * @extends React.Component
 */
class Search extends React.Component {
  render() {
    return (
      <Row className="search-feed">
        <InputGroup>
          <InputGroupAddon>
            <i
              className="fa fa-search search-icon"
              aria-hidden="true"
            />
          </InputGroupAddon>
          <Input
            className="app-input"
            type="text"
            placeholder="Quick Search"
            value={this.props.searchValue}
            onChange={this.props.handleSearch}
          />
        </InputGroup>
      </Row>
    );
  }
}

export default Search;
