// support.cpp -- use external variable
// compile with external.cpp
#include <iostream>

extern double warming; // use warming from another file

// function prototypes
void update(double dt);
void local();

using std::cout;
void update(double dt)  // modifies global variable
{
    extern double warming;  // optional redeclaration
    warming += dt; // uses global warming
    cout << "Updating global warming to " << warming;
    cout << " degrees.\n";
}

void local() // uses local variable
{
    double warming = 0.8;    // new variable hides external one
    cout << "Local warming = " << warming << " degrees.\n";
    // Access global variable with the
    // scope resolution operator
    cout << "But global warming = " << ::warming;
    cout << " degrees.\n";
}

/*

When you use it inside a block, static causes a local variable to have 
static storage duration.This means that even though the variable is known
within that block, it exists even while the block is inactive.

Also if you initialize a static local variable, the program initializes the variable
once, when the program starts up. Subsequent calls to the function don’t reinitialize the
variable the way they do for automatic variables.

*/