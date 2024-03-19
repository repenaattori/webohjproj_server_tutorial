CREATE TABLE student(  
    fname TEXT,
    lname TEXT,
    username TEXT NOT NULL PRIMARY KEY,
    pw TEXT NOT NULL
);
CREATE TABLE note(  
    id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    msg TEXT,
    student_uname TEXT REFERENCES student(username)
);