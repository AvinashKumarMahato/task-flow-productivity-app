import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Quotes = () => {
  const [quote, setQuote] = useState('');

  useEffect(() => {
    const fetchQuote = async () => {
      try {
        const response = await axios.get('https://type.fit/api/quotes');
        const quotesData = response.data;
        const randomQuote = quotesData[Math.floor(Math.random() * quotesData.length)];
        setQuote(randomQuote.text);
      } catch (error) {
        console.error('Error fetching quote:', error);
      }
    };

    fetchQuote();
  }, []);

  return (
    <div className="quotes">
      <p className="quote-text">{quote}</p>
    </div>
  );
};

export default Quotes;
