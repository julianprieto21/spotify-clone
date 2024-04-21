import type { Playlist } from "./types";

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
  },
  {
    id: "4",
    name: "Mi álbum favorito",
    type: "Álbum",
    own: false,
    length: 12,
    pin: true,
    image: "https://example.com/image4.jpg",
    owner: "Ana Fernández",
    songs: [
      // Agrega objetos de tipo Song aquí
    ],
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
  },
];
