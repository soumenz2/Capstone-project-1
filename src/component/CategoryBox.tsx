
import React from 'react'
interface Category {
  id: number;
  name: string;
  url:string,
  color:string
}
interface itemSelected {
  id: number;
  name: string
}

interface CategoryBoxProps {
  category: Category;
  itemSelected: itemSelected[];
  setItemSelected: (selected: itemSelected[]) => void;
}


const  CategoryBox:React.FC<CategoryBoxProps> = ({category,itemSelected,setItemSelected}) => {
 
  const isSelected = itemSelected.some(item => item.id === category.id);
   const borderColor = isSelected ? 'border-[#11B800]' : 'border-transparent';
   const bgcoler='border-green-500'
  
  const itemclicked=()=>{
    if (isSelected) {
    
      setItemSelected(itemSelected.filter(item => item.name !== category.name));
    } else {
     
      setItemSelected([...itemSelected, {id:category.id,name:category.name}]);
    }
    
  }
  return (
    <div className={` text-white h-28 w-28 md:h-36 md:w-52 p-2 mx-2  rounded-lg border-4 ${borderColor} ${bgcoler}`} style={{backgroundColor: category.color}} onClick={itemclicked}>
      <div  className=''>{category.name}</div>
      <div>
<img className="" src={category.url} alt="image description" />
</div>
      
      </div>
  )
}

export default CategoryBox