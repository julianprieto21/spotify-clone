import { PLAYLISTS, SONGS } from "../../lib/data";

export async function GET({ params, request }) {
  const { url } = request;
  const urlObject = new URL(url);
  const id = urlObject.searchParams.get("id");

  const playlist = PLAYLISTS.find((playlist) => playlist.id === id);
  const songs = SONGS.filter((song) => song.playlistId === playlist?.id);

  return new Response(JSON.stringify({ songs, playlist }), {
    headers: {
      "content-type": "application/json",
    },
  });
}
