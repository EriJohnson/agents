import { Agent } from "@/types";
import httpClient from "../httpClient";
import md5 from "md5";

const publicKey = import.meta.env.VITE_MARVEL_API_PUBLIC_KEY;
const timeStamp = new Date().getTime();
const privateKey = import.meta.env.VITE_MARVEL_API_PRIVATE_KEY;
const hash = md5(timeStamp + privateKey + publicKey);

const DEFAULT_PARAMS = {
  ts: timeStamp,
  apikey: publicKey,
  hash: hash,
  limit: 10,
};

interface AgentsServiceResponse {
  code: number;
  status: string;
  copyright: string;
  attributionText: string;
  attributionHTML: string;
  etag: string;
  data: {
    offset: number;
    limit: number;
    total: number;
    count: number;
    results: Agent[];
  };
}

const AgentsService = {
  findAll: async (additionalParams = {}): Promise<Agent[]> => {
    const params = {
      ...DEFAULT_PARAMS,
      ...additionalParams,
    };

    const response = await httpClient.get<AgentsServiceResponse>(
      "/characters",
      { params }
    );

    return response.data.data.results;
  },
};

export default AgentsService;
