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
                    <lebel>
                        Overall Project Idea:
                        </lebel>


                        Our team plans to implement a web application that is something like a used goods store for UCLA students with a review system. 
                        The review system would be account based where buyer reviews are tied to seller accounts. The web application would have search 
                        functionality that would display the items in a list/catalog style view along with their prices. We decided on doing this for our
                        project to create an easier method for accessing the local economy within UCLA. Currently, when students want to sell things amongst 
                        themselves, a 3rd party application like Facebook is used which can be rather inconvenient as it requires users to request to join 
                        specific groups or tirelessly search within the public marketplace. Our solution to this is to create a bruin-for-bruin marketplace 
                        where UCLA students can buy and sell books, clothes, meal swipes, and more with ease. We were also interested in eCommerce as a whole, 
                        so we decided that creating a UCLA student used goods store would be a good way to pursue our interests. 
                    <lebel>
                        Features
                        </lebel>

                        Display Dynamic Data to the User
                        Well have a list of products and their prices, with Amazon or Ebays websites as models
                        Upload data from Client to Back-end
                        Users can sell items and add their own used goods to the list of products that will be stored on our back-end and displayed on the devices of all users
                        We will also have clients uploading data by signing up for an account, which stores their encrypted login credentials to the database
                        (unless we use Google sign in API)
                        Meaningfully search through server-side data
                        Well have a search bar to search alphabetically or by tags (e.g. clothes, books, condition(excellent, poor) )
                        Feature #1 Login system
                        Feature #2 Sell/Buy products
                        Feature #3 Seller reviews
                        (Optional) Feature #4 Internal Email/Chat system



                </form>

            </>
        );
    }
}

export default info;
