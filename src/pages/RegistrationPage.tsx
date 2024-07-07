import React, { useState, ChangeEvent, FormEvent } from "react";
import image from "../assets/backgroundimage.jpg";
import { useNavigate } from "react-router-dom";
import {  useDispatch } from 'react-redux';
import { setUser} from '../redux/userSlice';
interface FormData {
  name: string;
  email: string;
  username: string;
  password:string;
  mobile:string;
  agreeTerms: boolean;
}

const RegistrationPage: React.FC = () => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    username: "",
    password:"",
    mobile:"",
    agreeTerms: false,
  });
  const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({
    name: '',
    email: '',
    username: '',
    password:'',
    mobile:'',
    agreeTerms: ''
  });
  const navigate = useNavigate();
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    const val = type === "checkbox" ? checked : value;
    setFormData({ ...formData, [name]: val });
    setFormErrors({ ...formErrors, [name]: '' });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const errors: { [key: string]: string } = {};
    if (formData.name.trim() === '') {
      errors.name = 'Feild is required';
    }
    if (formData.email.trim() === '') {
      errors.email = 'Feild is required';
    }
    if (formData.username.trim() === '') {
      errors.username = 'Feild is required';
    }
    if (formData.mobile.trim() === '') {
        errors.mobile = 'Feild is required';
      }
    if (!formData.agreeTerms) {
      errors.agreeTerms = 'Check this box if you want to proceed ';
    }
    
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
    } else {
    
      console.log(formData);
      setFormErrors({  name: '',
        email: '',
        username: '',
        password:'',
        mobile:'',
        agreeTerms: '' });
        dispatch(setUser(formData));
        navigate("/selection");
    }
  };

  return (
    <div
      className="grid grid-cols-1 md:grid-cols-2 h- w-full"
       
    >
   
      <div
        className="bg-cover bg-center flex flex-col justify-center items-center  "
        style={{backgroundImage: `url(${image})`}}
      >
        <h1 className="text-4xl font-bold  text-white">Discover new things on superapp</h1>
        
      </div>


      <div className="flex justify-center items-center  bg-black">
      
        <form
        noValidate
        
          onSubmit={handleSubmit}
          className="w-full max-w-md bg-black p-8 rounded-3xl shadow-md"
        >
          <h2 className="text-4xl font-bold mb-6 font-Monospace text-green-600">Super app</h2>
          <div className="mb-4 ">
          <p className="text-white">Create your new account</p>
          </div>
          <div className="mb-4 ">
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-slate-500 rounded-md bg-slate-600 text-white text-bold"
            />
               {formErrors.name && <span className="text-red-500 text-sm">{formErrors.name}</span>}
          </div>
          <div className="mb-4">
            <input
              type="text"
              id="username"
              name="username"
              placeholder="UserName"
              value={formData.username}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-slate-500  bg-slate-600 text-white text-bold rounded-md"
            />
            {formErrors.username && <span className="text-red-500 text-sm">{formErrors.username}</span>}
          </div>
          <div className="mb-4">
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-slate-500  bg-slate-600 text-white text-bold rounded-md"
            />
            {formErrors.username && <span className="text-red-500 text-sm">{formErrors.password}</span>}
          </div>
          <div className="mb-4">
            <input
              type="email"
              id="email"
              placeholder="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-slate-500  bg-slate-600 text-white text-bold rounded-md"
            />
            {formErrors.email && <span className="text-red-500 text-sm">{formErrors.email}</span>}
          </div>
          <div className="mb-6">
            <input
              type="text"
              id="mobile"
              placeholder="Mobile"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-slate-600  bg-slate-600 text-white text-bold rounded-md"
            />
            {formErrors.mobile && <span className="text-red-500 text-sm">{formErrors.mobile}</span>}
          </div>
          <div className="mb-4 flex items-center">
            <input
              type="checkbox"
              id="agreeTerms"
              name="agreeTerms"
              checked={formData.agreeTerms}
              onChange={handleChange}
              className="mr-2"
            />

            <label htmlFor="agreeTerms" className="text-gray-700">
              Share my registyration data with superapp
            </label>
           
            
          </div>
          <div><span className="text-red-500 text-sm">{formErrors.agreeTerms}</span></div> 
          
            
          <button
            type="submit"
            className="w-full py-2 bg-green-500 text-white font-bold rounded-3xl hover:bg-green-700"
            
          >
            SIGN UP
          </button>
          <p className="mt-4 text-gray-700 text-left">
            By Clicking on signing up, you agree to superapp{" "}
            <a href="#" className="text-green-600 hover:underline">
              Terms and Conditions
            </a>
           
          </p>
          <p className="mt-4 text-gray-700 text-left">
            To learn more about superapp collects,uses,shares and protects your personal data please head superapp{" "}
            <a href="#" className="text-green-600 hover:underline">
              Privacy policy
            </a>
           
          </p>
        </form>
      </div>
    </div>
  );
};

export default RegistrationPage;
