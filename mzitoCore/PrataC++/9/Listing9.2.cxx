// file1.cpp -- example of a three-file program
#include <iostream>
#include "Listing9.1.h"
using namespace std;

int main()
{
    rect rplace;
    polar pplace;

    cout << "Enter the x and y values: ";
    while (cin >> rplace.x >> rplace.y) // slick use of cin
    {
        pplace = rect_to_polar(rplace);
        show_polar(pplace);
        cout << "Next two numbers (q to quit): ";
    }
    cout << "Bye!\n";
    return 0;
}

// binary modules (object-code files) created with different compilers will, most likely, 
// not link properly. That is, the two compilerswill generate different decorated names 
// for the same function. you can usually resolve link errors by recompiling the source with your compiler.

// Scope describes how widely visible a name is in a file
// local scope (also termed block scope)
// global scope (also termed file scope)

 // Names used in a function prototype scope are known just within the parentheses enclosing the argument list.
 // C++ functions can have class scope or namespace scope, including global scope.

//  Note that the variable is allocated when execution enters the block, 
//  but the scope begins only after the point of declaration.