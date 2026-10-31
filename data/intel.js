// data/intel.js — Jill 的工作台情报数据
// 更新时间：2026-10-31T16:40:00+08:00（9:30 自动化重写）
// 数据来源：Sensor Tower / 伽马数据 / 点点数据 / DataEye / Short Drama Data / 扬帆出海 / 白鲸出海 / 手游那点事 / 虎嗅 / 广告门 / 各平台官方政策页等
// 所有数据均来自公开信息源，未编造任何数据；查不到的写「暂无公开数据」

window.INTEL = {
  updatedAt: "2026-10-31T16:40:00+08:00",

  // ============================================================
  // 一、大盘速览 marketPulse
  // ============================================================
  marketPulse: [
    {
      label: "中国游戏出海大盘",
      value: "Q3 自研游戏海外收入 57.72 亿美元，同比 +15.58%、环比 -4.46%",
      note: "伽马数据 Q3 报告：环比在下滑、同比还在涨，说明「存量产品韧性」撑着盘子，新增量要靠新品接棒。跟游戏客户聊别背这个数字，聊「你 Q4 有没有新品要买量、老产品要不要在新市场补一波」——环比下滑的时候，客户最怕的是预算花不出效果",
      source: "游戏产业报告（伽马数据 Q3，网易转载） https://m.163.com/dy/article/LA0D1P100553OKLX.html"
    },
    {
      label: "短剧出海大盘",
      value: "2026 海外微短剧市场预计破 60 亿美元（同比约 +50%），最高日消耗破 2000 万美元",
      note: "Short Drama Data 口径：盘子还在涨，但半年内 37 款 App 的 IAP 收入里 TOP10 拿走 93%，80%-90% 的项目回不了本。这句话是跟短剧客户最好的开场——「你们现在最痛的不是没钱投，是投了收不回」",
      source: "剧短短（Short Drama Data 榜单解读） https://www.jududuan.com/2026/1003/5740.shtml"
    },
    {
      label: "字节海外短剧归队 TikTok",
      value: "PineDrama 由 TikTok 独立团队运营：9 个月下载破 1 亿、DAU 约 700 万、9 月单月下载超 1200 万",
      note: "10 月 23 日界面新闻披露 PineDrama 不在红果体系、归 TikTok 业务旗下，制作方可用 TikTok 账号登录入驻；站内 MiniDramas 小程序获客效率是 App 链路的 4 倍，8 月 TikTok 短剧分账 3100 万美元、本土 AI 剧分成环比 +55%。这条对短剧客户是决策级信息：投 App 还是投站内，投放结构要重排——Jill 拿这条去聊，客户会当你是内行",
      source: "腾讯快报（星河商业观察） https://kuaibao.qq.com/s/20261026A0AV9D00"
    },
    {
      label: "AI 工具出海增量",
      value: "10/4-10/17 双周：下载增长榜前三合计增量 896 万次，2026 新品占下载榜 60%",
      note: "扬帆出海：下载增量前三来自印度/美国/越南团队（370 万 / 284 万 / 242 万），收入增长榜 Claude 领跑单期 +197 万美元；两张榜里 12 家中国团队、收入增量占 24%。结论很直白：AI 工具「拉新靠新兴市场、收钱靠欧美日韩」——这正是投放地区组合要设计的地方，也是你能给客户提的第一个建议",
      source: "扬帆出海（AI 工具出海双周榜） https://www.yfchuhai.cn/article/10229358.html"
    },
    {
      label: "AI 社交新品爆发",
      value: "9/28-10/11：AI 社交收入榜 Top30 增量约 380 万美元、前三占近 60%，下载榜新品占比超 75%",
      note: "扬帆出海：三款上线仅 2-4 个月的新品两周下载增量均超 15 万，Whispy AI 上线 4 个月两周收入 167 万美元、同期在投素材仅约 4313 组（远低于同类 6.7 万组）。含义是「产品付费设计比砸素材更决定收入」——AI 陪伴类客户如果只靠堆素材，你可以用这个案例劝他先改付费点再放大投放",
      source: "扬帆出海（AI 社交出海 Top30） https://www.toutiao.com/article/7697248474714096143/"
    },
    {
      label: "代理返点继续收紧",
      value: "Meta 2026 继续下调返点且不分直客/非直客，Google 取消所有新客返点激励",
      note: "广告门专访 GoodyAds 大海：2025 年初 Meta 已把非直客返点砍约一半、直客降约七成，返点还与代理 KPI 完成度和账户封禁率挂钩；Google 2026 年新客返点归零。对 Jill 的用法：客户再拿「别家返点高」压价时，直接把「返点已经不是变量，服务能力才是」这句话摆出来",
      source: "广告门（专访大声出海 GoodyAds） https://www.adquan.com/article/357344"
    }
  ],

  // ============================================================
  // 二、四品类榜单动态 appRankings
  // ============================================================
  appRankings: {
    game: [
      {
        name: "Gossip Harbor（浪漫餐厅）",
        publisher: "柠檬微趣",
        isChinese: true,
        markets: "美国、韩国、日本、中国台湾",
        performance: "10/19-10/24 美国 iOS 畅销榜连续 6 天前四（10/20-23 连续 4 天第 2）；10/20 登顶韩国畅销榜；日本 10/20 升至第 3",
        comment: "易点天下长期合作客户。二合品类在美日韩同时咬住头部，靠的是「剧情更新节奏 + 活动排期」而不是单纯砸钱。跟腰部休闲厂商聊时，用它当参照讲「一年 12 次版本节点怎么配投放预算」，比讲 ROI 数字更容易被听进去",
        source: "腾讯新闻 HOT周报（10/25） https://news.qq.com/rain/a/20261025A06C0W00"
      },
      {
        name: "Whiteout Survival / Kingshot / Tasty Travels",
        publisher: "点点互动（世纪华通）",
        isChinese: true,
        markets: "美国、日本、韩国、印度",
        performance: "三款产品 10/19-10/24 在美国 iOS 畅销榜同时连续 6 天前十（寒霜启示录最高第 6、Kingshot 最高第 7）；Kingshot 印度榜最高第 5；Tasty Travels 10/21-24 连续 4 天印度前十",
        comment: "易点天下长期合作客户。同一家公司三条产品线在同一个市场同时挤进前十——这是「产品矩阵覆盖不同付费层」的打法。跟只做单品的客户聊，可以直接问：你下一款是用来补哪个人群的？这个问题能立刻把对话从「投多少钱」拉到「产品结构」",
        source: "腾讯新闻 HOT周报（10/25） https://news.qq.com/rain/a/20261025A06C0W00"
      },
      {
        name: "Last Asylum: Plague",
        publisher: "三七互娱",
        isChinese: true,
        markets: "美国为主",
        performance: "10/16-10/22 出海素材投放榜第 8（3086 组素材），是少数以中重度买量进榜的 SLG 新品",
        comment: "易点天下长期合作客户。SLG 新品还能靠素材量挤进前十，说明这个品类的买量门槛没降。见策略类客户可以聊「素材工业化产能」——一个月能不能稳定出 3000 组，是能不能打的前提",
        source: "DataEye ADX 出海素材榜（10/16-10/22，游戏产业报告转载） https://m.163.com/dy/article/LA0D1P100553OKLX.html"
      },
      {
        name: "鸣潮 / 绝区零",
        publisher: "库洛游戏 / 米哈游",
        isChinese: true,
        markets: "日本、韩国、中国台湾",
        performance: "绝区零 10/21 登顶韩国 iOS 畅销榜、10/21 日本升至第 3；鸣潮 10/22 韩国升至第 2、日本 10/22 第 4",
        comment: "库洛是易点天下长期合作客户。二次元在日韩的头部位置还在互换，说明「版本更新即买量窗口」的规律没变。跟二次元中小厂聊：日韩的素材本地化（声优/剧情切片）比出价更决定 CPI",
        source: "腾讯新闻 HOT周报（10/25） https://news.qq.com/rain/a/20261025A06C0W00"
      },
      {
        name: "Lumi Master",
        publisher: "哔哩哔哩（自研自发）",
        isChinese: true,
        markets: "中国香港、中国台湾、日本（创意覆盖 42.56% / 32.43% / 15.58%）",
        performance: "9 月 iOS 端累计约 1.4 万条去重创意，9/18 公测日单日峰值近 4000 条，之后回落到 2000-3000 条",
        comment: "母大子小样本：B 站自研自发、海外盘子独立跑。它的投放节奏很值得抄——公测日冲峰值、之后按周回落，而不是全程匀速。跟准备出海首发的客户聊，就拿这条讲「公测日素材要一次性压上去」",
        source: "出海前线（SocialPeta 9 月手游创意报告） http://mp.weixin.qq.com/s?__biz=MzU1NTYzNjY4NQ==&mid=2247484338&idx=1&sn=4ff572b3836880f8182cd885f0b87eeb"
      },
      {
        name: "闪耀吧！噜咪",
        publisher: "哔哩哔哩（自研自发）",
        isChinese: true,
        markets: "东南亚、港澳台（上线 167 个市场）",
        performance: "9/17 全球上线，截至 10/23 双平台收入约 5906 万元、下载约 130 万；单日最高投放超 3000 组素材",
        comment: "治愈捉宠这个切口避开红海，但依然靠高素材量起量。跟中小研发聊「差异化题材 + 高素材密度」这个组合——题材决定 CPI 下限，素材密度决定能不能吃到量",
        source: "网易（DataEye 研究院） https://www.163.com/dy/article/LA7V8R4V0553OKLX.html"
      },
      {
        name: "Plants on Fire: Attack & Defend",
        publisher: "朝夕光年发行 / 上海身梦科技研发",
        isChinese: true,
        tier: "sme",
        markets: "下载在巴西(18.34%)/印尼(15.92%)/泰国(9.47%)，收入在美国(19.98%)/韩国(15.57%)/中国台湾(12.01%)",
        performance: "9 月下载 111.1 万、流水 169.2 万美元（环比 +293%，首次破百万）；累计下载约 310 万、总流水约 380 万美元；7 月初-9 月底 3872 支去重素材、约 8853 个广告计划、覆盖 45 个市场",
        comment: "中小团队的教科书案例：研发方身梦科技 2023 年才成立，2-5 月月流水只有 2-4 万美元，8 月底全球上线后靠「下载买新兴市场、收入收欧美东亚」把钱赚回来了。跟中小研发聊投放，最有用的一句是：先想清楚钱从哪个市场来，再决定素材铺在哪",
        source: "点点数据 https://www.diandian.com/news/HgufpeHEN91nQcAfQQUQ"
      },
      {
        name: "Wild Water World（疯狂水世界海外版）",
        publisher: "益世界",
        isChinese: true,
        tier: "sme",
        markets: "中国台湾、中国澳门、韩国、日本（美国创意占比仅 9.54%）",
        performance: "9/1 全球上线后持续加投，日活在投素材多在 1500-2300 条，9/20 前后约 2600 条、月底冲近 2800 条",
        comment: "中小/腰部样本：一款国内已经跑通的休闲产品，海外把预算几乎全压在港澳台日韩，而不是跟风打美国。跟客户聊「市场优先级」时这条很好用——同一个产品，选错首发市场等于白烧一轮测试费",
        source: "出海前线（SocialPeta 9 月手游创意报告） http://mp.weixin.qq.com/s?__biz=MzU1NTYzNjY4NQ==&mid=2247484338&idx=1&sn=4ff572b3836880f8182cd885f0b87eeb"
      },
      {
        name: "Block Blast!",
        publisher: "Hungry Studio",
        isChinese: true,
        tier: "sme",
        markets: "全球（欧美为收入主力）",
        performance: "10/16-10/22 出海素材投放榜第 1（9395 组素材），素材量约为第 2 名的 2.2 倍",
        comment: "休闲小游戏把素材当日常消耗品，一天几千组的产能是它的护城河。跟休闲/小游戏客户聊，第一个问题就问「你现在日产素材多少组」——产能不到 500 组/天的团队，谈 ROI 都是空话",
        source: "DataEye ADX 出海素材榜（10/16-10/22） https://m.163.com/dy/article/LA0D1P100553OKLX.html"
      },
      {
        name: "Top Tycoon",
        publisher: "途游游戏 / Tuyoo Games",
        isChinese: true,
        markets: "印度（多次进入 iOS 畅销榜第 9）",
        performance: "10/19-10/24 印度 iOS 畅销榜多次位列第 9，是当周印度榜上少数稳定在前的国产策略/休闲产品",
        comment: "印度是个被低估的市场：付费能力弱但量便宜，适合做「低成本测玩法」。跟休闲厂商聊印度时，重点不是 CPI 而是「留存能不能撑住低 ARPU」，这条决定了要不要给印度单独配素材",
        source: "腾讯新闻 HOT周报（10/25） https://news.qq.com/rain/a/20261025A06C0W00"
      }
    ],

    finance: [
      {
        name: "DiDi Finanzas",
        publisher: "滴滴（DiDi Fintech）",
        isChinese: true,
        markets: "墨西哥、拉美",
        performance: "2026 Q3 墨西哥现金贷赛道保持领先；截至 2025 年末已有超 2500 万拉美人使用滴滴数字金融服务，信贷业务跻身墨西哥金融科技第一梯队",
        comment: "母大子小的典型：母公司是出行巨头，金融子品牌在拉美独立跑量。这类客户的决策链和预算往往跟母公司分开，是最好切的对象。开口聊「出行场景数据 + 信贷获客」的组合效率",
        source: "搜狐（2026Q3 墨西哥现金贷市场） https://www.sohu.com/a/1093225997_121846689 ；腾讯新闻（未央网） https://news.qq.com/rain/a/20261026A0CHV200"
      },
      {
        name: "Aplazo",
        publisher: "Aplazo（墨西哥 BNPL）",
        isChinese: false,
        markets: "墨西哥",
        performance: "2026 Q3 在墨西哥现金贷/消费金融 App 中加快扩张，排名上行",
        comment: "非中资，但是拉美 BNPL 的标杆。看它的意义在于：拉美本地玩家正在抢同一批流量，中资现金贷客户在墨西哥的 CPI 压力就来自这里。跟金融客户聊「本地竞品在抢什么量」比聊政策更能建立信任",
        source: "搜狐（2026Q3 墨西哥现金贷市场） https://www.sohu.com/a/1093225997_121846689"
      },
      {
        name: "PréstamoClaro",
        publisher: "PréstamoClaro（墨西哥）",
        isChinese: false,
        tier: "sme",
        markets: "墨西哥",
        performance: "2026 Q3 腰部应用排名上升，是当季少数逆势上行的中小平台",
        comment: "腰部平台能在下载量整体回升（Q3 环比 +10.25%）时排名上行，靠的是获客结构而不是预算规模。跟中资中小现金贷客户聊：预算不如头部时，先改渠道组合再谈放量",
        source: "搜狐（2026Q3 墨西哥现金贷市场） https://www.sohu.com/a/1093225997_121846689"
      },
      {
        name: "Nexu",
        publisher: "Nexu（墨西哥车贷/消费金融）",
        isChinese: false,
        tier: "sme",
        markets: "墨西哥",
        performance: "2026 Q3 获得银行授信额度，并通过经销商渠道获客 + AI 辅助风控提升审批效率",
        comment: "它的打法是「线下场景 + 数字化流程」，说明拉美金融获客不只在线上买量。跟现金贷客户聊线上线下一体化归因——这是很多团队的空白点，也是最容易做出差异化服务的地方",
        source: "搜狐（2026Q3 墨西哥现金贷市场） https://www.sohu.com/a/1093225997_121846689"
      },
      {
        name: "Aviva",
        publisher: "Aviva（墨西哥）",
        isChinese: false,
        markets: "墨西哥",
        performance: "2026 Q3 拓展线下获客网络，在应用商店治理趋严的背景下绕开纯线上流量依赖",
        comment: "为什么值得看：Q3 有头部 App 被下架（MexDin），纯 App 获客的合规风险在放大。跟金融客户聊「多渠道备胎」这件事，是当下最能体现你专业度的角度",
        source: "搜狐（2026Q3 墨西哥现金贷市场） https://www.sohu.com/a/1093225997_121846689"
      },
      {
        name: "MexDin",
        publisher: "MexDin（墨西哥）",
        isChinese: false,
        tier: "sme",
        markets: "墨西哥",
        performance: "2026 Q3 出现在应用商店下架名单中；同期墨西哥现金贷 App 下载量环比 +10.25%",
        comment: "反面案例，但对 Jill 极有用：金融类 App 被下架=投放链路直接断。见金融客户别只聊怎么起量，先聊「你的上架主体和素材合规能不能扛住抽查」，这句话能立刻把你和只会报价的代理区分开",
        source: "搜狐（2026Q3 墨西哥现金贷市场） https://www.sohu.com/a/1093225997_121846689"
      },
      {
        name: "AdaKami",
        publisher: "信也科技（FinVolution）",
        isChinese: true,
        markets: "印尼",
        performance: "印尼 KPPU 今年 3 月对 97 家在线借贷平台罚款约 4700 万美元，AdaKami 为被点名平台之一（据 21 世纪经济报道，九成受罚平台为中资背景）",
        comment: "信也的海外营收到 2026 年已占近 20%、新增交易用户连续多季超国内——印尼是它的现金牛，也是监管风暴眼。跟这类客户聊，别聊怎么放大，聊「怎么在合规边界内保住量」，这才是他现在最想听的",
        source: "微信公众号「ADX海外投放」（引 21 世纪经济报道） http://mp.weixin.qq.com/s?__biz=MzY4NDM2MzU2OA==&mid=2247484115&idx=1&sn=944d0791d23eb7dfe92e45dea60f2460"
      },
      {
        name: "Easycash",
        publisher: "洋钱罐（Yangqianguan）",
        isChinese: true,
        markets: "印尼",
        performance: "同为印尼 KPPU 3 月 97 家受罚平台中被点名的中资平台之一",
        comment: "中资现金贷在印尼的合规成本已经明牌。Jill 可以用这条做「风险预警式触达」：把印尼/菲律宾/墨西哥三地的利率与资质新规整理成一页纸发过去，比任何 cold call 都有用",
        source: "微信公众号「ADX海外投放」（引 21 世纪经济报道） http://mp.weixin.qq.com/s?__biz=MzY4NDM2MzU2OA==&mid=2247484115&idx=1&sn=944d0791d23eb7dfe92e45dea60f2460"
      }
    ],

    ai: [
      {
        name: "SeaHaze",
        publisher: "海艺互娱（SeaArt AI，成都）",
        isChinese: true,
        markets: "美国、欧洲、中东（9/27 曾进美国 Google Play 社交榜第 9）",
        performance: "2026/3/24 上线，周期内下载约 19.9 万、收入约 32.0 万美元；下载增量约 10.7 万、收入增量约 25.1 万；同期在投素材约 1.5 万组（是同门 Sea Soul 的近 3 倍）",
        comment: "中国团队做 AI 角色社区里跑得最实的一个：靠「角色可创建 + 多模态故事」把素材可视化程度拉满。跟 AI 陪伴/角色类客户聊，重点讲「哪些功能天生适合做素材」——这决定了你的素材产能上限",
        source: "扬帆出海（AI 社交出海 Top30） https://www.toutiao.com/article/7697248474714096143/"
      },
      {
        name: "Sea Soul",
        publisher: "海艺互娱（SeaArt AI，成都）",
        isChinese: true,
        markets: "全球",
        performance: "2026 年 3 月上线，是海艺最早的 AI 聊天产品；同期在投素材约 4582 组，投放强度明显低于同门 SeaHaze",
        comment: "同一家公司两款产品，资源明显向新品倾斜——这是中国 AI 团队的标准做法：老品维持、新品压量。跟有多产品线的 AI 客户聊，就问「你下一个主推是哪个」，预算会跟着这个问题走",
        source: "扬帆出海（AI 社交出海 Top30） https://www.toutiao.com/article/7697248474714096143/"
      },
      {
        name: "Whispy AI: Cozy Chat",
        publisher: "NEXBASE TECH PTE. LTD.（新加坡注册，团队背景暂无公开数据）",
        isChinese: false,
        tier: "sme",
        markets: "美国、英国、加拿大、德国、法国",
        performance: "2026 年 6 月上线，周期内收入约 167.0 万美元、收入增量约 58.3 万，进全球收入增长榜前三；同期在投素材仅约 4313 组；英国娱乐畅销榜最高第 12",
        comment: "最值得抄的不是它的素材，是它的付费结构（Gems 代币消耗 + 关键节点内购）。跟国内 AI 陪伴客户聊：素材只有 4000 组还能做到 167 万美元/两周，说明「付费点设计」比「素材量」更决定收入天花板",
        source: "扬帆出海（AI 社交出海 Top30） https://www.toutiao.com/article/7697248474714096143/ ；AppBrain http://cs.appbrain.com/appstore/whispy-ai-cozy-chat/ios-6770413766"
      },
      {
        name: "CHAI",
        publisher: "Chai Research（美国）",
        isChinese: false,
        markets: "美国、加拿大、英国",
        performance: "9/28-10/11 收入增量约 91.2 万美元、周期收入 219.7 万美元；同期在投素材约 5339 组",
        comment: "老牌 AI 角色聊天，靠 UGC 角色生态 + 订阅续费，买量只做「品牌维护」。这条对 Jill 的意义：海外本土竞品的投放逻辑是「重留存、轻拉新」，中国团队恰恰相反——你可以把「拉新效率」做成自己的卖点",
        source: "扬帆出海（AI 社交出海 Top30） https://www.toutiao.com/article/7697248474714096143/"
      },
      {
        name: "Tipsy Chat",
        publisher: "Tipsy Chat（中国团队/海外主体）",
        isChinese: true,
        markets: "欧洲、拉美、印度",
        performance: "9/28-10/11 欧洲收入增长榜表现突出、两周下载量 136 万（环比 +近 10 万）；拉美收入增量 1.09 万美元、周期累计 11.21 万美元",
        comment: "欧洲拉下载、拉美收钱的组合，跟《Plants on Fire》是同一套逻辑。跟客户聊「下载国家 ≠ 收入国家」，用它的数据当例子最有说服力——很多团队就是在这里把预算打偏的",
        source: "扬帆出海（AI 社交出海 Top30） https://www.toutiao.com/article/7697248474714096143/"
      },
      {
        name: "Pexo（极致上下文）",
        publisher: "北京极致上下文科技有限公司",
        isChinese: true,
        tier: "sme",
        markets: "80+ 国家和地区，约 80% 流量来自英美澳加",
        performance: "2026/7 开放注册，10 月宣布完成超千万美元天使轮；近百万注册用户、ARR 破百万美元、付费复购率超 50%、单用户单月最高付费超 3000 美元；登顶 Product Hunt 日榜",
        comment: "视频 Agent 里增长最猛的中国团队之一（创始人廖谦，前 Vidu 产品负责人、剪映/CapCut Pippit）。它的用户是「要持续做产品广告/发布视频的团队」——这类客户天生有稳定的投放预算。列进线索池，切入点就是「帮你把内容产能转成投放效率」",
        source: "腾讯新闻（科创板日报） https://news.qq.com/rain/a/20261020A0A7XJ00 ；产品官网 https://pexo.ai/"
      },
      {
        name: "AI House Design & Remodel",
        publisher: "Media Zclouds（中国团队）",
        isChinese: true,
        tier: "sme",
        markets: "美国、西班牙、意大利",
        performance: "2026/8/6 上线，96% 下载发生在统计周期内；同期近万条素材主投美西意；付费按 9.99 美元/项 + IAA 混合变现",
        comment: "「低频高客单 + 单次付费」的 AI 工具典型，而且它用近万条素材强行把一次性需求做成了流量生意。跟 AI 工具客户聊：低频产品能不能买量，取决于你素材里卖的是「功能」还是「结果」",
        source: "扬帆出海（AI 工具出海双周榜） https://www.yfchuhai.cn/article/10229358.html"
      },
      {
        name: "Claude",
        publisher: "Anthropic（美国）",
        isChinese: false,
        markets: "北美、日韩、欧洲",
        performance: "10/4-10/17 收入增长榜第 1，单期收入增量 197 万美元",
        comment: "收入榜第一还是通用助手类，说明 AI 工具的钱仍在「对话与办公」这一层。跟做垂直 AI 应用的客户聊定位：你是要抢通用助手的活，还是做它做不了的那一段",
        source: "扬帆出海（AI 工具出海双周榜） https://www.yfchuhai.cn/article/10229358.html"
      },
      {
        name: "Mochii AI / Aarohi / Amora",
        publisher: "越南 / 印度团队",
        isChinese: false,
        markets: "土耳其、德国、意大利、印度、墨西哥、中东",
        performance: "9/28-10/11 下载增长榜前三，两周新增下载均超 15 万；三款均在投素材仅约 2375/3186/2671 组",
        comment: "三款上线 2-4 个月的新品，用 2000-3000 组素材就做到 15 万+ 新增——低成本快速试错的样板。跟预算有限的中小客户聊：先跑「素材-市场」小矩阵，跑通了再谈放量，别一上来就定大预算",
        source: "扬帆出海（AI 社交出海 Top30） https://www.toutiao.com/article/7697248474714096143/"
      },
      {
        name: "PolyBuzz",
        publisher: "作业帮",
        isChinese: true,
        markets: "美国、欧洲、东南亚",
        performance: "9/28-10/11 AI 社交榜收入增长第 2，同期在投素材约 6.7 万组，是全榜素材量最大的产品之一",
        comment: "中国团队在 AI 社交里「堆素材」路线的极端样本：6.7 万组素材换收入增长第 2。跟客户聊时可以做个对照——它靠量、Whispy 靠付费设计，两条路都能走通，但团队能力要求完全不同",
        source: "扬帆出海（AI 社交出海 Top30） https://www.toutiao.com/article/7697248474714096143/"
      },
      {
        name: "Meki",
        publisher: "新加坡注册团队（背景暂无公开数据）",
        isChinese: false,
        markets: "日本、韩国、菲律宾、美国",
        performance: "2026/6/29 上线，9/28-10/11 在日韩下载与收入增长榜双榜首；两周下载 +5.8 万、收入 +3.9 万美元；10/7 进日本 Google Play 社交榜第 8；同期在投素材约 3606 组",
        comment: "把日本「推し（本命角色）」文化直接做成产品语境，素材天然好剪。做日韩市场的客户最该学这一招：不是翻译界面，是借用当地人已有的情感结构",
        source: "扬帆出海（AI 社交出海 Top30） https://www.toutiao.com/article/7697248474714096143/"
      }
    ],

    education: [
      {
        name: "Gauth",
        publisher: "字节跳动",
        isChinese: true,
        markets: "美国贡献九成以上收入",
        performance: "截至 2026 年 9 月全球安装超 2 亿次、月活 5341 万；2025 年 9 月全球月流水 122 万美元；8 月上线 AI Course 功能",
        comment: "易点天下长期合作客户（字节体系）。教育出海的天花板样本：一个市场吃九成收入，说明「单市场深挖」比「广撒网」更赚钱。跟教育客户聊市场选择时，这是最硬的参照",
        source: "虎嗅（钛媒体） https://www.huxiu.com/article/4897260.html"
      },
      {
        name: "Question.AI",
        publisher: "作业帮",
        isChinese: true,
        markets: "北美、东南亚",
        performance: "长期稳居北美 iOS 教育榜前五，2024 年 4 月曾登顶美国 App Store 教育类",
        comment: "搜题赛道北美双雄之一。它的模式是「免费搜题引流 + 订阅变现」——跟教育客户聊付费墙位置（第几道题开始收费）比聊 CPI 更能提升 LTV",
        source: "虎嗅（钛媒体） https://www.huxiu.com/article/4897260.html"
      },
      {
        name: "Uknow.AI",
        publisher: "猿辅导",
        isChinese: true,
        markets: "越南（活跃度第一）、日本、印尼、马来西亚",
        performance: "在越南同类应用用户活跃度排名第一，已覆盖越南、日本、印尼、马来西亚四国",
        comment: "教育出海往东南亚走的最成功案例之一。越南先赢、再复制到日印马——这条「单点打透再横向复制」的路径，可以当作跟中小教育团队聊扩张节奏的模板",
        source: "虎嗅（钛媒体） https://www.huxiu.com/article/4897260.html"
      },
      {
        name: "QANDA",
        publisher: "Mathpresso（韩国）",
        isChinese: false,
        markets: "韩国、日本、东南亚",
        performance: "深度嵌入韩国私教育市场，年营收约 1.4 亿元人民币",
        comment: "非中资，但它是中国教育出海在东亚最强的对手。看它的意义：韩国市场被本土产品锁死，中国团队要进就得换切口（Gauth 走的是全球英文题）。跟客户聊区域优先级时用得上",
        source: "虎嗅（钛媒体） https://www.huxiu.com/article/4897260.html"
      },
      {
        name: "Santa（TOEIC/TOEFL 备考）",
        publisher: "韩国团队（获 ETS 官方内容授权）",
        isChinese: false,
        tier: "sme",
        markets: "日本（托福市场约 45% 份额）",
        performance: "2026 上半年在日本销售额同比增长 86%，靠 ETS 官方授权 6 个月内占据日本托福市场约 45%",
        comment: "中小团队靠「官方授权」一个壁垒吃透日本单一市场。跟教育客户聊：资质/授权这类东西，比投放技巧更能决定你能不能进某个市场——你能帮他对接的不只是流量，还有本地合规资源",
        source: "虎嗅（钛媒体） https://www.huxiu.com/article/4897260.html"
      },
      {
        name: "Qubena",
        publisher: "COMPASS（日本）",
        isChinese: false,
        markets: "日本公立学校（B2G）",
        performance: "通过地方政府采购进入公立学校，按每生每年 7200 日元收费",
        comment: "B2G 路线绕开 C 端红海。对中国教育客户的启发：海外不只 C 端买量，学校/机构采购是另一条腿。你能提供的价值是「C 端买量 + B 端线索」两条链路一起做",
        source: "虎嗅（钛媒体） https://www.huxiu.com/article/4897260.html"
      },
      {
        name: "AvoLingo",
        publisher: "韩国团队",
        isChinese: false,
        tier: "sme",
        markets: "韩国、土耳其、德国、马来西亚",
        performance: "用 AI 代理帮教育机构备课，称备课时间缩短 90%，已拓展至土耳其、德国、马来西亚",
        comment: "B2B2C 路线：卖机构而不是卖家长。这类客户预算稳定、决策慢但复购强。跟 AI 教育客户聊「先 B 后 C」的现金流结构，是很容易聊出共鸣的角度",
        source: "虎嗅（钛媒体） https://www.huxiu.com/article/4897260.html"
      },
      {
        name: "Speaker（成人英语）",
        publisher: "韩国团队（Accel 投资）",
        isChinese: false,
        markets: "韩国",
        performance: "2024 年下半年上线，获 Accel 7800 万美元融资，一年多登上韩国英语在线教育市场第一",
        comment: "资本 + 单一市场速胜的样本。跟国内教育客户聊融资后的预算节奏：融资到账后的 6 个月是抢量窗口，错过就要用两倍成本补",
        source: "虎嗅（钛媒体） https://www.huxiu.com/article/4897260.html"
      },
      {
        name: "Astra AI: Study & Exam Prep",
        publisher: "Astra AI d.o.o.（斯洛文尼亚）",
        isChinese: false,
        tier: "sme",
        markets: "韩国、印尼、意大利、德国（韩国教育免费榜第 2）",
        performance: "2026 年 10 月估算日下载 10 万+、累计安装 1000 万+；覆盖 10 个国家榜单，付费广告仅占下载来源约 4%（自然搜索 54%）",
        comment: "一个新参考系：自然搜索占 54%、付费只占 4% 就能起量——说明 ASO + 品牌词在部分市场还没被卷死。跟预算有限的教育客户聊「先做自然流量再谈买量」，这条数据比任何建议都硬",
        source: "AppInsider（2026 年 10 月） https://appinsider.io/app/astra-ai-study-exam-prep-6751030141"
      }
    ]
  },

  // ============================================================
  // 三、行业热点 hotEvents
  // ============================================================
  hotEvents: [
    {
      title: "【明天生效】泰国线上广告 KYC：11/1 起「无身份验证不得投放」",
      date: "2026-11-01",
      summary: "泰国电子交易委员会规定，所有向泰国用户投放广告的境内外主体（含代投方、MCN/KOL）须在投放前完成身份验证；平台需留存广告主与付款人资质至少 90 天。Meta 已向泰方确认 11/1 起合规，LINE 书面确认；TikTok、Google 在 10/22 议会审查会上未给出保证。",
      bizValue: "这是本周最该发的一条。手上任何有泰国盘的客户（游戏/短剧/电商/金融），今天就要提醒：法人资质文件、代投授权、付款方一致性三样东西先备好，否则 11 月直接断投。你能提前一天提醒，就是专业度。",
      source: "白鲸出海 https://www.baijing.cn/article/57181 ；Nation Thailand https://www.nationthailand.com/business/automobile/40072676"
    },
    {
      title: "红果 11/1 起停新用户金币、12/31 全面下线金币功能",
      date: "2026-10-21",
      summary: "红果 10/21 公告：11 月 1 日起不再向新用户提供金币功能，12 月 31 日前全面下线。此前已有承制方反映保底机制取消、万次播放收益从百元左右跌到 5-10 元。",
      bizValue: "国内短剧的补贴红利在退，制作方只能往海外找增量——这就是你这两周最好的短剧客户来源。触达话术：「红果那边保底收了，你海外这块打算怎么起？」",
      source: "腾讯快报（星河商业观察） https://kuaibao.qq.com/s/20261026A0AV9D00"
    },
    {
      title: "PineDrama 归 TikTok 独立团队运营，站内 MiniDramas 获客效率是 App 链路 4 倍",
      date: "2026-10-23",
      summary: "界面新闻独家：字节海外短剧平台 PineDrama 不在红果体系、归 TikTok 业务旗下，制作方可用 TikTok 账号登录入驻。官方称通过站内小程序上架的短剧，用户获取效率是 App 链路的 4 倍，覆盖北美/澳洲/日韩/拉美/东南亚。",
      tag: "cooperation",
      bizValue: "短剧客户的投放结构要重排了：App 买量 vs 站内小程序，单位获客成本差 4 倍。你能提供的是「两条链路怎么分预算」的方案，而不是单纯报价——这是从供应商升级成顾问的机会。",
      source: "腾讯快报（星河商业观察） https://kuaibao.qq.com/s/20261026A0AV9D00"
    },
    {
      title: "TikTok 短剧 8 月分账 3100 万美元创高，本土 AI 剧分成环比 +55%",
      date: "2026-10-26",
      summary: "TikTok 官方分账数据：短剧单月分账从 1 月 700 万美元涨到 7 月 2900 万、8 月破 3100 万，上半年累计 8200 万美元；其中本土剧单月超 2400 万，本土 AI 剧分成环比 +55%，当月超 270 家版权方收入翻倍。",
      tag: "cooperation",
      bizValue: "钱确实在往站内流。跟短剧/AI 剧客户聊「本土剧 vs 译制剧」的分账差，客户会主动问你站内怎么起量——这就是合作入口。",
      source: "腾讯快报（星河商业观察） https://kuaibao.qq.com/s/20261026A0AV9D00"
    },
    {
      title: "新加坡 IMDA 与 TikTok 联合启动微短剧计划",
      date: "2026-10-01",
      summary: "首期面向 20 家认证媒体公司，用 6-9 个月培养 50-100 集竖屏微短剧，分真人与 AI 动画两条赛道。双方援引 Owl&Co. 数据：2026 年全球微短剧及竖屏内容市场收入预计约 1500 亿美元。",
      tag: "cooperation",
      bizValue: "政府背书的产能计划 = 一批新内容公司要开始买量。这类项目里往往有当地媒体/制作公司需要投放支持，是 Jill 接触「非典型客户」的入口，也适合作为跟新加坡/东南亚客户的开场谈资。",
      source: "腾讯快报（星河商业观察） https://kuaibao.qq.com/s/20261026A0AV9D00"
    },
    {
      title: "Meta 广告条款生效日推迟到 11/20，产品浏览 10/28 起对存量广告默认开启",
      date: "2026-10-23",
      summary: "Meta 10/23 确认把新版商业条款与自助广告条款生效日从 10/30 推迟至 11/20；条款把产品目录条款并入商业条款、广告创意生成式 AI 条款并入自助广告条款，并新增「AI 功能出错由广告主全责」；另 10/28 起站内产品浏览对存量广告默认开启（需主动关闭）。",
      bizValue: "客户如果还在用「AI 生成的素材被拒了怪平台」这套逻辑，11/20 之后站不住脚了——责任明确归广告主。你可以顺势推「素材合规预审」这个服务点，是很好的一次增值销售。",
      source: "Seller Splash（引 Meta Business Help Center） https://sellersplash.com/blog/meta-ad-terms-update"
    },
    {
      title: "Google 11/16 起取消客户数据强制 SHA-256 哈希",
      date: "2026-11-16",
      summary: "Google Ads Data Manager 自 11/16 起接受加密列表，在可信执行环境（TEE）内解密、归一化并匹配，不再要求广告主预先做 SHA-256 哈希与 E.164 电话格式化；覆盖 Customer Match 与增强型转化。",
      bizValue: "对金融、教育这类靠 CRM 名单做再营销的客户是实打实的利好——匹配率会上去。主动告诉客户「不用再折腾哈希了，但你的隐私政策要更新」，一句话就能体现你在跟政策。",
      source: "PALAI MEDIA（引 ppc.land） https://palai.media/en/news/google-ads-drops-mandatory-customer-data-hashing"
    },
    {
      title: "Pexo（极致上下文）完成超千万美元天使轮，ARR 破百万美元",
      date: "2026-10-20",
      summary: "视频 Agent Pexo 完成超千万美元天使轮，达泰资本、松禾创投、视觉中国、深圳天使母基金等参投；7 月上线以来覆盖 80 多个国家、近百万注册用户、ARR 超百万美元，约 80% 流量来自英美澳加，付费复购率超 50%。",
      tag: "emerging",
      bizValue: "刚融资、ARR 刚破百万、用户全在欧美——这是「有钱 + 有增长 + 需要买量」三件事同时成立的客户画像，最该在这周触达。切入点不是「帮你投广告」，是「帮你把 80% 欧美流量再放大一层」。",
      source: "腾讯新闻（科创板日报） https://news.qq.com/rain/a/20261020A0A7XJ00"
    },
    {
      title: "攀峰智能完成数千万元天使+轮，三个月做成 TikTok 金牌服务商",
      date: "2026-10-26",
      summary: "杭州攀峰智能（K2Lab）完成数千万元天使+轮，凯泰资本投资；创始人王铭为前钉钉副总裁。旗下 Moras 公测首季协助达人 GMV 破 1000 万美元、累计注册达人近 10 万，三个月跃升 TikTok 金牌服务商，已合作超 1100 家商家。",
      tag: "emerging",
      bizValue: "做 TikTok 达人带货 Agent 的新公司，自己就是重度投放/流量玩家，而且刚拿钱要扩海外。这类客户对「投放效率」的理解比一般客户深，聊起来可以直接进技术细节——但要注意它本身也是服务商，可能是竞合关系。",
      source: "网易（科创板日报） https://www.163.com/dy/article/LA6RS51J0550B1DU.html"
    },
    {
      title: "深度云海完成千万级天使轮，华工科技领投 GEO 赛道",
      date: "2026-10-13",
      summary: "深度云海智能科技（上海）完成千万级天使轮，A 股上市公司华工科技领投；资金用于自研技术底座迭代、海外市场拓展、DeepWork 智能营销工作台升级。公司主攻 GEO（生成式引擎优化）。",
      bizValue: "GEO 是今年新冒出来的预算科目，多数出海客户的「AI 搜索可见度」还没人管。这家刚拿钱要出海——既是潜在客户（自己要投放），也可能是渠道伙伴（它能给客户做 AI 搜索侧的活）。两种关系都值得见一面。",
      source: "今日头条（环球网） https://m.toutiao.com/article/7696351299859710483"
    },
    {
      title: "超级球球「丑小鸭 AI 双语启蒙机器人」上线京东众筹，已亮相 IFA/GITEX",
      date: "2026-10-16",
      summary: "超级球球 10/16 在京东开启「丑小鸭 AI 双语启蒙机器人」独家众筹；此前 8/28 在丹麦王国驻上海总领馆全球首发安徒生系列，并先后亮相德国柏林 IFA、土耳其 GITEX，获 BBC 等海外媒体报道；团队表示将拓展欧洲、北美、日本市场。",
      tag: "emerging",
      bizValue: "硬件 + IP + AI 的儿童教育出海样本，海外渠道已经在铺。硬件类客户的特点是「上市即需要一波集中曝光」，而且他们最缺海外电商与社媒投放经验——这是很好切的空档。",
      source: "中华网数智频道 https://m.ai5g.china.com/ai/13004878/20261026/1020261904.html"
    },
    {
      title: "上海身梦科技《Plants on Fire》9 月流水 169 万美元，环比 +293%",
      date: "2026-10-26",
      summary: "朝夕光年发行、身梦科技研发的植物题材塔防 8 月底全球上线，9 月下载 111.1 万、流水 169.2 万美元（环比 +293%，首次破百万）；累计下载约 310 万、总流水约 380 万美元。7 月初-9 月底投放 3872 支素材、约 8853 个计划、覆盖 45 个市场。",
      tag: "high-growth",
      bizValue: "2023 年才成立的小研发，用三个月把月流水从 2 万美元做到 169 万美元。这类「刚跑通模型、下一款要放大」的团队最需要投放伙伴，也最容易谈成长期合作——因为它已经验证过自己能回本。",
      source: "点点数据 https://www.diandian.com/news/HgufpeHEN91nQcAfQQUQ"
    },
    {
      title: "猩球游戏入驻广州建发行分部，首款自研自发《弹壳战机》首月 IAP 破百万美元",
      date: "2026-10-24",
      summary: "《弹壳特攻队》《弓箭传说》研发商猩球游戏入驻广州天河，新设团队聚焦发行与买量增长，首批岗位直指买量素材设计；9 月首款自研自发《弹壳战机》上线，首月 IAP 估算破百万美元，两款老产品累计流水超 60 亿元。",
      tag: "emerging",
      bizValue: "这是本周最「可切」的一条：正在自建发行与买量团队、正在招素材设计——说明它要么在找外部代理补产能，要么在比价。现在就去，时间点最好。",
      source: "网易（游戏新知，游戏产业报告周报转载） https://m.163.com/dy/article/LA0D1P100553OKLX.html"
    },
    {
      title: "AI 工具出海：2026 新品占下载增长榜 60%，合计贡献 1780 万次增量",
      date: "2026-10-23",
      summary: "扬帆出海 10/4-10/17 双周榜：下载增长榜 Top50 中 2026 新品占 60%，贡献 1780 万次下载增量（占全榜 55.7%）；但收入增长榜新品仅占 30%、贡献 13.1% 增量——供给速度远快于变现速度。",
      tag: "high-growth",
      bizValue: "「新品拉新快、变现慢」意味着这批团队拿到融资后的第一笔钱大概率花在投放上。给 AI 工具客户的话术：先别急着追 DAU，先把付费墙和投放地区配平——你帮他算这笔账，就是顾问不是代理。",
      source: "扬帆出海（AI 工具出海双周榜） https://www.yfchuhai.cn/article/10229358.html"
    },
    {
      title: "AI 社交：上线 2-4 个月新品两周下载破 15 万，下载红利仍在下沉市场",
      date: "2026-10-17",
      summary: "扬帆出海 9/28-10/11 榜：下载增长前三（Mochii AI、Aarohi、Amora）均为上线 2-4 个月新品，两周下载增量均超 15 万；在投素材仅 2000-3000 组。下载增量主要由土耳其、印度、墨西哥等高人口低成本市场驱动。",
      tag: "high-growth",
      bizValue: "AI 陪伴赛道的窗口还在，而且入场成本不高（2000-3000 组素材就能试）。你在跟新团队聊时可以直说：这个品类现在是「小预算能试错」的阶段，越晚进 CPI 越贵。",
      source: "扬帆出海（AI 社交出海 Top30） https://www.toutiao.com/article/7697248474714096143/"
    },
    {
      title: "印尼 KPPU 重罚 97 家在线借贷平台 4700 万美元，九成中资背景",
      date: "2026-10-15",
      summary: "印尼监管机构 KPPU 今年 3 月对 97 家在线借贷平台作出重罚裁决，总额约 4700 万美元，其中约九成为中资背景平台（含信也旗下 AdaKami、洋钱罐旗下 Easycash 等）。",
      bizValue: "金融客户最怕的就是这个。跟现金贷客户开场别聊量，先聊「你的印尼主体和牌照经不经得起查」——合规话题能立刻建立信任，也自然带出你对当地投放规则的熟悉度。",
      source: "微信公众号「ADX海外投放」 http://mp.weixin.qq.com/s?__biz=MzY4NDM2MzU2OA==&mid=2247484115&idx=1&sn=944d0791d23eb7dfe92e45dea60f2460"
    },
    {
      title: "印尼/菲律宾利率红线再收紧：印尼日利率降至 0.1%、菲律宾月利率压至 12%",
      date: "2026-10-20",
      summary: "机构研报汇总：印尼 OJK 日利率阶梯式下调至 0.1%、实缴资本要求提至 250 亿印尼盾；菲律宾 SEC 月利率上限压至 12%、资本金要求提高约 10 倍。行业从「红利期」进入「合规精耕期」。",
      bizValue: "利率被压 = 单位用户利润变薄 = 更依赖精准获客和复贷。这对你是好事：客户不能再靠粗放买量赚钱，只能买「效率」。聊的时候把话题从 CPI 引到「首逾率 / 复贷率」上，你就赢了。",
      source: "三个皮匠报告（海外现金贷机构研判汇总） https://www.sgpjbg.com/labelsyh/haiwaixianjindaiyanbao/2/7075178.html"
    },
    {
      title: "墨西哥 Q3 现金贷下载环比 +10.25%，头部 App 被下架、腰部反升",
      date: "2026-10-20",
      summary: "2026 Q3 墨西哥现金贷 App 下载量环比 +10.25%；DiDi Finanzas 保持领先、Aplazo 加快扩张、PréstamoClaro 等腰部上行；MexDin 等榜单头部应用出现在下架名单，导流工具与马甲包清理影响部分平台获客。",
      bizValue: "拉美是金融出海今年的主战场，但「上架稳定性」正在变成核心能力。你能提供的差异点是「合规素材 + 主体分散」的组合方案，而不是比别人便宜几个点。",
      source: "搜狐（2026Q3 墨西哥现金贷市场） https://www.sohu.com/a/1093225997_121846689"
    },
    {
      title: "Meta 或时隔三年新增中国区官方代理牌照（传闻 2 家 / 总数或至 15 家）",
      date: "2026-10-28",
      summary: "出海圈传出 Meta 可能新增中国区官方代理商牌照，距上次新增已近三年；目前官方名单仍为 11 家（飞书逸途、GatherOne、省广集团、蓝标传媒、维卓、HuntMobi、猎豹移动、熊猫新媒、雨果跨境、YinoLink 易诺、钛动科技）。有传新增 2 家、也有说总数将增至 15 家，暂无官方确认。",
      tag: "cooperation",
      bizValue: "这事跟 Jill 直接相关：牌照格局变动会带来客户对「代理资质」的重新询问。客户如果问「你们是不是官方一代」，答案要能一句话说清，并且顺势讲清「返点时代结束、服务能力才是差异」。",
      source: "白鲸出海（转自微信公众号「大声出海」） http://mp.weixin.qq.com/s?__biz=MzYzNTkyMTI2Ng==&mid=2247573713&idx=3&sn=8e574f2b9545a7d0bd96d62d697128c2"
    },
    {
      title: "《微短剧发展管理办法》9/1 起施行：境内拍摄境外播出同样要备案",
      date: "2026-09-01",
      summary: "办法明确，境内拍摄、准备拿去境外播出的微短剧，同样要做备案公示和审核许可，「只发海外」不再绕开监管；同时覆盖境内主体出海的备案双轨要求。",
      bizValue: "很多短剧客户还以为是「出海就不用备案」。提前提醒一句，能省他一次下架风险——这类提醒的转化率比任何 cold mail 都高。",
      source: "腾讯快报（星河商业观察） https://kuaibao.qq.com/s/20261026A0AV9D00"
    },
    {
      title: "Google 9/30 起 Search/PMax 语言定向失效，改由素材与落地页语言自动匹配",
      date: "2026-09-30",
      summary: "Google Ads API 文档确认：9/30 起 Search 广告与 AI Max for Search、以及 Search 上展示的 PMax 不再支持手动语言定向（Campaign Criterion.language 设置会报 Context Error），改为根据广告素材与落地页语言 + 用户语言偏好自动匹配。",
      bizValue: "对多语言市场客户影响很大：以前靠语言定向切人群的玩法没了，现在「素材语言 = 定向」。跟客户聊「一条素材打多语言市场」的老办法已经失效，这正是你推多语种素材产能的时机。",
      source: "Google Ads API 文档（Feature deprecations） https://developers.google.com/google-ads/api/docs/deprecations"
    },
    {
      title: "DV360 11 月起多项更新：品牌控制中心下线、受众源更名、Floodlight 用登录信号",
      date: "2026-11-01",
      summary: "Google 官方：11 月 DV360 下线广告主级 Brand Control Center（相关设置移至 Advertiser settings > Targeting rules）；受众数据源 Amerilink 更名为 Open Audiences；Floodlight 将使用 Google 登录数据信号回收跨设备转化。",
      bizValue: "只影响走 DV360 的客户（品牌/大预算为主）。如果 Jill 手上有品牌类或大预算客户，这条是提醒他「让技术同学检查下配置」的好由头，属于低风险高好感度的触达。",
      source: "Google Support（DV360 Q4 2026 updates） https://support.google.com/displayvideo/answer/18787789"
    },
    {
      title: "苹果下调中国台湾市场 App Store 佣金",
      date: "2026-10-30",
      summary: "白鲸出海「一句话看出海新鲜事」10/30 收录：苹果下调中国台湾市场 App Store 佣金。",
      bizValue: "中国台湾是很多游戏/短剧产品的第二收入市场，佣金下调直接抬高净收入。跟客户聊「台湾市场值不值得加预算」时，这条是今年新出现的正面变量。",
      source: "同花顺财经（白鲸出海专栏） https://news.10jqka.com.cn/20261030/c681301198.shtml"
    },
    {
      title: "拉美现金贷再掀 IPO 潮，中资平台「监管套利」模式开始反噬",
      date: "2026-10-26",
      summary: "未央网专栏：拉美成为中资金融科技淘金中心，滴滴 DiDi Fintech、乐信、嘉银等以拉美做第二增长曲线；同时大量中小平台延续高息短贷 + 高营销投入打法，2026 年 6 月墨西哥 CNBV 更新金融科技监管规则（规范综合资金成本披露、按业务量分级设最低资本金），巴西也在收紧消费金融监管。",
      bizValue: "「靠高息 + 砸钱冲规模」这条路在拉美也快走完了。跟金融客户聊时可以直接点出：明年拼的是获客质量不是获客量，投放侧能做的就是把首逾率前置到素材筛选环节。",
      source: "腾讯新闻（未央网） https://news.qq.com/rain/a/20261026A0CHV200"
    },
    {
      title: "App Growing：东南亚金融素材五类表达最易被判违规，日息表述在印尼/泰国几乎必判",
      date: "2026-10-15",
      summary: "App Growing 分析：东南亚金融广告常因「额度/利率误导、诱导隐瞒负债、面向脆弱/未成年人群、无资质背书、夸大获批承诺、借贷与博彩混淆」被判违规下架。印尼最严红线为「未成年人 + 持牌真伪」，泰国为「隐瞒负债 + 博彩混淆」，越南为「利率透明」；只报日息不换算年化在印尼/泰国几乎必被判误导。",
      bizValue: "这是可以直接变成「素材预审清单」的东西。给金融客户发一份「印尼/泰国/越南素材红线对照表」，比发十封自我介绍有用——她有这个知识，就该显出来。",
      source: "微信公众号「ADX海外投放」（引 App Growing） http://mp.weixin.qq.com/s?__biz=MzY4NDM2MzU2OA==&mid=2247484115&idx=1&sn=944d0791d23eb7dfe92e45dea60f2460"
    },
    {
      title: "伽马数据 Q3：中国自研游戏海外收入 57.72 亿美元，同比 +15.58%",
      date: "2026-10-24",
      summary: "伽马数据《2026 年 7-9 月中国游戏产业季度报告》：Q3 中国游戏市场实际销售收入 925.22 亿元（同比 +5.11%）；自研游戏海外实际销售收入 57.72 亿美元，环比 -4.46%、同比 +15.58%；合成类、策略类与休闲产品在美日韩保持稳定表现。",
      bizValue: "「同比涨、环比跌」= 老产品撑着、新品没接上。这是你跟游戏客户聊 Q4 预算最自然的切入口：问新品排期，而不是问预算多少。",
      source: "游戏产业报告（伽马数据 Q3，网易转载） https://m.163.com/dy/article/LA0D1P100553OKLX.html"
    },
    {
      title: "NetShort 亮相戛纳电视节 MIPCOM，宣布将向外部创作者开放 AI 制作能力",
      date: "2026-10-20",
      summary: "NetShort 在 MIPCOM Cannes 展示原创内容开发 + AI 赋能制作 + 全球发行模式：覆盖 170 多个国家和地区、支持 17 种以上语言，北美为最大市场；自研 AI 智能体平台支持 AI 辅助剧本与全 AI 生成作品，计划未来数月向外部创作者与制作伙伴开放。",
      bizValue: "头部短剧平台开始「卖能力」而不只是「买内容」，意味着会有一批中小制作方挂靠到它的生态里——这些人正是你的潜在投放客户。也可以反过来想：NetShort 自己就是大预算广告主。",
      source: "至顶网（美通社稿） https://www.zhiding.cn/cooperation/2026/1020/3202960.shtml"
    }
  ],

  // ============================================================
  // 四、出海线索池 chinaGoingGlobal
  // ============================================================
  chinaGoingGlobal: [
    {
      product: "Nimo TV（海外游戏直播）/ 虎牙直播海外业务",
      company: "虎牙 HUYA Inc.（NYSE: HUYA）",
      hq: "中国广东广州",
      category: "娱乐APP",
      markets: "东南亚、拉美、中东北非（Nimo TV 为主阵地）",
      revenue: "2026 Q3 财报将于 11/17 发布；公司为纽交所上市的游戏直播与游戏服务公司",
      recent: "10/14 连续获得《巴伦周刊》中文版与《福布斯中国》两项行业认可；IR 公告 Q3 业绩将于 11/17 公布。海外直播业务（Nimo TV）为其独立运营的出海产品线，投放与增长预算相对独立。",
      website: "https://ir.huya.com/",
      cooperation: "not",
      coopModel: "",
      agency: "暂无公开数据",
      scale: "head",
      contacts: [
        {
          name: "Jenny Cai",
          role: "投资者关系（Piacente Financial Communications 代行）",
          email: "huya@tpg-ir.com",
          phone: "+86-10-6508-0677",
          linkedin: "",
          source: "虎牙 IR 官网 Key Contact https://ir.huya.com/"
        }
      ],
      channels: [
        {
          label: "投资者关系（最对口）",
          email: "ir@huya.com",
          phone: "+86-757-6681-1975",
          source: "虎牙 IR 官网 Key Contact https://ir.huya.com/"
        },
        {
          label: "IR 代理（Piacente）",
          email: "huya@tpg-ir.com",
          phone: "+86-10-6508-0677",
          source: "虎牙 IR 官网 Key Contact https://ir.huya.com/"
        }
      ],
      contactNote: "母大子小：上市公司主体，但海外直播产品线（Nimo TV）团队与预算相对独立，可从 IR 转介至海外业务；飞书合作表（缓存）未列名，按潜在客户跟进",
      emailSubject: "Nimo TV 东南亚/拉美增长——海外直播投放的合作思路",
      emailBody: "您好！我是易点天下 Yeahmobi 的 Jill，专注中国 App 与游戏的海外增长。关注到虎牙刚连续获得《巴伦周刊》中文版和《福布斯中国》的行业认可，Q3 业绩也将在 11 月 17 日发布，海外直播产品线 Nimo TV 在东南亚、拉美一直是独立作战的盘子。我们在直播/泛娱乐类 App 的新兴市场获客、以及直播打赏类高价值人群的素材策略上有积累，想就 Nimo TV 下一阶段在东南亚和拉美的获客效率，约您 15 分钟聊聊我们的思路。如果海外业务由其他同事负责，也麻烦您帮忙转介。顺颂商祺！Jill｜易点天下 Yeahmobi（A股上市，专注中国出海企业的海外增长服务）"
    },
    {
      product: "海外音频社交产品线（全球化音频/语音产品矩阵）",
      company: "Sound Group Inc.（NASDAQ: SOGP，原荔枝）",
      hq: "中国广东广州",
      category: "娱乐APP",
      markets: "中东、东南亚、欧美（全球化音频社交）",
      revenue: "2026 H1 营收 2.492 亿美元（同比 +25%）、净利 1780 万美元；FY2025 营收 4.437 亿美元（同比 +53%）",
      recent: "公司自我定位为「全球 AI 音频公司」，2026 上半年营收同比 +25%、净利 1780 万美元；FY2025 营收同比 +53%、净利 3160 万美元，并于 2026/3 派发特别现金股息。海外音频产品线是其主要增长来源。",
      website: "https://ir.soundgroupinc.com/",
      cooperation: "not",
      coopModel: "",
      agency: "暂无公开数据",
      scale: "head",
      contacts: [
        {
          name: "",
          role: "IR Department（投资者关系部）",
          email: "ir@soundgroupinc.com",
          phone: "",
          linkedin: "",
          source: "2026 半年报新闻稿「For investor and media inquiries」 https://ir.soundgroupinc.com/news-releases/news-release-details/sound-group-inc-reports-unaudited-financial-results-first-half"
        }
      ],
      channels: [
        {
          label: "投资者关系（最对口）",
          email: "ir@soundgroupinc.com",
          phone: "",
          source: "2026 半年报新闻稿 https://ir.soundgroupinc.com/news-releases/news-release-details/sound-group-inc-reports-unaudited-financial-results-first-half"
        },
        {
          label: "IR 代理（Christensen Advisory）",
          email: "soundgroup@christensencomms.com",
          phone: "",
          source: "2026 半年报新闻稿 https://ir.soundgroupinc.com/news-releases/news-release-details/sound-group-inc-reports-unaudited-financial-results-first-half"
        }
      ],
      contactNote: "IR 邮箱为公开可用通道，可请求转介海外业务/增长负责人；未找到商务侧直连邮箱；飞书合作表（缓存）未列名，按潜在客户跟进",
      emailSubject: "Sound Group 海外音频产品线增长——投放效率合作探讨",
      emailBody: "您好！我是易点天下 Yeahmobi 的 Jill，专注中国 App 与游戏的海外增长。关注到 Sound Group 2026 上半年营收 2.492 亿美元、同比增长 25%，净利 1780 万美元，海外音频产品线是主要增长来源，公司也在持续强调全球化与 AI 音频方向。我们在语音社交/音频类 App 的中东北非与东南亚获客上有积累，尤其在「高价值付费房主 vs 泛用户」的分层投放上有一些方法，想就海外产品线下一阶段的获客效率，约您 15 分钟沟通。如果业务由其他同事负责，麻烦帮忙转介，非常感谢。顺颂商祺！Jill｜易点天下 Yeahmobi（A股上市，专注中国出海企业的海外增长服务）"
    },
    {
      product: "Plants on Fire: Attack & Defend（植物题材轻竞技塔防）",
      company: "上海身梦科技有限公司",
      hq: "中国上海",
      category: "游戏",
      markets: "巴西、印尼、泰国（下载），美国、韩国、中国台湾（收入）",
      revenue: "单款累计下载约 310 万、总流水约 380 万美元（第三方估算）；2026 年 9 月单月流水 169.2 万美元",
      recent: "2023 年成立，创始人张哲川（前腾讯 NExT Studios 创意工坊负责人、《疑案追声》制作人）。产品 8 月底全球上线后 9 月流水环比 +293% 首破百万美元；国服改名《全植英雄：对决》9/24 首曝、10/22 首次计费测试。",
      website: "暂无公开数据",
      cooperation: "not",
      coopModel: "",
      agency: "本作由朝夕光年发行（字节体系，易点天下长期合作客户），研发方身梦科技为独立团队",
      scale: "sme",
      contacts: [
        {
          name: "张哲川",
          role: "创始人（前腾讯 NExT Studios 创意工坊负责人）",
          email: "",
          phone: "",
          linkedin: "",
          source: "点点数据产品分析稿（引公开资料） https://www.diandian.com/news/HgufpeHEN91nQcAfQQUQ"
        }
      ],
      channels: [],
      contactNote: "未找到公司官网与公开邮箱；发行方为朝夕光年，可先经字节体系内部渠道问询研发侧投放归属；飞书合作表（缓存）未列名，按潜在客户跟进"
    },
    {
      product: "《弹壳战机》/《弹壳特攻队》/《弓箭传说》",
      company: "猩球游戏（Habby 长期合作研发商）",
      hq: "中国北京（2026 年 10 月新设广州发行分部）",
      category: "游戏",
      markets: "全球（欧美为主）",
      revenue: "《弹壳特攻队》《弓箭传说》两款产品累计流水超 60 亿元；《弹壳战机》9 月上线首月 IAP 估算破 100 万美元",
      recent: "10 月正式入驻广州天河狮子文化园，新设团队聚焦发行与买量增长，首批招聘岗位直指买量素材设计——正从「藏在发行商身后的研发厂牌」转型为具备全链路能力的独立发行公司；同时布局 AI 漫剧等新业务。",
      website: "暂无公开数据",
      cooperation: "not",
      coopModel: "",
      agency: "过往产品长期由海彼 Habby 发行（易点天下长期合作客户），现自建发行与买量团队",
      scale: "head",
      contacts: [],
      channels: [],
      contactNote: "未找到官网与公开邮箱；正在广州组建买量/发行团队，建议直接投递商务合作至其招聘渠道或经海彼侧转介；飞书合作表（缓存）未列名，按潜在客户跟进"
    },
    {
      product: "悟空中文 / 悟空国际数学 / 悟空英语（WuKong Chinese 等）",
      company: "悟空教育 WuKong Education",
      hq: "美国加州山景城（团队与教研分布中国、新西兰等地）",
      category: "教育",
      markets: "118 个国家和地区（欧美华人家庭为主，非母语中文学习者）",
      revenue: "累计服务近百万家庭；第三方估算年营收 1-2.5 亿美元区间（LeadIQ 口径，非官方披露）",
      recent: "2026 年 2 月获 Frost & Sullivan 认证：按累计付费用户计，WuKong Chinese 在「非中文母语地区中文在线教育平台」中全球第一（截至 2025/12/31）；2024 年获 Cognia 国际教育质量认证；已推出在线学习 App 与 App 矩阵。",
      website: "https://www.wukongsch.com/",
      cooperation: "not",
      coopModel: "",
      agency: "暂无公开数据",
      scale: "head",
      contacts: [
        {
          name: "Vicky",
          role: "创始人兼 CEO",
          email: "",
          phone: "",
          linkedin: "",
          source: "悟空教育官方博客创始人访谈 https://www.wukongsch.com/zh/blog/zh/page/4/"
        }
      ],
      channels: [],
      contactNote: "官网未公开商务合作邮箱（联系页已下线/改版）；建议 LinkedIn 搜 WuKong Education Growth/Marketing 负责人，或用官网表单留资；飞书合作表（缓存）未列名，按潜在客户跟进"
    },
    {
      product: "超级球球 / 丑小鸭 AI 双语启蒙机器人（安徒生系列）",
      company: "超级球球（AI 儿童陪伴机器人团队）",
      hq: "中国（杭州团队，具体主体工商信息暂无公开数据）",
      category: "教育",
      markets: "中国、欧洲、北美、日本（销售网络覆盖北美/欧洲/东南亚）",
      revenue: "暂无公开数据（产品处于众筹与首发阶段）",
      recent: "8/28 在丹麦王国驻上海总领事馆全球首发安徒生系列 AI 儿童产品（智能双语有声书、AI 对话毛绒、IP 手办四大系列）；此后亮相德国柏林 IFA、土耳其 GITEX、上海工博会，获 BBC 等海外媒体报道；10/16「丑小鸭 AI 双语启蒙机器人」上线京东独家众筹；团队称将拓展欧洲、北美、日本。",
      website: "暂无公开数据",
      cooperation: "not",
      coopModel: "",
      agency: "暂无公开数据",
      scale: "sme",
      contacts: [
        {
          name: "元晓帅",
          role: "创始人（博士）",
          email: "",
          phone: "",
          linkedin: "",
          source: "中华网数智频道报道 https://m.ai5g.china.com/ai/13004878/20261026/1020261904.html"
        }
      ],
      channels: [],
      contactNote: "早期硬件团队，未找到官网与公开邮箱；京东众筹页可作为触达路径之一，建议 LinkedIn/展会名录补；飞书合作表（缓存）未列名，按潜在客户跟进"
    },
    {
      product: "教育机器人（K12 AI 教学 / 中文教学机器人）",
      company: "北京爱宾果科技有限公司",
      hq: "中国北京",
      category: "教育",
      markets: "东南亚、中东、印度（另有泰国、马来西亚客户洽谈中）",
      revenue: "暂无公开数据",
      recent: "10/17 广交会「人工智能与机器人产业」论坛上，董事长闵海波表示教育机器人在东南亚、中东、印度市场客户较多、销量预计快速增长；泰国、马来西亚客户希望用机器人做 AI 教学与装配运维培训，欧美客户则希望机器人教孩子中文。",
      website: "暂无公开数据",
      cooperation: "not",
      coopModel: "",
      agency: "暂无公开数据",
      scale: "head",
      contacts: [
        {
          name: "闵海波",
          role: "董事长",
          email: "",
          phone: "",
          linkedin: "",
          source: "第一财经（广交会论坛报道） https://www.toutiao.com/article/7697972758096937522/"
        }
      ],
      channels: [],
      contactNote: "未找到官网与公开商务邮箱；广交会参展企业名录可作为触达路径；飞书合作表（缓存）未列名，按潜在客户跟进"
    },
    {
      product: "Pexo（AI Content Agent，从视频任务切入）",
      company: "北京极致上下文科技有限公司（Apex Context）",
      hq: "中国北京朝阳",
      category: "AI应用",
      markets: "80+ 国家和地区，约 80% 流量来自英美澳加",
      revenue: "ARR 突破 100 万美元；近百万注册用户；付费用户复购率超 50%，单用户单月最高付费超 3000 美元（公司披露口径）",
      recent: "10 月宣布完成超千万美元天使轮（达泰资本、松禾创投、视觉中国、深圳天使母基金、深圳高新投、福迪创投等）；2025 年 10 月曾获 HT Investment 与 BV 百度风投数百万美元。7 月开放注册，登顶 Product Hunt 日榜，相关话题多次登上 X Trending。",
      website: "https://pexo.ai/",
      cooperation: "not",
      coopModel: "",
      agency: "暂无公开数据",
      scale: "sme",
      contacts: [
        {
          name: "廖谦（Evan）",
          role: "创始人兼 CEO（前生数科技产品副总裁、Vidu 产品负责人，前腾讯/字节）",
          email: "",
          phone: "",
          linkedin: "",
          source: "科创板日报（腾讯新闻） https://news.qq.com/rain/a/20261020A0A7XJ00"
        }
      ],
      channels: [
        {
          label: "官方支持/咨询邮箱（非对口，可请求转介）",
          email: "support@pexo.ai",
          phone: "",
          source: "Pexo 服务条款（Terms of Service，2026/8/10 更新） https://pexo.ai/terms"
        }
      ],
      contactNote: "官网与条款仅公开 support@pexo.ai（客服/法务用），非商务对口；建议同时走 LinkedIn 搜 Pexo 增长负责人，或经投资方 BV 百度风投（bp@baidu-venture.com）转介；飞书合作表（缓存）未列名，按潜在客户跟进",
      emailSubject: "Pexo 欧美流量放大——AI 视频 Agent 的获客合作思路",
      emailBody: "您好！我是易点天下 Yeahmobi 的 Jill，专注中国 App 与游戏的海外增长。看到 Pexo 十月刚完成超千万美元天使轮，7 月开放注册以来覆盖 80 多个国家、注册用户近百万、ARR 突破百万美元，约 80% 流量来自英美澳加，付费复购率超过 50%——这个用户结构在出海 AI 产品里很少见。我们的经验集中在两件事：一是高价值英语市场的付费用户获客成本控制，二是把产品的新功能快速转成可投放的素材（Pexo 的 Mark to Fix、多模板场景其实很出片）。想约您 15 分钟聊聊欧美市场下一阶段的获客思路。若这封信不该发给您，麻烦转给负责增长的同事，谢谢！顺颂商祺！Jill｜易点天下 Yeahmobi（A股上市，专注中国出海企业的海外增长服务）"
    },
    {
      product: "Moras（达人带货 Agent）/ K2 Prism 多模态内容模型",
      company: "杭州攀峰智能科技有限公司（K2Lab）",
      hq: "中国浙江杭州拱墅",
      category: "AI应用",
      markets: "TikTok 生态（海外达人带货为主）",
      revenue: "暂无公开数据；公测首季度协助达人 GMV 突破 1000 万美元，累计注册达人近 10 万",
      recent: "2026 年 10 月完成数千万元天使+轮（凯泰资本）；半年内连续完成云时资本、华控基金、凯泰资本领投的三轮融资。三个月内跃升 TikTok 金牌服务商，已与超 1100 家头部商家合作。创始人王铭为前钉钉副总裁兼开放平台总经理。",
      website: "暂无公开数据",
      cooperation: "not",
      coopModel: "",
      agency: "暂无公开数据",
      scale: "sme",
      contacts: [
        {
          name: "王铭",
          role: "创始人兼 CEO（前钉钉副总裁兼开放平台总经理）",
          email: "",
          phone: "",
          linkedin: "",
          source: "科创板日报（网易转载） https://www.163.com/dy/article/LA6RS51J0550B1DU.html"
        }
      ],
      channels: [],
      contactNote: "未找到官网与公开邮箱；本身是 TikTok 金牌服务商，属「竞合型」客户，建议先摸清其投放是否外包再决定切入方式；飞书合作表（缓存）未列名，按潜在客户跟进"
    },
    {
      product: "DeepWork 智能营销工作台 / 云宝 GEO 可见度监测（GEO 生成式引擎优化）",
      company: "深度云海智能科技（上海）有限公司",
      hq: "中国上海",
      category: "AI应用",
      markets: "中国 + 海外市场拓展（本轮融资明确用于海外拓展）",
      revenue: "暂无公开数据",
      recent: "2026 年 10 月 13 日宣布完成千万级天使轮，A 股上市公司华工科技（000988.SZ）领投，为 GEO 赛道早期少见的产业资本领投案例；资金用于自研技术底座迭代、海外市场拓展、DeepWork 工作台升级及 AI 团队扩充。",
      website: "暂无公开数据",
      cooperation: "not",
      coopModel: "",
      agency: "暂无公开数据",
      scale: "sme",
      contacts: [
        {
          name: "钱程",
          role: "创始人兼 CEO",
          email: "",
          phone: "",
          linkedin: "",
          source: "环球网（今日头条转载） https://m.toutiao.com/article/7696351299859710483"
        }
      ],
      channels: [],
      contactNote: "未找到官网与公开邮箱；刚拿融资明确要出海，属高意向；建议 LinkedIn 搜「深度云海」或经华工科技投资部转介；飞书合作表（缓存）未列名，按潜在客户跟进"
    }
  ],

  // ============================================================
  // 五、媒体政策 policies
  // ============================================================
  policies: [
    {
      platform: "Meta / Google / TikTok / LINE",
      title: "【明天生效】泰国线上广告 KYC：11/1 起无身份验证不得投放",
      date: "2026-11-01",
      detail: "泰国电子交易委员会第 2 号公告：所有向泰国用户投放广告的境内外广告主、代投方、MCN/KOL 都须在投放前完成身份验证（个人需人脸+身份证匹配；法人可用商业发展部证明或护照），验证有效期 1 年；平台须留存广告主与付款人资质至少 90 天。Meta 已确认 11/1 起合规，LINE 书面确认；TikTok、Google 在 10/22 议会审查会上未给出保证。",
      impact: "高",
      categories: ["现金贷", "金融", "短剧", "电商", "加白名单/资质"],
      bizValue: "手上有泰国盘的客户今天就要通知：法人资质文件、代投授权书、付款方一致性三样先备齐，否则 11 月 1 日直接断投。这次的差别是「验人不验货」——验过不代表素材合规，两件事要分开跟客户说清。",
      source: "白鲸出海 https://www.baijing.cn/article/57181"
    },
    {
      platform: "Meta",
      title: "【20 天内生效】新版商业条款与自助广告条款 11/20 生效（原定 10/30 推迟）",
      date: "2026-11-20",
      detail: "Meta 10/23 确认推迟至 11/20。条款把产品目录条款并入商业条款、广告创意生成式 AI 条款并入自助广告条款；新增 AI Features 条款，明确 Meta 的 AI 功能「可能出错」，由广告主对 AI 创建或修改的内容承担全部责任；继续使用即视为接受。",
      impact: "高",
      categories: ["AI", "电商", "隐私"],
      bizValue: "客户以后不能再用「AI 素材被拒是平台问题」当理由——责任归广告主。这是你推「素材合规预审」服务最自然的一次时机。",
      source: "Seller Splash（引 Meta Business Help Center / Reuters） https://sellersplash.com/blog/meta-ad-terms-update"
    },
    {
      platform: "Meta",
      title: "10/28 起站内产品浏览对存量广告默认开启（需主动关闭）",
      date: "2026-10-28",
      detail: "Meta 另行通知：In-app product browsing 自 10/28 起对存量广告默认开启，广告主需在 Advantage+ creative 与版位设置里主动关闭或先行测试。",
      impact: "中",
      categories: ["电商"],
      bizValue: "电商/独立站客户如果没留意，会出现「点击进了站内浏览页、落地页曝光被摊薄」的情况。提醒一句并帮他看后台，是最容易建立信任的小动作。",
      source: "Seller Splash（引 ppc.land / Meta 广告主通知） https://sellersplash.com/blog/meta-ad-terms-update"
    },
    {
      platform: "Google",
      title: "【16 天内生效】11/16 起 Data Manager 取消强制 SHA-256 哈希",
      date: "2026-11-16",
      detail: "Google Ads Data Manager 自 11/16 起默认接受加密列表，在可信执行环境（TEE）内完成解密、归一化与匹配，不再要求广告主预先做 SHA-256 哈希、也不用手工处理 E.164 电话格式与 Gmail 去点；覆盖 Customer Match 与增强型转化（含 CRM 集成、云存储、直传、Data Manager API）。",
      impact: "高",
      categories: ["金融", "隐私", "教育"],
      bizValue: "靠名单做再营销的金融/教育客户匹配率会明显上升。但要提醒：数据未哈希就传出去，隐私政策条款必须同步更新——这一句能体现你比别的代理更懂合规。",
      source: "PALAI MEDIA（引 ppc.land） https://palai.media/en/news/google-ads-drops-mandatory-customer-data-hashing"
    },
    {
      platform: "Google",
      title: "9/30 起 Search/PMax 手动语言定向弃用（已生效）",
      date: "2026-09-30",
      detail: "Google 确认 9/30 起 Search 广告、AI Max for Search 以及 Search 上展示的 PMax 不再支持手动语言定向；在 Search 上新增/修改语言条件会报 Context Error。改为依据广告素材与落地页语言 + 用户语言偏好自动匹配。",
      impact: "高",
      categories: ["游戏", "电商", "教育"],
      bizValue: "「一条素材打多语言市场」的老玩法正式失效，素材语言等于定向。客户如果还在用中文素材跑小语种市场，转化会明显掉——这是你切入多语种素材产能的现成理由。",
      source: "Google Ads API 文档 https://developers.google.com/google-ads/api/docs/deprecations"
    },
    {
      platform: "Google",
      title: "9/23 起无法新建 Smart Campaigns（已生效）",
      date: "2026-09-23",
      detail: "Google Ads API 变更记录：2026/9/23 起不能新建 Smart Campaign，已有 Smart Campaign 可继续投放与修改。中小客户需迁移到标准 Search/PMax 结构。",
      impact: "中",
      categories: ["电商"],
      bizValue: "中小电商客户很可能还在用 Smart Campaign 图省事。帮他做一次结构迁移，是最低成本的增值服务，也是把他从「自助投放」拉到「代投服务」的切入口。",
      source: "Google Ads API 文档 https://developers.google.com/google-ads/api/docs/deprecations"
    },
    {
      platform: "Google（DV360）",
      title: "11 月 DV360 多项更新：Brand Control Center 下线、Amerilink 更名、Floodlight 用登录信号",
      date: "2026-11-01",
      detail: "官方公告：11 月下线广告主级 Brand Control Center（设置并入 Advertiser settings > Targeting rules）；受众数据源 Amerilink 更名为 Open Audiences；Floodlight 将使用 Google 登录数据信号回收跨设备/跨环境转化；另 10/12 起 YouTube line item 必须填 business name 与 logo。",
      impact: "中",
      categories: ["隐私", "电商"],
      bizValue: "只影响走 DV360 的品牌/大预算客户。适合当作「技术巡检」的由头去联系，风险低、好感度高。",
      source: "Google Support（DV360 Q4 2026 updates） https://support.google.com/displayvideo/answer/18787789"
    },
    {
      platform: "国家广电总局等（中国）",
      title: "《微短剧发展管理办法》9/1 施行：境内拍摄、境外播出同样要备案",
      date: "2026-09-01",
      detail: "办法明确境内拍摄、拟赴境外播出的微短剧同样需要备案公示与审核许可；对境内主体出海形成备案双轨要求，非法出境内容的平台责任同步收紧。",
      impact: "高",
      categories: ["短剧"],
      bizValue: "大量短剧客户还在按「出海不用备案」的旧逻辑排产。提前提醒能直接降低他的下架/封禁风险——这类提醒的回复率通常最高。",
      source: "腾讯快报（星河商业观察） https://kuaibao.qq.com/s/20261026A0AV9D00"
    },
    {
      platform: "TikTok",
      title: "TikTok 短剧分账与激励规则：本土原创/首发/独家最高 20 倍收益加权",
      date: "2026-09-01",
      detail: "TikTok for Business 规则：本土原创、平台首发、独家热门三类剧最高拿 20 倍收益加权；AI 仿真人单部爆款最高 5 万美元专项激励；剧本持有方最高可分走 60% 剧集收益；上月账单每月 20 日前出、发票核准后 5 个工作日内付款。",
      impact: "高",
      categories: ["短剧", "AI"],
      bizValue: "这条直接决定短剧客户的产能投向（本土原创 vs 译制）。你能把这套规则讲清楚，客户就会把你当投放侧的顾问而不是报价单。",
      source: "腾讯快报（星河商业观察） https://kuaibao.qq.com/s/20261026A0AV9D00"
    },
    {
      platform: "TikTok",
      title: "DramaCenter 主体认证「三一致」硬门槛",
      date: "2026-10-26",
      detail: "第三方团队进 TikTok 站内短剧有两条路径：走 DramaCenter 做企业主体认证后直接发剧，硬门槛是认证主体、供应商信息、收款账户三者必须一致；或走 TikTok Minis 以小程序形式挂载，用户不跳出 App 即可付费/看广告解锁。",
      impact: "中",
      categories: ["短剧", "加白名单/资质"],
      bizValue: "很多中小制作方会卡在「三一致」上。你能帮他理清主体/收款结构，等于替他省掉一个月的试错——这是很实用的破冰话题。",
      source: "腾讯快报（星河商业观察） https://kuaibao.qq.com/s/20261026A0AV9D00"
    },
    {
      platform: "印尼 OJK",
      title: "印尼现金贷利率与资本金双收紧：日利率阶梯降至 0.1%、实缴资本提至 250 亿印尼盾",
      date: "2026-10-20",
      detail: "机构研报汇总：印尼 OJK 将日利率阶梯式下调至 0.1%，实缴资本要求提升至 250 亿印尼盾；行业从「跑马圈地」转入「精细运营 + 合规竞争」。",
      impact: "高",
      categories: ["现金贷", "金融"],
      bizValue: "利率被压 = 单客利润变薄 = 更依赖精准获客。跟印尼盘客户聊，把话题从 CPI 引到「首逾率/复贷率」，你就从供应商变成了顾问。",
      source: "三个皮匠报告（海外现金贷机构研判汇总） https://www.sgpjbg.com/labelsyh/haiwaixianjindaiyanbao/2/7075178.html"
    },
    {
      platform: "菲律宾 SEC",
      title: "菲律宾消费金融：月利率上限压至 12%、资本金要求提高约 10 倍",
      date: "2026-10-20",
      detail: "菲律宾 SEC 将月利率上限压降至 12%，同时大幅提高资本金要求（约 10 倍）。机构判断纯现金贷空间受挤压，场景化与持牌经营成为主流。",
      impact: "高",
      categories: ["现金贷", "金融"],
      bizValue: "菲律宾是很多中小现金贷的第一站，门槛抬高会淘汰一批玩家。现在去见客户，切入点应该是「帮你算清合规成本下的可承受 CAC」，而不是报价。",
      source: "三个皮匠报告（海外现金贷机构研判汇总） https://www.sgpjbg.com/labelsyh/haiwaixianjindaiyanbao/2/7075178.html"
    },
    {
      platform: "墨西哥 CNBV",
      title: "墨西哥 2026/6 更新金融科技规则：强制披露综合资金成本 + 按业务量分级设最低资本金",
      date: "2026-06-30",
      detail: "CNBV 2026 年 6 月更新金融科技监管规则，要求规范综合资金成本（CAT）披露、按业务量分级设置最低资本金要求；巴西等国同步收紧消费金融监管。另有《数字经济与数字支付法》草案仍在国会审议（截至 Q3 未生效）。",
      impact: "高",
      categories: ["现金贷", "金融"],
      bizValue: "墨西哥是今年拉美现金贷的主战场，成本披露要求变严会直接影响素材文案（不能再模糊化利率）。这是你做「素材合规预审」的最佳卖点。",
      source: "搜狐（2026Q3 墨西哥现金贷市场） https://www.sohu.com/a/1093225997_121846689"
    },
    {
      platform: "App Growing（平台审核口径）",
      title: "东南亚金融素材五类高危表达：日息不换算年化在印尼/泰国几乎必被判误导",
      date: "2026-10-15",
      detail: "App Growing 归纳东南亚金融广告高频违规：额度/利率误导、诱导隐瞒负债、面向脆弱/未成年人群、无资质背书、夸大获批承诺、借贷与博彩混淆。印尼红线为「未成年人+持牌真伪」，泰国为「隐瞒负债+博彩混淆」，越南为「利率透明」；印尼 POJK、泰国 BOT、越南监管均要求年化综合成本清晰显著披露。",
      impact: "高",
      categories: ["现金贷", "金融"],
      bizValue: "这份清单可以直接做成给客户的「素材预审对照表」发出去——不用等合作，先送价值。金融客户收到这种材料，通常当天就会回。",
      source: "微信公众号「ADX海外投放」（引 App Growing） http://mp.weixin.qq.com/s?__biz=MzY4NDM2MzU2OA==&mid=2247484115&idx=1&sn=944d0791d23eb7dfe92e45dea60f2460"
    },
    {
      platform: "TikTok",
      title: "TikTok Shop 泰国站资料店集中扫号（个人店为重点）",
      date: "2026-10-28",
      detail: "业内消息：双 11 前 TikTok Shop 泰国站对资料店集中扫号，个人店为重点关注对象；叠加 11/1 广告 KYC，泰国站短期合规压力集中释放。",
      impact: "中",
      categories: ["电商", "加白名单/资质"],
      bizValue: "做泰国电商的客户这两周会很难受。你的价值是提前给他「合规主体 + 稳定账户」的方案，而不是等他被封了再来找你救火。",
      source: "白鲸出海 https://www.baijing.cn/article/57181"
    },
    {
      platform: "Meta / Google（返点与账户政策）",
      title: "返点政策持续收紧：Meta 2026 继续下调、Google 取消新客返点",
      date: "2026-10-30",
      detail: "行业访谈：Meta 在 2026 年继续下调代理商返点且不分直客与非直客；Google 取消所有新客返点激励。2025 年初 Meta 已把非直客返点砍约一半、直客降约七成，返点还与代理 KPI 完成度、账户封禁率挂钩。",
      impact: "中",
      categories: ["游戏", "电商", "金融"],
      bizValue: "客户拿返点压价时，这句话可以直接说：返点已经不是变量了，比的是谁能把账户跑稳、把素材跑对。把话题从价格拉回服务。",
      source: "广告门（专访大声出海 GoodyAds） https://www.adquan.com/article/357344"
    }
  ],

  // ============================================================
  // 六、代理/渠道侧情报 agencyIntel
  // ============================================================
  agencyIntel: [
    {
      title: "Meta 中国区官方代理仍是 11 家，传将新增 2 家 / 总数或至 15 家（无官方确认）",
      date: "2026-10-28",
      summary: "现有 11 家名单：飞书逸途、GatherOne、省广集团、蓝标传媒、维卓、HuntMobi、猎豹移动、熊猫新媒、雨果跨境、YinoLink 易诺、钛动科技。自 2023 年 7 月省广从优质合作伙伴晋升后近三年无新增；业内传新增 2 家或总数扩至 15 家，传言候选以 AT/DX/WM/QC 代称。新晋者的评估重点：独特客户池与新客开拓、AI 营销与技术能力、品牌全案能力、垂直行业沉淀与合规风控。",
      source: "白鲸出海（转自微信公众号「大声出海」） http://mp.weixin.qq.com/s?__biz=MzYzNTkyMTI2Ng==&mid=2247573713&idx=3&sn=8e574f2b9545a7d0bd96d62d697128c2",
      bizValue: "客户问「你们是不是 Meta 官方一代」时，答案要一口气讲清：牌照只是入场券，2026 年真正决定效果的是素材产能、账户稳定性和合规风控。这条也是你判断竞对动态的窗口——新牌照落地会带来一轮客户比价。",
      impact: "中"
    },
    {
      title: "Meta 返点连年收紧：非直客砍约一半、直客降约七成，且挂钩 KPI 与封禁率",
      date: "2026-10-28",
      summary: "自 2025 年初起 Meta 大幅调整沿用十余年的返点政策：非直客账号返点被砍约一半，直客返点降幅约七成，代理返点还取决于 KPI 完成度与账户封禁率。有卖家反映月返点从 5 万美元降至 2 万美元。业内传 2025 年底起 Meta 将效仿 Google 逐步退出返点机制。",
      source: "白鲸出海（转自「大声出海」） http://mp.weixin.qq.com/s?__biz=MzYzNTkyMTI2Ng==&mid=2247573713&idx=3&sn=8e574f2b9545a7d0bd96d62d697128c2",
      bizValue: "价格战的空间被平台自己关掉了。对 Jill 是利好：新人没有历史返点包袱，可以直接用「服务能力」跟客户谈，反而更占理。",
      impact: "高"
    },
    {
      title: "Google 2026 取消所有新客返点激励",
      date: "2026-10-30",
      summary: "GoodyAds 大海在广告门专访中确认：Google 将取消所有新客返点，2026 年没有任何返点激励；Meta 也将继续下调代理商返点且不分直客非直客。背景是 Meta 2026 年资本支出计划超 1000 亿美元、平台需要精算利润结构。",
      source: "广告门（专访大声出海 GoodyAds） https://www.adquan.com/article/357344",
      bizValue: "跟客户谈 Google 盘子时别再打返点牌。可以换的说法：我们把钱花在「结构 + 素材 + 归因」上，这些才是能省下 10-20% 无效花费的地方。",
      impact: "高"
    },
    {
      title: "开户成本行情：0 开户费 + 服务费 6%-10% + 首充 200-1000 美金",
      date: "2026-06-02",
      summary: "国内一级代理普遍 0 开户费；服务费（仅代投时）按消耗 6%-10%（Google 侧行业常见 10%-20%）；国内企业户首充 200-1000 美金、海外户 200-500 美金；部分二级代理仍收 500-2000 元一次性开户费。签约前要明确：不套户、不共用 BM、不连坐封号，预充值须进自己名下账户余额且可后台查验。",
      source: "亿邦动力 https://www.ebrun.com/20260602/672216.shtml",
      bizValue: "客户拿「别家 0 服务费」压价时，可以用这份行情表反过来问：他的账户是自己的 BM 吗？封了余额能退吗？用「资金安全」替代「价格」做比较维度。",
      impact: "中"
    },
    {
      title: "效果广告「三重内卷」：返点走低、账期拉长、政策收紧，代理毛利率降至 5%-8%",
      date: "2026-10-20",
      summary: "行业观察：2026 年国内效果广告代理毛利率从过去 20% 以上普遍降至 5%-8%；百度一级代理基础返点 2026 Q2 已降至 12%-18%（医疗教育最低约 10%），巨量、千川、腾讯广告同步下调；叠加账期拉长与合规成本上升。",
      source: "厚孜网络（行业分析） https://www.hoozi.com.cn/news/461.html",
      bizValue: "这解释了为什么客户会遇到「代理跑路/服务缩水」。Jill 可以反向用：我们靠服务费和效果活，不靠返点差价——这句话对小客户特别有说服力。",
      impact: "中"
    },
    {
      title: "巨量引擎 2026/8 累计关停违规广告账户 5 万余个，AI 生成内容判定标准细化",
      date: "2026-08-31",
      summary: "巨量引擎披露累计关停违规广告账户 5 万余个，三类典型违规为：反科学虚假夸大产品功效、宣扬畸形消费与不良价值观、以暴力低俗画面引流；并明确所有营销内容无论是否由 AI 制作，均须遵守广告法与平台规范。",
      source: "厚孜网络（引巨量引擎公告） https://www.hoozi.com.cn/news/461.html",
      bizValue: "客户做 AI 素材时最容易踩的就是「AI 生成免责」的误区。国内这套判定标准正在被海外平台同步借鉴，可以当作跨平台素材合规的谈资。",
      impact: "中"
    },
    {
      title: "印尼 KPPU 罚 97 家借贷平台 4700 万美元，九成中资——渠道稳定性成获客前置条件",
      date: "2026-10-15",
      summary: "印尼 KPPU 今年 3 月对 97 家在线借贷平台罚款约 4700 万美元，九成为中资背景（含信也 AdaKami、洋钱罐 Easycash）。行业判断：现金贷竞争已从「下载获客」转向「应用商店准入、持牌主体承接与合规信息披露」。",
      source: "微信公众号「ADX海外投放」 http://mp.weixin.qq.com/s?__biz=MzY4NDM2MzU2OA==&mid=2247484115&idx=1&sn=944d0791d23eb7dfe92e45dea60f2460",
      bizValue: "金融客户现在最怕的不是贵，是「投出去被封」。你可以把「主体合规 + 素材预审 + 账户冗余」打包成一个方案卖，而不是单纯卖流量。",
      impact: "高"
    },
    {
      title: "短剧投放方式正在变：站内小程序链路把「曝光-下载-注册-观看」压成「刷到-点击-观看」",
      date: "2026-10-26",
      summary: "TikTok 官方口径：通过站内小程序上架的短剧，用户获取效率是 App 链路的 4 倍；两条路径分别为 DramaCenter（企业主体认证直发）与 TikTok Minis（小程序挂载），前者要求认证主体/供应商信息/收款账户三一致。",
      source: "腾讯快报（星河商业观察） https://kuaibao.qq.com/s/20261026A0AV9D00",
      bizValue: "这是今年短剧投放最大的结构性变化。谁能把「App 买量 + 站内小程序」的预算配比算清楚，谁就拿到短剧客户的预算。Jill 应该把这条做成一个 15 分钟的分享材料。",
      impact: "高"
    },
    {
      title: "AI 素材拒审与「素材工业化产能」成为代理分水岭",
      date: "2026-10-23",
      summary: "扬帆出海双周榜显示：头部 AI 工具/社交产品在投素材量从 2000-3000 组到 6.7 万组差距极大，但收入并不与素材量成正比（Whispy AI 仅 4313 组即做到两周 167 万美元）。同时 Meta 新条款明确 AI 生成内容责任归广告主。",
      source: "扬帆出海 https://www.yfchuhai.cn/article/10229358.html ；Seller Splash https://sellersplash.com/blog/meta-ad-terms-update",
      bizValue: "「素材越多越好」这句话今年不成立了。跟客户聊的正确框架：素材量要匹配付费结构，不然就是给平台交学费。这个观点能让新人显得很懂。",
      impact: "中"
    },
    {
      title: "8 家代理商服务能力差距：一级代理 vs 二三级挂靠的核心差别在申诉链路",
      date: "2026-06-02",
      summary: "行业指引：一级代理有绿色开户通道与官方申诉通道，二三级代理申诉链路长、处理效率低；需警惕「个人万能开户」「黑户/租赁户」「隐形收费（开户费/审核费）」；预充值应进自己名下账户余额并可后台查验。",
      source: "亿邦动力 https://www.ebrun.com/20260602/672216.shtml",
      bizValue: "客户被小代理坑过之后，最在意的就是「出事谁帮我」。把这套判断标准讲给客户听，等于免费帮他做了一次供应商尽调——信任度立刻不一样。",
      impact: "中"
    }
  ],

  // ============================================================
  // 七、中小 App 投放洞察 smeInsight
  // ============================================================
  smeInsight: {
    painPoints: [
      "预算小、试错次数少：一轮测试没跑出模型就没有第二轮钱，所以「第一轮怎么设计」比「怎么放量」更决定生死（《Plants on Fire》2-5 月月流水只有 2-4 万美元，跑了大半年才等到 8 月底的全球放量窗口）",
      "素材产能跟不上：中小团队通常只有 1-2 个素材岗，日产几十组，而头部休闲产品日耗几千组（Block Blast! 一周 9395 组）。产能差距直接等于拿量能力差距",
      "不知道自己该投哪个市场：常见错误是「跟着大厂打美国」，但小产品的收入结构往往和下载结构完全不同（Plants on Fire 下载在巴西/印尼/泰国，收入在美国/韩国/台湾）",
      "账户与合规风险承受力低：一次封户、一次下架就等于整月预算归零（墨西哥 MexDin 等头部 App 今年被下架，金融类尤其脆弱）"
    ],
    needs: [
      "一套「小预算可验证」的测试方法论：先 3-5 个市场 × 10-20 组素材跑 CPI/留存，跑通再放量，而不是一上来定大盘",
      "素材产能的外部补充：不是要一个「代投」，是要一个能按月稳定交付素材变体的团队",
      "市场优先级判断：用同类产品的「下载国 vs 收入国」数据反推自己该先打哪，而不是凭感觉",
      "账户稳定性与合规兜底：多主体、多账户、素材预审，出问题能当天换户不断投"
    ],
    entryPoints: [
      "开场别问预算，问「你上一款产品的下载国和收入国是不是同一批」——这个问题几乎没人问过中小客户，但一针见血，能立刻把对话拉到专业层",
      "用《Plants on Fire》当案例讲投放节奏：小规模测试 → 多轮玩法验证 → 扩大测试 → 全球集中放量，四个阶段对应四种预算结构。客户会自己对号入座",
      "第一次见面不要报价：给一份「你所在品类的素材红线 + 市场优先级建议」，先送价值。中小客户对「送东西的人」防备心最低",
      "谈合作时把「素材产能」写进服务范围（月度素材变体数量 + 迭代节奏），而不是只承诺 CPA——这是中小客户最缺、也最容易感知差异的地方"
    ]
  }
};
