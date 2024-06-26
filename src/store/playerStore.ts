import { create } from "zustand";
import type { PlayerStore } from "../lib/types";

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
      artist: [],
      album: "",
      release_date: new Date(),
    },
    songs: [],
  },
  volume: 1,
  shuffle: false,
  repeat: false,
  setIsPlaying: (isPlaying) => set({ isPlaying }),
  setCurrentMusic: (currentMusic) => set({ currentMusic }),
  setVolume: (volume) => set({ volume }),
  setShuffle: (shuffle) => set({ shuffle }),
  setRepeat: (repeat) => set({ repeat }),
}));
