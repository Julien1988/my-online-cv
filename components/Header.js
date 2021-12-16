import Link from 'next/link';



const Header = () => {
   
    return (
        <header className="header">
            <div className='header__container flex flex-row '>
                <div className='w-20 pt-2 pb-2 md:w-40'>
                    <img src='./profil-pic-01.jpg'></img>
                </div>
                <div className=' text-white font-bold flex flex-col justify-center flex-auto pl-4 bg-gradient-to-t from-amber-300 via-amber-400 to-amber-500 pt-2 pb-2 md:text-3xl md:pl-10'>
                    <h1>JULIEN BROENS</h1>
                    <h2>Développeur web</h2>
                </div >
            </div>
           
  
        </header>
    )
   

   
}



export default Header