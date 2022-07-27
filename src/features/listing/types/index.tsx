import { StaticImageData } from "next/image";

export interface ListingProps {
  id: string;
  price: number;
  sellerName: string;
  sellerPhoneNumber: string;
  title: string;
  imageUrl: string | StaticImageData;
}

export interface ListingAPIResponse {
  id: string;
  price: number;
  sellerName: string;
  sellerPhoneNumber: string;
  title: string;
  photos: [{
    id: string,
    url: string,
  }]
}
