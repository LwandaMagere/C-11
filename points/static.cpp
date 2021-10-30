// static.cpp -- using a static local vatiable
#include <iostream>
const int ArSize =  10;

void strcount(const char * str);

int main()
{
    using namespace std;

    char input[ArSize];
    char next;

    cout << "Enter a line:\n";
    cin.get(intput, ArSize);
    while (cin)
    {
        cin.get(next);
        while (next != '\n') // string does not fit
            cin.get(next); // dispose of remainder
        strcount(input);
        cout << "Enter next line (empty line to quit) :\n";
        cin.get(intput, ArSize);
    }
    cout << "Bye\n";
    return 0;
}

void strcont(const char * str)
{
    using namespace std;
    static int total = 0;
    int count = 0;

    cout << ""\" << str << "\" contains";
    while (*str++) // go to the end
        count++;
    total += count;
    count << count << " characters\n";
    cout << total << " characters total\n";
}