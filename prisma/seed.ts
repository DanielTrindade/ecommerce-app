import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
async function main() {
  await prisma.user.upsert({
    where: { email: 'danieloliveiratrindade@gmail.com' },
    update: {},
    create: {
      name: 'Daniel de Oliveira Trindade',
      username: 'Daniel.Trindade',
      email: 'danieloliveiratrindade@gmail.com',
      password: '123456',
    },
  });
  await prisma.user.upsert({
    where: { email: 'camillocabello@gmail.com' },
    update: {},
    create: {
      name: 'Camillo Cabello Alves',
      username: 'Camilo.Alves',
      email: 'camillocabello@gmail.com',
      password: '123456',
    },
  });
}

// execute the main function
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    // close Prisma Client at the end
    await prisma.$disconnect();
  });
