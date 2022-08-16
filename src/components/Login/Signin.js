import { Component } from "react";
// import user from "../../Images/user.jpg"
// import arrowleft from "../../Images/arrow-left.jpg"
// import "../../Style/Signin.scss"
import user from '../../assets/images/user.jpg';
import arrowleft from '../../assets/images/arrow-left.jpg';
import { Link } from "react-router-dom";
import '../../assets/scss/Signin.css';


class Signin extends Component {
    constructor() {
        super()
        this.state = {
            myname: '',
            mypass: ''
        }
    }

    myNamechange = (event) => {
        this.setState({ myname: event.target.value })
    }
    myPasschange = (event) => {
        this.setState({ mypass: event.target.value })
    }

    mySubmitfunction = (event) => {
        event.preventDefault()
        console.log(this.state)
    }

    render() {
        return (
            <div className="signin">
                <div className='container'>
                    <form onSubmit={this.mySubmitfunction}>
                        <div className="signin">
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
                        <p>Sign-in to Your Account</p>
                        <div className="mb-3">
                            <label htmlfor="exampleInputEmail1" className="form-label">Email address</label>
                            <input type="email" onChange={this.myNamechange} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                        <div className="mb-3">
                            <label htmlfor="exampleInputPassword1" className="form-label">Password</label>
                            <input type="password" onChange={this.myPasschange} className="form-control" id="exampleInputPassword1" />
                        </div>

                        <div className="forgetpassword">
                            <a href="" className="">
                                <p>Forget password?</p>
                            </a>
                            <a href="" className="">
                                <Link to="/Create">Create Account?</Link>
                            </a>
                        </div>
                        <div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
export default Signin