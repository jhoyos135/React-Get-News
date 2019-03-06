import React, { Component } from 'react'

class Loader extends Component {
  render() {
    return (
      <div className="col s12">
      <div class="loader">
      <h3>No News...</h3>

        <span class="loader-block"></span>
        <span class="loader-block"></span>
        <span class="loader-block"></span>
        <span class="loader-block"></span>
        <span class="loader-block"></span>
        <span class="loader-block"></span>
        <span class="loader-block"></span>
        <span class="loader-block"></span>
        <span class="loader-block"></span>
    </div>
      </div>
    )
  }
}

export default Loader
