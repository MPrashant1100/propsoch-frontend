"use client";

import dynamic from "next/dynamic";

const DiscoveryMap = dynamic(
  () => import("./discovery-map"),
  { ssr: false }
);

export default function MapClient(props: { allFilteredData: any }) {
  return <DiscoveryMap {...props} />;
}
