import { useEffect, useRef } from "react";
import { SongControl } from "./SongControl";
import { usePlayerStore } from "../store/playerStore";
import SongInfo from "./SongInfo";
import Actions from "./Actions";

export default function Player() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const { isPlaying, currentMusic, volume } = usePlayerStore((state) => state);

  useEffect(() => {
    if (!audioRef.current) return;
    isPlaying ? audioRef.current.play() : audioRef.current.pause();
  }, [isPlaying]);

  useEffect(() => {
    if (!audioRef.current) return;
    const { song } = currentMusic;
    if (song) {
      const src = `music/${song.id}.mp3`;
      audioRef.current.src = src;
      audioRef.current.volume = volume;
      audioRef.current.play();
    }
  }, [currentMusic]);

  useEffect(() => {
    if (!audioRef.current) return;
    audioRef.current.volume = volume;
  }, [volume]);

  return (
    <section className="size-full flex flex-row justify-between items-center">
      <audio ref={audioRef} />
      <SongInfo />
      <SongControl audio={audioRef} />
      <Actions audio={audioRef} />
    </section>
  );
}
