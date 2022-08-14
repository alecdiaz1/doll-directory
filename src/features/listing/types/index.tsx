export interface ListingProps {
  id: string;
  price: number | null;
  sellerName: string | null;
  sellerPhoneNumber: string | null;
  title: string;
  images:
    | [
        {
          id: string;
          url: string;
          mimeType: string;
        }
      ]
    | [];
  description: string;
  location: string | null;
}

export interface ListingAPIResponse {
  id: string;
  price: number | null;
  sellerName: string | null;
  sellerPhoneNumber: string | null;
  title: string;
  photos:
    | [
        {
          id: string;
          url: string;
          mimeType: string;
        }
      ]
    | [];
  featuredListing: boolean;
  description: string;
  location: string | null;
  expiryDate: string;
}
