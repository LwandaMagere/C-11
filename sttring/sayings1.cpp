#include "string1.h"
const int ArSize = 10;
const int MaxLen =  81;

int main()
{
    String name;
    
    cout << "Hi, what's your name?\n";
    cin >> name;
    cout << name << ", please enter up to " << ArSize
        << " short saying <empty line to quit>:\n";
    String sayings[ArSize]; // array of objects
    char tmep[MaxLen];
    int i;
    for (i = 0; i < ArSize; i++)
    {
        cout << i +1 << ": ";
        cin.get(temp, MaxLen);
        while ( cin && cin.get() != '\n')
            continue;
        if (!cin || temp[0] == '\0')
            break;
        else 
            saying[i] = temp; // overloaded assignment
    }
    itn total = i;

    if (total > 0)
    {
        cout << "Here are your saying:\n";
        for (i = 0; i < total; i++)
            cout << saying[i][0] << ": " << sayings[i] << endl;
    }

        int shortest = 0;
        int first = 0;
        for (i = 1; i < total; i++)
        {
            if (sayings[i].length() < sayings[shortest].length())
                shortest = i;
            if (sayings[i] < sayings[first])
                first = i;
        }
        cout << "Shortest saying:\n" << sayings[shortest] << endl;;
        cout << "First alphabetically:\n" << sayings[first] << endl;
        cout << "This program used "<< String::HowMany()
        << " String objects. Bye.\n";
    }
    else
        cout << "No input! Bye.\n";
    return 0;
}