// app/(dashboard)/admin/announcements/page.tsx
import Link from "next/link";
import { redirect } from "next/navigation";
import { CalendarDays, Megaphone, PlusCircle } from "lucide-react";

import { prisma } from "@/lib/prisma";
import { getCurrentStudent } from "@/lib/auth";
import { Sidebar } from "@/components/layout/Sidebar";
import { TopNavbar } from "@/components/layout/TopNavbar";
import { Card } from "@/components/ui/Card";

export const dynamic = "force-dynamic";

// FIXED TYPE: manual type matching the include
type AnnouncementWithAuthor = {
  id: string;
  title: string;
  body: string;
  createdAt: Date;
  createdById: string;
  createdBy: {
    id: string;
    fullName: string | null;
    email: string;
  };
};

export default async function AdminAnnouncementsPage() {
  // Require admin
  const student = await getCurrentStudent();
  if (!student || !student.isAdmin) {
    redirect("/dashboard");
  }

  // FIXED: include author so createdBy exists
  const announcements: AnnouncementWithAuthor[] =
    await prisma.announcement.findMany({
      orderBy: { createdAt: "desc" },
      include: {
        createdBy: {
          select: {
            id: true,
            fullName: true,
            email: true,
          },
        },
      },
    });

  return (
    <div className="flex min-h-screen bg-slate-950 text-slate-100">
      {/* Left sidebar */}
      <Sidebar />

      {/* Right side */}
      <div className="flex min-h-screen flex-1 flex-col">
        <TopNavbar />

        <main className="flex-1 overflow-y-auto bg-slate-900 p-4 md:p-6">
          <div className="mx-auto max-w-5xl space-y-6">
            {/* Header */}
            <section className="grid gap-4 md:grid-cols-[1.7fr,1.3fr]">
              <Card className="bg-slate-950/90 border-red-500/30 shadow-[0_18px_40px_rgba(127,17,17,0.35)]">
                <div className="flex items-start gap-3">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-red-600/25 text-red-200 ring-1 ring-red-500/50">
                    <Megaphone className="h-4 w-4" />
                  </span>
                  <div className="space-y-1">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-red-300">
                      Admin · Announcements
                    </p>
                    <h1 className="text-lg font-semibold text-slate-50 md:text-xl">
                      Broadcast updates to IIT international students.
                    </h1>
                    <p className="text-[11px] text-slate-300">
                      Use this panel to post important messages about arrivals,
                      immigration, academic deadlines, housing, and campus life.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="bg-slate-950/90 border-slate-700/80">
                <div className="flex h-full flex-col justify-between gap-3">
                  <div className="flex items-start gap-2">
                    <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-slate-900 text-slate-200 ring-1 ring-slate-600">
                      <CalendarDays className="h-4 w-4" />
                    </span>
                    <div>
                      <h2 className="text-sm font-semibold text-slate-50">
                        How announcements appear
                      </h2>
                      <p className="text-[11px] text-slate-300">
                        Each announcement shows the title, body, timestamp, and
                        your name as the author.
                      </p>
                    </div>
                  </div>

                  <Link
                    href="/admin/announcements/new"
                    className="inline-flex items-center justify-center gap-1 rounded-full bg-red-600 px-3 py-1.5 text-[11px] font-semibold text-white shadow-sm shadow-red-900/40 hover:bg-red-500"
                  >
                    <PlusCircle className="h-3.5 w-3.5" />
                    Create new announcement
                  </Link>
                </div>
              </Card>
            </section>

            {/* Announcements list */}
            <Card className="bg-slate-950/90 border-slate-700/80">
              <header className="mb-3 flex items-center justify-between gap-2">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-red-300">
                    Recent announcements
                  </p>
                  <p className="text-[11px] text-slate-300">
                    A reverse-chronological list of the messages you&apos;ve posted.
                  </p>
                </div>
                <span className="rounded-full bg-slate-900 px-2 py-1 text-[10px] text-slate-300">
                  Total: {announcements.length}
                </span>
              </header>

              {announcements.length === 0 ? (
                <p className="rounded-lg bg-slate-900/80 px-3 py-2 text-[11px] text-slate-300">
                  No announcements yet.
                </p>
              ) : (
                <ul className="space-y-3 text-[11px]">
                  {announcements.map((a) => (
                    <li
                      key={a.id}
                      className="rounded-xl border border-slate-800 bg-slate-950/80 p-3"
                    >
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <h3 className="text-[12px] font-semibold text-slate-50">
                            {a.title}
                          </h3>
                          <p className="mt-1 whitespace-pre-line text-[11px] text-slate-200">
                            {a.body}
                          </p>
                        </div>

                        <div className="text-right text-[10px] text-slate-400">
                          <p>
                            {new Date(a.createdAt).toLocaleDateString("en-US", {
                              month: "short",
                              day: "numeric",
                              year: "numeric",
                            })}
                          </p>

                          {/* createdBy is guaranteed now */}
                          <p className="mt-0.5">
                            By {a.createdBy.fullName || a.createdBy.email}
                          </p>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
}
