/*
 Navicat Premium Data Transfer

 Source Server         : dmo10 mongo
 Source Server Type    : MongoDB
 Source Server Version : 50009
 Source Host           : 10.197.77.169:8017
 Source Schema         : jianshu

 Target Server Type    : MongoDB
 Target Server Version : 50009
 File Encoding         : 65001

 Date: 23/06/2022 19:06:34
*/


// ----------------------------
// Collection structure for articles
// ----------------------------
db.getCollection("articles").drop();
db.createCollection("articles");

// ----------------------------
// Documents of articles
// ----------------------------
session = db.getMongo().startSession();
session.startTransaction();
db = session.getDatabase("jianshu");
db.getCollection("articles").insert([ {
    _id: ObjectId("62adb6cf97af6327652104f3"),
    author: "62adb40d97af6327652104f2",
    authorName: "牛牛平常",
    title: "回乡下住别墅",
    thumbnail: "https://img0.baidu.com/it/u=1638390144,3680654331&fm=253&fmt=auto&app=120&f=JPEG?w=721&h=500",
    summary: "一女性朋友，把她在花山300多平的独栋别墅卖了，跑二环内买了一套两居室一女性朋友，把她在花山300多平的独栋别墅卖了，跑二环内买了一套两居室一女性朋友，把她在花山300多平的独栋别墅卖了，跑二环内买了一套两居室一女性朋友，把她在花山300多平的独栋别墅卖了，跑二环内买了一套两居室一女性朋友，把她在花山300多平的独栋别墅卖了，跑二环内买了一套两居室一女性朋友，把她在花山300多平的独栋别墅卖了，跑二环内买了一套两居室一女性朋友，把她在花山300多平的独栋别墅卖了，跑二环内买了一套两居室",
    content: [
        {
            type: "text",
            value: "一女性朋友，把她在花山300多平的独栋别墅卖了，跑二环内买了一套两居室。"
        },
        {
            type: "text",
            value: "一女性朋友，把她在花山300多平的独栋别墅卖了，跑二环内买了一套两居室。"
        },
        {
            type: "text",
            value: "一女性朋友，把她在花山300多平的独栋别墅卖了，跑二环内买了一套两居室。"
        },
        {
            type: "text",
            value: "一女性朋友，把她在花山300多平的独栋别墅卖了，跑二环内买了一套两居室。"
        },
        {
            type: "text",
            value: "一女性朋友，把她在花山300多平的独栋别墅卖了，跑二环内买了一套两居室。"
        },
        {
            type: "text",
            value: "一女性朋友，把她在花山300多平的独栋别墅卖了，跑二环内买了一套两居室。"
        },
        {
            type: "image",
            value: "一女性朋友，把她在花山300多平的独栋别墅卖了，跑二环内买了一套两居室。"
        },
        {
            type: "text",
            value: "一女性朋友，把她在花山300多平的独栋别墅卖了，跑二环内买了一套两居室。"
        },
        {
            type: "text",
            value: "一女性朋友，把她在花山300多平的独栋别墅卖了，跑二环内买了一套两居室。"
        },
        {
            type: "text",
            value: "一女性朋友，把她在花山300多平的独栋别墅卖了，跑二环内买了一套两居室。"
        },
        {
            type: "text",
            value: "一女性朋友，把她在花山300多平的独栋别墅卖了，跑二环内买了一套两居室。"
        },
        {
            type: "text",
            value: "一女性朋友，把她在花山300多平的独栋别墅卖了，跑二环内买了一套两居室。"
        },
        {
            type: "text",
            value: "一女性朋友，把她在花山300多平的独栋别墅卖了，跑二环内买了一套两居室。"
        },
        {
            type: "text",
            value: "一女性朋友，把她在花山300多平的独栋别墅卖了，跑二环内买了一套两居室。"
        }
    ],
    totalText: 669,
    publishTime: "2022.04.06 07:43:58",
    updateTime: "2022.04.06 07:43:58",
    totalPay: 3,
    read: [
        "62adb40d97af6327652104f2"
    ],
    likes: [
        "62adb40d97af6327652104f2"
    ],
    payers: [
        "62adb40d97af6327652104f2"
    ],
    comments: [ ],
    diamonds: 4
} ]);
db.getCollection("articles").insert([ {
    _id: ObjectId("62adb75b97af6327652104f4"),
    author: "62adb40d97af6327652104f2",
    authorName: "牛牛平常",
    title: "测试文档1",
    thumbnail: "https://img0.baidu.com/it/u=1638390144,3680654331&fm=253&fmt=auto&app=120&f=JPEG?w=721&h=500",
    summary: "一女性朋友，把她在花山300多平的独栋别墅卖了，跑二环内买了一套两居室。一女性朋友，把她在花山300多平的独栋别墅卖了，跑二环内买了一套两居室。一女性朋友，把她在花山300多平的独栋别墅卖了，跑二环内买了一套两居室。一女性朋友，把她在花山300多平的独栋别墅卖了，跑二环内买了一套两居室。",
    content: [
        {
            type: "text",
            value: "一女性朋友，把她在花山300多平的独栋别墅卖了，跑二环内买了一套两居室。"
        },
        {
            type: "text",
            value: "一女性朋友，把她在花山300多平的独栋别墅卖了，跑二环内买了一套两居室。"
        },
        {
            type: "text",
            value: "一女性朋友，把她在花山300多平的独栋别墅卖了，跑二环内买了一套两居室。"
        },
        {
            type: "text",
            value: "一女性朋友，把她在花山300多平的独栋别墅卖了，跑二环内买了一套两居室。"
        },
        {
            type: "text",
            value: "一女性朋友，把她在花山300多平的独栋别墅卖了，跑二环内买了一套两居室。"
        },
        {
            type: "text",
            value: "一女性朋友，把她在花山300多平的独栋别墅卖了，跑二环内买了一套两居室。"
        },
        {
            type: "image",
            value: "一女性朋友，把她在花山300多平的独栋别墅卖了，跑二环内买了一套两居室。"
        },
        {
            type: "text",
            value: "一女性朋友，把她在花山300多平的独栋别墅卖了，跑二环内买了一套两居室。"
        },
        {
            type: "text",
            value: "一女性朋友，把她在花山300多平的独栋别墅卖了，跑二环内买了一套两居室。"
        },
        {
            type: "text",
            value: "一女性朋友，把她在花山300多平的独栋别墅卖了，跑二环内买了一套两居室。"
        },
        {
            type: "text",
            value: "一女性朋友，把她在花山300多平的独栋别墅卖了，跑二环内买了一套两居室。"
        },
        {
            type: "text",
            value: "一女性朋友，把她在花山300多平的独栋别墅卖了，跑二环内买了一套两居室。"
        },
        {
            type: "text",
            value: "一女性朋友，把她在花山300多平的独栋别墅卖了，跑二环内买了一套两居室。"
        },
        {
            type: "text",
            value: "一女性朋友，把她在花山300多平的独栋别墅卖了，跑二环内买了一套两居室。"
        }
    ],
    totalText: 669,
    publishTime: "2022.04.06 07:43:58",
    updateTime: "2022.04.06 07:43:58",
    totalPay: 0,
    read: [
        "62adb40d97af6327652104f2"
    ],
    likes: [ ],
    payers: [ ],
    comments: [ ],
    diamonds: 2
} ]);
db.getCollection("articles").insert([ {
    _id: ObjectId("62adb76697af6327652104f5"),
    author: "62adb40d97af6327652104f2",
    authorName: "牛牛平常",
    title: "测试文档2",
    thumbnail: "https://img0.baidu.com/it/u=1638390144,3680654331&fm=253&fmt=auto&app=120&f=JPEG?w=721&h=500",
    summary: "一女性朋友，把她在花山300多平的独栋别墅卖了，跑二环内买了一套两居室一女性朋友，把她在花山300多平的独栋别墅卖了，跑二环内买了一套两居室一女性朋友，把她在花山300多平的独栋别墅卖了，跑二环内买了一套两居室一女性朋友，把她在花山300多平的独栋别墅卖了，跑二环内买了一套两居室一女性朋友，把她在花山300多平的独栋别墅卖了，跑二环内买了一套两居室一女性朋友，把她在花山300多平的独栋别墅卖了，跑二环内买了一套两居室",
    content: [
        {
            type: "text",
            value: "一女性朋友，把她在花山300多平的独栋别墅卖了，跑二环内买了一套两居室。"
        },
        {
            type: "text",
            value: "一女性朋友，把她在花山300多平的独栋别墅卖了，跑二环内买了一套两居室。"
        },
        {
            type: "text",
            value: "一女性朋友，把她在花山300多平的独栋别墅卖了，跑二环内买了一套两居室。"
        },
        {
            type: "text",
            value: "一女性朋友，把她在花山300多平的独栋别墅卖了，跑二环内买了一套两居室。"
        },
        {
            type: "text",
            value: "一女性朋友，把她在花山300多平的独栋别墅卖了，跑二环内买了一套两居室。"
        },
        {
            type: "text",
            value: "一女性朋友，把她在花山300多平的独栋别墅卖了，跑二环内买了一套两居室。"
        },
        {
            type: "image",
            value: "一女性朋友，把她在花山300多平的独栋别墅卖了，跑二环内买了一套两居室。"
        },
        {
            type: "text",
            value: "一女性朋友，把她在花山300多平的独栋别墅卖了，跑二环内买了一套两居室。"
        },
        {
            type: "text",
            value: "一女性朋友，把她在花山300多平的独栋别墅卖了，跑二环内买了一套两居室。"
        },
        {
            type: "text",
            value: "一女性朋友，把她在花山300多平的独栋别墅卖了，跑二环内买了一套两居室。"
        },
        {
            type: "text",
            value: "一女性朋友，把她在花山300多平的独栋别墅卖了，跑二环内买了一套两居室。"
        },
        {
            type: "text",
            value: "一女性朋友，把她在花山300多平的独栋别墅卖了，跑二环内买了一套两居室。"
        },
        {
            type: "text",
            value: "一女性朋友，把她在花山300多平的独栋别墅卖了，跑二环内买了一套两居室。"
        },
        {
            type: "text",
            value: "一女性朋友，把她在花山300多平的独栋别墅卖了，跑二环内买了一套两居室。"
        }
    ],
    totalText: 669,
    publishTime: "2022.04.06 07:43:58",
    updateTime: "2022.04.06 07:43:58",
    totalPay: 0,
    read: [
        "62adb40d97af6327652104f2"
    ],
    likes: [ ],
    payers: [ ],
    comments: [ ],
    diamonds: 3
} ]);
db.getCollection("articles").insert([ {
    _id: ObjectId("62b435857a1f13013100181c"),
    author: "62b054c997af6327652104f7",
    authorName: "文章作者",
    title: "没有父亲的父亲节",
    thumbnail: "https://img0.baidu.com/it/u=1638390144,3680654331&fm=253&fmt=auto&app=120&f=JPEG?w=721&h=500",
    summary: "今天是父亲节，看到许多写父亲的文章，还看到群里各种发红包，我的心里空落落的。 这是我度过的第一个没有父亲的父亲节，装好了红包不知发给谁。 往年的",
    content: [
        {
            type: "text",
            value: "今天是父亲节，看到许多写父亲的文章，还看到群里各种发红包，我的心里空落落的。"
        },
        {
            type: "text",
            value: "这是我度过的第一个没有父亲的父亲节，装好了红包不知发给谁。"
        },
        {
            type: "text",
            value: "往年的今天，我都会提前为老爸选一件礼物，虽然他每次都数落我乱花钱，虽然我每次精挑细选的礼物大多数都是他不需要的，他还是会在我走后拿出去跟邻居们显摆。"
        },
        {
            type: "text",
            value: "往年的今天，我都会提前为老爸选一件礼物，虽然他每次都数落我乱花钱，虽然我每次精挑细选的礼物大多数都是他不需要的，他还是会在我走后拿出去跟邻居们显摆。"
        },
        {
            type: "text",
            value: "往年的今天，我都会提前为老爸选一件礼物，虽然他每次都数落我乱花钱，虽然我每次精挑细选的礼物大多数都是他不需要的，他还是会在我走后拿出去跟邻居们显摆。"
        },
        {
            type: "text",
            value: "往年的今天，我都会提前为老爸选一件礼物，虽然他每次都数落我乱花钱，虽然我每次精挑细选的礼物大多数都是他不需要的，他还是会在我走后拿出去跟邻居们显摆。"
        },
        {
            type: "text",
            value: "往年的今天，我都会提前为老爸选一件礼物，虽然他每次都数落我乱花钱，虽然我每次精挑细选的礼物大多数都是他不需要的，他还是会在我走后拿出去跟邻居们显摆。"
        },
        {
            type: "text",
            value: "往年的今天，我都会提前为老爸选一件礼物，虽然他每次都数落我乱花钱，虽然我每次精挑细选的礼物大多数都是他不需要的，他还是会在我走后拿出去跟邻居们显摆。"
        },
        {
            type: "text",
            value: "往年的今天，我都会提前为老爸选一件礼物，虽然他每次都数落我乱花钱，虽然我每次精挑细选的礼物大多数都是他不需要的，他还是会在我走后拿出去跟邻居们显摆。"
        },
        {
            type: "text",
            value: "往年的今天，我都会提前为老爸选一件礼物，虽然他每次都数落我乱花钱，虽然我每次精挑细选的礼物大多数都是他不需要的，他还是会在我走后拿出去跟邻居们显摆。"
        },
        {
            type: "text",
            value: "往年的今天，我都会提前为老爸选一件礼物，虽然他每次都数落我乱花钱，虽然我每次精挑细选的礼物大多数都是他不需要的，他还是会在我走后拿出去跟邻居们显摆。"
        },
        {
            type: "text",
            value: "往年的今天，我都会提前为老爸选一件礼物，虽然他每次都数落我乱花钱，虽然我每次精挑细选的礼物大多数都是他不需要的，他还是会在我走后拿出去跟邻居们显摆。"
        }
    ],
    totalText: 1598,
    publishTime: "2022.06.19 21:38:05",
    updateTime: "2022.06.19 21:38:05",
    totalPay: 74,
    read: [ ],
    likes: [
        "62adb40d97af6327652104f2"
    ],
    payers: [
        "62adb40d97af6327652104f2"
    ],
    comments: [ ],
    diamonds: 4
} ]);
db.getCollection("articles").insert([ {
    _id: ObjectId("62b437d57a1f13013100181d"),
    author: "62b054c997af6327652104f7",
    authorName: "文章作者",
    title: "我摊牌了，凭啥要我照顾老人？",
    thumbnail: "https://img0.baidu.com/it/u=1638390144,3680654331&fm=253&fmt=auto&app=120&f=JPEG?w=721&h=500",
    summary: "我摊牌了，凭啥要我照顾老人",
    content: [
        {
            type: "text",
            value: "爷爷现在在我们家里，之前我和嫂子共同照看了一个星期，婆婆不想管，这次婆婆又想把责任推给我？"
        },
        {
            type: "text",
            value: "爷爷现在在我们家里，之前我和嫂子共同照看了一个星期，婆婆不想管，这次婆婆又想把责任推给我？"
        },
        {
            type: "text",
            value: "爷爷现在在我们家里，之前我和嫂子共同照看了一个星期，婆婆不想管，这次婆婆又想把责任推给我？"
        },
        {
            type: "text",
            value: "爷爷现在在我们家里，之前我和嫂子共同照看了一个星期，婆婆不想管，这次婆婆又想把责任推给我？"
        },
        {
            type: "text",
            value: "爷爷现在在我们家里，之前我和嫂子共同照看了一个星期，婆婆不想管，这次婆婆又想把责任推给我？"
        },
        {
            type: "text",
            value: "爷爷现在在我们家里，之前我和嫂子共同照看了一个星期，婆婆不想管，这次婆婆又想把责任推给我？"
        },
        {
            type: "text",
            value: "爷爷现在在我们家里，之前我和嫂子共同照看了一个星期，婆婆不想管，这次婆婆又想把责任推给我？"
        },
        {
            type: "text",
            value: "爷爷现在在我们家里，之前我和嫂子共同照看了一个星期，婆婆不想管，这次婆婆又想把责任推给我？"
        },
        {
            type: "text",
            value: "爷爷现在在我们家里，之前我和嫂子共同照看了一个星期，婆婆不想管，这次婆婆又想把责任推给我？"
        },
        {
            type: "text",
            value: "爷爷现在在我们家里，之前我和嫂子共同照看了一个星期，婆婆不想管，这次婆婆又想把责任推给我？"
        },
        {
            type: "image",
            value: ""
        },
        {
            type: "text",
            value: "爷爷现在在我们家里，之前我和嫂子共同照看了一个星期，婆婆不想管，这次婆婆又想把责任推给我？"
        },
        {
            type: "text",
            value: "爷爷现在在我们家里，之前我和嫂子共同照看了一个星期，婆婆不想管，这次婆婆又想把责任推给我？"
        },
        {
            type: "text",
            value: "爷爷现在在我们家里，之前我和嫂子共同照看了一个星期，婆婆不想管，这次婆婆又想把责任推给我？"
        },
        {
            type: "text",
            value: "爷爷现在在我们家里，之前我和嫂子共同照看了一个星期，婆婆不想管，这次婆婆又想把责任推给我？"
        },
        {
            type: "text",
            value: "爷爷现在在我们家里，之前我和嫂子共同照看了一个星期，婆婆不想管，这次婆婆又想把责任推给我？"
        }
    ],
    totalText: 358,
    publishTime: "2022.04.11 18:46:53",
    updateTime: "2022.04.11 18:46:53",
    totalPay: 0,
    read: [ ],
    likes: [ ],
    payers: [ ],
    comments: [ ],
    diamonds: 3
} ]);
db.getCollection("articles").insert([ {
    _id: ObjectId("62b438347a1f13013100181e"),
    author: "62b430ed7a1f13013100181a",
    authorName: "文章作者2",
    title: "大龄剩女的结局，莫过于此",
    thumbnail: "https://img0.baidu.com/it/u=1638390144,3680654331&fm=253&fmt=auto&app=120&f=JPEG?w=721&h=500",
    summary: "大龄剩女的结局，莫过于此",
    content: [
        {
            type: "text",
            value: "作为女人，当年纪不小了还是单身，势必会面临一些压力。"
        },
        {
            type: "text",
            value: "作为女人，当年纪不小了还是单身，势必会面临一些压力。"
        },
        {
            type: "text",
            value: "作为女人，当年纪不小了还是单身，势必会面临一些压力。"
        },
        {
            type: "text",
            value: "作为女人，当年纪不小了还是单身，势必会面临一些压力。"
        },
        {
            type: "text",
            value: "作为女人，当年纪不小了还是单身，势必会面临一些压力。"
        },
        {
            type: "text",
            value: "作为女人，当年纪不小了还是单身，势必会面临一些压力。"
        },
        {
            type: "text",
            value: "作为女人，当年纪不小了还是单身，势必会面临一些压力。"
        },
        {
            type: "text",
            value: "作为女人，当年纪不小了还是单身，势必会面临一些压力。"
        },
        {
            type: "text",
            value: "作为女人，当年纪不小了还是单身，势必会面临一些压力。"
        },
        {
            type: "text",
            value: "作为女人，当年纪不小了还是单身，势必会面临一些压力。"
        },
        {
            type: "text",
            value: "作为女人，当年纪不小了还是单身，势必会面临一些压力。"
        },
        {
            type: "text",
            value: "作为女人，当年纪不小了还是单身，势必会面临一些压力。"
        }
    ],
    totalText: 669,
    publishTime: "2022.04.06 07:43:58",
    updateTime: "2022.04.06 07:43:58",
    totalPay: 0,
    read: [ ],
    likes: [ ],
    payers: [ ],
    comments: [ ],
    diamonds: 3
} ]);
session.commitTransaction(); session.endSession();

