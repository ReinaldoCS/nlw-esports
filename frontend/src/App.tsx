import * as Dialog from '@radix-ui/react-dialog';

import { CreateAdModal } from './components/CreateAdModal';
import { CreateAdBunner } from './components/CreateAdBunner';
import { GamesCarousel } from './components/GamesCarousel';

import logoImg from './assets/Logo.svg';

import './styles/main.css'

function App() {  
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

      <GamesCarousel />

      <Dialog.Root>
        <CreateAdBunner />
        <CreateAdModal />
      </Dialog.Root>

    </div>
  )
}

export default App
