import React, { useCallback, useRef } from 'react';
import { Form, Input, Button } from 'antd';

const dummy = {
  isLoggedIn: true,
  imagePaths: [],
  mainPosts: [{
    content: '첫 번째 게시글',
    img: 'https://bookthumb-phinf.pstatic.net/cover/137/995/13799585.jpg?udate=20180726',
  }],
};

const PostForm = () => {
  return (
    <div>
      <div>
        {dummy.imagePaths.map((v) => {
          return (
            <div key={v} style={{ display: 'inline-block' }}>
              <img src={`http://localhost:3000/${v}`} style={{ width: '30px' }} alt={v} />
            </div>
          )
        })}
      </div>
    </div>
  );
};

export default PostForm;
