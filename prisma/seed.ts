import { PrismaClient } from '@prisma/client';
import * as dotenv from 'dotenv';
import * as data from '../client/public/config.json';

const prisma = new PrismaClient();

async function main() {
  dotenv.config();

  const prevData = (
    await prisma.projectDetails.findMany({
      select: { label: true },
    })
  ).map((item) => item.label);

  const newData = data['projects']
    .map((item) => ({
      label: item.title,
      logo: item.logo,
    }))
    .filter((item) => !prevData.includes(item.label));
  console.log('Seeding...');
  console.log('newData', newData);
  for (const item of newData) {
    await prisma.projectDetails.create({ data: item });
  }
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
