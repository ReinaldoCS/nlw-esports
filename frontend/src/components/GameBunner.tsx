import "keen-slider/keen-slider.min.css"

interface GameBunnerProps {
  bannerUrl: string;
  title: string;
  adsCount: number;
}

export function GameBunner({ bannerUrl, title, adsCount }: GameBunnerProps) {
  return (
    <div className="keen-slider__slide rounded-lg overflow-hidden duration-500 hover:scale-105 min-w-[180px]">
      <a href="/" className='relative'>
        <img src={bannerUrl} alt={title} />
      
        <div className='bg-game-gradient w-full pt-16 pb-4 px-4 absolute bottom-0'>
          <strong className='text-white font-bold block'>{title}</strong>
          <span className='text-zinc-300 text-sm'>{adsCount} anúncio(s)</span>
        </div>
      </a>
    </div>
    )
  }