import React, { Component } from 'react'

export default class NotFountPage extends Component {
  render() {
    return (
      <div className='notFount'>
        <h1>404 - ページが見つかりません</h1>
        <p>お探しのページは、名前が変更されたか、一時的に利用できなくなった可能性があります。</p>
        <a href="/">ホームページ</a>
      </div>
    )
  }
}
