db.products.aggregate([
    
    {
        
        $group: { _id: "$category", count:{$sum: 1},averageProductPrice:{
            $avg: "$price"
        }
            
        }
    },
    {
        
        $project: {
            
            category:"_id",
            avgPrice:"$averageProductPrice"
            
        }
        
        
    }
    
    
    ])