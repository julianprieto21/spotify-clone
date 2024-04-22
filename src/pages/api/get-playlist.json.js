import { PLAYLISTS, SONGS } from "../../lib/data";

export async function GET({ params, request }) {
  const { url } = request;
  const urlObject = new URL(url);
  const id = urlObject.searchParams.get("id");

  const playlist = PLAYLISTS.find((playlist) => playlist.id === id);
  // const songs = playlist.songs.map((songId) =>
  //   SONGS.find((song) => song.id === songId)
  // );
  const songs = [];

  return new Response(JSON.stringify({ songs, playlist }), {
    headers: {
      "content-type": "application/json",
    },
  });
}
