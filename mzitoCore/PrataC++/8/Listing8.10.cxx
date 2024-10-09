// leftover.cpp -- overloading the left() function
#include <iostream>

unsigned long left(unsigned long, unsigned);
char * left(const char *, int n = 1);

int main() 
{
    using namespace std;
    char * trip = "Nairobi";    // test value
    unsigned long n = 12345678; // test value
    int i;
    char * temp;


    for (i = 1; i < 10; i++) 
    {
        cout << left(n, i) << endl;
        temp = left(trip,i);
        cout << temp << endl;
        delete [] temp; // point to temporary storage
    }
    return 0;
}

// This function returns the first ct digits of the number num.
unsigned long left(unsigned long num, unsigned ct)
{
    unsigned digits = 1;
    unsigned long n = num;

    if (ct == 0 || num == 0)
        return 0;   // return 0 if no digits
    while (n = n/10)
        digits++;
    if (digits > ct) 
    {
        ct = digits - ct;
        while (ct--)
            num /= 10;
        return num; // return left ct digits
    }
    else        // if ct >= number of digits
        return num;  // return the whole number
}

// This function returns a pointer to a new string
// consisting of the first n characters in the str string.
char * left(const char * str, int n) 
{
    if (n < 0)
        n = 0;
    char * p = new char[n+1];
    int i;
    for (i = 0; i < n && str[i]; i++)
        p[i] = str[i]; // copy characters
    while (i <= n)
        p[i++] = '\0';  // set rest of string to '\0'
    return p;
}





//The key to function overloading is a function’s argument list, also called the function signature.
// A lack of a matching prototype doesn’t automatically rule out using one of the functions
// because C++ will try to use standard type conversions to force a match.

// But in the earlier code there are three prototypes that take a number as the first argument, 
// providing three different choices for converting year . Faced
// with this ambiguous situation, C++ rejects the function call as an error.

// the compiler considers a reference to a type and the type itself to be the same signature.