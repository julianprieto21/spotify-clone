import { create } from "zustand";
import type { PlayerStore, Playlist, Song } from "../lib/types";

export const usePlayerStore = create<PlayerStore>((set) => ({
  isPlaying: false,
  currentMusic: {
    playlist: [],
    song: {
      id: "",
      name: "",
      image: "",
      duration_sec: 0,
      author: "",
      album: "",
      release_date: new Date(),
    },
    songs: [],
  },
  setIsPlaying: (isPlaying) => set({ isPlaying }),
  setCurrentMusic: (currentMusic) => set({ currentMusic }),
}));
