// 이진 힙(binary heap)
// 이진 힙은 CBT(Complete Binary Tree)의 일종으로, 힙 속성을 만족하는 CBT를 말한다.

// CBT는 마지막 레벨을 제외한 모든 레벨이 완전히 채워져 있고, 마지막 레벨은 왼쪽부터 채워져 있는 트리를 말한다.
// CBT는 배열로 표현할 수 있으며, 배열의 인덱스는 0부터 시작한다.
// CBT의 부모 노드에서 자식 노드를 구할때는 2X+1, 2X+2를 사용한다.
// CBT의 자식 노드에서 부모 노드를 구할때는 (X-1)/2를 사용한다.

// 이진 힙은 최대 힙(max heap)과 최소 힙(min heap)으로 구분된다.
