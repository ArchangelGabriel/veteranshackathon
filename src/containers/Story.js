import React, { Component } from 'react';
import emitter from '../utils/emitter';
import _values from 'lodash/values';
import _keys from 'lodash/keys';

import '../styles/Story.css';

var tree = {
  "marines": {
    title: "You are a marine!",
    image: "https://ssl.cdn.turner.com/cnnnext/dam/assets/170309081644-marines-tease-1-super-169.jpg"
  },
  "default": {
    title: "Thank you for your service.",
    image: "http://www.mass.gov/lwd/employment-services/specialized-job-seeker-services/veterans-programs-and-services/veteran.jpg"
  }
};
var isVeteran = (state) => state["1"] === "yes";


class Story extends Component {
  componentDidMount() {
    emitter.addListener('valueChanged', (obj) => this.setState(obj));
  }
  componentWillUnmount() {
    emitter.remove();
  }
  render() {
    return (
      <div className="side">
        {this.state && isVeteran(this.state) && <p>{tree[this.state['2'] || 'default'].title}</p>}
        {this.state && isVeteran(this.state) && <img className="img" src={tree[this.state['2'] || 'default'].image} />}
      </div>
    )
  }
}

export default Story;
