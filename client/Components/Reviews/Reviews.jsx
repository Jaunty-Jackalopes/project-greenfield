import React from "react";
import Grid from "@material-ui/core/Grid";
import ReviewListContainer from "../../containers/ReviewListContainer.jsx";
import ReviewMetaContainer from "../../containers/ReviewMetaContainer.jsx";

class Reviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = { filterArray: [] };
    this.handleClearFilter = this.handleClearFilter.bind(this);
    this.handleClickRating = this.handleClickRating.bind(this);
  }
  handleClickRating(star) {
    let idx = this.state.filterArray.indexOf(star);
    if (idx >= 0) {
      let new_filter_array = this.state.filterArray.slice();
      new_filter_array.splice(idx, 1);

      this.setState({ filterArray: new_filter_array });
    } else {
      let new_array = this.state.filterArray.slice();
      new_array.push(star);
      this.setState({ filterArray: new_array });
    }
  }

  handleClearFilter() {
    this.setState({ filterArray: [] });
  }
  render() {
    return (
      <div className="reviews">
        <h5 className="review-title">Ratings & Reviews</h5>
        <Grid container>
          <Grid item xs={5}>
            <ReviewMetaContainer
              handleClearFilter={this.handleClearFilter}
              handleClickRating={this.handleClickRating}
              filterArray={this.state.filterArray}
            />
          </Grid>
          <Grid item xs={7}>
            <ReviewListContainer filterArray={this.state.filterArray} />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default Reviews;
