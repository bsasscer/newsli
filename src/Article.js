import React, { Component } from 'react'



class Article extends Component {


    render() {
    
      const { article } = this.props;

        return (
            <div>
              <li key={article.source.id}>
                <p>{article.source.name}</p>
                <p>{article.title}</p>
                {/*
                  <div className="article-img" style={{ width: 200, height: 200, backgroundImage:`url(${article.urlToImage})` }}>
                  </div>
              */}
                
              </li>
            </div>
  
        )
    }
}

export default Article