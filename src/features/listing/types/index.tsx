import { StaticImageData } from "next/image";

export interface ListingProps {
  id: string;
  price: number | null;
  sellerName: string | null;
  sellerPhoneNumber: string | null;
  title: string;
  imageUrl: string | StaticImageData;
  featuredListing: boolean;
  description: string;
  location: string | null;
}

export interface ListingAPIResponse {
  id: string;
  price: number | null;
  sellerName: string | null;
  sellerPhoneNumber: string | null;
  title: string;
  photos: [{
    id: string,
    url: string,
  }] | [];
  featuredListing: boolean;
  description: string;
  location: string | null;
}
