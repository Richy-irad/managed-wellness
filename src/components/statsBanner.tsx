import stats from "@/data/stats.json";
import Counter from "@/components/counter";

const items = [
  { value: stats.yearsInPractice, label: "Years in Practice" },
  { value: stats.clientsServed, label: "Clients Served" },
  { value: stats.sessionsCompleted, label: "Sessions Completed" },
  { value: stats.satisfactionRate, label: "Satisfaction Rate" },
];

export default function StatsBanner() {
  return (
    <section className="bg-deep-blue py-12 px-5 lg:px-0">
      <div className="lg:mx-40 grid grid-cols-2 lg:grid-cols-4 gap-8">
        {items.map((item) => (
          <Counter key={item.label} value={item.value} label={item.label} />
        ))}
      </div>
    </section>
  );
}
