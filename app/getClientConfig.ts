import { headers } from "next/headers";
import { CLIENTS, type ClientConfig } from "./client-configs";

type GetClientConfigParams = {
  demo?: string;
};

export async function getClientConfig(
  params: GetClientConfigParams = {}
): Promise<ClientConfig> {
  const demoKey = params.demo?.toLowerCase();

  if (demoKey && demoKey in CLIENTS) {
    return CLIENTS[demoKey];
  }

  const headerStore = await headers();
  const host = (headerStore.get("x-forwarded-host") || headerStore.get("host") || "")
    .toLowerCase()
    .split(":")[0];

  if (host.startsWith("iteacher.")) {
    return CLIENTS.iteacher;
  }

  return CLIENTS.default;
}
