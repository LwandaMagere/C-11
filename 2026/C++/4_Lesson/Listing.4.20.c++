// ptrstr.cpp -- using pointers
#include <iostream>
#include <cstring>
int main()
{
using namespace std;
char animal[20] = "bear";
const char * bird = "wren";
char * ps;
cout << animal << " and ";
cout << bird << "\n";
// cout << ps << "\n"; //may display garbage, may cause a crash

// CHECK PAGE 174

return 0;

}