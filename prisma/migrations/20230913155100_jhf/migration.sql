-- CreateTable
CREATE TABLE "BlogPost" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "author" VARCHAR(255) NOT NULL,
    "description" TEXT NOT NULL,
    "pubDate" TEXT NOT NULL,
    "thumbnail" TEXT NOT NULL,

    CONSTRAINT "BlogPost_pkey" PRIMARY KEY ("id")
);
