var User=require('./models/user')
var User2=require('./models/user2')

/* 查询单个*/
User2.find({where:{id:1}})
.then(function (res) {
	console.log(JSON.stringify(res))
})
.catch(function (ex) {
	console.log(ex)
})

/*查询所有*/
User.findAll({where:{sex:1},attributes:['id','username']})
	.then(function (res) {
		console.log(JSON.stringify(res))
	})
	.catch(function (ex) {
		console.log(ex)
	})

/*分页查询所有，有条件*/
var param = {
	'limit': 10,
	'offset': 20,
	attributes:{exclude:['password']},//不包含
	where: { sex:1 }
}
User.findAndCountAll(param)
	.then(function (res) {
		console.log(JSON.stringify(res))
	})
	.catch(function (ex) {
		console.log(ex)
	})

/*添加*/
var user={
	username:'wo shi 1111111',
	password:'12312321321312312321313',
	id_card:'11011011101110110'}
User.create(user)
	.then(function (res) {
		console.log(JSON.stringify(res))
	})
	.catch(function (ex) {
		console.log(ex)
	})

/*修改*/
User.update({username:'abcdefg'},{where:{id:1}})
	.then(function (res) {
		console.log(JSON.stringify(res))
	})
	.catch(function (ex) {
		console.log(ex)
	})

/*删除*/
User.destroy({where:{id:102}})
	.then(function (res) {
		console.log(JSON.stringify(res))
	})
	.catch(function (ex) {
		console.log(ex)
	})
