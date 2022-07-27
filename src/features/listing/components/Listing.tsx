import Image from "next/image";
import { ListingProps } from "../types";
import {FC} from "react";
import {formatter} from "../utils/formatPrice";

export const Listing: FC<ListingProps> = ({ price, title, sellerName, sellerPhoneNumber, imageUrl }) => (
  <div>
    <Image
      alt="listing"
      src={imageUrl}
      width="200px"
      height="200px"
      layout="responsive"
    />
    <p>{formatter.format(price)}</p>
    <p>{title}</p>
    <p>{sellerName}</p>
    <p>{sellerPhoneNumber}</p>
  </div>
)
