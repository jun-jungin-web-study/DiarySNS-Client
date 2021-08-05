import React from 'react';

import NicknameEditForm from '../components/NicknameEditForm';
import AppLayout from '../components/AppLayout';
import FollowList from '../components/FollowList';

const Profile = () => {
  const followerList = [{ nickname: 'JUNGINRHEE' }, { nickname: 'dongjoo' }, { nickname: 'hawoon' }];
  const followingList = [{ nickname: 'JUNGINRHEE' }, { nickname: 'dongjoo' }, { nickname: 'hawoon' }];

  return (
    <AppLayout>
      <NicknameEditForm />
      <FollowList
        header="팔로잉 목록"
        data={followingList}
      />
      <FollowList
        header="팔로워 목록"
        data={followerList}
      />
    </AppLayout>
  );
};

export default Profile;
