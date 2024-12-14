CREATE TABLE competitions (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    participants INT NOT NULL,
    owner VARCHAR(255) NOT NULL,
    start_time TIMESTAMP NOT NULL,
    end_time TIMESTAMP NOT NULL
);


INSERT INTO competitions (id, name, description, participants, owner, start_time, end_time) VALUES
('C1', 'JUnit 101', 'A beginner level assignment-based learning for JUnit', 20, 'Anu Shibin Joseph Raj', '2023-09-01T10:00:00', '2023-10-01T11:00:00'),
('C2', 'Spring Boot Basics', 'Learn the basics of Spring Boot framework with hands-on projects', 50, 'John Doe', '2023-11-01T09:00:00', '2023-12-01T18:00:00'),
('C3', 'React for Beginners', 'An introduction to ReactJS for building dynamic user interfaces', 30, 'Jane Smith', '2023-08-15T08:30:00', '2023-09-15T17:00:00');
