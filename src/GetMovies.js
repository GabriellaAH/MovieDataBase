import React, { Component } from 'react';

class GetMovies extends Component{
  constructor(props) {
    super(props);
    this.state = {
      srcText: ""
    }
    this.onBtnClick = this.onBtnClick.bind(this);
  }

  onBtnClick() {
    this.props.onClk(this.state.srcText);
  }

  onEdtChange(value) {
    this.setState({srcText: value});
  }

  render() {
    return (
      <div className="container-fluid input-group mb-3">
        <input type="text"
               className="form-control"
               placeholder="Search Query"
               aria-label="Search Query"
               aria-describedby="button-addon2"
               name="srcQry"
               value={this.state.srcText}
               onChange={e => this.onEdtChange(e.target.value)} />
        <div className="input-group-append">
          <button className="btn btn-outline-secondary" type="button" id="button-addon2" onClick={this.onBtnClick}>Run Search</button>
        </div>
      </div>
    );
  }
}

export default GetMovies;
