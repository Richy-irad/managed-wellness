"use client";

import { useState } from "react";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <p className="text-sm text-sage-green font-semibold font-josefin-sans">
        Thank you for subscribing! We&apos;ll be in touch.
      </p>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center gap-x-1.5 bg-surface border border-cool-grey rounded-full p-1.5 max-w-sm"
    >
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Your email address"
        required
        className="flex-1 min-w-0 px-3.5 py-2 text-sm bg-transparent text-dark placeholder:text-light focus:outline-none"
      />
      <button
        type="submit"
        className="px-5 py-2.5 rounded-full bg-primary text-surface text-sm font-semibold shrink-0 hover:bg-dark transition-colors"
      >
        subscribe
      </button>
    </form>
  );
}
