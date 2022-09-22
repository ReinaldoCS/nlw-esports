import "keen-slider/keen-slider.min.css"

interface GameBunnerProps {
  bannerUrl: string;
  title: string;
  adsCount: number;
}

export function GameBunner({ bannerUrl, title, adsCount }: GameBunnerProps) {
  return (
    <div className="keen-slider__slide group rounded-lg flex-none overflow-hidden max-w-[180px]">
      <a href="/" className='relative flex'>
        <img src={bannerUrl} alt={title} className="group-hover:scale-125 duration-500" />
      
        <div className='bg-game-gradient w-full pt-16 pb-4 px-4 absolute bottom-0'>
          <strong className='text-white font-bold block'>{title}</strong>
          <span className='text-zinc-300 text-sm'>{adsCount} anúncio(s)</span>
        </div>
      </a>
    </div>
    )
  }