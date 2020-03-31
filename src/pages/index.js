import React, {useState, useEffect} from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import makeTweet from '../../markov'

const IndexPage = () => {
    const [post, setPost] = useState('');
    useEffect(()=> {
        setPost(makeTweet());
    }, [])
    const clickHandler = () => setPost(makeTweet());
    let date = new Date().toDateString();
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
        <button onClick={clickHandler}>Another One!</button>
    </div>
  </Layout>
  )
}

export default IndexPage
