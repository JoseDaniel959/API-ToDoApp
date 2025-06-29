-- CreateTable
CREATE TABLE "Tareas" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "startDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "finalDate" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Tareas_pkey" PRIMARY KEY ("id")
);
