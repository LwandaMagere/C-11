//tabtenn1.cpp -- simple base-class methods
#include "Listing13.4.h"

TableTennisPlayer::TableTennisPlayer(const std::string & fn, const std::string & ln, bool ht) 
{
    firstname = fn;
    lastname = ln;
    hasTable = ht;
}

void TableTennisPlayer::Name() const
{
    std::cout << lastname << ", " << firstname;
}

// RatedPlayer methods
RatedPlayer::RatedPlayer(unsigned int r, const TableTennisPlayer & tp) : TableTennisPlayer(tp) 
{
    rating = r;
}