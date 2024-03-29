// stone1.cpp -- user-defined conversion functions
// compile with stonewt1.cpp
#include <iostream>
#include "Listing11.19.h"

int main()
{
    using std::cout;
    Stonewt poppins = Stonewt(9,2.8);
    double p_wt = (double) poppins; // implicit conversion
    cout << "Convert to double => ";
    cout << "Poppins: " << p_wt << " pounds.\n";
    cout << "Convert to int => ";
    cout << "Poppins: " << int (poppins) << " pounds.\n";

    return 0;
}