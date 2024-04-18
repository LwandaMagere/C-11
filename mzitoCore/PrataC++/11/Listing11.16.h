// stonewt.h -- definition for the Stonewt class
#ifndef STONEWT_H_
#define STONEWT_H_

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
};
#endif