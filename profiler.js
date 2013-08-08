// Test to make a bunch of queues

var a = [];

var testQueueInstantiation = function(num) {
	for(var i = 0; i<num; i++) {
		// Change this line depending on style
		a[i] = makeQueue();
	}
}

var testQueueUse = function(times) {
	for( var j = 0; j<a.length; j++ ) {
		var firstTimes = times || 30;
		while(firstTimes) {
			a[j].enqueue(j);
			firstTimes--;
		}
		while(times) {
			a[j].dequeue();
			times--;
		}
	}
}

testQueueInstantiation(1000000);
testQueueUse(100);
alert('done');