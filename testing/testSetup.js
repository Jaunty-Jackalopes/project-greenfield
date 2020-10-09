//Enzyme Setup

const { configure } = require("enzyme");
const Adapter = require("enzyme-adapter-react-16");
import "@babel/polyfill";

configure({ adapter: new Adapter() });
