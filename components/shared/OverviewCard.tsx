import { fetchStorage } from "@/lib/actions/storage.actions";

async function OverviewCard() {
  const storages = await fetchStorage();
  let storagesTotal = 0;
  let storageAverage = 0;
  storages.map(
    (amount) => (storagesTotal = storagesTotal + amount.storages.length)
  );

  return (
    <div className="flex flex-wrap mt-10 gap-7 justify-evenly">
      <div className="p-4 max-w-sm w-full">
        <div className="flex rounded-xl h-full bg-dark-2 p-8 flex-col">
          <div className="flex items-center flex-col">
            <h2 className="text-white text-heading2-bold">
              Varastoja yhteensä
            </h2>
            <p className="leading-relaxed text-base text-white ">
              {storagesTotal}
            </p>
          </div>
        </div>
      </div>
      <div className="p-4 max-w-sm w-full">
        <div className="flex rounded-xl h-full bg-dark-2 p-8 flex-col">
          <div className="flex items-center flex-col">
            <h2 className="text-white text-heading2-bold">
              Varastojen tilanne %
            </h2>
            <p className="leading-relaxed text-base text-white">50</p>
          </div>
        </div>
      </div>
      <div className="p-4 max-w-sm w-full">
        <div className="flex rounded-xl h-full  bg-dark-2 p-8 flex-col">
          <div className="flex items-center flex-col">
            <h2 className="text-white text-heading2-bold">Jotain</h2>
            <p className="leading-relaxed text-base text-white ">xxx</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OverviewCard;
