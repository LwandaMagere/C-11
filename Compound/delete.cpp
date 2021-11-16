// using the delete operator
#include <iostream>
#include <cstring>

using namespace std;

char * getname(void);

int main()
{
    char * name;
    name = getname(); // assign address of string name
    cout << name << " at " << (int *) name << "\n";
    delete [] name; // memory freed

    name = getname(); // reuse freed memory
    cout << name << " at " << (int *) name << "\n";
    delete [] name;
    return 0;
}

char * getname()
{
    char temp[80];
    cout << "Enter last name: ";
    cin >> temp;
    char * pn = new char[strlen(temp) + 1];
    strcpy(pn, temp);

    return pn;
}