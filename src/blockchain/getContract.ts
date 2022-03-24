import { ethers } from "ethers";

export default async function (
  address: string,
  abi: string,
  provider: ethers.providers.Web3Provider
) {
  return new ethers.Contract(address, abi, provider);
}
