// Q: In users collection find average age of users by 
// status for the users who joined in 2013.

db.users.aggregate([
  {$match: {
      "join_date": /^2013/
  }},
  {$group: {
    _id: {
      status: "$status"
    },
    avgAge: {
      $avg: "$age"
    }
  }},
  {$sort: {
    status: 1
  }}
])