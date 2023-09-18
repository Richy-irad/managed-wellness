import Link from "next/link";
import Head from "next/head";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import ContactForm from "@/components/contactForm";

const Contact = () => {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Contact Managed Wellness Centre for compassionate support, guidance, and confidential consultations. Start your journey towards improved mental health and well-being today."
        />
        <meta
          name="keywords"
          content="Mental health, Counseling, Therapy, Trauma counseling, Trauma counseling, Sex and gender-based violence counseling, Loss and grief counseling, Couples therapy, Sex therapy, Pre-marital counseling, Coping skills, Communication skills, Emotional intimacy, Sexual health, Intimacy issues, Trauma recovery, Post-traumatic stress disorder (PTSD), Grief support, Relationship satisfaction, Mental health awareness, Healthy relationships"
        />
        <title>Contact Us | Managed Wellness Centre</title>
        <meta
          property="og:title"
          content="Contact Us | Managed Wellness Centre"
        />
        <meta property="og:type" content="website" />
      </Head>
      <Navbar />
      <main className="font-josefin-sans">
        <div className="bg-white">
          <div className="px-5 lg:mx-40 py-20 flex flex-col gap-y-8">
            <h1 className="text-center lg:text-end text-3xl md:text-4xl lg:text-6xl font-bold">
              Get in Touch
            </h1>
            <div className="flex justify-between flex-wrap gap-y-4">
              <div className="basis-full lg:basis-7/12">
                <ContactForm />
              </div>
              <div className="basis-full gap-x-10 gap-y-10 px-7 py-8 items-center justify-center flex flex-col md:flex-row lg:flex-col md:items-start md:justify-start lg:basis-4/12">
                <div className="flex flex-col gap-y-3 items-start lg:items-end text-start lg:text-end w-full">
                  <p className="font-semibold text-2xl lg:text-3xl">Phone</p>
                  <p className="font-regular text-xl">
                    +254&nbsp;722&nbsp;720&nbsp;072
                  </p>
                  <p className="font-regular text-xl">
                    +254&nbsp;780&nbsp;838&nbsp;333
                  </p>
                </div>
                <div className="flex flex-col gap-y-3 items-start lg:items-end text-start lg:text-end w-full">
                  <p className="font-semibold text-2xl lg:text-3xl">E-mail</p>
                  <Link
                    href="mailto:info@managedwellness.com"
                    className="font-regular text-xl lg:text-2xl hover:text-sage-green"
                  >
                    info@managedwellness.fit
                  </Link>
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

export default Contact;
