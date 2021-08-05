import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { Col, Input, Menu, Row,Avatar } from 'antd';
import {HomeOutlined} from '@ant-design/icons';
import LoginForm from './LoginForm';
import UserProfile from './UserProfile';

const dummy = {
  nickname: 'AIM_1535',
  Post: [],
  Followings: [],
  Followers: [],
  isLoggedIn: true,
};


const AppLayout = ({ children }) => {
  return (
    <div>
      <Menu>
        <Row>
          <Col span={4} offset={0}>
            <Menu.Item key="home"><Link href="/"><a>DiarySNS</a></Link></Menu.Item>
          </Col>
          <Col span={8} offset={4}>
            <Menu.Item key="mail">
              <Input.Search enterButton style={{ verticalAlign: 'middle' }} />
            </Menu.Item>
          </Col>
          <Col span={1} offset={6}>
            <Menu.Item key="home2"><Link href="/"><HomeOutlined /></Link></Menu.Item>
          </Col>
          <Col span={1} offset={0}>   
            <Menu.Item key="profile"><Link href="/profile"><Avatar>{dummy.nickname[0]}</Avatar></Link></Menu.Item>
          </Col>
        </Row>
      </Menu>
      <Row gutter={8}>
        <Col xs={24} md={6}>
          {dummy.isLoggedIn
            ? <UserProfile />
            : <LoginForm />}
        </Col>
        <Col xs={24} md={18}>
          {children}
        </Col>
      </Row>
    </div>
  );
};

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default AppLayout;
