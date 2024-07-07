
import profileImage from '../assets/images/profile.jpg';
import { useSelector} from 'react-redux';
import { RootState } from '../redux/store';


const ProfileCard= () => {
  const existingData = useSelector((state: RootState) => state.user.user);
  const selectedCategory = useSelector((state: RootState) => state.user.category);
  return (
    <div className="bg-purple-700 text-white p-6 rounded-lg text-center">
      <div className="bg-white rounded-full w-16 h-16 mx-auto overflow-hidden mb-4">
        <img src={profileImage} alt="avatar" className="w-full h-full object-cover" />
      </div>
      <h3 className="text-lg font-semibold">{existingData?.name}</h3>
      <p className="text-sm">{existingData?.email}</p>
      <p className="text-sm">{existingData?.username}</p>
      <div className="flex mx-12 flex-wrap ">
          {selectedCategory?.map((item) => {
            return (
              <div key={item.id} >
                <button className=' w-24 h-8 bg-[#148A08] flex justify-around rounded-2xl items-center mr-2 mt-4'>
       <div className='text-white'>{item.name}</div>
      
        
        </button>
              </div>
            );
          })}
    </div>
    </div>
  );
};

export default ProfileCard;
