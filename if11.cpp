// using the if statement
#include <iostream>
int main()
{
    using std::cin;  // using declaration
    using std::cout;
    char ch;
    int spaces = 0;
    int total  = 0;
    cin.get(ch);
    while (ch != '.') // quit at the end of a sentence
    {
        if (ch == ' ') // check if ch is a space
            ++space;
        ++total;
        cin.get(ch);
    }
    cout << space << " spaces, " << total;
    cout << " characters total in sentence\n";
    
    return 0;
}