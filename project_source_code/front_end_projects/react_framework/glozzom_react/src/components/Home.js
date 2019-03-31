import React, { Component } from "react";
import Showcase from "./Showcase";
import VideoModal from "./VideoModal";
import LightboxPage from "./LightboxPage";
import img from "../img/laptop.png";

class Home extends Component {
  getYear() {
    return new Date().getFullYear();
  }

  render() {
    return (
      <div>
        <section id="showcase">
          <Showcase />
        </section>
        <section id="home-icons" class="py-5">
          <div class="container">
            <div class="row">
              <div class="col-md-4 mb-4 text-center">
                <i class="fas fa-cog fa-3x mb-2" />
                <h3>Turning Gears</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Libero, veniam.
                </p>
              </div>
              <div class="col-md-4 mb-4 text-center">
                <i class="fas fa-cloud fa-3x mb-2" />
                <h3>Sending Data</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Libero, veniam.
                </p>
              </div>
              <div class="col-md-4 mb-4 text-center">
                <i class="fas fa-cart-plus fa-3x mb-2" />
                <h3>Making Money</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Libero, veniam.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="home-heading" class="p-5">
          <div class="dark-overlay">
            <div class="row">
              <div class="col">
                <div class="container pt-5">
                  <h1>Are You Ready To Get Started?</h1>
                  <p class="d-none d-md-block">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Est eaque magni sit dolores. Nisi, dolor nam modi
                    perspiciatis consequatur soluta.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="info" class="py-3">
          <div class="container">
            <div class="row">
              <div class="col-md-6 align-self-center">
                <h3>Lorem Ipsum</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptate eveniet blanditiis incidunt iusto corrupti illum cum
                  laudantium ex sequi amet.
                </p>
                <a href="about.html" class="btn btn-outline-danger btn-lg">
                  Learn More
                </a>
              </div>
              <div class="col-md-6">
                <img src={img} alt="" class="img-fluid" />
              </div>
            </div>
          </div>
        </section>

        <section id="video-play">
          <div class="dark-overlay">
            <div class="row">
              <div class="col">
                <div class="container p-5">
                  <VideoModal />
                  <h1>See What We Do</h1>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="gallery" class="py-5">
          <div class="container">
            <h1 class="text-center">Photo Gallery</h1>
            <p class="text-center">Check out our photos</p>
          </div>
          <LightboxPage />
        </section>

        <section id="newsletter" class="text-center p-5 bg-dark text-white">
          <div class="container">
            <div class="row">
              <div class="col">
                <h1>Sign Up For Our Newsletter</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
                  asperiores consectetur, quae ducimus voluptates vero
                  repellendus architecto maiores recusandae mollitia?
                </p>
                <form class="form-inline justify-content-center">
                  <input
                    type="text"
                    class="form-control mb-2 mr-2"
                    placeholder="Enter Name"
                  />
                  <input
                    type="text"
                    class="form-control mb-2 mr-2"
                    placeholder="Enter Email"
                  />
                  <button class="btn btn-primary mb-2">Submit</button>
                </form>
              </div>
            </div>
          </div>
        </section>
        <footer id="main-footer" class="text-center p-4">
          <div class="container">
            <div class="row">
              <div class="col">
                <p>Copyright &copy; {this.getYear()} Glozzom</p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default Home;
