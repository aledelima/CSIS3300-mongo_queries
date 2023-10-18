// Q: find avg product_qty by province only in the western provinces (BC, AB, SK, MB)

db.sales.aggregate([
    {
        $match: {
            "address.province": {
                $in: ["BC", "AB", "SK", "MB"]
            }
        }    
    },
    {
        $group: {
          _id: {
            province: "$address.province"
          },
          avp_product_qty: {
            $avg: "$sales.product_qty"
          }
        }
    },
    {
        $sort: {
          "_id.province": 1
        }
    }
])