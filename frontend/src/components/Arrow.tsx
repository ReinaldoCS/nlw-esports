import { CaretLeft, CaretRight } from "phosphor-react"

interface ArrowProps {
  left?: boolean;
  onClick: (e: any) => void;
}

export function Arrow({ left, onClick }: ArrowProps) {
  return (
    <button 
      onClick={onClick}
      className="invisible hidden md:visible md:block"
    >
      {
        left
        ? <CaretLeft size={32} className="mr-6 text-zinc-400 hover:text-zinc-500 duration-500" /> 
        : <CaretRight size={32} className="ml-6 text-zinc-400 hover:text-zinc-500 duration-500" />
      }
    </button>
  )
}