import { usePlayerStore } from "../store/playerStore";

export const PlayIcon = ({ className }: { className: string }) => (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="m7.05 3.606 13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606z"></path>
  </svg>
);
export const PauseIcon = ({ className }: { className: string }) => (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M5.7 3a.7.7 0 0 0-.7.7v16.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V3.7a.7.7 0 0 0-.7-.7H5.7zm10 0a.7.7 0 0 0-.7.7v16.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V3.7a.7.7 0 0 0-.7-.7h-2.6z"></path>
  </svg>
);

export function PlayButton({
  className,
  id,
}: {
  className: string;
  id: string;
}) {
  const { isPlaying, setIsPlaying, currentMusic, setCurrentMusic } =
    usePlayerStore((state) => state);
  const playing = currentMusic?.playlist?.id === id;

  const handleClick = () => {
    if (isPlaying && playing) {
      setIsPlaying(false);
      return;
    }
    if (!isPlaying && playing) {
      setIsPlaying(true);
      return;
    }
    fetch(`/api/get-playlist.json?id=${id}`)
      .then((res) => res.json())
      .then((data: any) => {
        const { songs, playlist } = data;
        setCurrentMusic({ songs, playlist, song: songs[0] });
        setIsPlaying(true);
      });
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className={`absolute size-12 bg-green place-content-center rounded-full shadow-xl z-10 ${className}`}
    >
      {playing && isPlaying ? (
        <PauseIcon className="size-6 text-black" />
      ) : (
        <PlayIcon className="size-6 text-black" />
      )}
    </button>
  );
}
