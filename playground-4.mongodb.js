// Q: Get average quantity for overall sales for 2012

db.sales.aggregate([
    {
      $match: {
        join_date: /^2012/
      }  
    },
    {
        $group: {
          _id: null,
          avg_qty: {
            $avg: "$sales.product_qty"
          }
        }
    }
])