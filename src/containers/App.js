import React, { Component } from 'react';
import { Survey } from 'survey-react';
import Story from './Story';
import emitter from '../utils/emitter';

import '../styles/App.css';

var surveyJSON = {showProgressBar:'bottom',pages:[{name:"page1",questions:[{type:"radiogroup",choices:[{value:"yes",text:"Yes"},{value:"no",text:"No"}],indent:1,name:"1",title:"Did you serve in the U.S. Military?"}]},{name:"page2",questions:[{type:"radiogroup",choices:[{value:"marines",text:"Marines"},{value:"army",text:"Army"},{value:"navy",text:"Navy"},{value:"airforce",text:"Air Force"}],name:"2",title:"What branch of service?"}]},{name:"page3",questions:[{type:"radiogroup",choices:[{value:"yes",text:"Yes"},{value:"no",text:"No"}],name:"3",title:"Did you serve on Active Duty"}]},{name:"page4"}]}

var myCss = {
  navigationButton: "button btn-primary btn-lg"
};

class App extends Component {
  componentWillMount() {
    Survey.cssType = "bootstrap";
  }

  onValueChanged(s, options) {
    var key = options.name;
    var val = options.value;
    emitter.emit('valueChanged', { [key]: val });
  }

  render() {
    return (
      <div className="App">
        <nav className="navbar navbar-default">
          <div className="topbar">
            <div className="logo">Veterans Benefits</div>
            <div>
              <a className="item-link" href="#">Discussions</a>
              <a className="item-link" href="#">Blog</a>
              <a className="item-link" href="#">Blog</a>
            </div>
          </div>
        </nav>
        <div className="content">
          <div className="survey-box">
            <Survey json={surveyJSON} css={myCss} onComplete={console.log} onValueChanged={this.onValueChanged}/>
          </div>
          <Story />
        </div>
        <div className="footer navbar-default navbar-fixed-bottom">
          <div>
            <a className="item-link" href="#">github</a>
            <a onClick={this.setState.bind(this, {1: 1})} className="item-link" href="#">slack</a>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
