// Q: Group sales.product_total by address.province

db.sales.aggregate([
  {
    $group: {
      _id: {provice: "$address.province"},
      product_total: {
        $sum: "$sales.product_total"
      }
    }
  },
  {
    $sort: {
      "_id.provice": 1
    }
  }
])