import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ArticlesList from './ArticlesList';

class App extends Component {
  
  constructor() {
    super();
    this.state = { articles: [] };
  }
  
  componentDidMount() {
    const url = 'https://newsapi.org/v2/top-headlines?' +
                'country=us&' +
                'apiKey=' + 
                process.env.REACT_APP_SECRET;
                    

    let req = new Request(url);
    fetch(req)
    .then(res => res.json())
    .then((data) => {
      this.setState(() => ({
          articles: data.articles
      }))
    }) 
  }
  
  
  render() {
    
    
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Newsli!</h2>
        </div>
        <ArticlesList articles={this.state.articles}/>
      </div>
    );
  }
}

export default App;
