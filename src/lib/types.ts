export type Song = {
  id: string;
  name: string;
  image: string;
  duration_sec: number;
  author: string;
  album: string;
  release_date: Date;
};

export type Playlist = {
  id: string;
  name: string;
  type: "Lista" | "Álbum";
  own: boolean;
  length: number;
  pin: boolean;
  image: string;
  owner: string;
  songs: Song[];
  color: string;
};
