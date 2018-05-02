import React from 'react';


class NotFound extends React.Component {
  render() {
    const imageStyle = {
      position: 'absolute',
      left: '50%',
      top: '50%',
      marginLeft: '-285px',
      marginTop: '-190px'
    };
    return (
      <div className="row">
        <h2 className="text-center">Page not found</h2>
        <img
          src="https://css-tricks.com/images/404.jpg"
          alt="Page Not Found (404)."
          style={imageStyle}
        />
      </div>
    )
  }
}

export default NotFound;
