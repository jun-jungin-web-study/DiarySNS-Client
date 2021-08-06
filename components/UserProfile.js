import { Avatar, Card, Button, Row, Col } from 'antd';
import React from 'react';

const dummy = {
  nickname: 'aim_1535',
  Posts: [],
  Followings: [],
  Followers: [],
  isLoggedIn: true,
};

const UserProfile = () => {
  return (
    <Row>
      <Col span={8} offset={8}>
        <Card style={{opacity: '0.9'}}
          actions={[
            <div key="twit">게시글<br />{dummy.Posts.length}</div>,
            <div key="following">팔로잉<br />{dummy.Followings.length}</div>,
            <div key="follower">팔로워<br />{dummy.Followers.length}</div>,
          ]}
        >
          <Card.Meta
            avatar={<Avatar size={64}> {dummy.nickname[0]}</Avatar>}
            title={dummy.nickname}
          />
          <Button>로그아웃</Button>
        </Card>
      </Col>
    </Row>
  );
};

export default UserProfile;
