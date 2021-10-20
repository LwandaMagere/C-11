// defining and using a reference
#include <iostream>

int main()
{
    using namespace std;
    int rats = 101;
    int & rodent = rats; // rodent is a reference
    cout << "rats = " << rats;
    cout << ", rodents = " << rodents << endl;
    rodent++;
    cout << "rats = " << rats;
    cout << ", rodents = " << rodents << endl;
    cout << "rats address = " << &rats;
    cout << ", rodents address = " << &rodents << endl;
    return 0;
}