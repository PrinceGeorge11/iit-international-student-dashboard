// app/marketplace/[id]/page.tsx

import { notFound } from "next/navigation";
import Image from "next/image";
import { prisma } from "@/lib/prisma";
import { Sidebar } from "@/components/layout/Sidebar";
import { TopNavbar } from "@/components/layout/TopNavbar";
import { Card } from "@/components/ui/Card";
import { PurchaseActions } from "@/components/marketplace/PurchaseActions";

export const dynamic = "force-dynamic";

// ⭐ Next.js 15 requires params to be a Promise.
export default async function MarketplaceProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  // ⭐ Must await params
  const { id } = await params;

  const product = await prisma.product.findUnique({
    where: { id },
    include: {
      owner: {
        select: {
          id: true,
          fullName: true,
          program: true,
        },
      },
    },
  });

  if (!product) return notFound();

  const uiProduct = {
    id: product.id,
    title: product.title,
    priceCents: product.priceCents,
    isActive: product.isActive,
    paymentOptions: product.paymentOptions,
    owner: product.owner
      ? {
          id: product.owner.id,
          fullName: product.owner.fullName ?? "IIT student",
          program: product.owner.program ?? null,
        }
      : {
          id: "",
          fullName: "IIT student",
          program: null,
        },
  };

  const displayPrice = (product.priceCents / 100).toFixed(2);

  return (
    <div className="flex min-h-screen bg-slate-950 text-slate-100">
      <Sidebar />

      <div className="flex flex-1 flex-col">
        <TopNavbar />

        <main className="flex-1 overflow-y-auto bg-slate-900 p-4 md:p-6">
          <div className="mx-auto max-w-5xl grid gap-4 md:grid-cols-[1.4fr,1fr]">
            <Card className="bg-slate-950/90 border-slate-800 text-slate-100">
              <div className="grid gap-4">
                <div className="relative h-64 md:h-72 rounded-xl overflow-hidden bg-slate-900">
                  {product.imageUrl ? (
                    <Image
                      src={product.imageUrl}
                      alt={product.title}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <div className="flex items-center justify-center h-full text-slate-500">
                      No image provided
                    </div>
                  )}
                </div>

                <div className="space-y-2 text-sm">
                  <h1 className="text-lg font-semibold">{product.title}</h1>
                  <p className="text-xl font-bold text-red-300">
                    ${displayPrice}
                  </p>

                  <div className="flex flex-wrap gap-2 text-[11px] text-slate-300">
                    <span className="rounded-full bg-slate-900 px-2 py-0.5 ring-1 ring-slate-700">
                      Category: {product.category}
                    </span>
                    <span className="rounded-full bg-slate-900 px-2 py-0.5 ring-1 ring-slate-700">
                      Condition: {product.condition}
                    </span>
                    <span className="rounded-full bg-slate-900 px-2 py-0.5 ring-1 ring-slate-700">
                      Campus: {product.campus}
                    </span>
                  </div>

                  <p className="text-[13px] leading-relaxed text-slate-200">
                    {product.description}
                  </p>
                </div>
              </div>
            </Card>

            <PurchaseActions product={uiProduct} />
          </div>
        </main>
      </div>
    </div>
  );
}
