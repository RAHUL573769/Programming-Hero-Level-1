// db.products.find({})

db.products.updateOne({_id: ObjectId("6844ff1260248a02aeb72772")},{$addToSet: {comments:"Mu New  New Comments"})

db.products.find({})
