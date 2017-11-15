/**
 * Created by zhangjinlei on 17/10/19.
 */
var User = require('tb_user')


/*查询所有*/
User.findAll({
    where:{
      sex:1
    },
    attributes:['id', 'username']
  })
  .then(function (res) {
    console.log(JSON.stringify(res))
  })
  .catch(function (ex) {
    console.log(ex)
  })

/*
* 分页查询
* */

User.findAndCountAll({
    'limit': 10,
    'offset': 20,
    attributes:{exclude:['password']},
    where: {sex: 1}
  })
  .then(function (res) {
    console.log(JSON.stringify(res))
  })
  .catch(function (ex) {
    console.log(ex)
  })

/*添加*/

User.create({
    username: 'wo shi 1111111',
    password: '12312321321312312321313',
    id_card: '11011011101110110'
  })
  .then(function (res) {
    console.log(JSON.stringify(res))
  })
  .catch(function (ex) {
    console.log(ex)
  })



