"use client"
import SignUp from '@/components/Auth/SignUp';
import { useRouter } from 'next/navigation';



const Page = () => {
  const router = useRouter();

  const handleSignUpSuccess = () => {
    router.push('/');
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <SignUp onSignUpSuccess={handleSignUpSuccess}/>
    </div>
  );
};

export default Page;
