import { auth, currentUser } from '@clerk/nextjs/server';
import Image from 'next/image';
import { LuUser } from 'react-icons/lu';

export default async function UserIcon() {
  // const { userId } = auth();

  const user = await currentUser();
  const profileImage = user?.imageUrl;

  if (profileImage)
    return (
      <Image
        src={profileImage}
        alt=""
        width={24}
        height={24}
        className="w-6 h-6 rounded-full object-cover"
      />
    );

  return <LuUser className="w-6 h-6 bg-primary rounded-full text-white" />;
}
