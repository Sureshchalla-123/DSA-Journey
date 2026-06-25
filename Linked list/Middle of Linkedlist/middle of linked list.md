# Finding the middle element of a linked list can be done using the two-pointer technique. The idea is to use two pointers, one moving at twice the speed of the other. When the faster pointer reaches the end of the list, the slower pointer will be at the middle.

 - Take two pointers slow and fast 
 - slow pointer moves one step at a time 
 - fast pointer moves two steps at a time
 - if the fast pointer reaches the end of the list, the slow pointer will be at the middle node.
 - then return the middle node.


## Here is a simple implementation in JavaScript:

```js

    let middleOfLinkedList = function(head){
        let slow = head;
        let fast = head;

        while(fast !== null || fast.nex !== null){
            slow = slow.next;
            fast = fast.next.next;
        }

        return slow

    }

```