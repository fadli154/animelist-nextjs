import CardAnime from "@/components/Fragments/Card/CardAnime";
import Link from "next/link";
import { ChevronRightIcon } from "@heroicons/react/24/solid";

const AnimeList = ({ children }) => {
  return <>{children}</>;
};

const Header = ({ title, LinkHref }) => {
  return (
    <div className="flex items-end justify-between">
      <h4 title={title} className="py-[2px] md:py-[3px] pl-3 text-lg font-bold rounded-sm text-blue-800 border-l-2 border-blue-800 lg:py-2 lg:border-l-4 md:text-xl lg:text-2xl">
        {title}
      </h4>
      {LinkHref && (
        <Link href={LinkHref} title={title}>
          <h6 className="font-bold text-blue-700">
            Selengkapnya <ChevronRightIcon className="inline-block w-5 h-5 text-xl " />
          </h6>
        </Link>
      )}
    </div>
  );
};

const Body = ({ api }) => {
  return (
    <div className="grid grid-cols-2 gap-x-4 md:grid-cols-3 lg:grid-cols-4">
      {api.data.map((anime) => (
        <div key={anime.mal_id}>
          <CardAnime img={anime.images.webp.image_url} title={anime.title} linkHref={anime.mal_id} />
        </div>
      ))}
    </div>
  );
};

AnimeList.Header = Header;
AnimeList.Body = Body;

export default AnimeList;
