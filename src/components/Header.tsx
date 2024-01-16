import Link from "next/link";
import { ModeToggle } from "./ModeToggle";
import { Search } from "./Search";

export const Header = () => {
  return (
    <div className="mb-5">
      <div className="grid grid-cols-6 gap-4 my-5 mx-5">
        <div className="text-center flex items-center justify-center font-bold">
          <Link href="/">Appledore</Link>
        </div>
        <div className=" col-start-3 col-span-2">
          <Search />
        </div>
        <div className="col-start-6 col-span-1 flex justify-end">
          <ModeToggle />
        </div>
      </div>
      <hr />
    </div>
  );
};
