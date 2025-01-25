-- -- AlterTable
-- ALTER TABLE `user` ADD COLUMN `role` VARCHAR(191) NULL DEFAULT 'user';

-- -- CreateTable
-- CREATE TABLE `Category` (
--     `id` VARCHAR(191) NOT NULL,
--     `name` VARCHAR(191) NOT NULL,

--     PRIMARY KEY (`id`)
-- ) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AlterTable
ALTER TABLE "User" ADD COLUMN "role" TEXT NULL DEFAULT 'user';

-- CreateTable
CREATE TABLE "Category" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("id")
);
