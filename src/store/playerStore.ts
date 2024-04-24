import { create } from "zustand";
import type { PlayerStore, Playlist, Song } from "../lib/types";

export const usePlayerStore = create<PlayerStore>((set) => ({
  isPlaying: false,
  currentMusic: {
    playlist: {
      id: "",
      name: "",
      type: "Lista",
      own: false,
      length: 0,
      pin: false,
      image: "",
      owner: "",
      songs_id: [],
      color: "",
      isLikes: false,
    },
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
  volume: 1,
  setIsPlaying: (isPlaying) => set({ isPlaying }),
  setCurrentMusic: (currentMusic) => set({ currentMusic }),
  setVolume: (volume) => set({ volume }),
}));
