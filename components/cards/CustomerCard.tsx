import Link from "next/link";

import { Button } from "../ui/button";

interface Props {
  id: string;
  client: string;
  storages: number;
}

function CommunityCard({ id, client, storages }: Props) {
  return (
    <article className="community-card">
      <div className="flex flex-wrap items-center gap-3">
        <div>
          <h4 className="text-base-semibold text-light-1">@{client}</h4>

          <p className="text-small-medium text-gray-1">Storages total: {storages}</p>
        </div>
      </div>

      <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
        <Link href={`/customers/${id}`}>
          <Button size="sm" className="community-card_btn">
            View
          </Button>
        </Link>
      </div>
    </article>
  );
}

export default CommunityCard;
