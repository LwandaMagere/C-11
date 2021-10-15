// some types combination
#include <iostream>

struct Dado
{
    int year;
};

int main()
{
    Dado s01, s02, s03;
    s01.year = 1998;
    Dado *pa = &s02;
    pa->year = 1999;
    Dado trio[3]; // array of 3 structures
    trio[0].year =  2003;
    std::cout << trio->year << std::endl;
    const Dado *arp[3] = {&s01, &s02, &s03};
    std::cout << arp[1]->year << std::endl;
    const Dado **ppa = arp;
    auto ppb = arp;  // C++ 11 automatic type deduction
 // or else use const Dado ** ppb = arp;
    std::cout << (*ppb)->year << std::endl;
    std::cout << (*(ppb+1))->year << std::endl;
    return 0;
}

