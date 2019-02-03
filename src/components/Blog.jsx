import React, { Component } from 'react';
import * as json from './portfolio.json';
import RSSParser from 'rss-parser';

class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: [],
    };
  }
  parseRss = () => {
    const parser = new RSSParser();
    const CORS_PROXY = 'https://cors-anywhere.herokuapp.com/';
    const postList = [];
    const that = this;

    //get dev.to feed via Parser and CORS proxy
    parser.parseURL(CORS_PROXY + 'https://dev.to/feed/snowleo208', function(
      err,
      feed
    ) {
      feed.items.forEach(function(entry, idx) {
        if (idx < 3) {
          //only push three posts
          postList.push({
            id: idx,
            title: entry.title,
            link: entry.link,
            date: entry.pubDate,
          });
        }
      });
      // console.log(postList);

      that.setState({
        post: postList,
      });
    });
  };

  renderPost = () => {
    console.log(this.state.post);
    return this.state.post.map(post => (
      <div className="c-post-item" key={post.id}>
        <a href={post.link} target="_blank" rel="noopener noreferrer">
          <img
            className="c-post-img"
            src="assets/dev_to_logo.jpg"
            alt="Dev.to"
          />
        </a>
        <div className="c-post-text">
          <a href={post.link} target="_blank" rel="noopener noreferrer">
            <h3>{post.title}</h3>
          </a>
          <p className="date">{post.date.slice(0, 16)}</p>
        </div>
      </div>
    ));
  };

  componentDidMount() {
    this.parseRss();
  }

  render() {
    const translate = json.default;

    const list = this.state.post.map(post => (
      <div className="c-post-item" key={post.id}>
        <a href={post.link} target="_blank" rel="noopener noreferrer">
          <img
            className="c-post-img"
            src="assets/dev_to_logo.jpg"
            alt="Dev.to"
          />
        </a>
        <div className="c-post-text">
          <a href={post.link} target="_blank" rel="noopener noreferrer">
            <h3>{post.title}</h3>
          </a>
          <p className="date">{post.date.slice(0, 16)}</p>
        </div>
      </div>
    ));

    return (
      <section className="c-post u-section-padding">
        <h1 className="c-post-title u-section-header">{translate.blogTitle}</h1>
        <div className="c-post-grid">{list}</div>
      </section>
    );
  }
}

export default Blog;
