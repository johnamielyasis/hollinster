import React, { useState, useEffect } from 'react';
import axios from 'axios';
import List from './List.jsx';
import YourOutfit from './YourOutfit.jsx';

export default function Related({ productID }) {
  const [current, setCurrent] = useState(productID);
  const [related, setRelated] = useState([]);
  const [outfit, setOutfit] = useState([]);

  // const addToOutfit = () => {
  //   if (!outfit.includes(current)) {
  //     setOutfit(outfit.push(current));
  //   }
  // };

  useEffect(() => {
    const storedOutfit = JSON.parse(localStorage.getItem('outfit'));
    if (storedOutfit) {
      setOutfit(storedOutfit);
    } else {
      console.log('empty');
    }
    // storedOutfit ? setOutfit(storedOutfit) : null
  }, [outfit.length]);

  useEffect(() => {
    // axios.get(`/products/${productID}`)
    //   .then((response) => {
    //     setCurrent(response.data);
    //   });
    axios.get(`/products/${productID}/related`)
      .then((response) => {
        setRelated(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const addToOutfit = () => {
    // if (!outfit.includes(current)) {
    //   outfit.push(current);
    //   localStorage.setItem('outfit', JSON.stringify(outfit));
    //   console.log('added');
    // } else {
    //   console.log('already exists');

    // const found = outfit.find((element) => element.id === current.id);
    // if (!found) {
    if (!outfit.includes(current)) {
      outfit.push(current);
      setOutfit(outfit);
      localStorage.setItem('outfit', JSON.stringify(outfit));
      console.log('added');
    } else {
      console.log('already exists');
    }
  };

  const removeFromOutfit = (id) => {
    // const found = outfit.find((element) => element.id === current.id);
    const found = outfit.findIndex((element) => element === current);
    console.log(found)
    if (found !== -1) {
      outfit.splice(found, 1);
      localStorage.setItem('outfit', JSON.stringify(outfit));
    }
  };



  return (
    <>
      <List
        current={current}
        related={related}
      />
      <YourOutfit
        current={current}
        outfit={outfit}
        addToOutfit={addToOutfit}
        removeFromOutfit={removeFromOutfit}
      />
    </>
  );
}
