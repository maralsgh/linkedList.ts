class NodeT<T>{
    public item : T | null;
    public next : NodeT<T> | null;

    constructor(item: T | null = null) {
        this.item = item;
        this.next = null;
    }
}

class LinkedList<T> {
    private head: NodeT<T>;
    private tail: NodeT<T>;

    constructor() {
        this.head = new NodeT<T>();
        this.tail = new NodeT<T>();
        this.head.next = this.tail;
    }


    public isEmpty(): boolean {
      return this.head.next === this.tail;

    }

    public insertFirst(item: T) {
        const newNode = new NodeT<T>(item);
        newNode.next = this.head.next;
        this.head.next = newNode;

    }

    public insertLast(item: T): void {
        const newNode = new NodeT<T>(item);
        let cur : NodeT<T> = this.head;
         while (cur && cur.next !== this.tail){
             cur = cur.next;
         }

         if(cur){
             newNode.next = this.tail;
             cur.next = newNode;
         }
    }
    public removeFirst(): T | null {

        if (this.isEmpty()) {
            throw new Error('List is empty');
        }

        let rv: NodeT<T> | null = this.head.next;
        if(rv){
            this.head.next = rv.next;
            rv.next = null;
        }
      return rv? rv.item : null;

    }

    public remove(searchKey: T): T | null {

        let rv: NodeT<T> | null;
        let cur : NodeT<T> = this.head;

        while (cur.next && cur.next.item !== searchKey) {
            cur = cur.next;
        }

        if(cur.next){
            rv = cur.next;
            cur.next = cur.next.next;
            rv.next = null;
        }
        return rv && rv.item ? rv.item : null;
    }

    public contains(searchItem: T): boolean {
        let rv: boolean = false;
        let cur: NodeT<T> | null = this.head;

        while (cur && cur.next !== this.tail) {
            if (cur.next && cur.next.item === searchItem) {
                rv = true;
                break;
            }
            cur = cur.next;
        }

        return rv;
    }

    public getFirst(): T | null {
       return this.head.next? this.head.next.item : null;
    }

}

var link = new LinkedList();
// console.log(link.isEmpty());
link.insertFirst('maral');
link.insertFirst('uuu');
link.insertFirst('yyy');
link.insertLast('hhh');
link.removeFirst();
console.log(link);
