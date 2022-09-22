import { useEffect, useState } from 'react';
import axios from 'axios';

import { Arrow } from './Arrow';
import { GameBunner } from './GameBunner';
import { useKeenSlider } from 'keen-slider/react';

interface Game {
  bannerUrl: string,
  id: string,
  title: string,
  _count: {
    ads: number,
  }
}

export function GamesCarousel() {
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
  )
}