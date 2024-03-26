// stock00.h -- Stock class interface
// version 00
#ifndef STOCK00_H_
#define  STOCK00_H_

#include <iostream>
#include <string>

class Stock
{
    private:
        std::string company;
        long shares;
        double share_val;
        double total_val;
        void set_tot() {total_val = shares * share_val;}
    public:
        void acquire(const std::string &, long, double);
        void buy(long, double);
        void sell(long, double);
        void update(double price);
        void show();
};  // note semicolon at the end

#endif