import Link from "next/link";

import { Button } from "../ui/button";

interface Props {
  id: string;
  client: string;
  name: string;
  capacity: number;
  lastDelivery: string;
}

function CommunityCard({ id, client, name, capacity, lastDelivery }: Props) {
  return (
    <article className="community-card">
      <div className="flex flex-wrap items-center gap-3">
        <div>
          <h4 className="text-base-semibold text-light-1">{name}</h4>

          <p className="text-small-medium text-gray-1">@{client}</p>
          <p className="text-small-medium text-gray-1">Capacity: {capacity}%</p>
          <p className="text-small-medium text-gray-1">
            Last Delivery: {lastDelivery}
          </p>
        </div>
      </div>

      <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
        <Link href={`/communities/${id}`}>
          <Button size="sm" className="community-card_btn">
            View
          </Button>
        </Link>
      </div>
    </article>
  );
}

export default CommunityCard;
