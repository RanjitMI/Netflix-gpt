import React, { useEffect } from 'react'
import Icon from '../utils/images/Screenshot 2024-11-07 131233.png'
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO } from '../utils/constants';

const Header = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate(); 
  const user = useSelector(store => store.user)
  // console.log(user)


  const handleSignOut=()=>{
    signOut(auth).then(() => {
      // Sign-out successful.

    }).catch((error) => {
      // An error happened.
      navigate('/error')
    });
  }

  useEffect(()=>{
    const unsubcribe=onAuthStateChanged(auth, (user) => {
      if (user) {
      
        const {uid , email , displayName , photoURL}= user;
        dispatch(addUser({uid : uid , email : email , displayName : displayName,photoURL : photoURL }))
        navigate("/browse")
        // ...
      } else {
        dispatch(removeUser())
        navigate("/")
      }
    });

    return ()=>{
        unsubcribe()
    }
  },[])

  return (
    <div
    className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between' 
    >
     <img
     className='w-44'
     src={LOGO} alt='logo'/> 
   { user &&  <div className='flex p-2'>
        <img alt = "UserIcon"
          src={user?.photoURL}
          className='w-12 h-12 '
        />
        <button onClick={handleSignOut} className='font-bold text-white'>(sign Out)</button>
     </div>}
    </div>
  )
}

export default Header