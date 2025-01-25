-- -- CreateTable
-- CREATE TABLE `Product` (
--     `id` VARCHAR(191) NOT NULL,
--     `slug` VARCHAR(191) NOT NULL,
--     `title` VARCHAR(191) NOT NULL,
--     `mainImage` VARCHAR(191) NOT NULL,
--     `price` INTEGER NOT NULL DEFAULT 0,
--     `rating` INTEGER NOT NULL DEFAULT 0,
--     `description` VARCHAR(191) NOT NULL,
--     `manufacturer` VARCHAR(191) NOT NULL,
--     `category` VARCHAR(191) NOT NULL,
--     `inStock` INTEGER NOT NULL DEFAULT 1,

--     UNIQUE INDEX `Product_slug_key`(`slug`),
--     PRIMARY KEY (`id`)
-- ) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- -- CreateTable
-- CREATE TABLE `Image` (
--     `imageID` VARCHAR(191) NOT NULL,
--     `productID` VARCHAR(191) NOT NULL,
--     `image` VARCHAR(191) NOT NULL,

--     PRIMARY KEY (`imageID`)
-- ) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- -- CreateTable
-- CREATE TABLE `User` (
--     `id` VARCHAR(191) NOT NULL,
--     `email` VARCHAR(191) NOT NULL,
--     `password` VARCHAR(191) NULL,

--     UNIQUE INDEX `User_email_key`(`email`),
--     PRIMARY KEY (`id`)
-- ) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE "Product" (
    "id" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "mainImage" TEXT NOT NULL,
    "price" INTEGER NOT NULL DEFAULT 0,
    "rating" INTEGER NOT NULL DEFAULT 0,
    "description" TEXT NOT NULL,
    "manufacturer" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "inStock" INTEGER NOT NULL DEFAULT 1,
    
    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Product_slug_key" ON "Product"("slug");

-- CreateTable
CREATE TABLE "Image" (
    "imageID" TEXT NOT NULL,
    "productID" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    
    CONSTRAINT "Image_pkey" PRIMARY KEY ("imageID")
);

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT,
    
    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
