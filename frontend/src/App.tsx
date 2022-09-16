import { useEffect, useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';

import { GameBunner } from './components/GameBunner';
import { CreateAdBunner } from './components/CreateAdBunner';

import { GameController } from 'phosphor-react';

import './styles/main.css'

import logoImg from './assets/Logo.svg';
import { Input } from './components/Form/input';

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
    fetch('http://localhost:3333/games')
    .then(response => response.json())
    .then(data => setGames(data));
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

        <Dialog.Portal>
          <Dialog.Overlay className='bg-black/60 inset-0 fixed'/>
          <Dialog.Content className='bg-[#2A2634] py-8 px-10 text-white fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[480px] shadow-lg shadow-black/50'>
            <Dialog.Title className='text-3xl font-black'>Publique um anúncio</Dialog.Title>

            <form action="" className='mt-8 flex flex-col gap-4'>
              <div className='flex flex-col gap-2'>
                <label htmlFor="game" className='font-semibold'>Qual o game?</label>
                <Input id="game" type="text" placeholder="Selecione o game que deseja jogar"/>
              </div>

              <div className='flex flex-col gap-2'>
                <label htmlFor="name">Seu nome (ou nickname)</label>
                <Input id="name" type="text" placeholder="Como te chamam dentro do game?" />
              </div>

              <div className='grid grid-cols-2 gap-6'>
                <div className='flex flex-col gap-2'>
                  <label htmlFor="yearsPlaying">Joga há quantos anos?</label>
                  <Input id="yearsPlaying" type="number" placeholder="Tudo bem ser ZERO" />
                </div>
                <div className='flex flex-col gap-2'>
                  <label htmlFor="discord">Qual seu Discord?</label>
                  <Input id="discord" type="text" placeholder="Usuario#0000" />
                </div>
              </div>

              <div className='flex gap-6'>
                <div className='flex flex-col gap-2'>
                  <label htmlFor="weekDays">Quando costuma jogar?</label>

                  <div className='grid grid-cols-4 gap-2'>
                    <button className='w-8 h-8 rounded bg-zinc-900' type='button' title='Domingo'>D</button>
                    <button className='w-8 h-8 rounded bg-zinc-900' type='button' title='Segunda'>S</button>
                    <button className='w-8 h-8 rounded bg-zinc-900' type='button' title='Terça'>T</button>
                    <button className='w-8 h-8 rounded bg-zinc-900' type='button' title='Quarta'>Q</button>
                    <button className='w-8 h-8 rounded bg-zinc-900' type='button' title='Quinta'>Q</button>
                    <button className='w-8 h-8 rounded bg-zinc-900' type='button' title='Sexta'>S</button>
                    <button className='w-8 h-8 rounded bg-zinc-900' type='button' title='Sábado'>S</button>
                  </div>
                  <div>
                    
                  </div>
                </div>
                <div className='flex flex-col gap-2 flex-1'>
                  <label htmlFor="discord">Qual horário do dia?</label>
                  <div className='grid grid-cols-2 gap-2'>
                    <Input id="hourEnd" type="time" placeholder="Até" />
                    <Input id="hourStart" type="time" placeholder="De" />
                  </div>
                </div>

              </div>

              <div className='mt-2 flex gap-2 text-start'>
                <Input type="checkbox" name="useVoiceChannel" id="useVoiceChannel" />
                Costumo me conectar ao chat de voz
              </div>

              <footer className='mt-4 flex justify-end gap-4'>
                <Dialog.Close 
                  className='bg-zinc-500 px-5 h-12 rounded-md font-semibold hover:bg-slate-600 duration-500' 
                  type='button'
                >
                  Cancelar
                </Dialog.Close>
                <button 
                  type="submit"
                  className='flex items-center gap-3 bg-violet-500 px-5 h-12 rounded-md font-semibold hover:bg-violet-600 duration-500'
                >
                  <GameController size={24}/>
                  Encontrar duo
                </button>
              </footer>

            </form>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>

    </div>
  )
}

export default App
