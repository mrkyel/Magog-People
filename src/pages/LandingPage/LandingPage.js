import React from "react";
import styled from "styled-components";
import { Form, Input, Button, Checkbox } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";

const { Search } = Input;

const Wrapper = styled.div``;

const TopNavWrapper = styled.nav`
  background-color: #4a56a8;
`;

const TopNav = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-around;
  border: 1px solid lightgray;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-around;
`;

const Container = styled.div`
  width: 1000px;
  margin: 20px auto 0;
`;

const ContainerLeft = styled.section`
  position: relative;
  width: 650px;
  height: 412px;
  border: 1px solid #ccc;
  display: inline-block;
`;

const ContainerRight = styled.section`
  float: right;
  width: 336px;
`;

const LoginWrap = styled.div`
  position: relative;
  width: 248px;
  height: 148px;
  border: 1px solid #3c4790;
  color: #333;
`;

const SearchRangkingWrap = styled.article`
  position: relative;
  width: 248px;
  height: 248px;
  margin-top: 15px;
  border: 1px solid #ccc;
`;

const LandingPage = (props) => {
  const names = [
    "이모저모",
    "저모이모",
    "공구게시판",
    "자유게시판",
    "구인구직게시판",
  ];
  const nameList = names.map((name, index) => (
    <li key={index} style={{ color: "#fff" }}>
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
        <TopNavWrapper>
          <TopNav>{nameList}</TopNav>
        </TopNavWrapper>
        <Container>
          <ContainerLeft>좌로</ContainerLeft>
          <ContainerRight>
            <LoginWrap>
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
                  <Button onClick={handleClick}>로그아웃</Button>
                  <a href="">회원가입</a>
                </Form.Item>
              </Form>
            </LoginWrap>
            <SearchRangkingWrap></SearchRangkingWrap>
          </ContainerRight>
        </Container>
        <div className="footer"></div>
      </Wrapper>
    </>
  );
};

export default LandingPage;
