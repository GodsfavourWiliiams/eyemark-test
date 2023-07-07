import { NextApiRequest, NextApiResponse } from "next";
import { listingData } from "../../../utils/listing";

const handler = (_req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (!Array.isArray(listingData)) {
      throw new Error("Cannot find user data");
    }

    res.status(200).json(listingData);
  } catch (err: any) {
    res.status(500).json({ statusCode: 500, message: err.message });
  }
};

export default handler;
