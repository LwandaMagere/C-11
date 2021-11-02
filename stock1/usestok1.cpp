// using the stock class
#include <iostream>
#include "stock10.h"

int main()
{
    {
        using std::cout;
        //cout << "Using constructor to create new objects\n";
        Stock stock1("NanoSmart", 9, 20.0);  // syntax 1
        stock1.show();
        
       /* Stock stock2 = Stock("Bofo Objects", 2, 2.0); // syntax 2
        stock2.show();

        cout << "Assigning stock1 to stock 2:\n";
        stock2 =  stock1;
        cout << "Listing stock1 and stock2:\n";
        stock1.show();
        stock2.show();

        cout << "Using a constructor to reset an object\n";
        stock1 = Stock("Nifty Foods", 10, 50.0);
        cout << "Revised stock1:\n";

        stock1.show();*/
        cout << "Done\n";

    }
    return 0;
}