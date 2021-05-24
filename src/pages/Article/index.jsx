import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom"

import './styles.css';

const { REACT_APP_API_HOST: baseUrl } = process.env;

const Articles = (props) => {

  const [article, setArticle] = useState({})

  const articleId = props.match.params.articleId

  useEffect(() => {
    try {
      fetch(`${baseUrl}/articles/${articleId}`, { 
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
        jwt: localStorage.getItem('token'),
      }})
      .then((response) => response.json())
      .then((data) => setArticle(data));
    } catch (e) {
      console.log(`Request failed: ${e}`);
    }
  }, [articleId])

  return (
    <div className="article-content">
      <Link className="article-back-button" to={`/articles/`}>Back to articles</Link>
      <div className="article-title">{article?.title}</div>
      <div className="article-description">{article?.description}</div>
      <div className="article-text">{article?.text}</div>
      {article?.image && <img className="article-img" src={article.image} alt="article-img" />}
      <a href={article?.source} target="_blank" rel="noreferrer" className="article-source">{article?.source}</a>
    </div>
  )
}

export default Articles;