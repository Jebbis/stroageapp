import CardDetails from "@/components/shared/CardDetails";

async function page({ params }: { params: { id: string } }) {
  if (!params.id) return null;

  return (
    <div>
      <h1 className="head-text text-left">Details</h1>
      <CardDetails id={params.id} />
    </div>
  );
}

export default page;
