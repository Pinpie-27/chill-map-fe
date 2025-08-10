export interface Place {
  id: string;
  name: string;
  category: string;
  description: string;
  image: string;
  likes: number;
  comments: number;
  rating: number;
  author: string;
  timeAgo: string;
  isLiked: boolean;
  isSaved: boolean;
}
