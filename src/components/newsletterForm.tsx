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
    <form onSubmit={handleSubmit} className="flex gap-x-2">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Your email address"
        required
        className="flex-1 min-w-0 px-4 py-2.5 rounded-full border border-cool-grey text-sm bg-surface text-dark placeholder:text-light focus:outline-none focus:border-deep-blue"
      />
      <button
        type="submit"
        className="px-5 py-2.5 rounded-full bg-muted-yellow text-primary text-sm font-bold shrink-0 hover:bg-accent-dark transition-colors"
      >
        Subscribe
      </button>
    </form>
  );
}
