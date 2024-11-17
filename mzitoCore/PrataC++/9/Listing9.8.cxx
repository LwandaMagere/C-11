// twofile2.cpp -- variables with internal and external linkage
#include <iostream>
extern int tom; // tom defined elsewhere
static int dick = 10; // overrides external dick
int harry = 200;  // external variable definition,
// no conflict with twofile1 harry

void remote_access()
{
    using namespace std;
    cout << "remote_access() reports the following addresses:\n";
    cout << &tom << " = &tom, " << &dick << " = &dick, ";
    cout << &harry << " = &harry\n";
}

/*
In C++ (but not C), the const modifier alters the default storage classes slightly.Whereas
a global variable has external linkage by default, a const global variable has internal link-
age by default.

const int fingers = 10;  // same as static const int fingers = 10;

If, for some reason, you want to make a constant have external linkage, you can use the
extern keyword to override the default internal linkage:

extern const int states = 50;  // definition with external linkage

You can also use the keyword static to give a function internal linkage, confining its use to a single file.

static int private(double x);
...
static int private(double x)
{
...
}
It also means you can use the same name for another function in a different file.

*/