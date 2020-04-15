import React from "react";
import "./QuoteCard.css";

function QuoteRandom({ quote }) {
  return (
    <div className="QuoteCard">
      <img src={quote.image} alt={quote.character} />
      <figcaption>
        <blockquote>{quote.quote}</blockquote>
        <p>
          <cite>{quote.character}</cite>
        </p>
      </figcaption>
    </div>
  );
}

export default QuoteRandom;
