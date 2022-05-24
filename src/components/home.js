import React from 'react';
import { useSelector } from 'react-redux';

const Home = () => {
  const quotes = useSelector((state) => state.quoteReducers);
  return (
    <div>
      <div id="container" className="mx-auto w-50 ">
        <div id="quote-box" className="container-fluid">
          <div id="text" className="fs-1">{quotes.content}</div>
          <div id="author" className="fs-3 ml-1">
            -
            {quotes.author}
          </div>
          <div className="btn btn-primary p-3 mt-4"><a className="text-white" href="https://twitter.com/home" id="tweet-quote">tweet</a></div>
          <button type="button" id="new-quote" className="btn btn-secondary"><a href="/" id="new-quotee" className="text-white">New quote</a></button>
        </div>
      </div>
    </div>
  );
};

export default Home;
