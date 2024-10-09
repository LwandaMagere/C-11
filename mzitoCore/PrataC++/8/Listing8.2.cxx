// firstref.cpp -- defining and using a reference
#include <iostream>

int main()
{
    using namespace std;
    // int rats = 101;
    // int & rodents = rats; // rodents is a reference
    // cout << "rats = " << rats;
    // cout << ", rodents = " << rodents << endl;
    // rodents++;
    // cout << "rats = " << rats;
    // cout << ", rodents = " << rodents << endl;

    // // some implementations require type casting the following
    // // addresses to type unsigned
    // cout << "rats address = " << &rats;
    // cout << ", rodents address = " << &rodents << endl;

    double j = 15.0;
    double && jref = 2.0* j + 18.5;
    std::cout << jref << '\n';
    cout << j << std::endl;
    
    return 0;
}

// A reference is a name that acts as an alias, or an alternative name, for a previously defined variable.
// C++ assigns an additional meaning to the & symbol and presses it into service for declaring references.

// Suppose you tried the following:

// int rats = 101;
// int * pt = &rats;
// int & rodents = *pt;
// int bunnies = 50;
// pt = &bunnies;
// Initializing rodents to *pt makes rodents refer to rats . Subsequently altering pt to
// point to bunnies does not alter the fact that rodents refers to rats .


// What happens is that because x + 3.0 is not a type double variable, the program creates a temporary, nameless variable,
// initializing it to the value of the expression x + 3.0 .Then ra becomes a reference to that temporary variable.

// What is an lvalue? An argument that’s an lvalue is a data object that can be referenced by address.

// if the intent of a function with reference arguments is to modify variables passed as arguments, situations that create 
// temporary variables thwart that purpose.