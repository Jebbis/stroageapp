import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";

import Searchbar from "@/components/shared/Searchbar";
import Pagination from "@/components/shared/Pagination";
import CustomerCard from "@/components/cards/CustomerCard";
import { fetchStorage } from "@/lib/actions/storage.actions";
import Link from "next/link";
import { Button } from "@/components/ui/button";

async function Page() {
  const storages = await fetchStorage();
  return (
    <>
      <h1 className="head-text">Customers</h1>
      <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
        <Link href={`/customers/add`}>
          <Button size="sm" className="community-card_btn">
            Add customer
          </Button>
        </Link>
      </div>
      <section className="mt-9 flex flex-wrap gap-4">
        {storages.length === 0 ? (
          <p className="no-result">No Result</p>
        ) : (
          <>
            {storages.map((storageObject) =>
              <CustomerCard
                client={storageObject.clientName}
                id={storageObject._id}
                storages={(storageObject.storages.length)}
              />
            )}
          </>
        )}
      </section>
    </>
  );
}

export default Page;
