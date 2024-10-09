// choices.cpp -- choosing a template
#include <iostream>

template<class T> // or template <typename T>
T lesser(T a, T b)    // #1
{
    return a < b ? a : b;
}

int lesser (int a,int b) // #2
{
    a = a < 0 ? -a : a;
    b = b < 0 ? -b : b;
    return a < b ? a : b;
}

int main()
{
    using namespace std;

    int m = 20;
    int n = -30;
    double x = 15.5;
    double y = 25.9;

    cout << lesser(m, n) << endl; // use #2
    cout << lesser(x, y) << endl; // use #1
    cout << lesser<>(m, n) << endl; // use with double
    cout << lesser<int>(x, y) << endl; // use with int

    return 0;

}

// 439pg  The decltype Keyword (C++11) C++11 Trailing Return Type

// template<class T1, class T2>
// auto gt(T1 x, T2 y) -> decltype(x + y)
// {
//     ...
//     return x + y;
// }

// Now decltype comes after the parameter declarations, so x and y are in scope and can
// be used.









