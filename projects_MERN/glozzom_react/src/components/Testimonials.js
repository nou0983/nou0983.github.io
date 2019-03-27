import React from "react";
import {
  MDBCarousel,
  MDBCarouselCaption,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBView,
  MDBMask 
} from "mdbreact";

const Testimonials = () => {
  return (
    <div>
      <MDBCarousel
        activeItem={1}
        length={3}
        showControls={true}
        showIndicators={true}
        className="z-depth-1"
      >
        <h2 class="text-center mt-2">testimonials</h2>
        <MDBCarouselInner>
          <MDBCarouselItem itemId="1">
            <MDBView>
              <blockquote class="blockquote text-center mb-5">
                <p class="mb-0">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Fugit, quaerat.
                </p>
                <footer class="blockquote-footer">
                  John Doe From
                  <cite title="Company 1">Company 1</cite>
                </footer>
              </blockquote>
              <MDBMask overlay="black-light" />
            </MDBView>
            <MDBCarouselCaption />
          </MDBCarouselItem>
          <MDBCarouselItem itemId="2">
            <MDBView>
              <blockquote class="blockquote text-center mb-5">
                <p class="mb-0">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Fugit, quaerat.
                </p>
                <footer class="blockquote-footer">
                  Sam Smith From
                  <cite title="Company 1">Company 2</cite>
                </footer>
              </blockquote>
              <MDBMask overlay="black-strong" />
            </MDBView>
            <MDBCarouselCaption />
          </MDBCarouselItem>
          <MDBCarouselItem itemId="3">
            <MDBView>
              <blockquote class="blockquote text-center mb-5">
                <p class="mb-0">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Fugit, quaerat.
                </p>
                <footer class="blockquote-footer">
                  Meghan Williams From
                  <cite title="Company 1">Company 3</cite>
                </footer>
              </blockquote>
              <MDBMask overlay="black-slight" />
            </MDBView>
            <MDBCarouselCaption />
          </MDBCarouselItem>
        </MDBCarouselInner>
      </MDBCarousel>
    </div>
  );
};

export default Testimonials;
