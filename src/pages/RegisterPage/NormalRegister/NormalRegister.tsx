import React from 'react';
import _ from 'lodash/fp';
import { useForm } from 'react-hook-form';
import './NormalRegister.scss';

interface IFormInput {
  userId: string;
  userName: string;
  nickName: string;
  phoneNumber: number;
  emailAddr: string;
}

const NormalRegister: React.FC = () => {
  const { register, handleSubmit, watch, errors } = useForm<IFormInput>();

  const onSubmit = (data: IFormInput) => {
    alert(JSON.stringify(data));
  }; // your form submit function which will invoke after successful validation

  console.log(watch('example')); // you can watch individual input by pass the name of the input
  return (
    <form className="register-form" onSubmit={handleSubmit(onSubmit)}>
      <label className="register-labels">ID</label>
      <input
        className="register-inputs"
        name="userId"
        ref={register({
          required: true,
          minLength: 4,
          maxLength: 12,
          pattern: /^[A-za-z]{4,12}/g,
        })}
      />
      {_.get('userId.type', errors) === 'required' && (
        <p>이 항목은 필수입니다</p>
      )}
      {_.get('userId.type', errors) === 'minLength' && (
        <p>아이디는 4자 미만으로 할수 없습니다</p>
      )}
      {_.get('userId.type', errors) === 'maxLength' && (
        <p>아이디는 12자 이상으로 할수 없습니다</p>
      )}
      {_.get('userId.type', errors) === 'pattern' && (
        <p>
          아이디는 영문4자 이상 혹은 영문+숫자 (최소영문4자)조합으로만
          가능합니다(4~12자)
        </p>
      )}
      <label className="register-labels">이름</label>
      <input
        className="register-inputs"
        name="userName"
        ref={register({
          required: true,
          minLength: 2,
          maxLength: 10,
          pattern: /^[가-힣]{2,10}$/,
        })}
      />
      {_.get('userName.type', errors) === 'required' && (
        <p>이 항목은 필수입니다</p>
      )}
      {_.get('userName.type', errors) === 'minLength' && (
        <p>이름은 두 글자 미만으로 할수 없습니다</p>
      )}
      {_.get('userName.type', errors) === 'maxLength' && (
        <p>이름은 10자 이상으로 할수 없습니다</p>
      )}
      {_.get('userName.type', errors) === 'pattern' && (
        <p>이름은 한글만 입력 가능합니다</p>
      )}
      <label className="register-labels">닉네임</label>
      <input
        className="register-inputs"
        name="nickName"
        ref={register({
          required: true,
          minLength: 2,
          maxLength: 10,
          pattern: /^[가-힣a-zA-Z0-9]{2,10}$/,
        })}
      />
      {_.get('nickName.type', errors) === 'required' && (
        <p>이 항목은 필수입니다</p>
      )}
      {_.get('nickName.type', errors) === 'minLength' && (
        <p>별명은 두 글자 미만으로 할수 없습니다</p>
      )}
      {_.get('nickName.type', errors) === 'maxLength' && (
        <p>별명은 10자 이상으로 할수 없습니다</p>
      )}
      {_.get('nickName.type', errors) === 'pattern' && (
        <p>별명은 한글, 영문 숫자 등의 조합으로 입력 가능합니다</p>
      )}
      <label className="register-labels">성별</label>
      <input
        name="gender"
        type="radio"
        value="0"
        className="gender-radio"
        ref={register({
          required: true,
        })}
      />
      남
      <input
        name="gender"
        type="radio"
        value="1"
        className="gender-radio"
        ref={register({
          required: true,
        })}
      />
      여<label className="register-labels">휴대폰번호</label>
      <input
        className="register-inputs"
        name="phoneNumber"
        ref={register({
          required: true,
          minLength: 10,
          maxLength: 11,
          pattern: /^\d{3}\d{3,4}\d{4}$/,
        })}
      />
      {_.get('phoneNumber.type', errors) === 'required' && (
        <p>이 항목은 필수입니다</p>
      )}
      {_.get('phoneNumber.type', errors) === 'minLength' && (
        <p>휴대폰 번호는 10자 미만으로 입력할수 없습니다 (하이픈 제외)</p>
      )}
      {_.get('phoneNumber.type', errors) === 'maxLength' && (
        <p>휴대폰 번호는 11자 이상으로 입력할수 없습니다 (하이픈 제외)</p>
      )}
      <label className="register-labels">email</label>
      <input
        className="register-inputs"
        name="emailAddr"
        ref={register({
          required: true,
          pattern: /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i,
        })}
      />
      {_.get('emailAddr.type', errors) === 'required' && (
        <p>이 항목은 필수입니다</p>
      )}
      {_.get('emailAddr.type', errors) === 'pattern' && (
        <p>이메일 주소형식에 맞지 않습니다</p>
      )}
      <button type="submit" className="register-submit">
        작성 완료
      </button>
    </form>
  );
};

export default NormalRegister;
