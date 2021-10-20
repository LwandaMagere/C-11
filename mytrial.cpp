#include <iostream>

using namespace std;

int trying(int);
int main()
{
    int (*p)(int) = trying;

    cout << p(5) << endl;
    cout << (*p)(5) << endl;
    return 0;
}

int trying()
{
    cout << "Hi my name is Dado\n";
    return a;
}