import { PricingTable } from "@/components/pricing-table";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full flex-col items-center justify-center px-4 bg-white dark:bg-black">
        <PricingTable />
      </main>
    </div>
  );
}
