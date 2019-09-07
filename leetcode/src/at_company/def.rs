#[derive(Debug)]
struct Node {
    next: Option<Box<Node>>,
    val: i32,
}

impl Node {
    fn new(val: i32) -> Self {
        Node {
            next: None,
            val: val,
        }
    }

    fn display(&mut self) {
        let mut next = &self.next;
        println!("val: {}", self.val);

        while next.is_some() {
            if let Some(inner_node) = next {
                println!("val: {}", inner_node.val);
                next = &inner_node.next;
            }
        }
    }

    fn disp(&mut self) {
        println!("disp: {}", self.val);
        let mut cur = Node::new(0);
        cur.next = self.next.take();
        while let Some(mut node) = cur.next {
            println!("disp: {}", node.val);
            // self.next = cur.next.take(); // 赋值不回去了, 造成链表遍历一次后节点都消耗没了

            cur.next = match node.next {
                Some(_) => node.next.take(),
                _ => None,
            };
        }
    }

    fn add(&mut self) {
        self.val += 1;
    }
}

pub fn test() {
    let mut node1 = Node::new(1);
    let mut node2 = Node::new(2);
    let node3 = Node::new(3);

    node2.next = Some(Box::new(node3));
    node1.next = Some(Box::new(node2));

    node1.disp();
    node1.display();

    println!("====================");
    let mut node = Some(Box::new(node1));
    while node.is_some() {
        if let Some(mut inner_node) = node {
            println!("val: {}", inner_node.val);
            inner_node.add();
            println!("{:?}", inner_node);
            node = inner_node.next;
        }
    }

    // node1.display();
    // println!("{:?}", &node1); // value borrowed here after move

}
