import React, { Component, Fragment } from 'react';

class Video extends Component {
  render() {
    return (
      <Fragment>
        <div className="videoSection clearfix">
          <div className="container wow fadeInUp" data-wow-delay="0.3s">
              <div className="groupTeam">
                <iframe className="responsiveIframe" loading="lazy" src="https://www.youtube.com/embed/iXdK2emhwX0" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
              </div>
          </div>
       </div>
      </Fragment>
    );
  }
}

export default Video;