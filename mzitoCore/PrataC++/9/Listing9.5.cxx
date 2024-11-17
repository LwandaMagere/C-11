// external.cpp -- external variables
// compile with support.cpp
#include <iostream>
using namespace std;
// external variable
double warming = 0.3;
// function prototypes
void update(double dt);
void local();

int main() // uses  global variable
{
    cout << "Global warming is " << warming << " degrees.\n";
    update(0.1); // call function to change warming
    cout << "Global warming is " <<  warming << " degrees.\n";
    local(); // call  function with local warming
    cout << "Global warming is " << warming << " degrees.\n";

    return 0;
}

/*

The difference between internal linkage and external linkage becomes meaningful 
in multifile programs. if a file declares a static external variable that has the same name 
as an ordinary external variable declared in another file, the static version is the one in scope for that file:

    // file1
    int errors = 20;    // external declaration
    ...
    ---------------------------------------------
    // file2
    static int errors = 5; // known to file2 only
    void froobish()
    {
    cout << errors;
    // uses errors defined in file2
    ...

This doesn’t violate the one definition rule because the keyword static establishes that 
the identifier errors has internal linkage, so no attempt is made to bring in an external definition.
Also if you make a file-scope variable static, you needn’t worry about its name conflicting with file-scope
variables found in other files.


*/