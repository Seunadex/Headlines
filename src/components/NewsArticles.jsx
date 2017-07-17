import React, { Component } from 'react';
import { Form, FormGroup, Input, Card, CardText, CardBlock,
  CardTitle, CardSubtitle, Row, Col, Container } from 'reactstrap';
import { hashHistory } from 'react-router';
import PropTypes from 'prop-types';
import Header from './layout/Header';
import Footer from './layout/Footer';
import articleStore from '../stores/ArticleStore';
import ArticleAction from '../actions/ArticleAction';
import ArticleCard from './ArticleCard';


/**
 * @desc represents the NewsArticles component
 * @class NewsArticles
 * @extends {Component}
 */
class NewsArticles extends Component {

  /**
   * Creates an instance of NewsArticles with an articles property.
   * @memberof NewsArticles
   */
  constructor() {
    super();
    this.state = {
      articles: [],
    };
    this.onChange = this.onChange.bind(this);
    this.handleSort = this.handleSort.bind(this);
  }
  onClick() {
    hashHistory.push('/');
  }

  /**
   * @desc represents a life cycle state of this component.
   * It updates the state of this component when it is rendered.
   *
   */
  componentDidMount() {
    const { params } = this.props;
    articleStore.addChangeListener(this.onChange);
    ArticleAction.fetchNews(params.id);
  }

  componentWillUnmount() {
    articleStore.removeChangeListener(this.onChange);
  }

  /**
   * @desc changes the state of articles property by
   *  listenening for change in the state of the news store.
   *
   */
  onChange() {
    this.setState({ articles: articleStore.getAll() });
  }
  /**
   *
   * @desc links the state of the articles
   * property to the state of the news store
   * @returns {object} array
   */
  getArticles() {
    return {
      articles: this.articleStore.getAll(),
    };
  }

  /**
   * 
   * @desc makes an api call to sort news articles
   * @param {string} event represents the onChange event that triggers change in user input on the drop-down options.
   * 
   * @memberof NewsArticles
   */
  handleSort(event) {
    event.preventDefault();
    const targetVal = event.target.value;
    const { params } = this.props;
    ArticleAction.fetchNews(params.id, targetVal);
  }

  render() {
    const { params } = this.props;
    const sortOrder = params.sort.split(',');
    const option = sortOrder.map((type, index) =>
      <option value={type} key={index}> {type} </option>);

    if (!this.state.articles.length) {
      return (<div>
        <Header />
        <div className="loader" />
        <h2 className='text-center'>Loading...</h2>
      </div>);
    }
    return (
      <div>
        <Header />
        <Container>
          <Row>
            <Col xs="12" sm="12" md="4">
              <h1 className="params-uppercase title">{params.id}</h1>
            </Col>

            <Col xs="6" sm="6" md="4">
              <Form>
                <FormGroup>
                  <Input type="select" name="select" className='sortbar' onChange={this.handleSort}>
                    {option}
                  </Input>
                </FormGroup>
              </Form>
            </Col>
            <button onClick={this.onClick} className="btn btn-info back">Back to Home</button>
          </Row>
        </Container>

        <Container fluid className="justify-content-center">
          <Row>
            {this.state.articles.map((news, index) => {
              return (
                <a href={news.href} key={index} rel="noopener noreferrer" target="_blank" >
                  <ArticleCard news={news} />
                </a>
              );
            })}
          </Row>
        </Container>
        <Footer />
      </div>
    );
  }

}

NewsArticles.defaultProps = {
  params: { sort: 'top' },
  articles: [],
};

NewsArticles.propTypes = {
  params: PropTypes.object,
};

export default NewsArticles;
