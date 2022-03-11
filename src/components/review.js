import React from "react";
import PropTypes from "prop-types";

const Rating = ({ user, value, text, color }) => {
    return (
        <div className="user">
            <input
                type="text"
                placeholder="who is the review for"
                name="username"
            />
        </div>
    //<div className="rating">
    //  hello
    //  <span>
    //    <i
    //      style={{ color }}
    //      className={
    //        value >= 1
    //          ? "fas fa-star"
    //          : value >= 0.5
    //          ? "fas fa-star-half-alt"
    //          : "far fa-star"
    //      }
    //    ></i>
    //  </span>
    //  <span>
    //    <i
    //      style={{ color }}
    //      className={
    //        value >= 2
    //          ? "fas fa-star"
    //          : value >= 1.5
    //          ? "fas fa-star-half-alt"
    //          : "far fa-star"
    //      }
    //    ></i>
    //  </span>
    //  <span>
    //    <i
    //      style={{ color }}
    //      className={
    //        value >= 3
    //          ? "fas fa-star"
    //          : value >= 2.5
    //          ? "fas fa-star-half-alt"
    //          : "far fa-star"
    //      }
    //    ></i>
    //  </span>
    //  <span>
    //    <i
    //      style={{ color }}
    //      className={
    //        value >= 4
    //          ? "fas fa-star"
    //          : value >= 3.5
    //          ? "fas fa-star-half-alt"
    //          : "far fa-star"
    //      }
    //    ></i>
    //  </span>
    //  <span>
    //    <i
    //      style={{ color }}
    //      className={
    //        value >= 5
    //          ? "fas fa-star"
    //          : value >= 4.5
    //          ? "fas fa-star-half-alt"
    //          : "far fa-star"
    //      }
    //    ></i>
    //  </span>
    //  <span>{text && text}</span>
    //</div>
        //<div className="review">
        //    <input
        //        type="text"
        //        placeholder="write your review here"
        //        name="review"
        //    />

        //</div>

  );
};


Rating.defaultProps = {
  color: "#f8e825",
};

Rating.propTypes = {

  user: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  color: PropTypes.string,
};


export default Rating;
