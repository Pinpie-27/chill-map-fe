import { Card } from "@radix-ui/themes";
import type { Place } from "../types/types";
import { ChatBubbleIcon, HeartIcon, StarIcon } from "@radix-ui/react-icons";

interface PlacesCardProps {
  place: Place;
}

function PlacesCard({ place }: PlacesCardProps) {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <StarIcon
        key={i}
        className={`w-4 h-4 ${
          i < Math.floor(rating) ? "text-yellow-400" : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <div className="flex gap-6 group">
      <Card className="max-w-[332px] w-full min-h-[330px] h-full shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
        <div className="relative flex-shrink-0 w-full h-40 overflow-hidden rounded-t-xl">
          <img
            src={place.image}
            alt={place.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-sm rounded-lg px-3 py-1.5 text-sm font-medium text-gray-800 shadow-sm">
            {place.category}
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col justify-between p-5">
          <div>
            <div className="flex items-start justify-between mb-3">
              <h3 className="font-semibold text-lg text-gray-900 mb-1 leading-tight">
                {place.name}
              </h3>
              <div className="flex items-center gap-1 flex-shrink-0 ml-2">
                {renderStars(place.rating)}
                <span className="text-sm text-gray-600 font-medium ml-1">
                  ({place.rating})
                </span>
              </div>
            </div>

            <p className="text-gray-600 mb-4 leading-relaxed text-sm line-clamp-2">
              {place.description}
            </p>

            <div className="flex items-center gap-2 text-sm text-gray-500 mb-4 bg-gray-50 rounded-lg p-2.5">
              <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-sm">
                <span className="text-white text-xs font-semibold">
                  {place.author.charAt(0)}
                </span>
              </div>
              <span className="font-medium text-gray-700">{place.author}</span>
              <span className="text-gray-400">•</span>
              <span>{place.timeAgo}</span>
            </div>
          </div>

          <div className="flex items-center justify-between pt-3 border-t border-gray-200/80">
            <div className="flex items-center gap-5">
              <button className="flex items-center gap-1.5 text-sm hover:text-red-600 transition-colors duration-200 p-1 rounded-md hover:bg-red-50">
                <HeartIcon
                  className={`w-5 h-5 transition-colors duration-200 ${
                    place.isLiked ? "text-red-600" : "text-gray-400"
                  }`}
                />
                <span
                  className={`font-medium ${
                    place.isLiked ? "text-red-600" : "text-gray-600"
                  }`}
                >
                  {place.likes}
                </span>
              </button>

              <button className="flex items-center gap-1.5 text-sm text-gray-600 hover:text-blue-600 transition-colors duration-200 p-1 rounded-md hover:bg-blue-50">
                <ChatBubbleIcon className="w-5 h-5" />
                <span className="font-medium">{place.comments}</span>
              </button>
            </div>

            <button className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium transition-all duration-200 shadow-sm hover:shadow-md">
              Details
            </button>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default PlacesCard;
