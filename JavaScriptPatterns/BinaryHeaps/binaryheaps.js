//binary Heap 
/**
 * function
 * @param scoreFunction
 * @returns
 */
function BinaryHeap(scoreFunction) {
	this.content = [];
	this.scoreFunction = scoreFunction;
}