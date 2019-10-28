/*
    CRUD 增删改查
    
    C - create 
        db.collection.insert(文档对象)
    R - read
        db.collection.find(查询条件, 投影)
        db.collection.findOne(查询条件, 投影);
        操作符：
          1. > >= < <= !=  $gt $gte $lt $lte $ne
          2. 或 $in $or
          3. 正则表达式
          4. $where
        投影：过滤不必要的数据
    U - update
        db.collection.updateOne(查询条件，更新内容)
        db.collection.updateMany(查询条件，更新内容)
    D - delete
        db.collection.deleteOne(查询条件)
        db.collection.deleteMany(查询条件)
*/
/*

use test
db.students.insert({name: 'rose', age: 16});
db.students.insert([{name: 'tom', age: 20}, {name: 'jerry', age: 22}]);

db.students.find({age: 20, name: 'jack'});

db.students.find({age: {$lte: 20}});
// 或的条件有多个字段用$or
db.students.find({$or: [{age: 20}, {name: 'jack'}]});
// 或的条件只有一个字段用$in
db.students.find({name: {$in: ['jack', 'tom']}});

db.students.find({name: /^j/});

db.students.find({$where: function () {
    // 返回值为true就找到返回，返回值为false就不返回
    // this指向被查找的文档对象
    return this.name === 'jack' || this.age === 20 
}});


db.students.find({name: /^j/}, {name: 1, _id: 0});
db.students.findOne({name: /^j/}, {name: 1, _id: 0});

db.students.updateMany({}, {$inc: {age: -1}});
db.students.updateOne({name: 'jack'}, {$set: {age: 20}});
db.students.find({})

db.students.deleteOne({name: 'jack'});

*/
