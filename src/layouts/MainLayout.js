import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

import {ToastContainer, toast} from 'react-toastify';

import {resetGlobalNotify} from '../actions/globalNotify';

import 'react-toastify/dist/ReactToastify.css'
class MainLayout extends React.Component {

  componentWillReceiveProps(nextProps) {
    if (nextProps.notify && nextProps.notify !== this.notify) {
      this.showNotify(nextProps.notify);
      this.props.dispatch(resetGlobalNotify());
    }
  };

  showNotify(data) {
    switch (data.type) {
      case 'success':
        toast.success(data.text);
        break;
      case 'error':
        toast.error(data.text);
        break;
      case 'info':
        toast.info(data.text);
        break;
      default:
        return
    }
  };

  render() {
    return (
      <div className="container-fluid">
        <ToastContainer autoClose={8000}/>
        {this.props.children}
      </div>
    )
  }
}

function mapStateToProps(state) {
  const {notify} = state.globalNotify;
  return {
    notify,
  };
}

export default withRouter(connect(mapStateToProps)(MainLayout));
