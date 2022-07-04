import React, { Component } from 'react'

export default class NotFountPage extends Component {
  render() {
    return (
      <div className='notFount'>
        <h1>404 - PAGE NOT FOUND</h1>
        <p>The page you are looking for might have been removed had its name changed or is temporarily unavailable.</p>
        <a href="/">home page</a>
      </div>
    )
  }
}
