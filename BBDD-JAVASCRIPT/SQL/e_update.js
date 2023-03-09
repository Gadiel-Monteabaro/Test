/*
    UPDATE table_name
    SET column1 = value1, column2 = value2, ...
    WHERE condition;
*/

// Example
/*
    UPDATE Customers
    SET ContactName = 'Alfred Schmidt', City = 'Frankfurt'
    WHERE CustomerID = 1;
*/

// Adds columns
/*
    ALTER TABLE table_name
    ADD column_name datatype;
*/

// Example
/*
    ALTER TABLE Customers
    ADD Email varchar(255);
*/