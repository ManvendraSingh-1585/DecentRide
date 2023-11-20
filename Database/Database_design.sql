CREATE TABLE User (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    user_name VARCHAR(255) NOT NULL,
    user_email VARCHAR(255) NOT NULL,
    user_number VARCHAR(15) NOT NULL,
    user_password VARCHAR(255) NOT NULL
);
CREATE TABLE Role (
    role_id INT AUTO_INCREMENT PRIMARY KEY,
    role_name VARCHAR(50) NOT NULL
);
CREATE TABLE User_Role (
    user_id INT,
    role_id INT,
    PRIMARY KEY (user_id, role_id),
    FOREIGN KEY (user_id) REFERENCES User(user_id),
    FOREIGN KEY (role_id) REFERENCES Role(role_id)
);
CREATE TABLE Ride (
    ride_id INT AUTO_INCREMENT PRIMARY KEY,
    driver_id INT,
    source_address VARCHAR(255) NOT NULL,
    destination_address VARCHAR(255) NOT NULL,
    ride_date DATE,
    ride_time TIME,
    FOREIGN KEY (driver_id) REFERENCES User(user_id)
);
CREATE TABLE Ride_Request (
    request_id INT AUTO_INCREMENT PRIMARY KEY,
    ride_id INT,
    rider_id INT,
    status VARCHAR(50) NOT NULL,
    FOREIGN KEY (ride_id) REFERENCES Ride(ride_id),
    FOREIGN KEY (rider_id) REFERENCES User(user_id)
);





