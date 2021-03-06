
// modified Stack template
#ifndef Steve
#define Steve

template <class T>
class Stack 
{
    private:
        enum {SIZE = 10};  // default size
        int stacksize;
        T * items;      // holds stack items
        int top;           // index for top stack item
    public:
        explicit Stack(int ss = SIZE);
        Stack(const Stack & st);
        ~Stack() { delete [] items; }
        bool isempty() { return top == 0; }
        bool isfull() { return top == stacksize; }
        bool push(const T & item); // add item to stack
        bool pop(T & item);       // pop top into item
        Stack & operator=(const Stack & st);

};

template <class T>
Stack<T>::Stack(int ss) : stacksize(ss), top(0)
{
    items = new T [stacksize];
}

template <class T>
Stack<T>::Stack(const Stack & st)
{
    stacksize = st.stacksize;
    top = st.top;
    items = new T [stacksize];
    for (int i = 0; i < top; i++)
        items[i] = st.items[i];
}

template <class Type>
bool Stack<Type>::push(const Type & item)
{
    if (top < stacksize)
    {
        items[top++] = item;
        return true;
    }
    else
        return false;
}

template <class T>
Stack<T> & Stack<T>::operator=(const Stack<T> & st)
{
    if (this == &st)
        return *this;
    delete [] items;
    stacksize = st.stacksize;
    top = st.top;
    items = new T [stacksize];
    for (int i = 0; i < top; i++)
        items[i] = st.items[i];
    return *this;
}
#endif