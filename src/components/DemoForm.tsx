"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle } from "lucide-react";
import type { Dict } from "@/i18n/types";

export default function DemoForm({
  dict,
  successMessage,
  successSub,
  errorMessage,
}: {
  dict: Dict["demo"]["form"];
  successMessage: string;
  successSub: string;
  errorMessage: string;
}) {
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    try {
      const res = await fetch("/api/demo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
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

  if (status === "success") {
    return (
      <div className="text-center py-8">
        <div className="flex justify-center mb-4">
          <CheckCircle size={48} className="text-green-500" />
        </div>
        <h3 className="text-lg font-semibold text-primary mb-2">
          {successMessage}
        </h3>
        <p className="text-sm text-text-secondary">{successSub}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-primary mb-1.5"
        >
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
        <label
          htmlFor="email"
          className="block text-sm font-medium text-primary mb-1.5"
        >
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
          <label
            htmlFor="organization"
            className="block text-sm font-medium text-primary mb-1.5"
          >
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
          <label
            htmlFor="role"
            className="block text-sm font-medium text-primary mb-1.5"
          >
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
        <label
          htmlFor="message"
          className="block text-sm font-medium text-primary mb-1.5"
        >
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

      {status === "error" && (
        <p className="text-sm text-red-600 text-center">{errorMessage}</p>
      )}

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
