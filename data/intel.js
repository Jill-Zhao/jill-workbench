// data/intel.js — Jill 的工作台情报数据
// 更新时间：2026-09-16T09:30:00+08:00（每日 9:30 自动化重写）
// 数据来源：Sensor Tower / 白鲸出海 / DataEye / 澎湃·湃客 / 东方财富 / 36氪·扬帆出海 / Google·Meta·TikTok 官方政策页 / 52by.com / fintechnews.sg 等公开信息
// 所有数据均来自公开信息源，未编造任何数据；查不到的写「暂无公开数据」

window.INTEL = {
  updatedAt: "2026-09-16T09:30:00+08:00",

  // ============================================================
  // 一、大盘速览 marketPulse
  // ============================================================
  marketPulse: [
    {
      label: "8 月中国手游出海收入",
      value: "$22 亿",
      note: "2026 年 8 月共 38 家中国厂商入围全球手游发行商收入 Top100，合计吸金 $22 亿，占全球 Top100 的 41.8%。头部七家排名不变，腾讯蝉联第一",
      source: "Sensor Tower 2026-08 月报（北京商报/界面转载） https://finance.eastmoney.com/a/202609103870379130.html"
    },
    {
      label: "8 月海外短剧收入",
      value: "$2.89 亿 (+6%)",
      note: "8 月海外微短剧 App 双端预估内购收入约 $2.89 亿，环比 +6%；下载 2.80 亿次微降。DramaBox/ReelShort/NetShort 包揽收入前三，合计占 Top20 近一半",
      source: "DataEye 研究院（澎湃·湃客转载） https://www.thepaper.cn/newsDetail_forward_34044251"
    },
    {
      label: "可灵 AI 估值",
      value: "约 ¥1228 亿",
      note: "快手旗下可灵 AI 获国家 AI 产业投资基金 ¥14 亿入股，投后估值约 ¥1228 亿（$180 亿）。Q2 营收超 ¥8.5 亿、同比 +200%，全球用户破 1 亿",
      source: "界面新闻·AI 应用周度观察 https://k.sina.com.cn/article_5953740931_162dee08306703xtdo.html"
    },
    {
      label: "月之暗面赴港 IPO",
      value: "投前目标 $500 亿",
      note: "月之暗面（Kimi）9 月初以保密形式递表港交所，投前估值目标 $500 亿；Kimi K3 带动 6 月年化收入达 $3 亿。国产大模型商业化进入兑现期",
      source: "界面新闻·AI 应用周度观察 https://k.sina.com.cn/article_5953740931_162dee08306703xtdo.html"
    },
    {
      label: "AI 陪伴出海赛道",
      value: "半年 $2400 万+",
      note: "两款中国团队出海的 AI 陪伴 App（Crushie AI、Tipsy Chat）挤进全球 AI 陪伴收入榜前四，半年合计入账超 $2400 万，靠高客单订阅而非流量规模取胜",
      source: "AI趣谈（今日头条转载） https://www.toutiao.com/article/7683763137362805299"
    },
    {
      label: "泰国金融科技热度",
      value: "$1 亿并购",
      note: "微牛证券 Webull 斥资约 $1 亿收购泰国 Pi Securities 加码东南亚；泰国 BNPL 将于年底纳入央行专属牌照监管。东南亚数字金融仍是出海热土但合规门槛抬升",
      source: "Fintech News Singapore https://fintechnews.sg/thailand/"
    }
  ],

  // ============================================================
  // 二、App 榜单 appRankings
  // ============================================================
  appRankings: {
    // —— 游戏 ——
    game: [
      {
        name: "Tasty Travels",
        publisher: "点点互动（世纪华通旗下）",
        isChinese: true,
        markets: "美国/全球",
        performance: "8 月全球收入突破 $4600 万创历史新高，8 月 8 日一度升至美国 iOS 手游畅销榜第 10；对点点互动收入贡献从年初 9% 升至 15%",
        comment: "点点互动是易点天下已知合作客户，第二款增长引擎成型。Jill 可用「合成+社交竞技新爆款」跟休闲品类客户聊多产品矩阵打法，也证明大客户还有新预算空间。",
        source: "Sensor Tower 2026-08 月报 https://finance.eastmoney.com/a/202609103870379130.html",
        tier: "head"
      },
      {
        name: "Last Asylum: Plague",
        publisher: "三七互娱",
        isChinese: true,
        markets: "美国/韩国/德国",
        performance: "8 月单月出海收入突破 $2500 万、环比 +37%，超越《Puzzles & Survival》成为三七收入第一，跻身全球 4X 策略手游收入榜第 7",
        comment: "三七是易点天下长期合作客户，新品接棒老爆款说明其海外买量盘子还在扩。Jill 可用这条跟 SLG 客户聊「美国占 36% 的收入结构」验证美区仍是 4X 主战场。",
        source: "Sensor Tower 2026-08 月报 https://finance.eastmoney.com/a/202609103870379130.html",
        tier: "head"
      },
      {
        name: "Clash of Critters",
        publisher: "莉莉丝（Farlight Games 发行）",
        isChinese: true,
        markets: "日本/美国",
        performance: "7 月底登陆日本连续 4 天位列 iOS 下载榜 Top5，8 月已超过《万国觉醒》成为莉莉丝收入最高产品，带动公司收入环比 +23%",
        comment: "莉莉丝用宠物塔防切休闲赛道一战成功。Jill 可跟中重度客户聊「弹珠+Coin Master 营地掠夺」的混合玩法红利，也说明日韩市场对新休闲品类接受度高。",
        source: "Sensor Tower 2026-08 月报 https://finance.eastmoney.com/a/202609103870379130.html",
        tier: "head"
      },
      {
        name: "开心消消乐（海外）",
        publisher: "乐元素",
        isChinese: true,
        markets: "全球",
        performance: "8 月乐元素全球收入抬升 11% 至近三年最高值，《开心消消乐》当月收入创历史新高（「小小萌伴」新版本+暑期七夕活动）",
        comment: "长线休闲游戏靠版本+节点运营再造峰值。Jill 可用「七年产品还能创新高」说服犹豫中的休闲客户：老产品也有二次买量价值，回流用户的获客预算值得加。",
        source: "Sensor Tower 2026-08 月报 https://finance.eastmoney.com/a/202609103870379130.html",
        tier: "head"
      },
      {
        name: "明日方舟（Arknights）",
        publisher: "鹰角网络",
        isChinese: true,
        markets: "日本/全球",
        performance: "8 月中国大陆 iOS 收入环比大涨超 150%，畅销榜第 3；发行商排名暴涨 12 位重回 TOP30。移动端生命周期收入已接近 $10 亿",
        comment: "二次元长线运营+夏日嘉年华的教科书案例。Jill 可用「活动周期决定单月爆发」跟二次元客户聊节点营销排期——周年庆/夏日档前 1 个月就该锁定买量预算。",
        source: "Sensor Tower 2026-08 月报 https://finance.eastmoney.com/a/202609103870379130.html",
        tier: "head"
      },
      {
        name: "遗弃之地（APP 版）",
        publisher: "豪腾创想（疯狂游戏集团）",
        isChinese: true,
        markets: "中国/出海起步",
        performance: "8 月新晋全球 APP 发行商收入 TOP30，新版本更新后收入环比大增（报告口径增长超 120%），是小游戏厂商 APP 化突围的标志案例",
        comment: "【中小潜力】微信小游戏巨头把买量测试能力外溢到 APP 市场。Jill 可主动接触同类小游戏厂商：「你们在小游戏赛道验证过的玩法，APP 版海外盘更赚钱」——这是全新的预算增量客群。",
        source: "Sensor Tower 2026-08 月报（漫游manyou 全文版）",
        tier: "sme"
      },
      {
        name: "我的花园世界",
        publisher: "Modo Global",
        isChinese: true,
        markets: "中国/东南亚",
        performance: "8 月位列中国 App Store 手游收入榜第 17 位，与露珠游戏、游酷盛世等同处 Sensor Tower 全球 TOP100 入围圈的腰部阵营",
        comment: "【中小潜力】腰部模拟经营产品稳在收入榜。Jill 可用「榜单守门员们每月都在买量」说明：进不了 TOP10 的客户同样有稳定投放预算，别只盯头部。",
        source: "Sensor Tower 2026-08 月报（漫游manyou 全文版）",
        tier: "sme"
      },
      {
        name: "疯狂水世界",
        publisher: "益世界",
        isChinese: true,
        markets: "日韩/东南亚",
        performance: "8 月新晋全球发行商 TOP30；全球版上线即登顶日韩台 App Store 免费榜 TOP1，7 月联动周星驰《美人鱼》、8 月「夏日狂浪节」活动持续推高收入",
        comment: "【中小潜力】「模拟经营+SLG」融合的老将重回榜单。Jill 可用「免费榜登顶+影游联动」跟模拟经营客户聊本地化活动营销——素材侧联动素材是易点天下能直接接的需求。",
        source: "Sensor Tower 2026-08 月报（漫游manyou 全文版）",
        tier: "sme"
      },
      {
        name: "三国志·战略版（参考动态）",
        publisher: "灵犀互娱（阿里出售中）",
        isChinese: true,
        markets: "中国/日韩",
        performance: "2026 年 5 月 iOS 流水同比 -14.38%；8 月中旬阿里以约 ¥101 亿出售灵犀互娱，成为年内国内游戏最大股权并购案",
        comment: "头部 SLG 也逃不过七年之痒。Jill 可用这条跟客户聊两个点：①老产品下滑期更要精细化买量；②被并购的团队往往要独立做增长预算——新东家接手后是切入时机。",
        source: "Sensor Tower 2026-08 月报（漫游manyou 全文版）",
        tier: "head"
      }
    ],

    // —— 金融 ——
    finance: [
      {
        name: "Webull 微牛证券",
        publisher: "Webull（中国背景/美股上市）",
        isChinese: true,
        markets: "美国/泰国/东南亚",
        performance: "9 月 9 日宣布以约 $1 亿收购泰国券商 Pi Securities，加码东南亚财富管理市场",
        comment: "华人背景券商持续重仓东南亚。Jill 可跟券商/财富管理类客户聊「并购落地后品牌曝光+获客双需求」——新市场整合期正是投放预算窗口。",
        source: "Fintech News Singapore https://fintechnews.sg/thailand/",
        tier: "head"
      },
      {
        name: "Grab Quick Cash",
        publisher: "Grab（新加坡）",
        isChinese: false,
        markets: "泰国",
        performance: "Q3 起个人现金贷服务从曼谷拓展至春武里、孔敬、清迈等外府，最高额度 3 万泰铢、期限延至 9 个月",
        comment: "超级 App 数字信贷下沉外府=泰国信贷广告库存与合规要求同步变化。Jill 提醒做泰国现金贷的客户：本地持牌玩家在扩量，无牌玩家窗口在收窄。",
        source: "台泰时报 https://taithaitimes.com/article/detail/26546",
        tier: "sme"
      },
      {
        name: "UnionDigital Bank — LoanLite",
        publisher: "UnionDigital（菲律宾数字银行）",
        isChinese: false,
        markets: "菲律宾",
        performance: "9 月 8 日成为首家通过 App 提供 SSS LoanLite 小额贷款的银行：₱1000-20000、年利率 8%、15/30/60/90 天期限",
        comment: "数字银行开始对接国家级社保放贷=合规小额贷模式跑通。Jill 可给东南亚现金贷客户指方向：跟本地持牌机构合租通道比黑盒放贷安全得多。",
        source: "The Asian Banker https://live.theasianbanker.com/updates-and-articles/chime-moves-beyond-partner-bank-model-with-590-million-stride-acquisition",
        tier: "sme"
      },
      {
        name: "Trust Bank — Trust AI Ask",
        publisher: "Trust Bank（新加坡）",
        isChinese: false,
        markets: "新加坡",
        performance: "9 月 8 日上线生成式 AI 功能让用户用自然语言查询卡片消费；其 AI 客服已把人工咨询量砍半",
        comment: "数字银行进入「AI 功能当卖点」阶段。Jill 可跟金融科技客户聊：产品层 AI 化之后，获客素材也要跟着讲 AI 卖点，而不是老一套利率促销。",
        source: "The Asian Banker https://live.theasianbanker.com/updates-and-articles/chime-moves-beyond-partner-bank-model-with-590-million-stride-acquisition",
        tier: "sme"
      },
      {
        name: "AI PayLater（越南）",
        publisher: "Circle Asia × Visa × Pismo",
        isChinese: false,
        markets: "越南",
        performance: "Visa 与 Pismo 联合 Circle Asia 在越南推出首个 AI 驱动的 PayLater 信用卡，用替代数据给无征信人群授信",
        comment: "BNPL+替代数据授信在越南落地。Jill 可用这条跟出海金融客户聊越南机会：征信白区用替代数据放贷的玩法被大厂验证了，投放侧风控素材需要同步跟上。",
        source: "FinanceX Magazine https://www.financexmagazine.com/post/embedded-finance-grows-up-how-sustainability-and-inclusion-became-the-real-story-of-september-2026",
        tier: "sme"
      },
      {
        name: "泰国数字信贷监管风向",
        publisher: "泰国央行（行业动态）",
        isChinese: false,
        markets: "泰国",
        performance: "泰国将把快速增长的 BNPL 纳入央行专属牌照监管（2026 年底落地）；Clicx Bank 暂停近三周后以更严风控恢复数字放贷",
        comment: "监管收紧=洗牌信号。Jill 提醒东南亚现金贷客户：牌照化之后流量采买也会查资质，现在就该把持牌主体、白名单资质准备好，别等开户被拒才着急。",
        source: "Fintech News Singapore https://fintechnews.sg/thailand/",
        tier: "sme"
      }
    ],

    // —— AI 应用 ——
    ai: [
      {
        name: "可灵 AI（Kling）",
        publisher: "快手（北京可灵）",
        isChinese: true,
        markets: "全球 224 国",
        performance: "获国家 AI 产业投资基金 ¥14 亿入股，投后估值约 ¥1228 亿；Q2 营收超 ¥8.5 亿、同比 +200%；全球用户破 1 亿、企业客户近 5 万家",
        comment: "快手是易点天下已知合作客户，可灵的 C 端订阅+B 端获客双轮都在放量。Jill 可用「国家基金背书+全球 1 亿用户」跟视频生成工具客户聊：这个品类的投放竞赛才刚开始。",
        source: "界面新闻·AI 应用周度观察 https://k.sina.com.cn/article_5953740931_162dee08306703xtdo.html",
        tier: "head"
      },
      {
        name: "Kimi（月之暗面）",
        publisher: "月之暗面 Moonshot AI",
        isChinese: true,
        markets: "中国+出海筹备",
        performance: "9 月以保密形式递表港交所，投前估值目标 $500 亿；Kimi K3 发布后 6 月年化经常性收入达 $3 亿",
        comment: "大模型公司 IPO 前夜=品牌投放预算即将解禁。Jill 可提前布局：这类公司上市后一定有海外品牌与开发者获客需求，现在建立联系正当时。",
        source: "界面新闻·AI 应用周度观察 https://k.sina.com.cn/article_5953740931_162dee08306703xtdo.html",
        tier: "head"
      },
      {
        name: "GPT-6 Astra",
        publisher: "OpenAI",
        isChinese: false,
        markets: "全球",
        performance: "9 月 3 日发布新一代旗舰模型：105 万词元上下文、OSWorld 2.0 计算机操作评测 72.6%，单项任务时间从 75 分钟缩至 40 分钟",
        comment: "海外标杆继续拉高 AI 工具用户预期。Jill 可用「AI 产品迭代以周为单位」提醒国内 AI 应用客户：海外买量素材必须跟住产品迭代节奏，老素材转化率掉得极快。",
        source: "界面新闻·AI 应用周度观察 https://k.sina.com.cn/article_5953740931_162dee08306703xtdo.html",
        tier: "head"
      },
      {
        name: "Tipsy Chat",
        publisher: "国内团队（海外主体运营）",
        isChinese: true,
        markets: "欧美",
        performance: "2026 上半年 AI 陪伴赛道收入全球第 2（约 $1520 万）；年化订阅流水约 $5249 万、增速榜第一（环比 +39%），月活 307 万、同比 +65%",
        comment: "【中小潜力】UGC 互动叙事+创作激励玩法带来单月下载近 10 倍爆发。Jill 切入点：这类高增长团队买量紧迫感强，主推 Meta+TikTok 的订阅类优化打法，拿 LTV 数据说话。",
        source: "AI趣谈（今日头条转载） https://www.toutiao.com/article/7683763137362805299",
        tier: "sme"
      },
      {
        name: "Crushie AI",
        publisher: "国内团队（海外注册主体）",
        isChinese: true,
        markets: "欧美",
        performance: "2026 上半年全球 AI 陪伴收入榜第 4（$880 万），月活仅 34.5 万但 ARPU 为头部最高——订阅 $29.99/月，一年迭代 44 个版本",
        comment: "【中小潜力】小体量高客单的典型样本。Jill 可用「34.5 万月活做到 $880 万半年收入」跟客户算账：AI 陪伴拼的是付费深度不是买量规模，精准投放比铺量划算。",
        source: "AI趣谈（今日头条转载） https://www.toutiao.com/article/7683763137362805299",
        tier: "sme"
      },
      {
        name: "Mivora AI",
        publisher: "CamSoft AI Magic（上海子未网络科技）",
        isChinese: true,
        markets: "印度（占其流量 82.3%）",
        performance: "9 月 4 日登顶印度 Google Play 摄影应用榜第一，霸榜畅销榜 14 天；厂商旗下 App 全球累计下载 3267 万",
        comment: "【中小潜力】上海团队用「App 工厂」模式在印度跑出新爆款。Jill 切入点：批量试品的团队最需要弹性开户与快审渠道，用「多 App 矩阵统一代投」方案去谈。",
        source: "人人都是产品经理（今日头条转载） https://www.toutiao.com/article/7682992015105212991",
        tier: "sme"
      },
      {
        name: "Articuler.ai",
        publisher: "Articuler（2024 年成立）",
        isChinese: true,
        markets: "全球（欧美白领职场场景）",
        performance: "9 月 9 日宣布完成数千万元种子轮（麟阁创投领投）；覆盖全球 9.8 亿白领职业档案，订阅 ARR 已超 $100 万",
        comment: "【中小潜力】AI 职业社交新玩家，CTO 出自探探。Jill 切入点：刚融资的团队半年内必开投放，用「职场人群 LinkedIn 之外的增量获客」话题去聊，正赶上预算规划期。",
        source: "网易智能 https://www.163.com/tech/article/L6CODQQ300098IEO.html",
        tier: "sme"
      },
      {
        name: "Deepsearch AI",
        publisher: "TapSuite（土耳其 HubX 旗下）",
        isChinese: false,
        markets: "巴西/拉美",
        performance: "近 30 天双端下载 419.6 万（环比 +100.8%）、内购 $189.5 万（+171.6%），9 月 9 日登巴西 Google Play 免费总榜第 9；近半收入来自巴西",
        comment: "「AI 找人/背调」赛道在拉美爆发（拉美 30 天付费超 $100 万）。Jill 可提醒拉美市场客户：AI 工具类需求正从通用品类切向垂直场景，垂类 App 是买量洼地。",
        source: "36氪·扬帆出海 https://www.36kr.com/p/3978208406321924",
        tier: "sme"
      },
      {
        name: "有道 AI 订阅产品矩阵",
        publisher: "网易有道（NYSE: DAO）",
        isChinese: true,
        markets: "中国+海外",
        performance: "Q2 财报显示 AI 订阅服务销售额约 ¥1 亿创新高、同比 +40%；子应用持续推新并登陆海外",
        comment: "「母大子小」样本：教育大厂用矩阵式 AI 子应用做订阅。Jill 可跟教育类客户聊：子 App 独立投放、预算单列，正是代理切入的机会窗口。",
        source: "网易有道 2026 Q2 财报 https://download.ydstatic.com/zhiyun/Youdao-2Q26ER.pdf",
        tier: "head"
      },
      {
        name: "千诀科技（机器人大脑）",
        publisher: "千诀科技（清华孵化，2023 成立）",
        isChinese: true,
        markets: "中国/海外筹备",
        performance: "9 月披露数亿元 A+轮融资（元禾厚望、筱光资本等），做机器人的具身大脑基础设施",
        comment: "具身智能融资继续加码。虽非 App 客户，Jill 可留作谈资：AI 融资热度向硬件延伸，说明 AI 预算盘子还在扩——跟客户聊行业热度时这是好素材。",
        source: "AI趣谈（今日头条转载） https://www.toutiao.com/article/7683763137362805299",
        tier: "sme"
      }
    ],

    // —— 教育 ——
    education: [
      {
        name: "Gauth: AI Study Companion",
        publisher: "字节跳动（GAUTHTECH PTE. LTD.）",
        isChinese: true,
        markets: "美国/全球",
        performance: "入选 a16z 全球消费级 AI 移动应用 Top50 教育类席位，与 Brainly/Photomath 同榜；全球 AI 教育市场 2026 年预计 $114 亿（Grand View Research）",
        comment: "字节是易点天下已知合作客户，Gauth 是「母大子小」的典型。Jill 可用 a16z 榜单跟教育客户聊：拍照答疑+AI 订阅的商业模式已被验证，垂类教育工具的海外空间还在打开。",
        source: "36氪·霞光AI实验室 https://www.36kr.com/p/3978810169038470",
        tier: "head"
      },
      {
        name: "Think Academy 学而思国际",
        publisher: "好未来 TAL",
        isChinese: true,
        markets: "美国/新加坡/马来西亚",
        performance: "美国线上长期班体系持续扩张（Core+/Honors/Challenge 三轨），2024 年成为国际数学奥林匹克官方赞助商，新加坡维持多校区运营",
        comment: "头部教培的海外校区持续扩张=持续招生投放需求。Jill 切入点：K12 海外校区主投 Google 搜索+家长社群，正需要多地区多账户的合规开户方案。",
        source: "Think Academy 官网 https://www.thethinkacademy.com/inperson/campuses/cupertino",
        tier: "head"
      },
      {
        name: "Perspeak AI",
        publisher: "华人创业团队（创始人 Courtney）",
        isChinese: true,
        markets: "北美留学生/职场",
        performance: "聚焦留学生在讨论与发言中的沟通训练，用「做了什么+怎么改进」替代打分制评价体系，产品逻辑完成一次推倒重构",
        comment: "【中小潜力】华人团队把东亚训练法 AI 化卖给全球学习者。Jill 切入点：留学生群体高度集中在 Google 搜索+小红书海外版+校园渠道，帮客户做组合获客方案是抓手。",
        source: "36氪·霞光AI实验室 https://www.36kr.com/p/3978810169038470",
        tier: "sme"
      },
      {
        name: "薯塔AI",
        publisher: "华人创业团队（Pmis 参与创办）",
        isChinese: true,
        markets: "全球",
        performance: "聚焦课件阅读场景的 AI 学习工具，属于避开巨头正面竞争、扎进学习过程细小问题的新一批轻量团队",
        comment: "【中小潜力】轻量 AI 教育工具的代表。Jill 切入点：这类团队人少预算薄，用「小额起投+按效果优化」的低门槛方案切入，先合作再扩量。",
        source: "36氪·霞光AI实验室 https://www.36kr.com/p/3978810169038470",
        tier: "sme"
      },
      {
        name: "Inspired AI",
        publisher: "华人创业团队（创始人贾子健）",
        isChinese: true,
        markets: "全球",
        performance: "切入语言听说训练的 AI 教育产品，与薯塔AI、Perspeak AI 同批被 36 氪报道为「东亚教育 AI 出海」代表样本",
        comment: "【中小潜力】语言听说类 AI 工具又一个新玩家。Jill 可把三家打包成一个观察：「AI 教育出海进入细分场景窗口期」，用这个趋势打动还在观望的教育客户尽快下场。",
        source: "36氪·霞光AI实验室 https://www.36kr.com/p/3978810169038470",
        tier: "sme"
      },
      {
        name: "YoLearn",
        publisher: "YoLearn（印度）",
        isChinese: false,
        markets: "印度",
        performance: "9 月获 ABP Education 领投种子轮；K12 AI 家教支持 22 种印度本土语言，主打交互式手绘白板+学习者记忆图谱",
        comment: "【中小潜力】印度本土 AI 教育被资本加注。Jill 可提醒教育出海客户：印度不是只有低价流量，本土 AI 家教已经在抢时间——要进印度市场得趁早。",
        source: "腾讯新闻 https://new.qq.com/rain/a/20260908A0A6DY00",
        tier: "sme"
      },
      {
        name: "幻课 APP",
        publisher: "杭州风峦教育科技（2025-04 成立）",
        isChinese: true,
        markets: "中国（出海未公开）",
        performance: "9 月完成数千万元天使+轮（半年内第三轮）；公测首月付费用户破万、使用用户近 30 万，下半年还将推出定价约 ¥6000 的桌面伴学机器人",
        comment: "【中小潜力】国内 AI 教育融资低潮里半年三轮的逆势样本。Jill 可用「低龄段 AI 学习付费意愿强」跟客户聊品类信心，也为将来其出海布局预留触达。",
        source: "搜狐 https://m.sohu.com/a/1073985238_115035",
        tier: "sme"
      },
      {
        name: "Learna AI",
        publisher: "DEEP FLOW SOFTWARE SERVICES（土耳其 Codeway）",
        isChinese: false,
        markets: "全球",
        performance: "a16z 全球消费级 AI 应用 Top50 在榜教育产品之一，与 Gauth/Brainly/Photomath 同榜，验证 AI 语言学习订阅的全球需求",
        comment: "非中国竞品却是好谈资。Jill 可用「土耳其团队都能做到 Top50」刺激国内语言学习客户：赛道没饱和，缺的是投放执行力。",
        source: "36氪·霞光AI实验室 https://www.36kr.com/p/3978810169038470",
        tier: "sme"
      }
    ]
  },

  // ============================================================
  // 三、热点时间线 hotEvents
  // ============================================================
  hotEvents: [
    {
      title: "可灵 AI 获国家 AI 基金 ¥14 亿入股，投后估值约 ¥1228 亿",
      date: "2026-08-31",
      summary: "国家人工智能产业投资基金入股快手旗下北京可灵，腾讯、阿里、百度等产业资本在列；Q2 营收超 ¥8.5 亿(+200%)",
      bizValue: "国产 AI 视频工具获国家队背书。Jill 跟 AI 工具客户聊时可以此证明：视频生成品类融资热度和商业化能力都在顶部，投放竞赛会加剧，早开户早卡位。",
      source: "界面新闻·AI 应用周度观察 https://k.sina.com.cn/article_5953740931_162dee08306703xtdo.html",
      tag: "high-growth"
    },
    {
      title: "月之暗面保密递表港交所，投前估值目标 $500 亿",
      date: "2026-09-02",
      summary: "Kimi K3 带动 6 月年化收入 $3 亿；上市前最后一轮融资 8 月 27 日完成首批交割",
      bizValue: "AI 大厂 IPO 窗口开启。上市后必有海外品牌与开发者获客预算，Jill 可现在就建立联系、上市后第一时间切入。",
      source: "界面新闻·AI 应用周度观察 https://k.sina.com.cn/article_5953740931_162dee08306703xtdo.html"
    },
    {
      title: "两款中国 AI 陪伴 App 半年吸金 $2400 万，全球前四占两席",
      date: "2026-09-10",
      summary: "Tipsy Chat（H1 $1520 万，全球第 2）与 Crushie AI（H1 $880 万，全球第 4）均出自中国团队，靠高客单订阅而非流量规模",
      bizValue: "【新兴机会】AI 陪伴被验证为「小团队高客单」最佳赛道。Jill 可主动搜同类新 App 的团队（多为 10-30 人小团队），用订阅类投放打法方案敲门。",
      source: "AI趣谈 https://www.toutiao.com/article/7683763137362805299",
      tag: "emerging"
    },
    {
      title: "「AI 找人」App Deepsearch 登巴西免费榜第 9，月下载 400 万",
      date: "2026-09-09",
      summary: "土耳其 HubX 旗下 TapSuite 出品；近 30 天内购 $189.5 万(+171.6%)，拉美用户 30 天付费超 $100 万",
      bizValue: "【新兴机会】拉美 AI 垂类需求爆发。Jill 可把「巴西=AI 垂类工具下一个金矿」讲给还在卷欧美的 AI 工具客户，帮其做拉美增量布局。",
      source: "36氪·扬帆出海 https://www.36kr.com/p/3978208406321924",
      tag: "emerging"
    },
    {
      title: "HubX 获 Point72 $7500 万首笔外部融资，启动收购战略",
      date: "2026-08-28",
      summary: "土耳其 App 工厂 HubX 成立 4 年首次接受外部投资，将用于收购；旗下 TapSuite 工作室正招聘扩张",
      bizValue: "App 工厂模式被美元基金认可。Jill 可接触国内的 CamSoft 类 App 工厂团队：矩阵式产品最吃「多账户+快审+弹性预算」的代理服务。",
      source: "36氪·扬帆出海 https://www.36kr.com/p/3978208406321924",
      tag: "emerging"
    },
    {
      title: "AI 职业社交 Articuler.ai 完成数千万元种子轮",
      date: "2026-09-09",
      summary: "麟阁创投领投，小米联创王川家族办公室跟投；覆盖 9.8 亿白领档案、ARR 超 $100 万，创始人来自 SOSV/Hedosophia",
      bizValue: "【新兴机会】刚融资的 AI 社交团队投放需求将在 1-2 个季度内释放。Jill 建议本周就约，用「职场人群增量获客」方案切入。",
      source: "网易智能 https://www.163.com/tech/article/L6CODQQ300098IEO.html",
      tag: "emerging"
    },
    {
      title: "微牛证券 Webull 约 $1 亿收购泰国 Pi Securities",
      date: "2026-09-09",
      summary: "Webull 持续加码东南亚财富管理，泰国成为华人背景券商出海新焦点",
      bizValue: "【合作机会】券商跨境并购后的整合期是投放预算高峰。Jill 可跟进东南亚金融客户与新进玩家，主打「新市场冷启动+合规开户」组合服务。",
      source: "Fintech News Singapore https://fintechnews.sg/thailand/",
      tag: "cooperation"
    },
    {
      title: "8 月海外短剧内购 $2.89 亿(+6%)，DramaBox/ReelShort/NetShort 占 Top20 半壁",
      date: "2026-09-10",
      summary: "8 月下载 2.80 亿次微降、收入环比 +6%；DramaWave 登顶下载榜（单月 3100 万+），PineDrama 列下载第 5",
      bizValue: "短剧进入「收入涨、下载稳」的精细化阶段。Jill 跟短剧客户聊时强调：买量打法从拉新转向 LTV 优化，正是代理专业度溢价的机会。",
      source: "DataEye 研究院（澎湃转载） https://www.thepaper.cn/newsDetail_forward_34044251"
    },
    {
      title: "短剧财报季：昆仑万维 AI 短剧半年收入 ¥15.35 亿(+163%)，毛利率 67.49%",
      date: "2026-08-31",
      summary: "昆仑 DramaWave+FreeReels 单月流水超 $6500 万；但全行业仍在被买量成本挤压利润，中文在线、掌阅短剧收入占比大涨仍亏损",
      bizValue: "AI 短剧毛利率 67% 但净利被流量成本吃掉。Jill 可用「成本结构决定生死」跟短剧客户聊：投放效率每提升 1 个点都是利润——这是代理价值最直观的讲法。",
      source: "白鲸出海·WaveGlocal https://www.baijing.cn/article/56543",
      tag: "high-growth"
    },
    {
      title: "JoyReels 收入环比 +100%，首次跻身海外短剧收入 TOP10",
      date: "2026-09-10",
      summary: "掌中云旗下 JoyReels 名次提升 6 位进入 8 月收入榜第 10；同期 VibeShort 单月内购破 $890 万、StoryReel 破 $830 万",
      bizValue: "【新兴机会】中腰部短剧平台正在逆袭头部。Jill 可重点跟进掌中云这类腰部玩家：正处在放量关键期，代理报价与素材产能的支持最容易切进去。",
      source: "DataEye 研究院（澎湃转载） https://www.thepaper.cn/newsDetail_forward_34044251",
      tag: "emerging"
    },
    {
      title: "韩国 Vigloo 8 月收入 +135%，与德/乌/以色列产品同入围收入 TOP20",
      date: "2026-09-10",
      summary: "8 月收入 TOP20 中出现 4 家海外本土短剧 App：Vigloo（韩）、CandyJarTV（德，收入环比 +75%）、My Drama（乌克兰）、Shortical（以色列）",
      bizValue: "【新兴机会】本土玩家在抢中国厂商的腹地。Jill 可提醒短剧客户：欧洲本土 App 已进榜，欧洲市场不能只当翻译剧的倾销地，要加本地化制作与投放预算。",
      source: "DataEye 研究院（澎湃转载） https://www.thepaper.cn/newsDetail_forward_34044251",
      tag: "emerging"
    },
    {
      title: "豪腾创想首次闯入全球 APP 发行商 TOP30，收入环比 +120%",
      date: "2026-09-10",
      summary: "小游戏巨头靠《遗弃之地》APP 版突围，「小游戏→APP」溢出效应显现；上半年小程序游戏市场收入 ¥316.57 亿(+36%)",
      bizValue: "【新兴机会】小游戏厂商 APP 化是全新客群。Jill 可梳理一份「小游戏厂商 APP 化」名单逐家触达，用「海外 APP 盘子比小游戏大」做开场。",
      source: "Sensor Tower 2026-08 月报（漫游manyou 全文版）",
      tag: "emerging"
    },
    {
      title: "MoboReels《Came Back Hotter With Lord's Twins》登顶 8 月海外短剧百强榜",
      date: "2026-09-08",
      summary: "「带球跑」题材 AI 剧登顶（热值 1781 万，与第二名仅差 0.2 万）；DramaWave 包揽 AI 榜 TOP3；本期 15 部新剧上榜",
      bizValue: "AI 剧已能稳定登顶百强热榜。Jill 可用「AI 剧登顶」催短剧客户上 AI 产线：产能决定投流素材供给，产线落地后预算自然翻倍。",
      source: "DataEye 研究院（白鲸出海转载） https://www.baijing.cn/article/56622"
    },
    {
      title: "三七互娱《Last Asylum: Plague》单月出海收入破 $2500 万",
      date: "2026-09-10",
      summary: "环比 +37%，超越《Puzzles & Survival》成三七收入第一，跻身全球 4X 收入榜第 7；美国贡献 36% 收入",
      bizValue: "三七（已知合作客户）新品放量成功。Jill 可用这条向 SLG 客户证明：2026 年 4X 新品仍在起量，关键在赛季内容+买量节奏配合。",
      source: "Sensor Tower 2026-08 月报 https://finance.eastmoney.com/a/202609103870379130.html"
    },
    {
      title: "阿里约 ¥101 亿出售灵犀互娱，上半年自研游戏出海收入 $123.72 亿(+30.22%)",
      date: "2026-08-20",
      summary: "灵犀《三国志·战略版》流水同比 -14.38%；游戏工委数据：上半年出海收入增速创近五年新高，美日韩合计占 53.84%",
      bizValue: "一边是头部资产易主、一边是出海大盘创新高。Jill 的讲法：「存量团队在换手、增量市场在扩容」——被并购团队与新东家都是新预算来源。",
      source: "Sensor Tower 2026-08 月报（漫游manyou 全文版）"
    },
    {
      title: "国家新闻出版署 8 月发放 209 款国产游戏版号",
      date: "2026-08-31",
      summary: "另有 6-8 款进口游戏获批；上半年小程序游戏收入 ¥316.57 亿(+36.01%)，微信+抖音双平台 4.3 万款游戏参与投放(+24.4%)",
      bizValue: "版号常态化+小游戏高增=国内厂商海外化动力更足。Jill 可用「版号拿到就得出海回本」的逻辑，跟刚拿到版号的中腰部厂商聊海外发行预算。",
      source: "Sensor Tower 2026-08 月报（漫游manyou 全文版）"
    },
    {
      title: "《和平精英》大陆 iOS 累计收入破 $80 亿，暑期档腾讯包揽中国 iOS Top5",
      date: "2026-09-10",
      summary: "《和平精英》8 月收入环比 +18%、《三角洲行动》+27%；《金铲铲之战》环比 +130%",
      bizValue: "腾讯系产品持续吸金。Jill 留作客户会谈时的行业基准数据：说明头部效应增强，中小厂商更要靠细分品类和新兴市场突围——顺势引出易点的差异化服务。",
      source: "Sensor Tower 2026-08 月报 https://finance.eastmoney.com/a/202609103870379130.html"
    },
    {
      title: "OpenAI 发布 GPT-6 Astra，AI 工具用户预期再被拉高",
      date: "2026-09-03",
      summary: "105 万词元上下文、计算机操作评测 72.6%、API 定价输入 $10/百万词元；率先向企业客户开放",
      bizValue: "AI 应用客户的产品卖点迭代速度决定素材寿命。Jill 可将其转化为服务话术：为 AI 客户配置「周更素材」流水线，跟住产品节奏。",
      source: "界面新闻·AI 应用周度观察 https://k.sina.com.cn/article_5953740931_162dee08306703xtdo.html"
    },
    {
      title: "有道 Q2：AI 订阅销售额约 ¥1 亿(+40%)，连续八季度经营盈利",
      date: "2026-08-20",
      summary: "子应用推新与升级带动 AI 订阅创新高；学习服务收入 ¥7.96 亿(+20.9%)",
      bizValue: "「母大子小」样本持续产出：教育大厂用矩阵子应用跑订阅。Jill 可类比给教育客户：与其押注一个大产品，不如矩阵试品+独立投放。",
      source: "网易有道 2026 Q2 财报 https://download.ydstatic.com/zhiyun/Youdao-2Q26ER.pdf"
    },
    {
      title: "印度 YoLearn 获种子轮：K12 AI 家教支持 22 种本土语言",
      date: "2026-09-08",
      summary: "ABP Education 领投；主打交互手绘白板+记忆图谱，适配印度课程大纲与升学考试",
      bizValue: "印度本土 AI 教育融资加速。Jill 提醒教育客户：印度市场窗口在收窄，若布局需尽快；易点可提供印度市场的本地化投放组合。",
      source: "腾讯新闻 https://new.qq.com/rain/a/20260908A0A6DY00"
    },
    {
      title: "8 月国产版号常态化下乙女/篮球/换装品类多款暴涨",
      date: "2026-09-10",
      summary: "《心跳陷落》流水升 73 位、《最强美职篮》+63 位、《以闪亮之名》+56 位；腾讯光子《奥星热浪》开测",
      bizValue: "细分品类节奏性爆发的机会窗口。Jill 可用「品类轮动」思路给中小游戏客户排投放档期：押对下一个细分品类比追大厂爆款划算。",
      source: "Sensor Tower 2026-08 月报（漫游manyou 全文版）"
    },
    {
      title: " Grab Quick Cash 扩张泰国外府：额度提至 3 万泰铢",
      date: "2026-09-02",
      summary: "从曼谷拓展至春武里、孔敬、清迈，最长期限 9 个月，全流程线上化",
      bizValue: "泰国信贷玩家下沉=二线城市信贷需求被验证。Jill 提醒东南亚金融客户：下沉市场流量红利还在，但配套的本地资质要求会同步收紧。",
      source: "台泰时报 https://taithaitimes.com/article/detail/26546"
    },
    {
      title: "泰国 BNPL 将纳入央行专属牌照监管（2026 年底）",
      date: "2026-09-04",
      summary: "泰国央行拟为快速增长的先买后付设立专属牌照制度；Clicx Bank 暂停近三周后以更严风控恢复放贷",
      bizValue: "东南亚信贷监管收紧进行时。Jill 可把「牌照+白名单资质代办」打包成金融服务，客户在泰国的开户与投放都会查资质。",
      source: "Fintech News Singapore https://fintechnews.sg/thailand/"
    },
    {
      title: "白鲸出海 Global Growth Summit & Applied AI Summit 9 月 17 日举办",
      date: "2026-09-17",
      summary: "白鲸出海一年一度行业峰会（明天开幕），聚焦出海增长与 AI 应用，出海开发者、平台、代理商齐聚",
      bizValue: "【合作机会】明天开幕！Jill 若能到场，是集中认识出海厂商 BD/增长负责人的最高效场合；到场不了也要会后跟进嘉宾名单做二次触达。",
      source: "白鲸出海 https://www.baijing.cn:8443/",
      tag: "cooperation"
    },
    {
      title: "8 月短剧投放观察：好剧投放周期从 1-2 个月缩至 1 周",
      date: "2026-09-09",
      summary: "行业观察显示 AI 剧产能爆发后好剧迭代太快，单剧投放窗口大幅缩短；用户对慢节奏剧忍耐度下降，质量竞争加剧",
      bizValue: "投放节奏加快=对代理响应速度要求更高。Jill 可用「一周起量、一周收尾」的节奏说服短剧客户：需要能当天开户、当天上素材的代理，这正是易点的优势话术。",
      source: "shortdramadata.com 行业观察（付费短剧日报 2026-09-09）"
    }
  ],

  // ============================================================
  // 四、政策 deadline policies
  // ============================================================
  policies: [
    {
      platform: "Google",
      title: "【14 天内生效】Google 搜索/PMax 语言定位设置简化",
      date: "2026-09-30",
      detail: "9 月下旬起搜索广告系列移除广告系列级语言定位（按广告所用语言自动匹配）；PMax 在 Google 搜索上同样改用广告语言匹配，其他渠道仍沿用原设置",
      impact: "medium",
      categories: ["电商", "游戏", "AI"],
      bizValue: "多语言投放客户要重点检查：语言匹配逻辑变了，搜术语和非搜索渠道的流量结构都会变。Jill 提醒客户提前梳理多语言广告系列，避免东南亚/中东多语市场流量错配。",
      source: "省广营销·出海服务周报 https://www.gimc-hk.com/?p=2190"
    },
    {
      platform: "Google",
      title: "【15 天内生效】Google Local Services Ads 未接来电计费",
      date: "2026-10-01",
      detail: "10 月 1 日起 LSA 开始对「工作时间响铃超 20 秒未接」的来电和 15 天内的 1 次跟进来电收费",
      impact: "low",
      categories: ["电商"],
      bizValue: "影响本地服务类广告主。Jill 提醒客户优化接听流程，否则会为漏接电话白花钱。非主流出海品类但值得知晓。",
      source: "DigiPath·Google Ads Updates September 2026 https://digipathagency.com/google-ads-updates-september-2026"
    },
    {
      platform: "Google",
      title: "【16 天内生效】Google Tag Manager 停止支持 gtag('config')",
      date: "2026-10-02",
      detail: "10 月 2 日起 GTM 代码段内的 gtag('config') 命令停止生效，需改用 gtag.js 代码或 gtm init 触发器，否则 Google Ads/GA4 标签配置失效",
      impact: "medium",
      categories: ["电商", "隐私"],
      bizValue: "技术性变更但杀伤面大：没改造的客户转化数据会直接断流，投放优化全瞎。Jill 可用「帮客户免费检查埋点」做触达由头，顺带推归因诊断服务。",
      source: "DigiPath·Google Ads Updates September 2026 https://digipathagency.com/google-ads-updates-september-2026"
    },
    {
      platform: "Google",
      title: "【19 天内生效】Google「政府文件和服务」政策修订",
      date: "2026-10-05",
      detail: "10 月 5 日起只有「授权提供方」（获政府明确授权且被政府官网公开引用）可投放政府文件/服务类广告；商业合同、营业执照、企业注册信息均不算有效授权；广告定向还须限定在授权地域内",
      impact: "high",
      categories: ["加白名单/资质", "电商"],
      bizValue: "签证代办、移民服务、证件办理类广告主要提前做认证（审核约 10-12 个工作日），9 月底才提交可能赶不上。Jill 可用这条催有相关业务的客户立刻启动认证。",
      source: "Google Ads 帮助中心官方公告 https://support.google.com/adspolicy/answer/17260489?hl=zh-Hans"
    },
    {
      platform: "Google",
      title: "【26 天内生效】DV360 移除品牌安全排除项 + YouTube 响应式广告强制企业身份",
      date: "2026-10-12",
      detail: "10 月 1 日起 DV360 API/结构化数据文件移除数字内容标签排除与大部分敏感类别排除；10 月 12 日起创建/更新 YouTube 响应式广告必须提供企业名称和 Logo",
      impact: "medium",
      categories: ["电商", "游戏"],
      bizValue: "品牌安全控制收窄+广告创建流程强制身份素材。Jill 提醒用 DV360 跑量的大客户提前检查 API 工作流，避免 10 月批量上传失败。",
      source: "Biz Brief（引 Search Engine Land / Google Ads Developers 官方博客） https://bizbrief.ie/news/marketing/google-announces-major-october-update-to-display-video-360-dv360-api-what-advertisers-need-to-know"
    },
    {
      platform: "Google",
      title: "Google 金融服务验证扩至 13 个 EEA 市场已生效",
      date: "2026-09-15",
      detail: "9 月 15 日起对保加利亚、克罗地亚、希腊、波兰等 13 个新增 EEA 国家逐步实施金融服务验证：须先通过 G2 合规验证，再以第一方/授权广告主身份向 Google 申请，须证明持有当地金融监管直接授权或豁免资格",
      impact: "high",
      categories: ["现金贷", "金融", "加白名单/资质"],
      bizValue: "已生效！未完成 G2 验证的金融客户广告已被暂停。Jill 可把「G2 验证+欧盟牌照资料准备」做成代办服务主动扫一遍金融客户名单。",
      source: "Google 官方公告（省广营销转载） https://www.gimc-hk.com/?p=2190"
    },
    {
      platform: "Google",
      title: "Google DSA 强制迁移 AI Max 推迟至 2027 年 2 月",
      date: "2026-09-10",
      detail: "动态搜索广告（DSA）自动迁移 AI Max 的时间从 2026 年 9 月推迟到 2027 年 2 月 1-28 日；9 月起仅在账户内出现升级提示，不会自动切换",
      impact: "low",
      categories: ["AI", "电商"],
      bizValue: "缓刑窗口！依赖 DSA 的客户多出近半年准备期。Jill 可用「迁移延后但必来」提醒客户提前在测试账户验证 AI Max 效果，别拖到最后被动切换。",
      source: "DigiPath·Google Ads Updates September 2026 https://digipathagency.com/google-ads-updates-september-2026"
    },
    {
      platform: "Meta",
      title: "Meta AI 生成内容强制标注+自动检测",
      date: "2026-06-01",
      detail: "广告主在发布涉及社会议题/选举/政治的广告中使用 AI 生成或修改素材必须自我披露；6 月起 Meta 用自动检测（C2PA 元数据等）给第三方 AI 工具生成的广告素材打「AI info」标签，广告主无法移除；「未披露 AI 内容」已成第三大拒登原因（占拒登 14%）",
      impact: "high",
      categories: ["AI", "隐私", "电商"],
      bizValue: "AI 素材大户（短剧/漫剧/AI 应用）最容易踩坑。Jill 提醒客户：AI 生成素材主动披露+保留生成记录，拒登率高会拖累账户健康度。",
      source: "1ClickReport·Meta Ad Policy Changes 2026 https://www.1clickreport.com/blog/meta-ad-policy-changes-2026-compliance-guide"
    },
    {
      platform: "Meta",
      title: "Meta HEC 特类广告改为 AI 主动扫描",
      date: "2026-08-01",
      detail: "住房/就业/信贷（HEC）特殊广告类别从「投诉后审查」改为 AI 分类器在首次曝光前主动扫描所有广告，误判率上升导致健康与美妆类拒登率一夜跳升 34%",
      impact: "medium",
      categories: ["金融", "电商"],
      bizValue: "信贷类客户素材受影响最大。Jill 建议金融客户提前用 Meta 的 HEC 类别声明流程+素材预审，减少误判拒登。",
      source: "1ClickReport·Meta Ad Policy Changes 2026 https://www.1clickreport.com/blog/meta-ad-policy-changes-2026-compliance-guide"
    },
    {
      platform: "Meta",
      title: "Meta 金融服务与加密广告规则更新",
      date: "2026-08-15",
      detail: "Meta 更新金融服务相关广告政策：加密货币/金融服务广告主资质要求收紧，无牌主体（含离岸架构）不得向受监管市场投放；素材中的收益承诺与「压力话术」被重点拦截",
      impact: "high",
      categories: ["金融", "现金贷"],
      bizValue: "离岸持牌架构不再保险。Jill 可用「Meta 名单制准入」帮客户评估：牌照在哪些市场被 Meta 认可、哪些必须走代理白名单渠道开户。",
      source: "1ClickReport·Meta Ad Policy Changes 2026 https://www.1clickreport.com/blog/meta-ad-policy-changes-2026-compliance-guide"
    },
    {
      platform: "TikTok",
      title: "TikTok 禁用「前后对比」素材 + 物流信息强制披露 + 三振永封",
      date: "2026-09-05",
      detail: "TikTok 广告全面禁止 before/after 转变对比类素材（含 UGC 分屏）；电商广告必须标注发货国与预计时效（格式：Shipped from X, X-Y days delivery），并与其 TikTok Shop 实际履约数据交叉核验；违规三次直接永久封户且不可申诉",
      impact: "high",
      categories: ["电商", "短剧"],
      bizValue: "三振永封没有申诉=违规成本无限大。Jill 提醒电商客户自查所有在投和暂停素材（重新启用旧素材也会触发违规），健康/美妆/健身类首当其冲。",
      source: "Gromerce（引 TikTok Ads Help Center 2026-09） https://gromerce.com/en/blog/tiktok-dropshipping-compliance-shipping-ban-2026"
    },
    {
      platform: "TikTok",
      title: "TikTok 落地页倒计时须有真实截止日 + 跳转两跳限制",
      date: "2026-08-20",
      detail: "8 月更新将「人工制造紧迫感」的审核延伸到落地页：无真实截止日的倒计时直接拒登或限流；广告点击到最终页超过两跳（域名轮换/geo 分流叠加 tracker）触发自动审核或拒登；仿新闻站、第一人称见证式 pre-lander 在像素验证阶段即被标记",
      impact: "high",
      categories: ["加白名单/资质", "电商", "现金贷"],
      bizValue: "灰色跑法空间被大幅压缩。Jill 可反向营销：帮客户把 funnel 改成「点击→服务端 tracker→最终页」的合规结构，过审率就是竞争力。",
      source: "Mintec（引 TikTok 官方政策与行业观察） https://www.mintec.co/blog/tiktok-mid-funnel-policy"
    },
    {
      platform: "TikTok",
      title: "TikTok 归因基建 9 月 1 日重建：服务端 postback + SKAN 4.0",
      date: "2026-09-01",
      detail: "9 月 1 日起 TikTok 重建归因架构：服务端 postback 与 SKAdNetwork 4.0 直通；像素-only 追踪被更精准惩罚，合规 funnel 的 CPA 反而下降 22-34%",
      impact: "medium",
      categories: ["游戏", "电商", "AI"],
      bizValue: "归因信号变干净=灰色跑法先死。Jill 可用「迁移窗口期 CPA 更低」劝客户尽早上服务端追踪（RedTrack/Voluum 等原生集成几分钟搞定），合规者吃到 CPM 红利。",
      source: "Mintec（引 Affiliate Times 2026-09-05） https://www.mintec.co/blog/tiktok-mid-funnel-policy"
    },
    {
      platform: "TikTok",
      title: "TikTok Custom Identity 全面取消，广告必须挂验证企业号",
      date: "2026-01-15",
      detail: "TikTok 移除 Custom Identity 功能：所有广告系列必须关联已验证的 TikTok Business 企业号；AI 生成的名人声音/形象/脚本若无授权与披露将被直接拒登",
      impact: "medium",
      categories: ["加白名单/资质", "AI", "短剧"],
      bizValue: "代开「个人户」渠道彻底死亡，企业号验证成为开户前置。Jill 提醒还在用非正规账户的客户尽快转正规开户，避免连坐封禁。",
      source: "TikAdSuite（引 TikTok 官方 2026-01 公告） https://tikadsuite.com/?p=1530/"
    },
    {
      platform: "新加坡",
      title: "新加坡《社交媒体服务行为准则》：Meta/TikTok 付费金融广告须持 MAS 牌照",
      date: "2026-08-18",
      detail: "新加坡警察部队依据《在线犯罪危害法》发布新行为准则：Facebook/Instagram/TikTok 不得为无 MAS 牌照（或未获持牌方授权）的主体投放金融服务广告，平台 2027 年 1 月 31 日前完成合规；广告主定义宽泛——代理商、网红、联盟中介均在列；平台须事前审查全部广告（含 URL 隐蔽、不现实收益承诺）、24 小时内处理举报",
      impact: "high",
      categories: ["金融", "现金贷", "加白名单/资质"],
      bizValue: "离岸券商/外汇/加密盘在新加坡的付费投放通道将关闭（不合规拟罚最高 S$1000 万）。Jill 提醒金融客户：新加坡市场要么持牌要么退出，代理商也会被连带追责。",
      source: "Financial Investor 24 https://www.financialinvestor24.com/2026/09/03/singapore-financial-ad-rules-target-unlicensed-brokers-on-facebook-and-tiktok/"
    },
    {
      platform: "泰国",
      title: "泰国 BNPL 纳入央行专属牌照监管（2026 年底落地）",
      date: "2026-09-04",
      detail: "泰国央行将为快速增长的先买后付/数字借贷设专属牌照制度；此前 Clicx Bank 已因风控整改暂停近三周",
      impact: "medium",
      categories: ["金融", "现金贷"],
      bizValue: "又一个东南亚市场信贷牌照化。Jill 建议客户盘点泰国业务主体资质，提前规划持牌或与持牌方合作的路线，避免年底一刀切。",
      source: "Fintech News Singapore https://fintechnews.sg/thailand/"
    },
    {
      platform: "泰国",
      title: "泰国 2027 年 2 月起实施数字资产 Travel Rule",
      date: "2026-09-03",
      detail: "泰国 SEC 要求数字资产运营商自 2027 年 2 月 27 日起共享转账发送方与接收方信息；多家平台已提前接入合规方案",
      impact: "low",
      categories: ["金融"],
      bizValue: "加密出海的合规成本再+1。Jill 留作金融客户谈资：合规基础设施在东南亚全面铺开，纯灰色打法的时间窗口所剩无几。",
      source: "Fintech News Singapore https://fintechnews.sg/thailand/"
    }
  ],

  // ============================================================
  // 五、广告服务商侧小道消息 agencyIntel
  // ============================================================
  agencyIntel: [
    {
      title: "2026 三平台返点行情：TikTok 5-10% / Meta 3-7% / Google 3-8% 且持续退坡",
      date: "2026-09-10",
      summary: "行业最新观察：TikTok 政策最灵活（以广告金返还，消耗越大阶梯越高）；Meta 2025 年起大幅削减且不再区分直客/非直客；Google 游戏和 APP 端返点 2022 年已取消，2026 年预计全面取消新客返点。「20-40% 高返点」均为共享户套利或骗局",
      bizValue: "Jill 报价时的锚：TikTok 返点是三大平台里最能打的筹码；Meta/Google 要主动引导客户从「拼返点」转向「拼效果与账户健康度」，反而衬托易点的优化服务价值。",
      source: "邦阅网 52by.com https://www.52by.com/article/212043",
      impact: "high"
    },
    {
      title: "TikTok 新客激励：30 天内最高返 $6000（五档阶梯）",
      date: "2026-09-10",
      summary: "首次开户 30 天内：消耗满 $200 返 $200、$500 返 $500、$1000 返 $1000、$4000 返 $4000、$6000 返 $6000；条件为真实企业资料+首月 $200 以上预算。另 TikTok Shop 东南亚新卖家最长 120 天佣金减免+每月最高 $1.5 万货补+$1 万广告金；巴西站最高 20% 广告返点（单店铺上限 $1 万）",
      bizValue: "中小客户的最强开场筹码：「前 $6000 广告费最高全返」比任何返点百分比都直观。Jill 可做成一页纸发给观望中的新客户，转化率会比讲 ROI 快得多。",
      source: "TK 跨境服务商行业拆解（2026-09）",
      impact: "high"
    },
    {
      title: "Meta 返点传闻统一降至 3% + KPI 考核 0.5% 额外激励（未经官方确认）",
      date: "2026-09-05",
      summary: "市场传闻 Meta 不再区分直客与非直客、代理商返点统一降至 3%，并拟引入 KPI 考核机制对达标代理给 0.5% 额外返点；官方未确认。行业实际执行：季度消耗 $5-20 万返 3-5%、$20-50 万返 6-8%、年消耗 $50 万+框架最高 9-12%",
      bizValue: "传闻未落地但方向明确。Jill 对大消耗客户可以「趁政策落地前锁定年度框架」做逼单话术，对中小客户则主推账户健康度与赔付服务。",
      source: "行业拆解与代理商交流（2026-09）",
      impact: "medium"
    },
    {
      title: "Google 返点时代终结：新客返点归零，代理商转向服务费模式",
      date: "2026-09-05",
      summary: "Google 已取消个人资质开通 B2B 广告账户通道，企业账户须统一社会信用代码联网核验，PS 修改营业执照直接进开户黑名单；代理商收入模式从返点转向 AI Max 迁移与优化服务费",
      bizValue: "Jill 跟 Google 客户谈时别再拿返点当卖点，改讲三件事：开户资质核验代办的过审率、AI Max 迁移的实操经验、转化数据修复（10 月 gtag 断流问题）。",
      source: "TK 跨境服务商行业拆解（2026-09）",
      impact: "medium"
    },
    {
      title: "Meta 强化 AI 识别代理开户与虚假地域信息，「黑户」风险陡增",
      date: "2026-09-05",
      summary: "Meta 风控升级：AI 识别代理开户行为与虚假地域信息；行业估算自主开户失败率 35%+，封号申诉周期数周；阿根廷/尼日利亚等套利「共享户」存在关联封禁、余额清零风险",
      bizValue: "Jill 话术：「省下的服务费抵不上一次封号的余额损失」——用风险量化打掉客户想走二代低价户的念头，同时凸显一代代理的官方申诉通道价值。",
      source: "飞书逸途行业拆解 / Threasury 2026 行业数据",
      impact: "high"
    },
    {
      title: "开户费价格战：飞书逸途「0 开户费 + $100 起充」搅局",
      date: "2026-09-05",
      summary: "行业费用现状：三平台官方开户均免费；Meta 代理商服务费普遍为充值额 6-10%（国内企业户首充 $200-1000），TikTok 手续费 0.8-3%（首充常见 $2000-5000）；飞书逸途以「0 开户费、0 服务费、$100 起充」抢中小客户，AI 智能开户宣称 1.8 个工作日下户",
      bizValue: "中小客户对起充门槛极敏感。Jill 报价时若易点起充门槛更高，要用「专属优化师+素材产能+申诉速度」对冲，别在「低门槛」上硬碰硬。",
      source: "飞书逸途行业内容 / Threasury Facebook Agency Pricing 2026",
      impact: "medium"
    },
    {
      title: "TikTok 归因重建落地：服务端追踪成标配，灰色 funnel 承压",
      date: "2026-09-10",
      summary: "9 月 1 日 TikTok 服务端 postback + SKAN 4.0 上线后：像素-only 投放被精准惩罚；两跳以上跳转触发审核；倒计时无真实截止日的落地页直接拒登。合规客户 CPA 反而降 22-34%",
      bizValue: "Jill 可把「归因迁移」做成一次性服务包：帮客户一周内迁到服务端追踪，既赚服务费又锁定长期投放。迁移窗口期 CPM 红利别让客户错过。",
      source: "Mintec / Affiliate Times（2026-09-05） https://www.mintec.co/blog/tiktok-mid-funnel-policy",
      impact: "medium"
    },
    {
      title: "灰产工具公开叫卖：Cloak「过审率提升 90%」出现在白鲸供需板块",
      date: "2026-09-05",
      summary: "白鲸出海供需板块可见「源头 H5/PWA 打包 $0.01 起、Cloak 斗篷广告过审帮手过审率提升 90%」等灰产服务明码标价；同期 TikTok 三振永封、Meta AI 风控升级双双落地",
      bizValue: "提醒 Jill：遇到用 cloak/仿站/共享户的客户要谨慎接——平台连坐机制下，一个违规客户可能影响代理名下其他账户的审核权重。可以拿这条劝客户「洗白」转正规。",
      source: "白鲸出海供需板块 https://www.baijing.cn:8443/",
      impact: "medium"
    },
    {
      title: "Google 转化数据 10 月断流预警：gtag('config') 停止生效",
      date: "2026-09-10",
      summary: "10 月 2 日起 GTM 代码段内 gtag('config') 失效，未改造客户的 Google Ads/GA4 转化数据将直接断流；同期 DV360 品牌安全排除项移除、YouTube 响应式广告强制企业名+Logo",
      bizValue: "Jill 可在 9 月下旬批量给 Google 客户发「埋点体检」邀约：免费检查+修复报价，是本月最自然的续费/加单由头。",
      source: "DigiPath / Biz Brief（引 Google 官方文档） https://digipathagency.com/google-ads-updates-september-2026",
      impact: "high"
    },
    {
      title: "短剧买量节奏剧变：单剧投放窗口从 1-2 个月缩到约 1 周",
      date: "2026-09-09",
      summary: "行业观察：AI 剧产能爆发（日均 1500+ 部新剧）导致好剧迭代极快，投流素材供需两端都加速；素材违规连带成本上升（TikTok 三振制）",
      bizValue: "对代理的意义：短剧客户要的是「当天开户、当天上素材、当天换剧」的响应速度。Jill 可给短剧客户配「快速响应 SLA」作为差异化条款写进合同。",
      source: "shortdramadata.com 行业观察（2026-09-09）",
      impact: "medium"
    }
  ],

  // ============================================================
  // 五点五、出海线索池 chinaGoingGlobal（12 家，SME 50%）
  // 说明：飞书在线接口当日权限失效，合作状态核验基于 9 月 3 日全量缓存
  //       （sY7Rf6 L 列 + hlvScn B 列 + 泛娱乐版图，共 2.6 万名称）+ 已知长期客户名单
  // ============================================================
  chinaGoingGlobal: [
    // —— 教育 (3 家, 25%) ——
    {
      product: "Gauth: AI Study Companion（AI 拍照答疑/全学科学习）",
      company: "字节跳动 ByteDance（海外主体 GAUTHTECH PTE. LTD.）",
      hq: "北京/新加坡",
      category: "教育",
      markets: "美国（收入 90%+）/全球",
      revenue: "2025 年公开报道月流水曾破 $120 万（最新数据暂无公开数据）",
      recent: "入选 a16z 全球消费级 AI 应用 Top50 教育类席位；已从数学解题扩展至全学科",
      website: "https://www.gauthmath.com/",
      cooperation: "cooperated",
      coopModel: "字节跳动为易点天下已知长期合作客户；飞书合作表当日未能在线核验（接口权限失效），按已知客户名单标记",
      agency: "已知合作易点天下",
      scale: "head",
      contacts: [],
      channels: [],
      contactNote: "母大子小：字节教育线出海产品。建议走易点现有字节对接通道，或 LinkedIn 搜索 Gauth 团队 Growth 负责人做增量切入",
    },
    {
      product: "Think Academy 学而思国际（海外校区+线上课程）",
      company: "好未来 TAL Education",
      hq: "北京（海外总部美国/新加坡）",
      category: "教育",
      markets: "美国/加拿大/新加坡/马来西亚",
      revenue: "海外板块数据暂无公开数据（好未来整体 FY 财报披露）",
      recent: "美国线上长期班体系扩张（Core+/Honors/Challenge 三轨），2024 年起为国际数学奥林匹克官方赞助商，新加坡维持多校区运营",
      website: "https://www.thethinkacademy.com/",
      cooperation: "not",
      coopModel: "飞书合作表未列名（基于 9 月 3 日全量缓存核验），按潜在客户跟进",
      agency: "暂无公开数据",
      scale: "head",
      contacts: [],
      channels: [
        { label: "新加坡校区客服（最对口招生渠道）", email: "customercare@thinkacademy.sg", phone: "+65 8285 3984", source: "thinkacademy.sg/location" },
        { label: "美国硅谷校区", email: "siliconvalley@thethinkacademy.com", phone: "+1 (844) 844-6587", source: "thethinkacademy.com 校区页" }
      ],
      contactNote: "未找到公开联系人；建议 LinkedIn 搜 Think Academy 区域市场/Growth 岗位，或经校区邮箱转介",
      emailSubject: "学而思国际北美/东南亚校区的招生增长合作探讨",
      emailBody: "您好，我是易点天下 Yeahmobi 的 Jill，专注中国教育企业的海外增长服务。关注到 Think Academy 美国线上长期班体系持续扩张，并作为国际数学奥林匹克官方赞助商在北美和新加坡市场持续投入。我们在中国出海企业的 Google 搜索、家长人群定向投放和东南亚多地区合规开户方面有成熟经验，可帮海外校区在招生旺季提升获客效率。方便约 15 分钟沟通，聊聊北美与东南亚校区的增长合作可能吗？\nJill｜易点天下 Yeahmobi（A股上市，专注中国出海企业的海外增长服务）"
    },
    {
      product: "Perspeak AI（留学生讨论/发言沟通训练）",
      company: "Perspeak AI（华人创业团队，创始人 Courtney）",
      hq: "北美/华人团队",
      category: "教育",
      markets: "北美留学生与职场",
      revenue: "暂无公开数据",
      recent: "以「做了什么+怎么改进」替代打分制评价体系完成产品重构，被 36 氪报道为东亚教育 AI 出海代表样本",
      website: "暂无公开数据",
      cooperation: "not",
      coopModel: "飞书合作表未列名（基于 9 月 3 日全量缓存核验），按潜在客户跟进",
      agency: "自研自发",
      scale: "sme",
      contacts: [],
      channels: [],
      contactNote: "未找到公开联系人/邮箱；建议通过 36 氪报道方牵线或在 Product Hunt/LinkedIn 搜创始人 Courtney",
    },
    // —— AI 应用 (4 家, 33%) ——
    {
      product: "可灵AI Kling（视频生成大模型应用）",
      company: "快手 Kuaishou（北京可灵）",
      hq: "北京",
      category: "AI应用",
      markets: "全球 224 个国家和地区",
      revenue: "2026 Q2 营收超 ¥8.5 亿、同比 +200%",
      recent: "获国家 AI 产业投资基金 ¥14 亿入股，投后估值约 ¥1228 亿；全球用户破 1 亿、企业客户近 5 万家",
      website: "https://www.klingai.com/",
      cooperation: "cooperated",
      coopModel: "快手为易点天下已知长期合作客户；飞书合作表当日未能在线核验（接口权限失效），按已知客户名单标记",
      agency: "已知合作易点天下",
      scale: "head",
      contacts: [],
      channels: [],
      contactNote: "母大子小：快手 AI 板块独立运营。建议走易点现有快手对接通道，争取可灵海外 C 端订阅获客的新预算",
    },
    {
      product: "Tipsy Chat（AI 互动叙事/情感陪伴）",
      company: "Tipsy Chat（国内团队打造，海外主体运营）",
      hq: "海外注册主体（团队国内）",
      category: "AI应用",
      markets: "欧美",
      revenue: "2026 上半年收入约 $1520 万（全球 AI 陪伴赛道第 2）；年化订阅流水约 $5249 万、环比 +39%",
      recent: "月活 307 万（同比 +65%），UGC 互动叙事+创作激励玩法曾带来单月下载近 10 倍增长",
      website: "暂无公开数据",
      cooperation: "not",
      coopModel: "飞书合作表未列名（基于 9 月 3 日全量缓存核验），按潜在客户跟进",
      agency: "暂无公开数据",
      scale: "sme",
      contacts: [],
      channels: [],
      contactNote: "开发方主体未公开。建议在 Discord/Twitter 官方账号触达运营团队，或经扬帆出海社区找对接人",
    },
    {
      product: "Crushie AI（女性向沉浸式 AI 情感陪伴）",
      company: "Crushie AI（国内团队/海外注册主体）",
      hq: "海外注册主体（团队国内）",
      category: "AI应用",
      markets: "欧美",
      revenue: "2026 上半年收入 $880 万（全球 AI 陪伴赛道第 4）；月活 34.5 万、订阅 $29.99/月",
      recent: "2025 年 2 月双端上线，一年迭代 44 个版本，单用户付费能力为全球头部最高",
      website: "暂无公开数据",
      cooperation: "not",
      coopModel: "飞书合作表未列名（基于 9 月 3 日全量缓存核验），按潜在客户跟进",
      agency: "暂无公开数据",
      scale: "sme",
      contacts: [],
      channels: [],
      contactNote: "运营主体为海外注册架构。建议经 App Store 开发者信息或 LinkedIn 搜 Crushie 团队 growth 岗位触达",
    },
    {
      product: "Mivora AI（AI 图像应用）",
      company: "上海子未网络科技有限公司（CamSoft AI Magic）",
      hq: "上海",
      category: "AI应用",
      markets: "印度（占其流量 82.3%）/全球",
      revenue: "旗下 App 全球累计下载 3267 万（单产品收入数据暂无公开数据）",
      recent: "9 月 4 日登顶印度 Google Play 摄影应用榜第一，霸榜畅销榜 14 天；App 工厂模式批量试品",
      website: "暂无公开数据",
      cooperation: "not",
      coopModel: "飞书合作表未列名（基于 9 月 3 日全量缓存核验），按潜在客户跟进",
      agency: "自研自发",
      scale: "sme",
      contacts: [],
      channels: [],
      contactNote: "工商主体为上海子未网络科技；未找到公开商务邮箱。建议企查查/爱企查找工商登记电话，或 LinkedIn 搜索公司员工",
    },
    // —— 娱乐APP (3 家, 25%) ——
    {
      product: "LoveShots（海外短剧）",
      company: "网易有道 Youdao（NEWSTAR FOCUS，香港）",
      hq: "杭州/北京（出海主体香港）",
      category: "娱乐APP",
      markets: "全球",
      revenue: "有道 Q2 AI 订阅销售额约 ¥1 亿(+40%)；LoveShots 单产品收入暂无公开数据",
      recent: "网易有道（NYSE: DAO）旗下短剧出海产品，8 月进入第三方付费短剧竞品日榜；有道连续八个季度经营盈利",
      website: "https://www.youdao.com/",
      cooperation: "not",
      coopModel: "飞书合作表未列名（基于 9 月 3 日全量缓存核验），按潜在客户跟进",
      agency: "暂无公开数据",
      scale: "head",
      contacts: [
        { name: "Jeffrey Wang", role: "投资者关系", email: "IR@rd.netease.com", phone: "+86-10-8255-8163 转 89980", linkedin: "", source: "有道 IR 官方新闻稿 ir.youdao.com" }
      ],
      channels: [
        { label: "投资者关系（最对口上市公司通道）", email: "IR@rd.netease.com", phone: "+86-10-8255-8163", source: "ir.youdao.com" }
      ],
      contactNote: "母大子小样本：教育大厂进军短剧出海。IR 通道非业务对口，建议同时 LinkedIn 搜有道海外短剧项目商务负责人",
      emailSubject: "有道 LoveShots 海外短剧的增长投放合作",
      emailBody: "您好，我是易点天下 Yeahmobi 的 Jill，专注中国 App 出海的海外增长服务。关注到网易有道 Q2 财报中 AI 订阅与海外业务持续放量，第三方短剧监测显示 LoveShots 已进入海外付费短剧竞品日榜。我们在短剧出海买量上有成熟打法（Meta/TikTok 素材量产、订阅类 LTV 优化、合规开户），可以帮 LoveShots 在放量关键期提升投放效率。方便约 15 分钟聊聊合作可能吗？\nJill｜易点天下 Yeahmobi（A股上市，专注中国出海企业的海外增长服务）"
    },
    {
      product: "JoyReels（海外短剧）",
      company: "福州掌中云科技有限公司（UREELS PTE. LTD.）",
      hq: "福州（泰国/香港/新加坡设分支）",
      category: "娱乐APP",
      markets: "欧美/东南亚",
      revenue: "单产品收入暂无公开数据（第三方榜单 8 月收入环比 +100%，首进海外短剧收入 TOP10）",
      recent: "8 月名次提升 6 位进入收入榜第 10；公司为瞪羚企业/专精特新中小企业，深圳市腾讯创业基地发展有限公司为股东之一，参保 89 人",
      website: "http://www.xiaoyuevideo.com/",
      cooperation: "not",
      coopModel: "飞书合作表未列名（基于 9 月 3 日全量缓存核验），按潜在客户跟进",
      agency: "暂无公开数据",
      scale: "sme",
      contacts: [],
      channels: [],
      contactNote: "官网无公开商务邮箱（工商公示法定代表人洪森伟）。建议官网表单+LinkedIn 搜索掌中云商务/买量岗位双线触达",
    },
    {
      product: "FlickReels（海外短剧）",
      company: "擎玩网络 / FARSUN PTE. LTD.（掌玩网络）",
      hq: "北京/新加坡主体",
      category: "娱乐APP",
      markets: "全球",
      revenue: "2025 年收入约 $9616 万（第三方估算），市场份额约 4%",
      recent: "7 月下载量环比飙升 142%，属中腰部短剧中增长势头最猛的玩家之一",
      website: "暂无公开数据",
      cooperation: "not",
      coopModel: "飞书合作表未列名（基于 9 月 3 日全量缓存核验），按潜在客户跟进",
      agency: "暂无公开数据",
      scale: "sme",
      contacts: [],
      channels: [],
      contactNote: "未找到公开联系人/邮箱；建议经短剧行业社群（如 shortdramadata 圈层）或 LinkedIn 搜索擎玩网络买量团队",
    },
    // —— 金融 (1 家, 8%) ——
    {
      product: "iPayLinks 艾贝盘（跨境收付/全球收单）",
      company: "iPayLinks Digital Technology（上海总部）",
      hq: "上海浦东（新加坡/香港/英国/美国设点）",
      category: "金融",
      markets: "全球（服务跨境电商/游戏/教育/App 开发等行业客户）",
      revenue: "暂无公开数据（未上市）",
      recent: "官网公示服务行业覆盖游戏、教育、App 开发、娱乐等出海行业；跨境收付+供应链金融+虚拟信用卡产品线齐全",
      website: "https://www.ipaylinks.com/",
      cooperation: "not",
      coopModel: "飞书合作表未列名（基于 9 月 3 日全量缓存核验），按潜在客户跟进",
      agency: "暂无公开数据",
      scale: "head",
      contacts: [],
      channels: [
        { label: "商务合作（最对口）", email: "marketing@ipaylinks.com", phone: "400-133-0157", source: "ipaylinks.com/contact.php 官网公示" },
        { label: "业务咨询", email: "biz@ipaylinks.com", phone: "400-133-0157", source: "ipaylinks.com/contact.php 官网公示" }
      ],
      contactNote: "官网公示双邮箱+400 电话，触达门槛低。切入点：双方客户群体高度重合（游戏/App/教育出海客户），可互相引荐+联合服务",
      emailSubject: "iPayLinks × 易点天下：服务同一批游戏/App 出海客户的合作思路",
      emailBody: "您好，我是易点天下 Yeahmobi 的 Jill，专注中国 App 与游戏出海的海外广告投放服务。关注到 iPayLinks 的跨境收付方案覆盖游戏、教育、App 开发等出海行业——这与易点天下的客户群高度重合：我们的客户普遍同时需要「海外获客」和「收付结算」两块拼图。期待探讨双方互相引荐客户、联合服务出海企业的可能，也可先从一两个共同客户试点。方便约 15 分钟沟通吗？\nJill｜易点天下 Yeahmobi（A股上市，专注中国出海企业的海外增长服务）"
    },
    // —— 游戏 (1 家, 8%) ——
    {
      product: "遗弃之地（小游戏厂商 APP 化突围之作）",
      company: "北京豪腾创想科技有限公司（疯狂游戏集团）",
      hq: "北京",
      category: "游戏",
      markets: "中国为主/出海起步",
      revenue: "暂无公开数据（8 月收入环比 +120%，首次进入全球 APP 发行商 TOP30）",
      recent: "8 月凭《遗弃之地》新版本首次闯入 Sensor Tower 全球 APP 发行商收入 TOP30，是「小游戏→APP」溢出的标志性案例",
      website: "暂无公开数据",
      cooperation: "not",
      coopModel: "飞书合作表未列名（基于 9 月 3 日全量缓存核验），按潜在客户跟进",
      agency: "自研自发",
      scale: "head",
      contacts: [],
      channels: [],
      contactNote: "疯狂游戏集团（2010 年成立）旗下；未找到公开商务邮箱。建议经微信小游戏生态渠道或 LinkedIn 搜豪腾创想海外发行负责人",
    }
  ],

  // ============================================================
  // 六、中小 App 投放洞察 smeInsight
  // ============================================================
  smeInsight: {
    painPoints: [
      "开户与合规门槛双升：Meta 自主开户失败率 35%+、Google 企业资质联网核验+金融服务 G2 验证、TikTok 必须验证企业号——中小企业没有专人搞资质，卡在第一步",
      "违规成本无限大：TikTok 三振永封不可申诉、Meta HEC 主动扫描误判多、AI 素材必须披露——一条素材违规可能烧掉整个账户余额",
      "AI 投放工具全面替代人工：Google AI Max、Meta Advantage+、TikTok GMV Max 全部默认开启，中小客户不懂怎么给 AI 投喂数据，越投越贵",
      "归因黑盒：TikTok 9 月重建归因后像素-only 等于盲投，中小团队没有 AppsFlyer/Adjust 的运用能力，ROI 算不清不敢加预算"
    ],
    needs: [
      "低门槛+快响应的开户通道：$100 级起充、1-3 个工作日下户、当天能上素材——短剧/工具类客户的投放窗口以「天」计",
      "资质与白名单代办打包：Google 金融服务 G2 验证、政府文件类授权认证、Meta 金融服务准入——把合规做成一次性服务产品",
      "AI 素材量产+披露合规流水线：AI 剧日均 1500+ 部的产能环境下，中小团队需要「周更素材+自动标注 AI 披露」的配套服务",
      "归因与效果透明：帮客户迁到服务端追踪、拉通 AppsFlyer/Adjust 数据，用可验证的 ROAS 报告替代「返点甜头」留住客户"
    ],
    entryPoints: [
      "用 TikTok 新客激励当钩子：30 天最高返 $6000 对观望客户几乎无法拒绝，配合「消耗满 $200 就开始返」的低门槛设计，本月就能收一批新开户",
      "用 Google 10 月政策清单当触达由头：gtag 断流、政府文件认证、DV360 身份素材三件事都赶在 10 月上旬，发一份《10 月 Google 合规清单》批量激活沉睡客户",
      "用「小游戏厂商 APP 化」切新客群：豪腾创想首入全球 TOP30 是信号，把小游戏厂商名单拉出来逐家聊「海外 APP 盘子」，这是还没被同行扫过的增量市场",
      "用 AI 陪伴赛道高客单案例撬动 AI 客户：Tipsy Chat/Crushie 两个月活 30 万级产品半年各赚千万美元——拿「小体量高 LTV」的账说服 AI 工具客户把精准投放预算加起来"
    ]
  }
};
