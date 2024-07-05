class ListNode{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}


class LinkedList{

    constructor(){
        this.head = new ListNode(-1);
        this.tail = this.head;
    }

    insertEnd(val){
        this.tail.next = new ListNode(val);
        this.tail = this.tail.next;
    }

    remove(index){

        let i = 0;
        let currentNode;
        currentNode = this.head;
        while(i < index && currentNode != null){
            i++;
            currentNode = currentNode.next;
        }

        // remove the node ahead of currentNode
        if (currentNode != null){
            currentNode.next = currentNode.next.next;
        }

    }

    printList(){
        let currentNode = this.head.next;
        let s = '';
        while( currentNode!=null){
            s += currentNode.val + " -> ";
            currentNode = currentNode.next;
        }

        console.log(s);
    
    }


}





let linkedList = new LinkedList();

linkedList.insertEnd(1);
linkedList.insertEnd(12);
linkedList.insertEnd(123);
linkedList.insertEnd(1234);
linkedList.printList();
console.log(linkedList)