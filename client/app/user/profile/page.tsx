"use client"

import Image from 'next/image';
import imageMe from '@/public/images/me.png';
import { useContext, useEffect, useState } from 'react';
import { getAccessToken, getUser } from '@/app/services/UserService';
import { useRouter } from 'next/navigation';
import { User } from '@/app/models/User';
import UserContext from '@/app/context/UserContext';

const ProfilePage = () => {
  const { user, setUser } = useContext(UserContext);
  // const [user, setUser] = useState<User>()

  const router = useRouter();

  useEffect(() => {
    (async () => {
      if (!user?.accessToken) {
        // ユーザ認証していなければログインページにリダイレクト
        router.replace('/auth/login')
      }
    })();
  }, [user])

  return (
    <div>
      <h1 className="text-3xl text-center font-bold p-3">Profile</h1>
      <div className="flex justify-center p-3">
        <Image src={imageMe} className="h-36 w-36 rounded-full" alt="" />
      </div>
      <div className="flex justify-center p-3">
        {user?.name}
      </div>
    </div>
  );
}

export default ProfilePage;