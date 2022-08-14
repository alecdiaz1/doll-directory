import Image from "next/image";
import { ListingProps } from "../types";
import { FC } from "react";
import { formatter } from "../utils/formatPrice";
import Clipboard from "../../../assets/clipboard.svg";
import Location from "../../../assets/location.svg";
import { Carousel } from "react-responsive-carousel";
import PlaceholderImage from "../../../../public/placeholder-image.jpg";
import { useCopyToClipboard } from "../../../hooks/useCopyToClipboard";

export const Listing: FC<ListingProps> = ({
  price,
  description,
  title,
  sellerName,
  sellerPhoneNumber,
  images,
  location,
}) => {
  const copyPhoneNumber = useCopyToClipboard(
    sellerPhoneNumber || "",
    "Phone number copied to clipboard!"
  );

  return (
    <div>
      <div className="pt-[100%] h-0 w-100 relative">
        {images.length > 0 ? (
          <Carousel
            showArrows
            showIndicators={images.length > 1}
            showThumbs={false}
            emulateTouch
            showStatus={false}
            className="absolute top-0 left-0 h-full w-full overflow-hidden"
          >
            {images.map(({ id, url, mimeType }) => (
              <div key={id} className="h-full w-full flex flex-col justify-center align-center">
                {
                  mimeType === "video/mp4" ?
                    <video autoPlay muted loop>
                      <source src={url} type="video/mp4"/>
                    </video>
                  :
                    <Image
                      key={id || ""}
                      alt="listing"
                      src={url}
                      layout="fill"
                      objectFit="cover"
                    />
                }
              </div>
            ))}
          </Carousel>
        ) : (
          <div className="absolute top-0 left-0 h-full w-full overflow-hidden">
            <Image
              key={""}
              alt="listing"
              src={PlaceholderImage}
              layout="fill"
              objectFit="cover"
            />
          </div>
        )}
      </div>
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
                onClick={() => copyPhoneNumber()}
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
