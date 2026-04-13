"use client";

import { useState, type FormEvent } from "react";
import type { Dict } from "@/i18n/types";

export default function DemoForm({ dict }: { dict: Dict["demo"]["form"] }) {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("https://formspree.io/f/xpwdgqkj", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-primary mb-1.5">
          {dict.name}
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          placeholder={dict.namePlaceholder}
          className="w-full px-4 py-2.5 text-sm border border-border-gray rounded-lg focus:outline-none focus:ring-2 focus:ring-teal/30 focus:border-teal transition-colors"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-primary mb-1.5">
          {dict.email}
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          placeholder={dict.emailPlaceholder}
          className="w-full px-4 py-2.5 text-sm border border-border-gray rounded-lg focus:outline-none focus:ring-2 focus:ring-teal/30 focus:border-teal transition-colors"
        />
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="organization" className="block text-sm font-medium text-primary mb-1.5">
            {dict.organization}
          </label>
          <input
            type="text"
            id="organization"
            name="organization"
            required
            placeholder={dict.orgPlaceholder}
            className="w-full px-4 py-2.5 text-sm border border-border-gray rounded-lg focus:outline-none focus:ring-2 focus:ring-teal/30 focus:border-teal transition-colors"
          />
        </div>
        <div>
          <label htmlFor="role" className="block text-sm font-medium text-primary mb-1.5">
            {dict.role}
          </label>
          <input
            type="text"
            id="role"
            name="role"
            placeholder={dict.rolePlaceholder}
            className="w-full px-4 py-2.5 text-sm border border-border-gray rounded-lg focus:outline-none focus:ring-2 focus:ring-teal/30 focus:border-teal transition-colors"
          />
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-primary mb-1.5">
          {dict.message}
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder={dict.messagePlaceholder}
          className="w-full px-4 py-2.5 text-sm border border-border-gray rounded-lg focus:outline-none focus:ring-2 focus:ring-teal/30 focus:border-teal transition-colors resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full px-6 py-3 text-sm font-medium text-white bg-primary hover:bg-primary-light rounded-lg transition-colors shadow-sm disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === "submitting" ? "..." : dict.submit}
      </button>
    </form>
  );
}
