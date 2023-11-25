import DeliveryHistory from "@/components/cards/DeliveryHistory";
import DetailsOverview from "@/components/cards/DetailsOverview";
import CardCustomerDetails from "@/components/shared/CardCustomerDetails";
import CardDetails from "@/components/shared/CardDetails";

async function page({ params }: { params: { id: string } }) {
  if (!params.id) return null;

  return (
    <div>
      <h1 className="head-text text-left">Customer Storages</h1>
      <CardCustomerDetails id={params.id} />
      <DetailsOverview id={params.id} />
    </div>
  );
}

export default page;
