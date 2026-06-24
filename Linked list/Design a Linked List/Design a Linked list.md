# Linked list 

- Linked list is linear data structure
- nodes are connected through reference
- each node have data and reference to next node
- single linked list node have data and reference to next node
- doubly linked list node have data and reference to next node and reference to previous node
- linked list is represented by Head
- last linked list reference is null
- linked list and array both are linear data structure
- linked list has easy to add and remove node anywhere
- Hard to add and remove element in array
- It is hard to access elements in LinkedList
- It is easy to access the elements in arrays
- arrays has continues memory location
- linked list has dynamic memory locations
- arrays has static memory
- LinkedList has dynamic memory

---

## creating the Node 

```js

    function Node(val){
        this.val = val;
        this.next = null;
    }

```

## creating the linked list

```js

    function MyLinkedList(){
        this.head = null;
        this.size = 0;
    }

```

## Add the element at the Head of linkedlist

```js

    MyLinkedList.prototype.addAtHead = function(val){
      let node = new Node(val);
      node.next = this.head;
      this.head = node;   
      this.size++;
    }

```

## Add the element at the index of linkedlist


```js

    MyLinkedList.prototype.addAtIndex = function(index, val){

        if(index < 0 || index > this.size) return ;

        if(index == 0){
            let node = new Node(val);
            node.next = this.head;
            this.head = node;
            this.size++;
            return;  
        }

        let ele = this.head;
        for(let i=0; i<index-1; i++){
            ele = ele.next;
        }

        let temp = ele.next;
        
        let node = new Node(val);
        node.next = temp;
        ele.next = node;
        this.size++;
    }

```

## Adding the element at the tail of the linkedlist

```js

    MyLinkedList.prototype.addAtTail = function(val){

        let node = new Node(val);
        if(this.head === null){
            this.head = node;
            this.size++;
            return;
        }

        let ele = this.head;
        while(ele.next !== null){
            ele = ele.next;
        }
        ele.next  = node;
        this.size++;
    }

```

### delete at index in Linkedlist 

```js

    MyLinkedList.prototype.deletAtIndex = function(index){
        if(index < 0 || index >= this.size){
             return;
        }

        if(index === 0){
            this.head = this.head.next;
            this.size--;
            return;
        }

        let ele = this.head;

        for(let i=0; i<index-1; i++){
            ele = ele.next;
        }

        ele.next = ele.next.next;
        size--;

    }

```

### Get the element at the index in the linkedlist

```js

    MyLinkedList.prototype.getAtIndex = function(index){

        if(index<0 || index>=this.size) return ;

        let ele = this.head;

        for(let i=0; i<index; i++){
            ele = ele.next;
        }

        return ele.val;
    }

```

Final working code is in .js file