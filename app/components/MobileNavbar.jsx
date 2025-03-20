import clsx from "clsx";
import Link from "next/link";
import Image from "next/image";
import SearchBar from "./SearchBar";

function MobileNavbar({ links, isMobileOpen, onClick }) {
  return (
    <div
      className={clsx(
        isMobileOpen ? "translate-x-0" : "-translate-x-full",
        "fixed top-0 left-0 w-[359px] h-screen bg-white px-6 pt-8 pb-4 flex flex-col gap-6 transition-transform duration-400 ease-linear z-50 shadow-lg overflow-y-auto"
      )}
    >
      {/* Header */}
      <header className="flex items-center justify-between">
        <Image
          src="/logo.svg"
          alt="Al Zehra Perfumes"
          width={60}
          height={60}
          draggable={false}
          className="select-none"
        />
        <button
          className="h-5 aspect-square cursor-pointer text-neutral-600 focus:rounded focus:outline-none focus:ring-4 focus:ring-indigo-600/[.12]"
          onClick={onClick}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M11.9997 10.5865L16.9495 5.63672L18.3637 7.05093L13.4139 12.0007L18.3637 16.9504L16.9495 18.3646L11.9997 13.4149L7.04996 18.3646L5.63574 16.9504L10.5855 12.0007L5.63574 7.05093L7.04996 5.63672L11.9997 10.5865Z"></path>
          </svg>
        </button>
      </header>

      {/* Search Bar - Now Always Visible */}
      <div className="w-full">
        <SearchBar />
      </div>

      {/* Navigation Links (Auto Close on Click) */}
      <div className="flex flex-col gap-4 py-6">
        {links.map((link) => (
          <Link
            key={link.id}
            className="flex text-lg"
            href={link.href}
            onClick={onClick} // Auto-closes sidebar
          >
            {link.name}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default MobileNavbar;
