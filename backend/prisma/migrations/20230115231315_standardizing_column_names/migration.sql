/*
  Warnings:

  - You are about to drop the column `createdAt` on the `Deliveries` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Deliveries" DROP COLUMN "createdAt",
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;
