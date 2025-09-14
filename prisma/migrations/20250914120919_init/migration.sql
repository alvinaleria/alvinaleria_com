-- CreateTable
CREATE TABLE "public"."Campaigns" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "desc" TEXT NOT NULL,
    "zip" TEXT NOT NULL,
    "zsize" INTEGER,

    CONSTRAINT "Campaigns_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Creatives" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "width" INTEGER NOT NULL,
    "height" INTEGER NOT NULL,
    "preview" TEXT,
    "file" TEXT NOT NULL,
    "fsize" INTEGER,
    "backup" TEXT NOT NULL,
    "bsize" INTEGER,
    "campaignId" INTEGER NOT NULL,

    CONSTRAINT "Creatives_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "public"."Creatives" ADD CONSTRAINT "Creatives_campaignId_fkey" FOREIGN KEY ("campaignId") REFERENCES "public"."Campaigns"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
