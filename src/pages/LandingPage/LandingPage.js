import React from "react";
import styled from "styled-components";
import { Form, Input, Button, Checkbox } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";

const { Search } = Input;

const TopNav = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-around;
  border: 1px solid lightgray;
`;

const Wrapper = styled.div`
  background: white;
  width: 900px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23); /* 그림자 */
  margin: 0 auto; /* 페이지 중앙 정렬 */
`;

const Header = styled.div`
  display: flex;
  justify-content: space-around;
`;

const Container = styled.div`
  width: 900px;
  height: 800px;
`;

const ContainerLeft = styled.div`
  display: inline-block;
  width: 555px;
`;

const ContainerRight = styled.div`
  float: right;
  width: 336px;
`;

const LandingPage = (props) => {
  const names = ["이모저모", "저모이모", "공구게시판", "구인구직게시판"];
  const nameList = names.map((name, index) => (
    <li key={index} style={{ background: "lightgrey" }}>
      {name}
    </li>
  ));

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  const handleClick = () => {
    alert("로그아웃");
  };

  return (
    <>
      <Wrapper>
        <Header>
          마곡피플
          <Search
            placeholder="input search text"
            onSearch={(value) => console.log(value)}
            style={{ width: 200 }}
          />
        </Header>
        <TopNav>{nameList}</TopNav>
        <Container>
          <ContainerLeft>좌로</ContainerLeft>
          <ContainerRight>
            <Form
              name="normal_login"
              className="login-form"
              initialValues={{
                remember: true,
              }}
              onFinish={onFinish}
            >
              <Form.Item
                name="username"
                rules={[
                  {
                    required: true,
                    message: "Please input your Username!",
                  },
                ]}
              >
                <Input
                  prefix={<UserOutlined className="site-form-item-icon" />}
                  placeholder="Username"
                />
              </Form.Item>
              <Form.Item
                name="password"
                rules={[
                  {
                    required: true,
                    message: "Please input your Password!",
                  },
                ]}
              >
                <Input
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  type="password"
                  placeholder="Password"
                />
              </Form.Item>
              <Form.Item>
                <Form.Item name="remember" valuePropName="checked" noStyle>
                  <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <a className="login-form-forgot" href="">
                  Forgot password
                </a>
              </Form.Item>

              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="login-form-button"
                >
                  로그인
                </Button>
                <a href="">회원가입</a>
              </Form.Item>
            </Form>
          </ContainerRight>
        </Container>
        <div className="footer"></div>
        <button onClick={handleClick}>로그아웃</button>
      </Wrapper>
    </>
  );
};

export default LandingPage;
