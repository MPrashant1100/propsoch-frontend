import DiscoveryMap from "@/components/discovery-map";
import { PropertyListing } from "@/data/property-listing";
import type { Metadata } from "next";


// TODO: Create a List view for these properties.
// Use your own imagination while designing, please don't copy Propsoch's current UI.
// We don't like it either.
// Add pagination
// You can modify the Property Listing however you want. If you feel like creating an API and implementing pagination via that, totally your call.

export const metadata: Metadata = {
  title: "Property Discovery | Propsoch",
  description: "Discover properties on an interactive map with pricing, location, and availability.",
};


export default async function Page() {
  return (
    <div className="w-screen h-screen">
      <DiscoveryMap allFilteredData={PropertyListing} />
    </div>
  );
}
