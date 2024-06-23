import React from 'react'
interface Category {
    id: number;
    name: string;
  }
  
  interface CategoryBoxProps {
    item:Category
  }

const CategoryTagBox:React.FC<CategoryBoxProps> = ({item}) => {
   
    
  return (
    <button className=' w-24 h-8 bg-[#148A08] flex justify-around rounded-2xl items-center mr-4 mt-4'>
       <div className='text-white'>{item.name}</div>
       <div className='text-red-400'><p>X</p> </div>
        
        </button>
  )
}

export default CategoryTagBox