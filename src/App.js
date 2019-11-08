import React, { useReducer } from 'react';

import './App.css';
import { Input, Select, Button } from 'antd';
import { submitAPI } from './api';
const { Option } = Select;

const initFormData = {
  errorMessage: '',
  name: '',
  email: '',
  phone: '',
  male: ''
};

const handleSubmit = formData => {
  // submit formData using submitAPI
  //err
  const {name, email, phone, male} = formData;
  let nameCheck = (name.length <= 255);
  let maleCheck = (male === "male" || male === "female");
  let emailCheck, phoneCheck;
  if (nameCheck && maleCheck && emailCheck && phoneCheck)
    api.submitAPI(formData);
  }
  else {
    formReducer();
  }
};

const $ = id => document.getElementById(id);

const formReducer = (formData = initFormData, action) => formData;

export default () => {
  const [formData, dispatch] = useReducer(formReducer, initFormData);
  return (
    <div className="App">
      <h1 id="error" style={{ color: 'red' }}>
        {formData.errorMessage}
      </h1>
      <Input className="input" id="form-name" placeholder="ชื่อ - นามสกุล" />
      <Input className="input" id="form-email" placeholder="email" />
      <Input className="input" id="form-phone" placeholder="phone" />
      <Select className="input" id="form-gender" defaultValue="male">
        <Option value="male">ชาย</Option>
        <Option value="female">หญิง</Option>
      </Select>{' '}
      <br />
      <Button
        type="primary"
        onClick={handleSubmit
          .bind
          //   {
          //   name: $('form-name').value,
          //   email: $('form-email').value,
          //   phone: $('form-phone').value,
          //   gender: $('form-gender').value
          // }
          ()}
      >
        submit
      </Button>
    </div>
  );
};
