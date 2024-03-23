import Button from "@/components/Elements/Button";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/navigation";
import { useRef } from "react";
import Input from "@/components/Elements/Input";

const InputSearch = () => {
  const search = useRef();
  const router = useRouter();

  const handleSearch = (event) => {
    if ((event.type === "keydown" && event.key === "Enter") || event.type === "click") {
      event.preventDefault();
      const keyword = search.current.value;
      if (!keyword) return;
      router.push(`/search/${keyword}`);
      search.current.value = "";
    }
  };

  return (
    <div className="relative flex items-center">
      <Input type="text" ref={search} onKeyDown={(event) => handleSearch(event)} className="w-56 px-4 py-2 bg-white border-0 rounded-md outline-none ring-0" placeholder="Search ..." />
      <Button type="submit" title="search" onClick={(event) => handleSearch(event)} className="absolute text-blue-600 top-[10px] right-3">
        <MagnifyingGlassIcon className="w-5 h-5" />
      </Button>
    </div>
  );
};

export default InputSearch;
