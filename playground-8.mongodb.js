// Q: Find the avg losses by games code for users with 
// active status and who logged in in the years 2014 or 2016
// Hint: you have to use $unwind before you can do group.

db.games.aggregate([
  {$match: {
    $and: [
      {"status": "active"},
      {$or: [
        {"join_date": /^2014/},
        {"join_date": /^2016/},
        {"last_login_date": /^2014/},
        {"last_login_date": /^2016/},
      ]}
    ]
  }},
  {$unwind: "$games"},
  {$group: {
    _id: {gameCode: "$games.code"},
    avgLosses: {
      $avg: "$games.losses"
    }
  }},
  {$sort: {
    avgLosses: -1
  }}
])