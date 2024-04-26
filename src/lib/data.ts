import type { Playlist, Song } from "./types";

export const PLAYLISTS: Playlist[] = [
  {
    id: "1",
    name: "Mi lista de éxitos",
    type: "Lista",
    own: true,
    length: 25,
    pin: true,
    image: "https://example.com/image1.jpg",
    owner: "Julián Prieto",
    songs_id: ["1", "2", "3", "4"],
    color: "#FF5733",
    isLikes: false,
  },
  {
    id: "2",
    name: "Música relajante",
    type: "Lista",
    own: false,
    length: 30,
    pin: false,
    image: "https://example.com/image2.jpg",
    owner: "María González",
    songs_id: [
      // Agrega objetos de tipo Song aquí
    ],
    color: "#28A745", // Color en formato hexadecimal
    isLikes: false,
  },
  {
    id: "3",
    name: "Los mejores álbumes",
    type: "Álbum",
    own: true,
    length: 15,
    pin: false,
    image: "https://example.com/image3.jpg",
    owner: "Carlos Ramírez",
    songs_id: [
      // Agrega objetos de tipo Song aquí
    ],
    color: "#007BFF", // Color en formato hexadecimal
    isLikes: false,
  },
  {
    id: "4",
    name: "Canciones que te gustan",
    type: "Lista",
    own: false,
    length: 12,
    pin: false,
    image: "https://example.com/image4.jpg",
    owner: "Julián Prieto",
    songs_id: [
      // Agrega objetos de tipo Song aquí
    ],
    color: "#FFC107", // Color en formato hexadecimal
    isLikes: true,
  },
];

export const SONGS: Song[] = [
  {
    id: "1",
    name: "Lost Tape",
    image: "images/1.jpeg",
    duration_sec: 192,
    artist: ["Duki", "C.R.O."],
    album: "-",
    release_date: new Date(2018, 6, 5),
  },
  {
    id: "2",
    name: "R.I.P. La Manshon Freestyle",
    image: "images/2.jpeg",
    duration_sec: 178,
    artist: ["Duki"],
    album: "-",
    release_date: new Date(2018, 6, 3),
  },
  {
    id: "3",
    name: "Asimetría",
    image: "images/3.jpeg",
    duration_sec: 178,
    artist: ["Zeballos"],
    album: "Asimetría",
    release_date: new Date(2020, 5, 28),
  },
  {
    id: "4",
    name: "Mojaa",
    image: "images/4.jpeg",
    duration_sec: 190,
    artist: ["Bhavi", "Duki"],
    album: "-",
    release_date: new Date(2018, 2, 2),
  },
];
