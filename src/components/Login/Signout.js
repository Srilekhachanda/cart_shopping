import React from 'react'
// import "../../Style/Signout.scss"
// import user from "../../Images/user.jpg"
// import arrowleft from "../../Images/arrow-left.jpg"
// import { Link } from "react-router-dom";
import user from '../../assets/images/user.jpg';
import arrowleft from '../../assets/images/arrow-left.jpg';
import { Link } from "react-router-dom";
import '../../assets/scss/Signout.css';


function Signout() {
    return (
        <div className='container'>
            <div className="signout">
                <ul>
                    <li>
                        <Link to="/checkoutone"><img src={arrowleft} /></Link>
                    </li>
                    <li>
                        <img src={user} />
                    </li>
                    <li>
                        <h5>
                            Account
                        </h5>
                    </li>
                </ul>

            </div>
            <div> <a href="" className=""> <p>Order History</p> </a> </div>
            <div> <a href="" className=""> <p>Store Credit & Gift Cards</p> </a> </div>
            <div> <a href="" className=""> <p>Favorites Lists</p> </a> </div>
            <div> <a href="" className=""> <p>Address Book</p> </a> </div>
            <div> <a href="" className=""> <p>Saved Payments</p> </a> </div>
            <div> <a href="" className=""> <p>Communications</p> </a> </div>
            <div> <a href="" className=""> <p>Account Information</p> </a> </div>
            <hr />
            <div> <a href="" className=""> <p>Sign out</p> </a> </div>
        </div>
    )
}

export default Signout