// Vector class with <<, mode state
#ifndef VECTOR_H_
#define VECTOR_H_
#include <iostream>

namespace VECTOR 
{
    class Vector
    {
        public:
            enum Mode {RECT, POL};
        private:
            double x;
            double y;
            double mag;
            double ang;
            Mode mode; // RECT or POL
         // Private methods for setting values
            void set_mag();
            void set_ang();
            void set_x();
            void set_y();
        publi:
            Vector();
            Vector(double n1. double n2, Mode form = RECT);
            void reset(double n1, double n2, Mode form = RECT);
            ~Vector();
            double xval() const {return x;} // report x value
            double yval() const {return y;} // ditto
            double magval() const { return mag;}
            double angval() const {return ang;}
         // operator overloading
            Vector operator+(const Vect & b) const;
            Vector operator-(const Vector & b) const;
            Vector operator*(double n) const;
            friend Vector operator*(double n, const Vector & a);
            friend std::ostream & operator<<(std::ostream & os, const Vector & v);
    };
}
#endif