import Image from "next/image";
import { ListingProps } from "../types";
import { FC } from "react";
import { formatter } from "../utils/formatPrice";
import PlaceholderImage from "../../../assets/clipboard.svg";

export const Listing: FC<ListingProps> = ({
    price,
    description,
    title,
    sellerName,
    sellerPhoneNumber,
    imageUrl,
    location
}) => (
  <div>
    <Image
      alt="listing"
      src={imageUrl}
      width="200px"
      height="200px"
      layout="responsive"
    />
    <p>{title}</p>
    <p>{description}</p>
    { (sellerName && sellerPhoneNumber) && (
      <p>{`${sellerName} - ${sellerPhoneNumber}`}</p>
    )}
    { price &&
      <p>{formatter.format(price)}</p>
    }
    { location &&
      <p>{location}</p>
    }
  </div>
)
