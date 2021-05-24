import React, { useEffect, useState } from 'react'
import { Link, withRouter } from "react-router-dom"

import Button from '../../components/Button'

import './styles.css'

const { REACT_APP_API_HOST: baseUrl } = process.env;

const Articles = ({ history }) => {

  const [articlesList, setArticlesList] = useState([])

  useEffect(() => {
    try {
      fetch(`${baseUrl}/articles`, { 
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
        jwt: localStorage.getItem('token'),
      }})
      .then((response) => response.json())
      .then((data) => setArticlesList(data));;
    } catch (e) {
      console.log(`Request failed: ${e}`);
    }
  }, [])

  const signOut = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('expiration')
    history.push('/signIn')
  }

  return (
    <>
      <div className="button-container">
        <Button label="Sign out" onClick={signOut} buttonType="primary" />
      </div>
      <div className="articles-list">
        { (articlesList.length > 0) && articlesList.map(article => 
          <Link key={article.id} to={`/article/${article.id}`}>{article.title}</Link>
        )}
      </div>
    </>
  )
}

export default withRouter(Articles);
