import { PrismaClient } from '@prisma/client';

let prisma: PrismaClient;

export const getDbInstance = () => {
	if (!prisma) {
		prisma = new PrismaClient();
	}

	return prisma;
};
