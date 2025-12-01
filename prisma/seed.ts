// prisma/seed.ts
import { PrismaClient, Prisma } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Seeding IIT marketplace data...");

  // 1) Ensure a demo seller student exists
  const demoSeller = await prisma.student.upsert({
    where: { email: "demo.seller@iit.edu" },
    update: {},
    create: {
      fullName: "Demo Seller",
      email: "demo.seller@iit.edu",
      password: "$2a$10$demoHashedPasswordReplaceMe", // you can replace with a real bcrypt hash
      studentType: "graduate",
      program: "M.S. Cybersecurity",
      avatarUrl: null,
      isAdmin: false
    }
  });

  const ownerId = demoSeller.id;

  // 2) Product seeds – must include paymentOptions & ownerId
  const products: Prisma.ProductUncheckedCreateInput[] = [
    {
      // id is optional (cuid default)
      title: "CS Textbook Bundle (Algorithms & Data Structures)",
      slug: "cs-textbook-bundle",
      description:
        "Gently used textbooks for CS courses at IIT, including algorithms, data structures, and discrete math.",
      priceCents: 4500,
      category: "Textbooks",
      condition: "Good",
      imageUrl: "/marketplace-textbooks.jpg", // make sure this exists or replace with a valid URL
      campus: "Mies Campus",
      ownerId,
      isActive: true,
      soldAt: null,
      paymentOptions: "card,in_person",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: "Dorm Starter Kit (Lamp, Hangers, Organizer)",
      slug: "dorm-starter-kit",
      description:
        "Perfect starter kit for new international students: desk lamp, hangers, and storage organizer.",
      priceCents: 2500,
      category: "Dorm & Apartment",
      condition: "Like New",
      imageUrl: "/marketplace-dorm-kit.jpg",
      campus: "Mies Campus",
      ownerId,
      isActive: true,
      soldAt: null,
      paymentOptions: "card,in_person",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: "24\" Monitor for Study & Projects",
      slug: "study-monitor-24",
      description:
        "1080p monitor ideal for coding, design, and research work. Used for one semester.",
      priceCents: 7000,
      category: "Electronics",
      condition: "Like New",
      imageUrl: "/marketplace-monitor.jpg",
      campus: "Mies Campus",
      ownerId,
      isActive: true,
      soldAt: null,
      paymentOptions: "card,in_person",
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ];

  // 3) Upsert products by slug
  for (const p of products) {
    await prisma.product.upsert({
      where: { slug: p.slug },
      create: p,
      update: p
    });
  }

  console.log("✅ Seeding complete.");
}

main()
  .catch((e) => {
    console.error("❌ Seeding error:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
