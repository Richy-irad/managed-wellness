import Link from "next/link";
import Head from "next/head";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const Contact = () => {
  return (
    <>
      <Head>
        <title>Contact us | Managed Wellness</title>
      </Head>
      <Navbar />
      <main className="font-josefin-sans">
        <div className="bg-white">
          <div className="lg:container lg:mx-auto">
            <div className="lg:px-20 py-20">
              <h1 className="text-end text-5xl">Get in Touch</h1>
              <div className="flex justify-between">
                <div className="basis-7/12">
                  <form className="flex flex-col gap-y-8 items-start">
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
                <div className="basis-4/12 flex flex-col gap-y-10 px-7 py-8">
                  <div className="flex flex-col gap-y-3 items-start">
                    <p className="font-bold text-3xl">Phone</p>
                    <p className="font-bold text-2xl">+254737965972</p>
                  </div>
                  <div className="flex flex-col gap-y-3 items-start">
                    <p className="font-bold text-3xl">E-mail</p>
                    <Link
                      href="mailto:info@managedwellness.com"
                      className="font-bold text-2xl hover:text-sage-green"
                    >
                      info@managedwellness.com
                    </Link>
                  </div>
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
