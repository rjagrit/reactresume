import React from 'react'
import { FaChevronRight } from 'react-icons/fa6'

const AuthButtonWithProvider = ({Icon, label, provider}) => {
    
    const handleClick = async () =>{
        switch(provider){
            case "GoogleAuthProvider":
                console.log("Inside the Google Auth");
                break;
            
                case "GitHubAuthProvider":
                console.log("Inside the GitHub Auth");
                break;

                default:
                    console.log("Inside the Google Auth");
                    break;
        }
    }
  return (
    <div 
    onClick={handleClick} 
    className='w-full px-4 py-3 rounded-md border-2 border-blue-100 flex items-center justify-between cursor-pointer group hover:bg-blue-400
    active:Scale-95 duration-150 hover:shadow-md'>
        <Icon className="text-txtPrimary text-xl group-hover:text-white"/>
        <p className='text-txtPrimary text-lg group-hover:text-white'>{label}</p>
        <FaChevronRight className='text-primary text-base 
        group-hover:text-white'/>
    </div>
  )
}

export default AuthButtonWithProvider