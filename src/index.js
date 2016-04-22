import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import md5 from 'md5';

import styles from './components/Styles';


class Hash extends Component {
    constructor(){
      super();
      this.state = {
        email: '',
        grav: '',
      }
  }
  gen(e){
    const input = e.target.value;
      this.setState({
        email: input,
        grav: md5(input),
      })
    }

  render(){
    return (
      <div>
        <div style={styles.title}>
          Gravatar?
        </div>
        <input
          id="boom"
          type="text"
          placeholder="Enter Gravatar Id"
          onChange={this.gen.bind(this)}>
        </input>
        <div>
            <img src={`http://www.gravatar.com/avatar/${this.state.grav}?s=200`} />
          <div style={styles.display}>
            Email: {this.state.email}
          </div>
          <div style={styles.display}>
            MD5 Hash: {this.state.grav}
          </div>
          <div style={styles.display}>Don't have a Gravatar? <a href="http://en.gravatar.com">Click here!</a>
          </div>
        </div>
      </div>
    )
  }
}



ReactDOM.render(<Hash />, document.getElementById('app'));
