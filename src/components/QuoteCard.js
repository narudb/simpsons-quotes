import React from "react";
import PropTypes from "prop-types";
import "./QuoteCard.css";

class QuoteCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { favorite: false };
  }

  render() {
    return (
      <figure className="QuoteCard">
        <img src={this.props.image} alt={this.props.character} />
        <figcaption>
          <blockquote>{this.props.quote}</blockquote>
          <p>
            <cite>{this.props.character}</cite>
            <span
              className={this.state.favorite ? "is-favorite" : ""}
              onClick={(event) => {
                const newFavorite = !this.state.favorite;
                this.setState({ favorite: newFavorite });
              }}
            >
              &#9733;
            </span>
          </p>
        </figcaption>
      </figure>
    );
  }
}
/*QuoteCard.propTypes = {
  characterFirstName: PropTypes.string.isRequired,
  characterLastName: PropTypes.string.isRequired,
};*/

export default QuoteCard;
