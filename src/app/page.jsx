import AnimeList from "@/components/Layouts/AnimeList";

const Page = async () => {
  const res = await fetch(`${process.env.NEXT_APP_BASE_API}/top/anime?limit=8`);
  const dataPopuler = await res.json();

  return (
    <div className="container my-14">
      {/* Paling Populer */}
      <AnimeList>
        <AnimeList.Header title="Paling Populer" LinkHref="/paling-populer" />
        <AnimeList.Body api={dataPopuler} />
      </AnimeList>
      {/* End Paling Populer */}
    </div>
  );
};

export default Page;
