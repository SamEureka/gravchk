import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import md5 from 'md5';
import debounce from 'lodash.debounce';

import styles from './components/Styles';


class Hash extends Component {
    constructor(){
      super();
      this.state = {
        email: '',
        grav: '',
      }
  }
  handleInput(e){
    const input = e.target.value;
      this.setState({
        email: input,
        grav: input === '' ? '' : md5(input),
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
          onChange={debounce(this.handleInput.bind(this), 789)}>
        </input>
        <div>
            <img src={`http://www.gravatar.com/avatar/${this.state.grav}?s=200`} />
          <div style={styles.display}> Email: {' '}
            <span style={styles.orange}>
              {this.state.email}
            </span>
          </div>
          <div style={styles.display}> MD5 Hash: {' '}
              <span style={styles.orange}>
                {this.state.grav}
              </span>
          </div>
          <div style={styles.display}>{`Don't have a Gravatar? `}<a href="http://en.gravatar.com">Click here!</a>
          </div>
        </div>
      </div>
    )
  }
}



ReactDOM.render(<Hash />, document.getElementById('app'));
