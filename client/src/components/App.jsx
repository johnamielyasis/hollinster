// imports the react module installed in node_modules
import React, { useState } from 'react';
import axios from 'axios';
// import Overview from './overview/Overview.jsx';
// import Related from './related/Related.jsx';
import Question from './question-answer/Question.jsx';
// import RatingsReviews from './ratings-reviews/ratings-reviews.jsx';

const App = (props) => {
  const [test, setTest] = useState(true);
  const productID = 25167;

  return (
    <>
      <h1 style={{ fontFamily: 'Staatliches' }}>HOLLINSTER established 1991</h1>
      <button onClick={() => {setTest(!test)}}>{test.toString()}</button>
      {/* <Overview /> */}
      {/* don't forget to remove this before committing */}
       <Question />
      {/* <Related /> */}
      {/* <RatingsReviews productID={productID} /> */}
    </>
  );
};

export default App;
