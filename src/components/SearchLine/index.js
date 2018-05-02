import React from 'react';

class SearchLine extends React.Component {
  constructor(props) {
    super(props);
    this.throttleInterval = null;
    this.throttleTime = 800;
    this.state = {
      value: ''
    }
  }

  checkInterval() {
    if (this.throttleInterval) {
      clearTimeout(this.throttleInterval)
    }
  };

  handleChangeInput = e => {
    this.setState({
      value: e.target.value
    }, this.handleOnChange);
  };

  handleOnChange = () => {
    this.checkInterval();
    this.throttleInterval = setTimeout(() => {
      this.props.onChange(this.state.value)
    }, this.throttleTime)
  };

  handleClearValue = () => {
    this.checkInterval();
    this.props.onChange('');
    this.setState({value: ''});
  };

  render() {
    const {value} = this.state;
    return (
      <div className="row">
        <nav className="navbar navbar-default navbar-fixed-top">
          <div className="col-xs-10">
            <div className="navbar-form">
              <div className="form-group">
                <input
                  type="text"
                  autoFocus
                  className="form-control"
                  placeholder="Search"
                  value={value}
                  onChange={this.handleChangeInput}
                />
              </div>
            </div>
          </div>
          <div className="col-xs-2">
            <div className="navbar-form">
              {
                value &&
                <p>
                  <button
                    className="pull-right close"
                    onClick={this.handleClearValue}
                  >
                    <span>&times;</span>
                  </button>
                </p>
              }
            </div>
          </div>
        </nav>
      </div>
    )
  }
}

export default SearchLine;
