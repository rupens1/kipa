import {Button, Input, Card, Row, Col, Dropdown, NavItem} from 'react-materialize';
import React from 'react';
import Preloader from '../common/preloader';
import {
  InputComponent,
  ButtonComponent,
  SelectComponent,
  CheckBox,
  File
} from '../common/input';

const EditForm = ({
  preloader,
  submitAction,
  changeHandler,
  userData,
  selectData,
  displayFeedBack,
  feedBack,
  feedBackColor,
  formSubmit
}) => {
  console.log(formSubmit, 'this is edit component');
  const {name: {firstname, lastname}, email, role, username, _id} = userData;
  return(
    <div className='edit-form-container'>
      <form id={_id} onSubmit={submitAction}>
        <div className='row'>
          <div className='user-icon'>
            <i className='material-icons'>perm_identity</i>
          </div>
        </div>
        <Row>
          <Input
            s={6}
            name='firstname'
            label='First Name'
            validate
            defaultValue={firstname}
            onChange={changeHandler}/>
          <Input
            s={6}
            name='lastname'
            label='Last Name'
            validate
            defaultValue={lastname}
            onChange={changeHandler}/>
        </Row>
        <Row>
          <Input
            s={12}
            name='username'
            label='Username'
            validate
            defaultValue={username}
            onChange={changeHandler}/>
        </Row>
        <Row>
          <Input
            s={12}
            name='email'
            label='Email'
            validate={true}
            defaultValue={email}
            onChange={changeHandler} />
        </Row>
        <div className='row'>
          <SelectComponent
            name='role'
            selectData={selectData}
            selecetedValue={role}
            onChangeEvent={changeHandler}/>
        </div>
        <span
          style={{display: displayFeedBack, color: feedBackColor}}
          className='edit-user-error'>{feedBack}</span>
        <Preloader
          showLoader={preloader}
          size='small'
          position='left'/>
        <button
          disabled={formSubmit}
          className='btn custom-create-btn right'>Update</button>
    </form>
  </div>
  );
};

export default EditForm;
