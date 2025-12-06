// app/(dashboard)/dashboard/page.tsx
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarDays, Store } from "lucide-react";

import { Card } from "@/components/ui/Card";
import { RealtimeGroupChat } from "@/components/chat/RealtimeGroupChat";
import { prisma } from "@/lib/prisma";

// 🧾 Feature modules
const featureCards = [
  {
    id: "pre-arrival",
    title: "Pre-Arrival Preparation",
    href: "/pre-arrival",
    description:
      "Visa prep, housing decisions, and required documents before you land in Chicago.",
    image: "/pre-arrival.jpg",
    badge: "Start Here",
  },
  {
    id: "campus-navigation",
    title: "Campus Navigation",
    href: "/campus-navigation",
    description:
      "Maps and routes to classrooms, labs, MTCC, Galvin Library, and more.",
    image: "/campus-navigation.jpg",
    badge: "On Campus",
  },
  {
    id: "academic-integration",
    title: "Academic Integration",
    href: "/academic-integration",
    description:
      "Plan courses, understand milestones, and connect with advisers.",
    image: "/academic-integration.jpg",
    badge: "Academics",
  },
  {
    id: "social-networking",
    title: "Social Networking",
    href: "/social-networking",
    description:
      "Join student orgs, cultural groups, and peer communities at IIT.",
    image: "/social-networking.jpg",
    badge: "Community",
  },
];

// 👥 Campus groups
const campusGroups = [
  {
    name: "International Student Welcome Circle",
    focus: "Arrival support · Airport pickup coordination",
    members: "120+ students",
  },
  {
    name: "Grad Research & Tech Meetups",
    focus: "CS, Cybersecurity, AI, Data Science, and more",
    members: "85+ students",
  },
  {
    name: "Cultural Fusion Nights @ IIT",
    focus: "Food, music, and cultural exchange events",
    members: "200+ students",
  },
  {
    name: "Housing & Roommate Connect",
    focus: "Find roommates and off-campus housing tips",
    members: "150+ students",
  },
  {
    name: "Wellness & Balance Community",
    focus: "Mental health, fitness, and wellbeing",
    members: "90+ students",
  },
];

// 🔎 Product type with owner included
type ProductWithOwner = Awaited<
  ReturnType<typeof prisma.product.findMany>
>[number];

