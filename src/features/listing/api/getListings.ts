const query = `
{
  listings {
    id
    description
    expiryDate
    featuredListing
    price
    sellerName
    sellerPhoneNumber
    title
    location
    photos {
      id
      url
    }
  }
}
`;

export const getListings = () => {
  return fetch(
    "https://api-us-west-2.hygraph.com/v2/cl60osdju3xjn01uk6po2hkqk/master",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.HYGRAPH_API_TOKEN}`,
      },
      body: JSON.stringify({ query }),
    }
  )
    .then((res) => res.json())
    .then((result) => {
      return result;
    });
};
