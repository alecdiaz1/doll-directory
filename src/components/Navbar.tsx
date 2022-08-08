import Image from "next/image";
import DDLogo from "../../public/DDLOGO.png";
import Link from "next/link";

export const Navbar = () => (
  <div className="bg-fuchsia-200 flex justify-center pt-2">
    <Link href="/">
      <a>
        <Image
          alt="Doll Directory Logo"
          src={DDLogo}
          width="80px"
          height="80px"
        />
      </a>
    </Link>
  </div>
)
