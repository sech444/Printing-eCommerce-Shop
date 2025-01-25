-- -- CreateTable
-- CREATE TABLE `Order` (
--     `id` VARCHAR(191) NOT NULL,
--     `name` VARCHAR(191) NOT NULL,
--     `lastname` VARCHAR(191) NOT NULL,
--     `phone` VARCHAR(191) NOT NULL,
--     `email` VARCHAR(191) NOT NULL,
--     `company` VARCHAR(191) NULL,
--     `adress` VARCHAR(191) NOT NULL,
--     `apartment` VARCHAR(191) NULL,
--     `city` VARCHAR(191) NOT NULL,
--     `country` VARCHAR(191) NOT NULL,
--     `postalCode` INTEGER NOT NULL,

--     UNIQUE INDEX `Order_email_key`(`email`),
--     PRIMARY KEY (`id`)
-- ) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE "Order" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "lastname" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "company" TEXT,
    "adress" TEXT NOT NULL,
    "apartment" TEXT,
    "city" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "postalCode" INTEGER NOT NULL,

    CONSTRAINT "Order_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Order_email_key" ON "Order"("email");
