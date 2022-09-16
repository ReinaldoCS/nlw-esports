interface GameBunnerProps {
  bannerUrl: string;
  title: string;
  adsCount: number;
}

export function GameBunner({ bannerUrl, title, adsCount }: GameBunnerProps) {
  return (
      <a href="/" className='relative rounded-lg overflow-hidden'>
        <img src={bannerUrl} alt={title} />
      
        <div className='bg-game-gradient w-full pt-16 pb-4 px-4 absolute bottom-0'>
          <strong className='text-white font-bold block'>{title}</strong>
          <span className='text-zinc-300 text-sm'>{adsCount} anúncio(s)</span>
        </div>
      </a>
    )
  }