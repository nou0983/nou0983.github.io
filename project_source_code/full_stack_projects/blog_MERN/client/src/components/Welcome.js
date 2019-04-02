import React from "react";
import { Link } from "react-router-dom";

const Welcome = ({ currentUser }) => {
  if (currentUser.isAuthenticated) {
    return (
      <>
        <header id="main-header" className="py-2 bg-primary text-white">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <h1>
                  <i className="fas fa-cog" /> Home
                </h1>
              </div>
            </div>
          </div>
        </header>

        <section id="actions" class="py-4 mb-4 bg-light">
          <div class="container">
            <div class="row" />
          </div>
        </section>

        <div className="container text-center">
          <h1 className="my-5 display-4">Welcome to Blogen!</h1>
        </div>
        <div className="container pt-2 pb-4">
          <div className="row justify-content-center">
            <div className="card text-center bg-success text-white mx-4 col-md-3">
              <div className="card-body">
                <h3>Posts</h3>
                <h4 className="display-4">
                  <i className="fas fa-folder" />
                </h4>
                <Link
                  to={`/users/${currentUser.user.userId}/messages`}
                  className="btn btn-outline-light btn-sm"
                >
                  View
                </Link>
              </div>
            </div>            
          </div>
        </div>
      </>
    );
  }
  return (
    <>
      <header id="main-header" className="py-2 bg-primary text-white">
        <div className="container ">
          <div className="row">
            <div className="col-md-6">
              <h1>
                <i className="fas fa-cog" /> Home
              </h1>
            </div>
          </div>
        </div>
      </header>

      <section id="actions" class="py-4 mb-4 bg-light">
        <div class="container">
          <div class="row" />
        </div>
      </section>

      <div className="container min-section">
        <h1 className="mt-5 display-4">New to Blogen?</h1>
        <Link to="/signup" className="btn btn-success btn-lg mt-3">
          Sign Up Here
        </Link>
      </div>
    </>
  );
};

export default Welcome;
