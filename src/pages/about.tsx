import Head from "next/head";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const About = () => {
  return (
    <>
      <Head>
        <title>About us | Managed Wellness</title>
      </Head>
      <Navbar />
      <main className="font-josefin-sans">
        {/* Hero */}
        <div className="flex">
          <div className="basis-8/12 mx-auto py-16">
            <p className="font-bold text-6xl text-center">
              Empowering lives through compassionate, authentic care that honors
              diversity and builds trust.
            </p>
          </div>
        </div>

        <div className="bg-white">
          <div className="lg:container lg:mx-auto">
            {/* Vision */}
            <div className="flex gap-x-32 justify-between items-center lg:px-20 py-18">
              <div className="basis-4/12 w-96">
                <div className="flex flex-col gap-y-4 w-96 py-8">
                  <h2 className="text-6xl font-medium text-black">
                    Our Vision
                  </h2>
                  <p className="text-warm-grey font-2xl">
                    Empowering individuals to create a healthier world,
                    together.
                  </p>
                </div>
              </div>
              <div className="basis-7/12 px-7 py-8 bg-sage-green/30 rounded-md">
                <p className="text-2xl text-dark font-regular">
                  Together we spark solutions that create a better, healthier
                  world as every person makes use of their unique experiences
                  and backgrounds.
                </p>
              </div>
            </div>

            {/* Mission */}
            <div className="flex gap-x-32 justify-between items-center lg:px-20 py-18">
              <div className="basis-7/12 px-7 py-8 bg-sage-green/30 rounded-md">
                <p className="text-2xl text-dark font-regular">
                  Because not all wounds are visible, we, are dedicated to
                  healing the unseen by helping our clients overcome mental
                  health challenges through committing to be confidential,
                  empathetic, and approachable in our services and
                  interventions.
                </p>
              </div>
              <div className="basis-4/12 w-96">
                <div className="flex flex-col gap-y-4 w-96 py-8">
                  <h2 className="text-6xl font-medium text-black">
                    Our Mission
                  </h2>
                  <p className="text-warm-grey font-2xl">
                    Empowering unseen healing through compassionate care.
                  </p>
                </div>
              </div>
            </div>

            {/* Purpose */}
            <div className="flex gap-x-32 justify-between items-center lg:px-20 py-18">
              <div className="basis-4/12">
                <div className="flex flex-col gap-y-4 w-96 py-8">
                  <span className="text-warm-grey font-2xl uppercase">
                    purpose
                  </span>
                  <h2 className="text-6xl font-medium text-black">
                    To rekindle our client’s lost hope.
                  </h2>
                </div>
              </div>
              <div className="basis-7/12 px-7 py-8 bg-sage-green/30 rounded-md">
                <p className="text-2xl text-dark font-regular">
                  Our purpose is to provide compassionate support and
                  evidence-based interventions that help rekindle hope in our
                  clients and empower them to create meaningful change in their
                  lives.
                </p>
              </div>
            </div>

            {/* Motto */}

            <div className="flex gap-x-32 justify-between items-center lg:px-20 py-18">
              <div className="basis-7/12 px-7 py-8 bg-sage-green/30 rounded-md">
                <p className="text-2xl text-dark font-regular">
                  The motto "It's okay not to be okay" reflects the fundamental
                  belief of Managed Wellness that mental health struggles are a
                  normal and common part of the human experience. This motto
                  encourages clients to recognize that it's okay to seek help
                  and support when facing emotional or mental challenges.u
                </p>
              </div>
              <div className="basis-4/12">
                <div className="flex flex-col gap-y-4 w-96 py-8">
                  <span className="text-warm-grey font-2xl uppercase">
                    motto
                  </span>
                  <h2 className="text-6xl font-medium text-black">
                    It's okay not to be okay
                  </h2>
                </div>
              </div>
            </div>

            {/* Core Values */}
            <div className="flex gap-x-32 justify-between items-start lg:px-20 py-20">
              <div className="basis-4/12">
                <div className="flex flex-col gap-y-8 w-96">
                  <h2 className="text-6xl font-medium text-black">
                    Core Values
                  </h2>
                  <p className="text-warm-grey font-2xl">
                    Empowering lives through compassionate, authentic care that
                    honors diversity and builds trust.
                  </p>
                </div>
              </div>
              <div className="basis-7/12 flex flex-col">
                <div className="flex flex-col gap-6 border-b-0.5 border-light px-7 py-8">
                  <div className="flex flex-col gap-2.5">
                    <h3 className="font-bold text-black text-4xl">
                      Professional Etiquette
                    </h3>
                    <h4 className="font-semibold text-dark text-2xl">
                      Respectful, ethical, and compassionate care for every
                      client.
                    </h4>
                  </div>
                  <p className="text-lg font-regular text-dark">
                    At Managed Wellness, we believe that professional etiquette
                    is the foundation of effective mental health care. Our
                    commitment to acting respectfully, ethically, and
                    compassionately towards every client ensures that everyone
                    who comes through our doors feels heard, supported, and
                    empowered to create positive change in their lives.
                  </p>
                </div>

                <div className="flex flex-col gap-6 border-b-0.5 border-light px-7 py-8">
                  <div className="flex flex-col gap-2.5">
                    <h3 className="font-bold text-black text-4xl">
                      Authenticity
                    </h3>
                    <h4 className="font-semibold text-dark text-2xl">
                      Real people, real care.
                    </h4>
                  </div>
                  <p className="text-lg font-regular text-dark">
                    At Managed Wellness, authenticity is key. We believe that
                    being clear about who we are and what we do is essential to
                    building trusting, meaningful relationships with our
                    clients. By being our authentic selves and providing real,
                    personalized care, we empower our clients to do the same.
                  </p>
                </div>

                <div className="flex flex-col gap-6 border-b-0.5 border-light px-7 py-8">
                  <div className="flex flex-col gap-2.5">
                    <h3 className="font-bold text-black text-4xl">
                      Compassion
                    </h3>
                    <h4 className="font-semibold text-dark text-2xl">
                      Enhancing lives, one person at a time.
                    </h4>
                  </div>
                  <p className="text-lg font-regular text-dark">
                    At Managed Wellness, compassion is at the heart of
                    everything we do. We genuinely care for each patient and
                    strive to enhance the quality of their lives through
                    customized care and a supportive, empathetic approach. By
                    taking the time to truly understand each individual's unique
                    needs and goals, we help them achieve lasting wellness and a
                    brighter future.
                  </p>
                </div>

                <div className="flex flex-col gap-6 border-b-0.5 border-light px-7 py-8">
                  <div className="flex flex-col gap-2.5">
                    <h3 className="font-bold text-black text-4xl">Integrity</h3>
                    <h4 className="font-semibold text-dark text-2xl">
                      Keeping our promises, building trust.
                    </h4>
                  </div>
                  <p className="text-lg font-regular text-dark">
                    At Managed Wellness, integrity is a cornerstone of our
                    practice. We believe that keeping our word and following
                    through on our commitments is essential to building trust
                    with our clients. By upholding our values of honesty,
                    transparency, and accountability, we build lasting
                    relationships with those we serve.
                  </p>
                </div>

                <div className="flex flex-col gap-6 border-b-0.5 border-light px-7 py-8">
                  <div className="flex flex-col gap-2.5">
                    <h3 className="font-bold text-black text-4xl">Respect</h3>
                    <h4 className="font-semibold text-dark text-2xl">
                      Valuing diversity, honoring worth.
                    </h4>
                  </div>
                  <p className="text-lg font-regular text-dark">
                    At Managed Wellness, we believe in the inherent worth of
                    every individual. Our commitment to respect means valuing
                    and honoring the diversity of our clients, employees, and
                    community. By creating a safe, inclusive environment where
                    everyone feels seen and heard, we empower our clients to
                    reach their full potential and live their best lives.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default About;
