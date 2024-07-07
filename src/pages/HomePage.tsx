

import ProfileCard from "../component/ProfileCard";
import ArticleSection from "../component/ArticleSection";
import CountdownTimer from "../component/Countdowntimer";
import NotesSection from "../component/Notesection";
import WeatherWidget from "../component/Weatherwidget";
import { useNavigate } from "react-router-dom";





const HomePage = () => {
 
  const navigate = useNavigate();




  const onBrowse=()=>{
    navigate('/movielistpage')
  }
 

  return (
    <div className="md:flex  gap-4 p-4 bg-black text-white h-full">
      <div className="w-9/12">
      <div className="flex ">
        <div className="mid:w-152 w-64">
          <div className="">   <ProfileCard  /> </div>
     
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