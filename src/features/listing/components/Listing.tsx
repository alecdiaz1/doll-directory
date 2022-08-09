import Image from "next/image";
import { ListingProps } from "../types";
import { FC } from "react";
import { formatter } from "../utils/formatPrice";
import Clipboard from "../../../assets/clipboard.svg";
import Location from "../../../assets/location.svg";

const copyPhoneNumber = (phoneNumber: string) => {
  // TODO: Show notification that phone number was copied
  navigator.clipboard.writeText(phoneNumber).then();
};

export const Listing: FC<ListingProps> = ({
  price,
  description,
  title,
  sellerName,
  sellerPhoneNumber,
  imageUrl,
  location,
}) => {
  return (
    <div>
      {/* TODO: Add ability to click through multiple images */}
      <Image
        alt="listing"
        src={imageUrl}
        width="200px"
        height="200px"
        layout="responsive"
      />
      <div className="mt-3 px-3">
        <p className="font-semibold text-xl">{title}</p>
        <p className="font-light">{description}</p>
        {sellerName && sellerPhoneNumber && (
          <p className="-mt-2 flex items-center font-semibold">
            {`${sellerName} - ${sellerPhoneNumber}`}
            <span className="cursor-pointer ml-2 block pt-2">
              <Image
                src={Clipboard}
                alt={sellerPhoneNumber}
                width="20px"
                height="20px"
                className="block"
                onClick={() => copyPhoneNumber(sellerPhoneNumber)}
              />
            </span>
          </p>
        )}
        {price && <p className="font-bold">{formatter.format(price)}</p>}
        {location && (
          <p className="flex font-bold">
            <span className="mt-0.5 mr-1">
              <Image src={Location} alt={Location} width="20px" height="20px" />
            </span>
            {location}
          </p>
        )}
      </div>
    </div>
  );
};
