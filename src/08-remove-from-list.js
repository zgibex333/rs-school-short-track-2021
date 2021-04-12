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

//  var list ={ value k, next: {
//                          value: 2, next: {
//                                   value: 3, next: null }}}

// скорее всего когда ты перезаписываешь текущее значение,
// ты пишешь что-то вроде "current = current.next",
// а нужно "current.value = current.next.value" - 1 строка,
//  "current.next = current.next.next' - 2 строка
// я все не мог перезаписать ссылку, оказывается чтобы
// перезаписать ссылку нужно обязательно указать .
// next у перезаписываемого, до меня долго доходило
// Если проблема не в этом, тогда есть время найти другую проблему)

function removeKFromList(l, k) {
  let current = l;
  let last;

  if (current.value !== k) {
    last = current;
  } else {
    current = current.next;
    last = current;
  }

  while (current.next) {
    const nextNode = current.next;
    if (nextNode.value === k) {
      current.next = nextNode.next;
    } else {
      current = nextNode;
    }
  }
  return last;
}

module.exports = removeKFromList;
