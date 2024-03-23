import Image from "next/image";
import Link from "next/link";

const CardAnime = ({ img, title, linkHref }) => {
  return (
    <Link href={`/${linkHref}`} className="p-4 rounded-md min-h-64 md:min-h-72 lg:min-h-80 group">
      <Image className="object-cover duration-75 rounded-md hover:scale-[1.03] drop-shadow-xl max-h-72 hover:brightness-75 hover:cursor-pointer hover:duration-300" src={img} alt={`${title}-image`} width={"600"} height={"400"} />
      <h1 className="mt-2 text-sm font-bold capitalize duration-500 md:text-base lg:text-lg line-clamp-2 group-hover:text-blue-700">{title}</h1>
    </Link>
  );
};

export default CardAnime;
