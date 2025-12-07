// app/marketplace/page.tsx

import { prisma } from "@/lib/prisma";
import { Sidebar } from "@/components/layout/Sidebar";
import { TopNavbar } from "@/components/layout/TopNavbar";
import { MarketplaceShell } from "@/components/marketplace/MarketplaceShell";

export const dynamic = "force-dynamic";

export default async function MarketplacePage() {

  const productsFromDb = await prisma.product.findMany({
    where: { isActive: true },
    orderBy: { createdAt: "desc" },
    include: {
      owner: {
        select: {
          fullName: true,
          program: true,
        },
      },
    },
  });

  // Normalize Prisma → UI-friendly safe product format
  const products = productsFromDb.map((p) => ({
    id: p.id,
    title: p.title,
    priceCents: p.priceCents,
    category: p.category,
    condition: p.condition,
    campus: p.campus,
    imageUrl: p.imageUrl ?? "", // <-- FIX (always string)
    isActive: p.isActive,

    ownerName: p.owner?.fullName ?? "IIT student",
    ownerProgram: p.owner?.program ?? "",
  }));

  return (
    <div className="flex min-h-screen bg-slate-950 text-slate-100">
      
      <Sidebar />

      <div className="flex min-h-screen flex-1 flex-col">
        <TopNavbar />

        <main className="flex-1 overflow-y-auto bg-slate-100 p-4 md:p-6">
          {/* FIXED: now matches MarketplaceProduct[] */}
          <MarketplaceShell initialProducts={products} />
        </main>
      </div>
    </div>
  );
}
