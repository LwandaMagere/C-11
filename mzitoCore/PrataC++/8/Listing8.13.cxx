// twoswap.cpp -- specialization overrides a template
#include <iostream>

template<typename T>
void Swap(T &a, T &b);

struct job 
{
    char name[40];
    double salary;
    int floor;
};

// explicit specialization
template <> void Swap<job>(job &, job &);

void Show(job &j);

int main() 
{
    using namespace std;
    cout.precision(2);
    cout.setf(ios::fixed, ios::floatfield);
    int i = 10, j = 20;
    cout << "i, j = " << i << ", " << j << ".\n";
    cout << "Using compiler-generated int swapper:\n";
    Swap(i,j); // generates void Swap(int &, int &)
    cout << "Now i, j = " << i << ", " << j << ".\n";

    job sue = {"Susan Yaffee", 73000.60, 7};
    job sidney = {"Sidney Taffee", 78060.72, 9};
    cout << "Before job swapping:\n";
    Show(sue);
    Show(sidney);
    Swap(sue, sidney); // uses void Swap(job &, job &)
    cout << "After job swapping:\n";
    Show(sue);
    Show(sidney);

    return 0;
}

template<typename T>
void Swap( T & a, T & b)
{
    T temp;
    temp = a;
    a = b;
    b = temp;
}

// swaps just the salary and floor fields of a job structure
template <> void Swap(job &j1, job &j2)  // specialization
{
    double t1;
    int t2;
    t1 = j1.salary;
    j1.salary = j2.salary;
    j2.salary = t1;
    t2 = j1.floor;
    j1.floor = j2.floor;
    j2.floor = t2;
}

void Show(job &j)
{
    using namespace std;
    cout << j.name << ": $" << j.salary
         << " on floor " << j.floor << endl;
}

// including a function template in your code does not in itself generate a 
// function definition. It’s merely a plan for generating a function definition.

// When the compiler uses the template to generate a function definition for a particular
// type, the result is termed an instantiation of the template.

// It is an error to try to use both an explicit instantiation and an explicit specialization for the
// same type(s) in the same file, or, more generally, the same translation unit.

// Explicit instantiations also can be created by using the function in a program. For
// instance, consider the following:

// template <class T>
// T Add(T a, T b)  // pass by value
// {
//     return a + b;
// }
// ...
// int m = 6;
// double x = 10.2;
// cout << Add<double>(x, m) << endl; // explicit instantiation

// The template would fail to match the function call Add(x, m) because the template
// expects both function arguments to be of the same type. But using Add<double>(x, m)
// forces the type double instantiation, and the argument m is type cast to type double to
// match the second parameter of the Add<double>(double, double) function.

// overload resolution.

// The rules for finding the most specialized template are called the 
// partial ordering rules for function templates.

// trailing return type