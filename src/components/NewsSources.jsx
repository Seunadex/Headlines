import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { browserHistory } from 'react-router';
import { InputGroup, Input, Card,CardImg ,CardBlock, CardText, CardTitle, Container, Row, Col, Button } from 'reactstrap';
import newsSourcesStore from '../stores/NewsSourcesStore';
import NewsActions from '../actions/NewsActions';
import Header from './layout/Header.jsx';
import Search from './NewsSearch.jsx';


/**
 * @desc represents NewsSources component 
 * 
 * @class NewsSources
 * @extends {Component}
 */
class NewsSources extends Component {

  /**
   * Creates an instance of NewsSources.
   * 
   * @memberof NewsSources
   */
  constructor() {
    super();
    this.state = {
      sources: [],
      search: '',
    };

    this.getNewsSources = this.getNewsSources.bind(this);
    this.onChange = this.onChange.bind(this);
  }

/**
 * @function
 * @returns {object} array
 * @description calls getNewsSources
 * */
  getInitialSourcesState() {
    return getNewsSources();
  }

/**
 * @function
 * @returns {object} array
 * @description update sources state by listening for 
 * change in the state of the sources store.
 * */
  onChange() {
    const SourcesState = this.getNewsSources();
    this.setState({
      sources: SourcesState.sources || [],
    });
  }

  /**
   *  @desc represents a life cycle state of this component. 
   * It updates the state of this component when it is rendered.
   */
  componentDidMount() {
    newsSourcesStore.addChangeListener(this.onChange);
    NewsActions.fetchSources();
  }

  componentWillUnMount() {
    newsSourcesStore.removeChangeListener(this.onChange);
  }

  /**
   * @desc links the state of the sources property of
   *  this component to the state of the news sources store.
   * @returns {object} array of news sources
   * @memberof NewsSources
   */
  getNewsSources() {
    return {
      sources: newsSourcesStore.getAll(),
    };
  }

  /**
   * @desc update the state of search property
   * @param {function} event represents the onchange event
   *  that triggers change in user inpiut on the search bar.
   * @memberof NewsSources
   */
  updateSearch(event) {
    this.setState({ search: event.target.value });
  }

  /**
   * 
   * @desc passes sort parameter via route
   * @param {string} href news sources id and sorttype are passed as a string.
   * 
   * @memberof NewsSources
   */
  getSortValue(href) {
    browserHistory.push(href);
  }

// render function
  render() {
    const filteredSources = this.state.sources.filter(source => source.title.toLowerCase()
    .indexOf(this.state.search.toLowerCase()) !== -1);

    return (
      <div>
        <Header />
        <Container>
           <Search searchValue={this.state.search} 
           handleSearch={this.updateSearch.bind(this)} />
        </Container>
        <Container>
          <Row className="card-row justify-content-center">
            {filteredSources.map(source => (
            
            <Col xs="12" sm="6" md="4" key={source.id}>
            <Card className="card">
              <CardTitle className="text-center"><h2>{source.title}</h2></CardTitle>
              <CardBlock>
                <CardText>{source.description}</CardText>
                <div className="float-left">
                  <CardText className="category"><span>Category  <i className="fa fa-angle-right" aria-hidden="true"></i> {source.category}</span></CardText>
                </div>
                <div className="float-right">
                  <Button color="info" className="view" 
                   onClick={this.getSortValue.bind(this, `${source.href}/${source.sortBysAvailable}`)}
                  >View Headlines</Button>
                </div>
                </CardBlock>
              </Card>
            </Col>
          ))}
        </Row>
        </Container>

      </div>
    );
  }
}

NewsSources.defaultProps = {
  sources: [],
  search: '',
};

NewsSources.propTypes = {
  sources: PropTypes.array,
  search: PropTypes.string,
};

const stringOrNumberProp = PropTypes.oneOfType([PropTypes.number, PropTypes.string]);
const columnProps = PropTypes.oneOfType([
  PropTypes.string,
  PropTypes.number,
  PropTypes.bool,
  PropTypes.shape({
    size: PropTypes.oneOfType([PropTypes.bool, PropTypes.number, PropTypes.string]),
    push: stringOrNumberProp,
    pull: stringOrNumberProp,
    offset: stringOrNumberProp
  })
]);

Col.propTypes = {
  xs: columnProps,
  sm: columnProps,
  md: columnProps,
};

CardBlock.propTypes = {
  // Pass in a Component to override default element
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string
};


export default NewsSources;
