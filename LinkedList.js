class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    add(value) {
        if (this.length === 0) {
            this.head = new Node(value);
        } else {
            let current = this.head;

            while(current.next) {
                current = current.next;
            }

            current.next = new Node(value);
        }

        this.length++;
    }

    insert(position, value) {
        if (position < 0 || this.length < position) {
            return false;
        }
        
        let node = new Node(value);

        if (position === 0) {
            node.next = this.head;
            this.head = node;
        } else {
            let current = this.head;
            let prev = null;
            let index = 0;

            while(index < position) {
                prev = current;
                current = current.next;
                index++;
            }

            prev.next = node;
            node.next = current;
        }

        this.length++;
    }

    removeAt(position) {
        if (position < 0 || this.length <= position) {
            return null;
        }

        let current = this.head;

        if (position === 0) {
            this.head = current.next;
        } else {
            let prev = null;
            let index = 0;

            while (index < position) {
                prev = current;
                current = current.next;
                index++;
            }

            prev.next = current.next;
        }

        this.length--;
        return current.value;
    }

    remove(element) {
        this.removeAt( this.indexOf(element) );
    }

    indexOf(element) {
        let current = this.head;
        let index = 0;

        while (current) {
            if (current.value === element) {
                return index;
            }

            current = current.next;
            index++;
        }

        return -1;
    }

    get(position) {
        if (position < 0 || this.length <= position ) {
            return null;
        }

        let current = this.head;
        let index = 0;

        while (index < position) {
            current = current.next;
            index++;
        }

        return current.value;
    }
    
    isEmpty() {
        return this.length === 0;
    }

    size() {
        return this.length;
    }

    print() {
        let current = this.head;

        while(current) {
            console.log(current.value);
            current = current.next;
        }
    }
}

/*
let list = new LinkedList();
let something = {a: 17};

list.add(something);
list.add({b: 35});
list.add({c: 59});

console.log(list.indexOf(something));

list.print();
*/




















