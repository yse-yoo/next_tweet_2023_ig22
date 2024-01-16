
import Image from 'next/image';
import imageMe from '@/public/images/me.png';

const ProfilePage = () => {
    return (
        <div>
            <h1 className="text-3xl text-center font-bold">Profile</h1>
            <Image src={imageMe} alt="" />
        </div>
    );
}

export default ProfilePage;