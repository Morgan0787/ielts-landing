import HomePageClient from "./HomePageClient";
import { getClientConfig } from "./getClientConfig";

type HomePageProps = {
  searchParams?: Promise<{ demo?: string }>;
};

export default async function HomePage({ searchParams }: HomePageProps) {
  const params = await searchParams;
  const clientConfig = await getClientConfig({ demo: params?.demo });

  return <HomePageClient clientConfig={clientConfig} />;
}
