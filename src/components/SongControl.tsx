import { useEffect, useState } from "react";
import type { Playlist, Song } from "../lib/types";
import { usePlayerStore } from "../store/playerStore";
import { PauseIcon, PlayButton, PlayIcon } from "./PlayButton";

const Shuffle = () => {
  const [active, setActive] = useState(false);
  return (
    <button
      type="button"
      title="Shuffle"
      className={`${
        active
          ? "text-green/80 hover:text-green "
          : "text-primary/70 hover:text-primary"
      } transition`}
      onClick={() => {
        setActive(!active);
      }}
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 16 16"
        fill="currentColor"
        className="size-4"
      >
        <path d="M13.151.922a.75.75 0 1 0-1.06 1.06L13.109 3H11.16a3.75 3.75 0 0 0-2.873 1.34l-6.173 7.356A2.25 2.25 0 0 1 .39 12.5H0V14h.391a3.75 3.75 0 0 0 2.873-1.34l6.173-7.356a2.25 2.25 0 0 1 1.724-.804h1.947l-1.017 1.018a.75.75 0 0 0 1.06 1.06L15.98 3.75 13.15.922zM.391 3.5H0V2h.391c1.109 0 2.16.49 2.873 1.34L4.89 5.277l-.979 1.167-1.796-2.14A2.25 2.25 0 0 0 .39 3.5z"></path>
        <path d="m7.5 10.723.98-1.167.957 1.14a2.25 2.25 0 0 0 1.724.804h1.947l-1.017-1.018a.75.75 0 1 1 1.06-1.06l2.829 2.828-2.829 2.828a.75.75 0 1 1-1.06-1.06L13.109 13H11.16a3.75 3.75 0 0 1-2.873-1.34l-.787-.938z"></path>
      </svg>
    </button>
  );
};
const Repeat = () => {
  const [active, setActive] = useState(false);
  return (
    <button
      type="button"
      title="Repeat"
      className={`${
        active
          ? "text-green/80 hover:text-green "
          : "text-primary/70 hover:text-primary"
      } transition`}
      onClick={() => {
        setActive(!active);
      }}
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 16 16"
        fill="currentColor"
        className="size-4"
      >
        <path d="M0 4.75A3.75 3.75 0 0 1 3.75 1h8.5A3.75 3.75 0 0 1 16 4.75v5a3.75 3.75 0 0 1-3.75 3.75H9.81l1.018 1.018a.75.75 0 1 1-1.06 1.06L6.939 12.75l2.829-2.828a.75.75 0 1 1 1.06 1.06L9.811 12h2.439a2.25 2.25 0 0 0 2.25-2.25v-5a2.25 2.25 0 0 0-2.25-2.25h-8.5A2.25 2.25 0 0 0 1.5 4.75v5A2.25 2.25 0 0 0 3.75 12H5v1.5H3.75A3.75 3.75 0 0 1 0 9.75v-5z"></path>
      </svg>
    </button>
  );
};
const NextPrevSong = ({
  className,
  action,
  currentMusic,
  audio,
}: {
  className: string;
  action: string;
  currentMusic: { song: Song; playlist: Playlist; songs: Song[] };
  audio: React.RefObject<HTMLAudioElement>;
}) => {
  const rotate = action === "prev" ? " rotate-180" : "";
  const { isPlaying, setCurrentMusic } = usePlayerStore((state) => state);

  const handleClick = () => {
    if (!isPlaying) return;
    if (action === "prev") {
      if (audio.current && audio.current.currentTime > 10) {
        audio.current.currentTime = 0;
      } else {
        // Seleccionar cancion anterior en la lista
        const index = currentMusic.songs.findIndex(
          (song) => song.id === currentMusic.song.id
        );
        if (index == 0) return;
        const nextSong = {
          song: currentMusic.songs[index - 1],
          playlist: currentMusic.playlist,
          songs: currentMusic.songs,
        };
        setCurrentMusic(nextSong);
      }
    } else {
      // Seleccionar cancion siguiente en la lista
      const index = currentMusic.songs.findIndex(
        (song) => song.id === currentMusic.song.id
      );
      if (currentMusic.songs.length - 1 == index) return;
      const nextSong = {
        song: currentMusic.songs[index + 1],
        playlist: currentMusic.playlist,
        songs: currentMusic.songs,
      };
      setCurrentMusic(nextSong);
    }
  };

  return (
    <button
      type="button"
      title="Previous Song"
      className={className + rotate}
      onClick={handleClick}
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 16 16"
        fill="currentColor"
        className="size-4"
      >
        <path d="M12.7 1a.7.7 0 0 0-.7.7v5.15L2.05 1.107A.7.7 0 0 0 1 1.712v12.575a.7.7 0 0 0 1.05.607L12 9.149V14.3a.7.7 0 0 0 .7.7h1.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7h-1.6z"></path>
      </svg>
    </button>
  );
};
const Play = ({ className }: { className: string }) => {
  const { isPlaying, setIsPlaying } = usePlayerStore((state) => state);
  const handleClick = () => {
    setIsPlaying(!isPlaying);
  };
  return (
    <button
      type="button"
      title="Play/Pause"
      className={className}
      onClick={handleClick}
    >
      {isPlaying ? (
        <PauseIcon className="size-5 text-black" />
      ) : (
        <PlayIcon className="size-5 text-black" />
      )}
    </button>
  );
};

export function SongControl({
  audio,
}: {
  audio: React.RefObject<HTMLAudioElement>;
}) {
  const [currentTime, setCurrentTime] = useState<number>(0);
  const { currentMusic } = usePlayerStore((state) => state);

  useEffect(() => {
    console.log(currentTime);
  }, [currentTime]);
  useEffect(() => {
    if (!audio.current) return;
    audio.current.addEventListener("timeupdate", handleTimeUpdate);
    return () => {
      audio.current?.removeEventListener("timeupdate", handleTimeUpdate);
    };
  });
  const handleTimeUpdate = () => {
    if (!audio.current) return;
    setCurrentTime(audio.current.currentTime);
  };
  const formatTime = (time: number) => {
    if (time == null) return `0:00`;

    const seconds = Math.floor(time % 60);
    const minutes = Math.floor(time / 60);

    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  const duration = audio.current ? audio.current.duration : 1;
  const progress = (currentTime / duration) * 100;

  return (
    <div className="relative flex flex-col justify-center items-center gap-2 mt-1">
      <div className="flex flex-row justify-center items-center gap-6">
        <Shuffle />
        <NextPrevSong
          audio={audio}
          currentMusic={currentMusic}
          className="text-primary/70 hover:text-primary transition"
          action="prev"
        />
        <Play className="p-1.5 bg-white rounded-full hover:scale-105" />
        <NextPrevSong
          audio={audio}
          currentMusic={currentMusic}
          className="text-primary/70 hover:text-primary transition"
          action="next"
        />
        <Repeat />
      </div>
      <div className="flex w-full flex-row justify-between items-center text-secondary/70 text-sm gap-2">
        <p>{formatTime(currentTime)}</p>
        <span className="h-1 w-[626px] bg-secondary/50 rounded-full mb-0.5 relative">
          <span
            className="absolute h-1 max-w-[626px] bg-primary rounded-full mb-0.5 w-0"
            style={{ width: `${progress}%` }}
          ></span>
        </span>

        <p>{duration ? formatTime(duration) : "0:00"}</p>
      </div>
    </div>
  );
}
