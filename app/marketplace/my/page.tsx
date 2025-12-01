// app/marketplace/my/page.tsx
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

import { prisma } from "@/lib/prisma";
import { getCurrentStudent } from "@/lib/auth";
import { Sidebar } from "@/components/layout/Sidebar";
import { TopNavbar } from "@/components/layout/TopNavbar";
import { Card } from "@/components/ui/Card";

export default async function MyMarketplacePage() {
  // 🔐 Require login
  const student = await getCurrentStudent();
  if (!student) {
    redirect("/login");
  }

  // 🧾 Fetch this student's listings
  const listings = await prisma.product.findMany({
    where: { ownerId: student.id },
    orderBy: { createdAt: "desc" }
  });

  return (
    <div className="flex min-h-screen bg-slate-950 text-slate-100">
      {/* Sidebar */}
      <Sidebar />

      {/* Right side: navbar + content */}
      <div className="flex min-h-screen flex-1 flex-col">
        <TopNavbar />

        <main className="flex-1 overflow-y-auto bg-slate-900 p-4 md:p-6">
          <div className="mx-auto max-w-6xl space-y-6">
            {/* Hero / header */}
            <section className="flex flex-col justify-between gap-3 md:flex-row md:items-center">
              <div className="space-y-1">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-red-300">
                  Marketplace · My Listings
                </p>
                <h1 className="text-xl font-semibold md:text-2xl">
                  Your student marketplace listings
                </h1>
                <p className="text-xs text-slate-300 md:text-sm">
                  Manage items you&apos;ve posted for other IIT students —
                  textbooks, dorm essentials, electronics, and more.
                </p>
              </div>
              <Link
                href="/marketplace/sell"
                className="inline-flex items-center justify-center rounded-full bg-red-600 px-4 py-2 text-[11px] font-semibold text-white shadow-sm shadow-red-900/40 hover:bg-red-500"
              >
                Post a new listing
              </Link>
            </section>

            {/* Listings section */}
            {listings.length === 0 ? (
              <Card className="bg-slate-950/80 text-slate-50">
                <p className="text-sm font-semibold">
                  You haven&apos;t posted any listings yet.
                </p>
                <p className="mt-1 text-xs text-slate-300">
                  Use the <span className="font-semibold">“Post a new listing”</span>{" "}
                  button above to sell textbooks, dorm items, or electronics to
                  other IIT students.
                </p>
              </Card>
            ) : (
              <section className="space-y-3">
                <p className="text-[11px] text-slate-400">
                  Showing{" "}
                  <span className="font-semibold text-slate-100">
                    {listings.length}
                  </span>{" "}
                  listing{listings.length === 1 ? "" : "s"} you&apos;ve posted.
                </p>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {listings.map((product) => (
                    <Card
                      key={product.id}
                      className="flex flex-col overflow-hidden bg-slate-950/90 p-0 ring-1 ring-slate-800"
                    >
                      {/* Image */}
                      <div className="relative h-36 w-full overflow-hidden bg-slate-900">
                        <Image
                          src={product.imageUrl}
                          alt={product.title}
                          fill
                          className="object-cover transition-transform duration-300 hover:scale-105"
                        />
                        {!product.isActive && (
                          <span className="absolute left-2 top-2 rounded-full bg-red-600 px-2 py-0.5 text-[10px] font-semibold text-white shadow-sm shadow-red-900/50">
                            Sold / Inactive
                          </span>
                        )}
                      </div>

                      {/* Content */}
                      <div className="flex flex-1 flex-col gap-1 p-3 text-[11px]">
                        <p className="line-clamp-1 text-xs font-semibold text-slate-50">
                          {product.title}
                        </p>
                        <p className="text-[10px] text-slate-400">
                          {product.category} · {product.condition}
                        </p>
                        <p className="mt-1 text-sm font-semibold text-emerald-300">
                          ${(product.priceCents / 100).toFixed(2)}
                        </p>
                        <p className="mt-auto text-[10px] text-slate-500">
                          Campus: {product.campus}
                        </p>

                        <div className="mt-2 flex items-center justify-between gap-2">
                          <Link
                            href={`/marketplace/${product.id}`}
                            className="inline-flex flex-1 items-center justify-center rounded-lg bg-slate-800 px-2 py-1.5 text-[11px] font-semibold text-slate-50 hover:bg-slate-700"
                          >
                            View / Manage
                          </Link>
                          {!product.isActive && (
                            <span className="rounded-lg bg-slate-900 px-2 py-1 text-[10px] text-slate-300">
                              Sold
                            </span>
                          )}
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </section>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
