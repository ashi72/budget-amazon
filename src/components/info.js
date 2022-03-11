import React, { useContext, useEffect, Component } from "react";
import { useNavigate } from "react-router-dom";

import { UserContext } from "../contexts/UserContext";

class info extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <div className="hero is-primary ">
          <div className="hero-body container">
            <h4 className="title">About This Project</h4>
          </div>
        </div>
        <br />
        <br />
        <form>
          <lebel>Overall Project Idea:</lebel>
          Our team plans to implement a web application that is something like a
          used goods store for UCLA students with a review system. The review
          system would be account based where buyer reviews are tied to seller
          accounts. The web application would have search functionality that
          would display the items in a list/catalog style view along with their
          prices. We decided on doing this for our project to create an easier
          method for accessing the local economy within UCLA. Currently, when
          students want to sell things amongst themselves, a 3rd party
          application like Facebook is used which can be rather inconvenient as
          it requires users to request to join specific groups or tirelessly
          search within the public marketplace. Our solution to this is to
          create a bruin-for-bruin marketplace where UCLA students can buy and
          sell books, clothes, meal swipes, and more with ease. We were also
          interested in eCommerce as a whole, so we decided that creating a UCLA
          student used goods store would be a good way to pursue our interests.
          <lebel>Features</lebel>
          <ul>
            <li>Product Catalog</li>
            <li>Ability to add goods and buy them</li>
            <li>Search through Products</li>
            <li>Login System</li>
            <li>Review System</li>
          </ul>
        </form>
      </>
    );
  }
}

export default info;
