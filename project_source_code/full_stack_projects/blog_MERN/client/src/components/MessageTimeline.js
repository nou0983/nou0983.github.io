import React from "react";
import MessageList from "./MessageList";
import { Link } from "react-router-dom";

const MessageTimeline = props => {
  return (
    <>
      <header id="main-header" className="py-2 bg-success text-white">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h1>
                <i className="fas fa-folder" /> Posts
              </h1>
            </div>
          </div>
        </div>
      </header>
      <section id="actions" className="py-4 mb-4 bg-light">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <Link
                to={`/users/${props.match.params.id}/messages/new`}
                className="btn btn-warning btn-block"
              >
                <i className="fas fa-plus" /> Create Post
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="posts" className="min-section">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="card">
                <div className="card-header">
                  <h4 className="m-0">Blogen Posts</h4>
                </div>
                <table className="table table-striped mb-0">
                  <thead className="thead-dark">
                    <tr>
                      <th>Title</th>
                      <th>Category</th>
                      <th>Date</th>
                      <th />
                    </tr>
                  </thead>
                  <MessageList />
                </table>

                {/* <nav class="ml-4">
                  <ul class="pagination">
                    <li class="page-item disabled">
                      <a href="#" class="page-link">
                        Previous
                      </a>
                    </li>
                    <li class="page-item active">
                      <a href="#" class="page-link">
                        1
                      </a>
                    </li>
                    <li class="page-item">
                      <a href="#" class="page-link">
                        2
                      </a>
                    </li>
                    <li class="page-item">
                      <a href="#" class="page-link">
                        3
                      </a>
                    </li>
                    <li class="page-item">
                      <a href="#" class="page-link">
                        Next
                      </a>
                    </li>
                  </ul>
                </nav> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MessageTimeline;
