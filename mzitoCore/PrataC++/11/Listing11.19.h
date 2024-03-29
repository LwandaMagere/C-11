// stonewt1.h -- revised definition for the Stonewt class
#ifndef STONEWT1_H_
#define STONEWT1_H_

class Stonewt 
{
    private:
        enum {Lbs_per_stn = 14};
        int stone;
        double pds_left;
        double pounds;
    public:
        Stonewt(double);
        Stonewt(int, double);
        Stonewt();
        ~Stonewt();
        void show_lbs() const;
        void show_stn() const;
        // conversion function
        operator int() const;
        operator double() const;
    
};

#endif