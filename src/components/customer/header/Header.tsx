import {
  BellIcon,
  PersonIcon,
  MagnifyingGlassIcon,
} from "@radix-ui/react-icons";
import { Separator, Text, TextField } from "@radix-ui/themes";
import { useEffect, useState } from "react";

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

  const SearchField = ({ className = "" }) => (
    <div className={`relative group ${className}`}>
      <TextField.Root
        radius="full"
        className="w-full max-w-none transition-all duration-300 focus-within:shadow-lg focus-within:scale-[1.02]"
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
      <header className="sticky top-0 z-50 bg-white">
        <div className="flex justify-between items-center h-14 sm:h-16 lg:h-18 px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12 mx-auto w-full max-w-screen-2xl transition-all duration-300">
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

          {/* Center Section - Search on larger screens */}
          <div className="hidden md:flex flex-1 justify-center max-w-md mx-8">
            <SearchField className="w-full" />
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-1 sm:gap-2 lg:gap-3">
            {/* User Actions */}
            <div className="flex items-center gap-1 sm:gap-2">
              <div className="relative group">
                <button className="p-1.5 sm:p-2 rounded-full hover:bg-gray-100 transition-all duration-300 hover:scale-105">
                  <PersonIcon
                    height={16}
                    width={16}
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

            {/* Mobile Search & Menu Button */}
            <button
              onClick={handleToggle}
              className="block md:hidden p-1.5 sm:p-2 rounded-full hover:bg-gray-100 transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
              aria-label="Toggle search menu"
            >
              <MagnifyingGlassIcon
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

      {/* Mobile Search Menu */}
      <div
        className={`md:hidden overflow-hidden bg-white border-b border-gray-200 transition-all duration-300 ease-in-out ${
          isOpenMenu ? "max-h-20 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-3 sm:px-4 py-3 sm:py-4" onClick={handleClose}>
          <SearchField className="w-full" />
        </div>
      </div>

      {/* Enhanced Separator - Only on larger screens */}
      <div className="hidden md:block relative">
        <Separator
          my="1"
          size="4"
          className="bg-gradient-to-r from-transparent via-gray-200 to-transparent"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-transparent to-blue-600/10 opacity-50" />
      </div>
    </>
  );
}

export default Header;
