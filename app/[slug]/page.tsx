// app/marketplace/[slug]/page.tsx (or app/[slug]/page.tsx)
import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import { Card } from "@/components/ui/Card";
import { Tag, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { ProductDetailClient } from "@/components/marketplace/ProductDetailClient";

// Match Next's generated PageProps type: params is a Promise
type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ProductDetailPage({ params }: PageProps) {
  // Await the params Promise (required by the generated types)
  const { slug } = await params;

  const product = await prisma.product.findUnique({
    where: { slug },
    include: {
      owner: true
    }
  });

  if (!product) return notFound();

  return (
    <div className="space-y-4">
      <Link
        href="/marketplace"
        className="inline-flex items-center gap-1 text-[11px] text-slate-300 hover:text-slate-100"
      >
        <ArrowLeft className="h-3 w-3" />
        Back to marketplace
      </Link>

      <Card>
        <div className="grid gap-4 md:grid-cols-[1.6fr,1.4fr]">
          {/* Image section */}
          <div className="relative rounded-xl bg-slate-950/70 p-3 ring-1 ring-slate-800">
            {/* TODO: replace placeholder with real image when wired up */}
            <div className="flex h-48 items-center justify-center rounded-lg bg-slate-900 text-xs text-slate-500">
              Item photo placeholder
            </div>
          </div>

          {/* Client-side detail + purchase actions */}
          <ProductDetailClient product={product} />
        </div>
      </Card>
    </div>
  );
}
