var Node = function(val){
    this.val = val;
    this.next = null;
}

var MyLinkedList = function() {
    this.head = null;
    this.size = 0;
};

/** 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index) {

      if(index<0 || index>=this.size) return -1 ;

        let ele = this.head;

        for(let i=0; i<index; i++){
            ele = ele.next;
        }

        return ele.val;
    
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {

     
      let node = new Node(val);
      node.next = this.head;
      this.head = node;   
      this.size++;
    
    
};

/** 
 * @param {number} val
 * @return {void}
 */


MyLinkedList.prototype.addAtTail = function(val) {

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
        ele.next = node;
        this.size++;
    
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {

    if(index < 0 || index > this.size) return -1;

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
    
};

/** 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {

    
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
        this.size--;

    
    
};

/** 
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */