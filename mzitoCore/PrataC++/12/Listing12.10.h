// A Queue Simulation
// First, you need to list the attributes of  the kind of queue you’ll need:

// -- A queue holds an ordered sequence of items.
// -- A queue has a limit on the number of items it can hold.
// -- You should be able to create an empty queue.
// -- You should be able to check whether a queue is empty.
// -- You should be able to check whether a queue is full.
// -- You should be able to add an item to the end of a queue.
// -- You should be able to remove an item from the front of a queue.
// -- You should be able to determine the number of items in the queue.

/*After you determine the interface, you can implement it. First, you have to decide how to
represent the queue data. One approach is to use new to dynamically allocate an array with
the required number of elements. However, arrays aren’t a good match to queue opera-
tions. For example, removing an item from the front of the array should be followed up by
shifting every remaining element one unit closer to the front. Otherwise, you need to do
something more elaborate, such as treat the array as circular. Using a linked list, however, is
a reasonable fit to the requirements of a queue.A linked list consists of a sequence of
nodes. Each node contains the information to be held in the list, plus a pointer to the next
node in the list. For the queue in this example, each data part is a type Item value, and
you can use a structure to represent a node:*/

/*If you have the address of the first node, you can
follow the pointers to each subsequent node in the list. Commonly, the pointer in the last
node in the list is set to NULL (or, equivalently, to 0 ) to indicate that there are no further
nodes.*/

/*You can use a data member of the Queue class to point to the beginning of the list. In principle, 
that’s all the information you needbecause you can trace down the chain of nodes to find any other node.
However, becausea queue always adds a new item to the end of the queue, it is convenient to have a data
member point to the last node, too. In addition, you can use data members to keep track of the maximum number
of items allowed in the queue and of the current number of items.*/

/*Hmmm.You’ve seen that classes that use new usually require explicit copy constructors
and assignment operators that do deep copying. Is that the case here? The first question to
answer is,“Does the default memberwise copying do the right thing?”The answer is no.
Memberwise copying of a Queue object would produce a new object that points to the
front and rear of the same linked list as the original.Thus, adding an item to the copy
Queue object changes the shared linked list.That’s bad enough.What’s worse is that only
the copy’s rear pointer gets updated, essentially corrupting the list from the standpoint of
the original object. Clearly, then, cloning or copying queues requires providing a copy
constructor and an assignment constructor that do deep copying.
Of course, that raises the question of why you would want to copy a queue.Well, per-
haps you would want to save snapshots of a queue during different stages of a simulation.
Or you would like to provide identical input to two different strategies.Actually, it might
be useful to have operations that split a queue, the way supermarkets sometimes do when
opening an additional checkout stand. Similarly, you might want to combine two queues
into one or truncate a queue.
But suppose you don’t want to do any of these things in this simulation. Can’t you sim-
ply ignore those concerns and use the methods you already have? Of course you can.
However, at some time in the future, you might need to use a queue again, but with copy-
ing.And you might forget that you failed to provide proper code for copying. In that case,
your programs will compile and run, but they will generate puzzling results and crashes.
So it would seem that it’s best to provide a copy constructor and an assignment operator,
even though you don’t need them now.*/

/*Fortunately, there is a sneaky way to avoid doing this extra work while still protecting
against future program crashes.The idea is to define the required methods as dummy private 
methods:*/

/*This has two effects. First, it overrides the default method definitions that otherwise
would be generated automatically. Second, because these methods are private, they can’t
be used by the world at large.That is, if nip and tuck are Queue objects, the compiler
won’t allow the following:

Queue snick(nip);  // not allowed
tuck = nip;         // not allowed

Therefore, instead of being faced with mysterious runtime malfunctions in the future,
you’ll get an easier-to-trace compiler error, stating that these methods aren’t accessible.
Also this trick is useful when you define a class whose objects really should not be copied.
*/

// queue.h -- interface for a queue
#ifndef QUEUE_H_
#define QUEUE_H_
// This queue will contain Customer items
class Customer
{
    private:
        long arrive;        // arrival time for customer
        int processtime;    // processing time for customer
    public:
        Customer(){arrive = processtime = 0;}
        void set(long when);
        long when() const { return arrive;}
        int ptime() const { return processtime;}
};

typedef Customer Item;

class Queue
{
    private:
        struct Node
        {
            Item item;
            struct Node * next;
        };
        enum { Q_SIZE  = 10 };
        Node * front;       // pointer to front of Queue
        Node * rear;        // pointer to rear of Queue
        int items;          // current number of items in Queue
        const int qsize;    // maximum number of items in Queue
        // preemptive definitions to prevent public copying
        Queue(const Queue & q) : qsize(0){}
        Queue & operator=(const Queue & q) {return *this;}
    public:
        Queue(int qs = Q_SIZE); // create queue with a qs limit
        ~Queue();
        bool isempty() const;
        bool isfull() const;
        int queuecount() const;
        bool enqueue(const Item &   item); // add item to end
        bool dequeue(Item & item);       // remove item from front
        
};
#endif