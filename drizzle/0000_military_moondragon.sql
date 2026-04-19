CREATE TYPE "public"."userRole" AS ENUM('Admin', 'Basic');--> statement-breakpoint
CREATE TABLE "user_table" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" varchar(50) NOT NULL,
	"age" integer NOT NULL,
	"email" varchar(90) NOT NULL,
	"userRole" "userRole" DEFAULT 'Basic' NOT NULL
);
