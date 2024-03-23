import AnimeList from "@/components/Layouts/AnimeList";

const Page = async ({ params }) => {
  const res = await fetch(`${process.env.NEXT_APP_BASE_API}/anime?q=${params.keyword}`);
  const dataSearch = await res.json();

  return (
    <div className="container my-14">
      {/* Paling Search */}
      <AnimeList>
        <AnimeList.Header title={`Hasil pencarian ${params.keyword}`} LinkHref="" />
        <AnimeList.Body api={dataSearch} />
      </AnimeList>
      {/* End Paling Search */}
    </div>
  );
};

export default Page;
