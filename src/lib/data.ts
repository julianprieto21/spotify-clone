import type { Playlist, Song } from "./types";

export const PLAYLISTS: Playlist[] = [
  {
    id: "1",
    name: "Mi lista de éxitos",
    type: "Lista",
    own: true,
    length: 25,
    pin: false,
    image: "https://example.com/image1.jpg",
    owner: "Julián Prieto",
    songs: [
      // Agrega objetos de tipo Song aquí
    ],
    color: "#FF5733", // Color en formato hexadecimal
    isLikes: false,
  },
  {
    id: "2",
    name: "Música relajante",
    type: "Lista",
    own: false,
    length: 30,
    pin: true,
    image: "https://example.com/image2.jpg",
    owner: "María González",
    songs: [
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
    songs: [
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
    pin: true,
    image: "https://example.com/image4.jpg",
    owner: "Julián Prieto",
    songs: [
      // Agrega objetos de tipo Song aquí
    ],
    color: "#FFC107", // Color en formato hexadecimal
    isLikes: true,
  },
  {
    id: "5",
    name: "Rock clásico",
    type: "Lista",
    own: true,
    length: 18,
    pin: true,
    image: "https://example.com/image5.jpg",
    owner: "Roberto Sánchez",
    songs: [
      // Agrega objetos de tipo Song aquí
    ],
    color: "#DC3545", // Color en formato hexadecimal
    isLikes: false,
  },
  {
    id: "6",
    name: "Canciones populares",
    type: "Lista",
    own: false,
    length: 20,
    pin: false,
    image: "https://example.com/image6.jpg",
    owner: "Elena Martínez",
    songs: [
      // Agrega objetos de tipo Song aquí
    ],
    color: "#6C757D", // Color en formato hexadecimal
    isLikes: false,
  },
  {
    id: "7",
    name: "Instrumentales",
    type: "Álbum",
    own: true,
    length: 10,
    pin: false,
    image: "https://example.com/image7.jpg",
    owner: "Andrés Gutiérrez",
    songs: [
      // Agrega objetos de tipo Song aquí
    ],
    color: "#17A2B8", // Color en formato hexadecimal
    isLikes: false,
  },
  {
    id: "8",
    name: "Música de fiesta",
    type: "Lista",
    own: false,
    length: 25,
    pin: true,
    image: "https://example.com/image8.jpg",
    owner: "Laura Torres",
    songs: [
      // Agrega objetos de tipo Song aquí
    ],
    color: "#FFD700", // Color en formato hexadecimal
    isLikes: false,
  },
  {
    id: "9",
    name: "Música electrónica",
    type: "Lista",
    own: true,
    length: 17,
    pin: false,
    image: "https://example.com/image9.jpg",
    owner: "Javier Castillo",
    songs: [
      // Agrega objetos de tipo Song aquí
    ],
    color: "#FF69B4", // Color en formato hexadecimal
    isLikes: false,
  },
  {
    id: "10",
    name: "Éxitos del momento",
    type: "Lista",
    own: false,
    length: 22,
    pin: true,
    image: "https://example.com/image10.jpg",
    owner: "Sofía Herrera",
    songs: [
      // Agrega objetos de tipo Song aquí
    ],
    color: "#8A2BE2", // Color en formato hexadecimal
    isLikes: false,
  },
];

export const SONGS: Song[] = [];
