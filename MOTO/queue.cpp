#include "queue.h"
#include <cstdlib>  // for rand()

// Queue methods
Queue::Queue(int qs) : qsize(qs)
{
    front = rear = NULL;
    items = 0;
}

Queue::~Queue()
{
    Node * temp;
    while (front != NULL)
    {
        temp = front;  // save address of front item
        front = front->next;  // reset pointer to next item
        delete temp; // delete former front
    }
}

bool Queue::isempty() const
{
    return items == 0;
}

bool Queue::isfull() const 
{
    return items == qsize;
}

int Queue::queuecount() const 
{
    return items;
}

// Add item to queue
bool Queue::enqueue(const Item & item)
{
    if (isfull())
        return false;
    Node * add = new Node; // create a node
    add->item = item; // set node pointers
    add->next = NULL;
    items++;
    if (front == NULL) // if queue is empty place item at front
        front = add;
    else 
        rear->next =  add; // else place at rear
    rear = add;
    return true;
}

// Place front item int  item variable and remove from queue
bool Queue::dequeue(Item & item)
{
    if (front == NULL)
        return false;
    item = front->item; // set item to first item in queue
    items--;
    Node * temp = front; // save location of first item
    front = front->next; // reset front to next item
    delete temp;
    if (items == 0)
        rear = NULL;
    return true;
}

// customer method
// when is the time at which the customer arrives
// the arrival time is set to when and the processing
// time set to a random value in the range 1 - 3
void Customer::set(long when)
{
    processtime = std::rand() % 3 + 1;
    arrive = when;
}