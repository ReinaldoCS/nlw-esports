import { useEffect, useState } from 'react';
import axios from 'axios';

import * as Dialog from '@radix-ui/react-dialog';

import { GameBunner } from './components/GameBunner';
import { CreateAdModal } from './components/CreateAdModal';
import { CreateAdBunner } from './components/CreateAdBunner';

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

  useEffect(() => {
    axios('http://localhost:3333/games').then(response => {
      setGames(response.data)
    });
  }, []);
  
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
        {games.map(game => (
          <GameBunner 
            key={game.id}
            bannerUrl={game.bannerUrl}
            title={game.title}
            adsCount={game._count.ads}
          />
        ))}

      </div>

      <Dialog.Root>
        <CreateAdBunner />
        <CreateAdModal />

      </Dialog.Root>

    </div>
  )
}

export default App
