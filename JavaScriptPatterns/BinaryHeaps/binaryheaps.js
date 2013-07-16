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

// making use of prototype 
BinaryHeap.prototype = {
		/**
		 * function adding new element to the end of array
		 * @param element
		 */
		push: function(element) {
			this.content.push(element);
			//TODO write following function
			//this.bubbleUp(this.content.length - 1);
		},
		
		pop: function() {
			var result = this.content[0];
			var end = this.content.pop();
			if(this.content.length > 0){
				this.content[0] = end;
				//TODO write following functionality
				this.sinkDown(0);
			}
		},
		
}