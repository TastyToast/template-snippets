## Example Usage:
---
### Options

`fbpage` - Can be a page name (e.g. wildfireinteractive) or ID (e.g. 36245452776).  
`element` - The ID of an element in which to insert the total current number of likes on the page.  
`meter` - The ID of an element which will have it's height set to a percentage of likes towards the goal.  
`starting` - The base number of likes. If you're targeting an overall goal like 100,000 total fans on the page, you can set it to 0. Otherwise set it to your current fan count when you launch your page.  
`goal` - The target number of likes you want to reach.  

### Example 1
Output Total Fan Count to #like_amount, goal is 100,000 total fans.

    like_count({
    	fbpage: 'wildfireinteractive', 
    	element: 'like_amount', 
    	meter: 'like_meter',
    	starting: 0,
    	goal: 100000
    });

### Example 2
Output New Fan Count to #like_amount, starting with 50,000 fans and setting a goal of 10,000 more

    like_count({
    	fbpage: 'wildfireinteractive',
    	element: 'like_amount', 
    	meter: 'like_meter',
    	starting: 50000,
    	goal: 60000
    });