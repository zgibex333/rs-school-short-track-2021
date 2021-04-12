/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined with this interface
 * function ListNode(x) {
 *   this.value = x;
 *   this.next = null;
 * }
 */

function removeKFromList(l) {
  const list = l; 
  l.value = 100;
  return l;
  //   let nextItem = l.next;
//   if (current === k) {
//     current = 100;
//     return l;
//   }
//   while (nextItem === null) {
//     current = nextItem;
//     nextItem = nextItem.next;
//   }
//   return l;
// }
}

module.exports = removeKFromList;
