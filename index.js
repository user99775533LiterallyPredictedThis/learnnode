let bool = true; // Self explanatory
//console.log(bool);
bool = false;
//console.log(bool);

bool = true && true; // AND, only true if both statements = true
bool = true && false; // AND, otherwise false
bool = false && true; // AND, false
bool = false && false; // AND, false
//console.log(bool);

bool = true || false; // (AND/)OR, will = true if true is present on either side
bool = false || false; // (AND/)OR, Only false if both sides = false
//console.log(bool);

bool = !true; //NOT, if not true then is false
//console.log(bool);
bool = !false; // NOT, if not false then is true
//console.log(bool);

bool = (true && false || true) && !(false || true && false);
// Answer: bool = true;
//console.log(bool);

bool = 10 > 5; // True
//console.log(bool);
bool = 10 < 5; // False
//console.log(bool);
bool = 10 > 10; // False
//console.log(bool);
bool = 10 == 10; // True
//console.log(bool);
bool = '10' == 10; // True, non strict will convert and check
//console.log(bool);
bool = '10' === 10; // False, strict will check if types match before values
//console.log(bool);
bool = 10 >= 10; // True, greater or equals
//console.log(bool);
bool = '10' != 10; // False, not equals
//console.log(bool);
bool = '10' !== 10; // True
//console.log(bool);