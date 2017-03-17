require('rc-steps/assets/index.css');
require('rc-steps/assets/iconfont.css');
require('../styles/normalize.css');
require('../styles/skeleton.css');
require('../styles/App.css');

import React, { Component } from 'react';
import Steps, { Step } from 'rc-steps';
import _values from 'lodash/values';
import _merge from 'lodash/merge';
import Story from './Story';
import emitter from '../utils/emitter';
import questions from '../questions';
import ReactTooltip from 'react-tooltip';

const surveyLength = Object.keys(questions).length;

function jsonToURI(json) {
  var str = "";
  var keys = Object.keys(json);
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (i == keys.length - 1) {
      str += `${key}=${json[key]}`
    } else {
      str += `${key}=${json[key]}&`
    }
  }
  return str;
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
      isLoading: false,
      answers: {
        eligible: true,
        address_1: "",
        address_2: "",
        city: "",
        state: "",
        zip_code: 12345
      }
    };
  }

  renderSteps = (currentPage) => {
    let status = (i) => currentPage == i ? 'process' : (currentPage < i ? 'wait' : 'finish');
    return _values(questions).map((_, i) => <Step key={i + 1} status={status(i + 1)} />);
  }

  answerOnly = (key, value) => this.setState({
    answers: Object.assign({}, this.state.answers, { [key]: value })
  });

  answer = (key, value) => this.setState({
    page: this.state.page + 1,
    answers: Object.assign({}, this.state.answers, { [key]: value })
  });

  next = () => this.setState({ page: this.state.page + 1 });

  prev = () => this.setState({ page: this.state.page - 1 });

  loadResults = (email) => {
    Promise.all([
      fetch(`http://50.116.44.47/api/veteran/yourtop3?email=${email}`).then(result => result.json()), // returns an array of array
      fetch(`http://50.116.44.47/api/veteran/customizer?email=${email}`).then(result => result.json()), // returns an array of string
      fetch(`http://50.116.44.47/api/veteran/pdf?email=${email}`).then(result => result.json()),
      fetch(`http://forum.theserviceconnection.org/categories.json`).then(result => result.json())
    ]).then(results => {
      var merged = _merge(JSON.parse(results[1][0]), JSON.parse(results[1][1]))
      var topics = merged.topics;
      var users = results[0].map(r => r[0]);
      var pdf = results[2].url;
      var categories = results[3].category_list.categories;
      console.log(merged, topics, users, pdf, categories)
      this.setState({ results: { topics, users, pdf, categories }, isLoading: false });
    })
  }

  sendForm = (formBody) => {
    this.setState({ isLoading: true });
    return fetch(`http://50.116.44.47/api/veteran?${jsonToURI(formBody)}`, { method: "POST" }).then(_ => {
      this.loadResults(formBody.email);
    });
  }

  render() {

    return (
      <div className="container">
        <ReactTooltip id='views' type='dark'>
          <span>People who viewed.</span>
        </ReactTooltip>
        <ReactTooltip id='useful' type='dark'>
          <span>People who find this useful.</span>
        </ReactTooltip>
        <ReactTooltip id='relevancy' type='dark'>
          <span>Relevancy of this discussion to your situation.</span>
        </ReactTooltip>
        <ReactTooltip id='profileRelevancy' type='dark'>
          <span>How related this person is to you.</span>
        </ReactTooltip>
        <div className="bg"></div>
        <div className="row">
          <div className="nine columns">
            <div className="steps">
              <Steps size="small">
                {this.renderSteps(this.state.page)}
              </Steps>
            </div>
            {this.state.page !== surveyLength && questions[this.state.page]({ answer: this.answer,
                                          answerOnly: this.answerOnly,
                                          next: this.next,
                                          answers: this.state.answers,
                                          sendForm: this.sendForm })}

            {this.state.isLoading && (
              <h3>Loading...</h3>
            )}

            {this.state.results && questions[this.state.page]({ answer: this.answer,
                                          answerOnly: this.answerOnly,
                                          next: this.next,
                                          answers: this.state.answers,
                                          results: this.state.results,
                                          sendForm: this.sendForm })}

            {this.state.page !== 1 && this.state.page !== surveyLength && (
              <p className="mistake">Made a mistake? You can always edit your answers later or <a href="javascript:void(0)" onClick={this.prev}>go to the previous question.</a></p>
            )}
          </div>
          <div className="three columns gotoforum">
            <a target="_blank" href="http://forum.theserviceconnection.org/latest">go to discussion forum</a>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
