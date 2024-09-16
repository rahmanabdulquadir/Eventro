import Image from "next/image";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "../ui/sheet";
import { Separator } from "../ui/separator";
import NavItems from "./NavItems";

const SHEET_SIDES = ["top"] as const;

type SheetSide = (typeof SHEET_SIDES)[number];

const MobileNav = () => {
  return (
    <nav className="md:hidden">
      <div className="">
        {SHEET_SIDES.map((side) => (
          <Sheet key={side}>
            <SheetTrigger asChild>
              {/* <Button variant="outline">{side}</Button> */}
              <Image
                src="/assets/icons/menu.svg"
                alt="menu"
                width={24}
                height={24}
                className="cursor-pointer"
              />
            </SheetTrigger>
            <SheetContent
              side={side}
              className="flex flex-col gap-6 bg-white md:hidden"
            >
              <Image
                src="/assets/images/logo.svg"
                alt="logo"
                width={128}
                height={38}
              />
              <Separator className="border border-gray-50" />
              <NavItems />
            </SheetContent>
          </Sheet>
        ))}
      </div>
    </nav>
  );
};

export default MobileNav;
