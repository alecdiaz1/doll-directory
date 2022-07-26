import Image from "next/image";
import { ListingProps } from "../types";
import {FC} from "react";
import {formatter} from "../utils/formatPrice";

export const Listing: FC<ListingProps> = ({ price, title, sellerName, sellerPhoneNumber }) => (
  <div>
    <Image
      alt="listing"
      src="https://media.discordapp.net/attachments/987239258601431080/998264128466604082/IMG_7700.jpg"
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
