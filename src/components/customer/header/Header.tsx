import {
  BellIcon,
  PersonIcon,
  MagnifyingGlassIcon,
  HamburgerMenuIcon,
} from "@radix-ui/react-icons";
import { Button, Separator, Text, TextField } from "@radix-ui/themes";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const handleToggle = () => {
    setIsOpenMenu(!isOpenMenu);
  };

  const handleClose = () => {
    setIsOpenMenu(false);
  };

  useEffect(() => {
    const handleSize = () => {
      if (window.innerWidth < 1024) {
        setIsOpenMenu(false);
      }
    };
    window.addEventListener("resize", handleSize);
    return () => {
      window.removeEventListener("resize", handleSize);
    };
  }, []);

  const navigationItems = [
    { to: "/home", label: "Home" },
    { to: "/blogs", label: "Blogs" },
    { to: "/about-us", label: "About us" },
    { to: "/contact", label: "Contact" },
  ];

  type NavButtonProps = {
    to: string;
    label: string;
    className?: string;
  };

  const NavButton = ({ to, label, className = "" }: NavButtonProps) => (
    <Button
      className={`relative overflow-hidden transition-all duration-300 hover:bg-secondary-nav hover:scale-105 ${className}`}
      radius="full"
      variant="ghost"
    >
      <Link
        className="font-inter text-secondary text-body-main px-6 py-2 transition-colors duration-300 hover:text-primary block w-full h-full"
        to={to}
      >
        {label}
      </Link>
    </Button>
  );

  const SearchField = ({ className = "" }) => (
    <div className={`relative group ${className}`}>
      <TextField.Root
        radius="full"
        className="max-w-[280px] w-full transition-all duration-300 focus-within:shadow-lg focus-within:scale-105"
        placeholder="Search for places..."
      >
        <TextField.Slot>
          <MagnifyingGlassIcon
            height={20}
            width={20}
            className="text-secondary group-focus-within:text-primary transition-colors duration-300"
          />
        </TextField.Slot>
      </TextField.Root>
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 -z-10" />
    </div>
  );

  return (
    <>
      {/* Main Header */}
      <header className="sticky top-0 z-50">
        <div className="flex justify-between items-center h-[60px] sm:h-[65px] lg:h-[70px] px-4 sm:px-6 lg:px-12 mx-auto w-full max-w-8xl transition-all duration-300">
          {/* Logo */}
          <div className="group cursor-pointer flex-shrink-0">
            <Text
              weight="bold"
              className="font-inter text-lg sm:text-2xl lg:text-title-main text-primary hover:text-primary-hover transition-all duration-300 group-hover:scale-110 bg-gradient-to-r from-primary to-primary-hover bg-clip-text"
            >
              Chill Map
            </Text>
            <div className="h-0.5 w-0 bg-gradient-to-r from-primary to-primary-hover transition-all duration-300 group-hover:w-full" />
          </div>

          {/* Desktop Navigation - Hidden on mobile and tablet */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2 bg-gray-50/50 rounded-full px-2 xl:px-4 py-2 backdrop-blur-sm">
            {navigationItems.map((item) => (
              <NavButton key={item.to} to={item.to} label={item.label} />
            ))}
          </nav>

          {/* Right Section */}
          <div className="flex items-center gap-2 sm:gap-4 lg:gap-6">
            {/* Desktop Search - Hidden on mobile and small tablets */}
            <SearchField className="hidden xl:block" />

            {/* User Actions */}
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="relative group">
                <button className="p-1.5 sm:p-2 rounded-full hover:bg-gray-100 transition-all duration-300 hover:scale-110">
                  <PersonIcon
                    height={18}
                    width={18}
                    className="sm:h-[22px] sm:w-[22px] text-secondary group-hover:text-primary transition-colors duration-300"
                  />
                </button>
              </div>

              <div className="relative group">
                <button className="p-1.5 sm:p-2 rounded-full hover:bg-gray-100 transition-all duration-300 hover:scale-110 relative">
                  <BellIcon
                    height={16}
                    width={16}
                    className="sm:h-[20px] sm:w-[20px] text-secondary group-hover:text-primary transition-colors duration-300"
                  />
                  <div className="absolute -top-0.5 -right-0.5 sm:-top-1 sm:-right-1 w-2 h-2 sm:w-3 sm:h-3 bg-red-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </button>
              </div>
            </div>

            {/* Mobile/Tablet Menu Button */}
            <button
              onClick={handleToggle}
              className="block lg:hidden p-1.5 sm:p-2 rounded-full hover:bg-gray-100 transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-primary/20"
              aria-label="Toggle menu"
            >
              <HamburgerMenuIcon
                height={18}
                width={18}
                className={`sm:h-[20px] sm:w-[20px] transition-transform duration-300 ${
                  isOpenMenu ? "rotate-90" : ""
                }`}
              />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile/Tablet Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          isOpenMenu ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div
          className="flex flex-col items-center gap-3 sm:gap-4 px-4 sm:px-6 py-4 sm:py-6 bg-gradient-to-b from-white to-gray-50 shadow-lg border-t border-gray-100"
          onClick={handleClose}
        >
          {/* Mobile/Tablet Search */}
          <div className="w-full max-w-sm animate-in slide-in-from-top-2 duration-300">
            <SearchField className="w-full justify-items-center" />
          </div>

          {/* Mobile/Tablet Navigation */}
          <div className="flex flex-col sm:flex-row sm:flex-wrap items-center justify-center gap-2 w-full max-w-2xl">
            {navigationItems.map((item, index) => (
              <div
                key={item.to}
                className="animate-in slide-in-from-left-2 duration-300 sm:flex-1 sm:min-w-[120px]"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <NavButton
                  to={item.to}
                  label={item.label}
                  className="w-full justify-center shadow-sm hover:shadow-md text-sm sm:text-base"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Enhanced Separator */}
      <div className="relative">
        <Separator
          my="1"
          size="4"
          className="bg-gradient-to-r from-transparent via-gray-200 to-transparent"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-primary/10 opacity-50" />
      </div>
    </>
  );
}

export default Header;
