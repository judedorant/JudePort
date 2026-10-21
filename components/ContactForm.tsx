"use client";

import { FormEvent, useState } from "react";

type FormStatus = { type: "success" | "error"; message: string } | null;

export default function ContactForm() {
  const [status, setStatus] = useState<FormStatus>(null);
  const [isSending, setIsSending] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus(null);
    setIsSending(true);

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: String(formData.get("name") ?? "").trim(),
      email: String(formData.get("email") ?? "").trim(),
      subject: String(formData.get("subject") ?? "").trim(),
      message: String(formData.get("message") ?? "").trim(),
      website: String(formData.get("website") ?? "").trim(), // honeypot
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(result.message || "Unable to send your message.");
      }

      form.reset();
      setStatus({
        type: "success",
        message: result.message || "Thanks! Your message has been sent.",
      });
    } catch (error) {
      setStatus({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : "Something went wrong. Please try again.",
      });
    } finally {
      setIsSending(false);
    }
  }

  const fieldClass =
    "mt-2 w-full rounded-xl border border-slate-700 bg-slate-950/70 px-4 py-3 text-slate-100 outline-none transition placeholder:text-slate-500 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20";

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block text-sm text-slate-300">
          Name
          <input
            className={fieldClass}
            name="name"
            autoComplete="name"
            minLength={2}
            maxLength={100}
            required
            placeholder="Your name"
          />
        </label>
        <label className="block text-sm text-slate-300">
          Email
          <input
            className={fieldClass}
            name="email"
            type="email"
            autoComplete="email"
            maxLength={254}
            required
            placeholder="you@example.com"
          />
        </label>
      </div>

      <label className="block text-sm text-slate-300">
        Subject
        <input
          className={fieldClass}
          name="subject"
          minLength={3}
          maxLength={150}
          required
          placeholder="Project inquiry, job opportunity, etc."
        />
      </label>

      <label className="block text-sm text-slate-300">
        Message
        <textarea
          className={fieldClass}
          name="message"
          minLength={10}
          maxLength={5000}
          required
          rows={6}
          placeholder="Tell me a little about what you need..."
        />
      </label>

      <div className="hidden" aria-hidden="true">
        <label>
          Leave this field empty
          <input name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      {status && (
        <p
          role="status"
          className={`rounded-xl border p-4 text-sm ${
            status.type === "success"
              ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-300"
              : "border-red-500/30 bg-red-500/10 text-red-300"
          }`}
        >
          {status.message}
        </p>
      )}

      <button
        type="submit"
        disabled={isSending}
        className="rounded-xl bg-blue-500 px-6 py-3 font-semibold text-white transition hover:bg-blue-400 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isSending ? "Sending..." : "Send message"}
      </button>
      <p className="text-xs leading-5 text-slate-500">
        Your message is sent securely through the portfolio server. Do not
        include passwords or confidential information.
      </p>
    </form>
  );
}
