require('./styles/tags.css');

import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Pie, PieChart, Cell, RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis } from 'recharts';
import Icon from './components/Icon';

const questions = {
  1: (props) => (
    <div>
      <h3 className="title">OK! Lets get started.</h3>
      <h5 className="question"><b>Please fill out your basic information</b></h5>

      <div className="row mb3em">
        <div className="six columns">
          <label>First Name</label>
          <input className="u-full-width" type="text" placeholder="John" onChange={(e) => props.answerOnly("first_name", e.target.value)}/>
          <label>Last Name</label>
          <input className="u-full-width" type="text" placeholder="Doe" onChange={(e) => props.answerOnly("last_name", e.target.value)}/>
          <label>Email</label>
          <input className="u-full-width" type="email" placeholder="hello@theserviceconnection.org" onChange={(e) => props.answerOnly("email", e.target.value)}/>
          <label>Password</label>
          <input className="u-full-width" type="password" placeholder="********" onChange={(e) => props.answerOnly("password", e.target.value)}/>
        </div>
      </div>

      <div className="button-group mb3em">
        <input className="button button-primary" type="button" value="Next" onClick={() => props.next()} />
      </div>
    </div>
  ),
  2: (props) => (
    <div>
      <h3 className="title">Let’s find out if you’re eligible for VA benefits.  Please answer the following questions.</h3>
      <h5 className="question"><b>Did you serve in the U.S. Military?</b></h5>
      <div className="button-group">
        <input className="button button-default" type="button" value="Yes" onClick={() => props.answer("serve", true)} />
        <input className="button button-default" type="button" value="No" onClick={() => props.answer("serve", false)} />
      </div>
    </div>
  ),
  3: (props) => (
    <div>
      <h3 className="title">Let’s find out if you’re eligible for VA benefits.  Please answer the following questions.</h3>
      <h5 className="question"><b>What branch of service?</b></h5>
      <div className="button-group">
        <input className="button button-default" type="button" value="Marines" onClick={() => props.answer("branch", "marines")} />
        <input className="button button-default" type="button" value="Army" onClick={() => props.answer("branch", "army")} />
        <input className="button button-default" type="button" value="Navy" onClick={() => props.answer("branch", "navy")} />
        <input className="button button-default" type="button" value="Air Force" onClick={() => props.answer("branch", "airforce")} />
      </div>
    </div>
  ),
  4: (props) => (
    <div>
      <h3 className="title">Let’s find out if you’re eligible for VA benefits.  Please answer the following questions.</h3>
      <h5 className="question"><b>Did you serve on Active Duty?</b></h5>
      <div className="button-group">
        <input className="button button-default" type="button" value="Yes" onClick={() => props.answer("active_duty", true)} />
        <input className="button button-default" type="button" value="No" onClick={() => props.answer("active_duty", false)} />
      </div>
    </div>
  ),
  5: (props) => (
    <div>
      <h3 className="title">Let’s find out if you’re eligible for VA benefits.  Please answer the following questions.</h3>
      <h5 className="question"><b>Did you serve after January 1, 1980?</b></h5>
      <div className="button-group">
        <input className="button button-default" type="button" value="Yes" onClick={() => props.answer("pre_1980", true)} />
        <input className="button button-default" type="button" value="No" onClick={() => props.answer("pre_1980", false)} />
      </div>
    </div>
  ),
  6: (props) => (
    <div>
      <h3 className="title">Let’s find out if you’re eligible for VA benefits.  Please answer the following questions.</h3>
      <h5 className="question"><b>What was your character of discharge?</b></h5>
      <div className="button-group">
        <input className="button button-default" type="button" value="Honorable" onClick={() => props.answer("discharge_char", "honorable")} />
        <input className="button button-default" type="button" value="General" onClick={() => props.answer("discharge_char", "general")} />
        <input className="button button-default" type="button" value="Other Than Honorable" onClick={() => props.answer("discharge_char", "other than honorable")} />
        <input className="button button-default" type="button" value="Bad Conduct Discharge" onClick={() => props.answer("discharge_char", "bad conduct discharge")} />
        <input className="button button-default" type="button" value="Dishonorable Discharge" onClick={() => props.answer("discharge_char", "dishonorable discharge")} />
      </div>
    </div>
  ),
  7: (props) => (
    <div>
      <h3 className="title">Congrats, you’re eligible for VA benefits!</h3>
      <h5 className="question"><b>Did you experience any physical injuries while on active duty?</b></h5>
      <div className="button-group">
        <input className="button button-default" type="button" value="Yes" onClick={() => props.answer("has_injuries", true)} />
        <input className="button button-default" type="button" value="No" onClick={() => props.answer("has_injuries", false)} />
      </div>
    </div>
  ),
  8: (props) => (
    <div>
      <h3 className="title">Congrats, you’re eligible for VA benefits!</h3>
      <h5 className="question"><b>Please list your injuries during active duty.</b></h5>
      <textarea className="u-full-width" placeholder="Tell us about your injuries..." onChange={(e) => props.answerOnly("injuries", e.target.value)}/>
      <input className=" button-primary" type="button" value="Next" onClick={() => props.next()} />
    </div>
  ),
  9: (props) => (
    <div>
      <h3 className="title">Congrats, you’re eligible for VA benefits!</h3>
      <h5 className="question"><b>Did you receive treatment from a military health professional?</b></h5>
      <div className="button-group">
        <input className="button button-default" type="button" value="Yes" onClick={() => props.answer("rec_treatment", true)} />
        <input className="button button-default" type="button" value="No" onClick={() => props.answer("rec_treatment", false)} />
      </div>
    </div>
  ),
  10: (props) => (
    <div>
      <h3 className="title">Congrats, you’re eligible for VA benefits!</h3>
      <h5 className="question"><b>Are you suffering from these injuries today?</b></h5>
      <div className="button-group">
        <input className="button button-default" type="button" value="Yes" onClick={() => props.answer("injuries_persist", true)} />
        <input className="button button-default" type="button" value="No" onClick={() => props.answer("injuries_persist", false)} />
      </div>
    </div>
  ),
  11: (props) => (
    <div>
      <h3 className="title">You may be eligible for compensation for your physical injuries.</h3>
      <h5 className="question"><b>Are you currently experiencing any mental health issues?</b></h5>
      <div className="button-group">
        <input className="button button-default" type="button" value="Yes" onClick={() => props.answer("mental_h_need", true)} />
        <input className="button button-default" type="button" value="No" onClick={() => props.answer("mental_h_need", false)} />
      </div>
    </div>
  ),
  12: (props) => (
    <div>
      <h3 className="title">You may be eligible for compensation for your physical injuries.</h3>
      <h5 className="question"><b>What mental health issues are you experiencing?</b></h5>
      <textarea className="u-full-width" placeholder="Tell us about your mental health issues..." onChange={(e) => props.answerOnly("mental_h_issues", e.target.value)}/>
      <input className=" button-primary" type="button" value="Next" onClick={() => props.next()} />
    </div>
  ),
  13: (props) => (
    <div>
      <h3 className="title">You may be eligible for compensation for your physical injuries.</h3>
      <h5 className="question"><b>Were you the victim of sexual assault in the military?</b></h5>
      <div className="button-group">
        <input className="button button-default" type="button" value="Yes" onClick={() => props.answer("sexual_assault", true)} />
        <input className="button button-default" type="button" value="No" onClick={() => props.answer("sexual_assault", false)} />
      </div>
    </div>
  ),
  14: (props) => (
    <div>
      <h3 className="title">You may be eligible for compensation for your physical injuries.</h3>
      <h5 className="question"><b>Have you ever filed a claim before?</b></h5>
      <div className="button-group">
        <input className="button button-default" type="button" value="Yes" onClick={() => {
            props.answerOnly("filed_prev", true);
            props.next();
            props.sendForm(props.answers);
          }} />
        <input className="button button-default" type="button" value="No" onClick={() => {
            props.answerOnly("filed_prev", false);
            props.next();
            props.sendForm(props.answers);
          }} />
      </div>
    </div>
  ),
  15: ({...props, results: { topics=[],users=[],pdf="",categories=[] }}) => (
    <div>
      <h3 className="title">
        <b>Complete!</b>
        <Icon icon="check" size="1.5em" style={{color: '#444'}} />
      </h3>

      <div className="discussion-results">
        <h5 className="search-result-title">Here are the top three <b>discussions</b> relevant to your situation.</h5>
        <ul>
          {topics.map(({...o, score = 60 + Math.ceil(Math.random() * 30)}) => (
            <li key={o.id} className="search-result">
              <div>
                <Icon icon="sms" size="1.5em" style={{color: '#444', marginRight: '0.5em'}} />
                <a target="_blank" href={`http://forum.theserviceconnection.org/t/${o.slug}`}>{o.title}</a>
              </div>
              <div className="search-result-stats">
                <div data-tip data-for="views">
                  {o.views} <Icon icon="remove-red-eye" />
                </div>
                <div data-tip data-for="useful">
                  {o.like_count} <Icon icon="tag-faces" />
                </div>
                <div data-tip data-for="relevancy">
                  {score}% <Icon icon="lens" style={{color: score > 65 ? 'green' : 'orange'}} />
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="category-results">
        <h5 className="search-result-title">Here are the <b>categories</b> in which your situation fits.</h5>
        <ul className="tags">
          {categories.filter(o => o.name != "Uncategorized" && o.name != "Site Feedback").map(o => (
            <li><a target="_blank" href={`http://forum.theserviceconnection.org/c/${o.slug}`} className="tag">{o.name}</a></li>
          ))}
        </ul>
      </div>

      <div className="user-results">
        <h5 className="search-result-title">Here are the top three users who has similar background as you.</h5>
        <ul>
          {users.map(o => (
            <li key={o.id} className="search-result">
              <div className="profile">
                <img className="profile-image" src={`http://forum.theserviceconnection.org${o.avatar_template}`.replace("{size}", 150)}/>
                <div className="dfc">
                  <a className="profile-name" target="_blank" href={`http://forum.theserviceconnection.org/users/${o.username}`}>{o.username}</a>
                  <small><Icon icon="phone" size="1em"/> <b>contact</b></small>
                </div>
              </div>
              <div className="search-result-stats">
                <div data-tip data-for="profileRelevancy">
                  {o.score}% <Icon icon="lens" style={{color: o.score > 60 ? 'green' : 'orange'}} />
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="statistic-results">
        <h5 className="search-result-title">Statistics:</h5>
        <div className="df jcc aic">
          <div>
            <div className="df">
              <div className="df">
                <div className="chart-container">
                  <span>872 <b>total applications</b></span>
                  <PieChart width={200} height={200}>
                    <Pie
                      data={pie}
                      cx={100}
                      cy={100}
                      label={renderCustomizedLabel}
                      fill="#8884d8">
                      {data.map((entry, index) => <Cell fill={col[index % col.length]}/>)}
                    </Pie>
                  </PieChart>
                  <span style={{color: col[0]}}>43% successful</span>
                  <span style={{color: col[1]}}>57% failed</span>
                </div>
              </div>
              <div className="df">
                <div className="chart-container">
                  <b>There is</b>
                  <span className="number-fig">47%</span>
                  <span>chance of getting your claim approved</span>
                </div>
              </div>
            </div>
            <div className="df">
              <div className="chart-container" style={{width: 437}}>
                <b>Success rate of claims by category</b>
                <RadarChart cx={218} cy={160} outerRadius={120} width={437} height={260} data={rad}>
                  <Radar name="Mike" dataKey="A" fill="#00C49F" fillOpacity={0.6}/>
                  <PolarGrid />
                  <PolarAngleAxis dataKey="category" />
                  <PolarRadiusAxis/>
                </RadarChart>
                <span style={{color: 'green'}}>PTSD claims are successful 88% of the time.</span>
                <span style={{color: 'orange'}}>Injury claims are successful 50% of the time.</span>
                <span style={{color: 'red'}}>Mental claims are successful 13% of the time.</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="file-results">
        <h5 className="search-result-title">Prefilled forms required to make a claim:</h5>
        <a target="_blank" href={pdf}>21-526EZ.pdf</a>
      </div>
    </div>
  )
};

const pie = [{name: 'Group B', value: 300}, {name: 'Group A', value: 400}];
const col = ['#00C49F', '#E8523E'];

const rad = [
    { category: 'PTSD', A: 88, fullMark: 100 },
    { category: 'Injury', A: 50, fullMark: 100 },
    { category: 'Mental', A: 13, fullMark: 100 },
];


const data = [
      {name: 'Page A', uv: 4000, pv: 2400, amt: 2400},
      {name: 'Page B', uv: 3000, pv: 1398, amt: 2210},
      {name: 'Page C', uv: 2000, pv: 9800, amt: 2290},
      {name: 'Page D', uv: 2780, pv: 3908, amt: 2000},
      {name: 'Page E', uv: 1890, pv: 4800, amt: 2181},
      {name: 'Page F', uv: 2390, pv: 3800, amt: 2500},
      {name: 'Page G', uv: 3490, pv: 4300, amt: 2100},
];

const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const RADIAN = Math.PI / 180;
 	const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x  = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy  + radius * Math.sin(-midAngle * RADIAN);
  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} 	dominantBaseline="central">
    	{`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

export default questions;
