import { useState } from "react";
import CategoryBox from "../component/CategoryBox";
import CategoryTagBox from "../component/CategoryTagBox";
import url from "../assets/images/image 11.png"
import urlAction from "../assets/images/image 2.png";
import urlDrama from "../assets/images/image 3.png";
import urlRomance from "../assets/images/image 4.png";
import urlThrillar from "../assets/images/image 6.png";
import urlWestern from "../assets/images/image 7.png";
import urlHorror from "../assets/images/image 8.png";
import urlFantasy from "../assets/images/image 9.png";
import urlMusic from "../assets/images/image 10.png";
import urlFiction from "../assets/images/image 11.png"
import { useNavigate } from "react-router-dom";
// interface FormData {
//   name: string;
//   email: string;
//   username: string;
//   mobile:string;
//   agreeTerms: boolean;
// }
interface Category {
  id: number;
  name: string;
  url:string;
  color:string
}
interface selectedItem {
  id: number;
  name: string;
 
}

const Category: Category[] = [
  {
    id: 0,
    name: "Horror",
    url:urlHorror,
    color:"#7358FF"
  },
  {
    id: 1,
    name: "Romance",
    url:urlRomance,
    color:"#148A08"
  },
  {
    id: 2,
    name: "Action",
    url:urlAction,
    color:"#FF5209"
  },
  {
    id: 3,
    name: "Triller",
    url:urlThrillar,
    color:"#84C2FF"
  },
  {
    id: 4,
    name: "Drama",
    url:urlDrama,
    color:"#D7A4FF"
  },
  {
    id: 5,
    name: "Fiction",
    url:urlFiction,
    color:"#6CD061"
  },
  {
     id: 6,
      name: "Western" ,
     url:urlWestern,
     color:"#902500"
    },
     
  
  {
    id: 7,
    name: "Music",
    url:urlMusic,
    color:"#E61E32"
  },
  {
    id: 8,
    name: "fantasy",
    url:urlFantasy,
    color:"#FF4ADE"
  },
];

const MovieSelectionpage = () => {
  //   const userJson: string | null = localStorage.getItem('user');

  //  Check if the item exists in localStorage
  // if (userJson !== null) {
  //   try {

  //     const items: FormData = JSON.parse(userJson) as FormData;
  //     console.log("local storage data",items);}
  //   } catch (e) {

  //     console.error('Error parsing JSON from localStorage:', e);
  //   }
  // } else {
  //   console.log('No user data found in localStorage.');
  // }
  const navigate = useNavigate();
  const [selectedItems, setSelectedItems] = useState<selectedItem[]>([]);
  console.log(selectedItems);
  const deleteitem=(id:number)=>{
    setSelectedItems(selectedItems.filter((items)=>items.id!=id))

  }
  const goTonextPage=()=>{
    if(selectedItems.length>=3){
       navigate('/home')
       localStorage.setItem('SelectedCategory', JSON.stringify(selectedItems));
    }
    else return

  }

  return (
    <div className="flex w-full bg-black h-screen">
      <div className=" justify-center text-left py-16 w-5/12 ">
        <h2 className="text-4xl font-bold mb-6 font-Monospace text-green-600 mx-16">
          Super app
        </h2>
        <h1 className="text-6xl font-bold text-white  text-left w-68 mx-16 my-16">
          Choose your entertainment category
        </h1>
        <div className="flex mx-16 flex-wrap ">
          {selectedItems.map((item) => {
            return (
              <div key={item.id} onClick={()=>deleteitem(item.id)}>
                <CategoryTagBox item={item} />
              </div>
            );
          })}
         
        </div>
        <div className="mx-16">
        {(selectedItems.length < 3 && selectedItems.length > 0 ) && (
            <span className="text-red-500 text-sm">
              Minimum 3 category required
            </span>
          )}

        </div>
       
      </div>
      <div className="w-7/12">
        <div className="grid grid-flow-col md:grid-cols-3 mt-9 gap-4 grid-rows-3 m-8">
          {Category.map((category:Category) => {
            return (
              <div key={category?.id} >
                <CategoryBox
                  category={category}
                  itemSelected={selectedItems}
                  setItemSelected={setSelectedItems}
                />
              </div>
            );
          })}
        </div>
        <div className="mx-16 float-right">
          <button className="text-white bg-[#148A08] w-32 h-8 rounded-2xl hover:bg-lime-300" onClick={goTonextPage}>
            Next Page
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieSelectionpage;
