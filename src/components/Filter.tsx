interface FilterButtonProps {
  category: {
    label: string;
    value: string;
  }[];
  onClick: (value: string) => void;
  onChange: (value: string) => void;
  active?: string;
}

const Filter = ({ category, onClick, onChange, active }: FilterButtonProps) => {
  return (
    <div className='my-8 px-8 flex gap-4 justify-between'>
      <div>
        <div className='text-xl font-semibold my-4'>Filters:</div>
        <div className='flex gap-2 flex-wrap'>
          {category.map((item) => (
            <button
              key={item.value}
              className={`ring-1 ring-gray-600 rounded-md px-3 py-1 text-sm font-medium capitalize hover:bg-gray-600 hover:text-white ${
                item.value === active ? 'bg-gray-800 text-white' : ''
              }`}
              onClick={() => onClick(item.value)}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      <div className=''>
        <div className='text-xl font-semibold my-4'>Sort by:</div>
        <select
          name='sort'
          id=''
          className='select py-1 px-2 rounded-md text-sm font-medium bg-white ring-1 ring-gray-600 focus:outline-lime-700'
          onChange={(e) => onChange(e.target.value)}
        >
          <option value='normal'>Normal</option>
          <option value='ascprice'>Price (low to high)</option>
          <option value='descprice'>Price (high to low)</option>
        </select>
      </div>
    </div>
  );
};

export default Filter;
