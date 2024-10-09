// twotemps.cpp -- using overloaded template functions
#include <iostream>

template<typename T>
void Swap(T &, T &);

template <typename T>
void Swap(T * , T * , int n = 1);

void Show(int a[]);
const int Lim = 8;

int main()
{
    using namespace std;
    int i = 10, j = 20;
    cout << "i, j = " << i << ", " << j << ".\n";
    cout << "Using compiler-generated int swapper:\n";
    Swap(i,j); // matches original template
    cout << "Now i, j = " << i << ", " << j << ".\n";

    int d1[Lim] = {0,7,0,4,1,7,7,6};
    int d2[Lim] = {0,7,2,0,1,9,6,9};
    cout << "Original arrays:\n";
    Show(d1);
    Show(d2);
    Swap(d1,d2,Lim); // matches new template
    cout << "Swapped arrays:\n";
    Show(d1);
    Show(d2);
    return 0;
}

template <typename T>
void Swap(T & a, T & b) 
{
    T temp;
    temp = a;
    a = b;
    b = temp;
}

template<typename T>
void Swap(T a[], T b[], int n) 
{
    T temp;
    for (int i = 0; i < n; i++)
    {
        temp = a[i];
        a[i] = b[i];
        b[i] = temp;
    }
}

void Show(int a[])
{
    using namespace std;
    cout << a[0] << a[1] << "/";
    cout << a[2] << a[3] << "/";
    for (int i = 4; i < Lim; i++)
    cout << a[i];
    cout << endl;
}




//it’s easy to write a template function that cannot handle certain types.
//You use templates when you need functions that apply the same algorithm to a variety of types
//It might be, however, that not all types would use the same algorithm.

