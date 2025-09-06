import Head from "next/head";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const About = () => {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Discover Managed Wellness Centre, your trusted destination for comprehensive mental health services. Learn about our compassionate team and how we empower individuals to navigate life's challenges, fostering healing, resilience, and personal growth."
        />
        <meta
          name="keywords"
          content="Mental health, Counseling, Therapy, Trauma counseling, Trauma counseling, Sex and gender-based violence counseling, Loss and grief counseling, Couples therapy, Sex therapy, Pre-marital counseling, Coping skills, Communication skills, Emotional intimacy, Sexual health, Intimacy issues, Trauma recovery, Post-traumatic stress disorder (PTSD), Grief support, Relationship satisfaction, Mental health awareness, Healthy relationships"
        />
        <title>About Us | Managed Wellness Centre</title>
        <meta property="og:title" content="About Us | Managed Wellness Centre" />
        <meta property="og:type" content="website" />
      </Head>
      <Navbar />
      <main className="font-josefin-sans">
        {/* Hero */}
        <div className="flex">
          <div className="basis-full mx-5 py-16 lg:basis-8/12 lg:mx-auto">
            <p className="font-bold text-3xl md:text-4xl lg:text-6xl text-center">
              Empowering lives through compassionate, authentic care that honors
              diversity and builds trust.
            </p>
          </div>
        </div>

        <div className="bg-white">
          {/* Vision */}
          <div className="flex flex-wrap gap-x-32 justify-start items-center py-4 mx-5 lg:justify-between lg:mx-40 lg:py-18 lg:flex-nowrap">
            <div className="basis-full lg:basis-4/12 w-full lg:w-96 text-center lg:text-start">
              <div className="flex flex-col gap-y-4 py-8">
                <h2 className="text-3xl lg:text-6xl font-medium text-black">
                  Our Vision
                </h2>
                <p className="text-warm-grey text-sm text-center lg:text-start lg:text-2xl">
                  Empowering individuals to create a healthier world, together.
                </p>
              </div>
            </div>
            <div className="basis-full lg:basis-7/12 px-7 py-8 bg-sage-green/30 rounded-xs-md">
              <p className="text-base lg:text-2xl text-dark font-regular text-center lg:text-start">
                Together we spark solutions that create a better, healthier
                world as every person makes use of their unique experiences and
                backgrounds.
              </p>
            </div>
          </div>

          {/* Mission */}
          <div className="flex flex-wrap gap-x-32 justify-start items-center py-4 mx-5 lg:justify-between lg:mx-40 lg:py-18 lg:flex-nowrap">
            <div className="basis-full lg:basis-7/12 px-7 py-8 bg-sage-green/30 rounded-xs-md">
              <p className="text-base lg:text-2xl text-dark font-regular text-center lg:text-start">
                Because not all wounds are visible, we, are dedicated to healing
                the unseen by helping our clients overcome mental health
                challenges through committing to be confidential, empathetic,
                and approachable in our services and interventions.
              </p>
            </div>
            <div className="basis-full w-full order-first lg:basis-4/12 lg:w-96 lg:order-0">
              <div className="flex flex-col gap-y-4 py-8 text-center lg:text-start">
                <h2 className="text-3xl lg:text-6xl font-medium text-black">
                  Our Mission
                </h2>
                <p className="text-warm-grey font-2xl">
                  Empowering unseen healing through compassionate care.
                </p>
              </div>
            </div>
          </div>

          {/* Purpose */}
          <div className="flex flex-wrap gap-x-32 justify-start items-center py-4 mx-5 lg:justify-between lg:mx-40 lg:py-18 lg:flex-nowrap">
            <div className="basis-full lg:basis-4/12">
              <div className="flex flex-col gap-y-4 py-8 w-full text-center lg:text-start lg:w-96">
                <span className="text-warm-grey font-2xl uppercase">
                  purpose
                </span>
                <h2 className="text-3xl lg:text-6xl font-medium text-black">
                  To rekindle our client&apos;s lost hope.
                </h2>
              </div>
            </div>
            <div className="basis-full lg:basis-7/12 px-7 py-8 bg-sage-green/30 rounded-xs-md">
              <p className="text-base lg:text-2xl text-dark font-regular text-center lg:text-start">
                Our purpose is to provide compassionate support and
                evidence-based interventions that help rekindle hope in our
                clients and empower them to create meaningful change in their
                lives.
              </p>
            </div>
          </div>

          {/* Motto */}

          <div className="flex flex-wrap gap-x-32 justify-start items-center py-4 mx-5 lg:justify-between lg:mx-40 lg:py-18 lg:flex-nowrap">
            <div className=" basis-full lg:basis-7/12 px-7 py-8 bg-sage-green/30 rounded-xs-md">
              <p className="text-base lg:text-2xl text-dark font-regular text-center lg:text-start">
                The motto &quot;It&apos;s okay not to be okay&quot; reflects the fundamental
                belief of Managed Wellness Centre that mental health struggles are a
                normal and common part of the human experience. This motto
                encourages clients to recognize that it&apos;s okay to seek help and
                support when facing emotional or mental challenges.u
              </p>
            </div>
            <div className="basis-full order-first lg:order-0 lg:basis-4/12">
              <div className="flex flex-col gap-y-4 w-96 py-8 text-center lg:text-start">
                <span className="text-warm-grey font-2xl uppercase">motto</span>
                <h2 className="text-3xl lg:text-6xl font-medium text-black">
                  It&apos;s okay not to be okay
                </h2>
              </div>
            </div>
          </div>

          {/* Core Values */}
          <div className="flex flex-wrap gap-x-32 justify-between items-start py-4 lg:mx-40 lg:py-18 lg:flex-nowrap text-center lg:text-start">
            <div className="basis-full px-5 lg:px-0 lg:basis-4/12">
              <div className="flex flex-col gap-y-8 w-full lg:w-96">
                <h2 className="text-3xl lg:text-6xl font-medium text-black">
                  Core Values
                </h2>
                <p className="text-warm-grey font-2xl">
                  Empowering lives through compassionate, authentic care that
                  honors diversity and builds trust.
                </p>
              </div>
            </div>
            <div className="basis-full lg:basis-7/12 flex flex-col">
              <div className="flex flex-col gap-6 border-b-0.5 border-light px-7 py-8">
                <div className="flex flex-col gap-2.5">
                  <h3 className="font-bold text-black text-xl lg:text-4xl">
                    Professional Etiquette
                  </h3>
                  <h4 className="font-semibold text-dark text-lg lg:text-2xl">
                    Respectful, ethical, and compassionate care for every
                    client.
                  </h4>
                </div>
                <p className="text-base lg:text-lg font-regular text-dark">
                  At Managed Wellness Centre, we believe that professional etiquette is
                  the foundation of effective mental health care. Our commitment
                  to acting respectfully, ethically, and compassionately towards
                  every client ensures that everyone who comes through our doors
                  feels heard, supported, and empowered to create positive
                  change in their lives.
                </p>
              </div>

              <div className="flex flex-col gap-6 border-b-0.5 border-light px-7 py-8">
                <div className="flex flex-col gap-2.5">
                  <h3 className="font-bold text-black text-xl lg:text-4xl">
                    Authenticity
                  </h3>
                  <h4 className="font-semibold text-dark text-lg lg:text-2xl">
                    Real people, real care.
                  </h4>
                </div>
                <p className="text-base lg:text-lg font-regular text-dark">
                  At Managed Wellness Centre, authenticity is key. We believe that
                  being clear about who we are and what we do is essential to
                  building trusting, meaningful relationships with our clients.
                  By being our authentic selves and providing real, personalized
                  care, we empower our clients to do the same.
                </p>
              </div>

              <div className="flex flex-col gap-6 border-b-0.5 border-light px-7 py-8">
                <div className="flex flex-col gap-2.5">
                  <h3 className="font-bold text-black text-xl lg:text-4xl">
                    Compassion
                  </h3>
                  <h4 className="font-semibold text-dark text-lg lg:text-2xl">
                    Enhancing lives, one person at a time.
                  </h4>
                </div>
                <p className="text-base lg:text-lg font-regular text-dark">
                  At Managed Wellness Centre, compassion is at the heart of everything
                  we do. We genuinely care for each patient and strive to
                  enhance the quality of their lives through customized care and
                  a supportive, empathetic approach. By taking the time to truly
                  understand each individual&apos;s unique needs and goals, we help
                  them achieve lasting wellness and a brighter future.
                </p>
              </div>

              <div className="flex flex-col gap-6 border-b-0.5 border-light px-7 py-8">
                <div className="flex flex-col gap-2.5">
                  <h3 className="font-bold text-black text-xl lg:text-4xl">
                    Integrity
                  </h3>
                  <h4 className="font-semibold text-dark text-lg lg:text-2xl">
                    Keeping our promises, building trust.
                  </h4>
                </div>
                <p className="text-base lg:text-lg font-regular text-dark">
                  At Managed Wellness Centre, integrity is a cornerstone of our
                  practice. We believe that keeping our word and following
                  through on our commitments is essential to building trust with
                  our clients. By upholding our values of honesty, transparency,
                  and accountability, we build lasting relationships with those
                  we serve.
                </p>
              </div>

              <div className="flex flex-col gap-6 border-b-0.5 border-light px-7 py-8">
                <div className="flex flex-col gap-2.5">
                  <h3 className="font-bold text-black text-xl lg:text-4xl">
                    Respect
                  </h3>
                  <h4 className="font-semibold text-dark text-lg lg:text-2xl">
                    Valuing diversity, honoring worth.
                  </h4>
                </div>
                <p className="text-base lg:text-lg font-regular text-dark">
                  At Managed Wellness Centre, we believe in the inherent worth of every
                  individual. Our commitment to respect means valuing and
                  honoring the diversity of our clients, employees, and
                  community. By creating a safe, inclusive environment where
                  everyone feels seen and heard, we empower our clients to reach
                  their full potential and live their best lives.
                </p>
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
