import Link from "next/link";
import Head from "next/head";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const Contact = () => {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Contact Managed Wellness for compassionate support, guidance, and confidential consultations. Start your journey towards improved mental health and well-being today."
        />
        <meta
          name="keywords"
          content="Mental health, Counseling, Therapy, Trauma counseling, Trauma counseling, Sex and gender-based violence counseling, Loss and grief counseling, Couples therapy, Sex therapy, Pre-marital counseling, Coping skills, Communication skills, Emotional intimacy, Sexual health, Intimacy issues, Trauma recovery, Post-traumatic stress disorder (PTSD), Grief support, Relationship satisfaction, Mental health awareness, Healthy relationships"
        />
        <title>Contact Us | Managed Wellness</title>
        <meta property="og:title" content="Contact Us | Managed Wellness" />
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
                  <form className="flex flex-col gap-y-8 items-center lg:items-start">
                    <div className="flex flex-col gap-y-6 w-full">
                      {/* first and last names */}
                      <div className="flex gap-x-6">
                        <div className="basis-1/2 space-y-3">
                          <label htmlFor="firstName" className="block">
                            First Name
                          </label>
                          <input
                            type="text"
                            className="border-0.5 border-light rounded-md block w-full px-2.5 py-3.5"
                            name="firstName"
                            placeholder="First Name"
                          />
                        </div>
                        <div className="basis-1/2 space-y-3">
                          <label htmlFor="lastName" className="block">
                            Last Name
                          </label>
                          <input
                            type="text"
                            className="border-0.5 border-light rounded-md block w-full px-2.5 py-3.5"
                            name="lastName"
                            placeholder="First Name"
                          />
                        </div>
                      </div>

                      {/* email */}
                      <div className="space-y-3">
                        <label htmlFor="email ">Email</label>
                        <input
                          type="email"
                          className="border-0.5 border-light rounded-md block w-full px-2.5 py-3.5"
                          name="email"
                          placeholder="e.g. john.doe@example.com"
                        />
                      </div>

                      {/* subject */}
                      <div className="space-y-3">
                        <label htmlFor="subject ">Subject</label>
                        <input
                          type="text"
                          className="border-0.5 border-light rounded-md block w-full px-2.5 py-3.5"
                          name="subject"
                          placeholder="Subject"
                        />
                      </div>

                      {/* message */}
                      <div className="space-y-3">
                        <label htmlFor="message ">Message</label>
                        <textarea
                          className="border-0.5 border-light rounded-md block w-full px-2.5 py-3.5"
                          name="message"
                          rows={4}
                          placeholder="Write your message here"
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="bg-light-blue text-deep-blue font-semibold px-4 py-5 rounded-md"
                    >
                      Send Message
                    </button>
                  </form>
                </div>
                <div className="basis-full gap-x-10 gap-y-10 px-7 py-8 items-center justify-center flex flex-col md:flex-row lg:flex-col md:items-start md:justify-start lg:basis-4/12">
                  <div className="flex flex-col gap-y-3 items-start lg:items-end text-start lg:text-end w-full">
                    <p className="font-semibold text-2xl lg:text-3xl">Phone</p>
                    <p className="font-regular text-xl lg:text-2xl">+254737965972</p>
                  </div>
                  <div className="flex flex-col gap-y-3 items-start lg:items-end text-start lg:text-end w-full">
                    <p className="font-semibold text-2xl lg:text-3xl">E-mail</p>
                    <Link
                      href="mailto:info@managedwellness.com"
                      className="font-regular text-xl lg:text-2xl hover:text-sage-green"
                    >
                      info@managedwellness.com
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
