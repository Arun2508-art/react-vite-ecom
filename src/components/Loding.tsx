const Loading = () => {
  return (
    <div className='flex gap-2 h-96 w-full items-center justify-center'>
      <div className='size-6 animate-bounce rounded-full bg-blue-500'></div>
      <div className='size-6 animate-bounce rounded-full bg-yellow-500'></div>
      <div className='size-6 animate-bounce rounded-full bg-purple-500'></div>
    </div>
  );
};

export default Loading;
