import { useEffect, useState } from 'react';
import axios from 'axios';

import * as Dialog from '@radix-ui/react-dialog';

import { useKeenSlider } from 'keen-slider/react';

import { GameBunner } from './components/GameBunner';
import { CreateAdModal } from './components/CreateAdModal';
import { CreateAdBunner } from './components/CreateAdBunner';
import { Arrow } from './components/Arrow';

import logoImg from './assets/Logo.svg';

import './styles/main.css'


interface Game {
  bannerUrl: string,
  id: string,
  title: string,
  _count: {
    ads: number,
  }
}

function App() {
  const [games, setGames] = useState<Game[]>([]);

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    mode: "free",
    slides: {
      perView: 1.5,
      spacing: 16,
    },
    renderMode: "performance",
    defaultAnimation: {
      duration: 100,
    },

    breakpoints: {
      "(min-width: 400px)": {
        slides: { perView: "auto" },
      },
      "(min-width: 768px)": {
        slides: { perView: 3, spacing: 24 },
      },
      "(min-width: 980px)": {
        slides: { perView: 4, spacing: 16 },
      },
      "(min-width: 1280px)": {
        slides: { perView: 6, spacing: 16 },
      },
      "(min-width: 1536px)": {
        slides: { perView: "auto", spacing: 24 },
      },
    }
  });

  useEffect(() => {
    axios('http://192.168.1.6:3333/games').then(response => {
      setGames(response.data)
    });
  }, []);

  if (!games || !games.length) return null;
  
  return (
    <div className="max-w-[90%] mx-auto flex flex-col items-start md:items-center">
      <img src={logoImg} alt="eSports" className='my-20 mx-auto'/>

      {/* className='text-white text-6xl font-black' */}
      <h1 className='text-white text-2xl sm:text-4xl md:text-6xl font-black'>
        Seu{' '}
          <span 
            className='bg-gradient-to-r from-[#9572FC] via-[#43E7AD] to-[#E1D55D] bg-clip-text text-transparent'
          >
            duo
          </span>
          {' '}esta aqui.
      </h1>
      <span className='text-zinc-400'>Selecione o game que deseja jogar...</span>

      <div className='mt-16 max-w-full flex'>
        <Arrow left onClick={(e: any) => e.stopPropagation() || instanceRef.current?.prev()} />
        <div
          ref={sliderRef}
          className="keen-slider"
        >
          {games.map(game => (
            <GameBunner
              key={game.id}
              bannerUrl={game.bannerUrl}
              title={game.title}
              adsCount={game._count.ads}
            />
          ))}
        </div>
        <Arrow onClick={(e: any) => e.stopPropagation() || instanceRef.current?.next()} />
      </div>


      <Dialog.Root>
        <CreateAdBunner />
        <CreateAdModal />
      </Dialog.Root>

    </div>
  )
}

export default App
