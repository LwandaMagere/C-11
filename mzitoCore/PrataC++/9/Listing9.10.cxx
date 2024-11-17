// newplace.cpp -- using placement new
#include <iostream>
#include <new>  // for placement new
const int BUF = 512;
const int N = 5;
char buffer[BUF];  // chunk of memory

int main()
{
    using namespace std;

    double *pd1, *pd2;
    int i;
    cout << "Calling new and placement new:\n";
    pd1 = new double [N];    // use heap
    pd2 = new (buffer) double[N];
    for (i = 0; i < N; i++)
        pd2[i] = pd1[i] = 1000 + 20.0 * i;
    cout << "Memory addresses:\n" << " heap: " << pd1
         << " static: " << (void *) buffer <<endl;
    cout << "Memory contents:\n";
        for (i = 0; i < N; i++)
        {
            cout << pd1[i] << " at " << &pd1[i] << "; ";
            cout << pd2[i] << " at " << &pd2[i] << endl;
        }
    
    cout << "\nCalling new and placement new a second time:\n";
    double *pd3, *pd4;
    pd3= new double[N]; // find new address
    pd4 = new (buffer) double[N]; // overwrite old data
    for (i = 0; i < N; i++)
    pd4[i] = pd3[i] = 1000 + 40.0 * i;
    cout << "Memory contents:\n";
    for (i = 0; i < N; i++)
    {
        cout << pd3[i] << " at " << &pd3[i] << "; ";
        cout << pd4[i] << " at " << &pd4[i] << endl;
    }
    cout << "\nCalling new and placement new a third time:\n";
    delete [] pd1;
    pd1= new double[N];
    pd2 = new (buffer + N * sizeof(double)) double[N];
    for (i = 0; i < N; i++)
        pd2[i] = pd1[i] = 1000 + 60.0 * i;
    cout << "Memory contents:\n";
    for (i = 0; i < N; i++)
    {
        cout << pd1[i] << " at " << &pd1[i] << "; ";
        cout << pd2[i] << " at " << &pd2[i] << endl;
    }
    delete [] pd1;
    delete [] pd3;
    
    return 0;
}

// namespace problems
// declarative region
// potential scope
// The portion of the program that can actually see the variable is termed the scope,

/*
C++ now adds the ability to create named namespaces by defining a new kind of declara-
tive region, one whose main purpose is to provide an area in which to declare names.
*/

/*
Namespaces can be located at the global level or inside 
other namespaces, but they cannot be placed in a block.
Thus, a name declared in a namespace has external linkage by
default (unless it refers to a constant).
*/