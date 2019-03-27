import React from "react";
import img2 from "../img/share-section1.jpg";

const Share = () => {
  return (
    <div id="share-head-section">
      <section class="bg-primary">
        <div class="container">
          <div class="row">
            <div class="col text-center py-5">
              <h1 class="display-4">Share</h1>
              <p class="lead">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Sapiente doloribus ut iure itaque quibusdam rem accusantium
                deserunt reprehenderit sunt minus.
              </p>
              <a href="index.html" class="btn btn-outline-light">
                Find Out More
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="share-section" class="bg-light text-muted py-5">
        <div class="container">
          <div class="row">
            <div class="col-md-6">
              <img src={img2} alt="" class="img-fluid mb-3 rounded-circle" />
            </div>
            <div class="col-md-6">
              <h3>Share What You Create</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore
                reiciendis, voluptate at alias laborum odit aliquid tempore
                perspiciatis repudiandae hic?
              </p>
              <div class="d-flex">
                <div class="p-4 align-self-start">
                  <i class="fas fa-check fa-2x" />
                </div>
                <div class="p-4 align-self-end">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
                  distinctio iusto, perspiciatis mollitia natus harum?
                </div>
              </div>

              <div class="d-flex">
                <div class="p-4 align-self-start">
                  <i class="fas fa-check fa-2x" />
                </div>
                <div class="p-4 align-self-end">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
                  distinctio iusto, perspiciatis mollitia natus harum?
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Share;
