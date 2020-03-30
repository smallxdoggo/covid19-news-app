import React from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Media from 'react-bootstrap/Media';

const News = props => (
    
    <Row>
        <a className='card-link' href={props.article.url}>
            <Card style={{
                margin: 3,
                border: 1
                }}>
                <div style={{
                margin: 3
                }}>
                <Media>
                    <Media.Body>
                        <h4>{props.article.title}</h4>
                        <p>{ props.article.description }</p>
                    </Media.Body>
                    <img
                    width={120}
                    height={90}
                    style={{objectFit:'cover'}}
                    src={ props.article.urlToImage }
                    alt="Generic placeholder"
                    />
                </Media>
                <Card.Link href={ props.article.url }><a className='read-more'>Read More</a></Card.Link>
                </div>     
            </Card>
        </a>
    </Row> 

    
);

export default News;