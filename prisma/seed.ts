/**
 * Prisma seed script — creates the default admin user.
 * Run once:  npx ts-node prisma/seed.ts
 */
import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  const email = 'admin@aquawash.com';
  const password = 'Admin@123';

  // Check if admin already exists
  const existing = await prisma.user.findUnique({ where: { email } });
  if (existing) {
    console.log(`✅ Admin user already exists: ${email}`);
    return;
  }

  const hashed = await bcrypt.hash(password, 10);

  const admin = await prisma.user.create({
    data: {
      email,
      password: hashed,
      name: 'AquaWash Admin',
      role: 'ADMIN',
    },
  });

  console.log(`🎉 Admin user created successfully!`);
  console.log(`   Email   : ${admin.email}`);
  console.log(`   Password: ${password}`);
  console.log(`   Role    : ${admin.role}`);
}

main()
  .catch((e) => {
    console.error('❌ Seed failed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
