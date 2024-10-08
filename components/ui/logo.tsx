import Link from "next/link";
import Image from "next/image";
import LogoImg from "@/public/images/logo.svg";

export default function Logo() {
  return (
    <Link
      className="block"
      href="/"
      aria-label="TinyBots"
      className="font-bold"
    >
      <Image
        src={LogoImg}
        width={38}
        height={38}
        priority
        alt="Stellar"
        className="inline-block mr-2"
      />{" "}
      TinyBots
    </Link>
  );
}
