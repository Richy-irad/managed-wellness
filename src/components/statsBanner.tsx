import Counter from "@/components/counter";
import SectionLabel from "@/components/sectionLabel";
import { sanityFetch } from "@/sanity/lib/live";
import { STATS_QUERY } from "@/sanity/lib/queries";

type StatItem = { label: string; value: string };

const fallbackItems: StatItem[] = [
  { label: "Years in Practice", value: "8+" },
  { label: "Clients Served", value: "2K+" },
  { label: "Sessions Completed", value: "14K+" },
  { label: "Satisfaction Rate", value: "98%" },
];

export default async function StatsBanner() {
  const { data } = await sanityFetch({ query: STATS_QUERY });
  const items: StatItem[] = data?.items?.length ? data.items : fallbackItems;

  return (
    <section className="bg-deep-blue py-12">
      <div className="container flex flex-col gap-y-12">
        <SectionLabel variant="inverted" label="Our Journey" />
        <h2 className="text-4xl lg:text-6xl font-bold text-surface leading-tight lg:max-w-2/3">
          Our Goal is to Ensure that everyone has access to high-quality therapy
          services.
        </h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item) => (
            <Counter key={item.label} value={item.value} label={item.label} />
          ))}
        </div>
      </div>
    </section>
  );
}
