import { Separator } from "@radix-ui/themes";
import { useState } from "react";
import PlacesCard from "./PlacesCard";
import { mockDataPlace } from "./mockDataPlace";

function HomePage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const itemsPerPage = 12;

  const categoriesAddress = [
    {
      id: "-all",
      title: "All",
    },
    {
      id: "-coffee",
      title: "Coffee",
    },
    {
      id: "-park",
      title: "Park",
    },
    {
      id: "-study",
      title: "Study",
    },
    {
      id: "-food&drink",
      title: "Food & Drink",
    },
    {
      id: "-entertainment",
      title: "Entertainment",
    },
  ];

  const [selectedCategory, setselectedCategory] = useState("All");

  // Pagination logic - chỉ thêm mới
  const totalItems = mockDataPlace.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = mockDataPlace.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setIsLoading(true);
    setCurrentPage(page);

    // Simple loading
    setTimeout(() => {
      setIsLoading(false);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 300);
  };

  // Generate simple page numbers
  const getPageNumbers = () => {
    const pages = [];
    const maxShow = 5;

    let start = Math.max(1, currentPage - 2);
    let end = Math.min(totalPages, start + maxShow - 1);

    if (end - start + 1 < maxShow) {
      start = Math.max(1, end - maxShow + 1);
    }

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    return pages;
  };

  const pageNumbers = getPageNumbers();

  return (
    <>
      <div className="flex flex-wrap gap-3 mb-2 mt-4 justify-center">
        {categoriesAddress.map((item) => (
          <button
            key={item.id}
            onClick={() => setselectedCategory(item.title)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              selectedCategory === item.title
                ? "bg-primary text-white shadow-sm"
                : "bg-white text-neutral-sub hover:text-primary hover:bg-primary-hover border border-gray-200"
            }`}
          >
            {item.title}
          </button>
        ))}
        <Separator my="1" size="4" />
      </div>

      {/* Places Grid */}
      <div
        className={`flex flex-wrap gap-8 justify-center transition-opacity duration-200 ${
          isLoading ? "opacity-60" : "opacity-100"
        }`}
      >
        {currentItems.map((place) => (
          <PlacesCard key={place.id} place={place} />
        ))}
      </div>

      {/* Simple Loading Indicator */}
      {isLoading && (
        <div className="flex justify-center mt-8">
          <div className="text-gray-500 text-sm">Đang tải...</div>
        </div>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center mt-12 gap-2">
          {/* Previous */}
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1 || isLoading}
            className="px-4 py-2 text-sm text-gray-600 hover:text-gray-900 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            ← Trước
          </button>

          {/* Page Numbers */}
          <div className="flex gap-1">
            {pageNumbers.map((page) => (
              <button
                key={page}
                onClick={() => handlePageChange(page)}
                disabled={isLoading}
                className={`px-4 py-2 text-sm rounded-md transition-colors ${
                  page === currentPage
                    ? "bg-blue-600 text-white"
                    : "text-gray-600 hover:bg-gray-100"
                } disabled:opacity-50`}
              >
                {page}
              </button>
            ))}
          </div>

          {/* Next */}
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages || isLoading}
            className="px-4 py-2 text-sm text-gray-600 hover:text-gray-900 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Tiếp →
          </button>
        </div>
      )}
    </>
  );
}

export default HomePage;
