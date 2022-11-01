-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "birth_date" DATETIME NOT NULL,
    "address" TEXT NOT NULL,
    "telephone_number" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Wallet" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "wallet_number" TEXT NOT NULL,
    "balance" REAL NOT NULL,
    "userId" TEXT,
    CONSTRAINT "Wallet_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Auction" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "start_date" DATETIME NOT NULL,
    "start_time" DATETIME NOT NULL,
    "end_time" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "Throw" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "throw_value" REAL NOT NULL,
    "throw_time" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "Batch" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "minimum_bid" REAL NOT NULL,
    "claimed_batch" BOOLEAN NOT NULL,
    "price_claimed" REAL NOT NULL,
    "auction_id" TEXT,
    CONSTRAINT "Batch_auction_id_fkey" FOREIGN KEY ("auction_id") REFERENCES "Auction" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Curator" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "telephone_number" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Wallet_id_key" ON "Wallet"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Wallet_wallet_number_key" ON "Wallet"("wallet_number");

-- CreateIndex
CREATE UNIQUE INDEX "Auction_id_key" ON "Auction"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Throw_id_key" ON "Throw"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Batch_id_key" ON "Batch"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Curator_id_key" ON "Curator"("id");
