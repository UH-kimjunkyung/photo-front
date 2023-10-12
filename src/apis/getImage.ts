import axios from "axios";

export const getImage = async () => {
  const address =
    "https://snap.team-alt.com/v2/image/download/preview/4c1df73d-f486-4b17-b2d0-8bea9d822887";
  const res = await axios.get(address, { responseType: "blob" });
  const url = URL.createObjectURL(res.data);
  return url;
};
