// defining your own function
#include <iostream>
void simon(int);

int main()
{
    using namespace std;
    return 0;
}

void simon(int n)
{
    using namespace std;
    simon(3); // call the simon() function
    cout << "Pick an integer: ";
    int count;
    cin >> count;
    simon(count); // call it again
    cout << "Done!" << endl;
    cout << "Simon says touch your toes " << n << "times." << endl;

    return 0;
}