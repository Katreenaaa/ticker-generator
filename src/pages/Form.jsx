import { useState } from "react";
import { useNavigate } from "react-router-dom";
import upload from "../assets/icon-upload.svg";
import Header from "../components/Header";

const Form = ({ setUserData }) => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    github: "",
    profilePic: null,
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setFormData((prev) => ({ ...prev, profilePic: imageUrl }));
    }
  };

  const validateForm = () => {
    let newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Invalid email format";

    if (!formData.github.trim()) newErrors.github = "GitHub username is required";
    else if (!/^[a-zA-Z0-9-]+$/.test(formData.github)) newErrors.github = "Invalid GitHub username";

    if (!formData.profilePic) newErrors.profilePic = "Profile picture is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setUserData(formData);
      navigate("/ticket");
    }
  };

  return (
    <div className="bg-gradient-to-br from-[#0f011a] to-[#13072e] min-h-screen flex flex-col gap-5 xs:gap-7 items-center justify-center ">
      <Header />
      <h1 className="text-2xl xs:text-3xl sm:text-5xl text-white text-center">Your Journey to Coding Conf <br /> 2025 Starts Here!</h1>
      <h3 className="text-center text-gray-600 pl-5 pr-5 xs:p-0 text-sm xs:text-md sm:text-xl">Secure your spot at this years buggest coding conference</h3>
      <form 
        onSubmit={handleSubmit} 
        className="w-75 sm:w-100 flex flex-col gap-5 pb-20"
      >

        <label className="block text-white">
          Upload Avatar
          <div className="h-30 mt-2 flex flex-col items-center justify-center border-2 border-dashed border-gray-400 rounded-lg p-4 cursor-pointer">
            {formData.profilePic ? (
              <img src={formData.profilePic} alt="Uploaded" className="w-24 h-24 rounded-full object-cover" />
            ) : (
              <>
                <img src={upload} alt="Upload icon" className="w-10 h-10" />
                <span className="text-gray-300 text-sm">Drag and drop or click to upload</span>
              </>
            )}
            <input type="file" accept="image/*" onChange={handleImageUpload} className="hidden" />
          </div>
          {errors.profilePic && <span className="text-red-500 text-sm">{errors.profilePic}</span>}
        </label>
        
        <label className="block text-white">
          Full Name
          <input 
            type="text" 
            name="name" 
            value={formData.name} 
            onChange={handleChange} 
            className="h-12 mt-1 w-full px-4 py-2 rounded-md bg-white bg-opacity-20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="Enter your name"
          />
          {errors.name && <span className="text-red-500 text-sm">{errors.name}</span>}
        </label>
        
        <label className="block text-white">
          Email Address
          <input 
            type="email" 
            name="email" 
            value={formData.email} 
            onChange={handleChange} 
            className="h-12 mt-1 w-full px-4 py-2 rounded-md bg-white bg-opacity-20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="example@email.com"
          />
          {errors.email && <span className="text-red-500 text-sm">{errors.email}</span>}
        </label>
        
        <label className="block text-white">
          GitHub Username
          <input 
            type="text" 
            name="github" 
            value={formData.github} 
            onChange={handleChange} 
            className="h-12 mt-1 w-full px-4 py-2 rounded-md bg-white bg-opacity-20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="@yourusername"
          />
          {errors.github && <span className="text-red-500 text-sm">{errors.github}</span>}
        </label>
        
        <button 
          type="submit" 
          className="h-12 w-full py-3 bg-red-500 text-white font-semibold rounded-md hover:bg-red-600 transition-all"
        >
          Generate My Ticket
        </button>
      </form>
    </div>
  );
};

export default Form;
