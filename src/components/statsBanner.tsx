import stats from "@/data/stats.json";
import Counter from "@/components/counter";
import SectionLabel from "@/components/sectionLabel";

const items = [
  { value: stats.yearsInPractice, label: "Years in Practice" },
  { value: stats.clientsServed, label: "Clients Served" },
  { value: stats.sessionsCompleted, label: "Sessions Completed" },
  { value: stats.satisfactionRate, label: "Satisfaction Rate" },
];

export default function StatsBanner() {
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
