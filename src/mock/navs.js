const navs = [
  {
    title: "网站开发",
    nav: [
      {
        title: "数据库",
        nav: [
          {
            name: "Robo 3T",
            desc: "一个现代，强大且由社区驱动的MongoDB管理工具",
            url: "https://robomongo.org/",
          },
        ]
      },
      {
        title: "开发工具",
        nav: [
          {
            name: "Vscode",
            desc: "VScode是一款轻量级的编辑器，自由。 建立在开源上。 无处不在。",
            url: "https://code.visualstudio.com/",
          },
          {
            name: "CODEIF",
            desc: "变量命名神器",
            url: "https://unbug.github.io/codelf/",
          },
          {
            name: "gitzip",
            desc: "它可以将GITHUB存储库的子文件夹/子目录作为zip并下载",
            url: "https://kinolien.github.io/gitzip/",
          },
          {
            name: "carbon",
            desc: "创建和分享源代码的精美图像",
            url: "https://carbon.now.sh",
          },
          {
            name: "patorjk",
            desc: "将文本转换成ASCII",
            url: "http://patorjk.com/software/taag",
          },
          {
            name: "uTools",
            desc: "uTools是一个极简、插件化、跨平台的现代桌面软件。通过自由选配丰富的插件，打造你得心应手的工具集合",
            url: "http://www.u.tools/",
          },
          {
            name: "ihateregex",
            desc: "正则表达式备忘录",
            url: "https://ihateregex.io/",
          },
          {
            name: "Tampermonkey",
            desc: "一款免费的浏览器扩展和最为流行的用户脚本管理器",
            url: "https://www.tampermonkey.net/",
          },
          {
            name: "Greasy Fork",
            desc: "提供用户脚本的网站",
            url: "https://greasyfork.org/zh-CN",
          },
          {
            name: "Sunny-Ngrok",
            desc: "一条命令解决的外网访问内网问题，无需任何配置，下载客户端之后直接一条命令让外网访问您的内网不再是距离",
            url: "https://www.ngrok.cc/",
          },
          {
            name: "查MD5",
            desc: "MD5在线解密|md5在线破解|批量破解md5网站",
            url: "http://www.cmd5.com/",
          },
          {
            name: "JSON Web Tokens",
            desc: "jwt 在线解码",
            url: "https://jwt.io/",
          },
        ],
      },
      {
        title: "接口/开发文档管理",
        nav: [
          {
            name: "showdoc",
            desc: "一个非常适合IT团队的在线API文档、技术文档工具",
            url: "https://www.showdoc.cc/",
          },
          {
            name: "禅道",
            desc: "禅道是灵活的项目管理软件",
            url: "https://www.zentao.net/",
          },
          {
            name: "Tapd",
            desc: "一站式敏捷研发协作云平台, 凝聚腾讯研发方法及敏捷实践精髓, 助力企业研发更高效、协作更敏捷",
            url: "https://www.tapd.cn/",
          },
          {
            name: "Hoppscotch",
            desc: "一个免费，快速，美观的API请求构建器，供10万多个开发人员使用。(原名叫 Postwoman)",
            url: "https://hoppscotch.io/",
          },
        ],
      },
      {
        title: "免费API",
        nav: [
          {
            name: "ipify",
            desc: "一个简单的公共IP地址API",
            url: "https://www.ipify.org/",
          },
        ],
      },
      {
        title: "网站运营",
        nav: [
          {
            name: "百度统计",
            desc: "全球最大的中文网站流量分析平台，帮助企业收集网站访问数据，提供流量趋势、来源分析...",
            url: "https://tongji.baidu.com/",
          },
          {
            name: "问卷星",
            desc: "免费使用问卷星创建问卷调查、在线考试、360度评估等应用",
            url: "https://www.wjx.cn/",
          },
          {
            name: "金数据",
            desc: "金数据是人人可用的在线表单工具，帮助用户收集和管理日常工作中的数据，提升工作效率",
            url: "https://jinshuju.net/",
          },
          {
            name: "腾讯兔小巢",
            desc: "让用户帮你 把产品做得更好",
            url: "https://txc.qq.com",
          },
        ]
      },
      {
        title: "教程相关",
        nav: [
          {
            name: "菜鸟教程",
            desc: "提供了编程的基础技术教程, 介绍了HTML、CSS、Javascript、Python，Java，Ruby，C，PHP , MySQL等各种编程语言的基础知识。 同时本站中也提供了大量的在线实例，通过实例，您可以更好的学习编程",
            url: "https://www.runoob.com/",
          },
          {
            name: "慕课网",
            desc: "慕课网-程序员的梦工厂",
            url: "https://www.imooc.com/",
          },
          {
            name: "极客学院",
            desc: "致力于“让IT学习更有效”，以实战为特色，为注重自我提升的IT从业者提供高品质职业教育",
            url: "https://www.jikexueyuan.com/",
          },
          {
            name: "腾讯课堂",
            desc: "腾讯课堂 - 专业的在线教育平台",
            url: "https://ke.qq.com/index.html",
          },
          {
            name: "i春秋",
            desc: "【i春秋】-专注网络安全_信息安全_白帽子的在线学习_教育_培训平台",
            url: "https://www.ichunqiu.com/",
          },
          {
            name: "实验吧",
            desc: "实验吧是国内最大的在线虚拟机实验IT教育平台",
            url: "http://www.shiyanbar.com/",
          },
          {
            name: "合天网安实验室",
            desc: "合天网安实验室是支持在线实验的信息安全学习的大型服务平台",
            url: "http://www.hetianlab.com/",
          },
          {
            name: "网易云课堂",
            desc: "网易云课堂 - 领先的实用技能学习平台",
            url: "http://study.163.com/",
          },
          {
            name: "蓝桥",
            desc: "蓝桥是国内领先的IT在线编程及在线实训学习平台，专业导师提供精选的实践项目，创新的技术使得学习者无需配置繁琐的本地环境，随时在线流畅使用",
            url: "https://www.lanqiao.cn/",
          },
          {
            name: "W3Cschool",
            desc: "编程狮，是一个专业的W3C前端开发及编程入门学习平台",
            url: "https://www.w3cschool.cn/",
          },
        ]
      },
      {
        title: "面试刷题",
        nav: [
          {
            name: "LeetCode",
            desc: "提高你的编码技能，快速找到一份工作。这是扩展你知识和为下一次面试做好准备的最佳地方。",
            url: "https://leetcode-cn.com/",
          },
          {
            name: "牛客网",
            desc: "牛客网是互联网求职神器，C++、Java、前端、产品、运营技能学习/备考/求职题库",
            url: "https://www.nowcoder.com/",
          },
          {
            name: "CS-Notes",
            desc: "技术面试必备基础知识、Leetcode、计算机操作系统、计算机网络、系统设计、Java、Python、C++",
            url: "https://cyc2018.github.io/CS-Notes",
          },
          {
            name: "数据结构和算法动态可视化",
            desc: "数据结构和算法动态可视化",
            url: "https://visualgo.net/zh",
          },
          {
            name: "algorithm-pattern",
            desc: "算法模板，最科学的刷题方式，最快速的刷题路径，你值得拥有~",
            url: "https://github.com/greyireland/algorithm-pattern",
          },
        ]
      },
    ],
  },
  {
    title: "产品&设计",
    nav: [
      {
        title: "产品",
        nav: [
          {
            name: "draw",
            desc: "免费的在线图表软件，用于制作流程图、流程图、组织图、UML、ER和网络图",
            url: "https://www.draw.io/",
          },
          {
            name: "ProcessOn",
            desc: "免费在线作图工具,UML作图,UI界面原型设计,iOS原型设计,BPMN,流程图,思维导图,多人协作绘图",
            url: "https://www.processon.com/",
          },
          {
            name: "蓝湖",
            desc: "蓝湖是一款设计图共享平台,帮助互联网团队管理设计图",
            url: "https://lanhuapp.com/",
          },
          {
            name: "Zeplin",
            desc: "为设计师和前端而生的协作应用",
            url: "https://zeplin.io/",
          },
          {
            name: "幕布",
            desc: "极简大纲笔记 | 一键生成思维导图",
            url: "https://mubu.com/",
          },
          {
            name: "声享",
            desc: "在线制作 PPT，让分享更有价值",
            url: "https://ppt.baomitu.com/",
          },
          {
            name: "墨刀",
            desc: "原型设计工具，web原型设计工具，app原型设计工具",
            url: "https://modao.cc/features",
          },
          {
            name: "创客贴",
            desc: "一款简单易用、功能强大的线上图形设计工具",
            url: "https://www.chuangkit.com/",
          },
          {
            name: "在线制作图表",
            desc: "信息图表是一种易于使用的信息图表和图表制造商。创建和分享美丽的信息图表，在线报告和互动地图。在这里做你自己",
            url: "https://infogram.com/",
          },
          {
            name: "稿定抠图",
            desc: "稿定设计是一款专为淘宝店主、新媒体运营人员和修图爱好者打造的免费在线抠图工具。",
            url: "https://www.gaoding.com/koutu",
          },
          {
            name: "UZER.ME",
            desc: "超级应用空间致力于全生命周期的文档管理,无需安装,即可在线编辑Office, CAD,PS等任意格式文档,支持远程协作,全文检索,版本管理,权限管理,安全外发等.提高工作效率,降低安全风险",
            url: "https://uzer.me/index.html",
          },
          {
            name: "鹿班",
            desc: "鹿班 - 让设计更美好(阿里出品)",
            url: "https://luban.aliyun.com/",
          },
        ],
      },
      {
        title: "设计",
        nav: [
          {
            name: "Emoji searcher",
            desc: "Emoji表情大全",
            url: "http://emoji.muan.co/",
          },
          {
            name: "launchaco",
            desc: "免费在线制作LOGO",
            url: "https://www.launchaco.com/logo",
          },
          {
            name: "小智LOGO",
            desc: "LOGO在线制作神器 - 3分钟完成LOGO设计在线生成",
            url: "https://xzlogo.com/",
          },
        ]
      }
    ],
  },
  {
    title: "实用工具",
    nav: [
      {
        title: "图片处理",
        nav: [
          {
            name: "TinyPNG",
            desc: "智能PNG和JPEG压缩，以质量和文件大小的完美平衡来优化您的图像",
            url: "https://tinypng.com/",
          },
          {
            name: "Picdiet",
            desc: "独特且强悍的JavaScript算法，能极速压缩80%的图片大小，而不损害其质量",
            url: "https://www.picdiet.com/zh-cn",
          },
          {
            name: "Squoosh",
            desc: "在浏览器中用不同的编解码器压缩和比较图像(Google出品)",
            url: "https://squoosh.app/",
          },
          {
            name: "AI人工智能图片放大",
            desc: "Bigjpg - 使用开源waifu2x人工智能深度卷积神经网络（CNN）智能无损免费放大图片",
            url: "https://bigjpg.com",
          },
          {
            name: "图片裁剪",
            desc: "在线裁剪照片大小尺寸",
            url: "https://www.yasuotu.com/meditor",
          },
          {
            name: "CLIPPING MAGIC",
            desc: "删除图像背景在线。使背景透明，白色等编辑，裁剪，旋转，固定颜色，添加阴影，一款在线抠图工具",
            url: "https://clippingmagic.com/",
          },
        ],
      },
      {
        title: "PDF处理",
        nav: [
          {
            name: "Smallpdf",
            desc: "压缩pdf、各种文件格式转换pdf",
            url: "https://smallpdf.com/",
          },
        ]
      },
      {
        title: "远程控制",
        nav: [
          {
            name: "TeamViewer",
            desc: "TeamViewer远程连接控制软件是一款随时随地连接到远程桌面电脑、移动设备及Iot,让远程连接过程更加的快速和安全,轻松实现对文件、网络及程序的实时支持或访问。",
            url: "https://www.teamviewer.cn/",
          },
          {
            name: "向日葵",
            desc: "向日葵远程控制软件是一款免费的集远程控制电脑手机、远程桌面连接、远程开机、远程管理、支持内网穿透的一体化远程控制管理工具软件",
            url: "https://sunlogin.oray.com/",
          },
        ],
      },
      {
        title: "辅助工具",
        nav: [
          {
            name: "草料二维码",
            desc: "用专业的二维码产品帮助企业创造价值",
            url: "https://cli.im/url/",
          },
          {
            name: "Cool Backgrounds",
            desc: "生成非常酷的彩色背景图像",
            url: "https://coolbackgrounds.io/",
          },
          {
            name: "石墨文档",
            desc: "一款轻便、简洁的在线协作文档工具，PC端和移动端全覆盖，支持多人同时对文档编辑和评论...",
            url: "https://shimo.im/",
          },
          {
            name: "360查字体",
            desc: "360查字体 - 查版权，免纠纷",
            url: "https://fonts.safe.360.cn/",
          },
        ],
      },
    ],
  },
  {
    title: "影视&音乐",
    nav: [
      {
        title: "影视",
        nav: [
          {
            name: "哔哩哔哩",
            desc: "国内知名的视频弹幕网站，这里有最及时的动漫新番，最棒的ACG氛围，最有创意的Up主",
            url: "https://www.bilibili.com/",
          },
          {
            name: "疯狂影视搜索",
            desc: "疯狂影视搜索是一款全能影视搜索引擎，帮你找到最新影视资源，一站拥有无尽影视资源",
            url: "http://ifkdy.com/",
          },
          {
            name: "全民vip视频在线解析",
            desc: "免费全网VIP视频会员免广告看电影！优酷vip解析，爱奇艺vip解析，腾讯vip解析，乐视vip解析，芒果vip解析",
            url: "http://www.qmaile.com/",
          },
          {
            name: "蜜蜂剪辑",
            desc: "免费在线视频剪辑、视频制作、视频剪切、视频转gif等实用功能",
            url: "https://beecut.cn/online-video-editor",
          },
          {
            name: "kk高清影院",
            desc: "kk高清影院,1080p电影下载,高清电影迅雷下载,免费高清电影网",
            url: "http://www.kk3.tv/",
          },
        ],
      },
      {
        title: "音乐",
        nav: [
          {
            name: "自由的音乐",
            desc: "自由的音乐是一个免费试听并下载全网音乐的网站",
            url: "https://www.tikitiki.cn/",
          },
        ],
      },
    ],
  },
  {
    title: "其它",
    nav: [
      {
        title: "招聘&求职",
        nav: [
          {
            name: "智联招聘",
            desc: "智联招聘，更懂你的价值",
            url: "https://www.zhaopin.com/",
          },
          {
            name: "前程无忧",
            desc: "招聘网,人才网,求职,找工作",
            url: "https://www.51job.com/",
          },
          {
            name: "BOSS直聘",
            desc: "BOSS直聘是权威领先的招聘网，开启人才网招聘求职新时代，让求职者与Boss直接开聊、加快面试、即时反馈，找工作就来BOSS直聘和Boss开聊吧",
            url: "https://www.zhipin.com",
          },
          {
            name: "ResumeSample",
            desc: "程序员简历模板系列, WEB/IOS/Android/C++/node等以及通用程序员简历模板",
            url: "https://github.com/geekcompany/ResumeSample",
          },
          {
            name: "程序员找工作黑名单",
            desc: "有些事情，应该被记住",
            url: "https://github.com/shengxinjing/programmer-job-blacklist",
          },
          {
            name: "看准网",
            desc: "看准网★中国领先的职场信息平台,专注于公司评论,晒工资,工资待遇,面试,公司福利等.您可以在看准网上匿名分享您的职业信息",
            url: "https://www.kanzhun.com",
          },
        ],
      },
    ],
  },
];

export default navs;