/*
  Warnings:

  - A unique constraint covering the columns `[slug]` on the table `Recipe` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `slug` to the `Recipe` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Recipe` ADD COLUMN `category` VARCHAR(191) NULL,
    ADD COLUMN `difficulty` VARCHAR(191) NULL,
    ADD COLUMN `prepTime` INTEGER NULL,
    ADD COLUMN `slug` VARCHAR(191) NOT NULL,
    MODIFY `description` TEXT NULL,
    MODIFY `instructions` TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Recipe_slug_key` ON `Recipe`(`slug`);
