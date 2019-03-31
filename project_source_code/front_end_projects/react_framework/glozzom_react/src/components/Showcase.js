import React, { Component } from "react";
import { Link } from 'react-router-dom';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from "reactstrap";
import img1 from "../img/image1.jpg";
import img2 from "../img/image2.jpg";
import img3 from "../img/image3.jpg";

const items = [
  {
    src: img1,
    altText: "Slide 1",
    caption: {
      header: (
        <h1 class="display-3 d-none d-sm-block">Heading One</h1>
      ),
      text: (
        <div className="d-none d-sm-block mb-5">
          <p class="lead">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste,
            aperiam vel ullam deleniti reiciendis ratione quod aliquid inventore
            vero perspiciatis.
          </p>
          <Link to="/" class="btn btn-danger btn-lg">
            Sign Up Now
          </Link>
        </div>
      )
    }
  },
  {
    src: img2,
    altText: "Slide 2",
    caption: {
      header: (
        <h1 class="display-3 d-none d-sm-block">Heading Two</h1>
      ),
      text: (
        <div className="d-none d-sm-block mb-5">
          <p class="lead">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste,
            aperiam vel ullam deleniti reiciendis ratione quod aliquid inventore
            vero perspiciatis.
          </p>
          <Link to="/" class="btn btn-success btn-lg">
            Contact Us
          </Link>
        </div>
      )
    }
  },
  {
    src: img3,
    altText: "Slide 3",
    caption: {
      header: (
        <h1 class="display-3 d-none d-sm-block">Heading Three</h1>
      ),
      text: (
        <div className="d-none d-sm-block mb-5">
          <p class="lead">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste,
            aperiam vel ullam deleniti reiciendis ratione quod aliquid inventore
            vero perspiciatis.
          </p>
          <Link to="/" class="btn btn-primary btn-lg">
            Learn More
          </Link>
        </div>
      )
    }
  }
];

class Showcase extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex =
      this.state.activeIndex === items.length - 1
        ? 0
        : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex =
      this.state.activeIndex === 0
        ? items.length - 1
        : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;

    const slides = items.map(item => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}
        >          
            <img
              src={item.src}
              alt={item.altText}
              style={{  marginTop: '-50px' }}
            />
            <CarouselCaption
              captionText={item.caption.text}
              captionHeader={item.caption.header}
            />         
        </CarouselItem>
      );
    });

    return (
      <Carousel
        activeIndex={activeIndex}
        next={this.next}
        previous={this.previous}
        interval="4000"
      >
        <CarouselIndicators
          items={items}
          activeIndex={activeIndex}
          onClickHandler={this.goToIndex}
        />
        {slides}
        <CarouselControl
          direction="prev"
          directionText="Previous"
          onClickHandler={this.previous}
        />
        <CarouselControl
          direction="next"
          directionText="Next"
          onClickHandler={this.next}
        />
      </Carousel>
    );
  }
}

export default Showcase;
