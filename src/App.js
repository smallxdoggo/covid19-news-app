import React from 'react';
import './App.css';
import News from './components/News';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const API_KEY = '9a076ee1e0394afe91bcb903e7e6f6a0';
// http://newsapi.org/v2/everything?qInTitle=coronavirus&sortBy=popularity&apiKey=9a076ee1e0394afe91bcb903e7e6f6a0

// Components: Title, News, 

class App extends React.Component{

  constructor(props) {
    super(props);
    this.getNews()
    this.state = { articles: [] }
    //this.getNews = this.getNews.bind(this)
  }

  componentDidMount() {
    this.setState({
      articles: []
    })
    this.createNews();
  }

  getNews = async (e) => {
    const api_call = await fetch(`http://newsapi.org/v2/everything?qInTitle=coronavirus&sortBy=relevancy&apiKey=${API_KEY}`);
    const data = await api_call.json();
    console.log(data.articles);
    
    this.setState({
      articles: data.articles
    })
    
  }

  

  createNews = () => {
    let news = [];
    // console.log(this.state.articles)
    for (let i = 0; i < this.state.articles.length; i++) {  
      news.push( 
        <News article={this.state.articles[i]} /> 
      );
    }

    return news;
  }

  
  
  render() {
    return (
      <div className='background'>
        
        <Navbar className = "heading">
          <Navbar.Brand href="#home"><h1 className='heading-title'>Coronavirus 360</h1></Navbar.Brand>
        </Navbar>
        
       
        
        <Container>
            <Row style={{marginTop:3, marginBottom:6}}> 
              <Col></Col>
              <Col lg={8}>
                { this.createNews() }
              </Col>   
              <Col></Col>     
            </Row>      
        </Container>
      </div>
    );
  }
}

export default App;
