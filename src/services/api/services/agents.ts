import { Agent } from "@/types";
import httpClient from "../httpClient";
import md5 from "md5";

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

const getParams = (searchParams: { page: number; search?: string }) => {
  const publicKey = import.meta.env.VITE_MARVEL_API_PUBLIC_KEY;
  const privateKey = import.meta.env.VITE_MARVEL_API_PRIVATE_KEY;
  const timeStamp = new Date().getTime();
  const hash = md5(timeStamp + privateKey + publicKey);

  const DEFAULT_PARAMS = {
    ts: timeStamp,
    apikey: publicKey,
    hash: hash,
    limit: 10,
  };

  const offset =
    searchParams.page > 1 ? (searchParams.page - 1) * DEFAULT_PARAMS.limit : 0;

  const params = {
    ...DEFAULT_PARAMS,
    offset,
    namesStartsWith: searchParams.search,
  };

  for (const key in params) {
    if (!params[key]) {
      delete params[key];
    }
  }

  return params;
};

const AgentsService = {
  findAll: async (searchParams: {
    page: number;
    search?: string;
  }): Promise<AgentsServiceResponse["data"]> => {
    const response = await httpClient.get<AgentsServiceResponse>(
      "/characters",
      {
        params: getParams(searchParams),
      }
    );

    return response.data.data;
  },
};

export default AgentsService;
