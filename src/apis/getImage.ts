import axios from "axios";
import useStore from "Stores/StoresContainer";

export const getImage = async () => {
  const { uuid, setUuid } = useStore();

  const address = `https://snap.team-alt.com/v2/image/download/preview/72bce9c5-b09b-4092-9315-135257013f21`;
  const res = await axios.get(address, { responseType: "blob" });
  const url = URL.createObjectURL(res.data);
  console.log(url);
  return url;
};
