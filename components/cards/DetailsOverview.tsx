import { fetchDetails } from "@/lib/actions/storage.actions";


//{storage.storages[0].storageCapacity}
//{storage.storages[0].lastDelivery}
async function DetailsOverview(id) {
  const storage = await fetchDetails(id);

  return (
    <div className="flex flex-wrap mt-10 gap-7 justify-evenly">
      <div className="p-4 max-w-sm w-full">
        <div className="flex rounded-xl h-full bg-dark-2 p-8 flex-col">
          <div className="flex items-center flex-col">
            <h2 className="text-white text-heading2-bold">Capacity</h2>
            <p className="leading-relaxed text-heading2-bold text-white ">

            </p>
          </div>
        </div>
      </div>
      <div className="p-4 max-w-sm w-full">
        <div className="flex rounded-xl h-full bg-dark-2 p-8 flex-col">
          <div className="flex items-center flex-col">
            <h2 className="text-white text-heading2-bold">Last Delivery</h2>
            <p className="leading-relaxed text-heading2-bold text-white ">

            </p>
          </div>
        </div>
      </div>
      <div className="p-4 max-w-sm w-full">
        <div className="flex rounded-xl h-full  bg-dark-2 p-8 flex-col">
          <div className="flex items-center flex-col">
            <h2 className="text-white text-heading2-bold">Jotain</h2>
            <p className="leading-relaxed text-heading2-bold text-white ">
              xxx
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailsOverview;
