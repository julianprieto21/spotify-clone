import { PLAYLISTS, SONGS } from "../../lib/data";

export async function GET({ request }) {
  const { url } = request;
  const urlObject = new URL(url);
  const id = urlObject.searchParams.get("id");
  const playlist = PLAYLISTS.find((playlist) => playlist.id === id);

  const songs = playlist.songs_id.map((songId) =>
    SONGS.find((song) => song.id === songId)
  );

  return new Response(JSON.stringify({ songs, playlist }), {
    headers: {
      "content-type": "application/json",
    },
  });
}
