-- Don't forget to add your create table SQL 
-- It is also helpful to include some test data

CREATE TABLE items (
	"id" SERIAL PRIMARY KEY,
	"name" VARCHAR(80) NOT NULL,
	"quantity" DECIMAL(10, 2),
	"unit" VARCHAR(20),
	"isPurchased" BOOLEAN DEFAULT FALSE
);

INSERT INTO items ("name", "quantity", "unit", "isPurchased")
VALUES 
('apples', 4, 'lbs', false),
('milk', 1, 'gallon', true),
('eggs', 1, 'dozen', false),
('bread', 1, 'loaf', true),
('cheese', 100, 'ounces', false),
('pasta', 4, 'boxes', true);
