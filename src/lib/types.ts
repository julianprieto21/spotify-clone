export type Song = {
  id: string;
  name: string;
  image: string;
  duration_sec: number;
  artist: string[];
  album: string;
  release_date: Date;
};

export type Playlist = {
  id: string;
  name: string;
  type: "Lista" | "Álbum" | "Artista";
  own: boolean;
  length: number;
  pin: boolean;
  image: string;
  owner: string;
  songs_id: string[];
  color: string;
  isLikes: boolean;
};

export type PlayerStore = {
  isPlaying: boolean;
  currentMusic: { playlist: Playlist; song: Song; songs: Song[] };
  volume: number;
  shuffle: boolean;
  repeat: boolean;
  setIsPlaying: (isPlaying: boolean) => void;
  setCurrentMusic: (currentMusic: {
    playlist: Playlist;
    song: Song;
    songs: Song[];
  }) => void;
  setVolume: (volume: number) => void;
  setShuffle: (shuffle: boolean) => void;
  setRepeat: (repeat: boolean) => void;
};
