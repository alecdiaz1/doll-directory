import { ListingAPIResponse } from "../types";

export const sortFeatured = (a: ListingAPIResponse, b: ListingAPIResponse) => {
  return Number(b.featuredListing) - Number(a.featuredListing);
}