// ----------------------------
// Collection structure for users
// ----------------------------
db.getCollection("users").drop();
db.createCollection("users");

// ----------------------------
// Documents of users
// ----------------------------
session = db.getMongo().startSession();
session.startTransaction();
db = session.getDatabase("jianshu");
db.getCollection("users").insert([ {
    _id: ObjectId("62adb40d97af6327652104f2"),
    name: "测试账号",
    avatar: "https://img0.baidu.com/it/u=987894571,4007535180&fm=253&fmt=auto&app=120&f=JPEG?w=690&h=388",
    follow: [
        "62b054c997af6327652104f7",
        "62adb40d97af6327652104f2",
        "62b430b87a1f130131001814"
    ],
    articles: [
        ""
    ],
    read: [ ],
    totalLike: 5,
    totalPay: 17,
    diamonds: 23,
    totalWord: 100
} ]);
db.getCollection("users").insert([ {
    _id: ObjectId("62b054c997af6327652104f7"),
    name: "测试账号二",
    avatar: "http://www.shanhuxueyuan.com/dist/img/logo.jpg?v=bc44aaec82",
    follow: [
        "62adb40d97af6327652104f2"
    ],
    articles: [ ],
    read: [ ],
    totalLike: 0,
    totalPay: 0,
    diamonds: 20,
    totalWord: 100
} ]);
db.getCollection("users").insert([ {
    _id: ObjectId("62b430b87a1f130131001814"),
    name: "测试账号3",
    avatar: "https://img0.baidu.com/it/u=987894571,4007535180&fm=253&fmt=auto&app=120&f=JPEG?w=690&h=388",
    follow: [ ],
    articles: [
        ""
    ],
    read: [ ],
    totalLike: 4,
    totalPay: 16,
    diamonds: 22,
    totalWord: 1000
} ]);
db.getCollection("users").insert([ {
    _id: ObjectId("62b430ce7a1f130131001815"),
    name: "测试账号4",
    avatar: "https://img0.baidu.com/it/u=987894571,4007535180&fm=253&fmt=auto&app=120&f=JPEG?w=690&h=388",
    follow: [ ],
    articles: [
        ""
    ],
    read: [ ],
    totalLike: 4,
    totalPay: 16,
    diamonds: 22,
    totalWord: 100
} ]);
db.getCollection("users").insert([ {
    _id: ObjectId("62b430d47a1f130131001816"),
    name: "测试账号5",
    avatar: "https://img0.baidu.com/it/u=987894571,4007535180&fm=253&fmt=auto&app=120&f=JPEG?w=690&h=388",
    follow: [ ],
    articles: [
        ""
    ],
    read: [ ],
    totalLike: 4,
    totalPay: 16,
    diamonds: 22,
    totalWord: 100
} ]);
db.getCollection("users").insert([ {
    _id: ObjectId("62b430da7a1f130131001817"),
    name: "测试账号6",
    avatar: "https://img0.baidu.com/it/u=987894571,4007535180&fm=253&fmt=auto&app=120&f=JPEG?w=690&h=388",
    follow: [ ],
    articles: [
        ""
    ],
    read: [ ],
    totalLike: 4,
    totalPay: 16,
    diamonds: 22,
    totalWord: 100
} ]);
db.getCollection("users").insert([ {
    _id: ObjectId("62b430df7a1f130131001818"),
    name: "测试账号7",
    avatar: "https://img0.baidu.com/it/u=987894571,4007535180&fm=253&fmt=auto&app=120&f=JPEG?w=690&h=388",
    follow: [ ],
    articles: [
        ""
    ],
    read: [ ],
    totalLike: 4,
    totalPay: 16,
    diamonds: 22,
    totalWord: 100
} ]);
db.getCollection("users").insert([ {
    _id: ObjectId("62b430e87a1f130131001819"),
    name: "测试账号8",
    avatar: "https://img0.baidu.com/it/u=987894571,4007535180&fm=253&fmt=auto&app=120&f=JPEG?w=690&h=388",
    follow: [ ],
    articles: [
        ""
    ],
    read: [ ],
    totalLike: 4,
    totalPay: 16,
    diamonds: 22,
    totalWord: 100
} ]);
db.getCollection("users").insert([ {
    _id: ObjectId("62b430ed7a1f13013100181a"),
    name: "测试账号9",
    avatar: "https://img0.baidu.com/it/u=987894571,4007535180&fm=253&fmt=auto&app=120&f=JPEG?w=690&h=388",
    follow: [ ],
    articles: [
        ""
    ],
    read: [ ],
    totalLike: 4,
    totalPay: 16,
    diamonds: 22,
    totalWord: 100
} ]);
db.getCollection("users").insert([ {
    _id: ObjectId("62b430f37a1f13013100181b"),
    name: "测试账号10",
    avatar: "https://img0.baidu.com/it/u=987894571,4007535180&fm=253&fmt=auto&app=120&f=JPEG?w=690&h=388",
    follow: [ ],
    articles: [
        ""
    ],
    read: [ ],
    totalLike: 4,
    totalPay: 16,
    diamonds: 22,
    totalWord: 100
} ]);
session.commitTransaction(); session.endSession();
