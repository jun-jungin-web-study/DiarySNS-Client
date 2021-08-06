import React from 'react';
import AppLayout from '../components/AppLayout';
import LoginForm from '../components/LoginForm';
import UserProfile from '../components/UserProfile';
import MyPostCard from '../components/MyPostCard';
import MyPostForm from '../components/MyPostForm';
import { Col, Input, Menu, Row,Avatar} from 'antd';
import { Components } from 'antd/lib/date-picker/generatePicker';
import styles from '../components/stylee.module.css'
import styled from "styled-components";
import Image from 'next/image'

const dummy = {
  isLoggedIn: true,
  imagePaths: [],
  mainPosts: [{
    id: 1,
    User: {
      id: 1,
      nickname: 'june',
    },
    content: '첫 번째 게시글dddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
    Images: [{
      src: 'https://bookthumb-phinf.pstatic.net/cover/137/995/13799585.jpg?udate=20180726',
    }, {
      src: 'https://gimg.gilbut.co.kr/book/BN001958/rn_view_BN001958.jpg',
    }, {
      src: 'https://gimg.gilbut.co.kr/book/BN001998/rn_view_BN001998.jpg',
    }]
  }],
};



const Home = () => {
  return (
    <>
    {dummy.isLoggedIn
      ? <div style={{backgroundImage: "url('/img/wall1.jpg')"}}>
        <AppLayout>
            <UserProfile style={{opacity: 0.4}}/>
          <Row gutter={[40, 40]} justify="center">
            <Col span={7}>
            {dummy.mainPosts.map((c) => {
            return (
          <MyPostCard key={c.id} post={c} />
        );
      })}
            </Col>
            
            <Col span={7}>
            {dummy.mainPosts.map((c) => {
            return (
          <MyPostCard key={c.id} post={c} />
        );
      })}
            </Col>
            <Col span={7}>
            {dummy.mainPosts.map((c) => {
            return (
          <MyPostCard key={c.id} post={c} />
        );
      })}
            </Col>

            <Col span={7}>
              dsds
            </Col>
            <Col span={7}>
              dsds
            </Col>
            <Col span={7}>
              sdsd
            </Col>
          </Row>
        </AppLayout>
        </div>
      : <div style={{backgroundImage: "url('/img/mail.png')"}}><LoginForm />
      </div>}
      
      <style jsx>{`
  79          .mainn {
  80            background-color: red;
  81          }
  `}</style>
  </>
  
  );
};

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
      to right,
      rgba(20, 20, 20, 0.1) 10%,
      rgba(20, 20, 20, 0.7) 70%,
      rgba(20, 20, 20, 1)
    ),
    url("../public/img/postit.png");
  background-size: cover;
`;


export default Home;
