import { currentUser, auth } from '@clerk/nextjs/server';
import { UserButton } from '@clerk/nextjs';
import { fetchOrGenerateTokens } from '@/utils/actions';

const MemberProfile = async () => {
  const user = await currentUser();
  const { userId } = auth();
  await fetchOrGenerateTokens(userId);
  
  return (
    <div className='px-4 flex items-center gap-2'>
      <UserButton fallbackRedirectUrl='/' />
      <p>{user.emailAddresses[0].emailAddress}</p>
    </div>
  );
};

export default MemberProfile;