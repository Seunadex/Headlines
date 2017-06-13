import React, { Component } from 'react';
import { Form, FormGroup, Input, Card, CardText, CardBlock,
  CardTitle, CardSubtitle, Row, Col, Container } from 'reactstrap';
import PropTypes from 'prop-types';
import Header from './layout/Header';
import Footer from './layout/Footer';
import newsStore from '../stores/NewsStore';
import NewsActions from '../actions/NewsActions';
import Share from './SocialShare';


/**
 * represents the NewsArticles component
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
  }

  /**
   * @desc represents a life cycle state of this component.
   * It updates the state of this component when it is rendered.
   *
   */
  componentDidMount() {
    const { params } = this.props;
    newsStore.addChangeListener(this.onChange);
    NewsActions.fetchNews(params.id);
  }

  componentWillUnmount() {
    newsStore.removeChangeListener(this.onChange);
  }

  /**
   * @desc changes the state of articles property by
   *  listenening for change in the state of the news store.
   *
   */
  onChange() {
    this.setState({ articles: newsStore.getAll() });
  }
  /**
   *
   * @desc links the state of the articles
   * property to the state of the news store
   * @returns {object} array
   */
  getArticles() {
    return {
      articles: newsStore.getAll(),
    };
  }

  /**
   *
   * @desc calls getArticles method
   * @return represents the value of the articles property
   *
   * @memberof NewsArticles
   */
  getInitialArticlesState() {
    return getArticles();
  }

  /**
   * @desc makes an api call to sort news articles
   * @param {function} event represents the onChange event that
   * triggers change in user input on the drop-down options.
   *
   */
  handleSort(event) {
    const { params } = this.props;
    event.preventDefault();
    const targetVal = event.target.value;
    NewsActions.fetchNews(params.id, targetVal);
  }

  render() {
    const { params } = this.props;
    const sortOrder = params.sort.split(',');
    const option = sortOrder.map((type, index) =>
      <option value={type} key={index}> {type} </option>);
    return (
      <div>
        <Header />
        <Container>
          <Row>
            <Col xs="12" md="4">
              <h1 className="params-uppercase title">{params.id}</h1>
            </Col>

            <Col xs="6" sm="6" md="4">
              <Form>
                <FormGroup>
                  <Input type="select" name="select" onChange={this.handleSort.bind(this)}>
                    {option}
                  </Input>
                </FormGroup>
              </Form>
            </Col>

            <Col xs="6" md="4" className="back">
              <a href="/"><i
                className="fa fa-angle-double-left icon-back"
                aria-hidden="true"
              />
             Back</a>
            </Col>

          </Row>
        </Container>

        <Container className="justify-content-center">
          <Row>
            {this.state.articles.map((news, index) => {
              const myStyle = {
                height: '190px',
                background: `url(${news.image}) center center`,
                width: '100%',
                backgroundSize: 'cover',
              };

              return (
                <a href={news.href} key={index} rel="noopener noreferrer" target="_blank" >
                  <Col xs="12" sm="6" md="4" className="article-frame">
                    <Card>
                      <CardBlock>
                        <CardTitle className="title">{news.meta}</CardTitle>
                        <CardSubtitle>{news.header}</CardSubtitle>
                      </CardBlock>
                      <div style={myStyle} />
                      <CardBlock>
                        <CardText>{news.description}</CardText>
                      </CardBlock>
                    </Card>
                    <Share share={news.href} title={news.header} />
                  </Col>
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
