"use client";

import { useState } from "react";
import {
  Check,
  Copy,
  Heart,
  Landmark,
  ShieldCheck,
  ChevronDown,
} from "lucide-react";

const givingOptions = [
  {
    id: "offering",
    label: "Offering",
    description: "Give as an expression of gratitude and worship.",
  },
  {
    id: "tithe",
    label: "Tithe",
    description: "Give faithfully as part of your worship.",
  },
  {
    id: "building",
    label: "Building Projects",
    description: "Support the development of God's house and our spaces.",
  },
];

const expressions = [
  "Port Harcourt Expression",
  "Lagos Expression",
  "Abuja Expression",
  "Ibadan Expression",
  "International Expression",
];

const accounts = [
  {
    bank: "First Bank",
    accountName: "Ignite Outreach",
    accountNumber: "0123456789",
  },
  {
    bank: "GTBank",
    accountName: "Ignite Outreach",
    accountNumber: "0123456789",
  },
  {
    bank: "Access Bank",
    accountName: "Ignite Outreach",
    accountNumber: "0123456789",
  },
];

export default function GivePage() {
  const [givingType, setGivingType] = useState("offering");
  const [expression, setExpression] = useState("");
  const [copiedAccount, setCopiedAccount] = useState("");

  async function copyAccount(accountNumber) {
    try {
      await navigator.clipboard.writeText(accountNumber);

      setCopiedAccount(accountNumber);

      setTimeout(() => {
        setCopiedAccount("");
      }, 2000);
    } catch {
      // Clipboard may be unavailable in some browsers.
    }
  }

  const selectedGiving = givingOptions.find(
    (option) => option.id === givingType
  );

  return (
    <main className="bg-cream">
      {/* HERO */}
        <section className="relative isolate overflow-hidden px-4 py-24 sm:px-6 md:py-32 lg:px-8">
        {/* Background image */}
        <div
            aria-hidden="true"
            className="absolute inset-0 -z-20 bg-cover bg-center"
            style={{
            backgroundImage: "url('/images/give.webp')",
            }}
        />

        {/* Dark plum overlay */}
        <div
            aria-hidden="true"
            className="absolute inset-0 -z-10 bg-plum/80"
        />

        {/* Soft gradient for depth */}
        <div
            aria-hidden="true"
            className="absolute inset-0 -z-10 bg-gradient-to-r from-plum/75 via-plum/55 to-plum/35"
        />

        {/* Subtle orchid glow */}
        <div
            aria-hidden="true"
            className="pointer-events-none absolute -left-32 -top-32 -z-10 h-96 w-96 rounded-full bg-orchid/20 blur-3xl"
        />

        <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-40 right-0 -z-10 h-96 w-96 rounded-full bg-gold/10 blur-3xl"
        />

        <div className="relative mx-auto max-w-4xl text-center">
            <div className="flex items-center justify-center gap-3">
            <span className="inline-block rounded-full border border-gold bg-white/50 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-plum">
                Give
            </span>
            </div>

            <h1 className="mt-6 font-heading text-5xl font-semibold leading-tight text-white sm:text-6xl md:text-7xl">
            Give with <span className="text-orchid">Purpose.</span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-white/75 sm:text-base">
            Your generosity helps us create spaces, reach communities,
            support people and advance the work God has entrusted to us.
            </p>
        </div>
        </section>

      {/* =========================================================
          GIVING CARD
      ========================================================= */}
      <section className="relative px-4 py-16 sm:px-6 md:py-24 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="overflow-hidden rounded-[2rem] border border-plum/10 bg-white shadow-[0_25px_80px_rgba(62,4,53,0.10)]">
            {/* =====================================================
                GIVING OPTIONS
            ===================================================== */}
            <div className="border-b border-plum/10 p-5 sm:p-7 md:p-8">
              <div className="mb-6">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orchid">
                  Give towards
                </p>

                <h2 className="mt-2 font-heading text-2xl font-semibold text-plum sm:text-3xl">
                  Choose a giving option
                </h2>
              </div>

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                {givingOptions.map((option) => {
                  const active = givingType === option.id;

                  return (
                    <button
                      key={option.id}
                      type="button"
                      onClick={() => setGivingType(option.id)}
                      className={`
                        group rounded-2xl border p-4 text-left
                        transition-all duration-300
                        ${
                          active
                            ? "border-plum bg-plum text-white shadow-lg shadow-plum/15"
                            : "border-plum/10 bg-cream text-plum hover:border-orchid/30 hover:bg-lilac"
                        }
                      `}
                    >
                      <div className="flex items-center justify-between gap-3">
                        <span className="font-semibold">
                          {option.label}
                        </span>

                        <span
                          className={`
                            flex h-6 w-6 items-center justify-center rounded-full
                            ${
                              active
                                ? "bg-gold text-plum"
                                : "bg-lilac text-orchid"
                            }
                          `}
                        >
                          {active && <Check className="h-3.5 w-3.5" />}
                        </span>
                      </div>

                      <p
                        className={`
                          mt-2 text-xs leading-5
                          ${
                            active
                              ? "text-white/65"
                              : "text-muted"
                          }
                        `}
                      >
                        {option.description}
                      </p>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* =====================================================
                EXPRESSION
            ===================================================== */}
            <div className="border-b border-plum/10 p-5 sm:p-7 md:p-8">
              <div className="max-w-xl">
                <label
                  htmlFor="expression"
                  className="text-xs font-semibold uppercase tracking-[0.2em] text-orchid"
                >
                  Give to an expression
                </label>

                <p className="mt-2 text-sm leading-6 text-muted">
                  Select the expression you would like your giving
                  associated with.
                </p>

                <div className="relative mt-4">
                  <select
                    id="expression"
                    value={expression}
                    onChange={(event) =>
                      setExpression(event.target.value)
                    }
                    className="w-full appearance-none rounded-2xl border border-plum/10 bg-cream px-5 py-4 pr-12 text-sm font-medium text-plum outline-none transition focus:border-orchid focus:ring-2 focus:ring-orchid/10"
                  >
                    <option value="">
                      Select an expression
                    </option>

                    {expressions.map((item) => (
                      <option key={item} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>

                  <ChevronDown className="pointer-events-none absolute right-5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" />
                </div>
              </div>
            </div>

            {/* =====================================================
                SELECTED GIVING SUMMARY
            ===================================================== */}
            <div className="border-b border-plum/10 bg-lilac/40 px-5 py-7 sm:px-7 md:px-8">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-plum text-gold">
                  <Heart className="h-5 w-5 fill-current" />
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-orchid">
                    Your giving
                  </p>

                  <h3 className="mt-1 font-heading text-2xl font-semibold text-plum">
                    {selectedGiving?.label}
                  </h3>

                  {expression ? (
                    <p className="mt-1 text-sm text-muted">
                      For {expression}
                    </p>
                  ) : (
                    <p className="mt-1 text-sm text-muted">
                      Select an expression above if applicable.
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* =====================================================
                BANK TRANSFER
            ===================================================== */}
            <div className="p-5 sm:p-7 md:p-8">
              <div className="mb-7">
                <div className="flex items-center gap-3">
                  <span className="h-px w-8 bg-gold" />

                  <span className="text-xs font-semibold uppercase tracking-[0.22em] text-plum">
                    Bank Transfer
                  </span>
                </div>

                <h3 className="mt-3 font-heading text-3xl font-semibold text-plum sm:text-4xl">
                  Make your <span className="text-orchid">giving</span>
                  {" "}transfer
                </h3>

                <p className="mt-3 max-w-2xl text-sm leading-7 text-muted">
                  Use any of the accounts below to complete your
                  {selectedGiving?.label.toLowerCase()} giving.
                </p>
              </div>

              {/* Account Cards */}
              <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                {accounts.map((account) => {
                  const copied =
                    copiedAccount === account.accountNumber;

                  return (
                    <div
                      key={account.bank}
                      className="group relative overflow-hidden rounded-[1.5rem] border border-plum/10 bg-cream p-5 transition-all duration-300 hover:-translate-y-1 hover:border-orchid/20 hover:shadow-xl hover:shadow-plum/10"
                    >
                      {/* Decorative circle */}
                      <div
                        aria-hidden="true"
                        className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-lilac transition-transform duration-500 group-hover:scale-125"
                      />

                      <div className="relative">
                        {/* Bank Icon */}
                        <div className="flex items-center justify-between">
                          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-plum text-gold">
                            <Landmark className="h-5 w-5" />
                          </div>

                          <span className="rounded-full bg-white px-3 py-1 text-[0.6rem] font-semibold uppercase tracking-[0.15em] text-plum/50">
                            Bank
                          </span>
                        </div>

                        {/* Bank Name */}
                        <p className="mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-orchid">
                          {account.bank}
                        </p>

                        {/* Account Name */}
                        <p className="mt-2 text-sm text-muted">
                          {account.accountName}
                        </p>

                        {/* Account Number */}
                        <div className="mt-5 rounded-2xl bg-white p-4">
                          <p className="text-[0.6rem] font-semibold uppercase tracking-[0.15em] text-muted">
                            Account Number
                          </p>

                          <div className="mt-1 flex items-center justify-between gap-3">
                            <p className="font-heading text-xl font-semibold tracking-wide text-plum sm:text-2xl">
                              {account.accountNumber}
                            </p>

                            <button
                              type="button"
                              onClick={() =>
                                copyAccount(
                                  account.accountNumber
                                )
                              }
                              aria-label={`Copy ${account.bank} account number`}
                              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-cream text-plum transition-all duration-300 hover:bg-plum hover:text-white"
                            >
                              {copied ? (
                                <Check className="h-4 w-4" />
                              ) : (
                                <Copy className="h-4 w-4" />
                              )}
                            </button>
                          </div>

                          {copied && (
                            <p className="mt-2 text-xs font-medium text-orchid">
                              Account number copied.
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* =================================================
                  SECURITY / TRUST NOTE
              ================================================= */}
              <div className="mt-8 flex items-start gap-4 rounded-2xl border border-gold/20 bg-lilac/30 p-5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-orchid">
                  <ShieldCheck className="h-5 w-5" />
                </div>

                <div>
                  <h4 className="font-semibold text-plum">
                    Giving with confidence
                  </h4>

                  <p className="mt-1 text-sm leading-6 text-muted">
                    Please confirm the account name and bank details
                    before completing your transfer. If you need
                    assistance, contact the church office.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}