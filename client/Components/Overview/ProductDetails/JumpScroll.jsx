import React from "react";
import * as Scroll from "react-scroll";
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller
} from "react-scroll";

//Jump scroll set by the pixel. When clicked sends to reviews
function JumpScroll({ reviewList }) {
  return (
    <div className="readReviews">
      <div onClick={() => scroll.scrollTo(1500)}>
        Read {reviewList.length} Reviews
      </div>
    </div>
  );
}

export default JumpScroll;
