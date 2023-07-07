import { FullLogo, Logo } from "./providerIcons";
import Filters from "./filters";
import Container from "../Container";
import Search from "./search";
import UserMenu from "./userMenu";
import Link from "next/link";
import { useRouter } from "next/router";

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => {
  const router = useRouter();
  const { pathname } = router;

  return (
    <div className="fixed w-full bg-white index">
      <div
        className="
          border-b-[1px]
          py-[15px]
        ">
        <Container>
          <div
            className="
            flex
            md:grid
            grid-cols-3
           items-center
           justify-items-center
           grid-flow-col
            gap-3
            md:gap-0
          ">
            <div className="w-full hidden md:flex justify-start">
              <Link href="/">
                <FullLogo width={100} height={50} />
              </Link>
            </div>
            <div className="md:hidden w-full hidden sm:flex items-center gap-3 justify-start">
              <Logo color="" />
              <Search />
            </div>
            <div className="block w-full sm:hidden md:flex">
              <Search />
            </div>

            <div className="w-full hidden sm:flex justify-end">
              <UserMenu />
            </div>
          </div>
        </Container>
      </div>
      {pathname === "/" && <Filters />}
    </div>
  );
};

export default Navbar;
