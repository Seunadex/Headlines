import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { hashHistory } from 'react-router';
import { Card, CardBlock, CardText, Container, Row, Col, Button, Jumbotron } from 'reactstrap';
import sourceStore from '../stores/SourceStore';
import SourceAction from '../actions/SourceAction';
import Header from './layout/Header';
import Footer from './layout/Footer';
import Search from './NewsSearch';


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
    this.updateSearch = this.updateSearch.bind(this);
  }

  /**
   *  @desc represents a life cycle state of this component.
   * It updates the state of this component when it is rendered.
   */
  componentDidMount() {
    sourceStore.addChangeListener(this.onChange);
    SourceAction.fetchSources();
  }

  componentWillUnmount() {
    sourceStore.removeChangeListener(this.onChange);
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
 * @function
 * @returns {object} array
 * @description calls getNewsSources
 **/
  getInitialSourcesState() {
    return getNewsSources();
  }
  /**
   * @desc links the state of the sources property of
   *  this component to the state of the news sources store.
   * @returns {object} array of news sources
   * @memberof NewsSources
   */
  getNewsSources() {
    return {
      sources: sourceStore.getAll(),
    };
  }

  /**
   *
   * @desc passes sort parameter via route
   * @param {string} href news sources id and sort type are passed as a string.
   *
   * @memberof NewsSources
   */
  getSortValue(href) {
    hashHistory.push(href);
  }
  /**
   * @desc update the state of search property
   * @param {function} event represents the onchange event
   *  that triggers change in user input on the search bar.
   * @memberof NewsSources
   */
  updateSearch(event) {
    this.setState({ search: event.target.value });
  }

// render function
  render() {
    /**
     * filter this.state.sources content based on search criteria(this.state.search)
     */
    const filteredSources = this.state.sources.filter(source => source.title.toLowerCase()
    .indexOf(this.state.search.toLowerCase()) !== -1);
    const newsNode = filteredSources.map(source => (
      <Col xs="12" sm="6" md="4" key={source.id}>
        <Card className="card-row">
          <div className="text-center title"><h2>{source.title}</h2></div>
          <CardBlock>
            <CardText className="description">{source.description.substr(0, 200)}...</CardText>
            <div className="float-left">
              <CardText className="category">
                <span><strong>Category</strong>
                  <i
                    className="fa fa-angle-double-right"
                    aria-hidden="true"
                  /> {source.category}</span>
              </CardText>
            </div>
            <div>
              <Button
                color="info"
                className="view"
                onClick={this.getSortValue.bind(this, `${source.href}/${source.sortBysAvailable}`)}
              >View Headlines</Button>
            </div>
          </CardBlock>
        </Card>
      </Col>
          ));
    let output = {};
    if (!this.state.sources.length) {
      output = <div><div className="loader" /><h1 className='text-center'>Loading...</h1></div>;
    } else {
      output = newsNode;
    }
    return (
      <div>
        <Header />
        <div className="banner">
          <Jumbotron fluid>
            <Container fluid>
              <h1 className="display-3">Select News from various sources</h1>
            </Container>
          </Jumbotron>
        </div>
        <Container>
          <Search
            searchValue={this.state.search}
            handleSearch={this.updateSearch}
          />
        </Container>
        <Container>
          <Row className="justify-content-center">
            {output}
          </Row>
        </Container>
        <Footer />
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
    offset: stringOrNumberProp,
  }),
]);

Col.propTypes = {
  xs: columnProps,
  sm: columnProps,
  md: columnProps,
};

CardBlock.propTypes = {
  // Pass in a Component to override default element
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
};

export default NewsSources;
