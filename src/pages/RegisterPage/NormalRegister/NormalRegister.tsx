import React, { useEffect, useState } from 'react';
import _ from "lodash/fp";
import { useForm } from "react-hook-form";
import './NormalRegister.scss';

const NormalRegister = () => {
  const [ inputValue, setInputValue ] = useState('');
  const handleChange = (e) => {
    const regex = /^[0-9\b -]{0,13}$/;
    if (regex.test(e.target.value)) {
      setInputValue(e.target.value);
      console.log(inputValue)
    }
  }
  interface IFormInput {
    firstName: string;
    lastName: string;
    age: number;
  }

  useEffect(() => {
    if (inputValue.length === 10) {
      setInputValue(inputValue.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3'));
      console.log(inputValue)
    }
    if (inputValue.length === 11) {
      setInputValue(inputValue.replace(/-/g, '').replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3'));
      console.log(inputValue)
    }
  }, [inputValue]);

  const { register, handleSubmit, watch, errors } = useForm<IFormInput>();

  const onSubmit = (data: IFormInput) => {
    alert(JSON.stringify(data));
  }; // your form submit function which will invoke after successful validation

  console.log(watch("example")); // you can watch individual input by pass the name of the input
  return (
    <form className="register-form" onSubmit={handleSubmit(onSubmit)}>
      <label className="register-labels">ID</label>
      <input
        className="register-inputs"
        name="firstName"
        ref={register({
          required: true,
          minLength: 5,
          maxLength: 15,
          pattern: /^[A-za-z]{5,15}/g
        })}
      />
      {_.get("firstName.type", errors) === "required" && (
        <p>This field is required</p>
      )}
      {_.get("firstName.type", errors) === "maxLength" && (
        <p>First name cannot exceed 20 characters</p>
      )}
      {_.get("firstName.type", errors) === "pattern" && (
        <p>아이디는 영문과 숫자조합으로만 가능합니다(5~15자)</p>
      )}
      <label className="register-labels">이름</label>
      <input className="register-inputs" name="lastName" ref={register({ pattern: /^[A-Za-z]+$/i })} />
      {_.get("lastName.type", errors) === "pattern" && (
        <p>Alphabetical characters only</p>
      )}
      <label className="register-labels">닉네임</label>
      <input className="register-inputs" name="lastName" ref={register({ pattern: /^[A-Za-z]+$/i })} />
      {_.get("lastName.type", errors) === "pattern" && (
        <p>Alphabetical characters only</p>
      )}
      <label className="register-labels">성별</label>
      <input name="gender" type="radio" value="0" className="gender-radio" ref={register} />남
      <input name="gender" type="radio" value="1" className="gender-radio" ref={register} />여
      <label className="register-labels">주민등록번호</label>
      <input className="register-inputs" name="Jumin" ref={register({ pattern: /^[A-Za-z]+$/i })} />
      <label className="register-labels">휴대폰번호</label>
      <input className="register-inputs" name="lastName" ref={register({ pattern: /^[A-Za-z]+$/i })} />
      <label className="register-labels">email</label>
      <input className="register-inputs" name="lastName" ref={register({ pattern: /^[A-Za-z]+$/i })} />
      <label className="register-labels">주소</label>
      <input className="register-inputs" name="lastName" ref={register({ pattern: /^[A-Za-z]+$/i })} />
      <button type="submit" className="register-submit">작성 완료</button>
    </form>
  );
};

export default NormalRegister;
