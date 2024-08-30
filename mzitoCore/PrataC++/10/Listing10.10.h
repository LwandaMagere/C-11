// stack.h -- class definition for the stack ADT
#ifndef STACK_H_
#define STACK_H_
#include <iostream>

using std::cout;
using std::cin;

typedef unsigned long Item;

class Stack 
{
    private:
        enum {MAX = 10};  // constant specific to class
        Item items[MAX];  // holds stack items
        int top; // index for top stack
    public:
        Stack();
        bool isempty() const;
        bool isfull() const;
        // push() returns false if stack already is full, true otherwise
        bool push(const Item & items);  // add item to stack
        // pop() returns false if stack already is empty, true otherwise
        bool pop(Item & item); // pop top into item
};


#endif