// tabtenn1.h -- a table-tennis base class
#include <iostream>
#include <string>

#ifndef TABTENN1_H_
#define TABTENN1_H_

// simple base class
class TableTennisPlayer 
{
    private:
        std::string firstname;
        std::string lastname;
        bool hasTable;
    public:
        TableTennisPlayer (const std::string & fn = "none",const std::string & ln = "none", bool ht = false);
        void Name() const;
        bool HasTable() const { return hasTable; };
        void ResetTable(bool v) { hasTable = v; };
};

// simple derived class
class RatedPlayer : public TableTennisPlayer 
{
    private:
        unsigned int rating;
    public:
        RatedPlayer (unsigned int r = 0, const std::string & fn = "none", const std::string & ln = "none", bool ht = false);
        RatedPlayer(unsigned int r, const TableTennisPlayer & tp);
        unsigned int Rating() const { return rating; }
        void ResetRating (unsigned int r) {rating = r;}
};

#endif