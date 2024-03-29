// strngbad.cpp -- StringBad class methods
#include <cstring>
// string.h for some
#include "Listing12.1.h"
using std::cout;

// initializing static class member
int StringBad::num_strings = 0;

StringBad::StringBad(const char * s) 
{
    len = std::strlen(s);
    str = new char [len + 1];
    std::strcpy(str, s);
    num_strings++;
    cout << num_strings << ": \"" << str
         << "\" object created\n";   // For Your Information
}

StringBad::StringBad()
{
    len = 4;
    str = new char [len];
    std::strcpy(str, "C++");
    num_strings++;
    cout << num_strings << ": \"" << str
         << "\" default object created\n"; // FYI
}

StringBad::~StringBad() // necessary destructor
{
    cout << "\"" << str << "\" object deleted, "; //fyi
    --num_strings;
    cout << num_strings << " left\n";
    delete [] str;
}

std::ostream & operator<<(std::ostream & os, const StringBad & st) 
{
    os << st.str;
    return os;
}