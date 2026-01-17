import type { Metadata } from "next";
import { PropertyListing } from "@/data/property-listing";
import MapClient from "@/components/map-client";

export const metadata: Metadata = {
  title: "Property Discovery | Propsoch",
  description:
    "Discover residential properties using an interactive map with pricing, location, and availability details.",
};

export default async function Page() {
  return (
    <div className="w-screen h-screen">
      <MapClient allFilteredData={PropertyListing} />
    </div>
  );
}
