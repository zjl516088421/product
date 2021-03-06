define({ "api": [
  {
    "type": "post",
    "url": "/upload",
    "title": "上传文件",
    "version": "1.0.0",
    "name": "upload",
    "group": "Common",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "acces-token",
            "description": "<p>用户token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Binary",
            "optional": false,
            "field": "file",
            "description": "<p>上传文件</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>结果标识</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>结果说明</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>结果数据</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/11 200 OK\n{\n  \"code\": 1,\n  \"mess\": \"成功\",\n  \"data\": {}\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/api/upload.js",
    "groupTitle": "Common"
  },
  {
    "type": "post",
    "url": "/user/integralList",
    "title": "用户积分",
    "version": "1.0.0",
    "name": "integralList",
    "group": "User",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "acces-token",
            "description": "<p>用户token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "page",
            "description": "<p>页索引</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "size",
            "description": "<p>分页大小</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>结果标识</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>结果说明</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>结果数据</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/11 200 OK\n{\n  \"code\": 1,\n  \"mess\": \"成功\",\n  \"data\": {}\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/api/user.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/user/modifyInfo",
    "title": "修改信息",
    "version": "1.0.0",
    "name": "modifyInfo",
    "group": "User",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "acces-token",
            "description": "<p>用户token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>用户名</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "nation",
            "description": "<p>民族</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "wx_num",
            "description": "<p>微信号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "qq_num",
            "description": "<p>QQ号</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "age",
            "description": "<p>年龄</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sex",
            "description": "<p>性别</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "birthday",
            "description": "<p>民族</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "education",
            "description": "<p>教育程度</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "job_rank",
            "description": "<p>职称</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>住址</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>结果标识</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>结果说明</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>结果数据</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/11 200 OK\n{\n  \"code\": 1,\n  \"mess\": \"成功\",\n  \"data\": {}\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/api/user.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/user/updatePwd",
    "title": "修改密码",
    "version": "1.0.0",
    "name": "updatePwd",
    "group": "User",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "acces-token",
            "description": "<p>用户token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "newPwd",
            "description": "<p>用户的新密码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "oldPwd",
            "description": "<p>用户旧密码</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>结果标识</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>结果说明</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>结果数据</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/11 200 OK\n{\n  \"code\": 1,\n  \"mess\": \"成功\",\n  \"data\": {}\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/api/user.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/user/userDetailt",
    "title": "用户详情",
    "version": "1.0.0",
    "name": "userDetailt",
    "group": "User",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "acces-token",
            "description": "<p>用户token</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>结果标识</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>结果说明</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>结果数据</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/11 200 OK\n{\n  \"code\": 1,\n  \"mess\": \"成功\",\n  \"data\": {}\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/api/user.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/user/userList",
    "title": "用户列表",
    "version": "1.0.0",
    "name": "userList",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "page",
            "description": "<p>用户的用户名或者手机号</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "size",
            "description": "<p>用户的密码</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>结果标识</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>结果说明</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>结果数据</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/11 200 OK\n{\n  \"code\": 1,\n  \"mess\": \"成功\",\n  \"data\": {}\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/api/user.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/user/userLogin",
    "title": "用户登录",
    "version": "1.0.0",
    "name": "userLogin",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "account",
            "description": "<p>用户的用户名或者手机号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>用户的密码</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>结果标识</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>结果说明</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>用户token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/11 200 OK\n{\n  \"code\": 1,\n  \"mess\": \"成功\",\n  \"data\": {}\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/api/user.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/forum/addComment",
    "title": "添加评论",
    "version": "1.0.0",
    "name": "addComent",
    "group": "forum",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "page",
            "description": "<p>页索引</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "size",
            "description": "<p>分页大小</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "type",
            "description": "<p>新闻类型</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>结果标识</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>结果说明</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>结果数据</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/11 200 OK\n{\n  \"code\": 1,\n  \"mess\": \"成功\",\n  \"data\": {}\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/api/forum.js",
    "groupTitle": "forum"
  },
  {
    "type": "post",
    "url": "/forum/addForum",
    "title": "发布帖子",
    "version": "1.0.0",
    "name": "addForum",
    "group": "forum",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "page",
            "description": "<p>页索引</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "size",
            "description": "<p>分页大小</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "type",
            "description": "<p>新闻类型</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>结果标识</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>结果说明</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>结果数据</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/11 200 OK\n{\n  \"code\": 1,\n  \"mess\": \"成功\",\n  \"data\": {}\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/api/forum.js",
    "groupTitle": "forum"
  },
  {
    "type": "get",
    "url": "/forum/commentList",
    "title": "评论列表",
    "version": "1.0.0",
    "name": "commentList",
    "group": "forum",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "page",
            "description": "<p>页索引</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "size",
            "description": "<p>分页大小</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "forum_id",
            "description": "<p>帖子id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>结果标识</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>结果说明</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>结果数据</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/11 200 OK\n{\n  \"code\": 1,\n  \"mess\": \"成功\",\n  \"data\": {}\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/api/forum.js",
    "groupTitle": "forum"
  },
  {
    "type": "get",
    "url": "/forum/forumDetail",
    "title": "帖子详情",
    "version": "1.0.0",
    "name": "forumDetail",
    "group": "forum",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "forum_id",
            "description": "<p>帖子id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>结果标识</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>结果说明</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>结果数据</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/11 200 OK\n{\n  \"code\": 1,\n  \"mess\": \"成功\",\n  \"data\": {}\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/api/forum.js",
    "groupTitle": "forum"
  },
  {
    "type": "get",
    "url": "/forum/forumList",
    "title": "帖子列表",
    "version": "1.0.0",
    "name": "forumList",
    "group": "forum",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "page",
            "description": "<p>页索引</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "size",
            "description": "<p>分页大小</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>结果标识</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>结果说明</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>结果数据</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/11 200 OK\n{\n  \"code\": 1,\n  \"mess\": \"成功\",\n  \"data\": {}\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/api/forum.js",
    "groupTitle": "forum"
  },
  {
    "type": "get",
    "url": "/news/newsContent",
    "title": "新闻详情",
    "version": "1.0.0",
    "name": "newsContent",
    "group": "news",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>新闻id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>结果标识</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>结果说明</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>结果数据</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/11 200 OK\n{\n  \"code\": 1,\n  \"mess\": \"成功\",\n  \"data\": {}\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/api/news.js",
    "groupTitle": "news"
  },
  {
    "type": "get",
    "url": "/news/newsList",
    "title": "新闻列表",
    "version": "1.0.0",
    "name": "newsList",
    "group": "news",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "page",
            "description": "<p>页索引</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "size",
            "description": "<p>分页大小</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "type",
            "description": "<p>新闻类型</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>结果标识</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>结果说明</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>结果数据</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/11 200 OK\n{\n  \"code\": 1,\n  \"mess\": \"成功\",\n  \"data\": {}\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/api/news.js",
    "groupTitle": "news"
  }
] });
