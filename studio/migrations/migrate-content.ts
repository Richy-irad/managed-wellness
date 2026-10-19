import { readFileSync } from "node:fs";
import { join } from "node:path";
import { getCliClient } from "sanity/cli";

const client = getCliClient({ apiVersion: "2026-09-29" });

type JsonBenefit = {
  title: string;
  description: string;
};

type JsonService = {
  service: string;
  slug: string;
  metaDescription?: string;
  description: string;
  beneficiaries: string[];
  benefits: JsonBenefit[];
};

type JsonPricing = {
  id: string;
  serviceLabel: string;
  serviceSlug?: string;
  priceKES: number;
  sessionDurationMinutes: number;
  description?: string;
  packageSessions?: number;
  packagePriceKES?: number;
};

const services: JsonService[] = JSON.parse(
  readFileSync(join(__dirname, "../../src/services/services.json"), "utf8"),
);

const pricingEntries: JsonPricing[] = JSON.parse(
  readFileSync(join(__dirname, "../../src/data/pricing.json"), "utf8"),
);

async function migrateServices() {
  for (const svc of services) {
    const benefitRefs = [];

    for (const [index, benefit] of svc.benefits.entries()) {
      const benefitId = `benefit-${svc.slug}-${index}`;
      await client.createOrReplace({
        _id: benefitId,
        _type: "benefit",
        benefit: benefit.title,
        description: benefit.description,
      });
      benefitRefs.push({
        _type: "reference" as const,
        _ref: benefitId,
        _key: benefitId,
      });
    }

    await client.createOrReplace({
      _id: `service-${svc.slug}`,
      _type: "service",
      service: svc.service,
      slug: { _type: "slug", current: svc.slug },
      metaDescription: svc.metaDescription,
      description: svc.description,
      beneficiaries: svc.beneficiaries,
      benefits: benefitRefs,
    });

    console.log(`Migrated service: ${svc.slug} (${benefitRefs.length} benefits)`);
  }
}

async function migratePricing() {
  for (const entry of pricingEntries) {
    await client.createOrReplace({
      _id: `pricing-${entry.id}`,
      _type: "pricing",
      serviceLabel: entry.serviceLabel,
      service: entry.serviceSlug
        ? { _type: "reference" as const, _ref: `service-${entry.serviceSlug}` }
        : undefined,
      priceKES: entry.priceKES,
      sessionDuration: entry.sessionDurationMinutes,
      description: entry.description,
      packageSessions: entry.packageSessions,
      packagePriceKES: entry.packagePriceKES,
    });

    console.log(`Migrated pricing: ${entry.id}`);
  }
}

async function run() {
  await migrateServices();
  await migratePricing();
  console.log("Migration complete.");
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
