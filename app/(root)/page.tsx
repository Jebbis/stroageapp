import { ClerkProvider, UserButton } from "@clerk/nextjs";
import CardStorage from "@/components/shared/CardStorage";
import OverviewCard from "@/components/shared/OverviewCard";

export default function Home() {
  return (
    <>
      <h1 className="head-text text-left">Overview</h1>
      <OverviewCard />
      <CardStorage />
    </>
  );
}
