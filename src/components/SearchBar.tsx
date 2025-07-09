import { IconSearch } from '@tabler/icons-react';
import React from 'react';

const SearchBar = () => {
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <form
      className='flex justify-between gap-4 bg-gray-100 p-2 rounded-md flex-1'
      onSubmit={handleSearch}
    >
      <input
        type='text'
        name='navbar-search'
        placeholder='Search'
        className='flex-1 bg-transparent outline-none'
      />
      <button className='cursor-pointer'>
        <IconSearch stroke={1} />
      </button>
    </form>
  );
};

export default SearchBar;
