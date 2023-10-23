// Q. In cust_sup, Find avg estimation days by department by 
// estimation effort when the cost was > 500
// Hint: You can do two group by, in the _id separated by comma 

db.cust_sup.aggregate([
  {$match: {
      "estimation.cost": {$gt: 500}
  }},
  {$group: {
    _id: {
      "department": "$department",
      "effort": "$estimation.effort"
    },
    avgDays: {
      $avg: "$estimation.days"
    }
  }},
  {
    $sort: {
      "_id.department": 1,
      "_id.effort: 1": 1
    }
  }
])