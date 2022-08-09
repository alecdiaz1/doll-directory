import { useEffect, useState } from "react";
import { getListings } from "../api/getListings";
import { Listing } from "./Listing";
import { ListingAPIResponse } from "../types";
import PlaceholderImage from "../../../../public/placeholder-image.jpg";
import Link from "next/link";

export const Listings = () => {
  const [allListings, setAllListings] = useState<ListingAPIResponse[] | []>([]);
  const today = new Date();

  useEffect(() => {
    getListings().then((res) => setAllListings(res.data.listings));
  }, []);

  return (
    <>
      <div>
        <h1 className="text-4xl font-bold text-center sm:text-left">
          FEATURED LISTINGS
        </h1>
        <p className="mb-8 text-center sm:text-left">
          Want to put a listing here? Get in contact with&nbsp;
          <span>
            <Link href="#footer">
              <a className="underline">one of our employees!</a>
            </Link>
          </span>
        </p>
        <div className="grid 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 grid-cols:1 gap-8">
          {allListings
            .filter((listing) => listing.featuredListing)
            .filter((listing) => new Date(listing.expiryDate) > today)
            .map((listing) => (
              <Listing
                id={listing.id}
                key={listing.id}
                price={listing.price}
                title={listing.title}
                description={listing.description}
                sellerName={listing.sellerName}
                sellerPhoneNumber={listing.sellerPhoneNumber}
                imageUrl={listing?.photos[0]?.url || PlaceholderImage}
                location={listing.location}
              />
            ))}
        </div>
      </div>
      <div className="mt-8">
        <h1 className="text-4xl mb-8 font-bold text-center sm:text-left">
          ALL LISTINGS
        </h1>
        <div className="grid 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 grid-cols:1 gap-8">
          {allListings
            .filter((listing) => !listing.featuredListing)
            .filter((listing) => new Date(listing.expiryDate) > today)
            .map((listing) => (
              <Listing
                id={listing.id}
                key={listing.id}
                price={listing.price}
                title={listing.title}
                description={listing.description}
                sellerName={listing.sellerName}
                sellerPhoneNumber={listing.sellerPhoneNumber}
                imageUrl={listing?.photos[0]?.url || PlaceholderImage}
                location={listing.location}
              />
            ))}
        </div>
      </div>
    </>
  );
};
