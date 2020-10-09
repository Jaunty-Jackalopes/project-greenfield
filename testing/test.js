//Write Enzyme tests here
require("@babel/polyfill");
const React = require("react");
const { shallow, mount, render } = require("enzyme");
const App = require("../client/Components/App/App.jsx");
//use import not require
import Review from "../client/Components/Reviews/Reviews.jsx";

// const wrapper = shallow(<App />);

describe("Hoping App.js pass test", () => {
  it("should render App", () => {
    const wrapper = shallow(<Review />);
    // const component = shallow(<App />);
    // expect(component).toMatchSnapshot();
    expect(wrapper.contains(<div className="review-reviewList"></div>));
  });
});
