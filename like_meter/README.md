## Example Usage:
Output Total Fan Count to #like_amount, goal is 100,000 total fans.

    like_count({
    	fbpage: 'wildfireinteractive', 
    	element: 'like_amount', 
    	meter: 'like_meter',
    	format: 'total',
    	starting: 0,
    	goal: 100000
    });

Output New Fan Count to #like_amount, starting with 50,000 fans and setting a goal of 10,000 more

    like_count({
    	fbpage: 'wildfireinteractive', // Can be a page name (vanity URL) or ID
    	element: 'like_amount', 
    	meter: 'like_meter',
    	starting: 50000,
    	goal: 60000
    });