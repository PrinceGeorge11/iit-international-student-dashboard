// app/(dashboard)/dashboard/page.tsx
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarDays, Store } from "lucide-react";

import { Card } from "@/components/ui/Card";
import { RealtimeGroupChat } from "@/components/chat/RealtimeGroupChat";
import { prisma } from "@/lib/prisma";

// Force server-side rendering so Prisma can access DATABASE_URL at runtime
export const dynamic = "force-dynamic";

// Feature modules (cards)
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

// Campus groups (simple grid)
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

// ✅ Allow imageUrl to be string | null (matches Prisma)
type DashboardProduct = {
  id: string;
  slug: string;
  title: string;
  priceCents: number;
  imageUrl: string | null;
  owner: {
    fullName: string;
  } | null;
};

export default async function DashboardPage() {
  // Latest active marketplace listings from Neon via Prisma
  const products: DashboardProduct[] = await prisma.product.findMany({
    where: { isActive: true },
    orderBy: { createdAt: "desc" },
    take: 4,
    select: {
      id: true,
      slug: true,
      title: true,
      priceCents: true,
      imageUrl: true,
      owner: { select: { fullName: true } },
    },
  });

  return (
    <div className="mx-auto max-w-6xl space-y-6">
      {/* HERO SECTION */}
      {/* ... keep your existing hero, feature cards, campus groups, chat, and marketplace JSX ... */}
      {/* The only change needed is dynamic rendering */}
      {/* Marketplace section */}
      <section className="grid gap-4 xl:grid-cols-[1.6fr,1.4fr]">
        {/* Real-time chat card */}
        <Card className="bg-slate-50 border-red-100 shadow-[0_16px_40px_rgba(15,23,42,0.22)]">
          <div className="mb-3">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-red-600">
              Group Chat
            </p>
            <h2 className="text-sm font-semibold text-slate-900">
              New Arrivals · Airport, housing, and first-week questions
            </h2>
            <p className="text-[11px] text-slate-700">
              Chat with other international students in real time. Messages show
              names and avatars from your dashboard profile.
            </p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white">
            <RealtimeGroupChat defaultRoomSlug="new-arrivals" />
          </div>
        </Card>

        {/* Marketplace highlight */}
        <Card className="bg-slate-50 border-red-100 shadow-[0_16px_40px_rgba(15,23,42,0.22)]">
          <div className="mb-3 flex items-center justify_between gap-2">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-red-600">
                Student Marketplace
              </p>
              <h2 className="text-sm font-semibold text-slate-900">
                Latest listings from IIT students.
              </h2>
              <p className="text-[11px] text-slate-700">
                Buy or sell textbooks, furniture, electronics, and more.
              </p>
            </div>
            <Link
              href="/marketplace/sell"
              className="hidden rounded_full bg-red-600 px-3 py-1.5 text-[11px] font-semibold text-white shadow-sm shadow-red-900/40 hover:bg-red-500 md:inline-flex"
            >
              Post a listing
            </Link>
          </div>

          {products.length === 0 ? (
            <p className="rounded-lg bg-slate-100 px-3 py-2 text-[11px] text-slate-700">
              No active listings yet. Be the first to{" "}
              <Link
                href="/marketplace/sell"
                className="font-semibold text-red-600 underline-offset-2 hover:underline"
              >
                post an item
              </Link>{" "}
              for sale.
            </p>
          ) : (
            <div className="grid gap-3 sm:grid-cols-2">
              {products.map((product) => {
                const price = (product.priceCents || 0) / 100;
                const sellerName = product.owner?.fullName ?? "IIT student";
                const imageSrc =
                  product.imageUrl && product.imageUrl.length > 0
                    ? product.imageUrl
                    : "/placeholder-listing.jpg";

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
