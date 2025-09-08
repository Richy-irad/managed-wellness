import services from "../services/services.json" with { type: "json" };

// getAllServicesSlugs
export const getAllServicesSlugs = () => {
  // loop over the services and return the slugs only
  return services.map((service) => {
    return {
      params: {
        slug: service.slug,
      },
    };
  });
};

// getService(slug)
export const getService = (slug: string | undefined) => {
  const service = services.find((serv) => serv.slug === slug);

  // combine slug with service
  return {
    slug,
    ...service,
  };
};

// getAllServices
export const getAllServices = () => {
  return services;
};

// geMinServices
export const getMinServices = () => {
  return services.slice(0, 3);
};
