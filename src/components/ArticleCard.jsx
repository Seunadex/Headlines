import React from 'react';
import { Form, FormGroup, Input, Card, CardText, CardBlock,
  CardTitle, CardSubtitle, Row, Col, Container } from 'reactstrap';
import Share from './SocialShare';

/**
 * 
 * @param {*} props 
 */
const ArticleCard = (props) => {
    const {news} = props;
     const myStyle = {
        height: '150px',
        background: `url(${news.image}) center center`,
        width: '100%',
        backgroundSize: 'cover',
    };
    return (
        <Col className="col-xs-12 col-sm-6 col-md-4 article-frame">
            <Card>
                <CardBlock>
                  <CardTitle className="title">{news.meta}</CardTitle>
                  <CardSubtitle className="subtitle">{news.header}</CardSubtitle>
                </CardBlock>
                <div style={myStyle} />
                <CardBlock>
                <CardText>{news.description}</CardText>
                </CardBlock>
            </Card>
            <div className="share-desc">
                <h6>Share Article</h6>
                <i className="fa fa-hand-o-down" aria-hidden="true"></i>
            </div>
             <Share share={news.href} title={news.header} />
        </Col>
    )
}
export default ArticleCard;