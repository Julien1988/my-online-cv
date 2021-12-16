import Head from 'next/head'
import Image from 'next/image'


export default function Home() {
  return (
    <main className='pl-4 pr-4 pb-6 md:pt-4'>
      <div class='details flex flex-col lg:pb-6'>
        <h1 class='bg-slate-800 text-white uppercase pl-1 pr-1 mt-3 w-fit'>Détails</h1>
        <div class='md:flex md:flex-row md:flex-wrap'>
          <ul class='md:pr-16'>
            <li><h2 class='text-sm font-medium pt-2 pb-1'>Contact</h2></li>
            <li><p class='text-xs'>35, Tienne Jean-Pierre, 5150 FLOREFFE</p></li>
            <li><h2 class='text-sm font-medium pt-2 pb-1'>Nationalité</h2></li>
            <li><p class='text-xs'>BELGIQUE</p></li>
            <li><a class='text-xs' href='mailto:julienbroens@gmail.com'>julienbroens@gmail.com</a></li>
            <li><a class='text-xs' href='tel:0032474226665'>+32 474 22 66 65</a></li>
          </ul>
          <ul>
            <li><h2 class='text-sm font-medium pt-2 pb-1'>Permis de conduire</h2></li>
            <li><p class='text-xs'>Permis B (véhicule personnel)</p></li>
            <li><h2 class='text-sm font-medium pt-2 pb-1'>Date de naissance</h2></li>
            <li><p class='text-xs'>29/08/1988</p></li>
          </ul>
        </div>
      </div>
      <div class='lg:flex lg:flex-wrap lg:pb-6'>
        <div class='experiences flex flex-col lg:pr-8 lg:border-r-2'>
          <h1 class='bg-slate-800 text-white uppercase pl-1 pr-1 mt-3 w-fit'>Expériences profesionnelles</h1>
          <ul>
              <li><h2 class='text-sm font-medium pt-2 '>Educateur spécialisé, A1 Liège</h2></li>
              <li><p class='text-xs text-slate-300 pb-1'>2011 - 2018</p></li>
              <li><p class='text-xs'>Agent éducation en SRJ</p></li>
          </ul>
          <ul>
              <li><h2 class='text-sm font-medium pt-2 '>Développeur web, O'Clock</h2></li>
              <li><p class='text-xs text-slate-300 pb-1'>2019 - 2020</p></li>
              <li><p class='text-xs'>Formation de 6 mois dans le développement web (Wordpress, Php, Poo, Mysql, Js, Html, Css)</p></li>
          </ul>
          <ul>
              <li><h2 class='text-sm font-medium pt-2 '>Développeur web, BeCode Liège</h2></li>
              <li><p class='text-xs text-slate-300 pb-1'>2020 - 2020</p></li>
              <li><p class='text-xs'>Formation de 6 mois dans le développement web (NodeJS, React, Wordpress, Php, MongoDB, Netlify)</p></li>
          </ul>
          <ul>
              <li><h2 class='text-sm font-medium pt-2 '>Stage développeur web, OANNA Nandrin</h2></li>
              <li><p class='text-xs text-slate-300 pb-1'>Septembre 2020 - Décembre 2020</p></li>
              <li><p class='text-xs'>Stage en entreprise de 3 mois dans une agence de communication (Prestashop, Cms made simple, JQuery, Symfony)</p></li>
          </ul>
          <ul>
              <li><h2 class='text-sm font-medium pt-2 '>Educateur spécialisé, A1 Bruxelles</h2></li>
              <li><p class='text-xs text-slate-300 pb-1'>2021 - ... </p></li>
              <li><p class='text-xs'>Agent éducation milieu des sans abris</p></li>
          </ul>
          <ul>
              <li><h2 class='text-sm font-medium pt-2 '>Développeur indépendant</h2></li>
              <li><p class='text-xs text-slate-300 pb-1'>2021 - ... </p></li>
              <li><p class='text-xs'>Perfectionnement de mes acquis et connaissances</p></li>
          </ul>
          
        </div>
        <div class='skills flex flex-col lg:pl-8'>
          <h1 class='bg-slate-800 text-white uppercase pl-1 pr-1 mt-3 w-fit'>Compétences</h1>
          <ul class='pt-2 '>
            <li><p class='text-xs pb-1 lg:pb-2'>HTML & CSS</p></li>
            <li><p class='text-xs pb-1 lg:pb-2'>React</p></li>
            <li><p class='text-xs pb-1 lg:pb-2'>NextJS</p></li>
            <li><p class='text-xs pb-1 lg:pb-2'>MongoDB</p></li>
            <li><p class='text-xs pb-1 lg:pb-2'>Mysql</p></li>
            <li><p class='text-xs pb-1 lg:pb-2'>Strapi</p></li>
            <li><p class='text-xs pb-1 lg:pb-2'>JavaScript</p></li>
            <li><p class='text-xs pb-1 lg:pb-2'>Php & POO</p></li>
            <li><p class='text-xs pb-1 lg:pb-2'>Wordpress</p></li>
            <li><p class='text-xs pb-1 lg:pb-2'>Prestashop</p></li>
            <li><p class='text-xs pb-1 lg:pb-2'>TailwindCSS</p></li>
            <li><p class='text-xs pb-1 lg:pb-2'>Git</p></li>
            <li><p class='text-xs pb-1 lg:pb-2'>Communication</p></li>
            <li><p class='text-xs pb-1 lg:pb-2'>Envie d'apprendre</p></li>
          
          
            </ul>
        </div>
      </div>
      <div class='languages flex flex-col lg:pb-6'>
        <h1 class='bg-slate-800 text-white uppercase pl-1 pr-1 mt-3 w-fit'>Langues</h1>
        <ul class='pt-2 '>
          <li><h2 class='text-sm font-medium'>Français</h2></li>
            <li><h2 class='text-sm font-medium'>Anglais</h2></li>
            
        </ul>
      </div>
      
    </main>
  )
}
