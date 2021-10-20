USE business_db;

INSERT INTO employees(id, first_name, last_name, roles_id, manager_id)
VALUES
(1, 'Donte', 'Williams', '1', '1'),
(2, 'Lebron', 'James', '2', '2'),
(3, 'Charles', 'Barkley', '3', '3'),
(4, 'Will', 'Smith', '4', '4'),
(5,'Eddie', 'Murphy', '5', '5'),

INSERT INTO department(department_name, roles_id)
VALUES 
('Coach', '1'),
('Assistant','2'),
('GM','3'),
('Player','4'),
('Equipment','5');

INSERT INTO roles(title, salary, department_id)
VALUES
('Coach Manager', 325000, 1),
('Assistant Manager', 220000, 2),
('GM Manager', 328000, 3),
('Player', 435000, 4),
('Equipment Manager', 83000, 5);