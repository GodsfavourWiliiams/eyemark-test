export type Listing = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  price: number;
  rating: number;
  location: string;
  images: Array<string>;
  hostId: number;
  hostName: string;
  hostImage: string;
  hostDescription: string;
  hostRating: number;
  hostResponseRate: number;
  startAt: string;
  endAt: string;
  isLiked: boolean;
  isSuperhost: boolean;
  isAvailable: boolean;
  rooms: number;
  guests: number;
  beds: number;
  baths: number;
  houseRules: string;
  cancellationPolicy: string;
  category: string;
};

interface review {
  id: number;
  author: string;
  rating: number;
  text: string;
  date: string;
}
