import Link from 'next/link';
import { useState, useEffect } from 'react';



const Header = () => {
    const [offetY, setOffsetY] = useState(0)
    const handleScroll = () => {
        setOffsetY(window.pageYOffset)
    }  

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll)
    }, [])
   
    return (
        <header className="header">
            <div className='header__container flex flex-row '>
                <div className='w-20 pt-2 pb-2 md:w-40'>
                    <img style={{ transform: `rotate(${offetY * 0.5}deg)`}} src='./profil-pic-01.jpg'></img>
                </div>
                <div className='z-10 text-white font-bold flex flex-col justify-center flex-auto pl-4 bg-gradient-to-t from-amber-300 via-amber-400 to-amber-500 pt-2 pb-2 md:text-3xl md:pl-10'>
                    <h1>JULIEN BROENS</h1>
                    <h2>Développeur web</h2>
                </div >
            </div>
           
  
        </header>
    )
   

   
}



export default Header