// using clock() in a time-delay loop
#include <iostream>
#include <ctime>  // describe clock() function, clock_t type

int main()
{
    using namespace std;

    cout << "Enter the delay time, in seconds: ";
    float secs;
    cin >> secs;
    clock_t delay = secs * CLOCKS_PER_SEC; // Converts to clock ticks

    cout << "starting\a\a\n";
    clock_t start = clock();
    while (clock() - start < delay) // wait until time elapse
        ;
    cout << "done\a\n";
    return 0;
}