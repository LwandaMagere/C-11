// structur.cpp -- a simple structure
#include <iostream>
struct inflatable // structure declaration
{
    char name[20];
    float volume;
    double price;
};

int main()
{
    using namespace std;

    inflatable guest = 
    {
        "Glorious Gloria", // name value
        1.88,   // volume value
        29.99   // price value
    }; // guest is a structure variable of type inflatable

    inflatable pal = { "Audacious Arthur", 3.12, 32.99};
    // NOTE: some implementations require using
    // static inflatable guest =

    cout << "Expand your guest list with " << guest.name;
    cout << " and " << pal.name << "!\n";
    // pal.name is the name member of the pal variable
    cout << "You can have both for $";
    cout << guest.price + pal.price << "!\n";
    
    return 0;
}