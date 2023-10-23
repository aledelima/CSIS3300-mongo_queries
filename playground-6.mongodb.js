// Q: In Sales collection, which province buys on average most meat?

db.sales.aggregate([
  {$match: {
      "sales.product_category": "Meat"
  }},
  {$group: {
    _id: {
      province: "$address.province"
  },
    avgSales: {
      $avg: "$sales.product_qty"
    }
  }},
  {
    $sort: {avgSales: -1}
  },
  {
    $limit: 1
  }
])