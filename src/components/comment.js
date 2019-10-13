import React, { Component } from "react";
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

// const emailRegex = RegExp(
//   /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
// );

// const formValid = ({ formErrors, ...rest }) => {
//   let valid = true;

//   // validate form errors being empty
//   Object.values(formErrors).forEach(val => {
//     val.length > 0 && (valid = false);
//   });

//   // validate the form was filled out
//   Object.values(rest).forEach(val => {
//     val === null && (valid = false);
//   });

//   return valid;
// };

class MyComment extends Component {
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     email: null,
  //     comment: null,
  //     formErrors: {
  //       email: "",
  //       comment: ""
  //     }
  //   };
  // }

  // handleSubmit = e => {
  //   e.preventDefault();

  //   if (formValid(this.state)) {
  //     console.log(`
  //       --SUBMITTING--
  //       Email: ${this.state.email}
  //       Comment: ${this.state.comment}
  //     `);
  //   } else {
  //     console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
  //   }
  // };

  // handleChange = e => {
  //   e.preventDefault();
  //   const { name, value } = e.target;
  //   let formErrors = { ...this.state.formErrors };

  //   switch (name) {
  //     case "email":
  //       formErrors.email = emailRegex.test(value)
  //         ? ""
  //         : "invalid email address";
  //       break;
  //     default:
  //       break;
  //   }

  //   this.setState({ formErrors, [name]: value }, () => console.log(this.state));
  // };

  render() {
    // const { formErrors } = this.state;
  
    return (
        <div>
          <form action="/comments" method="POST">
            <div className="comment-email">
              {/* <label htmlFor="email">Email</label> */}
              <input
                // className={formErrors.email.length > 0 ? "error" : null}
                placeholder="enter your name"
                type="text"
                name="name"
                // noValidate
                // onChange={this.handleChange}
              />
              {/* {formErrors.email.length > 0 && (
                <span className="errorMessage">{formErrors.email}</span>
              )} */}
            </div>
            <div className="comment">
              <textarea
                placeholder="enter your comment"
                type="text"
                rows="4"
                name="comment"
                // noValidate
                // onChange={this.handleChange}
                >
              </textarea>
            </div>
            <div className="comment-submit">
              <input type="submit" value="Submit" />
              <Link to="/signup" className="signup-small">
                <small>Don't Have an Account?</small>
                </Link>
            </div>
          </form><br />
          <h2>comments</h2>
         <section id="suggestions">
           {/* <section className="suggestion">
             <h3>John Bullock</h3>
             <p>John is a cosmos derrendo</p>
           </section>
           <section className="suggestion">
             <h3>John Bullock</h3>
             <p>John is a cosmos derrendo</p>
           </section>
           <section className="suggestion">
             <h3>John Bullock</h3>
             <p>John is a cosmos derrendo</p>
           </section>
           <section className="suggestion">
             <h3>John Bullock</h3>
             <p>John is a cosmos derrendo</p>
           </section> */}
         </section>
        </div>
    );
  }
}

export default MyComment;