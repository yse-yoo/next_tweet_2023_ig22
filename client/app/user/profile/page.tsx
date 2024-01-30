"use client"

import Image from 'next/image';
import imageMe from '@/public/images/me.png';
import { useSession } from 'next-auth/react';
import { User } from '@/app/models/User';
// import { useContext } from 'react';
// import UserContext from '@/app/context/UserContext';

const ProfilePage = () => {
  // const { user } = useContext(UserContext);
  const { data: session } = useSession();
  const user: User = session?.user as User;

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