export default async function DashboardPage() {
  // Fetch latest active marketplace listings with owner relation
  const products: ProductWithOwner[] = await prisma.product.findMany({
    where: { isActive: true },
    orderBy: { createdAt: "desc" },
    take: 4,
    include: {
      owner: true, // important! this gives full Student object
    },
  });

  return (
    <div className="mx-auto max-w-6xl space-y-6">
      {/* HERO SECTION */}
      <section className="grid gap-4 lg:grid-cols-[1.7fr,1.3fr]">
        <Card className="bg-slate-50/95 border-red-100 shadow-[0_14px_32px_rgba(127,17,17,0.18)]">
          <div className="space-y-2">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-red-600">
              iStudentsHub · IIT International
            </p>
            <h1 className="text-xl font-semibold text-slate-900 md:text-2xl">
              One dashboard for your IIT international student journey.
            </h1>
            <p className="text-[12px] leading-relaxed text-slate-700">
              Use this space to prepare for arrival, navigate campus, register
              for classes, connect with peers, and trade items through the
              student marketplace.
            </p>
          </div>
        </Card>

        <Card className="bg-slate-50/95 border-red-100 shadow-[0_14px_32px_rgba(127,17,17,0.22)]">
          <div className="flex h-full flex-col justify-between gap-3">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-red-600">
                Quick Overview
              </p>
              <h2 className="text-sm font-semibold text-slate-900">
                What this dashboard gives you
              </h2>
            </div>
            <Link
              href="/pre-arrival"
              className="inline-flex items-center justify-center rounded-full bg-red-600 px-3 py-1.5 text-[11px] font-semibold text-white shadow-sm shadow-red-900/40 hover:bg-red-500"
            >
              Go to Pre-Arrival
              <ArrowRight className="ml-1 h-3 w-3" />
            </Link>
          </div>
        </Card>
      </section>

      {/* FEATURE MODULES */}
      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {featureCards.map((card) => (
          <Card
            key={card.id}
            className="flex flex-col overflow-hidden bg-slate-50 p-0 border-red-100 shadow-[0_14px_32px_rgba(15,23,42,0.22)]"
          >
            <div className="relative h-24 w-full overflow-hidden">
              <Image
                src={card.image}
                alt={card.title}
                fill
                className="object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="flex flex-1 flex-col gap-2 p-3">
              <span className="inline-flex items-center gap-1 rounded-full bg-slate-900 px-2 py-0.5 text-[9px] font-medium text-slate-100 ring-1 ring-slate-700">
                {card.badge}
              </span>
              <h2 className="text-[13px] font-semibold text-slate-900">
                {card.title}
              </h2>
              <p className="flex-1 text-[11px] leading-snug text-slate-700">
                {card.description}
              </p>
              <Link
                href={card.href}
                className="inline-flex items-center gap-1 text-[11px] font-semibold text-red-600 hover:text-red-500"
              >
                Open module
                <ArrowRight className="h-3 w-3" />
              </Link>
            </div>
          </Card>
        ))}
      </section>

      {/* CAMPUS GROUPS */}
      <section className="grid gap-4 lg:grid-cols-2">
        <Card className="bg-slate-50 border-red-100 shadow-[0_14px_32px_rgba(15,23,42,0.2)]">
          <div className="grid gap-2 sm:grid-cols-2">
            {campusGroups.map((group) => (
              <div
                key={group.name}
                className="rounded-xl bg-white p-3 ring-1 ring-slate-200"
              >
                <p className="text-[11px] font-semibold text-slate-900">
                  {group.name}
                </p>
                <p className="mt-1 text-[10px] text-slate-700">{group.focus}</p>
                <p className="mt-1 text-[10px] font-semibold text-red-700">
                  {group.members}
                </p>
              </div>
            ))}
          </div>
        </Card>
      </section>

      {/* GROUP CHAT + MARKETPLACE */}
      <section className="grid gap-4 xl:grid-cols-[1.6fr,1.4fr]">
        {/* Group Chat */}
        <Card className="bg-slate-50 border-red-100 shadow-[0_16px_40px_rgba(15,23,42,0.22)]">
          <div className="rounded-xl border border-slate-200 bg-white">
            <RealtimeGroupChat defaultRoomSlug="new-arrivals" />
          </div>
        </Card>

        {/* Marketplace */}
        <Card className="bg-slate-50 border-red-100 shadow-[0_16px_40px_rgba(15,23,42,0.22)]">
          {products.length === 0 ? (
            <p className="rounded-lg bg-slate-100 px-3 py-2 text-[11px] text-slate-700">
              No active listings yet. Be the first to{" "}
              <Link
                href="/marketplace/sell"
                className="font-semibold text-red-600 underline-offset-2 hover:underline"
              >
                post an item
              </Link>
              .
            </p>
          ) : (
            <div className="grid gap-3 sm:grid-cols-2">
              {products.map((product) => {
                const price = (product.priceCents || 0) / 100;
                const sellerName = product.ownerId?.fullName || "IIT student";
                const imageSrc =
                  product.imageUrl && product.imageUrl.length > 0
                    ? product.imageUrl
                    : "/placeholder-market.jpg";

                return (
                  <Link
                    key={product.id}
                    href={`/marketplace/${product.slug}`}
                    className="group overflow-hidden rounded-xl bg-white ring-1 ring-slate-200 transition hover:-translate-y-0.5 hover:ring-red-500/60"
                  >
                    <div className="relative h-24 w-full overflow-hidden">
                      <Image
                        src={imageSrc}
                        alt={product.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                      <p className="absolute bottom-1 left-2 right-2 truncate text-[11px] font-semibold text-slate-50 drop-shadow">
                        {product.title}
                      </p>
                    </div>
                    <div className="space-y-1 p-2.5">
                      <p className="text-[11px] font-semibold text-slate-900">
                        ${price.toFixed(2)}
                      </p>
                      <p className="truncate text-[10px] text-slate-700">
                        Seller: {sellerName}
                      </p>
                    </div>
                  </Link>
                );
              })}
            </div>
          )}

          <div className="mt-3 flex items-center justify-between text-[11px] text-slate-700">
            <Link
              href="/marketplace"
              className="inline-flex items-center gap-1 font-semibold text-red-600 hover:text-red-500"
            >
              View full marketplace
              <Store className="h-3 w-3" />
            </Link>
            <Link
              href="/marketplace/sell"
              className="inline-flex items-center gap-1 rounded-full bg-red-600 px-3 py-1.5 font-semibold text-white shadow-sm shadow-red-900/40 hover:bg-red-500 md:hidden"
            >
              Post a listing
            </Link>
          </div>
        </Card>
      </section>
    </div>
  );
}
