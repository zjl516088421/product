module.exports=[
    {
        router:"/news/newsList",
        method:"get",
        request:{
            page:Number
        }
    },
    {
        router:"/news/newsContent",
        method:"get",
        ctrl:ctrl.login
    }
]