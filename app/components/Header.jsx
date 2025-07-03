"use client"
import { useState } from "react"
import CartButton from "./CartButton.jsx"
import HamburgerButton from "./HamburgerButton.jsx"
import MobileNavbar from "./MobileNavbar"
import Navbar from "./NavBar.jsx"
import Image from "next/image"
import { Search, ShoppingBag, Menu, X, ChevronDown, ArrowRight } from "lucide-react"
import { useRouter } from "next/navigation"

const links = [
  {
    id: 2,
    name: "All Products",
    href: "/products",
    children: [
      { name: "Best Sellers", href: "/collection/best-sellers" },
    ],
  },
  {
    id: 1,
    name: "Achars",
    href: "/collection/achar",
    children: [
      { name: "Mix Achar", href: "/product/mixed-pickle" },
      { name: "Mango Achar", href: "/product/mango-pickle" },
      { name: "Lemon Achar", href: "/product/lemon-pickle" },
      { name: "Garlic Achar", href: "/product/ginger-pickle" },
    ],
  },
  {
    id: 6,
    name: "Chutneys",
    href: "/collection/chutney",
    children: [
      { name: "Alu Bukhara Chutney", href: "/product/alu-bukhara-chatni" },
      { name: "Green Chilli Chutney", href: "/product/green-chilli-chutney" },
      { name: "Imli Chutney", href: "/product/imli-chatni" },
    ],
  },
  {
    id: 6,
    name: "Murabbas",
    href: "/collection/murabba",
    children: [
      { name: "Apple Murabba", href: "/product/apple-muraba" },
    ],
  },
  {
    id: 3,
    name: "About Us",
    href: "/about",
  },
  {
    id: 5,
    name: "Contact Us",
    href: "/contact",
  },
]

export default function Header({ children, headerText = "Shop All Products" }) {
  const router = useRouter()
  const [isScrolled, setIsScrolled] = useState(false)
  const [showSearch, setShowSearch] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const searchInputRef = useRef(null)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const [expandedMobileItems, setExpandedMobileItems] = useState(new Set())

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Focus search input when search overlay opens
  useEffect(() => {
    if (showSearch && searchInputRef.current) {
      searchInputRef.current.focus()
    }
  }, [showSearch])

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (isMobileMenuOpen && !e.target.closest(".mobile-menu-content") && !e.target.closest(".mobile-menu-trigger")) {
        setIsMobileMenuOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [isMobileMenuOpen])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isMobileMenuOpen])

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Searching for:", searchQuery);
    setShowSearch(false);

    if (searchQuery.trim()) {
      router.push(`/search?query=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  const handleDropdownEnter = (linkId) => {
    setActiveDropdown(linkId)
  }

  const handleDropdownLeave = () => {
    setActiveDropdown(null)
  }

  const toggleMobileExpansion = (linkId) => {
    const newExpanded = new Set(expandedMobileItems)
    if (newExpanded.has(linkId)) {
      newExpanded.delete(linkId)
    } else {
      newExpanded.add(linkId)
    }
    setExpandedMobileItems(newExpanded)
  }

  return (
    <>
      {children}
      <a href="/products">
        <div className="w-full bg-brandOrange p-2 text-center text-white group transition-all hover:text-[1.05rem] text-md flex gap-2 hover:gap-4 items-center justify-center py-2">
          {headerText}
          <FaArrowRight />
        </div>
      </a>

      {/* Desktop Header - Hidden on mobile */}
      <header className="max-w-[1440px] mx-auto pt-7 pb-3 flex items-center justify-center w-full h-[84px] min-[1440px]:h-fit px-4 md:px-8 min-[1440px]:px-28 my-4 bg-white shadow-md rounded-lg relative z-10 hidden md:flex">
        <div className="flex justify-between items-center mx-auto md:min-w-fit min-w-full w-fit">
          <HamburgerButton onClick={() => setIsMobileOpen(!isMobileOpen)} />
          <Link href="/" className="flex justify-center items-center w-full">
            <Image
              src="/logo.svg"
              alt="Achars"
              width={120}
              height={120}
              draggable={false}
              className="select-none h-[90%] aspect-square"
              onContextMenu={(e) => e.preventDefault()}
            />
          </Link>
        </div>

        <Navbar links={links} />
        <div className="flex justify-center items-center gap-4 ml-auto w-[13rem]">
          <div className="md:block hidden">
            <SearchBar type="meow" onPostSearch={() => {}} />
          </div>
          <CartButton className="[33%]" />
        </div>
      </header>

      {/* Mobile Header - Added spacing to account for fixed mobile header */}
      <div className="h-[60px] md:hidden"></div>

      <MobileNavbar links={links} isMobileOpen={isMobileOpen} onClick={() => setIsMobileOpen(!isMobileOpen)} />

        <TextCarousel/>
    </>
  )
}
