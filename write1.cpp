// using cout.write()
#include <iostream>
#include <cstring>

int main()
{
    using std::cout;
    using std::endl;

    const char * state1 = "Majengo";
    const char * state2 = "Mathare";
    const char * state3 = "Naigeria";

    int len = std::strlen(state2);
    cout << "Increasing loop index:\n";
    for (int i = 0; i <= len; i++)
    {
        cout.write(state2, i);
        cout << endl;
    }
    // concatenate output
    cout << "Decreasing loop index:\n";
    for (int i = len; i > 0; i--)
        cout.write(state2,i) << endl;

   

    // exceed string length
    cout << "Exceeding string length:\n";
    cout.write(state2, len + 5) << endl; 

     long val = 560031841;
    cout.write((char *)&val,sizeof(long));

    return 0;
}