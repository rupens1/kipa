import React, {PropTypes, Component} from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import userImage from '../../images/testImage.jpg';
import * as documentAction from '../../actions/documentAction';

class SideNav extends Component {
  constructor() {
    super();
  }

  render() {
    const {name, username, role, email} = this.props.userData;

    return (
      <ul id='nav-mobile' className='side-nav fixed'>
        <li>
          <div className='logo-name font-effect-mitosis left-align'> DocKip </div>
        </li>
        <li>
          <div className='user-info-container'>
            <div>
              <img className='user-image' src={userImage}/>
            </div>
            <div className='username-text center-align'>
              <span>{name.lastname},</span> {name.firstname}
            </div>
            <div className=' center-align'>{username}</div>
            <div className=' center-align'>
              {this.props.roles[role - 1].role}
            </div>
            <div className='custom-blue-text center-align'>{email}</div>
          </div>
        </li>
        <li id='MY_DOCUMENTS' onClick={this.props.navigator} className='bold'>
            <div className='custom-div waves-effect'>
              <i className='sidebar-icon-position material-icons'>description</i>
              <span>My Documents</span>
            </div>
        </li>
        <li onClick={this.props.navigator} id='SHARED_DOCUMENTS' className='bold'>
          <div className='custom-div waves-effect'>
            <i className='sidebar-icon-position material-icons'>group_work</i>
            <span>Shared Documents</span>
          </div>
        </li>
        <li id='EDIT_PROFILE' onClick={this.props.navigator} className='bold'>
          <div className='custom-div waves-effect'>
            <i className='sidebar-icon-position material-icons'>mode_edit</i>
            <span>Edit Profile</span>
          </div>
        </li>
      </ul>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    docAction: bindActionCreators(documentAction, dispatch)
  }
}

function mapStateToProps(state) {
  return {
    userData: state.users.userData,
    docStateUser: state.docStates.userData,
    roles: state.roleState.roles
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SideNav);
