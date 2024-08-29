// tabtenn0.h -- a table-tennis base class
#include <iostream>

#ifndef TABTENNO_H_
#define TABTENNO_H_

#include <string>
using std::string;

// simple base class
class TableTennisPlayer 
{
    private:
        string firstname;
        string lastname;
        bool hasTable;
    public:
        TableTennisPlayer(const string & fn = "none", const string & ls = "none", bool ht = false);
        void Name() const;
        bool HasTable() const { return hasTable;}
        void ResetTable(bool v) { hasTable = v;}
};

#endif