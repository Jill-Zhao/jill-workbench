// 行业情报数据 — 由 Mochi 每日 9:30 自动更新
// 所有条目均附 source 可核实链接；查不到的一律写"暂无公开数据"，不编造。
window.INTEL = {
  updatedAt: "2026-08-08 09:30",

  marketPulse: [
    {
      label: "上半年自研游戏海外收入",
      value: "123.72 亿美元",
      note: "同比 +30.22%，增速是国内大盘（+12.17%）的近 2.5 倍。美日韩合计占 53.84%，欧洲升至 10.14%。开场可以说：'今年出海比内销好做，你们海外预算是不是也在加？'"
    },
    {
      label: "生成式 AI 应用近一年内购收入",
      value: "61 亿美元（+232%）",
      note: "但 2026Q1 下载量环比仅 +1%。拉新见顶、变现提速——AI 客户现在最想听的不是'我能给你带量'，而是'我能帮你把付费用户找出来'。"
    },
    {
      label: "海外微短剧 6 月双端下载量",
      value: "约 2.14 亿次",
      note: "月度上新剧目超 3.8 万部。素材消耗量全行业第一，是目前最缺素材工业化 + 代投能力的品类，也是最容易切进去的。"
    },
    {
      label: "中国厂商在俄罗斯本土应用商店收入",
      value: "同比 +3.5 倍",
      note: "Yandex Ads 7/31 ChinaJoy 发布。俄罗斯手游下载全球第 7、时长全球第 5。欧美厂商撤离留的空位还在被中国厂商吃——这是个能聊出新预算的话题。"
    },
    {
      label: "美国 AI 应用广告支出",
      value: "12.5 亿美元（+186%）",
      note: "日本 +545%、韩国 +542%、印度 +1113%。AI 应用是今年买量预算增速最快的甲方群体，优先级建议排在游戏前面。"
    }
  ],

  appRankings: {
    game: [
      {
        name: "Last War: Survival",
        publisher: "元趣娱乐 First Fun（Funfly Pte. Ltd.）",
        isChinese: true,
        markets: "沙特、阿联酋、美国、欧洲",
        performance: "2026-07-15 前后沙特 iPhone 畅销总榜 Top20 在榜",
        comment: "中东买量单价最贵的那一档客户。官网直接挂了 contact@firstfun.com，是少见的能冷邮件直达的头部厂商。",
        source: "https://game.sohu.com/a/1050717657_100065715",
        tier: "head"
      },
      {
        name: "Kingshot",
        publisher: "点点互动（世纪华通）",
        isChinese: true,
        markets: "沙特、阿联酋、美国",
        performance: "沙特与阿联酋 iPhone 畅销总榜双双 Top20",
        comment: "易点天下已合作客户。可以拿它做案例背书去谈同赛道的第二梯队 SLG。",
        source: "https://game.sohu.com/a/1050717657_100065715",
        tier: "head"
      },
      {
        name: "Whiteout Survival",
        publisher: "点点互动（世纪华通）",
        isChinese: true,
        markets: "沙特、阿联酋、北美",
        performance: "沙特 / 阿联酋 iPhone 畅销总榜 Top20",
        comment: "生存 SLG 长青款。同类型的中小厂想复刻，最缺的就是中东本地化素材，这是你的切入点。",
        source: "https://game.sohu.com/a/1050717657_100065715",
        tier: "head"
      },
      {
        name: "PUBG MOBILE",
        publisher: "腾讯",
        isChinese: true,
        markets: "沙特、阿联酋、全球",
        performance: "中东两大市场畅销总榜 Top20",
        comment: "自有投放体系，基本不外包。当行情参考，不当线索。",
        source: "https://game.sohu.com/a/1050717657_100065715",
        tier: "head"
      },
      {
        name: "原神 Genshin Impact",
        publisher: "米哈游 miHoYo",
        isChinese: true,
        markets: "俄罗斯、全球",
        performance: "2025 年 Yandex 平台搜索量 6353 万次，俄罗斯 RPG 品类第一；占俄罗斯热门中国游戏搜索量的 86%",
        comment: "俄语区 RPG 需求被它一款吃掉大半，说明这个坑位还有空间。对做 RPG 的腰部客户，这是最好的说服素材。",
        source: "https://gu.qq.com/resources/shy/news/detail-v2/index.html",
        tier: "head"
      },
      {
        name: "黑神话：悟空",
        publisher: "游戏科学",
        isChinese: true,
        markets: "俄罗斯、全球",
        performance: "俄罗斯 Yandex 搜索量前列，与《燕云十六声》同列热门中国 RPG",
        comment: "小团队打爆款的样板。跟中小研发聊天时，用它说明'俄语区对中国重度内容是有认知的'，比讲大道理管用。",
        source: "https://gu.qq.com/resources/shy/news/detail-v2/index.html",
        tier: "sme"
      },
      {
        name: "燕云十六声",
        publisher: "网易",
        isChinese: true,
        markets: "俄罗斯、全球",
        performance: "俄罗斯 Yandex 热门中国游戏搜索榜在列",
        comment: "网易自有买量团队，主要当赛道信号看。",
        source: "https://gu.qq.com/resources/shy/news/detail-v2/index.html",
        tier: "head"
      },
      {
        name: "两款奇幻 RPG（Yandex 官方案例）",
        publisher: "易幻网络 Efun Games",
        isChinese: true,
        markets: "俄罗斯",
        performance: "采用 Yandex Ads 全链路方案 12 个月，累计 ROAS 240%，新增安装 13.5 万次，新用户获取量环比 +23%",
        comment: "腰部发行商的真实 ROI 数字，是你跟同体量客户对话最有力的锚点：'人家一年做到 240% ROAS，你现在在哪个水位？'",
        source: "https://gu.qq.com/resources/shy/news/detail-v2/index.html",
        tier: "sme"
      },
      {
        name: "Yalla Ludo",
        publisher: "雅乐科技 Yalla Group（华人团队创立，总部迪拜）",
        isChinese: true,
        markets: "沙特、阿联酋、中东北非",
        performance: "沙特 iPhone 畅销总榜 Top20",
        comment: "中东社交语音的本地王者。它的成功证明中东'轻竞技 + 语音房'仍有增量，适合拿去启发国内做社交出海的团队。",
        source: "https://game.sohu.com/a/1050717657_100065715",
        tier: "head"
      },
      {
        name: "Royal Match",
        publisher: "Dream Games（土耳其）",
        isChinese: false,
        markets: "沙特、阿联酋、全球",
        performance: "沙特与阿联酋 iPhone 畅销总榜 Top20",
        comment: "非中国厂商，但它把中东休闲消除的付费天花板抬上去了。给做消除的中国客户看，能刺激预算。",
        source: "https://game.sohu.com/a/1050717657_100065715",
        tier: "head"
      },
      {
        name: "Kammelna",
        publisher: "沙特本地团队",
        isChinese: false,
        markets: "沙特",
        performance: "沙特 iPhone 畅销总榜 Top20 唯一本地棋牌社交产品",
        comment: "本地化到什么程度才算够——它是标尺。跟客户讲'翻译不等于本地化'时直接举这个例子。",
        source: "https://game.sohu.com/a/1050717657_100065715",
        tier: "sme"
      }
    ],

    finance: [
      {
        name: "Monee（Sea 集团金融板块）",
        publisher: "Sea Limited",
        isChinese: false,
        markets: "东南亚、巴西",
        performance: "2026Q1 末贷款余额 99 亿美元，同比 +71%；巴西 Q1 贷款规模超 10 亿美元、同比 +250%，已拿下巴西 SCFI 信贷牌照",
        comment: "海外信贷仍在高速扩张周期，这是你跟国内互金客户开场的宏观论据：'国内收紧，海外还在涨 70%。'",
        source: "https://new.qq.com/rain/a/20260417A06DB100",
        tier: "head"
      },
      {
        name: "Mercado Pago",
        publisher: "Mercado Libre",
        isChinese: false,
        markets: "巴西、墨西哥、拉美",
        performance: "2026Q1 末贷款余额 146 亿美元，同比 +87%；巴西信贷收入 11.24 亿美元、同比 +89%",
        comment: "拉美的生态型玩家。它越强，独立现金贷 App 的获客越贵——正好是你讲'必须做精细化投放'的理由。",
        source: "https://new.qq.com/rain/a/20260417A06DB100",
        tier: "head"
      },
      {
        name: "Kredivo",
        publisher: "FinAccel（印尼）",
        isChinese: false,
        markets: "印尼",
        performance: "1040.53 万 MAU，印尼断层第一（BNPL 兼营现金贷同类产品）",
        comment: "印尼头部标杆。跟中资出海互金聊时，用它说明'印尼已经是准红海，要么本地化到底，要么换越泰'。",
        source: "https://www.fxbaogao.com/detail/5379445",
        tier: "head"
      },
      {
        name: "Adapundi",
        publisher: "印尼持牌平台",
        isChinese: false,
        markets: "印尼",
        performance: "MAU 稳定在 100–300 万区间",
        comment: "腰部梯队。同体量的中资平台在印尼多半也是这个水位，可以拿来做对标话术。",
        source: "https://www.fxbaogao.com/detail/5379445",
        tier: "sme"
      },
      {
        name: "Easycash",
        publisher: "印尼持牌平台",
        isChinese: false,
        markets: "印尼",
        performance: "MAU 100–300 万区间",
        comment: "同上，属于'活得下去但要抢量'的梯队，投放需求真实存在。",
        source: "https://www.fxbaogao.com/detail/5379445",
        tier: "sme"
      },
      {
        name: "FT Lending",
        publisher: "菲律宾新锐平台",
        isChinese: false,
        markets: "菲律宾",
        performance: "排名同比上升 20 位，菲律宾市场波动剧烈期跑出来的新锐",
        comment: "菲律宾新玩家上位很快，说明这个市场投放红利还在。做菲律宾的中资客户值得优先约。",
        source: "https://www.fxbaogao.com/detail/5379445",
        tier: "sme"
      },
      {
        name: "洋钱罐（Fintopia 瓴岳科技）",
        publisher: "瓴岳科技",
        isChinese: true,
        markets: "印尼、菲律宾、墨西哥",
        performance: "出海布局早，已实现本地化常态化运营，持海外金融牌照，海外业务基本盈利",
        comment: "行业公认的出海标杆之一。即使短期不合作，也值得建立关系——它的打法是你说服其他互金客户的教材。",
        source: "https://www.zichanjie.com/article/432622.html",
        tier: "head"
      },
      {
        name: "信也科技 FinVolution",
        publisher: "信也科技（FINV.NYSE）",
        isChinese: true,
        markets: "印尼、菲律宾",
        performance: "被业内列为互金出海对标方向之一，海外业务占比处于行业前列",
        comment: "上市公司、预算稳定、合规要求高——正好匹配'我们能帮你过平台金融资质验证'这个卖点。",
        source: "https://new.qq.com/rain/a/20260417A06DB100",
        tier: "head"
      },
      {
        name: "滴滴金融（海外）",
        publisher: "滴滴",
        isChinese: true,
        markets: "墨西哥",
        performance: "持墨西哥 SOFOM 多用途金融牌照，嵌入自有出海 App 消费场景展业",
        comment: "场景型玩家，投放需求偏品牌 + 拉活。切入点是'唤醒老用户'而不是纯拉新。",
        source: "https://www.zichanjie.com/article/432622.html",
        tier: "head"
      },
      {
        name: "度小满（海外）",
        publisher: "度小满金融",
        isChinese: true,
        markets: "墨西哥",
        performance: "已布局或正在布局墨西哥市场，多采用 SOFOM 牌照",
        comment: "2026 年互金出海首选地已从印尼转向墨西哥。跟这类客户开场就问墨西哥进度，能立刻建立专业感。",
        source: "https://www.zichanjie.com/article/432622.html",
        tier: "head"
      },
      {
        name: "XTransfer",
        publisher: "上海夺畅网络技术（XTransfer）",
        isChinese: true,
        markets: "全球（服务中国外贸中小企业）",
        performance: "覆盖上海、深圳、广州、义乌等 20 余个国内城市 + 中国香港办公点，服务外贸中小企业跨境收付",
        comment: "B2B 跨境支付，客群就是中小外贸卖家。它自己也要投广告获客——这是个双向机会。",
        source: "https://www.xtransfer.cn/contact",
        tier: "head"
      },
      {
        name: "万里汇 WorldFirst（蚂蚁国际）",
        publisher: "蚂蚁国际",
        isChinese: true,
        markets: "拉美、全球",
        performance: "为美客多等平台的中国中小卖家提供全球账户与多币种资金归集；蚂蚁国际在拉美与 R2、Dock 等本地机构合作，R2 已服务超 10 万家拉美中小企业",
        comment: "它服务的中国卖家群体，就是你名单里那些'要出海但不知道怎么投'的中小客户。可以聊聊生态互推。",
        source: "https://www.jiemian.com/article/14582038.html",
        tier: "head"
      }
    ],

    ai: [
      {
        name: "ChatGPT",
        publisher: "OpenAI",
        isChinese: false,
        markets: "全球",
        performance: "移动端单季收入近 13 亿美元，是 TOP10 其他产品总和的 5 倍；2026 年 3 月 MAU 逼近 10 亿，但环比仅 +0.5%",
        comment: "增速见顶了。这句话本身就是话术：'头部已经稳态，你们现在冲垂类还来得及。'",
        source: "https://new.qq.com/rain/a/20260514A03GPT00",
        tier: "head"
      },
      {
        name: "Gemini",
        publisher: "Google",
        isChinese: false,
        markets: "全球",
        performance: "下载量与 ChatGPT 同处第一梯队（均破 5000 万），2025 年 9 月日下载量一度反超 ChatGPT",
        comment: "谷歌自家分发，参考意义大于线索意义。",
        source: "https://www.netmarvel.com/news/1625.html",
        tier: "head"
      },
      {
        name: "Claude",
        publisher: "Anthropic",
        isChinese: false,
        markets: "美国、全球",
        performance: "月收入位列第二，规模约为 ChatGPT 的四分之一；在美国下载量快速攀升",
        comment: "非中国客户，但它的增长说明'价值观差异化'也能拉新——给做 AI 陪伴的中国客户一个内容策略灵感。",
        source: "https://www.netmarvel.com/news/1625.html",
        tier: "head"
      },
      {
        name: "Dola",
        publisher: "Dola（华人创业团队）",
        isChinese: true,
        markets: "东南亚、拉美",
        performance: "在东南亚和拉美市场月下载量已超越 ChatGPT，成为当地最受欢迎的 AI 应用之一",
        comment: "新兴市场打法跑通的中国团队案例。它证明了'不跟头部拼美国，去东南亚拉美'这条路，这正是易点天下擅长的市场。优先约。",
        source: "https://fxbaogao.com/detail/5439392",
        tier: "sme"
      },
      {
        name: "Manus",
        publisher: "蝴蝶效应 Butterfly Effect",
        isChinese: true,
        markets: "全球",
        performance: "2026Q1 移动端收入再创新高；Meta 已将 Manus AI 集成进 Ads Manager 作为执行层智能体",
        comment: "被 Meta 收进广告后台，说明它在平台侧已有话语权。聊合作时可以从'你们和 Meta 的联动怎么落到投放上'切入。",
        source: "https://fxbaogao.com/detail/5439392",
        tier: "head"
      },
      {
        name: "Genspark",
        publisher: "MainFunc（华人创始团队）",
        isChinese: true,
        markets: "日本、韩国",
        performance: "转型 Super Agent 后单季收入环比 +306%；靠差异化本地化投放（日本 YouTube、韩国 Facebook/Instagram）拉动",
        comment: "这是今年最典型的'渠道选对了就赢'案例。跟 AI 客户开场就用它：'同样的产品，投对渠道单季能翻三倍。'",
        source: "https://fxbaogao.com/detail/5439392",
        tier: "sme"
      },
      {
        name: "Kling AI 可灵",
        publisher: "快手",
        isChinese: true,
        markets: "全球",
        performance: "登顶 AI 图像与视频赛道收入榜",
        comment: "易点天下已合作体系内客户（快手）。可作为 AI 视频赛道的合作背书。",
        source: "https://fxbaogao.com/detail/5439392",
        tier: "head"
      },
      {
        name: "PixVerse",
        publisher: "爱诗科技",
        isChinese: true,
        markets: "全球（覆盖 177+ 国家）",
        performance: "登顶 AI 图像视频赛道下载榜；官网披露服务 177+ 国家、企业级 API 生成成本下降 68%",
        comment: "下载登顶但收入没登顶——典型的'量有了缺变现'。切入话术：帮它找付费意愿高的市场，而不是继续冲下载。",
        source: "https://fxbaogao.com/detail/5439392",
        tier: "head"
      },
      {
        name: "Dreamina AI 即梦",
        publisher: "字节跳动",
        isChinese: true,
        markets: "全球",
        performance: "2026 年 3 月收入榜排名上升 5 位，首次跻身全球 AI 应用收入榜前十",
        comment: "字节自有体系。当赛道温度计用。",
        source: "https://www.netmarvel.com/news/1615.html",
        tier: "head"
      },
      {
        name: "豆包",
        publisher: "字节跳动",
        isChinese: true,
        markets: "中国 iOS",
        performance: "连续 12 个月登顶中国 iOS 移动应用下载榜；字节 5 款 AI 应用入围 TOP10",
        comment: "国内盘，不是出海线索。但可以用它跟客户聊'国内验证过的产品拿去东南亚跑'的逻辑。",
        source: "https://fxbaogao.com/detail/5439392",
        tier: "head"
      },
      {
        name: "SeaArt 海艺",
        publisher: "成都海艺互娱科技",
        isChinese: true,
        markets: "日本、美国、巴西、俄罗斯",
        performance: "注册用户超 6500 万、月访问超 3000 万，海外用户占比超 90%；核心业务已实现正毛利；7 月完成超亿元 B 轮融资",
        comment: "刚拿到钱、明说要'加速海外本地化运营'——预算窗口就是现在。而且主战场日本/巴西/俄罗斯正好是易点天下的强势市场。列为本周重点。",
        source: "https://www.toutiao.com/article/7667416625536156211",
        tier: "sme"
      },
      {
        name: "vivago ai",
        publisher: "智象未来（合肥）科技",
        isChinese: true,
        markets: "全球",
        performance: "3 月非聊天类 AI 应用中，与 PixVerse 同为仅有的两款进入全球下载榜前十的 AI 视频生成产品",
        comment: "母公司 HiDream.ai 走的是 B 端 MaaS + C 端 App 双线。C 端要拉量，B 端要品牌曝光，两种预算都能聊。",
        source: "https://www.netmarvel.com/news/1615.html",
        tier: "sme"
      },
      {
        name: "Plaud AI",
        publisher: "Plaud（AI 笔记硬件 + 软件）",
        isChinese: true,
        markets: "美国、全球",
        performance: "单次下载收入 47 美元（为 ChatGPT 的 9.3 倍），累计收入 6500 万美元",
        comment: "ARPU 高到离谱，说明它能承受很贵的 CPI。这类客户最愿意为'精准'付钱，不是打价格战的对象。",
        source: "https://fxbaogao.com/detail/5439392",
        tier: "sme"
      }
    ],

    education: [
      {
        name: "Duolingo",
        publisher: "Duolingo Inc.",
        isChinese: false,
        markets: "全球",
        performance: "2026-01-01 至 06-17 全球 IAP 收入约 3.068 亿美元，语言类第一；巴西、澳大利亚 App Store 教育畅销榜均稳居 #1",
        comment: "不是客户，是标尺。跟中国教育客户聊时用它定义天花板。",
        source: "https://www.statista.com/serp?q=language+learning+app+revenue",
        tier: "head"
      },
      {
        name: "Babbel",
        publisher: "Babbel GmbH",
        isChinese: false,
        markets: "欧美",
        performance: "同期全球 IAP 收入约 2299 万美元，语言类第二",
        comment: "第一和第二差 13 倍——这个断层说明语言学习赛道还有大量未被吃掉的细分需求。",
        source: "https://www.statista.com/serp?q=language+learning+app+revenue",
        tier: "head"
      },
      {
        name: "Speak",
        publisher: "Speakeasy Labs",
        isChinese: false,
        markets: "韩国、日本、全球",
        performance: "单月全球收入 326 万美元、环比 +70%，凭高 ARPU 挤进全球教育 App 收入第三",
        comment: "AI 口语是目前教育里最能涨的细分。中国做口语的团队应该都在盯它，是个好的破冰话题。",
        source: "https://m.cyzone.cn/article/792613",
        tier: "head"
      },
      {
        name: "Question.AI",
        publisher: "作业帮",
        isChinese: true,
        markets: "东南亚、拉美、全球",
        performance: "全球教育 App 收入榜第 8；出海应用中唯一 MAU 突破千万的产品，总榜第 5",
        comment: "国内教育出海的头号选手。它的变现是多元的（App 引流网课 + 硬件），投放目标不止装机——问清楚它的考核口径，才能提对方案。",
        source: "https://m.cyzone.cn/article/792613",
        tier: "head"
      },
      {
        name: "Gauth",
        publisher: "字节跳动",
        isChinese: true,
        markets: "美国、欧洲",
        performance: "全球教育 App 收入榜第 15；3 月收入环比 +108%，靠'校园创作者'活动 + TikTok 40 万播放 + 期中考季精准投放",
        comment: "这个案例值得背下来：内容活动 + 节点 + 精准投放三件套。跟任何教育客户聊'怎么在开学季起量'都能用。",
        source: "https://m.cyzone.cn/article/798226",
        tier: "head"
      },
      {
        name: "Solvely",
        publisher: "字节跳动",
        isChinese: true,
        markets: "全球",
        performance: "全球教育 App 收入榜第 19；单月收入 27 万美元、环比 +40%，同时登上 MAU 与收入增幅榜 Top5",
        comment: "体量小但双增，属于内部孵化的第二曲线。这类产品预算灵活、决策快，适合做小额试投。",
        source: "https://m.cyzone.cn/article/792613",
        tier: "sme"
      },
      {
        name: "Uknow.AI",
        publisher: "华人团队（出海综合解题类）",
        isChinese: true,
        markets: "东南亚",
        performance: "超 90% 活跃用户来自东南亚；连续多期榜单 MAU 与流水增长均不理想",
        comment: "'量有了但不涨'的典型。这种客户最缺的是诊断，不是加预算——上门先讲问题在哪，比讲报价单管用。",
        source: "https://m.cyzone.cn/article/798226",
        tier: "sme"
      },
      {
        name: "PTE Exam Practice - APEUni",
        publisher: "深圳市阿培尼教育科技有限公司",
        isChinese: true,
        markets: "澳大利亚、新西兰",
        performance: "澳大利亚 App Store 教育畅销榜 #3，在榜 76 天",
        comment: "垂直考试赛道的中国出海小巨头，用户价值极高（移民考试付费意愿强）。属于典型的'预算不大但 ROI 要求明确'客户。",
        source: "https://emberpicks.com/au/appstore/apps/education/grossing",
        tier: "sme"
      },
      {
        name: "PictureThis",
        publisher: "杭州睿琪软件 Glority Global Group",
        isChinese: true,
        markets: "澳大利亚、巴西、欧美",
        performance: "澳大利亚教育畅销榜 #4（在榜 76 天，峰值 #2）；巴西教育畅销榜 #16",
        comment: "易点天下已合作客户。多市场长期在榜说明投放是持续的，适合谈增量市场（拉美、中东）。",
        source: "https://emberpicks.com/au/appstore/apps/education/grossing",
        tier: "sme"
      },
      {
        name: "Speak English with Loora AI",
        publisher: "Loora A.I LTD（以色列）",
        isChinese: false,
        markets: "巴西、全球",
        performance: "巴西 App Store 教育畅销榜 #4；2 月末完成 1200 万美元 A 轮，3 月 MAU 环比 +67%",
        comment: "非中国团队，但它在巴西的位置就是中国口语产品要抢的坑。给做拉美的客户看这条，很有说服力。",
        source: "https://emberpicks.com/br/appstore/apps/education/grossing",
        tier: "head"
      },
      {
        name: "Speak & Learn English: Learna",
        publisher: "DEEP FLOW SOFTWARE SERVICES（土耳其）",
        isChinese: false,
        markets: "巴西、澳大利亚",
        performance: "巴西教育畅销榜 #2（在榜 58 天）、澳大利亚 #7",
        comment: "靠放宽订阅权益（虚拟角色从单独付费改为订阅无限用）拉动增长。这是个可以直接建议给客户的变现调整。",
        source: "https://emberpicks.com/br/appstore/apps/education/grossing",
        tier: "head"
      },
      {
        name: "Lingokids",
        publisher: "Monkimun Inc",
        isChinese: false,
        markets: "巴西、澳大利亚",
        performance: "巴西教育畅销榜 #11、澳大利亚 #10",
        comment: "儿童启蒙的国际标杆。中国做儿童教育出海的团队普遍在对标它。",
        source: "https://emberpicks.com/au/appstore/apps/education/grossing",
        tier: "head"
      }
    ]
  },

  hotEvents: [
    {
      title: "上半年中国自研游戏海外收入 123.72 亿美元，同比 +30.22%",
      date: "2026-08-01",
      summary: "中国音数协游戏工委在 CDEC 发布《2026年1—6月中国游戏产业报告》。国内市场实销 1884.5 亿元（+12.17%），海外增速是国内近 2.5 倍。美日韩合计占海外移动游戏收入 53.84%，德英法欧洲升至 10.14%。海外收入百强手游中策略类占近五成，合成类增幅显著。",
      bizValue: "这是最新最权威的行业数字，见任何游戏客户都能用来开场。重点抓两句：'海外比国内好做 2.5 倍''合成品类正在起量'——后一句可以直接问对方有没有在做合成新品。",
      source: "https://k.sina.com.cn/article_5953740931_162dee08306703t2by.html"
    },
    {
      title: "Yandex Ads 发布俄罗斯手游报告：中国厂商本土商店收入同比 +3.5 倍",
      date: "2026-07-31",
      summary: "ChinaJoy 现场发布。俄罗斯 2025 年手游下载全球第 7、时长全球第 5，全年下载 20.4 亿次，月均游玩 11.5 小时。中核游戏搜索占 78%，RPG 占 38%。42% 玩家月支出超 13 美元，人均年消费 59 美元，62% 非付费用户表示未来可能付费。",
      bizValue: "俄语区是今年最容易讲出'新增量'的市场。给做 RPG/中核的客户发这条，配一句：'欧美厂商撤了，坑还空着，我们能帮你把卢布结算和支付一起打通。'",
      source: "https://gu.qq.com/resources/shy/news/detail-v2/index.html",
      tag: "high-growth"
    },
    {
      title: "中东 App Store 畅销榜：沙特 Top20 有 7 款游戏、阿联酋 5 款",
      date: "2026-07-15",
      summary: "七麦数据监测。沙特榜上有 Last War、Kingshot、PUBG MOBILE、Whiteout Survival、Royal Match、Yalla Ludo、Kammelna；阿联酋榜上有 PUBG MOBILE、Kingshot、Royal Match、Whiteout Survival、Last War。品类从策略生存到棋牌休闲全覆盖。",
      bizValue: "中东已经不是低门槛蓝海了。跟还在观望的客户说：'现在进中东，翻译 + 信息流买量已经不够，得做本地化适配和长线运营'——顺势带出你们的本地化服务。",
      source: "https://game.sohu.com/a/1050717657_100065715"
    },
    {
      title: "海艺 SeaArt 完成超亿元人民币 B 轮，视觉中国领投",
      date: "2026-07-13",
      summary: "由视觉中国、华盖创赢、祥峰联合领投，广发信德、天投资本、川创投等跟投。资金主要用于多模态底层研发、全球化市场拓展、AI 垂类应用孵化。平台注册用户超 6500 万、月访问超 3000 万，海外占比超 90%，核心业务已正毛利，商业化收入破 5000 万美元。核心市场为日本、美国、巴西、俄罗斯。",
      bizValue: "融资公告里白纸黑字写了'全球化市场拓展'——这就是预算信号。而且它的四个核心市场里有三个（日本、巴西、俄罗斯）是易点天下的强势区。这周就该发触达邮件。",
      source: "https://www.toutiao.com/article/7667416625536156211",
      tag: "emerging"
    },
    {
      title: "AniShort（八点八数字）完成近亿元融资，创 2026 年 AI 短剧工具最大单笔",
      date: "2026-07-25",
      summary: "北京泰中合领投，老股东全线加码。6 月企业团队用户破一万，累计立项超 3 万个，核心用户付费转化率 64.8%，单月充值收入近千万，收入环比 +500%。母公司八点八数字自 2019 年做数字人，自研 XMEN.AI 模型，'亿话'平台服务超 2 万家企业。",
      bizValue: "AI 短剧工具端的钱开始进来了。这类工具厂商本身要投 B 端获客广告（LinkedIn/Google 搜索），是被同行忽略的甲方类型——竞争小，值得试。",
      source: "https://www.163.com/dy/article/L2KN2O2205568DTV.html",
      tag: "emerging"
    },
    {
      title: "宝通旗下易幻网络与八点八数字达成 AniShort 海外全域独家合作",
      date: "2026-07-25",
      summary: "易幻网络获得 AniShort 全链路 AIGC 智能协作平台的海外全域独家权益，双方围绕内容生产、发行运营和 Token 商业化展开数字内容出海协作。",
      bizValue: "易幻同时是 Yandex 俄罗斯的标杆案例方。它一边做游戏发行一边切 AI 短剧，说明发行商正在多品类扩张——跟它聊时不要只谈游戏预算。",
      source: "https://www.163.com/dy/article/L2KN2O2205568DTV.html",
      tag: "cooperation"
    },
    {
      title: "前 TikTok 产品经理创业，AI 视频共创平台 Wapoo 获近千万美元天使轮",
      date: "2026-07-29",
      summary: "面向 Gen Alpha 的视频共创社交平台，由某互联网集团旗下战略投资方投资，探奇资本担任独家融资顾问。团队约 10 人，5 月在美国上线，已在筹备下一轮。创始人杨名宇曾在快手做用户研究、在 TikTok 从 0 到 1 负责 TikTok Stories / TikTok Now。",
      bizValue: "10 人小团队 + 美国市场 + 刚融资，典型的早期 SME 线索。这类客户预算小但决策快，是新人最容易拿下第一单的类型。创始人是 TikTok 系，对买量的语言体系很熟，沟通成本低。",
      source: "https://www.toutiao.com/article/7667910938258965002",
      tag: "emerging"
    },
    {
      title: "Meta 时隔三年重启中国区官方一级代理招募",
      date: "2026-08-05",
      summary: "Meta 明确三点核心要求：长期成长思维（拒绝赚快钱、跟进 AI 广告工具落地）、客户价值为本（从'开户充值通道'转向全链路服务伙伴，要有素材创意、账户风控申诉、数据精细化运营能力）、开放共赢底色（互信互利、严守合规，有特定行业/市场/服务差异化能力优先）。在中国大陆，企业无法直接向 Meta 开户，必须经由官方一级代理。",
      bizValue: "对易点天下是直接利好信号，也是最好的谈资：跟客户说'Meta 正在重新定义中国服务生态，只有做全链路的一代才活得下来'，顺势把你们的素材+风控+运营能力讲一遍。",
      source: "https://longbridge.com/zh-CN/news/294162421",
      tag: "cooperation"
    },
    {
      title: "Meta 8 月 6 日起关闭三个报表维度：设备、小时、频次",
      date: "2026-08-06",
      summary: "对从未主动 opt-in 的账户，device、hourly、frequency 三个 breakdown 返回空结果。请求仍返回 200，不会报错，所以看板会静默变成零值。",
      bizValue: "这条要立刻同步给所有在投客户，否则他们会以为是你们投放出了问题。主动预警一次，信任度比讲十句方案都高。",
      source: "https://admakeai.com/blog/meta-ads-updates-august-2026"
    },
    {
      title: "Meta 上线官方广告 MCP 服务器，AI Agent 可直接读写广告账户",
      date: "2026-07-16",
      summary: "地址 mcp.facebook.com/ads，可读可写：报表、创建/编辑/暂停广告系列、管理商品目录。自有账户为标准权限；代理商操作他人业务数据需 ads_mcp_management 的 Advanced Access，须走 App Review。",
      bizValue: "代理商的新门槛，也是新卖点。可以跟客户说'我们已经在申请官方 MCP 高级权限，以后你的账户能被 AI 直接托管'——这是个很新的差异化话术，同行还没反应过来。",
      source: "https://admakeai.com/blog/meta-ads-updates-august-2026"
    },
    {
      title: "Meta Marketing API v26.0 上线，特殊广告类别不填 Advantage+ 受众会直接报错",
      date: "2026-07-29",
      summary: "7 月 29 日发布并启用版本自动升级。special-ad-category 的广告组若未显式设置 Advantage+ audience 标记，将直接报错。同时该版本移除了部分版位且未主动告知。",
      bizValue: "金融、信贷、住房、就业类客户最容易踩这个坑。提前提醒一句，能省掉客户一整天的排障时间。",
      source: "https://admakeai.com/blog/meta-ads-updates-august-2026"
    },
    {
      title: "Meta Advantage+ 开始改写广告图片里内嵌的标题文字",
      date: "2026-07-27",
      summary: "7 月 27 日被实测发现。系统会自动重写广告图片中烧录的 headline 文案。可通过填写 Branding 信息或按素材逐条 opt out 规避。",
      bizValue: "对品牌调性敏感的客户（美妆、奢品、金融）是雷区。主动告诉他们怎么关，是个很实在的服务价值点。",
      source: "https://admakeai.com/blog/meta-ads-updates-august-2026"
    },
    {
      title: "Meta 7 月两次确认的广告投放事故：7/16 与 7/19",
      date: "2026-07-19",
      summary: "7 月 16 日 Ads Delivery 事故持续 2 小时 07 分（Meta 首次公告时已称'正从更早的故障中恢复'，实际起始更早且未公开）；7 月 19 日持续 2 小时 32 分，是平台级故障的广告部分，Downdetector 收到 2.3 万+ 报告，期间买家无法暂停广告但花费持续。8 月 1–7 日无确认事故。",
      bizValue: "如果客户 7 月中旬数据异常，先查这两个时间点再查素材。而且可以帮客户申请广告金补偿——这是能直接体现代理价值的动作。",
      source: "https://admakeai.com/blog/meta-ads-updates-august-2026"
    },
    {
      title: "生成式 AI 移动应用近一年收入 61 亿美元，同比 +232%",
      date: "2026-05-14",
      summary: "Sensor Tower 数据。从 2023Q1 的不足 0.6 亿美元到 2026Q1 的 19 亿美元，三年增长超 32 倍。美国占 38%（近 22 亿美元），日本、韩国各占 5% 但增速更猛——日本 2026Q1 同比 +262%、单季破 1 亿美元。AI 社交陪伴 2026Q1 收入 1.5 亿美元，较 2023Q1 增长超 12 倍。",
      bizValue: "AI 客户名单要按市场排优先级：日韩是增量核心。见 AI 客户时问一句'你们日韩铺了吗'，比问'预算多少'更能打开话题。",
      source: "https://new.qq.com/rain/a/20260514A03GPT00",
      tag: "high-growth"
    },
    {
      title: "美国 AI 应用广告支出 12.5 亿美元、同比 +186%，印度增速 +1113%",
      date: "2026-05-14",
      summary: "Sensor Tower 数字广告洞察：美国 AI 广告支出同比 +186% 达 12.5 亿美元，日本 +545%、韩国 +542%、印度 +1113%。OpenAI、Google AI、Claude、Dola 等通用大模型稳居全球广告投放龙头。",
      bizValue: "这是今年最该拿去说服领导'把资源往 AI 客户倾斜'的数字，也是跟 AI 客户谈判时的底气——他们知道同行都在猛砸。",
      source: "https://fxbaogao.com/detail/5439392"
    },
    {
      title: "Genspark 转型 Super Agent，单季收入环比 +306%",
      date: "2026-05-14",
      summary: "靠差异化本地化投放实现：日本主投 YouTube、韩国主投 Facebook/Instagram。Sensor Tower 将其列为 AI Agent 赛道标杆案例。",
      bizValue: "'同一个产品，换个渠道组合，单季收入翻三倍'——这句话可以直接做成你的开场白，对任何一个投放效果不理想的 AI 客户都成立。",
      source: "https://fxbaogao.com/detail/5439392",
      tag: "high-growth"
    },
    {
      title: "Plaud AI 单次下载收入 47 美元，是 ChatGPT 的 9.3 倍",
      date: "2026-05-14",
      summary: "AI 笔记硬件 + 软件，深耕职场垂直场景，累计收入 6500 万美元。Sensor Tower 将其列为高 ARPU 垂类标杆。同类还有 Zeta（日本收入激增 691%）、PixAI（日本 AI 内容生成收入第一，60% 收入来自日本）。",
      bizValue: "高 ARPU 客户能接受高 CPI，是最不该打价格战的客群。跟这类客户谈，主打'找对人'而不是'量大便宜'。",
      source: "https://fxbaogao.com/detail/5439392",
      tag: "emerging"
    },
    {
      title: "海外微短剧 6 月双端下载约 2.14 亿次，月上新剧目超 3.8 万部",
      date: "2026-07-25",
      summary: "第三方数据。海外微短剧月度上新剧目数持续增加，6 月已超过 3.8 万部，与 AI 短剧工具（如 AniShort）的爆发互为因果。",
      bizValue: "每月 3.8 万部新剧 = 每月至少几十万条广告素材需求。这是目前素材消耗最凶的品类，谁能解决素材工业化谁就能拿单。",
      source: "https://www.163.com/dy/article/L2KN2O2205568DTV.html"
    },
    {
      title: "Gauth 单月收入 +108%：校园创作者活动 + TikTok 40 万播放 + 期中考季精准投放",
      date: "2026-04-15",
      summary: "Gauth 于 1 月底官宣回归，次月 MAU 破 500 万。2 月下旬推出'校园创作者'活动吸引大量美国大学生参与，TikTok 相关视频累计浏览 40 万，叠加欧美期中考试和申请季，配合精准广告投放，拿下当月全球 AI 教育 App 收入增幅第一。",
      bizValue: "这是一个可以整套复制给教育客户的打法。跟客户提案时别只给投放方案，把'内容活动 + 考试节点 + 投放'打包讲，显得你懂业务不只是懂买量。",
      source: "https://m.cyzone.cn/article/798226"
    },
    {
      title: "AppsFlyer 从 MMP 升级为 Modern Marketing Cloud，推出 Agent Hub 与 MCP",
      date: "2026-06-26",
      summary: "定位从传统移动归因工具下沉为'营销数据底座'，数据延伸到可直接触达用户的层面，整合 PC 端与移动端行为数据后交由 AI 决策。同时强调三大能力：全域合规采集、全域 ID 归一治理、归因模型迭代（服务器互通 + 多触点联动 + 增量分析）。",
      bizValue: "客户如果说'我要自己搭数据体系'，你可以顺着这三点问他做到哪一步了。大部分中小客户三条都没做全——这就是你切入代运营的口子。",
      source: "https://new.qq.com/rain/a/20260702A03HSY00"
    },
    {
      title: "Google Ads 调整 App Campaign 归因窗口：起算点从'点击时间'改为'安装时间'",
      date: "2026-07-10",
      summary: "安装后转化窗口的锚点后移，原本被点击时间限制排除的延迟转化重新计入。目的是与 AppsFlyer、Adjust 等 MMP 的口径对齐、提升算法学习效率、适应重度游戏/金融/高客单价订阅的长决策路径。",
      bizValue: "这会让报表出现'名义增长'。一定要提前跟客户打招呼，否则月底对账时容易被质疑数据注水。主动说清楚，是新人建立专业形象最便宜的方式。",
      source: "https://www.163.com/dy/article/KMI7S3HR0556E16T_pdya11y.html"
    },
    {
      title: "上海网络游戏出海服务平台（一期）上线测试，《中国游戏出海指南》新增美德沙印四国",
      date: "2026-08-01",
      summary: "在第二届中国国际游戏开发者大会（CIGDC）上线，提供出海版权、法律咨询、出海指南等服务，含五大模块（各国版权法规库、侵权案例库、登记与诉讼实务指引、产业政策动态预警、企业线上咨询通道，两家常驻律所 48 小时内回应）。《中国游戏出海指南》今年新增美国、德国、沙特阿拉伯、印度尼西亚四国指引。",
      bizValue: "上海的游戏客户会关心这个。可以拿它当由头约见：'新出的沙特和印尼指引我看了，有几点跟投放合规直接相关，要不要聊聊？'",
      source: "https://k.sina.com.cn/article_5953740931_162dee08306703t2by.html"
    },
    {
      title: "全球应用发布量 2026Q1 同比 +60%，4 月早期数据飙至 +104%",
      date: "2026-05-20",
      summary: "Appfigures 数据。AI 辅助开发及低代码/无代码工具成熟，持续降低开发门槛，推动生产力、工具类与生活方式赛道快速扩张。",
      bizValue: "新 App 数量翻倍 = 潜在客户池翻倍，但也意味着获客竞争更狠。对新客户可以说：'现在每天有上百个同类新品上线，先发优势只有几周。'制造紧迫感。",
      source: "https://www.netmarvel.com/news/1625.html",
      tag: "emerging"
    },
    {
      title: "蚂蚁国际在拉美渐次落子：合作 R2、Dock，R2 已服务超 10 万家拉美中小企业",
      date: "2026-07-20",
      summary: "R2 业务覆盖 5 个拉美国家，与 Uber Eats、Rappi、inDrive、Haulmer、PayU 等头部平台深度合作，蚂蚁引入 AI 风控工具。巴西方面与金融科技巨头 Dock 及本地数字平台合作。万里汇为美客多平台的中国中小卖家提供多币种资金归集（美客多覆盖 18 国、18 套税制与外汇规则）。",
      bizValue: "拉美的中国卖家生态正在成型。跟做拉美的客户聊，可以从'收款打通了，获客怎么打通'切入——这是个很自然的衔接。",
      source: "https://www.jiemian.com/article/14582038.html",
      tag: "cooperation"
    },
    {
      title: "华泰：Meta 集成 Manus AI、AppLovin 推 Axon Ads Manager，投放执行层正在 Agent 化",
      date: "2026-07-05",
      summary: "Meta 将 Manus AI 集成在 Ads Manager 作为执行层智能体，完成自动生成投放报告、受众研究、创意分析、周期任务自动化；AppLovin 推出 Axon Ads Manager 自助投放系统，自主执行预算分配、素材生成到竞价优化全流程。广告主端 Agent 有助于简化流程、吸引更多中小广告主预算。",
      bizValue: "平台自助化会挤压'只会开户充值'的代理，但会放大'懂业务、能定策略'的代理价值。这是你跟客户讲'为什么还需要我们'时最好的论据。",
      source: "https://www.163.com/dy/article/KOES7VKT05568W0A_pdya11y.html"
    }
  ],

  chinaGoingGlobal: [
    {
      product: "SeaArt 海艺（AI 多模态内容社区）/ SeaSoul / MoreShort",
      company: "成都海艺互娱科技",
      hq: "四川成都",
      category: "AI应用",
      markets: "日本、美国、巴西、俄罗斯",
      revenue: "商业化收入突破 5000 万美元；注册用户超 6500 万，月访问超 3000 万，海外占比超 90%，核心业务已实现正毛利",
      recent: "2026-07-13 官宣完成超亿元人民币 B 轮融资，视觉中国、华盖创赢、祥峰联合领投，资金明确用于'全球化市场拓展'",
      website: "https://www.seaart.ai",
      cooperation: "not",
      coopModel: "",
      agency: "暂无公开数据",
      scale: "sme",
      contacts: [],
      channels: [],
      contactNote: "本周最高优先级线索。官网与版权政策页均未公布商务邮箱，公开渠道只有 Discord / X(@SeaArt_Ai) / Instagram / Facebook / TikTok / Reddit / YouTube 官方号。建议路径：① LinkedIn 搜'SeaArt' + growth / user acquisition；② 融资稿里点名的融资负责人曾新月，可从公开报道切入；③ 创始团队 CEO 马飞（原 Tap4fun）、董事长陈立（原友塔游戏）都是游戏出海圈的人，可托游戏行业熟人引荐——这条路可能最快。未找到公开邮箱，不编造。"
    },
    {
      product: "vivago.ai / HiHarness / 智创（AI 视频与多模态生成）",
      company: "智象未来（合肥）科技",
      hq: "安徽合肥",
      category: "AI应用",
      markets: "全球",
      revenue: "官网披露 200+ API、100+ 重点客户、5000+ 亿次 API 调用；vivago 为 3 月全球下载榜前十中仅有的两款非聊天类 AI 产品之一",
      recent: "已与上海电影股份、华策影视达成战略投资合作；HiDream-O1-Image-1.5 模型登中国第一、全球第二",
      website: "https://vivago.ai",
      cooperation: "not",
      coopModel: "",
      agency: "暂无公开数据",
      scale: "sme",
      contacts: [],
      channels: [
        { label: "官方邮箱（最对口）", email: "official@vivago.ai", phone: "", source: "https://vivago.ai" }
      ],
      contactNote: "B 端 MaaS 与 C 端 App 双线，两种预算都能聊。官网 hidreamai.com 未公布商务邮箱与电话，只找到 vivago 侧官方邮箱。"
    },
    {
      product: "Kimi 智能助手 / Kimi 海外版",
      company: "月之暗面 Moonshot AI",
      hq: "北京",
      category: "AI应用",
      markets: "中国、东南亚、全球",
      revenue: "暂无公开数据",
      recent: "国内 AI 助手第一梯队，海外版持续迭代",
      website: "https://www.moonshot.cn",
      cooperation: "not",
      coopModel: "",
      agency: "暂无公开数据",
      scale: "",
      contacts: [],
      channels: [
        { label: "增长部门（最对口）", email: "growth@moonshot.cn", phone: "", source: "https://www.moonshot.cn" },
        { label: "公司通知邮箱", email: "notice@moonshot.cn", phone: "", source: "https://www.moonshot.cn" }
      ],
      contactNote: "growth@ 这个邮箱名本身就说明有增长团队。写邮件时直接给日韩/东南亚的渠道组合建议，比自我介绍有效。"
    },
    {
      product: "Talkie / 海螺 AI / MiniMax 开放平台",
      company: "MiniMax 稀宇科技",
      hq: "上海",
      category: "AI应用",
      markets: "美国、日本、东南亚、全球",
      revenue: "暂无公开数据（AI 社交陪伴赛道 2026Q1 全球收入 1.5 亿美元，美国贡献 45%）",
      recent: "AI 陪伴赛道已从小众玩法升级为成熟赛道，中国 iOS 市场该品类增速高达 676%",
      website: "https://www.minimax.io",
      cooperation: "not",
      coopModel: "",
      agency: "暂无公开数据",
      scale: "",
      contacts: [],
      channels: [
        { label: "商务咨询（官方公示）", email: "api@minimaxi.com", phone: "", source: "https://www.minimax.io" },
        { label: "投资者关系", email: "ir@minimax.io", phone: "", source: "https://www.minimax.io" }
      ],
      contactNote: "AI 陪伴的核心付费市场是美国（45%）和日韩。触达时直接给这三个市场的素材与渠道建议。"
    },
    {
      product: "美图秀秀 / Airbrush / 美图设计室",
      company: "美图公司（01357.HK）",
      hq: "福建厦门",
      category: "AI应用",
      markets: "全球",
      revenue: "上市公司，财报公开",
      recent: "被 Sensor Tower 列为 AI 图像视频生成赛道收入增长的驱动者之一（与 CapCut、Canva 并列）",
      website: "https://www.meitu.com",
      cooperation: "cooperated",
      coopModel: "易点天下已知长期合作客户。可基于既有合作谈 AI 新品线（美图设计室、Airbrush 海外版）的增量投放预算。",
      agency: "",
      scale: "",
      contacts: [],
      channels: [
        { label: "海外广告合作（最对口）", email: "globalbd@meitu.com", phone: "", source: "https://www.meitu.com" },
        { label: "效果广告合作（中国大陆）", email: "mtadx@meitu.com", phone: "", source: "https://www.meitu.com" },
        { label: "商业化广告合作（中国大陆）", email: "business@meitu.com", phone: "", source: "https://www.meitu.com" },
        { label: "投资者关系", email: "ir@meitu.com", phone: "", source: "https://www.meitu.com" }
      ],
      contactNote: "老客户，重点是把 AI 新品线的预算拿下来，而不是维持存量。"
    },
    {
      product: "有道词典 / 有道翻译 / 有道智慧学习",
      company: "网易有道（DAO.NYSE）",
      hq: "北京",
      category: "教育",
      markets: "全球",
      revenue: "上市公司，财报公开",
      recent: "语言学习仍是全球教育 App 中最赚钱的落地形式（收入 Top20 中语言类占 12 款）",
      website: "https://www.youdao.com",
      cooperation: "not",
      coopModel: "",
      agency: "暂无公开数据",
      scale: "",
      contacts: [
        { name: "Jeffrey Wang", role: "投资者关系（可侧面了解投放预算口径）", email: "", phone: "", linkedin: "", source: "https://ir.youdao.com" }
      ],
      channels: [
        { label: "市场合作（最对口）", email: "marketing@corp.youdao.com", phone: "", source: "https://www.youdao.com" },
        { label: "推广合作", email: "service@corp.youdao.com", phone: "", source: "https://www.youdao.com" },
        { label: "广州分公司总机", email: "", phone: "020-85105163", source: "https://www.youdao.com" }
      ],
      contactNote: "已用飞书合作记录表核验：表内仅匹配到'四川蜀有道网络科技有限公司'，与网易有道无关，判定为未合作。"
    },
    {
      product: "流利说 / Liulishuo（AI 英语）",
      company: "流利说 LAIX（LAIX.NYSE）",
      hq: "上海",
      category: "教育",
      markets: "中国、东南亚",
      revenue: "上市公司，财报公开",
      recent: "AI 口语赛道被 Speak（月收入 326 万美元 +70%）、Loora（融资 1200 万美元、MAU +67%）持续挤压",
      website: "https://www.liulishuo.com",
      cooperation: "not",
      coopModel: "",
      agency: "暂无公开数据",
      scale: "",
      contacts: [],
      channels: [
        { label: "商务合作（最对口）", email: "bd@liulishuo.com", phone: "", source: "https://www.liulishuo.com" },
        { label: "市场/媒体联络", email: "media@liulishuo.com", phone: "", source: "https://www.liulishuo.com" },
        { label: "客服热线", email: "", phone: "400-648-6999", source: "https://www.liulishuo.com" }
      ],
      contactNote: "已用飞书合作记录表核验：未匹配到流利说 / LAIX 主体，判定为未合作。触达角度：拿 Speak 和 Loora 的增长数据去问'你们海外还打不打'。"
    },
    {
      product: "PalFish 伴鱼（AI 英语 / 出海）",
      company: "北京读我科技有限公司",
      hq: "北京",
      category: "教育",
      markets: "东南亚、拉美、全球",
      revenue: "暂无公开数据",
      recent: "AI 教育出海整体呈现 MAU 与流水双增，语言类是受假期影响最小的类别",
      website: "https://www.palfish.org",
      cooperation: "cooperated",
      coopModel: "已在飞书合作记录表'产品使用'分表中以 advertiser『PALFISH PTE.LTD.』列名，确认为已合作客户。可谈新市场（拉美、中东）增量。",
      agency: "",
      scale: "sme",
      contacts: [],
      channels: [
        { label: "全球商务拓展（最对口）", email: "globalbd@ipalfish.com", phone: "", source: "https://www.palfish.org" },
        { label: "开放平台商务合作", email: "platform_bd@ipalfish.com", phone: "", source: "https://www.palfish.org" }
      ],
      contactNote: "老客户里的中小体量，服务好了口碑传播快。"
    },
    {
      product: "ReelShort（海外微短剧）",
      company: "中文在线 / 枫叶互动 Crazy Maple Studio（300364）",
      hq: "北京 / 美国硅谷",
      category: "娱乐APP",
      markets: "美国、欧洲、东南亚",
      revenue: "海外微短剧市场份额约 29%，居第一",
      recent: "海外微短剧 6 月双端下载约 2.14 亿次，月上新超 3.8 万部，竞争进入素材工业化阶段",
      website: "https://www.crazymaplestudios.com",
      cooperation: "cooperated",
      coopModel: "已在飞书合作记录表'APP'分表客户列以『Crazy Maple Studio, Inc.』列名，确认为已合作客户。",
      agency: "",
      scale: "",
      contacts: [
        { name: "南亚鹏", role: "枫叶互动副总裁（管投放与内容策略）", email: "", phone: "", linkedin: "", source: "公开报道" },
        { name: "Joey Jia", role: "Crazy Maple Studio CEO", email: "", phone: "", linkedin: "", source: "公开报道" }
      ],
      channels: [
        { label: "官方客服（可转商务）", email: "support@crazymaplestudio.com", phone: "", source: "https://www.crazymaplestudios.com" },
        { label: "法务（品牌/版权事务）", email: "legal@crazymaplestudio.com", phone: "", source: "https://www.crazymaplestudios.com" }
      ],
      contactNote: "老客户。当前谈判抓手是素材产能——月上新 3.8 万部的行业节奏下，谁能批量产素材谁拿预算。"
    },
    {
      product: "NetShort（海外微短剧）",
      company: "NETSTORY PTE. LTD.（麦芽传媒海外主体）",
      hq: "新加坡 / 中国",
      category: "娱乐APP",
      markets: "美国、东南亚、欧洲",
      revenue: "海外微短剧市场份额约 10%；2026-08-01 综合分 66.2，位列头部四强",
      recent: "与 DramaBox（68.3）、ReelShort（66.5）、DramaWave（64.3）在头部胶着",
      website: "https://www.netshort.com",
      cooperation: "not",
      coopModel: "",
      agency: "暂无公开数据",
      scale: "",
      contacts: [],
      channels: [
        { label: "商务合作（最对口）", email: "business@netshort.com", phone: "", source: "https://www.netshort.com" },
        { label: "客服支持", email: "support@netshort.com", phone: "", source: "https://www.netshort.com" }
      ],
      contactNote: "官网直接挂了 business@ 邮箱，是短剧四强里最好触达的一家。已用飞书合作记录表核验：搜索'麦芽'仅匹配到'深圳壹麦芽口腔门诊部'，与该公司无关；未匹配 NETSTORY / NetShort，判定为未合作。这条建议今天就发。"
    },
    {
      product: "DramaBox / Webfic（海外微短剧 + 网文）",
      company: "北京点众科技股份有限公司",
      hq: "北京",
      category: "娱乐APP",
      markets: "美国、东南亚、欧洲、拉美",
      revenue: "海外微短剧市场份额约 21%，居第二；2026-08-01 综合分 68.3，四强第一",
      recent: "官网列出网文（点众阅读 / 点众文学 / Webfic）+ 微短剧（河马剧场 / 繁花剧场）+ 艺人经纪（河马星驰）三条线，2011 年成立，国家高新技术企业",
      website: "https://www.dianzhong.com",
      cooperation: "not",
      coopModel: "",
      agency: "暂无公开数据",
      scale: "",
      contacts: [],
      channels: [
        { label: "北京总部总机", email: "", phone: "010-82318695", source: "https://www.dianzhong.com" }
      ],
      contactNote: "已用飞书合作记录表核验：未匹配到点众 / DramaBox 相关主体，判定为未合作。它同时有网文和艺人经纪业务，投放需求不止短剧一条线——第一通电话可以先问业务线划分，比直接推方案自然。官网未公布商务邮箱。"
    },
    {
      product: "Loopit（AI 互动内容社区）",
      company: "北京涌跃智能科技",
      hq: "北京",
      category: "娱乐APP",
      markets: "海外",
      revenue: "暂无公开数据",
      recent: "AI 社交陪伴赛道 2026Q1 全球收入 1.5 亿美元，较 2023Q1 增长超 12 倍，中小玩家仍有空间",
      website: "https://loopit.com.cn",
      cooperation: "not",
      coopModel: "",
      agency: "暂无公开数据",
      scale: "sme",
      contacts: [
        { name: "陈炜鹏", role: "创始人（前百川智能联合创始人）", email: "", phone: "", linkedin: "", source: "公开报道" }
      ],
      channels: [
        { label: "客服/支持（可转商务）", email: "support@loopit.com.cn", phone: "", source: "https://loopit.com.cn" }
      ],
      contactNote: "创始人背景清楚、团队小、决策快。AI 陪伴赛道格局未固化，正是需要投放帮忙抢位的阶段。"
    },
    {
      product: "XTransfer（B2B 跨境收付与资金管理）",
      company: "XTransfer（上海总部）",
      hq: "上海",
      category: "金融",
      markets: "全球（服务中国外贸中小企业）",
      revenue: "暂无公开数据",
      recent: "国内布局上海、深圳、广州、东莞、义乌、宁波等 20 余城 + 中国香港，服务时间 9:00–21:00 全周无休",
      website: "https://www.xtransfer.cn",
      cooperation: "not",
      coopModel: "",
      agency: "暂无公开数据",
      scale: "",
      contacts: [],
      channels: [
        { label: "服务热线（最对口，可转商务）", email: "", phone: "400-998-9930", source: "https://www.xtransfer.cn/contact" },
        { label: "服务邮箱", email: "service@xtransfer.cn", phone: "", source: "https://www.xtransfer.cn/contact" }
      ],
      contactNote: "已用飞书合作记录表核验：未匹配到 XTransfer 主体，判定为未合作。它自己是重投放获客的公司（B2B 搜索 + 信息流 + 线下），而不只是金融牌照方——这是同行容易忽略的点。"
    },
    {
      product: "Last War: Survival",
      company: "元趣娱乐 First Fun（新加坡主体 Funfly Pte. Ltd. / 美国主体 First Fun Inc.）",
      hq: "新加坡 / 美国圣克拉拉",
      category: "游戏",
      markets: "北美、欧洲、东南亚、中东",
      revenue: "沙特 iPhone 畅销总榜 Top20 长期在榜，中东为核心付费市场之一",
      recent: "2026-07-15 前后同时位列沙特与阿联酋 iPhone 畅销总榜 Top20（阿联酋榜同期仅 5 款游戏）",
      website: "https://www.firstfun.com",
      cooperation: "not",
      coopModel: "",
      agency: "暂无公开数据",
      scale: "",
      contacts: [],
      channels: [
        { label: "公司事务邮箱（最对口）", email: "contact@firstfun.com", phone: "", source: "https://www.firstfun.com" },
        { label: "Last War 产品支持", email: "support@lastwar.com", phone: "", source: "https://www.firstfun.com" }
      ],
      contactNote: "已用飞书合作记录表核验：未匹配到元趣 / First Fun / Funfly 主体，判定为未合作。官网明确公示了公司邮箱和新加坡、美国两个办公地址，是头部游戏厂商里罕见能冷邮件直达的。招聘走 MokaHR，也可从招聘页看它在扩哪个岗位来判断业务重心。"
    }
  ],

  policies: [
    {
      platform: "Meta",
      title: "【2 天内生效】亚太 Shops 功能收缩：7 个市场之外无法开店、无法用产品标签",
      date: "2026-08-10",
      detail: "自 2026 年 8 月 10 日起，亚太地区除澳大利亚、印度、印度尼西亚、日本、韩国、中国台湾、泰国这 7 个市场外，其他市场的商家将无法在 Facebook 和 Instagram 页面开设店铺，也无法在帖子中使用产品标签。Meta 表示将继续支持 Advantage+ 购物广告、消息营销和 Reels。",
      impact: "high",
      categories: ["电商"],
      bizValue: "只剩 2 天。今天就该给所有做东南亚社交电商的客户发提醒，并给出替代方案：预算往 Advantage+ 购物广告倾斜、加强消息营销。这是一次成本极低、信任回报极高的主动服务。",
      source: "https://www.sohu.com/a/1031689737_122811304"
    },
    {
      platform: "Meta",
      title: "8 月 6 日起关闭设备 / 小时 / 频次三个报表维度（未 opt-in 账户静默返回空值）",
      date: "2026-08-06",
      detail: "对从未主动开启的账户，device、hourly、frequency 三个 breakdown 返回空结果。请求仍返回 HTTP 200，不会触发任何告警，看板会静默变成零。",
      impact: "high",
      categories: ["隐私"],
      bizValue: "客户如果周四之后发现看板空了，第一反应会怀疑代理。抢先一步告知，等于免费赚一次信任。",
      source: "https://admakeai.com/blog/meta-ads-updates-august-2026"
    },
    {
      platform: "Meta",
      title: "Marketing API v26.0 上线：特殊广告类别不显式声明 Advantage+ 受众直接报错",
      date: "2026-07-29",
      detail: "7 月 29 日发布并启用版本自动升级。special-ad-category 广告组若未显式设置 Advantage+ audience 标记会报错；该版本同时移除部分版位且未主动告知。",
      impact: "mid",
      categories: ["金融", "隐私"],
      bizValue: "信贷、住房、就业类客户是重灾区。提前一句提醒能省客户一天排障，也顺便体现你们的技术响应速度。",
      source: "https://admakeai.com/blog/meta-ads-updates-august-2026"
    },
    {
      platform: "Meta",
      title: "官方广告 MCP 服务器上线，代理跨账户操作需 Advanced Access 并过 App Review",
      date: "2026-07-16",
      detail: "mcp.facebook.com/ads 可读可写：报表、创建/编辑/暂停广告系列、商品目录。操作自有账户为标准权限；代理商触及他方业务数据需申请 ads_mcp_management 的 Advanced Access，须经 App Review。",
      impact: "mid",
      categories: ["AI", "加白名单/资质"],
      bizValue: "新的资质门槛 = 新的差异化卖点。跟客户讲'我们在申请官方 MCP 高级权限'，比讲优化师人数有说服力得多。",
      source: "https://admakeai.com/blog/meta-ads-updates-august-2026"
    },
    {
      platform: "Meta",
      title: "AI 生成图像自动加「Made with AI」标签，不可移除",
      date: "2026-07-01",
      detail: "Meta 会通过 C2PA 元数据或自有检测系统，对写实风格的 AI 生成图像自动打上 Made with AI 标签，广告主无法移除。非写实的 AI 艺术风格一般不受影响。",
      impact: "mid",
      categories: ["AI"],
      bizValue: "做 AI 素材的客户要提前知道这条。建议策略：写实素材接受打标，或改走非写实风格规避——这是能直接落到素材排期上的建议。",
      source: "https://www.auditsocials.com/blog/meta-cryptocurrency-bnpl-advertising-policy-2026"
    },
    {
      platform: "Meta",
      title: "保健品 / 补剂类广告需 LegitScript 或同等资质认证",
      date: "2026-07-01",
      detail: "对做出临床类宣称的保健品与健康品牌，Meta 要求提供 LegitScript 第三方认证或同等验证；未认证者文案只能限于泛健康表述。",
      impact: "mid",
      categories: ["加白名单/资质"],
      bizValue: "如果名单里有做保健品出海的客户，这是明确的加白需求——正是代理商能收服务费的环节。",
      source: "https://www.auditsocials.com/blog/meta-cryptocurrency-bnpl-advertising-policy-2026"
    },
    {
      platform: "Meta",
      title: "住房 / 就业 / 信贷类广告限制定向，必须走 Special Ad Audiences",
      date: "2026-07-01",
      detail: "此类广告不能按邮编排除受众（即使作为地理位置代理也不行），必须使用 Meta 的 Special Ad Audiences 而非标准定向。同时受保护类别（种族、宗教、性取向等）相关定向选项已被移除。",
      impact: "high",
      categories: ["金融", "现金贷"],
      bizValue: "所有现金贷、助贷客户必读。定向被卡死之后，效果全靠创意和落地页体验——这正好是你们能提供服务的地方，把话术从'我们能定向得更准'改成'我们能帮你把素材和落地页做出区隔'。",
      source: "https://www.sohu.com/a/1031689737_122811304"
    },
    {
      platform: "Google",
      title: "赌博与游戏类广告认证要求扩展（生效日 2026-09-14，还有 37 天）",
      date: "2026-09-14",
      detail: "认证范围扩展至相关全部品类；免费子域名不再具备认证资格，投放域名须为公司自有；同一 MCC 下重复违规将影响认证资格。",
      impact: "high",
      categories: ["游戏", "加白名单/资质"],
      bizValue: "还有一个多月，够做准备但不算宽裕。给所有涉赌博/博彩玩法的游戏客户排一次域名与资质自查，这本身就是一次很自然的约见由头。",
      source: "https://support.google.com/adspolicy/answer/6018017"
    },
    {
      platform: "Google",
      title: "取消个人资质开 B2B 广告账户通道，统一社会信用代码强制联网核验",
      date: "2026-06-01",
      detail: "2026 年 Google 已完全取消个人资质开通 B2B 广告账户的通道，所有企业账户必须通过统一社会信用代码联网核验。PS 修改、借用资质开户将被纳入黑名单 1 年，无法再次申请。特殊管控行业还需额外准备对应资质。",
      impact: "high",
      categories: ["加白名单/资质"],
      bizValue: "黑名单 1 年是重罚。跟客户强调'别图省事找野路子开户'，同时把你们的合规开户通过率优势讲出来。",
      source: "https://www.ebrun.com/20260601/672083.shtml"
    },
    {
      platform: "Google",
      title: "全面收紧返点政策，取消所有新客返点，代理层面基本无返点",
      date: "2026-06-01",
      detail: "Google 已取消所有新客返点，代理商层面基本无返点。行业建议：品牌商选择合作代理商不应再将返点作为核心决策依据。通过官方认证代理商开户通过率比自主开户高 65%，并能获得免费合规检测与封号申诉支持。",
      impact: "high",
      categories: ["加白名单/资质"],
      bizValue: "对新人是好消息：不用再跟客户比谁返点高。把话术切换成'通过率高 65% + 合规检测 + 申诉通道'，这是能量化的价值。",
      source: "https://www.ebrun.com/20260601/672083.shtml"
    },
    {
      platform: "Google",
      title: "App Campaign 安装后转化窗口锚点：由「点击时间」改为「安装时间」",
      date: "2026-07-10",
      detail: "原逻辑下点击后 N 天计算转化，延迟安装 + 延迟付费的用户价值会被漏掉；新逻辑以安装为锚点，与 AppsFlyer、Adjust 等 MMP 口径对齐，提升算法学习效率，更适应重度游戏、金融工具、高客单价订阅的长决策路径。",
      impact: "mid",
      categories: ["游戏", "金融"],
      bizValue: "报表会出现'名义增长'。一定要在月度复盘前主动说明口径变化，否则容易被误解成数据注水。",
      source: "https://www.163.com/dy/article/KMI7S3HR0556E16T_pdya11y.html"
    },
    {
      platform: "TikTok",
      title: "中国大陆企业自助开户 100% 驳回，官方一级代理成唯一合规路径",
      date: "2026-08-06",
      detail: "2026 年中国大陆企业通过官方自助通道开户已被 100% 驳回。官方渠道自助开户仅限本土店卖家（如美国本土公司）。经一级代理开户支持大陆企业营业执照、个体工商户执照、中国香港主体，审核 1–3 个工作日、优质代理最快 2 小时。",
      impact: "high",
      categories: ["加白名单/资质"],
      bizValue: "这是你最硬的谈判筹码：客户没得选。谈话重点不再是'要不要找代理'，而是'找哪家代理'——把下户速度、主体兼容性、申诉能力摆出来。",
      source: "https://tech.hexun.com/2026-08-06/224778675.html"
    },
    {
      platform: "TikTok",
      title: "个体工商户开户：美区基本不接，东南亚站点相对宽松",
      date: "2026-08-06",
      detail: "个体工商户在部分地区仍可申请开户，但通过率明显低于公司主体。美区账户基本不接个体户，东南亚部分站点相对宽松。",
      impact: "mid",
      categories: ["电商", "加白名单/资质"],
      bizValue: "遇到个体户客户不要一口回绝，先建议做东南亚站点，同时劝他把公司主体办下来。这样既留住了客户又给了专业建议。",
      source: "https://tech.hexun.com/2026-08-06/224778675.html"
    },
    {
      platform: "TikTok",
      title: "AI 生成内容强制披露义务全面执行",
      date: "2026-07-01",
      detail: "2026 年 7 月起，TikTok 对 AI 生成内容的披露要求进入强制执行阶段，未标注的 AIGC 素材面临限流或下架风险。",
      impact: "high",
      categories: ["AI"],
      bizValue: "所有用 AI 批量产素材的客户（尤其短剧和电商）都要过一遍合规。这是个能立刻带出'素材合规审核'增值服务的口子。",
      source: "https://www.52by.com/article/229890"
    },
    {
      platform: "TikTok",
      title: "欧盟 AI 法案透明度义务 8 月 2 日生效，覆盖投放素材与算法披露",
      date: "2026-08-02",
      detail: "欧盟 AI Act 的透明度相关义务自 8 月 2 日起适用，涉及 AI 生成内容标识与自动化决策披露，对在欧盟投放的广告主同步产生合规要求。",
      impact: "high",
      categories: ["AI", "隐私"],
      bizValue: "做欧洲市场的客户必须知道。跟中东、拉美客户就别提了——精准推送情报本身也是专业度的体现。",
      source: "https://www.52by.com/article/229890"
    },
    {
      platform: "TikTok",
      title: "官方代理资质核验三步法（授权书 / 官网 Partner 页 / 穿透签约主体）",
      date: "2026-08-06",
      detail: "① 索要 TikTok for Business 官方代理授权书，查看授权期限、范围及法律实体全称；② 通过 TikTok for Business 官网'合作伙伴'页面交叉验证；③ 穿透核实签约主体与对外服务品牌可能不一致（如飞书逸途 SinoClick 是飞书深诺集团旗下服务品牌，实际签约方为飞书深诺）。非授权渠道常用'盗开账户'或'转售黑卡'，一旦被查账户与域名可能永久封禁。",
      impact: "high",
      categories: ["加白名单/资质"],
      bizValue: "把这三步主动教给客户，等于帮他排除掉一堆不合规同行。真诚是最好的销售技巧，尤其对新人。",
      source: "https://www.52by.com/article/229890"
    },
    {
      platform: "全球监管",
      title: "印尼消费贷日利率上限统一为 0.1%（2026 年 3 月起）",
      date: "2026-03-01",
      detail: "2026 年 3 月起印尼消费贷（利息 + 费用）最高日利率上限统一为 0.1%（年化约 36.5%），已从高收益转为微利，或迫使大批中小平台关停退出。印尼活跃用户 3602.65 万，成年人口渗透率 17.16%，居东南亚第一。",
      impact: "high",
      categories: ["现金贷", "金融"],
      bizValue: "印尼利差被压到微利，客户对 CPA 会变得极度敏感。谈判时要主动把'降低单客成本'放在第一句，而不是讲量级。",
      source: "https://www.fxbaogao.com/detail/5379445"
    },
    {
      platform: "全球监管",
      title: "菲律宾在线借贷平台（OLP）日利率上限降至 0.33%",
      date: "2025-12-31",
      detail: "菲律宾 OLP 日利率上限从 2022 年的 0.5% 降至 2025 年的 0.33%，从无监管走向强监管。菲律宾现金贷渗透率 13.23%，为东南亚第二大增长引擎，市场排名波动剧烈，新锐应用（如 FT Lending）排名同比上升 20 位。",
      impact: "high",
      categories: ["现金贷", "金融"],
      bizValue: "菲律宾排名波动大 = 投放能直接改变格局。这是说服客户加预算最好的场景：'这个市场现在还能靠买量换位置。'",
      source: "https://www.fxbaogao.com/detail/5379445"
    },
    {
      platform: "全球监管",
      title: "墨西哥 Fintech 2.0 改革：数字资产与放贷业务纳入 CNBV 严管",
      date: "2026-06-01",
      detail: "墨西哥实施 Fintech 2.0 改革，将数字资产与发放贷款纳入 CNBV 严格监管，倒逼企业加速牌照化转型。当前出海互金在墨西哥多选择 SOFOM 多用途金融牌照（滴滴、瓴岳科技、快牛智能、信飞科技、度小满等）。2026 年多家机构的出海首选地已从印尼转向墨西哥（人口超 1.2 亿、监管相对宽松、无利率上限）。",
      impact: "high",
      categories: ["现金贷", "金融"],
      bizValue: "墨西哥是 2026 年互金出海的新主战场。见互金客户第一句就问'墨西哥进度怎么样'，专业感立刻建立。",
      source: "https://www.zichanjie.com/article/432622.html"
    }
  ],

  agencyIntel: [
    {
      title: "Meta 时隔三年重启中国区官方一级代理招募，门槛指向'全链路服务'",
      date: "2026-08-05",
      summary: "三点核心要求：长期成长思维（跟进 AI 广告工具落地、持续投入团队能力）、客户价值为本（从开户充值通道转向素材创意生产 + 账户风控申诉 + 数据精细化运营）、开放共赢底色（严守合规，行业/市场/服务差异化能力优先）。一代资质意味着账户稳定性、官方绿色申诉通道、产品政策优先知情权和官方背书。",
      source: "https://longbridge.com/zh-CN/news/294162421",
      bizValue: "这是易点天下的能力画像，几乎逐条对得上。跟客户介绍公司时，可以直接照着 Meta 的三条要求讲你们做到了什么。",
      impact: "high"
    },
    {
      title: "Google 全面取消新客返点，代理层面基本无返点",
      date: "2026-06-01",
      summary: "Google 已取消所有新客返点，代理商层面基本无返点。行业共识转向：不要把返点当作选代理的核心依据。",
      source: "https://www.ebrun.com/20260601/672083.shtml",
      bizValue: "对新人是解脱——不用再被拉进比返点的价格战。把话术换成通过率、申诉能力、素材产能这三样能量化的东西。",
      impact: "high"
    },
    {
      title: "TikTok 开户行情：0 开户费、100 美元起充、最快 2 小时下户",
      date: "2026-08-06",
      summary: "飞书逸途（SinoClick）实行 0 开户费、100 美元起充，相比行业常见的 2000–5000 美元首充门槛显著更低，最快 2 小时下户；持 TSP（电商解决方案）+ TAP（广告投放）+ MCN 三重专项认证，覆盖 Meta、Google、TikTok、Pinterest、LinkedIn、Snapchat 等 50 余家媒体、138 个国家。",
      source: "https://tech.hexun.com/2026-08-06/224778675.html",
      bizValue: "这是主要竞对的公开报价与能力清单，谈判前必须知道。客户拿这个来压价时，你要能立刻切换到'首充门槛之外，出问题谁能捞回来'的维度。",
      impact: "high"
    },
    {
      title: "客户会用三步法核验代理资质，提前准备好材料",
      date: "2026-08-06",
      summary: "① 索要官方代理授权书（看期限、范围、法律实体全称）；② 官网 Partner 页面交叉验证；③ 穿透核实签约主体与服务品牌可能不一致。",
      source: "https://www.52by.com/article/229890",
      bizValue: "第一次见客户就主动把授权书和官网链接给出去，反客为主。这个动作特别适合新人建立可信度。",
      impact: "mid"
    },
    {
      title: "通过官方认证代理开户，通过率比自主开户高 65%",
      date: "2026-06-01",
      summary: "行业统计口径：官方认证代理开户通过率比自主开户高 65%，同时可获得免费合规检测与封号申诉支持，账户稳定性更高。",
      source: "https://www.ebrun.com/20260601/672083.shtml",
      bizValue: "一个能直接引用的数字。客户问'找你们和我自己开有什么区别'，就回这句。",
      impact: "mid"
    },
    {
      title: "Meta 官方 ads MCP 上线，代理跨账户操作需 ads_mcp_management 高级权限",
      date: "2026-07-16",
      summary: "mcp.facebook.com/ads 可读写报表、广告系列和商品目录。代理商触及客户业务数据需申请 Advanced Access 并过 App Review。建议在 Q4 客户提出需求之前就排进审核队列。",
      source: "https://admakeai.com/blog/meta-ads-updates-august-2026",
      bizValue: "新的技术资质护城河。可以内部提一嘴让公司提前申请，同时对外当作差异化卖点。",
      impact: "high"
    },
    {
      title: "Google 归因锚点改安装时间，报表会出现'名义增长'",
      date: "2026-07-10",
      summary: "安装后转化窗口起算点从点击改为安装，原被排除的延迟转化重新计入，与 MMP 口径对齐，报表数字会自然变好看。",
      source: "https://www.163.com/dy/article/KMI7S3HR0556E16T_pdya11y.html",
      bizValue: "月度复盘前一定要先跟客户说清口径变化。否则数据好看反而会被怀疑。",
      impact: "mid"
    },
    {
      title: "AppsFlyer 升级为 Modern Marketing Cloud，推 Agent Hub 与 MCP",
      date: "2026-06-26",
      summary: "定位从移动归因工具下沉为'营销数据底座'：全域合规采集（App/网页/社交触点用户主动授权）、全域 ID 归一治理（打通 PC/移动/小程序）、归因模型迭代（服务器对服务器、多触点、增量分析）。同时强调流量平台只有生态内自归因能力，出于商业壁垒不会开放跨平台统一归因。",
      source: "https://new.qq.com/rain/a/20260702A03HSY00",
      bizValue: "客户说'平台后台数据就够用了'时，用这条反驳：平台不会告诉你该把预算挪到别家。跨平台独立衡量是代理的价值支点。",
      impact: "mid"
    },
    {
      title: "投放执行层正在 Agent 化：Meta 集成 Manus、AppLovin 推 Axon Ads Manager",
      date: "2026-07-05",
      summary: "Meta 把 Manus AI 集成进 Ads Manager 做执行层智能体（自动报告、受众研究、创意分析、周期任务）；AppLovin 的 Axon Ads Manager 自助执行预算分配、素材生成到竞价优化全流程。华泰判断：广告主端 Agent 会简化流程、吸引更多中小广告主预算，扩大行业整体投放规模。",
      source: "https://www.163.com/dy/article/KOES7VKT05568W0A_pdya11y.html",
      bizValue: "自助化不是代理的末日，是筛选器：只会开户的会被淘汰，能定策略的会被抬价。这也是你说服客户'为什么还要付服务费'的核心逻辑。",
      impact: "high"
    },
    {
      title: "Yandex Ads 一站式方案（获客 + 变现 + 支付），Efun 案例 12 个月 ROAS 240%",
      date: "2026-07-31",
      summary: "易幻网络用 Yandex Ads 全链路方案在俄罗斯推两款奇幻 RPG，12 个月累计 ROAS 240%，新增安装 13.5 万次，新用户获取量环比 +23%。Yandex Ads 大中华区负责人马婧强调'不需要分散精力对接多个供应商'。俄罗斯 62% 非付费用户表示未来可能付费，支付便利性、卢布结算是转化关键。",
      source: "https://gu.qq.com/resources/shy/news/detail-v2/index.html",
      bizValue: "俄语区是今年少有的能讲'新渠道 + 真实 ROI'的地方。跟游戏客户提俄罗斯时，一站式（尤其是卢布支付打通）比单纯讲量更打动人。",
      impact: "high"
    },
    {
      title: "虚拟卡充值与'黑卡转售'风险：账户和域名可能被永久封禁",
      date: "2026-08-06",
      summary: "市场上存在大量非授权中介，常使用'盗开账户'或'转售黑卡'方式，一旦被查，广告账户和投放域名都可能被永久封禁。行业同时存在专为广告支付设计的虚拟信用卡平台（如 Adpos.io），支持 Meta / Google / X 等平台充值。",
      source: "https://www.52by.com/article/229890",
      bizValue: "客户如果说'我有便宜渠道'，用'域名会一起被封'来劝——域名比账户贵得多，这句话最有杀伤力。",
      impact: "high"
    },
    {
      title: "线下触达窗口：白鲸出海 8/13 深圳、9/17–18 新加坡滨海湾金沙",
      date: "2026-08-13",
      summary: "白鲸出海近期两场线下活动：2026-08-13 广东深圳，2026-09-17 至 09-18 新加坡滨海湾金沙会议展览中心 4F Peony Ballroom。",
      source: "https://www.baijingapp.com/people/153505",
      bizValue: "新人最缺的就是面对面机会。深圳这场下周三，现在报名还来得及；新加坡那场提前一个月准备名单，效率会高很多。",
      impact: "mid"
    }
  ],

  smeInsight: {
    painPoints: [
      "开户即门槛：Google 已取消个人资质开 B2B 户、统一社会信用代码强制联网核验，TikTok 大陆自助开户 100% 驳回。中小团队常常卡在第一步，甚至因为借用资质被拉黑 1 年。",
      "报表和归因口径连着变：Meta 8/6 起三个 breakdown 静默返回空值、Google App Campaign 归因锚点改成安装时间。没有专职数据人的小团队根本追不上，容易把平台变更误判成投放失效。",
      "素材产能撑不住：海外微短剧月上新超 3.8 万部、全球应用发布量同比 +60%，素材迭代速度成了硬门槛。中小团队普遍是 1–2 个设计撑全渠道。",
      "有量没钱：生成式 AI 应用 2026Q1 下载量环比仅 +1% 但收入 +20%，说明拼下载已经没用了。中小 App 最典型的困境是 MAU 涨了、ARPU 不动，比如 Uknow.AI 连续多期 MAU 与流水双双疲软。"
    ],
    needs: [
      "合规开户 + 申诉通道：一代资质、多主体兼容（大陆公司/个体户/中国香港主体）、快速下户，以及出事时能真的把账户捞回来。",
      "跨平台独立归因：平台自归因只算自家的账，不会建议把预算挪走。中小客户需要一个不偏不倚的衡量体系来决定钱花在哪。",
      "增量市场的落地能力：日韩（AI 应用 Q1 增速 262% / 542%）、俄罗斯（中国厂商收入 +3.5 倍）、墨西哥（互金 2026 首选地）——需要的是本地素材 + 本地支付 + 本地渠道的一整套，不是单点买量。",
      "老用户唤醒而非只做拉新：海外买量成本持续走高，AppsFlyer 明确建议'唤醒尚未卸载的老用户'来降低增长成本。这对预算有限的中小客户尤其关键。"
    ],
    entryPoints: [
      "拿平台变更当由头：Meta 8/10 Shops 关停、8/6 报表维度关闭、Google 9/14 认证扩展——每一条都是一次'我提前提醒你'的自然触达，比冷邮件自我介绍有效得多。",
      "用同体量的真实 ROI 说话：易幻网络在俄罗斯 12 个月 ROAS 240%、Genspark 换渠道组合单季收入 +306%。跟中小客户对话时，用他们够得着的案例，而不是腾讯网易。",
      "从'诊断'而不是'报价'开场：对 MAU 涨但收入不涨的客户（Uknow.AI 型），先做一次免费的渠道与素材诊断。新人最容易赢的不是价格战，是被当成懂行的人。",
      "盯融资和扩张公告：海艺 SeaArt（7/13 超亿元 B 轮，明说要做全球化拓展）、AniShort（7/25 近亿元）、Wapoo（7/29 近千万美元天使）。刚拿到钱的公司预算窗口只有几周，速度就是优势。"
    ]
  }
};
