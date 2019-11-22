import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import post from '../../markov'

const IndexPage = () => {
    let date = new Date().toDateString();
    function refreshPage(){
        window.location.reload();
    } 
  return (
  <Layout>
    <SEO title="Home" />
    <h1>Make Tweets Great Again!</h1>
    <div class="post">
        <img class="trump" src="https://pbs.twimg.com/profile_images/874276197357596672/kUuht00m_400x400.jpg" alt="trump"/>
        <h2>Donald J. Trump</h2>
    <h3> @realDonaldTrump</h3>
    <p id="tweet">{post}</p>
    <p id="demo">{date}</p>
    </div>
    <div className="button">
        <button onClick={refreshPage}>Another One!</button>
    </div>
  </Layout>
  )
}

export default IndexPage
