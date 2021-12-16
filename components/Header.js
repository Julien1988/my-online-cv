import Link from 'next/link';



const Header = () => {
   
    return (
        <header className="header">
            <div class='header__container flex flex-row '>
                <div class='w-20 pt-2'>
                    <img src='./profil-pic-01.jpg'></img>
                </div>
                <div class='flex flex-col justify-center flex-auto pl-4 bg-gradient-to-t from-amber-300 via-amber-400 to-amber-500 pt-2'>
                    <h1>JULIEN BROENS</h1>
                    <h2>Développeur web</h2>
                </div>
            </div>
           
  
        </header>
    )
   

   
}



export default Header