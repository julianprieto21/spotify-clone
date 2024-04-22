import Pause from "./icons/Pause.astro";
import Play from "./icons/Play.astro";
import { usePlayerStore } from "../store/playerStore";

const PauseIcon = (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="size-6 text-black"
  >
    <path d="M5.7 3a.7.7 0 0 0-.7.7v16.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V3.7a.7.7 0 0 0-.7-.7H5.7zm10 0a.7.7 0 0 0-.7.7v16.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V3.7a.7.7 0 0 0-.7-.7h-2.6z"></path>
  </svg>
);
const PlayIcon = (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="size-6 text-black"
  >
    <path d="m7.05 3.606 13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606z"></path>
  </svg>
);

export function PlayButton({ className }: { className: string }) {
  const { isPlaying } = usePlayerStore((state) => state);
  return (
    <button
      type="button"
      className={`absolute size-12 bg-green place-content-center rounded-full shadow-xl ${className}`}
    >
      {isPlaying ? PauseIcon : PlayIcon}
    </button>
  );
}
