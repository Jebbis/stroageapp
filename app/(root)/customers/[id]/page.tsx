import DeliveryHistory from "@/components/cards/DeliveryHistory";
import DetailsOverview from "@/components/cards/DetailsOverview";
import CardCustomerDetails from "@/components/shared/CardCustomerDetails";
import Link from "next/link";
import { Button } from "@/components/ui/button";

async function page({ params }: { params: { id: string, client: string } }) {
  if (!params.id) return null;
  console.log("Params: " + params.id)
  return (
    <div>
      <h1 className="head-text text-left">Customer Storages</h1>
      <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
        <Link href={"/create-storage/" + params.id}>
          <Button size="sm" className="community-card_btn">
            Add storages
          </Button>
        </Link >
      </div>
      <CardCustomerDetails id={params.id} />
      <DetailsOverview id={params.id} />
    </div>
  );
}

export default page;
