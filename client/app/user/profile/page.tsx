
import Image from 'next/image';
import imageMe from '@/public/images/me.png';

const ProfilePage = () => {
    return (
        <div>
            <h1 className="text-3xl text-center font-bold p-3">Profile</h1>
            <div className="flex justify-center p-3">
                <Image src={imageMe} className="h-36 w-36 rounded-full" alt="" />
            </div>
            <div className="flex justify-center p-3">
                Dummy User
            </div>
        </div>
    );
}

export default ProfilePage;