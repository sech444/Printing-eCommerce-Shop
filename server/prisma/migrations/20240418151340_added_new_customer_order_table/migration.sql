/*
  Warnings:

  - You are about to drop the `order` table. If the table is not empty, all the data it contains will be lost.

*/

-- CreateIndex
CREATE UNIQUE INDEX "Category_name_key" ON "Category"("name");
-- CreateTable
CREATE TABLE "Customer_order" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "lastname" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "company" TEXT NOT NULL,
    "adress" TEXT NOT NULL,
    "apartment" TEXT NOT NULL,
    "postalCode" TEXT NOT NULL,
    "dateTime" TIMESTAMP(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    "status" TEXT NOT NULL,
    "total" INTEGER NOT NULL,

    CONSTRAINT "Customer_order_pkey" PRIMARY KEY ("id")
);