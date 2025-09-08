
import Select from 'react-select';
import { Search } from 'lucide-react';

const Toolbar = ({handleSearch, handleCheck, selectedOption, setSelectedOption, productOptions}) => {


  return (
    <div className='flex flex-row justify-end items-center gap-15 w-[65vw] mb-8'>
      <div className="relative w-60 max-w-sm">
        <span className="absolute inset-y-0 left-0 flex items-center pl-2">
          <Search className="text-gray-400 w-5 h-5" />
        </span>
        <input 
          type="text" 
          placeholder="search..." 
          className="w-full pl-9 pr-2 py-2 border-b-2 focus:outline-none"
          onChange={handleSearch}
        />
      </div>
      <span className='w-52'>
        <Select
          unstyled
          classNames={{
            control: () =>
              "border border-gray-300 rounded-md bg-white text-black px-2 py-1",
            menu: () => "bg-white border border-gray-200 rounded-md mt-1",
            option: ({ isFocused, isSelected }) =>
              `px-3 py-2 cursor-pointer ${
                isSelected ? "bg-blue-500 text-white" : isFocused ? "bg-gray-300 text-black" : "text-black"
              }`,
            singleValue: () => "text-black",
          }}
          value={selectedOption}
          onChange={(option) => setSelectedOption(option)}
          name="options"
          options={productOptions}
        />
      </span>
      <span className='flex justify-center items-center gap-1'>
        <input type="checkbox" onChange={handleCheck} name="isFeatured" id="" className='w-4 h-4'/>
        <label htmlFor="isFeatured">Featured Only</label>
      </span>
    </div>
  )
}

export default Toolbar