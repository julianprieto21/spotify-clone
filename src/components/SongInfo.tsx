import { usePlayerStore } from "../store/playerStore";

const AddToList = () => {
  return (
    <button className="text-secondary" title="Add song to the list">
      <svg
        aria-hidden="true"
        viewBox="0 0 16 16"
        fill="currentColor"
        className="size-4"
      >
        <path d="M8 1.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z"></path>
        <path d="M11.75 8a.75.75 0 0 1-.75.75H8.75V11a.75.75 0 0 1-1.5 0V8.75H5a.75.75 0 0 1 0-1.5h2.25V5a.75.75 0 0 1 1.5 0v2.25H11a.75.75 0 0 1 .75.75z"></path>
      </svg>
    </button>
  );
};

const RemoveFromList = () => {
  return (
    <button className="text-green" title="Remove song from list">
      <svg
        aria-hidden="true"
        viewBox="0 0 16 16"
        fill="currentColor"
        className="size-4"
      >
        <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm11.748-1.97a.75.75 0 0 0-1.06-1.06l-4.47 4.47-1.405-1.406a.75.75 0 1 0-1.061 1.06l2.466 2.467 5.53-5.53z"></path>
      </svg>
    </button>
  );
};

export default function SongInfo() {
  const { currentMusic } = usePlayerStore((state) => state);
  const isInList = false;
  const song = currentMusic.song;

  if (song.id === "") return <div className="h-full w-[500px]"></div>;
  return (
    <section className="h-full w-[500px] flex flex-row justify-start items-center gap-4">
      <picture className="pl-2 pb-1">
        {song.id ? (
          <img
            title={`Image of ${song.name}`}
            src={`images/${song.id}.jpg`}
            alt={song.name}
            className="size-14 rounded-sm"
          />
        ) : null}
      </picture>
      <div className="flex flex-col justify-center items-start pt-2">
        <a href={`/track/${song.id}`}>
          <h1 className="text-sm leading-4 text-primary hover:underline">
            {song.name}
          </h1>
        </a>
        <span className="flex flex-row">
          {song.artist &&
            song.artist.map((artist, index) => {
              return (
                <>
                  <a href={`/artist/${artist}`}>
                    <h2 className="text-sm leading-1 text-secondary hover:text-primary hover:underline">
                      {artist}
                    </h2>
                  </a>
                  {index !== song.artist.length - 1 && (
                    <p className="text-sm leading-1 text-secondary">,&nbsp;</p>
                  )}
                </>
              );
            })}
        </span>
      </div>
      {isInList ? <RemoveFromList /> : <AddToList />}
    </section>
  );
}
