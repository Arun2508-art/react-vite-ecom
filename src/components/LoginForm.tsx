import { Link } from 'react-router-dom';
import Input from './Input';
import Button from './styled/Button';

const LoginForm = () => {
  return (
    <div>
      <div className='flex flex-col items-center gap-4 mb-4'>
        <h3 className='font-bold text-2xl'>Login to your account</h3>
        <div className='font-normal text-sm text-black/50'>
          Enter your email below to login to your account
        </div>
      </div>
      <form className='flex flex-col gap-4'>
        <Input placeholder='m@example.com' id='req_email' label='Username' />
        <Input type='password' id='req_password' label='Password' />
        <Button type='submit'>Login</Button>
      </form>
      <div className='my-8 text-center relative text-sm'>
        <div className='border-t border-gray-300'></div>
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white px-2'>
          Or continue with
        </div>
      </div>
      <div className='w-full mt-6'>
        <button className='w-full rounded py-2 mt-4 ring-1 ring-gray-400'>
          Login with GitHub
        </button>
      </div>
      <div className='w-full text-center mt-6 text-sm'>
        Don&apos;t have an account?
        <Link
          to='auth/register'
          className='underline underline-offset-2 px-1 text-red-500 hover:font-semibold'
        >
          Sign Up
        </Link>
      </div>
    </div>
  );
};

export default LoginForm;
