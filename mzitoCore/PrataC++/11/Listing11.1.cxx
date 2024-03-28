// mytime0.h -- Time class before operator overloading
#ifndef MYTIMEO_H_
#define MYTIMEO_H_

class Time
{
    private:
        int hours;
        int minutes;
    public:
        Time();
        Time(int h, int m = 0);
        void AddMin(int m);
        void AddHr(int h);
        void Reset(int h = 0, int m = 0);
        Time Sum(const Time & t) const;
        void Show() const;
};

#endif