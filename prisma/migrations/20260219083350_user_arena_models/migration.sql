/*
  Warnings:

  - Added the required column `name` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "User" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "name" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "Arena" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "creatorId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Arena_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ArenaParticipant" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "arenaId" TEXT NOT NULL,

    CONSTRAINT "ArenaParticipant_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Arena_id_key" ON "Arena"("id");

-- CreateIndex
CREATE UNIQUE INDEX "ArenaParticipant_id_key" ON "ArenaParticipant"("id");

-- AddForeignKey
ALTER TABLE "Arena" ADD CONSTRAINT "Arena_creatorId_fkey" FOREIGN KEY ("creatorId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ArenaParticipant" ADD CONSTRAINT "ArenaParticipant_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ArenaParticipant" ADD CONSTRAINT "ArenaParticipant_arenaId_fkey" FOREIGN KEY ("arenaId") REFERENCES "Arena"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
