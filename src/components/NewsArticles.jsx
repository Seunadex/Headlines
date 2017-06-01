import React, { Component } from 'react';
import { Form, FormGroup, Input, Card, CardText, CardBlock,
  CardTitle, CardSubtitle, Row, Col, Container } from 'reactstrap';
import PropTypes from 'prop-types';
import Header from './layout/Header.jsx';
import newsStore from '../stores/NewsStore';
import NewsActions from '../actions/NewsActions';


/**
 * represents the NewsArticles component
 * 
 * @class NewsArticles
 * @extends {Component}
 */
class NewsArticles extends Component {

  /**
   * Creates an instance of NewsArticles with an articles property.
   * 
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
   * 
   * @desc calls getArticles method
   * @returns {object} represents the value of the articles property
   * 
   * @memberof NewsArticles
   */
  getInitialArticlesState() {
    return getArticles();
  }

  /**
   * @desc represents a life cycle state of this component. 
   * It updates the state of this component when it is rendered.
   * 
   * 
   * @memberof NewsArticles
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
   * @memberof NewsArticles
   */
  onChange() {
    this.setState({ articles: newsStore.getAll() });
  }

  /**
   * 
   * @desc links the state of the articles 
   * property to the state of the news store
   * @returns {object} array 
   * 
   * @memberof NewsArticles
   */
  getArticles() {
    return {
      articles: newsStore.getAll(),
    };
  }


  /**
   * @desc makes an api call to sort news articles
   * @return {void}
   * @param {function} event represents the onChange event that 
   * triggers change in user input on the drop-down options.
   * 
   */
  handleSort(event) {
    const { params } = this.props;
    event.preventDefault();
    const val = event.target.value;
    NewsActions.fetchNews(params.id, val);
  }

  render() {
    const { params } = this.props;
    const sortOrder = params.sort.split(',');
    const option = sortOrder.map((type, index) => <option value={type} key={index}> {type} </option>);
    return (
      <div>
      	<Header />
        <Container>
        <Row>
          <Col xs="12" md="4"> 
            <h1 className="params-uppercase">{params.id}</h1>
          </Col>

          <Col xs="6" sm="6" md="4">
            <Form className="order">
              <FormGroup>
                <Input type="select" name="select" id="exampleSelect" onChange={this.handleSort.bind(this)}>
                  {option}
                </Input>
              </FormGroup>
            </Form>
          </Col>

          <Col xs="6" md="4" className="back">
              <a className="" href="/"><i className="fa fa-angle-double-left icon-back" 
              aria-hidden="true">
              </i> Back</a>
          </Col>

        </Row>
        </Container>


        <Container className="justify-content-center">
        <Row>
          {this.state.articles.map((news) => {
            const myStyle = {
              height: '190px',
              background: `url(${news.image}) center center`,
              width: '100%',
              backgroundSize: 'cover',
            };

            return ( 
            <a href={news.href} rel="noopener noreferrer" target="_blank" >
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
              </Col>
             </a>
            );
          })}
        </Row>
       </Container>
      </div>
    );
  }

}

NewsArticles.defaultProps = {
  params: {sort:'top'},
  articles: [],
};

NewsArticles.propTypes = {
  params: PropTypes.object,
};


export default NewsArticles;
