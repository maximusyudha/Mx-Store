"use client"
import { useRouter } from 'next/navigation';
import SignIn from '@/components/Auth/SignIn';

const Page = () => {
  const router = useRouter();

  const handleSignInSuccess = () => {
    router.push('/');
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <SignIn onSignInSuccess={handleSignInSuccess} />
    </div>
  );
};

export default Page;
