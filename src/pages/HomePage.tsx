"use client"
import React,{useEffect, useState} from "react";
import CategoryTagBox from "../component/CategoryTagBox";
import ProfileCard from "../component/ProfileCard";
import ArticleSection from "../component/ArticleSection";
import CountdownTimer from "../component/Countdowntimer";
import NotesSection from "../component/Notesection";
import WeatherWidget from "../component/Weatherwidget";
import { useNavigate } from "react-router-dom";
import { useSelector} from 'react-redux';
import { RootState } from '../redux/store';



interface FormData {
  name: string;
  email: string;
  username: string;
  mobile:string;
  agreeTerms: boolean;
}
interface selectedItem {
  id: number;
  name: string;
 
}
const HomePage = () => {
  const [users, setUsers] = useState<FormData>([]);
  const [category,setcategory]=useState<selectedItem[]>([]);
  const navigate = useNavigate();
  const existingData = useSelector((state: RootState) => state.user.user);
  const selectedCategory = useSelector((state: RootState) => state.user.category);

  useEffect(() => {
   
    
    if (existingData ) {
     
      setUsers(existingData);
      
    }
    if (selectedCategory ) {
      
      setcategory(selectedCategory);
      console.log('selected category:', category);
    }
  }, []);

  const onBrowse=()=>{
    navigate('/movielistpage')
  }
 

  return (
    <div className="md:flex  gap-4 p-4 bg-black text-white h-full">
      <div className="w-9/12">
      <div className="flex ">
        <div className="mid:w-152 w-64">
          <div className="">   <ProfileCard  /></div>
     
      <WeatherWidget />
    <CountdownTimer />
        </div>
        <div className=""><NotesSection /></div>
      </div>
      
      </div>
      <div className="md:w-3/12 h-screen">
      <ArticleSection />
      <button className="bg-[#148A08] w-40 h-10 rounded-xl mt-8 mx-16" onClick={onBrowse} >Browse</button>
      </div>
   
   
  </div>
  )
}
export default HomePage