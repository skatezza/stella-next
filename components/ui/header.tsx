import Link from "next/link";
import Logo from "./logo";
import { LocaleSwitcher } from "../LocaleSwitcher";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Site branding */}
          <div className="shrink-0">
            <Logo />
          </div>

          {/* Desktop navigation */}
          <nav className="flex grow">
            {/* Desktop sign in links */}
            <ul className="flex grow justify-end flex-wrap items-center">
              <li>
                <Link
                  className="font-medium text-sm text-slate-300 hover:text-white transition duration-150 ease-in-out"
                  href="/pricing"
                >
                  Pricing
                </Link>
              </li>
              <li className="ml-6">
                <LocaleSwitcher />
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
