import Head from 'next/head'
import Image from 'next/image'


export default function Home() {
  return (
    <main className='pl-4 pr-4'>
      <div class='details flex flex-col'>
        <h1 class='bg-slate-800 text-white uppercase pl-1 pr-1 mt-3 w-fit'>Détails</h1>
        <div>
          <ul>
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
      <div class='experiences flex flex-col'>
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
      <div class='skills flex flex-col'>
        <h1 class='bg-slate-800 text-white uppercase pl-1 pr-1 mt-3 w-fit'>Compétences</h1>
        <ul class='pt-2 '>
          <li><p class='text-xs'>HTML & CSS</p></li>
          <li><p class='text-xs'>React</p></li>
          <li><p class='text-xs'>NextJS</p></li>
          <li><p class='text-xs'>MongoDB</p></li>
          <li><p class='text-xs'>Mysql</p></li>
          <li><p class='text-xs'>Strapi</p></li>
          <li><p class='text-xs'>JavaScript</p></li>
          <li><p class='text-xs'>Php & POO</p></li>
          <li><p class='text-xs'>Wordpress</p></li>
          <li><p class='text-xs'>Prestashop</p></li>
          <li><p class='text-xs'>TailwindCSS</p></li>
          <li><p class='text-xs'>Git</p></li>
          <li><p class='text-xs'>Communication</p></li>
          <li><p class='text-xs'>Envie d'apprendre</p></li>
         
         
          </ul>
      </div>
      <div class='languages flex flex-col'>
        <h1 class='bg-slate-800 text-white uppercase pl-1 pr-1 mt-3 w-fit'>Langues</h1>
        <ul class='pt-2 '>
          <li><h2 class='text-sm font-medium'>Français</h2></li>
            <li><h2 class='text-sm font-medium'>Anglais</h2></li>
            
        </ul>
      </div>
      
    </main>
  )
}
