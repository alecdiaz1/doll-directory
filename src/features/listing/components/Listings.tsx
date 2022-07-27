import { useEffect, useState } from "react";
import { getListings } from "../api/getListings";
import { Listing } from "./Listing";
import { ListingAPIResponse } from "../types";
import PlaceholderImage from "../../../../public/placeholder-image.jpg";

export const Listings = () => {
  const [listings, setListings] = useState<ListingAPIResponse[] | []>([])

  useEffect(() => {
    getListings()
      .then(res => setListings(res.data.listings))
  }, [])

  return (
    <>
      {listings.map(listing => (
        <Listing
          id={listing.id}
          key={listing.id}
          price={listing.price}
          title={listing.title}
          sellerName={listing.sellerName}
          sellerPhoneNumber={listing.sellerPhoneNumber}
          imageUrl={listing?.photos[0]?.url || PlaceholderImage}
        />
      ))}
    </>
  )
}
