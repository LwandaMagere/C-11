// interface for a queue
#ifndef QUEUE_H_
#define QUEUE_H_
// This queue will contain Customer items
class Customer
{
    private:
        long arrive;  // arrival time for customer
        int processtime; // processing time for customer
    public:
        Customer(){ arrive = processtime = 0; }
        void set(long when);
        long when() const { return arrive; }
        int ptime() const { return processtime;}
};

typedef Customer Item;

class Queue
{
    private:
        int items; // current number of items in Queue
        const int qsize; // maximum number of items in Queue
        enum { Q_SIZE =  10};
        stuct Node 
        {
            Item item;
            struct Node * next;
        };
        Node * front;
        Node * rear;
        
        Queue(const Queue & q) : qsize(0){}
        Queue & operator=(const Queue & q) { return *this;}
    public:
        Queue(int qs = Q_SIZE); // create queue with a qs limit
        ~Queue();
        bool isempty() const;
        bool isfull() const;
        int queuecount() const;
        bool enqueue(const Item & item); // add item to end
        bool dequeue(Item &item);
};
#endif