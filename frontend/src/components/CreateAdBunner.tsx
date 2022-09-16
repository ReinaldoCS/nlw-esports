import * as Dialog from '@radix-ui/react-dialog';

import { MagnifyingGlassPlus } from "phosphor-react";

export function CreateAdBunner() {
  return (
    <div className='pt-1 bg-gradient-to-r from-[#9572FC] via-[#43E7AD] to-[#E1D55D] self-stretch mt-8  rounded-lg overflow-hidden'>
        <div className='bg-[#2A2634] px-8 py-6 flex justify-between items-center'>
          <div>
            <strong className='text-white text-2xl font-bold block'>Não encontrou seu duo?</strong>
            <span className='text-zinc-300 text-sm block'>Publique um anúncio para encontrar novos players!</span>
          </div>

          <Dialog.Trigger className='py-3 px-4 bg-violet-500 text-white rounded-md hover:bg-violet-600 duration-500 flex items-center justify-center'>
            <MagnifyingGlassPlus size={24} className='mr-3' />
            Publicar anúncio
          </Dialog.Trigger>
        </div>
      </div>
  )
}