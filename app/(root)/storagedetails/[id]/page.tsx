import DeliveryHistory from "@/components/cards/DeliveryHistory";
import CardStorageDetails from "@/components/shared/CardStorageDetails";

async function page({ params }: { params: { id: string } }) {
  if (!params.id) return null;

  return (
    <div>
      <h1 className="head-text text-left">Details</h1>
      <CardStorageDetails
        id={params.id}
      />
      <DeliveryHistory id={params.id} />
    </div>
  );
}

export default page;