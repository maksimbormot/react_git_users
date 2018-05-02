import React from 'react';
import Loader from 'react-loader-spinner';

class WrapLoader extends React.PureComponent {
  render() {
    return (
      <div className="text-center loaderWrapper">
        <Loader
          type="Puff"
          color="#00BFFF"
          height="100"
          width="100"
        />
      </div>

    )
  }
}

export default WrapLoader;
