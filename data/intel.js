// data/intel.js — Jill 的工作台情报数据
// 更新时间：2026-11-01T09:30:00+08:00（9:30 自动化重写）
// 数据来源：Sensor Tower / 点点数据 / 白鲸出海 / DataEye / 熊猫出海 / 游戏陀螺 / 中财网 / 科创板日报 / 各平台官方政策页等
// 所有数据均来自公开信息源，未编造任何数据；查不到的写「暂无公开数据」
// 注意：Sensor Tower 10 月月报约 11/10 发布，本期货源以 9 月月榜 + 10 月当期报道为主

window.INTEL = {
  updatedAt: "2026-11-01T09:30:00+08:00",

  // ============================================================
  // 一、大盘速览 marketPulse
  // ============================================================
  marketPulse: [
    {
      label: "中国手游出海大盘",
      value: "9 月 37 家中国厂商进全球手游发行商收入 Top100，合计约 20 亿美元、占 41.6%",
      note: "Top7 排名不变（腾讯居首），但增量看点在中部：哔哩哔哩收入环比 +36% 排名升 7 位、Joy Games 升 10 位。聊客户时强调：头部格局稳定，腰部每月都有升位机会——新游 + 买量打法是他们唯一的上升通道，这正是我们能接的活。",
      source: "https://www.pandawm.com/blog/game-ai-going-global-news-october-2026-week4.html"
    },
    {
      label: "全球移动游戏承压",
      value: "过去一年移动游戏收入同比 -7%、下载量 -10%，中国以 255 亿美元稳居全球第一",
      note: "白鲸出海这篇报告的核心结论：增量见顶后，竞争从「拉新」转向「存量用户价值经营」（长线活动、IP 联动、精细化商业化）。这是现成的话术：客户还在砸钱拉新时，你可以聊「LTV 深耕投放」——帮他们把已有盘子的回收率做上去，比帮他们烧新预算更好切入。",
      source: "https://www.baijing.cn/article/57001"
    },
    {
      label: "海外短剧·免费模式接管增长",
      value: "字节 PineDrama 上线 9 个月下载破亿、DAU 约 700 万；AI 短剧 IAA 免费类环比 +8%，付费类 -2%",
      note: "免费 + 广告模式正在改写短剧出海的获客逻辑（东南亚/拉美/印度下载增量同比 +220%/+112%/+370%）。对 Jill 的落点：短剧客户的投放预算正在从「买付费用户」转向「规模化买免费流量」，IAA 变现客户的量级需求是我们最该接的盘子，顺势聊广告变现效率。",
      source: "https://new.qq.com/rain/a/20261023A095CX00"
    },
    {
      label: "AI 应用·变现兑现期",
      value: "DeepSeek 完成约 1000 亿元融资创中国 AI 单轮新高；美图 Q3 影像设计收入 10 亿元 +28.2%；赤子城前 9 个月收入超 9.27 亿美元 +33.8%",
      note: "AI 应用从讲故事进入算账期，且出海是明确增量（美图靠 AI 订阅+出海、赤子城靠中东社交）。话术落点：融到钱的新锐 AI 公司下一件事就是海外获客，他们的预算刚批下来、比大厂更好聊——拿着这条去约 AI 客户的开门白。",
      source: "https://cfi.net.cn/p20261028000777.html"
    },
    {
      label: "个人 AI 助理赛道升温",
      value: "Today AI 累计完成超 2 亿美元融资（IDG/腾讯/五源/蚂蚁/红杉中国等），9 月开启海外公测",
      note: "Personal AI 成了继 AI Coding 之后资本最追的方向，巨头集体入局。这类公司产品先出海、团队精简、增长压力全在买量侧——典型的「预算独立、决策链短」新客画像，值得主动建联。",
      source: "https://www.toutiao.com/article/7699471258643530294"
    },
    {
      label: "海外现金贷·获客成本连涨",
      value: "18 个样本市场加权 CAC 升至 28.3 美元、连续 6 周上行；增量从东南亚向拉美、非洲迁移；Meta 单渠道占比 68%",
      note: "现金贷客户现在最痛的两件事：CAC 越买越贵、Meta 单渠道风险极高。这是切入金融客户最好的时机——聊「渠道分散化 + 本地化流量」比聊返点有效得多。注意：印尼/菲律宾合规收紧、加纳清场，客户名单先做合规筛选再谈。",
      source: "https://mp.weixin.qq.com/s?__biz=MzY5MjUwMTk0OA==&mid=2247483680&idx=1&sn=43a826add11c1f97cba949d104bb6c8c"
    }
  ],

  // ============================================================
  // 二、品类榜单 appRankings
  // ============================================================
  appRankings: {
    game: [
      {
        name: "Whiteout Survival / Kingshot",
        publisher: "点点互动（世纪华通旗下）",
        isChinese: true,
        tier: "head",
        markets: "欧美、日韩、东南亚",
        performance: "长期霸榜海外手游收入前二，二合新游持续加码（Tasty Travels 8 月全球收入超 4600 万美元）",
        comment: "我们自家长期合作客户（cooperated），不用开发，但它是你聊其他 SLG/二合客户时最硬的背书：'点点互动我们服务多年'比任何案例页都好使。",
        source: "https://www.pandawm.com/blog/game-ai-going-global-news-october-2026-week4.html"
      },
      {
        name: "杖剑传说（欧美版/多语言版）",
        publisher: "吉比特/雷霆游戏",
        isChinese: true,
        tier: "head",
        markets: "欧美、港澳台、日本",
        performance: "累计流水破 48 亿元；吉比特前三季度境外收入 10.95 亿元、同比 +86.27%",
        comment: "已知长期合作客户。境外收入接近翻倍说明：二线上市游戏公司正在把出海当成第二增长曲线接棒国内。同类公司（雷霆系、吉比特系关联发行）是优质目标——有预算、有海外 KPI、决策链比大厂短。",
        source: "https://www.pandawm.com/blog/game-ai-going-global-news-october-2026-week4.html"
      },
      {
        name: "哔哩哔哩游戏新作矩阵",
        publisher: "哔哩哔哩",
        isChinese: true,
        tier: "head",
        markets: "全球多区（美国、日本约各占三成）",
        performance: "9 月出海收入环比 +36%、排名上升 7 位，新作 9 月全球上线",
        comment: "B 站游戏靠新游全球同步上线重回增长——聊点：新游全球上线期的集中买量窗口（预注册→上线冲榜→长线），我们能提供的是上线期流量包量与素材产能，这正是发行团队最缺的资源。",
        source: "https://www.pandawm.com/blog/game-ai-going-global-news-october-2026-week4.html"
      },
      {
        name: "Last Asylum / Z Route",
        publisher: "三七互娱",
        isChinese: true,
        tier: "head",
        markets: "欧美、东南亚",
        performance: "9 月两款产品收入同创新高，成为收入新支柱",
        comment: "已知长期合作客户。三七的打法一直是「新品高频试错 + 素材量产」，适合作为聊中小厂商时的对标：'三七一年测几十款，测款期的规模化买量我们最有经验'。",
        source: "https://www.pandawm.com/blog/game-ai-going-global-news-october-2026-week4.html"
      },
      {
        name: "Just Desserts: Revenge & Merge",
        publisher: "点点互动",
        isChinese: true,
        tier: "head",
        markets: "欧美为主",
        performance: "9 月二合品类内购收入第 13 位；买量广告拍成「复仇短剧」，Tasty Travels 8 月收入超 4600 万美元",
        comment: "头部二合把买量素材做成 28 秒短剧（停在反击前制造悬念）——这条直接转给做休闲/二合的客户：素材即内容已经是头部标配，中小团队自产不了这种素材量，正好是我们素材产能的切入点。",
        source: "http://mp.weixin.qq.com/s?__biz=MzcxMDM2NTQ3MA==&mid=2247492064&idx=4&sn=c1de870cd605715534f2747c31049424"
      },
      {
        name: "Duck Survival",
        publisher: "Joy Games",
        isChinese: true,
        tier: "sme",
        markets: "欧美、东南亚",
        performance: "发行商 9 月排名上升 10 位、收入环比 +30%，Duck Survival 收入环比 +140%",
        comment: "腰部发行靠单款产品单月 +140% 冲进前列——增长全靠买量拉起来的典型。这类正在上升期的腰部发行商预算扩张最快、比头部更好约，建议本周就查 LinkedIn 找他们的 UA 负责人建联。",
        source: "https://www.pandawm.com/blog/game-ai-going-global-news-october-2026-week4.html"
      },
      {
        name: "Rotate Rings",
        publisher: "HURELAX PTE. LTD.（Hungry Studio 新加坡运营实体）",
        isChinese: true,
        tier: "sme",
        markets: "美国为主",
        performance: "近 30 天下载破 1000 万、DAU 接近 200 万，靠 Block Blast 内部导流起量",
        comment: "中小团队靠「老玩法 + 大产品导流」打出千万级下载。它前 100 关几乎无广告、40 关后加密度——IAA 变现节奏调优是他们的下一步，正是我们能聊变现侧流量与合作的角度。触达难点：无公开商务邮箱，建议走 GTC2026 展会或 LinkedIn 搜 Hungry Studio。",
        source: "http://mp.weixin.qq.com/s?__biz=MzcxMDM2NTQ3MA==&mid=2247492064&idx=4&sn=c1de870cd605715534f2747c31049424"
      },
      {
        name: "Dear Passengers",
        publisher: "FLEXUS Games",
        isChinese: true,
        tier: "sme",
        markets: "收入看欧美拉美、下载看南亚（印度/印尼/巴基斯坦）",
        performance: "Steam 愿望单破 200 万，海外安卓端上线即进 8 月下载增长 Top7",
        comment: "手游团队双端发行（Steam+安卓）的新样本：投放主投巴西/日本/美国，AdMob+Mintegral 占七成。中小团队多端买量经验不足，是我们讲「一套素材跑多端」的天然客户。",
        source: "http://mp.weixin.qq.com/s?__biz=MzcxMDM2NTQ3MA==&mid=2247492064&idx=4&sn=c1de870cd605715534f2747c31049424"
      },
      {
        name: "Meowdoku!",
        publisher: "乐信圣文",
        isChinese: true,
        tier: "sme",
        markets: "欧美、日韩",
        performance: "9 月广告量环比 +16.52%、首次进产品投放榜第三；发行商位列开发者投放榜 Top3",
        comment: "中小休闲厂商靠稳定投放量持续堆量——它排在投放榜前三说明预算充沛且高度依赖买量获客。这类「投放驱动型」中小厂商对代理服务和账户稳定性最敏感，是用「账户健康度/素材测试效率」开场的好对象。",
        source: "http://mp.weixin.qq.com/s?__biz=MzcxMDM2NTQ3MA==&mid=2247492064&idx=4&sn=c1de870cd605715534f2747c31049424"
      },
      {
        name: "Crownstone Survival",
        publisher: "腾讯",
        isChinese: true,
        tier: "head",
        markets: "全球",
        performance: "腾讯休闲 SLG 新游 9 月开启预约期买量，进入 Google Play 预约榜第十",
        comment: "已知长期合作客户。注意信号：腾讯都在做「休闲 SLG + 预约期买量」，说明休闲化 SLG 的低 CAC 窗口是行业共识——把这个打法讲给还在做重度 SLG 的中小厂商，是很有说服力的开场。",
        source: "http://mp.weixin.qq.com/s?__biz=MzcxMDM2NTQ3MA==&mid=2247492064&idx=4&sn=c1de870cd605715534f2747c31049424"
      }
    ],
    finance: [
      {
        name: "OPay",
        publisher: "昆仑万维（周亚辉）",
        isChinese: true,
        tier: "head",
        markets: "尼日利亚（辐射非洲）",
        performance: "2025 年占尼日利亚数字贷款支出 57.4%；Q2 独立借款用户 670 万；2026H1 信贷收入占比近 60%，招股书已递交",
        comment: "非洲借贷龙头的信贷收入已占六成、正处 IPO 窗口，投放维持高强度做规模。IPO 前的头部金融客户预算稳定但供应商固化，更适合作为案例谈资而非攻坚对象。",
        source: "https://mp.weixin.qq.com/s?__biz=MzY5MjUwMTk0OA==&mid=2247483680&idx=1&sn=43a826add11c1f97cba949d104bb6c8c"
      },
      {
        name: "AdaKami / 巴基斯坦 BNPL",
        publisher: "信也科技",
        isChinese: true,
        tier: "head",
        markets: "印尼、巴基斯坦、菲律宾、澳大利亚",
        performance: "Q2 海外收入 9.3 亿元（占比 27%、同比 +18%）；Q3 获 OJK 多元金融牌照",
        comment: "头部金融科技里出海节奏最稳的一家，打法已从买量转品牌化长线。聊同类中腰部客户时可以引用：连头部都在「放缓拉新、转复借率运营」，中小平台更该把钱花在精准获客上——这是我们优化的卖点。",
        source: "https://mp.weixin.qq.com/s?__biz=MzY5MjUwMTk0OA==&mid=2247483680&idx=1&sn=43a826add11c1f97cba949d104bb6c8c"
      },
      {
        name: "DiDi Finanzas",
        publisher: "滴滴",
        isChinese: true,
        tier: "head",
        markets: "墨西哥、巴西、哥伦比亚",
        performance: "Q3 拉美数字金融 MAU 430 万（环比 +6.7%）、下载 233 万（+10.1%）；Meta 渠道占比 90.88%",
        comment: "注意它的风险面：Meta 渠道占比超九成——Meta 政策一收紧就全盘停摆。拿这条去聊所有拉美金融客户「渠道集中度」问题，先给诊断再给方案，比直接推开户有效。",
        source: "https://mp.weixin.qq.com/s?__biz=MzY5MjUwMTk0OA==&mid=2247483680&idx=1&sn=43a826add11c1f97cba949d104bb6c8c"
      },
      {
        name: "Cairin",
        publisher: "Cairin（印尼中腰部网贷）",
        isChinese: true,
        tier: "sme",
        markets: "印尼",
        performance: "10 月下载环比 +13.8%，与同梯队 Pinjam Yuk 贴身竞争（活跃 63 万 vs 58 万）",
        comment: "印尼中腰部网贷在存量市场里互相抢量，谁加投谁涨——说明这个梯队的增长仍是买量驱动。合规收紧背景下（OJK 连续处罚），持牌 + 稳定账户是他们最需要的，用「账户安全 + 成本」组合去谈。",
        source: "https://mp.weixin.qq.com/s?__biz=MzY5MjUwMTk0OA==&mid=2247483680&idx=1&sn=43a826add11c1f97cba949d104bb6c8c"
      },
      {
        name: "Duxi Finanzas",
        publisher: "洋钱罐系中资群（墨西哥）",
        isChinese: true,
        tier: "sme",
        markets: "墨西哥",
        performance: "单产品在投广告约 140 个、Meta 占 98%；Google Play 累计 17.68 万下载，墨西哥财务榜第 36",
        comment: "墨西哥中资现金贷群像的缩影：素材高度依赖 Meta 图片、同质化内卷。行业 CAC 已到 50 美元，他们急需「Meta 之外的第二渠道」——Google/TikTok/网盟的渠道组合方案是现成的切入话术。",
        source: "https://mp.weixin.qq.com/s?__biz=MzY5MjUwMTk0OA==&mid=2247483680&idx=1&sn=43a826add11c1f97cba949d104bb6c8c"
      },
      {
        name: "KlikUMKM",
        publisher: "KlikUMKM（印尼小微贷）",
        isChinese: true,
        tier: "sme",
        markets: "印尼",
        performance: "推广强度骤降：日均下载从 1 万降至 1-2 千，活跃 54.45 万（环比 -11.43%）",
        comment: "反面教材型线索：投放一停就失血，说明它没有自然增长盘、且可能遇到资金/合规压力。这类客户如果还有预算，最需要的是低成本获客方案；但注意先核实其牌照状态，别接高风险盘子。",
        source: "https://mp.weixin.qq.com/s?__biz=MzY5MjUwMTk0OA==&mid=2247483680&idx=1&sn=43a826add11c1f97cba949d104bb6c8c"
      },
      {
        name: "肯尼亚持牌数字信贷集群（281 家 DCP）",
        publisher: "CBK 持牌机构（Tala、Zenka、FlashPesa 等 33 家在架）",
        isChinese: false,
        tier: "sme",
        markets: "肯尼亚（东非英语区）",
        performance: "持牌 DCP 达 281 家，年内新增 29 家；累计放贷 1651 亿肯先令、959 万笔",
        comment: "肯尼亚「名单式清理」后，合规持牌方流量成本短期下降 15-25%——先持牌者正在低成本承接被清退平台的存量用户。有中资背景的东非信贷团队在找流量时，是我们金融线的新增量市场。",
        source: "https://www.pulse.co.ke/story/281-digital-lenders-in-kenya-how-does-the-cbk-regulate-loan-apps-2026100217470566567"
      }
    ],
    ai: [
      {
        name: "ChatGPT",
        publisher: "OpenAI",
        isChinese: false,
        tier: "head",
        markets: "全球",
        performance: "10 月全球净收入 18.7 亿美元（App 平台口径），连续多月全球下载第一（4310 万次）",
        note: "10 月起 ChatGPT Ads 创意增强自动开启（10/29 生效），广告主可被自动改写素材——AI 广告自动化已到应用层，国内出海团队跟进节奏值得关注。",
        comment: "大盘锚点：AI 应用的收入大盘在持续涨，但涨的钱集中在头部。聊国内 AI 客户时的标准话术：'头部拿了 80% 的自然流量，中小 AI 应用必须靠买量抢窗口期'。",
        source: "https://www.digitalinformationworld.com/2025/11/global-app-trends-october-2025-revenue.html"
      },
      {
        name: "Dola（豆包海外版）",
        publisher: "字节跳动",
        isChinese: true,
        tier: "head",
        markets: "东南亚、全球",
        performance: "由 Cici 更名 Dola 后下载量逆势上涨（10 月 1713 万次、环比 +13.3%）",
        comment: "已知长期合作客户（字节系）。更名后逆势增长说明字节在 AI 出海侧继续加码投放——对内注意服务团队跟进；对外则是谈资：'连字节都在持续买量，AI 应用不做获客就没有入场券'。",
        source: "https://www.moomoo.com/hans/news/post/61376012"
      },
      {
        name: "Meitu / BeautyCam",
        publisher: "美图公司",
        isChinese: true,
        tier: "head",
        markets: "日本、中国台湾等东亚市场为主",
        performance: "Q3 影像与设计产品收入 10 亿元、同比 +28.2%，AI 订阅与出海驱动增长",
        comment: "已知长期合作客户（睿琪/美图系在合作名单）。AI 订阅+出海 = 美图验证过的模式，把这个模型讲给国内图片/视频工具类客户（像素级对标美图路径）非常顺。",
        source: "https://cfi.net.cn/p20261028000777.html"
      },
      {
        name: "SeaArt / SeaHaze",
        publisher: "海艺科技（星合互娱团队再创业）",
        isChinese: true,
        tier: "sme",
        markets: "全球（欧美、东南亚）",
        performance: "AI 业务年化收入超 1 亿美元；SeaHaze 近一个月收入环比 +8000%，进 AI 陪伴收入榜第 13；7 月完成超亿元 B 轮",
        comment: "游戏背景团队做 AI 应用跑出来的标杆：图片/视频生成+AI 陪伴+短剧多线并进，9 月起收入飙升。B 轮刚融完、买量预算正是最充裕的窗口期——虽然合作侧需按内部规则确认，但作为「AI 应用怎么起量」的案例极有说服力。",
        source: "http://mp.weixin.qq.com/s?__biz=MzcxMDM2NTQ3MA==&mid=2247492064&idx=4&sn=c1de870cd605715534f2747c31049424"
      },
      {
        name: "GENiEX（寂核 SEIVOID）",
        publisher: "元巅科技 METAPEX（杭州）",
        isChinese: true,
        tier: "sme",
        markets: "欧美（Kickstarter 全球众筹）",
        performance: "AI 潮玩对讲机 Kickstarter 上线 1 小时达成目标，最终众筹约 13.45-18 万美元、达成率超 1000%；获选 GTC2026 开幕式演讲",
        comment: "杭州小团队用「内容驱动 AI 硬件」绕开订阅制内卷。刚完成众筹、明年 3 月发货——接下来就是消费电子的海外获客期（官网/独立站投放+社媒）。小团队、预算独立、创始人亲自管增长，是典型的「一把手工程」客户，直接约创始人效率最高。",
        source: "https://news.qq.com/rain/a/20260903A0992700"
      },
      {
        name: "Today AI",
        publisher: "Today AI（个人 AI 助理）",
        isChinese: true,
        tier: "sme",
        markets: "海外公测 + 国内双线",
        performance: "累计融资超 2 亿美元（腾讯/IDG/五源/蚂蚁/红杉中国/传音等），9 月海外公测、9/24 国内上线",
        comment: "资本热度最高的 AI 新赛道，投资方阵容豪华意味着后续烧钱抢用户的确定性高。产品刚公测、用户基数小，正处在冷启动投放期——这是接触的黄金窗口，晚了预算就被头部代理锁了。",
        source: "https://www.toutiao.com/article/7699471258643530294"
      },
      {
        name: "Moonix 月刻 AI 眼镜",
        publisher: "Moonix（月刻）",
        isChinese: true,
        tier: "sme",
        markets: "国内+海外",
        performance: "AI 眼镜新锐，GTC2026 上海站市场 VP 洪叶出席圆桌（区域化突围议题）",
        comment: "AI 硬件出海热浪里的新品牌，主动参与行业大会说明有品牌曝光与渠道合作需求。AI 眼镜品类竞争白热化，海外独立站+社媒投放是标配打法，团队规模小、决策快，适合从「品牌起量」切入。",
        source: "http://mp.weixin.qq.com/s?__biz=MzYzNTkyMTI2Ng==&mid=2247577990&idx=2&sn=587410ba81f284601a66bab8d7e54218"
      },
      {
        name: "Perplexity",
        publisher: "Perplexity AI",
        isChinese: false,
        tier: "sme",
        markets: "全球（印度、美国为主）",
        performance: "10 月下载 3372 万次、环比 +39.5%，成 AI 应用最大黑马，首进 Google Play 下载总榜",
        comment: "非中国产品，但它的意义是给国内 AI 搜索/Agent 客户定锚：'细分场景 AI 用买量也能三个月下载翻倍'。同时它 10 月底下载暴跌的曲线也提醒客户：没有留存承接的投放是烧钱——顺势带出我们的全链路优化能力。",
        source: "https://www.moomoo.com/hans/news/post/61376012"
      },
      {
        name: "CapCut",
        publisher: "字节跳动",
        isChinese: true,
        tier: "head",
        markets: "全球",
        performance: "10 月海外收入再创新高（预估超 3136 万美元/月），全球收入榜第四",
        comment: "已知长期合作客户。CapCut 的持续增长把「视频编辑工具全球化」的盘子越做越大——所有想做剪映平替的国内工具团队都是它的溢出客户，用 CapCut 的增长曲线去说服他们入场最直观。",
        source: "https://www.baijing.cn/article/54752"
      },
      {
        name: "Gemini 4 Argon",
        publisher: "Google",
        isChinese: false,
        tier: "head",
        markets: "全球",
        performance: "10 月面向全球开放，主打金融/法律/编码等复杂任务，促销价输入 $2/百万 tokens（11/30 后调回 $4）",
        comment: "模型层降价潮的信号：AI 应用方的推理成本在降、毛利在升——翻译成商务话术：'你的单位经济模型变好了，现在正是加投放预算的时机'。适合作为约 AI 客户时的行业消息由头。",
        source: "https://news.mbalib.com/story/258935"
      }
    ],
    education: [
      {
        name: "Duolingo",
        publisher: "Duolingo, Inc.",
        isChinese: false,
        tier: "head",
        markets: "全球（30/30 国家教育榜第一）",
        performance: "10 月双端下载约 1400 万次、月收入约 1400 万美元，教育免费榜+畅销榜双第一",
        comment: "全球教育 App 的天花板锚点。聊国内教育出海客户时用它定盘子：'赛道天花板在这，多邻国一个月 1.4 亿美金——中文学习、细分语种、成人技能都还有结构性空位'。",
        source: "https://appinsider.io/app/duolingo-learn-languages-570060128"
      },
      {
        name: "Turtle Learn 旅龟",
        publisher: "Kazoo Technology (Hong Kong) Limited",
        isChinese: true,
        tier: "sme",
        markets: "中国香港→越南、印尼、马来西亚（新加坡/泰国筹备）",
        performance: "AI 中文教育平台已服务 150+ 学校，获选 2025 HolonIQ 东亚教育科技 150 强、美国 ESSA 第四级认证；越南/印尼加盟学习中心落地",
        comment: "香港科学园孵化的小团队做「AI+中文出海」，靠 B 端学校渠道扩张。联合创始人 Kendall Lo 公开讲过东南亚扩张计划——正需要海外市场推广资源。官方邮箱 support@turtlelearn.com 可直达，建议用「帮你在越南/印尼做家长侧获客」开场。",
        source: "https://www.linkedin.com/posts/the-standard-%E8%8B%B1%E6%96%87%E8%99%8E%E5%A0%B1_edtech-firm-upgrades-asean-chinese-learning-activity-7461992589647323136-D2je"
      },
      {
        name: "睿诺思教育东南亚矩阵",
        publisher: "睿诺思教育集团",
        isChinese: true,
        tier: "sme",
        markets: "越南（河内）、泰国（曼谷）、马来西亚（吉隆坡）",
        performance: "截至 2026 年 5 月东南亚三国学习者 310 万，越南付费用户破 80 万；与曼谷教育局合作为 200 所公立学校提供 AI 英语系统",
        comment: "中型教育集团今年刚在三国设区域总部，本地化 + B/G 端双线推进。区域总部刚立 = 海外市场预算独立审批，正是商务切入的好时点；国际业务副总裁陈思远是公开的对口角色。",
        source: "https://weixin.rnsvip.com/index.php?a=show&id=3709&m=Article"
      },
      {
        name: "GoSpeak: AI English Speaking",
        publisher: "Octopus Times（深圳市章鱼时代科技）",
        isChinese: true,
        tier: "sme",
        markets: "墨西哥、马来西亚、美国",
        performance: "2026 年 4 月全球上线，AI 陪练 + CEFR 分级课程，持续投放中",
        comment: "国内小团队做 AI 口语出海、主攻拉美+东南亚的组合很少见（错开欧美红海）。上线半年仍持续投放说明模型跑通了一部分——聊「拉美西语市场买量经验」正好补他们的短板。",
        source: "https://app.sensortower.com/overview/com.turningstudio.gospeakai?page=1"
      },
      {
        name: "PalFish 伴鱼（AI 出海转型）",
        publisher: "伴鱼 PalFish",
        isChinese: true,
        tier: "sme",
        markets: "东南亚为主",
        performance: "累计服务全球超 1 亿用户；AI 把一分钟动画内容成本从 5000-1 万元压到百元内，转向精锐小团队 + AI 工具轻量化落地",
        comment: "伴鱼国际业务负责人公开分享的转型路径（10/24 教育专场）——内容成本降两个数量级后，教育公司的钱会重新流向获客侧。注意：伴鱼在永久排除名单里，这条只当行业谈资和找同类客户用。",
        source: "https://www.toutiao.com/article/7700907373581386281"
      },
      {
        name: "Fluzy: Learn Language with AI",
        publisher: "Turn Up Technologies LLC",
        isChinese: false,
        tier: "sme",
        markets: "美国、加拿大、阿联酋、西班牙",
        performance: "月下载 100 万+，美国教育免费榜第 31，上线 6 个月装机超 500 万",
        comment: "非中国产品，但验证了「AI 口语 + 广告变现」的成长模型（Ad-led、44 家广告网络）。国内做 AI 口语的小团队对标它即可起盘——聊点：IAA 教育应用的买量回收模型我们最熟。",
        source: "https://appinsider.io/android/app/com.lingua.ai.tutor"
      },
      {
        name: "LunaSpeak: AI Speaking Coach",
        publisher: "Growly（越南开发者）",
        isChinese: false,
        tier: "sme",
        markets: "韩国（教育免费榜第 2）、泰国、中东",
        performance: "上线 3 个月装机超 500 万，月下载 30 万+，韩国教育榜第二",
        comment: "越南独立开发者的 AI 口语产品三个月冲上韩国榜眼——东南亚技术团队正在快速抢占亚洲非英语市场。对国内教育客户的刺激点：'连越南个人开发者都做起来了，你们的技术+内容不会输，缺的是投放'。",
        source: "https://appinsider.io/android/app/com.growly.lunaspeak"
      },
      {
        name: "洪恩启蒙矩阵（AhaWorld / ReadingStars）",
        publisher: "洪恩 iHuman（NYSE: IH）",
        isChinese: true,
        tier: "head",
        markets: "北美、东南亚",
        performance: "儿童教育出海矩阵持续扩张（AhaWorld 等多产品线并行）",
        comment: "已知合作过的上市教育公司，保持跟进即可。价值在于：洪恩验证了「儿童教育 App 海外 IAP+IAA 混合变现」的财务模型，给国内儿童教育客户讲出海，直接拿洪恩当对标。",
        source: "https://ir.ihuman.com"
      }
    ]
  },

  // ============================================================
  // 三、热点事件 hotEvents
  // ============================================================
  hotEvents: [
    {
      title: "【今日生效】泰国「No ID, No Ads」广告实名制落地",
      date: "2026-11-01",
      summary: "11 月 1 日起，向泰国用户投广告须先通过平台 KYC（人脸/证件），覆盖 TikTok、Meta、Google、LINE 等；境外投放者同样受约束，验证一年有效，平台须留存广告主信息 90 天以上。",
      bizValue: "手里有泰国投放客户的今天就要确认 KYC 状态，没做的账户会被直接停投。这是最好用的「触达由头」：一条消息问客户'泰国 KYC 做了吗'，比任何寒暄都自然，还能顺势展示我们对接平台侧的熟悉度。现金贷/短剧/电商客户受影响最大。",
      source: "https://www.baijing.cn/article/57181"
    },
    {
      title: "Meta 新商业条款 11/20 生效：AI 产出责任全部归广告主",
      date: "2026-10-24",
      summary: "Meta 将商业条款中 AI 责任条款生效日从 10/30 推迟至 11/20：无论广告主是否主动开启 AI 功能，AI 生成/修改内容的全部风险由广告主承担；不得移除 AI 水印。已有代理因 Meta 自动改广告而撤下在投素材。",
      bizValue: "半个月倒计时。主动帮客户做一次「Advantage+ 功能体检」（逐项关闭默认开启的 AI 增强），是展示专业度的绝佳动作——尤其素材审核严的金融/游戏客户，一次 AI 自动改图就可能全盘违规。",
      source: "https://www.thekeyword.co/news/meta-commercial-terms-ai-liability"
    },
    {
      title: "OpenAI ChatGPT Ads 创意增强 10/29 全面开启",
      date: "2026-10-29",
      summary: "ChatGPT Ads 对新老广告自动开启创意增强（改写/翻译素材，无需逐条批准），与 Meta 同方向：平台自动优化、广告主担责。",
      bizValue: "AI 平台自动改广告已成行业趋势。给客户的建议统一成一句话：'AI 自动增强都要单独检查关闭项'。我们若能提供「AI 素材合规预审」服务，正好踩在这个痛点上。",
      source: "https://www.thekeyword.co/news/meta-commercial-terms-ai-liability"
    },
    {
      title: "【15 天】Google Ads Data Manager 11/16 起取消强制 SHA-256 哈希",
      date: "2026-10-28",
      summary: "Google Data Manager 改为接受加密明文数据，在可信执行环境（TEE）内解密归一化匹配；Customer Match/增强转化上传流程简化，匹配率预计提升。",
      bizValue: "对做再营销/客户名单上传的客户是实打实的效率利好（过去格式错一个就匹配不上）。技术小白客户自己搞不定数据管道——我们能代跑这套流程，就是服务切入点。",
      source: "https://palai.media/en/news/google-ads-drops-mandatory-customer-data-hashing"
    },
    {
      title: "【14 天】商务部拟新增 23 项 AI 技术出口限制，11/15 截止征求意见",
      date: "2026-10-16",
      summary: "商务部、科技部就《中国禁止出口限制出口技术目录》调整征求意见，拟新增 23 项 AI 相关技术，反馈截止 11 月 15 日。",
      bizValue: "AI 出海公司要开始做「技术出口合规自查」了。给 AI 客户的关心话术现成：'你们模型/算法出海形态过一遍新目录了吗'——既是善意提醒，也顺手摸清对方出海架构，为后续合作铺路。",
      source: "https://www.pandawm.com/blog/game-ai-going-global-news-october-2026-week4.html"
    },
    {
      title: "Google 金融服务验证将扩至美国、加拿大（2027 初）",
      date: "2026-10-20",
      summary: "Google 宣布金融服务验证扩至美加，2027 年初分阶段推行：金融广告主需证明获得监管授权/注册，已覆盖 42 国；美加 97% 广告已来自身份验证广告主。",
      bizValue: "给金融客户的长线预警：想投美加市场的，现在就要准备牌照文件和主体一致性材料（账户名=落地页主体=持牌主体）。提前半年帮客户准备，等新规落地时你就是唯一能马上开户的人。",
      source: "https://wersm.com/google-ads-financial-services-verification-us-canada/"
    },
    {
      title: "Google PMax 新 campaign 12/4 起默认开启图像提取",
      date: "2026-10-27",
      summary: "12 月 4 日起新建 Performance Max 默认开启图像提取：Google 自动扫描落地页高清图用于广告素材；API 用户新建需显式 OPT_OUT。",
      bizValue: "落地页有敏感图（现金贷利率表、短剧擦边封面）的客户必须提前关掉，否则素材被自动抓去投放、审核连带炸户。这是一条「主动提醒客户避坑」的高质量消息素材。",
      source: "https://adpilotapp.com/articles/latest-google-ads-features"
    },
    {
      title: "TikTok GMV Max 黑五机制升级：11/6 起自动创建广告计划",
      date: "2026-10-24",
      summary: "TikTok Shop 美区 11/6 起仅对未创建 GMV Max 的报名商品自动生成广告计划，其他类型广告将被覆盖停投；大促资源（直降/曝光位/补贴）与 GMV Max 的 ROI 和消耗挂钩。",
      bizValue: "电商客户的黑五投放被平台「强制收编」进 GMV Max。帮客户在大促前把 GMV Max 计划搭好、ROI 目标定对，是最有时效性的服务切口——错过这周，客户自己也能搭，但搭不好。",
      source: "https://webapp.feheadline.com/news/10527224/87674"
    },
    {
      title: "【5 天】泰国 KYC 之外：TikTok Shop 泰区资料店扫号",
      date: "2026-10-28",
      summary: "双 11 前夕业内流出 TikTok Shop 将对泰国区资料店集中扫号，个人店被重点关注，违规店将被清退。",
      bizValue: "做东南亚电商的客户双线承压（广告 KYC + 店铺扫号）。两条消息打包发客户：'泰国这波 KYC+扫号，你们账户和店铺都体检了吗？'——一次触达聊两个危机，显得信息灵通。",
      source: "https://www.baijing.cn/article/57181"
    },
    {
      title: "苹果 10/16 更新审核指南：AI 内容、隐藏功能、外链条款复查",
      date: "2026-10-16",
      summary: "苹果更新 App 审核指南，AI 生成内容、隐藏功能、外链规则有新表述；10/22 另上线多席位订阅购买（工具/SaaS 可面向团队售卖）。",
      bizValue: "AI 应用客户上架/更新被拒的风险点变了。给 AI 客户的一条实用提醒：'苹果新指南对 AI 内容和隐藏功能更严，更新版本前先自查'。顺带聊：多席位订阅是新变现方向，变现模型变了投放模型也要跟着调。",
      source: "https://www.pandawm.com/blog/game-ai-going-global-news-october-2026-week4.html"
    },
    {
      title: "DeepSeek 完成 1000 亿元融资，AI 应用进入变现兑现期",
      date: "2026-10-28",
      summary: "DeepSeek 单轮融资约 1000 亿元创中国 AI 新高；美图 Q3 AI 订阅+出海驱动 +28.2%；赤子城前 9 月收入 9.27 亿美元 +33.8%；DeepSeek、MiniMax 已完成全球授权相关登记。",
      bizValue: "AI 板块的钱在往应用层流动。融资型 AI 公司最近三个月是最值得扫的客户群：钱到账、KPI 刚定、供应商还没锁定。建议列一份近 90 天完成融资的 AI 应用清单，逐家约聊。",
      source: "https://cfi.net.cn/p20261028000777.html",
      tag: "high-growth"
    },
    {
      title: "字节 PineDrama 下载破亿：TikTok 独立团队运营的「海外红果」",
      date: "2026-10-23",
      summary: "PineDrama 上线 9 个月下载破亿、DAU 约 700 万、月新增用户超 1700 万；由 TikTok 旗下独立团队运营（非红果团队），站内获客效率约 4 倍于第三方买量；制作方大多来自中国，平台提供免费 IP 授权+全平台发行合作。",
      bizValue: "两个机会：① 有短剧制作能力的团队正被 PineDrama 吸引转海外，这类团队需要自有 App 或独立投放的流量——是新增量客户；② 免费模式确认成为行业主流，IAA 短剧客户的买量需求会持续放大。",
      source: "https://www.toutiao.com/article/7699686716315107876",
      tag: "high-growth"
    },
    {
      title: "元巅科技 GENiEX 众筹超 1000%，AI 潮玩硬件跑出新路径",
      date: "2026-10-20",
      summary: "杭州小团队 METAPEX 的 AI 对讲机 GENiEX 上线 1 小时达成 Kickstarter 目标，最终众筹 13.45 万美元+（达成率超 1000%）；不做订阅制，用角色资产经济支撑长期内容；明年 3 月发货，CEO 周百祥将登 GTC2026 开幕式演讲。",
      bizValue: "小团队、强内容、全球化众筹——典型的「产品验证完成、即将进入买量获客期」画像。约创始人级别直接聊，切入点：众筹后到发货前的海外预热投放 + 独立站承接。",
      source: "https://news.qq.com/rain/a/20260903A0992700",
      tag: "emerging"
    },
    {
      title: "Today AI 融资超 2 亿美元，个人 AI 助理成新风口",
      date: "2026-10-22",
      summary: "Today AI 累计融资超 2 亿美元（IDG、腾讯、五源、蚂蚁、红杉中国、传音控股等），9 月开启海外公测、9/24 国内版上线，主打「记住用户目标、主动推进下一步」。",
      credit: "",
      bizValue: "投资方含传音（非洲/新兴市场渠道）——出海协同想象空间大。产品冷启动期是接触黄金窗口：这类公司花投资人的钱抢时间，对「快速起量」的付费意愿最强。",
      source: "https://www.toutiao.com/article/7699471258643530294",
      tag: "emerging"
    },
    {
      title: "FlareShort 下载环比激增 161%，短剧腰部仍有结构性机会",
      date: "2026-10-20",
      summary: "海外短剧市场中腰部应用集体冒头：StardustTV 下载收入双翻倍、FlareShort 下载 +161%、DramaReels 环比 +151.6%，头部格局稳定但腰部席位每月洗牌。",
      bizValue: "短剧不是只有头部的故事——每月都有腰部产品靠投放冲位。这些团队的共同点：增长焦虑强、投放是唯一杠杆、决策链极短。建议固定跟进短剧月榜腰部新面孔，每月筛 2-3 家建联。",
      source: "https://www.yfchuhai.com/article/10226825.html",
      tag: "emerging"
    },
    {
      title: "音果互娱 Falla 中东语聊回升：沙特/美国双市场回暖",
      date: "2026-10-20",
      summary: "音果互娱旗下语聊房社交 Falla 在沙特、美国两大收入市场扭转连月颓势、排名回升明显，重回非游出海收入榜。中东语聊房赛道呈「小 DAU、高营收」特征，沙特付费规模远超其他市场。",
      bizValue: "中东语聊是出了名的「高利润、买量依赖」赛道，回暖期加投放是常态操作。团队核心来自 YY/金山、规模 50-150 人，工商公示邮箱可直达（lixiaoli@iyinguo.com），用「沙特市场语聊买量经验」开场对口。",
      source: "https://www.baijing.cn/article/54752",
      tag: "emerging"
    },
    {
      title: "Kazoo 旅龟 Chinese Learning 东南亚扩张，AI 中文教育 B 端起量",
      date: "2026-10-15",
      summary: "香港 Kazoo Technology 的 Turtle Learn 平台已进 150+ 学校，正式向越南、印尼、马来西亚扩张（加盟学习中心落地），并推进新加坡国际学校与泰国市场。",
      bizValue: "中文教育出海是教育板块少有的增量细分（海外 2 亿人学中文）。Kazoo 团队小、扩张意愿公开、官方邮箱可直达——用「东南亚家长侧获客 + 学校渠道配合投放」切入很对口。",
      source: "https://www.linkedin.com/posts/the-standard-%E8%8B%B1%E6%96%87%E8%99%8E%E5%A0%B1_edtech-firm-upgrades-asean-chinese-learning-activity-7461992589647323136-D2je",
      tag: "emerging"
    },
    {
      title: "睿诺思东南亚三国设立区域总部，学习者达 310 万",
      date: "2026-10-20",
      summary: "睿诺思教育在越南河内、泰国曼谷、马来西亚吉隆坡设立区域总部，东南亚学习者 310 万（越南付费用户 80 万），与曼谷教育局合作覆盖 200 所公立学校。",
      bizValue: "区域总部刚落地 = 海外预算独立、招聘与增长并行。这类「刚出海的中型教育集团」是我们服务配比最舒服的客户：比小团队有钱、比大厂好沟通。",
      source: "https://weixin.rnsvip.com/index.php?a=show&id=3709&m=Article",
      tag: "emerging"
    },
    {
      title: "XbotGo 进驻 Best Buy 220+ 门店，AI 硬件出海进入渠道收割期",
      date: "2026-10-25",
      summary: "AI 体育相机品牌 XbotGo 宣布进驻全美 220+ 家 Best Buy 门店，成为唯一入驻 Best Buy 的专业 AI 运动相机品牌；全球用户 21 万+、直播赛事 50 万场、合作俱乐部 1000+，官网公示商务邮箱 Business@XbotGo.com。",
      bizValue: "从众筹爆款到线下渠道，XbotGo 正处在品牌投放放量期（北美体育季+节日购物季）。官网公示商务邮箱直达，用「北美运动人群精准获客」开场，还可以聊官网/独立站承接与再营销。",
      source: "https://partners.xbotgo.com/",
      tag: "cooperation"
    },
    {
      title: "GTC2026 全球流量大会 11/4-5 上海启幕（本周！）",
      date: "2026-10-28",
      summary: "白鲸出海主办，上海世博展览馆 H3 馆，1800+ 企业高管、120+ 展商、15000+ 从业者；游戏/AI/短剧三大峰会 + AI 漫剧沙龙 + 全球游戏对接会（闭门审核制），普通票免费。",
      bizValue: "这是本周最重要的人脉场：游戏对接会是预约制的精准商洽，AI 峰会能一次性见到元巅、Moonix 等新锐公司高管。建议 Jill 至少报名 11/5 上午 AI+出海峰会 + 下午短剧峰会，现场加微信比发 20 封邮件有用。目标客户名单提前打好标签带去。",
      source: "https://m.36kr.com/p/4043574385398921",
      tag: "cooperation"
    },
    {
      title: "埃塞俄比亚成非洲首个开放外资持牌线上金融的市场",
      date: "2026-10-31",
      summary: "埃塞俄比亚纳入中资出海现金贷监测池：首个允许外资持牌线上金融的非洲市场，取牌需央行五部门逐项批文、约 7 个月，竞争几乎为零、日下载约 0.6 万、CAC 约 10 美元。",
      bizValue: "新市场的先发窗口：竞争为零、获客便宜，但行政准入+外汇管制风险高。适合「技术+资金输出、本地持牌方放款」的轻模式。有东非布局想法的金融客户，这条是很好的开会话题。",
      source: "https://mp.weixin.qq.com/s?__biz=MzY5MjUwMTk0OA==&mid=2247483680&idx=1&sn=43a826add11c1f97cba949d104bb6c8c",
      tag: "cooperation"
    },
    {
      title: "沙特试水窗口：中资消费信贷 App 小规模验证投放",
      date: "2026-10-31",
      summary: "监测到 3 款中资背景消费信贷 App 进入沙特测试投放（素材量约 180 条/日）：单客价值高（ARPU 全球领先）、坏账可控，但 CAC 约 65 美元、须 SAMA 牌照+本地实体。",
      bizValue: "沙特的正确打开方式是 BNPL/工资贷等场景产品，不做现金贷主线。有海湾野心的金融客户，可以聊「高客单+低量」的利润盘逻辑——但要先确认对方合规能力，别把牌照级风险的客户往火坑推。",
      source: "https://mp.weixin.qq.com/s?__biz=MzY5MjUwMTk0OA==&mid=2247483680&idx=1&sn=43a826add11c1f97cba949d104bb6c8c",
      tag: "cooperation"
    },
    {
      title: "加纳「点名即断付」：央行 Notice 36 点名 20 款无牌贷款 App",
      date: "2026-10-31",
      summary: "加纳央行 10/6 点名 20 款无牌 App，10/7-8 商店批量执行 16 款下架，执行窗口压缩到 1-2 天；银行与支付商禁止为其结算，投放指数单日 -94%。",
      bizValue: "非洲现金贷「公示名单→切断支付→商店下架」的流水线已经跑通。手里若有加纳/西非金融客户，立刻核实牌照与渠道合规——这种名单里没有我们客户最好，有就要马上预警，体现价值也规避风险。",
      source: "https://mp.weixin.qq.com/s?__biz=MzY5MjUwMTk0OA==&mid=2247483680&idx=1&sn=43a826add11c1f97cba949d104bb6c8c"
    },
    {
      title: "巴基斯坦催收刑事化：NCCIA 逮捕 39 人",
      date: "2026-10-07",
      summary: "巴基斯坦网络犯罪调查局在拉合尔逮捕 39 人（非法呼叫中心用贷款 App 获取通讯录+AI 生成不雅图勒索），缴获 40 台电脑 41 部手机——贷后催收越线已从行政违规升格为刑事犯罪。",
      bizValue: "给所有出海金融客户的风险提示素材：'催收动通讯录在很多市场已是刑事风险'。反过来，合规催收+合规投放的持牌客户值得重点服务——出清潮里活下来的会拿到更大的盘子。",
      source: "https://mp.weixin.qq.com/s?__biz=MjM5MTk4NDkzNw==&mid=2450262623&idx=2&sn=1b4b483f6781ddb8452adeafb2786e01"
    },
    {
      title: "印尼 OJK：日利率上限降至 0.1%/日（年化约 36%），CAC 涨至 20 美元",
      date: "2026-10-31",
      summary: "印尼现金贷日利率上限阶梯式降至 0.1%/日，CAC 从 5-7 美元涨到约 20 美元，90 天逾期率 4.73% 逼近 OJK 5% 安全线——「高定价覆盖高坏账」的旧模型算术性失效。",
      bizValue: "印尼客户的出路只剩「复借率+场景低成本流量」。聊印尼金融客户别再聊拉新成本，聊「老客召回投放 + 场景流量」——这是他们 CFO 最关心的话题，也正好是效果投放能讲的。",
      source: "https://mp.weixin.qq.com/s?__biz=MzY5MjUwMTk0OA==&mid=2247483680&idx=1&sn=43a826add11c1f97cba949d104bb6c8c"
    },
    {
      title: "肯尼亚持牌 DCP 达 281 家，移动贷款规模 1651 亿先令",
      date: "2026-10-02",
      summary: "肯尼亚央行 9/30 再发 29 张数字信贷牌照，持牌总数 281 家（累计受理 900+ 申请）；年内放贷 959.65 万笔、金额 1651 亿肯先令；未持牌放贷人已被法院剥夺追偿权。",
      bizValue: "东非数字信贷进入「持牌者通吃」阶段。281 家持牌机构里既有本地玩家也有中资背景团队——持牌名单是公开的，可以按名单定向开发，比盲扫邮件精准得多。",
      source: "https://www.pulse.co.ke/story/281-digital-lenders-in-kenya-how-does-the-cbk-regulate-loan-apps-2026100217470566567"
    },
    {
      title: "AI 陪伴赛道收入分化：海艺 SeaHaze 月环比 +8000% 冲进收入榜 13",
      date: "2026-10-25",
      summary: "海艺科技 AI 陪伴应用 SeaHaze 近一个月收入环比 +8000%（AI 陪伴榜第 13、Google Play 口径第 8），公司 AI 业务年化收入超 1 亿美元、7 月完成超亿元 B 轮；同期 AI 角色陪伴赛道整体收入榜 Top30 增量约 380 万美元。",
      bizValue: "AI 陪伴是「单月就能从腰部冲进前排」的品类——增长全靠投放+内容迭代速度。B 轮资金刚到账的公司是首选目标（注意合作侧按内部规则核验），同赛道里还没跑出来的团队则是「买量方法论」输出对象。",
      source: "http://mp.weixin.qq.com/s?__biz=MzcxMDM2NTQ3MA==&mid=2247492064&idx=4&sn=c1de870cd605715534f2747c31049424",
      tag: "high-growth"
    },
    {
      title: "SUGO 三市场全进前三：中东语聊的「稳定性打法」样本",
      date: "2026-10-06",
      summary: "10 月海外语聊榜：SUGO 沙特第 1、菲律宾第 1、南美第 3，是唯一在三个市场全部进前三的出海产品；沙特本土应用 Sawa Hawa 冲进前三，靠游戏语音起势的产品开始压过直播派。",
      bizValue: "语聊赛道的打法在变：语音游戏化产品（游戏房+互动玩法）正在抢直播派的量。做中东社交的客户如果还在纯秀场模式，把 SUGO 的变化讲给他们听，顺势聊「玩法化素材+互动买量」的投放思路。",
      source: "https://weitoutiao.zjurl.cn/rogue/topic_share/?concern_id=1670079893080068"
    }
  ],

  // ============================================================
  // 四、出海线索池 chinaGoingGlobal
  // ============================================================
  chinaGoingGlobal: [
    {
      product: "Falla（中东北非语聊房社交 App，40+ 国用户）",
      company: "深圳音果互娱网络科技有限公司",
      hq: "广东深圳（南山区深圳湾科技生态园）",
      category: "娱乐APP",
      markets: "沙特、美国、土耳其等中东+欧美市场",
      revenue: "暂无公开数据（非游出海收入榜常客，Falla 为中东语聊头部之一）",
      recent: "10 月 Falla 在沙特、美国两大收入市场扭转连月颓势、排名回升明显；团队核心来自 YY 语音、金山软件，规模 50-150 人，2020 年成立",
      website: "https://www.kchuhai.com/company/view-13484.html",
      cooperation: "not",
      coopModel: "飞书合作表缓存未列名，按潜在客户跟进",
      agency: "暂无公开数据",
      scale: "sme",
      contacts: [
        {
          name: "李文博",
          role: "销售（快出海企业页公示团队成员）",
          email: "",
          phone: "",
          linkedin: "",
          source: "https://www.kchuhai.com/company/view-13484.html"
        }
      ],
      channels: [
        {
          label: "最对口",
          email: "lixiaoli@iyinguo.com",
          phone: "",
          source: "企知道工商档案公示邮箱（https://qiye.qizhidao.com/company/f879bbe7eb9f3b48ef1c3a5d24dfe872.html）"
        }
      ],
      contactNote: "企业公示邮箱 lixiaoli@iyinguo.com 来自工商档案；另有官网（iyinguo.com）路径可再核实。快出海页公示多位商务/销售对接人（Una/李文博/拾月/Jerry/Aaron）。",
      emailSubject: "Falla 沙特/美国双市场回暖期：中东语聊买量合作探讨",
      emailBody: "您好！我是易点天下 Yeahmobi 的 Jill，专注中国 App 出海企业的海外增长服务。看到 Falla 最近在沙特和美国两大收入市场排名回升明显，恭喜团队——中东语聊房这个「小 DAU 高营收」赛道能稳住两大市场，产品力很扎实。我们在中东娱乐社交类 App 的投放上有比较成熟的打法（语聊房用户付费意愿强、素材本地化是关键变量），可以帮 Falla 在回暖窗口把量级再推一层，同时用多渠道组合降低对单一平台的依赖。方便的话约个 15 分钟电话，我把沙特市场的投放观察和方案框架发您。Jill｜易点天下 Yeahmobi（A股上市，专注中国出海企业的海外增长服务）"
    },
    {
      product: "GENiEX（AI 潮玩对讲机，SEIVOID 寂核原创科幻 IP）",
      company: "元巅科技（杭州 METAPEX 工作室）",
      hq: "浙江杭州",
      category: "AI应用",
      markets: "欧美（Kickstarter 全球众筹）",
      revenue: "众筹约 13.45-18 万美元（达成率超 1000%），产品明年 3 月发货",
      recent: "Kickstarter 上线 1 小时达成目标；获邀 GTC2026 上海开幕式演讲（AI 与下一代 IP）；配套 AI 动画剧与 UE5 游戏在推进",
      website: "暂无公开官网（产品页：Kickstarter GENiEX）",
      cooperation: "not",
      coopModel: "飞书合作表缓存未列名，按潜在客户跟进",
      agency: "暂无公开数据",
      scale: "sme",
      contacts: [
        {
          name: "周百祥",
          role: "创始人 & CEO",
          email: "",
          phone: "",
          linkedin: "",
          source: "白鲸出海对话创始人专栏 / GTC2026 议程（https://news.qq.com/rain/a/20260903A0992700）"
        }
      ],
      channels: [],
      contactNote: "未找到公开邮箱/电话；创始人周百祥为公开对口决策人，GTC2026（11/4-5 上海）现场可建联，或经白鲸出海对接。小团队一把手管增长，触达效率高。",
    },
    {
      product: "Today AI（个人 AI 助理，海外公测 + 国内双线）",
      company: "Today AI（Personal AI 初创，投资方含腾讯/IDG/五源/蚂蚁/红杉中国/传音控股）",
      hq: "暂无公开数据（国内团队，海外公测先行）",
      category: "AI应用",
      markets: "海外公测（9 月起）+ 国内（9/24 上线）",
      revenue: "累计融资超 2 亿美元（2026-10 披露）",
      recent: "9 月开启海外公测；Personal AI 赛道成为继 AI Coding 后资本最追捧方向，巨头接连入局",
      website: "暂无公开数据",
      cooperation: "not",
      coopModel: "飞书合作表缓存未列名，按潜在客户跟进",
      agency: "暂无公开数据",
      scale: "head",
      contacts: [],
      channels: [],
      contactNote: "未找到公开联系人/邮箱；投资方阵容（IDG/腾讯/五源/蚂蚁/红杉中国/传音）说明机构化运作，建议通过《中国经营报》报道方或脉脉/LinkedIn 搜「Today AI 增长」补齐触达路径。",
    },
    {
      product: "XbotGo Falcon / Chameleon（AI 体育自动追踪相机）",
      company: "XbotGo",
      hq: "暂无公开数据（全球品牌运营，北美为主力市场）",
      category: "AI应用",
      markets: "北美（Best Buy 220+ 门店）、全球电商",
      revenue: "暂无公开数据（全球用户 21 万+，直播赛事 50 万+ 场，合作俱乐部 1000+）",
      recent: "宣布进驻全美 220+ 家 Best Buy，成为唯一入驻的专业 AI 运动相机品牌；XbotGo App 5.0 上线 AI 赛事分析；40+ 专利认证",
      website: "https://xbotgo.com",
      cooperation: "not",
      coopModel: "飞书合作表缓存未列名，按潜在客户跟进",
      agency: "暂无公开数据",
      scale: "sme",
      contacts: [
        {
          name: "",
          role: "Marketing & Partnerships（官网公示商务对接）",
          email: "Business@XbotGo.com",
          phone: "+1 (888) 894-1886",
          linkedin: "",
          source: "https://xbotgo.com（官网 Contact Us 公示）"
        }
      ],
      channels: [
        {
          label: "最对口",
          email: "Business@XbotGo.com",
          phone: "+1 (888) 894-1886",
          source: "https://xbotgo.com（官网公示 Marketing & Partnerships）"
        }
      ],
      contactNote: "官网公示商务邮箱与客服电话，另有 B2B 合作站 partners.xbotgo.com；建议主题写明「体育人群获客/北美市场」以提高回复率。",
      emailSubject: "XbotGo 北美体育季获客：AI 相机品牌的投放合作思路",
      emailBody: "XbotGo 团队好！我是易点天下 Yeahmobi 的 Jill，专注中国出海品牌的海外增长服务。祝贺 XbotGo 进驻全美 220+ 家 Best Buy——从众筹爆款走到线下渠道，这个节点最需要的是把品牌搜索热度沉淀成私域和复购。我们在北美运动人群（家长/教练/俱乐部三类决策人）的精准触达和再营销上有成熟打法，能帮 Falcon/Chameleon 在节日购物季把线下渠道流量反哺到线上转化。可否约 15 分钟聊聊你们 Q4-Q1 的增长重点？Jill｜易点天下 Yeahmobi（A股上市，专注中国出海企业的海外增长服务）"
    },
    {
      product: "Moonix 月刻 AI 眼镜",
      company: "Moonix（月刻）",
      hq: "暂无公开数据（GTC2026 浙江区参会企业）",
      category: "AI应用",
      markets: "国内 + 海外（出海筹备/扩张期）",
      revenue: "暂无公开数据",
      recent: "AI 眼镜新锐品牌；市场 VP 洪叶出席 GTC2026 上海「区域化突围」圆桌，主动进行品牌曝光与渠道拓展",
      website: "暂无公开数据",
      cooperation: "not",
      coopModel: "飞书合作表缓存未列名，按潜在客户跟进",
      agency: "暂无公开数据",
      scale: "sme",
      contacts: [
        {
          name: "洪叶",
          role: "市场 VP（GTC2026 圆桌嘉宾）",
          email: "",
          phone: "",
          linkedin: "",
          source: "GTC2026 上海议程（http://mp.weixin.qq.com/s?__biz=MzYzNTkyMTI2Ng==&mid=2247577990&idx=2&sn=587410ba81f284601a66bab8d7e54218）"
        }
      ],
      channels: [],
      contactNote: "未找到公开邮箱；市场 VP 洪叶 11/4 将出席 GTC2026 上海，是本周线下建联的最优目标——带好 AI 硬件出海案例去现场。",
    },
    {
      product: "Imou Life（智能物联网 App，大华智能家居生态入口）",
      company: "大华科技（浙江大华技术股份有限公司 002236 旗下）",
      hq: "浙江杭州",
      category: "AI应用",
      markets: "欧洲、东南亚、中东、拉美（全球智能家居市场）",
      revenue: "暂无公开数据（App 月收入延续年初以来稳定增长，10 月厂商出海收入环比 +14.5%、年内首次进入非游出海收入榜）",
      recent: "受益智能家居出海快速增长，Imou Life 首次进入中国非游厂商出海收入 Top30",
      website: "https://www.imoulife.com",
      cooperation: "not",
      coopModel: "飞书合作表缓存未列名，按潜在客户跟进",
      agency: "暂无公开数据",
      scale: "head",
      contacts: [],
      channels: [],
      contactNote: "母大子小结构：上市公司大华旗下智能物联网子品牌，App 首次进榜说明海外 C 端预算正在加码。未找到 App 运营线公开邮箱，建议经 imoulife.com 官网商务入口或大华 IR 渠道转介。",
    },
    {
      product: "Rotate Rings（转环解谜 IAA 休闲游戏，月下载 1000 万+）",
      company: "HURELAX PTE. LTD.（Hungry Studio 新加坡运营实体）",
      hq: "新加坡（Hungry Studio 关联主体）",
      category: "游戏",
      markets: "美国为主",
      revenue: "暂无公开数据（AppMagic 口径近 30 天下载破 1000 万，DAU 接近 200 万）",
      recent: "Rotate Rings 近期居美国下载榜前列，靠 Block Blast（7000 万 DAU）内部导流起量；前 100 关低广告密度、后期逐步加压的 IAA 节奏设计引发行业讨论",
      website: "暂无公开数据",
      cooperation: "not",
      coopModel: "飞书合作表缓存未列名，按潜在客户跟进",
      agency: "暂无公开数据",
      scale: "sme",
      contacts: [],
      channels: [],
      contactNote: "未找到公开联系方式；Hungry Studio/HURELAX 可经 LinkedIn 或 GTC2026 游戏对接会（11/5 闭门预约制）触达，其买量与变现节奏均处活跃期。",
    },
    {
      product: "Kredivo（印尼/越南 BNPL 先买后付 + 数字信贷）",
      company: "FinAccel（中资参投，Kredivo 运营方）",
      hq: "新加坡（印尼、越南运营）",
      category: "金融",
      markets: "印尼、越南",
      revenue: "暂无公开数据（MAU 稳居 1000 万以上；2026 年 5 月收购越南 Timo 数字银行）",
      recent: "BNPL 低成本获客 + 全牌照模式，收购越南 Timo 延展至信用/支付/储蓄，持牌+低成本资金被视为行业样板",
      website: "https://www.kredivo.com",
      cooperation: "not",
      coopModel: "飞书合作表缓存未列名，按潜在客户跟进",
      agency: "暂无公开数据",
      scale: "head",
      contacts: [],
      channels: [],
      contactNote: "中资参投的东南亚 BNPL 龙头，模式稳健、投放节奏可控。未找到公开商务邮箱，建议经 kredivo.com 官网 partner 入口或 LinkedIn 搜其 growth/marketing 团队；越南 Timo 整合后或有新获客需求。",
    },
    {
      product: "Turtle Learn 旅龟（AI 中文教育平台，150+ 学校）",
      company: "Kazoo Technology (Hong Kong) Limited",
      hq: "中国香港（香港科学园 19W 座 3 楼 307 室）",
      category: "教育",
      markets: "中国香港、越南、印尼、马来西亚（新加坡/泰国推进中）",
      revenue: "暂无公开数据（获 2025 HolonIQ 东亚教育科技 150 强、美国 ESSA 第四级认证）",
      recent: "正式向东南亚扩张：越南/印尼加盟学习中心落地，马来西亚/新加坡国际学校合作推进；联合创始人兼 CEO Kendall Lo 公开阐述东南亚战略",
      website: "https://www.turtlelearn.com",
      cooperation: "not",
      coopModel: "飞书合作表缓存未列名，按潜在客户跟进",
      agency: "暂无公开数据",
      scale: "sme",
      contacts: [
        {
          name: "Kendall Lo",
          role: "联合创始人 & CEO",
          email: "",
          phone: "",
          linkedin: "",
          source: "The Standard 英文虎报报道（LinkedIn 公开帖）"
        }
      ],
      channels: [
        {
          label: "最对口",
          email: "support@turtlelearn.com",
          phone: "",
          source: "https://www.turtlelearn.com/zh-cn/contact（官网联络页公示）"
        }
      ],
      contactNote: "官网公示 support@turtlelearn.com（另有 support@kazootechnology.com 见服务条款）；CEO Kendall Lo 有 LinkedIn 公开活跃记录，可双线触达。小团队 B 端 + 加盟模式，市场推广预算通常由创始人直批。",
      emailSubject: "旅龟 Turtle Learn 东南亚扩张：越南/印尼家长侧获客合作思路",
      emailBody: "Kendall 您好！我是易点天下 Yeahmobi 的 Jill，专注中国教育科技企业的海外增长服务。看到旅龟已进入 150+ 所学校并正式落子越南和印尼，从 B 端校渠道向 C 端家长延伸——这个节奏下，家长侧的品牌认知往往跟不上渠道扩张速度。我们在东南亚家庭的精准触达（Facebook/Google/TikTok 多语言素材）上有成熟经验，可以帮旅龟在越南/印尼把「加盟学习中心」的本地招生线索量做起来，与学校渠道形成互补。方便的话约 15 分钟电话，我先分享一版越南市场的获客观察。Jill｜易点天下 Yeahmobi（A股上市，专注中国出海企业的海外增长服务）"
    },
    {
      product: "东南亚 AI 学习产品矩阵（AI 语伴/自适应课程）",
      company: "睿诺思教育集团",
      hq: "中国（越南河内/泰国曼谷/马来西亚吉隆坡设区域总部）",
      category: "教育",
      markets: "越南、泰国、马来西亚",
      revenue: "暂无公开数据（东南亚三国学习者 310 万，越南付费用户破 80 万）",
      recent: "2026 年在三国设区域总部；与曼谷教育局合作覆盖 200 所公立学校；国际业务副总裁陈思远公开分享本地化出海策略",
      website: "https://www.rnsvip.com",
      cooperation: "not",
      coopModel: "飞书合作表缓存未列名，按潜在客户跟进",
      agency: "暂无公开数据",
      scale: "head",
      contacts: [
        {
          name: "陈思远",
          role: "国际业务副总裁",
          email: "",
          phone: "",
          linkedin: "",
          source: "睿诺思 2026 年度社会责任报告发布稿（weixin.rnsvip.com）"
        }
      ],
      channels: [],
      contactNote: "区域总部刚落地、G 端+B 端双线推进；未找到公开邮箱，可经官网表单（rnsvip.com）或 LinkedIn 检索「睿诺思 国际业务」补齐触达路径。出海预算独立于国内主业，是新预算池。",
    },
    {
      product: "Ahlan TopOne（沙特语聊房社交 App）",
      company: "武汉东辰科技（Wuhan Dongchen Technology Co., Ltd.）",
      hq: "湖北武汉",
      category: "娱乐APP",
      markets: "沙特、海湾阿拉伯国家",
      revenue: "暂无公开数据（沙特 App Store 社交畅销榜第 34 位左右，Google Play 社交畅销在榜）",
      recent: "持续在榜沙特社交畅销 Top40；中东语聊房呈「小 DAU 高营收」特征，沙特为全球付费规模最大市场",
      website: "暂无公开数据",
      cooperation: "not",
      coopModel: "飞书合作表缓存未列名，按潜在客户跟进",
      agency: "暂无公开数据",
      scale: "sme",
      contacts: [],
      channels: [],
      contactNote: "未找到公开联系方式；建议经 LinkedIn 搜「Wuhan Dongchen / Ahlan 运营团队」或出海社群（扬帆出海/白鲸社群）建联。语聊产品买量依赖度高，是渠道合作的天然对象。",
    },
    {
      product: "MICO / YoHo 等社交娱乐 App 矩阵（中东为核心增长市场）",
      company: "赤子城科技（Newborn Town Inc.，HKEX: 9911）",
      hq: "北京",
      category: "娱乐APP",
      markets: "中东、东南亚、北美",
      revenue: "2026 年前 9 个月收入超 9.27 亿美元，同比 +33.8%（Q3 报已披露）",
      recent: "中东语聊/社交矩阵持续放量，中东市场为其主要利润来源；「大中东社交」仍是港股出海板块最强叙事之一",
      website: "https://www.newborntown.com",
      cooperation: "cooperated",
      coopModel: "易点天下已知长期合作客户（内部长期合作名单在列）",
      agency: "易点天下",
      scale: "head",
      contacts: [],
      channels: [],
      contactNote: "已是长期合作客户，本条作参照用：同品类未合作客户（如 Ahlan TopOne、Falla）都可对标「赤子城靠中东社交一年多赚 33.8%」的路径来聊投放与变现。",
    },
    {
      product: "美图秀秀 / Wink / AirBrush 等影像 AI 产品矩阵（海外订阅）",
      company: "美图公司（Meitu, Inc.，HKEX: 1357）",
      hq: "福建厦门",
      category: "AI应用",
      markets: "全球（海外月活约 9800 万，2025-06 口径）",
      revenue: "2026 Q3 影像与设计产品收入 10 亿元，同比 +28.2%（财报已披露）",
      recent: "AI 订阅 + 出海双轮驱动，VIP 订阅用户与海外收入持续高增；RoboNeo 等 AI 新产品继续扩列",
      website: "https://www.meitu.com",
      cooperation: "cooperated",
      coopModel: "易点天下已知长期合作客户（内部长期合作名单在列）",
      agency: "易点天下",
      scale: "head",
      contacts: [],
      channels: [],
      contactNote: "已是长期合作客户，本条作参照用：「AI 订阅 + 出海」是被美图验证过的模型，向国内图片/视频工具类潜在客户（对标美图路径）推介海外增长服务时是最硬的案例。",
    }
  ],

  // ============================================================
  // 五、媒体政策 policies
  // ============================================================
  policies: [
    {
      platform: "泰国政府×Meta/Google/TikTok/LINE",
      title: "【今日生效】「No ID, No Ads」：泰国社交媒体广告强制 KYC",
      date: "2026-11-01",
      detail: "11 月 1 日起所有向泰国用户投放的广告须先完成平台 KYC：个人需人脸+身份证匹配、法人需商业登记文件，验证一年有效；境外投放者同等约束（可用外国政府证件）；平台须留存广告主信息至广告结束后至少 90 天；第三方代付需同步留存付款人资质。",
      impact: "高",
      categories: ["现金贷", "短剧", "电商", "加白名单/资质"],
      bizValue: "今天生效、今天就要盯：未完成 KYC 的泰国投放会直接停摆。对现金贷/短剧/电商客户这是强制动作，主动帮客户梳理「谁去验证、用什么证件、代付结构怎么留痕」，是眼下最热的服务切口；也提醒客户：通过 KYC ≠ 内容合规，素材违规照罚。",
      source: "https://www.baijing.cn/article/57181"
    },
    {
      platform: "Meta",
      title: "【19 天】商业条款 11/20 生效：AI 功能产出风险全部由广告主承担",
      date: "2026-11-20",
      detail: "Meta 商业条款新增「AI Features」条款：AI 生成/修改内容（含默认开启的 Advantage+ 增强）的一切错误与风险由广告主承担，且不得移除 AI 水印；生效日由 10/30 推迟至 11/20。不接受的唯一方式是停止使用 Meta 商业产品。",
      impact: "高",
      categories: ["AI", "游戏", "电商", "隐私"],
      bizValue: "行业普遍反应是「Meta 的税」：广告主不能退场只能体检。给客户的标准动作清单：逐项检查 Advantage+ 创意增强（默认开启项最多）、关闭不需要的自动化、建立素材变更监控。我们若把「AI 功能体检」做成标准化交付，金融/游戏客户会买单。",
      source: "https://www.thekeyword.co/news/meta-commercial-terms-ai-liability"
    },
    {
      platform: "Google",
      title: "【15 天】Data Manager 11/16 起取消强制 SHA-256 哈希",
      date: "2026-11-16",
      detail: "Data Manager 不再要求上传前哈希：接受加密数据并在 TEE 内解密、清洗、匹配（Customer Match/增强转化/线下数据导入）；法律团队需同步更新隐私条款（明文标识符传输给第三方平台）。",
      impact: "中",
      categories: ["隐私", "电商", "游戏"],
      bizValue: "匹配率会涨（过去格式错误全被丢弃），但客户隐私条款要跟着改。给技术能力弱的客户一句话卖点：'11/16 之后我们帮你直接传明文加密包，不用再折腾哈希管道'——省下的是真金白银的匹配损耗。",
      source: "https://palai.media/en/news/google-ads-drops-mandatory-customer-data-hashing"
    },
    {
      platform: "商务部/科技部",
      title: "【14 天】AI 技术出口限制目录征求意见，11/15 截止反馈",
      date: "2026-11-15",
      detail: "拟新增 23 项 AI 相关技术到《中国禁止出口限制出口技术目录》，涉及模型/算法出海形态；DeepSeek、MiniMax 已完成全球授权相关登记（路透 10/23）。",
      impact: "中",
      categories: ["AI"],
      bizValue: "AI 出海公司要在反馈期内评估自己的技术形态是否触线。对客户的提醒话术：'出口目录 11/15 定稿，模型授权/云端 API 出海架构建议先做合规自查'。帮客户对接合规资源，也是服务商的增值项。",
      source: "https://www.pandawm.com/blog/game-ai-going-global-news-october-2026-week4.html"
    },
    {
      platform: "TikTok",
      title: "【5 天】美区 GMV Max 黑五机制：11/6 起自动创建广告计划并停投其他广告",
      date: "2026-11-06",
      detail: "11/6 起系统仅对未创建 GMV Max 广告的报名商品自动生成计划，其他非 GMV Max 广告被覆盖自动停投；黑五期间商品直降、曝光位、全资券补贴按 GMV Max 计划的 ROI 与消耗分配。",
      impact: "高",
      categories: ["电商"],
      bizValue: "电商客户不搭 GMV Max 就等于放弃大促资源池。11/6 前最后一周是帮客户搭计划、定 ROI 目标、绑支付方式的窗口——这是本周最紧急、最容易出成绩的动作。",
      source: "https://webapp.feheadline.com/news/10527224/87674"
    },
    {
      platform: "Google",
      title: "PMax 新 campaign 12/4 起默认开启图像提取",
      date: "2026-12-04",
      detail: "12/4 起新建 Performance Max 默认从落地页提取高清图用于全版位素材（Search/YouTube/Display/Discover/Gmail/Maps）；现有 campaign 不受影响，API 新建需显式 OPT_OUT。",
      impact: "中",
      categories: ["隐私", "电商", "金融"],
      bizValue: "落地页有合规敏感内容的客户（利率表、资质声明、擦边封面）必须提前 opt-out，否则素材被平台自动抓取投放、审核连带风险。列入 12 月客户巡检清单。",
      source: "https://adpilotapp.com/articles/latest-google-ads-features"
    },
    {
      platform: "Meta",
      title: "HEC 特类广告改为 AI 主动预审，BNPL/加密信贷明确纳入 Credit",
      date: "2026-10-15",
      detail: "Meta 多模态分类器在首次展示前扫描全部广告（房产/招聘/信贷信号），未申报特类也可能被自动归类并限制定向；BNPL 与加密借贷平台明确划入 Credit 特类；加密广告主需 FCA/SEC/BaFin 等监管牌照三级授权。",
      impact: "高",
      categories: ["现金贷", "金融", "加白名单/资质"],
      bizValue: "对出海金融客户的直接冲击：素材里出现利率计算器、BNPL 结算流程都可能被自动识别为信贷广告、定向被大幅阉割。帮客户做「素材 HEC 风险扫描 + 主动申报策略」，比事后救户便宜得多。",
      source: "https://www.1clickreport.com/blog/meta-ad-policy-changes-2026-compliance-guide"
    },
    {
      platform: "Meta",
      title: "个人属性政策扩围：间接暗示也不行，落地页首屏纳入审核",
      date: "2026-10-20",
      detail: "Meta 扩大执行「个人属性」禁令：条件式表述（'如果你正在负债…'）、共情钩子（'我们懂你的难'）、暗示性定向统统违规；多模态审核把落地页首屏内容与广告文案合并评判；健康美妆类拒审率一度飙升 34%。",
      impact: "高",
      categories: ["现金贷", "金融", "游戏", "AI"],
      bizValue: "现金贷素材的经典写法（'缺钱？秒批下款'）已经整条踩线。给金融客户的最小改动建议：文案只讲产品与功能、不讲用户处境，落地页首屏与广告文案保持一致。这套「素材合规改写」能力可以直接打包报价。",
      source: "https://www.1clickreport.com/blog/meta-ad-policy-changes-2026-compliance-guide"
    },
    {
      platform: "Meta",
      title: "欧盟政治广告禁令延续：Social Issues 类目在 EU 不可投",
      date: "2026-10-10",
      detail: "Meta 于 2025 年 10 月起在欧盟全面停止政治/选举/社会议题广告（响应欧盟政治广告法规），该类目在 EU 目前无法开户投放，也无需 EU 授权声明。",
      impact: "低",
      categories: ["加白名单/资质"],
      bizValue: "提醒客户：EU 市场别碰社会议题类创意（环保、公益、身份议题都可能被误判），白名单账户也要防素材误触。低频但省事的一条。",
      source: "https://upload.ad/blog/special-ad-categories"
    },
    {
      platform: "Google",
      title: "金融服务验证 2027 初扩至美国、加拿大",
      date: "2026-10-20",
      detail: "Google 金融广告验证将覆盖美加（分阶段 2027 年初推行）：广告主须证明获监管授权/注册/豁免；Google 与美国银行家协会、加拿大银行家协会合作核验；42 国已运行。",
      impact: "中",
      categories: ["金融", "加白名单/资质"],
      bizValue: "给想投美加的金融客户的倒排提醒：2026 Q4 就该开始整理牌照文件、统一主体名称、审计落地页——等 Google 通知再动手一定来不及。谁先准备好谁先投。",
      source: "https://wersm.com/google-ads-financial-services-verification-us-canada/"
    },
    {
      platform: "印尼 OJK",
      title: "印尼现金贷日利率上限降至 0.1%/日（年化约 36%），持续高压执法",
      date: "2026-10-31",
      detail: "印尼日利率上限阶梯式降至 0.1%/日；OJK 9 月对 8 家 P2P/现金贷行政处罚，PASTI 工作组 8-9 月处置 241 家非法网贷；1-8 月发出 115 项书面警告、34 项罚款，其中广告披露违规罚单 11 张。",
      impact: "高",
      categories: ["现金贷", "金融"],
      bizValue: "注意「广告信息披露违规」已成独立处罚项——素材里的利率展示不合规会直接吃罚单。印尼客户的投放素材需要过一道披露合规审查，这可以是金融线服务的固定模块。",
      source: "https://mp.weixin.qq.com/s?__biz=MzY5MjUwMTk0OA==&mid=2247483680&idx=1&sn=43a826add11c1f97cba949d104bb6c8c"
    },
    {
      platform: "加纳央行",
      title: "加纳「点名即执行」：Notice 36 后 1-2 天内批量下架 16 款贷款 App",
      date: "2026-10-08",
      detail: "央行公示 20 款无牌 App（10/6）→ Google Play 批量下架 16 款（10/7-8）；银行/PSP 禁止为其结算；在架 43 款、累计下架 29 款；持牌方流量成本短期降 15-25%。",
      impact: "高",
      categories: ["现金贷", "金融"],
      bizValue: "西非金融投放的合规红线已经画死：无牌/挂靠模式零生存空间。只服务持牌主体、投放前先查名单——把这条写成金融客户的准入标准，能挡掉最大的坑。",
      source: "https://mp.weixin.qq.com/s?__biz=MzY5MjUwMTk0OA==&mid=2247483680&idx=1&sn=43a826add11c1f97cba949d104bb6c8c"
    },
    {
      platform: "孟加拉央行",
      title: "孟加拉切断非法网贷支付通道（9 月生效，点名 30 款 App）",
      date: "2026-09-15",
      detail: "依据《支付与结算系统法 2024》指令所有商业银行、持牌 PSP、MFS 与 Nagad 立即切断 30 款被点名非法贷款 App 的支付服务；为非法放贷提供支付服务的机构同样违法（连坐）。",
      impact: "中",
      categories: ["现金贷", "金融"],
      bizValue: "连坐条款意味着客户的支付合作方被点名，自己也会被断通道。帮金融客户做「支付渠道穿透审查」是低频高价值的动作。",
      source: "https://mp.weixin.qq.com/s?__biz=MjM5MTk4NDkzNw==&mid=2450262623&idx=2&sn=1b4b483f6781ddb8452adeafb2786e01"
    },
    {
      platform: "尼日利亚 FCCPC",
      title: "尼日利亚 DEON 数字信贷执法全面恢复（10/12 起）",
      date: "2026-10-12",
      detail: "7 月法院确认 DEON 条例有效后，FCCPC 10/12 宣布立即恢复全国执法；牌照费 100 万奈拉（含 2 款 App，上限 5 款）、年费 3/31 前缴纳否则失效；放贷 App 禁止访问通讯录/相册。",
      impact: "中",
      categories: ["现金贷", "金融", "隐私"],
      bizValue: "尼日利亚在投的金融客户两项自查：牌照年费缴了吗、App 还在读通讯录吗。任何一项出问题都是断通道级别风险，值得主动提醒。",
      source: "https://finnaija.ng/legit-loan-apps-nigeria"
    },
    {
      platform: "Apple",
      title: "苹果 10/16 更新审核指南 + 10/22 多席位订阅上线",
      date: "2026-10-16",
      detail: "审核指南更新涉及 AI 生成内容、隐藏功能、外链条款；10/22 起支持多席位订阅购买（工具类/SaaS App 可面向团队售卖）。",
      impact: "低",
      categories: ["AI", "游戏", "电商"],
      bizValue: "AI 应用客户新版本提审前先自查 AI 内容条款；教育/工具类客户可以研究「团队席位订阅」这个新变现方向，变现模型变了，投放 ROI 口径也要跟着调。",
      source: "https://www.pandawm.com/blog/game-ai-going-global-news-october-2026-week4.html"
    }
  ],

  // ============================================================
  // 六、广告服务商侧小道消息 agencyIntel
  // ============================================================
  agencyIntel: [
    {
      title: "Google 2026 年已取消新客返点政策",
      date: "2026-10-20",
      summary: "飞书逸途官方收费说明确认：2026 年 Google 取消新客返点，仅极少数代理对高消耗客户保留有限让利，已非行业常态；开户费普遍 0 元、部分代理首充低至 100 美元。",
      bizValue: "跟客户谈 Google 户时别再拿返点当筹码（容易被内行看穿），改谈：开户时效、AI 预审合规评估、账户健康维护。返点话题主动说破反而显得专业。",
      source: "https://www.sinoclick.com/news/article/1000048943"
    },
    {
      title: "TikTok 代理返点行情：日耗 $500-600 返 4-5%，大客户阶梯更高",
      date: "2026-10-25",
      summary: "2026 年 TikTok 代理商普遍将官方返佣让利客户：日消耗 500-600 美元广告主约 4-5% 返点，大客户阶梯式上浮；官方直开与代理开户效果相同，但代理初审更快（2-3 个工作日 vs 5 个）。",
      bizValue: "TikTok 返点仍是可谈的空间，中小客户用返点切入、中大客户用「阶梯返点+服务组合」谈。代理资质、AI 素材能力、归因数据能力是客户选代理的三要素，对应准备材料。",
      source: "https://applet.10100.com/article/129485141"
    },
    {
      title: "代投市场点差 3-10%：预存返点模式仍是主流",
      date: "2026-10-28",
      summary: "市场主流收费三种：预存返点（点差 3-10%，量越大越低）、固定服务费（月几千到几万）、效果分成。行业提醒：承诺保 ROI 的代投基本不可信。",
      bizValue: "了解全行业收费带，报价时不被动；同时「不做保 ROI 承诺」反而可以当卖点讲——用数据透明和服务颗粒度建立信任，比画饼更能拿下正规客户。",
      source: "http://www.sng.cn/sc/hw/638596.html"
    },
    {
      title: "现金贷投放 Meta 单渠道占比 68%——渠道集中度已成第一风险项",
      date: "2026-10-31",
      summary: "18 个样本市场加权：Meta(FB/IG) 占 68%、Google 18%、TikTok 9%、网盟 5%；极端样本 Duxi Finanzas Meta 占 98%、DiDi Finanzas 90.88%。Meta 政策封禁/素材审核/账户连坐是最大隐忧。",
      bizValue: "这条是打金融客户最锋利的一张牌：先给对方算「你 98% 预算压在一个随时会封你户的平台上」的风险账，再给多渠道方案。诊断式开场比推销式开场成交率高得多。",
      source: "https://mp.weixin.qq.com/s?__biz=MzY5MjUwMTk0OA==&mid=2247483680&idx=1&sn=43a826add11c1f97cba949d104bb6c8c"
    },
    {
      title: "Meta AI 自动改广告已成现实：代理商被迫撤素材",
      date: "2026-10-24",
      summary: "美国代理商 Exverus 反馈：Meta AI 未经开启就给在投广告加 sitelink、翻译文案、用品牌图自动生成 AI 素材，多轮检查仍难清除，被迫撤下在投广告；Bookshop.org 被默认开启 AI 插画功能后全量关闭。",
      bizValue: "11/20 新条款生效前，帮客户做一轮「Advantage+ 默认功能关闭」巡检是必须动作，也是免费展示专业度的机会。金融/游戏客户尤其要做。",
      source: "https://www.thekeyword.co/news/meta-commercial-terms-ai-liability"
    },
    {
      title: "AI 素材生命周期缩至 72 小时，素材产能成代理选型硬指标",
      date: "2026-10-25",
      summary: "2026 年素材生命周期缩短至 72 小时，行业共识：代理商的核心竞争力=自研 AI 素材工具+合规风控+归因数据能力；飞书逸途等已接入 Sora-2/seedance 级视频模型做一键生成。",
      bizValue: "客户开始用「素材产能」选代理——谈客户时把我们的素材产能量化成数字（日产能、测试速度、过审率），比讲代理资质更有说服力。",
      source: "https://applet.10100.com/article/129485141"
    },
    {
      title: "泰国 KYC 催生代理新服务：代验证 + 证件合规咨询",
      date: "2026-11-01",
      summary: "泰国 No ID No Ads 生效后，广告主需人脸/证件验证（个人人脸+身份证、法人商业登记+授权证明），验证一年有效；平台可采信 IAL2 级数字身份服务；代理侧开始提供代验证与资质预审服务。",
      bizValue: "东南亚客户在泰国的 KYC 是这几天最急的需求——谁能帮客户最快完成验证、恢复投放，谁就拿到信任分。把我们平台的 KYC 流程熟悉度变成服务话术。",
      source: "https://www.baijing.cn/article/57181"
    },
    {
      title: "灰色代理账户市场行情：FB 账户租用 5-10% 点差、Google 6-13%",
      date: "2026-10-20",
      summary: "海外灰产渠道市场上，FB 代理账户租用点差约 5-10%（另收 $70-500 不等设置费）、Google 6-13%、Bigo 3-10%；无需预审、支持加密货币充值。此类渠道无申诉保障、封户率高。",
      bizValue: "知道行情是为了防客户被坑：中小客户常被低价灰产户吸引，被封后预算打水漂。用「正规户 vs 灰产户」的全周期成本对比教育客户，是抢回被灰产截流的客户的有效话术。",
      source: "http://magic-click.xyz/en/agentskie-akkaunty-facebook"
    },
    {
      title: "金融投放通道连坐时代：支付方/商店/代理三线同步收紧",
      date: "2026-10-31",
      summary: "加纳（名单→断付→下架 1-2 天）、孟加拉（支付连坐）、印度（3 小时断链）、菲律宾（联合商店下架 50+ 平台）：金融客户的投放通道、支付通道、商店入口三线同时被监管穿透。",
      bizValue: "给金融客户做「三线合规体检」（广告账户资质、支付合作方名单、商店状态）可以打包成年度服务。合规能力正在变成金融线代理的护城河。",
      source: "https://mp.weixin.qq.com/s?__biz=MjM5MTk4NDkzNw==&mid=2450262623&idx=2&sn=1b4b483f6781ddb8452adeafb2786e01"
    },
    {
      title: "Google Demand Gen 成本调整期延长至 60 天，降低新户试错成本",
      date: "2026-10-22",
      summary: "Google Demand Gen 效果类成本调整（performance-based cost adjustment）beta 最长 60 天（原 3 周），Target CPA/ROAS 新 campaign 转化不达标时自动调整；另 Demand Gen 已支持 HTML5 素材。",
      bizValue: "新客户冷启动的确定性变高：告诉犹豫中的客户'Demand Gen 有 60 天成本保护期'，是推动他们开新渠道试水的具体理由——尤其适合被 Meta 风险吓到的金融客户做第二渠道。",
      source: "https://adpilotapp.com/articles/latest-google-ads-features"
    }
  ],

  // ============================================================
  // 七、中小 App 投放洞察 smeInsight
  // ============================================================
  smeInsight: {
    painPoints: [
      "获客成本失控：现金贷样本市场 CAC 连涨 6 周到 28.3 美元（墨西哥到 50 美元），移动游戏大盘下载一年跌 10%——中小 App 的单位获客成本普遍涨了 1-3 倍，ROI 模型频繁失灵。",
      "单渠道依赖症：Meta 在多个出海品类占比 68%-98%，AI 自动改广告 + HEC 主动预审 + 账户连坐三连击，账户安全已成中小团队最怕的「一夜归零」风险。",
      "合规能力断层：泰国广告 KYC（11/1）、印尼利率上限、各国金融牌照审查——中小团队没有法务和合规岗，政策一变就停摆，而他们恰恰是监管收紧最受伤的群体。",
      "素材产能跟不上消耗：素材生命周期缩到 72 小时，头部厂商用 AI 量产+短剧化素材碾压，中小团队 3-5 人的素材组根本扛不住日更消耗，素材衰退直接拖垮起量效率。"
    ],
    needs: [
      "「第二渠道」方案：分散 Meta 依赖（Google Demand Gen 60 天成本保护、TikTok 返点 4-5%、网盟补充），要的是低试错成本的多渠道组合，不是让我们推某个单一平台。",
      "账户安全与合规托管：KYC 代办（泰国）、金融验证材料准备（Google 2027 美加）、素材合规预审（Meta 个人属性/HEC）——把「政策变化→我的账户要不要动」这件事外包出去。",
      "AI 素材量产服务：按 72 小时素材生命周期设计的小步快跑产能包（日更素材+A/B 测试+衰退监控），别卖大套餐，卖「每周多测 30 条素材」这类可感知的增量。",
      "真实可靠的账户资源：正规一代/二代资质、透明点差、封户赔付约定——被灰产户坑过一次的中小客户，对「稳定」的付费意愿远高于对「低价」。"
    ],
    entryPoints: [
      "政策触达法：泰国 KYC（11/1）、Meta AI 条款（11/20）、Google 哈希取消（11/16）——每条政策都是一次「你受影响了吗」的天然开场，一周至少能发一轮政策关怀消息，回复率远高于陌生开发信。",
      "榜单对标法：拿同品类黑马（短剧 FlareShort +161%、AI 陪伴 SeaHaze +8000%、休闲 Rotate Rings 月下载 1000 万）给客户看：'同体量的团队用这个打法三个月跑到这里'——中小老板最吃「邻居成功了」这一套。",
      "渠道诊断法：先免费做一次「渠道集中度体检」（Meta 占比、账户结构、素材合规风险三项），输出一页纸报告再谈合作——把销售动作变成咨询动作，成交率和客单价都更高。",
      "展会现场法：GTC2026（11/4-5 上海）游戏对接会是闭门预约制精准商洽，AI/短剧峰会能见到元巅、Moonix 等新锐决策人——带着具体客户的投放诊断去现场聊，当场加微信的成功率比会后邮件高一个量级。"
    ]
  }
};
