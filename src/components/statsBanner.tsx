import stats from "@/data/stats.json";

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
          <div key={item.label} className="flex flex-col items-center text-center gap-y-1">
            <span className="text-h2 font-bold text-muted-yellow leading-none">
              {item.value}
            </span>
            <span className="text-sm text-white/70 font-josefin-sans uppercase tracking-widest">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
