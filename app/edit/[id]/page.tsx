import CardEdit from "@/components/shared/CardEdit";

async function page({ params }: { params: { id: string } }) {
  if (!params.id) return null;

  return (
    <div>
      <h1 className="head-text text-left">Editing</h1>
      <CardEdit
        id={params.id}
      />
    </div>
  );
}

export default page;