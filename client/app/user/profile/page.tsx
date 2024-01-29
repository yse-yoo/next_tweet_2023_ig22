"use client"

import Image from 'next/image';
import imageMe from '@/public/images/me.png';
import { useEffect, useState } from 'react';
import { getAccessToken, getUser } from '@/app/services/UserService';
import { useRouter } from 'next/navigation';
import { User } from '@/app/models/User';

const ProfilePage = () => {
    const router = useRouter();
    const [user, setUser] = useState<User>()
    
    useEffect(() => {
        (async () => {
          // トークンを使って、ユーザを取得
          const token = getAccessToken();
          console.log("Access Token:", token)
          const data = await getUser(token);
          if (data?.accessToken) {
            setUser(data);
          } else {
            // ユーザ認証していなければログインページにリダイレクト
            router.replace('/auth/login')
          }
        })();
      }, [])

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