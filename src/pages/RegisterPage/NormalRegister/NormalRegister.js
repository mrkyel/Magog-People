import React, { useEffect, useState } from 'react';
import { Form, Input, InputNumber, Button, Radio } from 'antd';
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
  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };

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

  const validateMessages = {
    required: '${label} is required!',
    types: {
      email: '${label} is not validate email!',
      number: '${label} is not a validate number!',
    },
    number: {
      range: '${label} must be between ${min} and ${max}',
    },
  };

  const onFinish = (values) => {
    console.log(values);
  };
  return (
    <>
      <Form
        {...layout}
        name="nest-messages"
        onFinish={onFinish}
        validateMessages={validateMessages}
        style={{ width: '750px' }}
      >
        
        <Form.Item
          name={['user', 'id']}
          label="아이디"
          rules={[{ required: true }]}
        ><Input />
        </Form.Item>
        <Form.Item
          name={['user', 'name']}
          label="이름"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name={['user', 'nickname']}
          label="별명"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>
        <Form.Item name="radio-group" label="성별" required>
        <Radio.Group>
          <Radio value="a">남성</Radio>
          <Radio value="b">여성</Radio>
        </Radio.Group>
      </Form.Item>
      
      <Form.Item
          name={['user', 'phonenumber']}
          label="휴대폰번호"
          required
        >
          <Input type="text" maxLength="11" onChange={handleChange} value={inputValue} />
        </Form.Item>
        <Form.Item
          name={['user', 'email']}
          label="Email"
          rules={[{ type: 'email' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name={['user', 'age']}
          label="Age"
          rules={[{ type: 'number', min: 0, max: 99 }]}
        >
          <InputNumber />
        </Form.Item>
        <Form.Item name={['user', 'website']} label="Website">
          <Input />
        </Form.Item>
        <Form.Item name={['user', 'introduction']} label="Introduction">
          <Input.TextArea />
        </Form.Item>
        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default NormalRegister;
