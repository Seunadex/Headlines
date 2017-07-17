import React from 'react';
import { Card, CardBlock, CardText, Container, Row, Col, Button, Jumbotron } from 'reactstrap';

/**
 * 
 * @param {*} props 
 */
const SourceCard = (props) => {
    const {source, getSortValue} = props;
    return (
        <Col xs="12" sm="6" md="4">
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
                onClick={() => getSortValue(`${source.href}/${source.sortBysAvailable}`)}
              >View Headlines</Button>
            </div>
          </CardBlock>
        </Card>
      </Col>
    );
};

export default SourceCard;