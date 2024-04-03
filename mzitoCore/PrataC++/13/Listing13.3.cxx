// usett0.cpp -- using a base class
#include <iostream>
#include "Listing13.1.h"

int main()
{
    using std::cout;

    TableTennisPlayer player1("Chuck", "Blizzard", true);
    TableTennisPlayer player2 = TableTennisPlayer("Tara", "Boomdea", false);
    
    player1.Name();
    if (player1.HasTable())
        cout << ": has a table.\n";
    else 
        cout << ": hasn't a table.\n";
    player2.Name();
    if (player2.HasTable())
        cout << ": has a table";
    else 
        cout << ": hasn't a table.\n";

    return 0;
}