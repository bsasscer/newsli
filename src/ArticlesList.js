import React, { Component } from 'react'
import Article from './Article'


class ArticlesList extends Component {


    render() {
    
      const { articles } = this.props;

        return (
            <div>
              <ol className="articles-grid">
                  {articles.map(article => (
                      <Article
                          article={article}
                          key={article.title}
                      />
                  ))}
              </ol>
            </div>
  
        )
    }
}

export default ArticlesList
