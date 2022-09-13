import { MagnifyingGlassPlus } from 'phosphor-react';

import './styles/main.css'

import logoImg from './assets/Logo.svg';

function App() {
  return (
    <div className="max-w-[1344px] mx-auto flex items-center flex-col">
      <img src={logoImg} alt="eSports" className='my-20'/>

      <h1 className='text-white text-6xl font-black'>
        Seu{' '}
          <span 
            className='bg-gradient-to-r from-[#9572FC] via-[#43E7AD] to-[#E1D55D] bg-clip-text text-transparent'
          >
            duo
          </span>
          {' '}esta aqui.
      </h1>

      <div className='grid grid-cols-6 gap-6 mt-16'>
        <a href="/" className='relative rounded-lg overflow-hidden'>
          <img src="/game-1.png" alt="LOL" />

          <div className='bg-game-gradient w-full pt-16 pb-4 px-4 absolute bottom-0'>
            <strong className='text-white font-bold block'>League of Legends</strong>
            <span className='text-zinc-300 text-sm'>4 anúncios</span>
          </div>
        </a>

        <a href="/" className='relative rounded-lg overflow-hidden'>
          <img src="/game-2.png" alt="DOTA2" />

          <div className='bg-game-gradient w-full pt-16 pb-4 px-4 absolute bottom-0'>
            <strong className='text-white font-bold block'>Dota 2</strong>
            <span className='text-zinc-300 text-sm'>4 anúncios</span>
          </div>
        </a>

        <a href="/" className='relative rounded-lg overflow-hidden'>
          <img src="/game-3.png" alt="CSGO" />

          <div className='bg-game-gradient w-full pt-16 pb-4 px-4 absolute bottom-0'>
            <strong className='text-white font-bold block'>Counter Strike</strong>
            <span className='text-zinc-300 text-sm'>4 anúncios</span>
          </div>
        </a>

        <a href="/" className='relative rounded-lg overflow-hidden'>
          <img src="/game-5.png" alt="APEX" />

          <div className='bg-game-gradient w-full pt-16 pb-4 px-4 absolute bottom-0'>
            <strong className='text-white font-bold block'>Apex Legends</strong>
            <span className='text-zinc-300 text-sm'>4 anúncios</span>
          </div>
        </a>

        <a href="/" className='relative rounded-lg overflow-hidden'>
          <img src="/game-6.png" alt="FORTNITE" />

          <div className='bg-game-gradient w-full pt-16 pb-4 px-4 absolute bottom-0'>
            <strong className='text-white font-bold block'>Fortnite</strong>
            <span className='text-zinc-300 text-sm'>4 anúncios</span>
          </div>
        </a>

        <a href="/" className='relative rounded-lg overflow-hidden'>
          <img src="/game-7.png" alt="WOW" />

          <div className='bg-game-gradient w-full pt-16 pb-4 px-4 absolute bottom-0'>
            <strong className='text-white font-bold block'>World of Warcraft</strong>
            <span className='text-zinc-300 text-sm'>4 anúncios</span>
          </div>
        </a>
      </div>

      <div className='pt-1 bg-gradient-to-r from-[#9572FC] via-[#43E7AD] to-[#E1D55D] self-stretch mt-8  rounded-lg overflow-hidden'>
        <div className='bg-[#2A2634] px-8 py-6 flex justify-between items-center'>
          <div>
            <strong className='text-white text-2xl font-bold block'>Não encontrou seu duo?</strong>
            <span className='text-zinc-300 text-sm block'>Publique um anúncio para encontrar novos players!</span>
          </div>

          <button className='py-3 px-4 bg-violet-500 text-white rounded-md hover:bg-violet-600 duration-500 flex items-center justify-center'>
            <MagnifyingGlassPlus size={24} className='mr-3' />
            Publicar anúncio
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
