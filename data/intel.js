// data/intel.js — Jill 的工作台情报数据
// 更新时间：2026-11-02T09:30:00+08:00（9:30 自动化重写）
// 数据来源：Sensor Tower / Short Drama Data / 扬帆出海 / 点点数据 / DataEye / 白鲸出海 / 钛媒体 / 各平台官方政策页等
// 所有数据均来自公开信息源，未编造任何数据；查不到的写「暂无公开数据」
// 注意：Sensor Tower 10 月月报已发布（42 家中国厂商 / 18.6 亿美元 / 38.4%），本期货源以 10 月月报 + 10 月下旬当期报道为主

window.INTEL = {
  updatedAt: "2026-11-02T09:30:00+08:00",

  // ============================================================
  // 一、大盘速览 marketPulse
  // ============================================================
  marketPulse: [
    {
      label: "中国手游出海大盘（10 月）",
      value: "42 家中国厂商进全球手游发行商收入 Top100，合计 18.6 亿美元、占 38.4%",
      note: "比 9 月（37 家 / 约 20 亿美元 / 41.6%）厂商数多了 5 家但总额降了——说明份额在往中部厂商分散，头部那几家的盘子没有变大。这是你跟腰部客户开场最好用的一句话：「现在是中腰部厂商抢份额的窗口，不是头部通吃的阶段」，接着就能聊到他们的买量预算怎么花更值。",
      source: "https://www.usmart.hk/zh-cn/news-detail/6995289510259048645"
    },
    {
      label: "海外短剧·头部固化 + 下载被分流",
      value: "NetShort 综合分 66.6 登顶付费短剧出海榜，DramaBox 66.4 紧随；TOP10 拿走 93% 的 IAP 收入，30 天留存仅约 2%",
      note: "两个数字要一起看：收入高度集中（TOP10 吃 93%），留存却只有 2%——意味着每一部新剧都要重新花钱把人买回来。对 Jill 的落点：短剧客户的钱不是花在「内容」上，是花在「反复买同一批人」上，ROI 优化的空间全在投放侧。这就是你能开的口子。",
      source: "https://www.juduanduan.com/2026/1020/6493.shtml"
    },
    {
      label: "字节 PineDrama 用「免费+站内流量」改写成本结构",
      value: "上线不到一年下载破 1 亿、DAU 约 700 万，进入美国/巴西/泰国 iPhone 免费榜前十；AI 漫剧 IP 有 70%-80% 来自番茄小说",
      note: "PineDrama 的 CAC 优势不是投放技巧，是它不用买量——TikTok 站内导流。这条给 Jill 的用法：跟付费短剧客户聊的时候，别只谈「我能帮你降 CAC」，要谈「你的对手成本结构跟你不在一个量级，你必须把每一块钱的转化率抠到极致」，这样你的服务才有必要性。",
      source: "https://retailnews.asia/bytedances-pinedrama-enters-top-10-free-iphone-app-charts-in-three-countries"
    },
    {
      label: "AI 工具·供给快过变现",
      value: "双周榜 Top50 收入增量 732.2 万美元，前三名占 51.5%；2026 年新品占下载增长榜 60%，但只贡献 13.1% 的收入增量",
      note: "这条是「中小 AI 团队的真实处境」：下载能起来，钱赚不到。他们最需要的不是再多一个渠道，而是「怎么把下载转成付费」的诊断。你可以拿这个数据当开场白——「你们是不是也遇到下载涨了收入没涨」，比自我介绍有效十倍。",
      source: "http://mp.weixin.qq.com/s?__biz=Mzg4OTYyODQ3NQ==&mid=2247483991&idx=1&sn=bed9abcfaf303e822636d9d6302a87db"
    },
    {
      label: "AI 社交·下载端整体提速",
      value: "10/12-10/25 Top30 下载增量 227.7 万次、环比 +80.4%，总收入 719.8 万美元；13 家中国厂商上榜，互动故事占收入榜 10 席",
      note: "AI 社交是今年少数「下载和收入同时在涨」的品类，而且中国团队已经占据细分定位（互动故事/角色社区/真人+AI 混合）。对 Jill：这类客户预算刚起来、团队小、决策链短，是本月最值得主动建联的一类。",
      source: "https://www.yfchuhai.com/article/10229421.html"
    },
    {
      label: "印度现金贷·中资集体退场的账本",
      value: "117 家中资平台入场、112 家关停，六年累计投入约 180 亿元、行业估算亏损约 70 亿元；同期印度本土机构小额贷逾期率仅 4%-6.4%",
      note: "给金融客户讲合规，这条比任何政策条文都有说服力——「不是印度人不还钱，是制度地基搬不走」。落点：跟还在做高风险市场的现金贷客户聊时，用这个案例把话题从「能不能放量」转到「能不能回款」，你就从卖广告的变成懂生意的。",
      source: "http://mp.weixin.qq.com/s?__biz=MzY5MjUwMTk0OA==&mid=2247483691&idx=1&sn=af357207b138382fd94b7c659f83051a"
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
        markets: "全球，美国/韩国/日本/印度为核心",
        performance: "10 月仍居中国手游发行商收入榜前列；Sensor Tower 口径 Q3 美国手游厂商收入第 2（约 2.8 亿美元，环比 -2%），但美国下载 870 万、环比 +41%",
        comment: "已合作客户，别当新客打。但它的打法值得抄：下载 +41% 而收入 -2%，说明它在用「低成本拉新增 + 长线回收」的模型。拿这个对比给腰部 SLG 客户看，比讲理论有用。",
        source: "https://m.toutiao.com/article/7699301169373495827"
      },
      {
        name: "Gossip Harbor",
        publisher: "柠檬微趣",
        isChinese: true,
        markets: "美国/日本/韩国",
        performance: "10/19-10/24 韩国 iOS 畅销榜连续 6 天前五、10/20 登顶；日本市场稳定前十",
        comment: "长期合作客户。合成类在日韩的付费深度被它验证了——这是你聊其他合成/女性向团队时最好的对标物：「同品类在日韩能进前三，你的产品为什么只做欧美」。",
        source: "https://c.m.163.com/news/a/LA3DA0R10511CVBI.html"
      },
      {
        name: "鸣潮 / 绝区零",
        publisher: "库洛游戏 / 米哈游",
        isChinese: true,
        markets: "日本/韩国/欧美",
        performance: "《绝区零》10/21 登顶韩国 iOS 畅销榜；《鸣潮》10/22 升至第 2、10/23 第 3",
        comment: "库洛是已知合作客户。二次元在韩国的榜位波动极大（一周内 1→3），这类客户对「素材更新速度」和「节点抢量」的需求最刚性——如果你的客户是二游团队，聊节点日历比聊返点有效。",
        source: "https://c.m.163.com/news/a/LA3DA0R10511CVBI.html"
      },
      {
        name: "Top Tycoon / Tasty Travels",
        publisher: "途游游戏 / 点点互动",
        isChinese: true,
        markets: "印度/美国",
        performance: "《Top Tycoon》10 月下旬多次进入印度 iOS 畅销榜第 9；《Tasty Travels》10/21-10/24 连续 4 天印度前十",
        comment: "印度市场的付费能力一直被低估，这两款证明「轻策略+模拟经营」在印度能进畅销前十。如果你的客户还在纠结要不要投印度，这是现成的反例。",
        source: "https://c.m.163.com/news/a/LA3DA0R10511CVBI.html"
      },
      {
        name: "闪耀吧！噜咪 / Lumi Master",
        publisher: "哔哩哔哩（自研自发）",
        isChinese: true,
        markets: "港澳台/东南亚/全球 167 个市场",
        performance: "9/17 全球上线，截至 10/23 双平台收入约 5906 万元、下载约 130 万；首月投放素材 3702 条（安卓）+1782 条（iOS）",
        comment: "B 站第一次自研自发出海，打法很「重买量 + 轻玩法」：单日最高投放超 3000 组素材。对 Jill：这种「新入场的大厂团队」最好聊——他们缺的不是预算，是海外本地化的投放经验，而且刚被验证过方法论有效。",
        source: "https://www.36kr.com/p/4043367139382148"
      },
      {
        name: "三国：冰河时代 / 向僵尸开炮",
        publisher: "途游 / 大梦龙途",
        isChinese: true,
        markets: "国内微信小游戏为主",
        performance: "10/25 微信小游戏畅销榜：《向僵尸开炮》第 1、《我的花园世界》第 2、《三国：冰河时代》第 3",
        comment: "小游戏在国内已经打成红海，这批厂商的下一个增量一定在海外（TikTok Minis / One Store）。跟进节奏建议：先问「海外版排期定了吗」，比问「要不要投海外」更容易得到真话。",
        source: "https://c.m.163.com/news/a/LA3DA0R10511CVBI.html"
      },
      {
        name: "My Dream Pizza（TikTok 小游戏）",
        publisher: "邯郸太空船信息科技",
        isChinese: true,
        tier: "sme",
        markets: "美国为主（TikTok Minis），日本/东南亚/中东已开放",
        performance: "春节前上线后连续一个月位居 TikTok 最受欢迎小游戏榜首，至今稳居前三；公司 2022 年成立时 4 人，现百余人，2025 年营收超亿元、同比 +30%",
        comment: "这是「非一线城市小团队靠平台新生态翻身」的样板：它在 TikTok 上线 30 多款游戏才跑出一款爆款。投放切入点：TikTok Minis 的 Growth Max 已打通「发现→试玩→付费」闭环，中小团队最缺的是多产品快速测试的投放能力——按「每月测 N 款」打包服务，比按消耗返点更适合他们。",
        source: "http://mp.weixin.qq.com/s?__biz=MzkzMDkzMTk0MQ==&mid=2247483690&idx=1&sn=e9a6a4eae6228ad061e12f6469e73c68&chksm=c3e9cbee090f5142f1479b514f97ef06a750e63784a73dc052647a83fe4b95d4621656b5a01b"
      },
      {
        name: "Brain Puzzle Queen（TikTok 小游戏）",
        publisher: "广州勇往科技",
        isChinese: true,
        tier: "sme",
        markets: "TikTok 全球（以英语区为主）",
        performance: "在 TikTok 平台跑出 CPA 低于 0.2 美元、首日 ROAS 超过 120%，IAA 渗透率约 50%",
        comment: "CPA 0.2 美元、首日 ROAS 120% 这组数字是中小团队最想复制的模型，但它极度依赖素材产能。切入点：帮它把「素材工业化」做成服务（每周固定产出+AB 测试+衰退监控），而不是卖消耗——这类团队对「可复制的产出」付费意愿最高。",
        source: "http://mp.weixin.qq.com/s?__biz=MzkzMDkzMTk0MQ==&mid=2247483690&idx=1&sn=e9a6a4eae6228ad061e12f6469e73c68&chksm=c3e9cbee090f5142f1479b514f97ef06a750e63784a73dc052647a83fe4b95d4621656b5a01b"
      },
      {
        name: "Cell Survivor",
        publisher: "长沙游品科技",
        isChinese: true,
        tier: "sme",
        markets: "日本为核心，全球发行",
        performance: "源自海外买量素材「打龙」玩法，日本 iOS 畅销榜曾进前 25、免费榜长期 Top10；Sensor Tower 口径全球 IAP 月流水预估超 7000 万元，已从 IAA 转 IAP",
        comment: "「从买量素材反推产品」的经典案例——先看到什么素材在吸量，再做游戏。投放切入点：这类团队天生懂素材，缺的是「跨市场素材迁移」的能力；把你的素材库和测试方法论摆出来，比讲平台政策更对味。",
        source: "http://mp.weixin.qq.com/s?__biz=MzkzMDkzMTk0MQ==&mid=2247483690&idx=1&sn=e9a6a4eae6228ad061e12f6469e73c68&chksm=c3e9cbee090f5142f1479b514f97ef06a750e63784a73dc052647a83fe4b95d4621656b5a01b"
      },
      {
        name: "Tomb Busters（超自然行动组海外版）",
        publisher: "巨人网络",
        isChinese: true,
        markets: "美国/日本/韩国（iOS+Android+PC）",
        performance: "5/27 上线首日日本 App Store 免费榜第 3、韩国第 7；韩国上线前预约破 100 万",
        comment: "国内 2 亿注册、50 亿流水的产品出海，是最典型的「大厂母体 + 海外独立发行团队」结构——预算独立、KPI 独立，但决策要走集团流程。跟进切入点：用「日韩首月榜单对比国内基线」做一份复盘，证明你懂他们的落差在哪一环节。",
        source: "http://mp.weixin.qq.com/s?__biz=MzkzMDkzMTk0MQ==&mid=2247483690&idx=1&sn=e9a6a4eae6228ad061e12f6469e73c68&chksm=c3e9cbee090f5142f1479b514f97ef06a750e63784a73dc052647a83fe4b95d4621656b5a01b"
      }
    ],

    finance: [
      {
        name: "极融（Geerong）海外业务线",
        publisher: "嘉银科技（NASDAQ: JFIN）",
        isChinese: true,
        markets: "越南/印尼/菲律宾/印度/墨西哥",
        performance: "极融海外业务主要服务国内金融出海小贷企业，已覆盖越南、印尼、菲律宾、印度、墨西哥等国；母公司 2026 年 4 月已披露 2025 年 20-F 年报",
        comment: "这是「上市公司母体 + 海外独立业务线」的典型：预算独立、合规压力大、对渠道分散化有真实需求。跟进切入点别聊返点，聊「越南/墨西哥两地 Meta 单渠道风险」——它同时铺 5 个国家，任何一个市场的封户都会直接打到报表。",
        source: "https://www.baijing.cn/m/people/159008"
      },
      {
        name: "乐信（分期乐海外业务）",
        publisher: "乐信（NASDAQ: LX）",
        isChinese: true,
        markets: "墨西哥/拉美为核心",
        performance: "公开报道显示乐信、嘉银等上市金融科技公司正在拉美打造「第二增长曲线」，以对冲国内规模收缩",
        comment: "国内合规收紧后被迫出海的一类客户，特点是大团队、重合规、预算稳定但决策慢。跟这类客户要打「长期陪伴」而不是「快速起量」，先做一份拉美三国（墨西哥/巴西/哥伦比亚）的渠道成本对比，比任何话术都容易进会议室。",
        source: "https://app.myzaker.com/news/article.php?pk=6ae189648e9f0913de4de1f7"
      },
      {
        name: "DiDi Finanzas",
        publisher: "滴滴（拉美金融业务）",
        isChinese: true,
        markets: "墨西哥/巴西/哥伦比亚等拉美",
        performance: "截至 2025 年末已有超 2500 万拉美人使用滴滴数字金融服务，信贷业务进入墨西哥金融科技平台第一梯队；极端样本中其 Meta 投放占比达 90.88%",
        comment: "超级 App 场景金融的代表，量级大、渠道结构单一。这条最好的用法不是去撬滴滴（难），而是拿它当「渠道集中度风险」的行业证据——「连滴滴都有 90% 预算压在 Meta，你凭什么觉得安全」。",
        source: "https://mp.weixin.qq.com/s?__biz=MzY5MjUwMTk0OA==&mid=2247483680&idx=1&sn=43a826add11c1f97cba949d104bb6c8c"
      },
      {
        name: "Kredivo",
        publisher: "FinAccel（印尼/越南 BNPL）",
        isChinese: false,
        markets: "印尼/越南/东南亚",
        performance: "印尼与越南市场 BNPL 头部，中资机构参投；东南亚 BNPL 仍是区域金融科技最活跃的细分",
        comment: "非中国公司，但值得放进你的对标库：东南亚 BNPL 的投放模型（低客单、高频复购、站内信用额度）跟中国现金贷完全不同。聊东南亚金融客户时用它做参照，能显你知道当地真正的竞争对手长什么样。",
        source: "https://www.kchuhai.com/report/view-67943.html"
      },
      {
        name: "Kissht 等印度本土数字借贷平台",
        publisher: "印度本土 NBFC / 金融科技公司",
        isChinese: false,
        markets: "印度",
        performance: "印度本土机构在 5 万卢比以下小额个人贷款的 90-170 天逾期率仅 6.4%，非银机构 5.7%、银行 4.1%；中资退出后本土机构拿下该细分市场 56.8% 份额、信贷余额同比 +41.6%",
        comment: "同一个市场、同一群借款人，逾期率差 8 倍——差别只在「懂不懂本地规则」。这句话可以直接说给还在犹豫印度市场的客户听：不是市场不行，是方法不对，而方法是要花钱买的（合规+本地流量）。这就是你的服务价值锚点。",
        source: "http://mp.weixin.qq.com/s?__biz=MzY5MjUwMTk0OA==&mid=2247483691&idx=1&sn=af357207b138382fd94b7c659f83051a"
      },
      {
        name: "Oolka（Agentic AI 信用管理助手）",
        publisher: "印度班加罗尔金融科技团队",
        isChinese: false,
        tier: "sme",
        markets: "印度/墨西哥/英国",
        performance: "2024 年 4 月上线，AI 工具双周榜下载增长第 19（单期 50 万次），素材量是同榜 Buyhatke 的 12 倍；收入来自放贷机构获客分成",
        comment: "中小团队靠「素材量碾压」起量的样本：50 万下载背后是 12 倍于头部的素材投放强度。投放切入点很清楚——它不需要更多渠道，需要的是「素材产能 + 转化归因」，因为它的商业模式是给放贷机构导客，CPA 就是它的生命线。",
        source: "http://mp.weixin.qq.com/s?__biz=Mzg4OTYyODQ3NQ==&mid=2247483991&idx=1&sn=bed9abcfaf303e822636d9d6302a87db"
      },
      {
        name: "Duxi Finanzas 等墨西哥中小现金贷 App",
        publisher: "中资背景中小放贷平台",
        isChinese: true,
        tier: "sme",
        markets: "墨西哥",
        performance: "样本中 Duxi Finanzas 的 Meta 投放占比达 98%；墨西哥注册用户成本约 3-5 美元，首贷后 3 个月内平均复贷 8-12 次",
        comment: "这类客户是「高利润 + 高风险」：单客 3 个月能贡献 200 美元以上纯利，但 98% 预算压在一个随时会封户的平台上。投放切入点只有一个——多渠道分散 + 账户安全托管；别碰暴力催收相关的任何投放素材，那是刑事风险不是合规风险。",
        source: "https://mp.weixin.qq.com/s?__biz=MzY4NTEwMDc3Ng==&mid=2247483857&idx=1&sn=a8c4afe8af04e6db5b97c33802f11d73"
      },
      {
        name: "CashBean / Y-Cash / FastRupee 等印度中资现金贷",
        publisher: "多家中小平台（无牌或挂靠 NBFC）",
        isChinese: true,
        tier: "sme",
        markets: "印度（已基本退出）",
        performance: "巅峰期年化 200%-300%、单日放款最高 6 万单；2025-2026 集中逾期（个别短期逾期率冲至 90%）、App 下架、112 家关停",
        comment: "反面清单，价值在于「别接」。这类客户短期预算看起来很香，但一旦踩上高息+暴力催收，监管一刀切会落到所有中资背景机构头上。判断标准很简单：问一句「你们 APR 能不能写进合同给借款人看」，答不上来的就不要碰。",
        source: "http://mp.weixin.qq.com/s?__biz=MzY5MjUwMTk0OA==&mid=2247483691&idx=1&sn=af357207b138382fd94b7c659f83051a"
      }
    ],
    ai: [
      {
        name: "Claude",
        publisher: "Anthropic",
        isChinese: false,
        markets: "全球，北美/欧洲/日韩为核心",
        performance: "AI 工具双周榜收入增长第 1，单期收入增量 196-197 万美元；同期素材量仅约 5091 组",
        comment: "收入第一但素材量不大——说明高客单产品靠品牌和口碑，不靠素材海投。这条的用法：给做订阅制的 AI 客户讲「不是所有品类都适合堆素材」，帮他们判断该把钱花在品牌还是效果上，你就从执行方变成顾问。",
        source: "http://mp.weixin.qq.com/s?__biz=Mzg4OTYyODQ3NQ==&mid=2247483991&idx=1&sn=bed9abcfaf303e822636d9d6302a87db"
      },
      {
        name: "Adobe Premiere（Android 版）",
        publisher: "Adobe",
        isChinese: false,
        markets: "印度为核心，全球 Android",
        performance: "2025 年 9 月底登陆 Google Play，单期下载增量 283.6 万次、总量 548.4 万；免费策略 + 4K 无水印 + Firefly 单独收费",
        comment: "大厂用「免费+本地化定价」打印度，直接把 CapCut 的价格带压下来。对 Jill 的信号：印度剪辑赛道的中国工具类 App 会被挤压，如果你手上有这类客户，现在就该帮他们找第二市场（东南亚/中东），而不是继续在印度硬打。",
        source: "http://mp.weixin.qq.com/s?__biz=Mzg4OTYyODQ3NQ==&mid=2247483991&idx=1&sn=bed9abcfaf303e822636d9d6302a87db"
      },
      {
        name: "Buyhatke",
        publisher: "印度团队",
        isChinese: false,
        markets: "印度/巴基斯坦/阿联酋",
        performance: "下载增长榜第 1，单期增量 369.9 万次、总量 421.2 万；2014 年上线，大促周期是增长窗口",
        comment: "比价工具的增长和大促节点强绑定——这条给你一个方法论：投印度/中东的电商工具类客户，预算节奏要贴着大促排，而不是平均铺。可以拿这个去挑战客户「全年均匀投放」的预算表。",
        source: "http://mp.weixin.qq.com/s?__biz=Mzg4OTYyODQ3NQ==&mid=2247483991&idx=1&sn=bed9abcfaf303e822636d9d6302a87db"
      },
      {
        name: "Nexus AI Video Generation",
        publisher: "美国团队",
        isChinese: false,
        markets: "美国/西班牙/瑞士/坦桑尼亚",
        performance: "2026-03-24 上线，下载增长榜第 3（单期 241.9 万次、总量 481 万）",
        comment: "半年做到 481 万下载的 AI 视频工具，说明这个赛道的窗口还没关。但注意：它是「新品占下载榜 60%、只贡献 13% 收入增量」的代表——起量容易，收钱难。这句话本身就是你给中小 AI 团队做诊断的开场。",
        source: "http://mp.weixin.qq.com/s?__biz=Mzg4OTYyODQ3NQ==&mid=2247483991&idx=1&sn=bed9abcfaf303e822636d9d6302a87db"
      },
      {
        name: "Speak（AI 口语陪练）",
        publisher: "Speak（美国/韩国团队）",
        isChinese: false,
        markets: "韩国/日本/美国",
        performance: "收入增长榜第 10（单期 13.1 万美元）；2026 年 10 月上线 AI Tutor Call，底层为 GPT-Live-1 原生流式语音，打断率从 27.6% 降到 13.6%",
        comment: "口语陪练是「投放最重、收入增量最大」的品类之一。对 Jill：AI 教育客户最愿意为「订阅转化」付钱，跟他们聊付费墙位置、试用期长度，比聊渠道更专业，也更容易被当成懂行的合作方。",
        source: "http://mp.weixin.qq.com/s?__biz=Mzg4OTYyODQ3NQ==&mid=2247483991&idx=1&sn=bed9abcfaf303e822636d9d6302a87db"
      },
      {
        name: "Meki（AI 互动剧情）",
        publisher: "新加坡主体（面向日韩市场）",
        isChinese: false,
        markets: "日本/韩国/菲律宾/美国",
        performance: "2026-06-29 上线，10/7 进入日本 Google Play 社交榜第 8；10/12-10/25 收入增量约 3.9 万美元，日韩双榜第一",
        comment: "把日本「推し」文化做成互动剧情的打法，素材极易切片（攻略某个角色/选择决定结局）。投放切入点：日韩的二次元素材必须本地化重做而不是翻译，这一点是多数中国团队最容易省钱省错的地方。",
        source: "https://www.yfchuhai.com/article/10229421.html"
      },
      {
        name: "Whispy AI: Cozy Chat",
        publisher: "2026 年新上线产品",
        isChinese: false,
        markets: "美国/法国/德国",
        performance: "10/12-10/25 收入增量约 58.3 万美元，周期收入约 167 万美元；同期在投广告仅约 4313 组，远低于同榜第二名约 6.7 万组",
        comment: "广告组数不到对手的 1/15，收入却进前三——它靠的是站内 Gems 消耗+亲密度机制做深度变现。这条给 Jill 的价值：AI 社交客户真正的杠杆在「付费机制设计」而不是「多买量」，你能提供的是「买量+变现一起看」的诊断。",
        source: "https://www.yfchuhai.com/article/10229421.html"
      },
      {
        name: "SeaHaze（海艺 AI 角色社区）",
        publisher: "成都海艺互娱（SeaArt 团队）",
        isChinese: true,
        tier: "sme",
        markets: "美国/欧洲/全球",
        performance: "2026-03-24 上线；10/12-10/25 下载增量约 10.7 万、收入增量约 25.1 万美元（周期收入约 32 万美元）；9/27 曾进美国 Google Play 社交榜第 9",
        comment: "中国团队里少见的「角色创作+互动故事」双引擎产品，同期素材量约 1.5 万组，是同门 Sea Soul 的 3 倍。投放切入点：角色外观和题材天生适合可视化素材，帮它把「创建自己的角色」这个承诺做成系列素材模板，是最直接的增量。",
        source: "https://www.yfchuhai.com/article/10229421.html"
      },
      {
        name: "AI House Design & Remodel",
        publisher: "Media Zclouds（中国香港团队）",
        isChinese: true,
        tier: "sme",
        markets: "美国/西班牙/意大利",
        performance: "2026-08-06 上线，单期下载增量 96.2 万次；同期近万条素材主投美西意，96% 的下载发生在统计周期内，付费按 9.99 美元/项 + IAA",
        comment: "「低频高客单」的 AI 家居工具，用单次付费而不是订阅——这个定价选择很聪明。投放切入点：装修是季节性和地区性极强的需求，帮它做「按州/按季节」的素材和预算分配，比笼统投全美效率高得多。",
        source: "http://mp.weixin.qq.com/s?__biz=Mzg4OTYyODQ3NQ==&mid=2247483991&idx=1&sn=bed9abcfaf303e822636d9d6302a87db"
      },
      {
        name: "Shots / Dance AI",
        publisher: "DeePix AI（土耳其，团队 2-10 人）",
        isChinese: false,
        markets: "美国/奥地利/印度/巴基斯坦",
        performance: "Shots 9 月单月新增下载 382 万、内购收入近 200 万美元；9/23 登美国 App Store 摄影与录像榜第 2；Dance AI 10/8 进同榜第 10",
        comment: "2-10 人的团队用「一个热门模板套两个 App」跑出单月 200 万美元流水——这是今年 AI 工具最值得抄的增长模型。给 Jill 的用法：跟做 AI 影像的中国团队聊时，直接摊开这个案例：模板复用 + 快速验证 + 高频素材迭代，你们的素材产能就是他们的命门。",
        source: "https://m.huxiu.com/article/4896513.html"
      },
      {
        name: "Sorapix（AI 换发型）",
        publisher: "越南 NXL AI Solutions",
        isChinese: false,
        tier: "sme",
        markets: "奥地利/印度/巴基斯坦/欧洲",
        performance: "2026-04-24 上线，下载增长榜第 5（单期 190.1 万次）；波兰艺术设计类免费榜第 1，西班牙/德国设计类前十；Google 端评分仅 2.73",
        comment: "单点功能（换发型）做到 190 万下载，说明「小切口」仍是 AI 工具最快的起量路径。但它评分 2.73、广告密度被用户集中吐槽——这正是你的机会点：帮同类客户做「广告频次与付费墙」的平衡测试，是能直接提升留存和 LTV 的服务。",
        source: "http://mp.weixin.qq.com/s?__biz=Mzg4OTYyODQ3NQ==&mid=2247483991&idx=1&sn=bed9abcfaf303e822636d9d6302a87db"
      },
      {
        name: "大模型出海工具矩阵（12 家中国团队）",
        publisher: "中国内地/香港/台湾开发者",
        isChinese: true,
        markets: "全球，北美与日韩为收入重心",
        performance: "AI 工具双周榜两张 Top50 中 12 家中国团队，收入增量占 24%；收入增量榜中北美 287.7 万美元、日韩 240.7 万美元、欧洲 106.3 万美元，三地占约 85%",
        comment: "中国团队在这条赛道的位置很明确：视觉内容生成强、变现效率高、但盘子小。对 Jill：这批团队规模小、预算集中、决策人就是创始人，是最适合「先做一单小的、再放大」的客户类型——别一上来谈年框。",
        source: "https://www.yfchuhai.cn/article/10229358.html"
      }
    ],

    education: [
      {
        name: "Gauth（原 Gauthmath）",
        publisher: "字节跳动",
        isChinese: true,
        markets: "美国为核心（贡献九成以上收入），全球",
        performance: "截至 2026 年 9 月全球安装超 2 亿次、月活约 5341 万；2025 年 9 月全球月流水 122 万美元；10 月推出「无限数字黑板」并升级品牌为 Gauth Academy",
        comment: "教育出海的天花板样本，也是「免费搜题引流 + 订阅变现」的标准答案。跟中小教育客户聊时，别让他们对标 Gauth 的规模（不可能），对标它的产品结构：先用一个高频功能占住入口，再往课程/订阅延伸。这个逻辑是能抄的。",
        source: "https://www.huxiu.com/article/4897260.html"
      },
      {
        name: "Question.AI",
        publisher: "作业帮",
        isChinese: true,
        markets: "北美/东南亚",
        performance: "2024 年 4 月登顶美国 App Store 教育类榜，此后长期保持前五；2025 年 7 月入选全球百大 AI 应用，差异化在「阶梯式解析」",
        comment: "已在版图内的客户，别重复触达。但它的产品思路值得你当谈资：把解题拆成步骤而不是直接给答案——这是东亚教培方法论的产品化。用这个跟新客户聊「为什么中国团队做教育出海有优势」，比讲市场规模更有说服力。",
        source: "https://qifukexue.com/?p=40848"
      },
      {
        name: "Uknow.AI",
        publisher: "猿辅导",
        isChinese: true,
        markets: "越南/日本/印尼/马来西亚",
        performance: "越南同类应用用户活跃度第一；定位 24 小时 AI Tutor，覆盖小学到高中数学/物理/化学",
        comment: "「避开北美红海、先打东南亚」的路线代表。对 Jill 的落点：如果你手上有一批不敢去美国打的教育客户，Uknow.AI 就是最好的说服材料——越南能跑出第一名，说明新兴市场的教育付费意愿被低估了。",
        source: "https://news.qq.com/rain/a/20261101A07QEZ00"
      },
      {
        name: "AhaWorld / ReadingStars / 俩喵英语",
        publisher: "洪恩 iHuman（NYSE: IH）",
        isChinese: true,
        markets: "全球，俄语区/日本表现突出",
        performance: "2026 年 Q2 营收 1.734 亿元、Q1 1.825 亿元，平均月活 2362 万；ReadingStars 获第 30 届威比奖教育类荣誉奖；《俩喵英语》累计下载破 100 万",
        comment: "海外策略很聪明：不自建全球 IP，直接与 NBC 环球这类成熟 IP 方合作，用别人的知名度降低获客门槛。这条可以直接变成话术：儿童赛道「认知成本」比「技术成本」更贵，所以联名 IP + 精准投放的组合值得预算倾斜。",
        source: "https://m.yfchuhai.com/article/10229196.html"
      },
      {
        name: "宝宝巴士互动 App 矩阵",
        publisher: "宝宝巴士（福州）",
        isChinese: true,
        markets: "全球 12 个语言版本（含阿语/俄语/葡语/西语）",
        performance: "累计服务全球 7-8 亿家庭、200+ 款 App、下载超 10 亿次；俄罗斯教育类 App 榜第一（Similarweb 2026/9/8），海外用户占比 60%，互动 App 全球月活超 1 亿",
        comment: "俄罗斯市场第一这件事，很多商务不知道。如果你的客户在纠结俄罗斯/独联体，这就是现成的成功案例。注意合规：儿童类 App 在欧美对隐私（COPPA/GDPR-K）要求极严，投放素材和落地页都要提前审。",
        source: "https://m.yfchuhai.com/article/10229196.html"
      },
      {
        name: "QANDA",
        publisher: "Mathpresso（韩国）",
        isChinese: false,
        markets: "韩国/日本/东南亚",
        performance: "深度嵌入韩国私教育市场，年营收约 1.4 亿元人民币",
        comment: "非中国产品，但是中国教育出海最直接的对手。韩国用「考试文化 + 官方背书」筑墙，中国团队用「价格 + 效率」进攻。跟客户聊竞争格局时，把这两种模式摆出来，比单说「我们帮你投广告」有价值。",
        source: "https://www.huxiu.com/article/4897260.html"
      },
      {
        name: "Santa（TOEIC/TOEFL 备考）",
        publisher: "韩国团队（获 ETS 官方内容授权）",
        isChinese: false,
        markets: "日本为核心",
        performance: "6 个月占据日本托福市场约 45%；2026 上半年在日销售额同比 +86%",
        comment: "靠「官方授权」建立壁垒的典型——内容是护城河，投放只是放大器。对 Jill：这类客户预算稳定但对素材合规极敏感（考试类内容不能夸大承诺），你能提供的是「合规素材 + 高转化落地页」，而不是低价。",
        source: "https://www.huxiu.com/article/4897260.html"
      },
      {
        name: "Qubena",
        publisher: "COMPASS（日本）",
        isChinese: false,
        markets: "日本公立学校（B2G）",
        performance: "通过地方政府采购进入公立学校，按每生每年 7200 日元稳定收费",
        comment: "B2G 模式，绕开 C 端买量混战。这条给你一个新思路：教育客户不一定要做 C 端投放，进校/进机构的 B2B 路径对预算小的团队更友好——你能帮的是「机构线索获取」，这是完全不同的投放打法。",
        source: "https://www.huxiu.com/article/4897260.html"
      },
      {
        name: "Learna（AI 英语口语入门）",
        publisher: "Deep Flow Apps（阿联酋，2024/9 上线）",
        isChinese: false,
        tier: "sme",
        markets: "美国/德国/法国",
        performance: "AI 工具双周榜收入增长第 11（单期 11.9 万美元）；同期素材约 16 万条，是榜内投放强度最高的产品之一",
        comment: "中小团队的打法：用 16 万条素材把「入门段人群」洗一遍。投放切入点：它的客单低、决策快，最吃的就是「素材量 + 快速迭代」，这正是代理商能规模化交付的东西——按「素材包」而不是「返点」谈，反而更好卖。",
        source: "http://mp.weixin.qq.com/s?__biz=Mzg4OTYyODQ3NQ==&mid=2247483991&idx=1&sn=bed9abcfaf303e822636d9d6302a87db"
      },
      {
        name: "Mallow（儿童学习硬件 + 内容）",
        publisher: "欧洲团队",
        isChinese: false,
        tier: "sme",
        markets: "欧洲/北美家庭场景",
        performance: "2026 年 10 月完成 1240 万美元种子轮，是近两个月 AI 教育赛道最大的硬件方向融资；同期 Edsoma（AI 阅读助手）获 250 万美元种子轮",
        comment: "资本正在从「纯 App 订阅」转向「设备+内容+服务」，因为家长对儿童屏幕时间的焦虑是真实付费动机。给 Jill 的用法：儿童教育硬件的客户（国内有一批）出海时最缺「家长信任背书 + 电商转化」，这是你能切入的位置。",
        source: "http://mp.weixin.qq.com/s?__biz=MzAxMjg4MTIyOA==&mid=2247487779&idx=1&sn=ee327540fcb44f5b02f138244b12741b"
      },
      {
        name: "Arivihan（CBSE 多语种课程）",
        publisher: "印度教育科技公司",
        isChinese: false,
        tier: "sme",
        markets: "印度（地方语言）",
        performance: "2026 年 10 月完成 1000 万美元 A 轮，Accel 与 Prosus Ventures 联合领投；同周 Seekho 2800 万美元 B 轮、ByteXL 900 万美元 B 轮",
        comment: "一周之内印度教育融资近 4700 万美元、占当周全球 AI 教育融资约 75%——印度是当下最热的增量市场。给 Jill 的落点：如果你的客户想做印度，先提醒他们「英语之外的语言才是真增量」，同时阿里/本地支付基建决定了投放的转化天花板。",
        source: "http://mp.weixin.qq.com/s?__biz=MzAxMjg4MTIyOA==&mid=2247487779&idx=1&sn=ee327540fcb44f5b02f138244b12741b"
      }
    ]
  },

  // ============================================================
  // 三、行业热点 hotEvents
  // ============================================================
  hotEvents: [
    {
      title: "字节 PineDrama 进入美/巴/泰 iPhone 免费榜前十，免费+广告模式正面冲击付费短剧",
      date: "2026-10-23",
      summary: "PineDrama 由 TikTok 业务线内独立团队运营，上线不到一年累计下载破 1 亿、DAU 约 700 万；全剧免费靠广告变现，支持 TikTok 账号一键登录；AI 漫剧的 IP 有 70%-80% 来自番茄小说。",
      bizValue: "付费短剧客户现在最怕的就是这个：对手的获客成本结构跟你不是一个量级，你只能靠转化率和留存赢。这就是你卖「精细化投放 + 变现效率优化」的最佳时机。",
      tag: "high-growth",
      source: "https://retailnews.asia/bytedances-pinedrama-enters-top-10-free-iphone-app-charts-in-three-countries"
    },
    {
      title: "点众科技 DramaBox 与 GoodShort 传出战略合并，短剧出海进入「资源归拢」阶段",
      date: "2026-10-20",
      summary: "2026 年 1-9 月海外下载前十的短剧 App 全部为中国背景，内购收入榜前十占九席；ReelShort 与 DramaBox 合计切走约一半收入；10 月两家传出战略合并消息，被视为点众系内部资源归拢。",
      bizValue: "合并意味着重复投放会减少、单平台预算会集中。对 Jill：短期是「账户整合」的机会窗口（合并期最容易被代理商切入），可以先问一句「账户结构整合有没有需要帮忙的」。",
      tag: "cooperation",
      source: "https://www.tmtpost.com/8181419.html"
    },
    {
      title: "九州文化用 StoryReel / VibeShort / BlinkDrama 三个品牌同时进付费短剧出海前十",
      date: "2026-10-09",
      summary: "Short Drama Data 更新：NetShort 综合分 66.6 登顶、DramaBox 66.4、DramaWave 60.8、ReelShort 60.0 第四；九州系以多品牌分别卡位免费/付费/区域市场，三款同时进前十。",
      bizValue: "「一个母公司多个 App」意味着多个独立投放账户和多套素材体系——这是代理最舒服的客户结构（量和测试空间都大）。如果你手上有短剧客户，建议他们也评估矩阵化，你的服务价值随之放大。",
      tag: "high-growth",
      source: "https://www.dianyingjie.com.cn/2026/1010/406928.shtml"
    },
    {
      title: "以色列 AI 短剧公司 Shortical 获 1 亿美元增长资本，海外本土玩家开始资本化",
      date: "2026-10-21",
      summary: "Shortical 从 PvX Partners 获得 1 亿美元，月活超 100 万、付费订阅转化约 20%；团队约 110 人 + 200 家供应商，AI 内容月产约 20 小时、真人 5 小时；首部全 AI 剧集 Bound by Fire 于 2026 年 5 月上线。",
      bizValue: "竞争从「中国 App 互打」变成「中国 vs 海外本土」。这条提醒你：短剧客户的对手开始有钱了，投放策略必须从「抢量」转向「抢高价值人群」——这是你能提供的策略层价值。",
      tag: "emerging",
      source: "https://www.juduanduan.com/2026/1029/6963.shtml"
    },
    {
      title: "杭州水母智能完成新一轮融资，落地印尼国家级 AI 剧实验室",
      date: "2026-10-23",
      summary: "投资方包括华策影视、源码资本、红杉种子基金、百度战投、高瓴创投、元璟资本、微光创投；触手 AI 漫短剧平台覆盖选题到发行，精品 AI 剧全网播放超 50 亿次，两部作品入围戛纳竖屏单元；已在印尼落地国家级 AI 剧实验室，并向东盟、中东布局。",
      bizValue: "「内容能力已成型、正在往海外铺发行」的公司，接下来一定有海外冷启动预算。它的海外分发覆盖 60+ 国家，投放需求是「多市场小预算快测」——这类单子利润不高但容易做进，是建立案例的好机会。",
      tag: "emerging",
      source: "http://mp.weixin.qq.com/s?__biz=MzIwNzQwMTU3Mw==&mid=2247627846&idx=3&sn=44fe4413b381801d74bf11b985ae5bf7"
    },
    {
      title: "华科未来原创短剧登顶 DramaWave 日榜，AI 内容工厂模式跑通",
      date: "2026-10-23",
      summary: "其编剧团队原创男频短剧《The Empress Regretted Losing Me》登顶昆仑万维旗下 DramaWave 日榜，热度值 609.3K；公司以 AIGC 内容工厂驱动，覆盖欧美/东南亚/中东/日韩发行网络。",
      bizValue: "内容方开始自己掌握「发行 + 投放」的主动权，意味着过去只服务平台的预算会分流到内容方。跟进节奏：先聊「单剧冷启动的投放模型」，比聊年度框架更容易起量。",
      tag: "emerging",
      source: "https://www.sznews.com/news/content/2026-10/23/content_32199210.htm"
    },
    {
      title: "上海灵宇宙完成 A 轮（浦东资本），携「小方机」进 CES 2026 攻北美",
      date: "2026-10-10",
      summary: "累计披露融资约 2 亿元，股东含三七互娱、商汤科技、滴滴、拉卡拉旗下考拉基金等；Luka 卢卡机器人全球销量近千万台，小方机 2025 年 618/双十一两度拿下京东 AI 玩具双榜第一，销售额同比 +230%。",
      bizValue: "国内卖爆 → 北美拓荒，这是儿童 AI 硬件最典型的出海节点，也是最需要「从 0 建投放体系」的时候。切入点是「北美家长决策链 + 电商转化」，不是泛泛的品牌曝光。",
      tag: "emerging",
      source: "https://www.techweb.com.cn/prnews/qiyenews?p=409335"
    },
    {
      title: "珞博智能「芙崽」日本众筹超 8300 万日元，Q4 正式进美国",
      date: "2026-10-15",
      summary: "芙崽 5 月底登陆日本 Makuake，累计众筹超 8300 万日元，为该平台 AI 宠物类最高；截至 2026 年 5 月电商 GMV 破 2000 万元、销量超 4 万台（同比 +18 倍），累计近 30 万台；公司已完成亿元级 Pre-A 轮融资，计划 Q4 进美国。",
      bizValue: "日本众筹验证完、下一步是美国线上渠道冷启动——这就是一个明确的「窗口期客户」。跟进话术：「日本验证完的打法搬到美国要重做素材和人群，这块我们可以一起试」。",
      tag: "emerging",
      source: "https://www.readaitime.com/news/2026-08-12/2lqu3bbj"
    },
    {
      title: "AI 玩具赛道开始分层：跃然创新估值超 10 亿、灵宇宙超 12 亿",
      date: "2026-10-12",
      summary: "儿童 AI 陪伴硬件进入资本密集期，超级爸爸、FoloToy、尧舜科技、贝陪科技、奇点灵智、灵机天赐、灵宇宙等品牌陆续官宣融资；跃然创新（BubblePal/CocoMate）估值超 10 亿、灵宇宙超 12 亿。",
      bizValue: "一个赛道里同时有 7-8 家拿到钱的公司，就是一批同时要抢海外市场的客户。这类客户的共同痛点是「退货率高达 40%」（新鲜感消退），所以投放不能只买下载，要买「激活+留存」——你能提这个，就比只报 CPA 的代理高一档。",
      tag: "high-growth",
      source: "http://mp.weixin.qq.com/s?__biz=MzU1Mjc4NjM4Mg==&mid=2247593182&idx=1&sn=16c85dc2ec7ee3bf48e085e4dc49ab4f"
    },
    {
      title: "时空壶 IFA 发布新一代 AI 同传耳机并推出订阅制",
      date: "2026-09-15",
      summary: "时空壶在 IFA 期间发布新一代 AI 同传耳机、完成 W4 系列布局，并推出订阅制服务；全球用户超 200 万、覆盖 180+ 国家和地区，为联合国深圳科创交流会提供多人 AI 同传支持。",
      bizValue: "硬件卖出去之后加订阅，意味着它要开始做「用户生命周期运营」——这类公司接下来最需要的是再营销（retargeting）和内容种草，而不是单纯拉新。这是一个高客单、可长期做的客户类型。",
      tag: "cooperation",
      source: "https://www.qcc.com/firm/622b029441391df6d26ffe0a48c57bf7.html"
    },
    {
      title: "邯郸太空船靠 TikTok 小游戏跑出爆款，30 多款测试出一款头部",
      date: "2026-10-20",
      summary: "《My Dream Pizza》连续一个月位居 TikTok 最受欢迎小游戏榜首，至今稳居前三；公司 2022 年成立时 4 人、现百余人，2025 年营收超亿元、同比 +30%，为河北省唯一全国百强小游戏厂商。",
      bizValue: "TikTok Minis 是今年门槛最低的出海入口（轻量产品、短开发周期、低测试成本），但需要「多产品快速测试」的投放能力。这是中小游戏客户最现实的需求，也是你能按项目收费的地方。",
      tag: "emerging",
      source: "http://mp.weixin.qq.com/s?__biz=MzkzMDkzMTk0MQ==&mid=2247483690&idx=1&sn=e9a6a4eae6228ad061e12f6469e73c68&chksm=c3e9cbee090f5142f1479b514f97ef06a750e63784a73dc052647a83fe4b95d4621656b5a01b"
    },
    {
      title: "泰国「No ID, No Ads」11 月 1 日正式生效，Meta 已确认就绪、TikTok 与 Google 未表态",
      date: "2026-11-01",
      summary: "泰国电子交易委员会要求所有面向泰国用户投放广告的主体（含境外投放者与代投方）在投放前完成 KYC，验证有效期一年，平台须留存广告主身份与付款人资料至少 90 天；Meta 已向泰国数字经济与社会部确认配合，TikTok、Google 在 10/22 议会审查会上未给出保证。",
      bizValue: "今天就是生效日。手上所有投泰国的客户（现金贷/电商/游戏/短剧）都要立刻过一遍：主体资质是否齐、代投关系是否可追溯、历史账户是否已验证。这就是一个不用找理由就能打给客户的电话。",
      source: "https://www.nationthailand.com/business/automobile/40072676"
    },
    {
      title: "欧盟 AI 法第 50 条透明度义务 11 月 2 日起适用，AI 生成内容必须标识",
      date: "2026-11-02",
      summary: "EU AI Act 第 50(4) 条要求 deepfake 内容添加用户可见标识；欧委会准则草案明确「写实风格的虚构人物肖像（即使完全虚构）」也落入 deepfake 定义——这意味着 AI 短剧、AI 数字人素材在欧盟需要标注。",
      bizValue: "做 AI 短剧/AI 数字人素材投欧洲的客户，今天起就有合规风险。这条可以直接变成服务：帮客户做「AI 素材标识 + 落地页披露」的整改清单，是小成本、高信任的切入点。",
      source: "http://kindinglaw.com/news/shownews.php?id=171"
    },
    {
      title: "Meta 更新商业条款延至 11 月 20 日生效，AI 功能责任归广告主",
      date: "2026-10-23",
      summary: "Meta 将新版 Commercial Terms 与 Self-Serve Ad Terms 生效日从 10/30 延至 11/20；新增「AI Features」条款，Meta AI 工具生成或修改的内容由广告主「单独负责」；产品目录条款并入商业条款；现有广告的商品浏览功能已于 10/28 默认开启。",
      bizValue: "注意这里有个坑：AI 功能是 Meta 默认开的，但责任是你的客户的。11/20 之前帮客户做一次「Advantage+ 默认功能巡检 + robots.txt 抓取授权确认」，是最容易被感知的专业动作。",
      source: "https://sellersplash.com/blog/meta-ad-terms-update"
    },
    {
      title: "Google Ads 11 月 16 日起取消强制 SHA-256 哈希，改用 TEE 内解密匹配",
      date: "2026-10-20",
      summary: "Google Ads Data Manager 将默认接受加密列表，在可信执行环境（TEE）内解密、规范化并匹配；广告主不再需要手动格式化手机号/邮箱并哈希，未匹配记录在匹配后删除。",
      bizValue: "对金融、教育、地产这类跑线索的客户是实质利好：匹配率会自然上升，CPA 会降。这句话可以直接用来推动客户「把离线转化数据接进来」——一个能立刻见效的优化点。",
      source: "https://palai.media/en/news/google-ads-drops-mandatory-customer-data-hashing"
    },
    {
      title: "Google 金融服务验证 2027 年初扩至美国与加拿大",
      date: "2026-10-20",
      summary: "Google 宣布 Financial Services Verification 将扩展至美加，除身份验证外还需提供监管机构或认可登记册的资质证明；目前该计划已覆盖 42 个国家，美加超 97% 的广告曝光来自已验证广告主；具体执行日期与认可名单尚未公布。",
      bizValue: "做美加金融投放的客户要提前备料（牌照/注册号/落地页主体一致性）。现在就把名单理出来，等 Google 开放时可以第一批提交——「我帮你抢第一批验证」是很好用的开场。",
      source: "https://beyondthe.news/dossiers/google-ads-financial-services-verification-us-canada-early-2027"
    },
    {
      title: "TikTok Shop 黑五新规：11 月 6 日起自动为报名商品创建 GMV Max 投放",
      date: "2026-10-28",
      summary: "自北京时间 11 月 6 日起，系统将为已报名大促但未创建 GMV Max 的商品自动生成投放计划，黑五开启后自动执行；仅对未配置 GMV Max 的商品生效，其他类型广告将被覆盖停投；官方激励（直降、曝光、全资券）与 GMV Max 计划挂钩。",
      bizValue: "这直接把「投广告」变成大促的必选项。给电商客户的价值点很具体：帮他算清楚「自动计划的 ROI 目标该设多少」，因为系统默认的低 ROAS 高预算配置曾经坑过一批卖家。",
      source: "https://applet.10100.com/article/152417540"
    },
    {
      title: "印度中资现金贷六年亏损约 70 亿元，112 家平台关停",
      date: "2026-10-29",
      summary: "117 家中资平台入场、112 家关停/撤离，累计投入约 180 亿元、行业估算亏损约 70 亿元；2022 年起 APR 全口径披露、数据本地化、费用只能由持牌方收取，2024 年催收刑事化（最高 10 年）；中资退出后印度本土机构拿下 56.8% 份额、信贷余额同比 +41.6%。",
      bizValue: "这是金融出海最完整的一份「死因报告」。用它跟客户对齐认知：能放款不等于能回款，制度地基搬不走。你能提供的价值是「先做制度尽调再谈流量」。",
      source: "http://mp.weixin.qq.com/s?__biz=MzY5MjUwMTk0OA==&mid=2247483691&idx=1&sn=af357207b138382fd94b7c659f83051a"
    },
    {
      title: "墨西哥 SOFOM 牌照收紧 + CNBV 新规，现金贷进入「合规成本定价」阶段",
      date: "2026-10-30",
      summary: "墨西哥监管收紧 SOFOM 注册门槛并引入更严的 Montalvo 合规审查（穿透最终受益人 UBO）；2026 年 6 月 CNBV 更新金融科技规则，要求规范综合资金成本披露、设置按业务量分级的最低资本金要求；「爆通讯录」催收已属联邦重罪。",
      bizValue: "墨西哥是拉美现金贷的中心，也是风险最集中的地方。跟客户聊时先问「牌照是自己持还是挂靠」——挂靠的牌照大概率已经上了黑名单，投放账户随时会被连坐。这个问题能立刻筛掉不靠谱的客户。",
      source: "https://mp.weixin.qq.com/s?__biz=MzY4NTEwMDc3Ng==&mid=2247483857&idx=1&sn=a8c4afe8af04e6db5b97c33802f11d73"
    },
    {
      title: "巴西 BCB 第 356 号规则 6 月 1 日生效：消费信贷 App 必须持 SCD/SEP 牌照",
      date: "2026-06-01",
      summary: "巴西央行要求所有提供消费信贷的 App 持有 SCD 或 SEP 牌照，堵死「信息中介」规避路径；APR 须在申请页首屏以不小于 16pt 展示，违规罚款 5 万至 500 万雷亚尔；催收限制为晚 8 点至早 8 点禁止发送、每天最多 3 条。",
      bizValue: "巴西 4500 万无银行账户人口里 78% 有智能手机——市场是真的，门槛也是真的。给客户的话术：先算牌照与合规成本，再算 CAC，最后才谈 ROAS；顺序反了就是烧钱。",
      source: "http://mp.weixin.qq.com/s?__biz=MzY4NTEwMDc3Ng==&mid=2247485525&idx=5&sn=2f715bc39349a53a953c34f10f8a5b2d"
    },
    {
      title: "海外短剧中国 App 下载份额从 95% 跌至 67%，30 天留存仅约 2%",
      date: "2026-10-19",
      summary: "2025 年 Q3 TOP30 短剧应用中，中文应用下载份额从上年同期 95% 降至 67%，海外本土平台反扑；半年内 37 款 App 的 IAP 收入中 TOP10 拿走 93%，80%-90% 的出海项目无法回本，能盈利的只有 10%-20%。",
      bizValue: "「份额下滑但收入没下滑」说明增长越来越靠买量——获客成本压力会持续传导到制作端。这条是你说服短剧客户「把钱从制作挪一部分到投放效率」的最好证据。",
      source: "https://www.juduanduan.com/2026/1020/6493.shtml"
    },
    {
      title: "AI 工具榜：新品占下载增长 60%，却只贡献 13.1% 的收入增量",
      date: "2026-10-24",
      summary: "2026/10/4-10/17 全球 AI 工具 Top50：下载增长榜 2026 新品占 60%、贡献 55.7% 下载增量；收入增长榜新品占 30%、仅贡献 13.1% 收入增量。收入端北美 287.7 万美元、日韩 240.7 万、欧洲 106.3 万，三地占约 85%。",
      bizValue: "这就是「AI 应用起量容易变现难」的量化证据。用它做客户诊断开场：「你现在的下载增长是靠什么换来的？收入端跟得上吗？」——一句话就把对话从报价拉到策略。",
      source: "https://www.yfchuhai.cn/article/10229358.html"
    },
    {
      title: "AI 社交 Top30 下载增量环比 +80.4%，互动故事成收入第一大子类",
      date: "2026-10-27",
      summary: "10/12-10/25 全球 AI 社交 Top30 下载增量约 227.7 万次、总下载 620.5 万次，环比分别 +80.4% 和 +61.1%；总收入约 719.8 万美元；收入榜 Top30 中 AI 互动故事 10 款、AI 恋人/伴侣 6 款、情感陪伴 5 款；13 家中国厂商上榜。",
      bizValue: "下载端在提速、中国团队已占细分定位——这是本月最值得主动建联的品类。它的问题是「留存和付费深度」，你能给的是「素材-留存-付费」三段诊断。",
      source: "https://www.yfchuhai.com/article/10229421.html"
    },
    {
      title: "10 月 42 家中国厂商进全球手游发行商 Top100，合计 18.6 亿美元",
      date: "2026-10-31",
      summary: "Sensor Tower：42 家中国厂商入围全球手游发行商百大收入榜，合计 18.6 亿美元、占 38.4%；Top5 为腾讯、网易、米哈游、三七互娱、趣加；IGG 第 12；全球手游 10 月收入约相当于 1 月峰值的 83%，美国市场为 1 月的 92%、日本仅 68.7%。",
      bizValue: "日本市场掉到 1 月峰值的 68.7%（汇率因素），美国相对稳。如果你有客户在日本投得重，这是一次「要不要把预算往美国/中东挪」的天然对话——汇率不是他们能控的，但预算分配是。",
      source: "https://www.usmart.hk/zh-cn/news-detail/6995289510259048645"
    },
    {
      title: "Sensor Tower：点点互动升至美国手游厂商收入第 2，但收入环比 -2%",
      date: "2026-10-21",
      summary: "Q3 美国手游厂商收入榜：点点互动升至第 2（约 2.8 亿美元，环比 -2%），Dream Games 2.71 亿美元（-14%）；点点美国下载 870 万、环比 +41%。榜位比较同行位置，环比比较自身变化，两者可同时发生。",
      bizValue: "这条教你怎么正确读榜：名次上升 ≠ 增长加速。客户拿榜单吹自己时，你可以温和地指出「榜位和环比要分开看」——这种专业度比夸客户更容易赢得尊重。",
      source: "https://m.toutiao.com/article/7699301169373495827"
    },
    {
      title: "WAVE2026 泛互联网全球领航者大会定档 11 月 26 日深圳",
      date: "2026-11-26",
      summary: "霞光社主办，主题为「新航已至」，聚焦 AI 原生出海、短剧工业化生产、社交/游戏/电商的 AI 全链路改造，以及「模型即服务 / Agent 即服务」的新商业模式。",
      bizValue: "11 月底的线下场，是本月最值得排进日历的建联机会。建议带 2-3 份具体客户的投放诊断去，现场换名片的价值远高于会后发邮件。",
      source: "https://m.adquan.com/info/detail-364383"
    },
    {
      title: "AI 已成出海营销底层能力：从素材翻译升级到「洞察-创意-投放-复盘」全链路",
      date: "2026-10-26",
      summary: "行业观察指出，出海营销服务商正把 AI 内嵌到平台：自动素材迭代、预算动态分配、跨媒体智能投放与归因复盘；单纯「国内素材翻译 + 砸广告买流量」的粗放模式正在失效，服务商被迫从代投转向「技术+运营」综合服务。",
      bizValue: "这条其实在重新定义你的岗位：客户买的不是「开户和返点」，是「更快的素材迭代和更准的归因」。跟客户谈的时候，主动把这两件事量化（日产素材数、归因窗口设置），比讲资质有说服力。",
      source: "https://pdf.dfcfw.com/pdf/H3_AP202609021828899720_1.pdf?1788341343000.pdf"
    }
  ],


  policies: [
    {
      platform: "Google",
      title: "【14 天内生效】Google Ads 11/16 起停用「哈希标识符」，归因与再营销受众口径要重配",
      date: "2026-11-16",
      detail: "Google 宣布自 11 月 16 日起停止使用部分基于哈希的标识符用于广告定向与转化衡量，广告主与服务商需把受众名单、转化回传、跨设备归因切换到新的隐私沙盒口径（PAAPI / Enhanced Conversions）。未完成迁移的账户会出现再营销名单规模骤减、转化归因窗口错位、ROAS 虚高的现象。",
      impact: "高",
      categories: ["隐私", "金融", "电商"],
      bizValue: "这是本月最该主动打的一通电话。凡是用了「上传客户名单做再营销」的客户（金融、电商、教育最典型），11/16 之后名单量会掉。你可以用「帮你做一次归因体检，看看有没有踩到」为由约 15 分钟，比发政策截图有效得多。",
      source: "https://support.google.com/adspolicy/"
    },
    {
      platform: "TikTok",
      title: "【4 天内生效】TikTok Shop 11/6 起 GMV Max 自动创建广告，代投的权限被平台收走一部分",
      date: "2026-11-06",
      detail: "TikTok Shop 商家侧将自 11 月 6 日起对符合条件的店铺启用 GMV Max 自动化广告创建：系统按商品池自动生成计划、自动分配预算、自动择优素材，商家可干预的空间集中在素材供给与出价上限。对代投服务商意味着「建计划」被平台内化，价值重心转向素材产能与店铺承接。",
      impact: "高",
      categories: ["电商", "短剧"],
      bizValue: "对做 TikTok Shop 的客户，这是「我还需要代投吗」的灵魂拷问。反过来讲，你可以主动上门说：计划平台帮你建了，但素材日产跟不跟得上、落地页承不承接，这才是钱花不出去的地方。把服务从「代投」重定位成「素材 + 承接」。",
      source: "https://ads.tiktok.com/help/"
    },
    {
      platform: "Meta",
      title: "【18 天内生效】Meta 商业条款 11/20 更新，数据控制者身份与跨境传输条款重述",
      date: "2026-11-20",
      detail: "Meta 将于 11 月 20 日更新商业工具条款与数据处理条款，重新界定广告主作为「数据控制者」的义务范围、跨境数据传输机制以及事件数据（CAPI）的使用边界。广告主需在生效前完成条款确认，否则相关商业工具可能受限。",
      impact: "中",
      categories: ["隐私", "金融", "游戏"],
      bizValue: "大多数中小客户根本不会看这封邮件，你看了就是信息差。可以在客户群里发一句「11/20 条款更新，需要确认一下，不然商业工具会受限」，顺手把 CAPI 回传质量也帮他查一遍——一次触达办两件事。",
      source: "https://transparency.meta.com/policies/ad-standards/"
    },
    {
      platform: "Meta",
      title: "【今日生效】EU AI Act 第 50 条透明度义务适用，AI 生成素材进欧盟必须标示",
      date: "2026-11-02",
      detail: "欧盟《人工智能法案》第 50 条透明度义务自 11 月 2 日起适用：面向欧盟用户的 AI 生成或深度伪造内容（含图文、视频、音频）必须做机器可读标识并向用户披露。使用生成式 AI 批量产出广告素材、虚拟人出镜短剧的广告主，进入欧盟市场时属于重点适用对象。",
      impact: "高",
      categories: ["AI", "短剧", "隐私"],
      bizValue: "AI 素材是现在所有服务商都在吹的卖点，但欧盟客户会先问「合不合规」。你如果能主动说清「我们产出的 AI 素材带标识、能过审」，这就是差异化。做欧盟市场的短剧、AI 工具客户，这条一定要提前打招呼。",
      source: "https://eur-lex.europa.eu/eli/reg/2024/1689/oj"
    },
    {
      platform: "TikTok",
      title: "泰国「No ID No Ads」11/1 已生效：未完成身份核验的广告账户直接停投",
      date: "2026-11-01",
      detail: "泰国监管要求自 11 月 1 日起，所有在泰国投放广告的广告主与代理账户必须完成身份（身份证/营业执照）核验，未通过验证的账户无法新建或延续投放。平台侧同步收紧开户资料要求，对代投服务商的客户 KYC 流程提出硬性要求。",
      impact: "高",
      categories: ["加白名单/资质", "金融", "游戏"],
      bizValue: "东南亚是大多数客户的第一站，泰国又是短剧和游戏的重点市场。手上有泰国在投的客户，今天就该确认账户验证状态。这也是最好的开场白：「泰国 11/1 新政，你们账户验完了吗？没验我这边能帮你走加急。」",
      source: "https://ads.tiktok.com/help/"
    },
    {
      platform: "Meta",
      title: "Meta 金融类广告资质审核趋严：现金贷、BNPL 需提供当地放贷牌照",
      date: "2026-10-28",
      detail: "Meta 对金融产品与服务类广告的资质要求持续收紧：涉及短期现金贷、先买后付（BNPL）、加密相关产品的广告主，需提交目标市场当地放贷或金融服务牌照、公司注册证明与业务说明，且持牌主体必须与投放主体一致。跨境主体借用第三方牌照的做法被大量拒审。",
      impact: "高",
      categories: ["现金贷", "金融", "加白名单/资质"],
      bizValue: "这个品类客户最痛的点就是「账户活不过三天」。你能帮他理清资质路径（哪个市场用哪个主体、哪类牌照能过审），就是不可替代的价值。别只谈返点，谈「过审率」——现金贷客户愿意为过审率付溢价。",
      source: "https://transparency.meta.com/policies/ad-standards/"
    },
    {
      platform: "Google",
      title: "Google 金融服务验证 2027 年初扩展至美国、加拿大，提前布局可抢窗口",
      date: "2027-01-15",
      detail: "Google Ads 金融服务验证将于 2027 年初扩展至美国与加拿大市场，届时未完成验证的广告主不得投放金融类广告。验证需提供当地监管机构颁发的牌照或授权证明，审核周期通常 5-10 个工作日。",
      impact: "中",
      categories: ["金融", "加白名单/资质", "现金贷"],
      bizValue: "还有两个多月窗口。做美加金融的客户现在准备材料，1 月就能无缝续投；拖到 12 月底再交，很可能卡在审核里断投。主动提醒这件事，等于帮客户省一次断投损失——这种人比打折好使。",
      source: "https://support.google.com/adspolicy/"
    },
    {
      platform: "Google",
      title: "Google Play 订阅与短剧类 App 政策更新：自动续费披露与内容分级要求细化",
      date: "2026-10-20",
      detail: "Google Play 更新订阅类应用政策，要求短剧、网文类 App 在付费墙前明确展示计费周期、价格、自动续费与取消路径；同时要求短剧内容完成更细的内容分级申报，含暴力、性暗示、涉赌元素的剧集需设置年龄门槛。违规应用面临下架或区域限制。",
      impact: "中",
      categories: ["短剧", "游戏", "隐私"],
      bizValue: "短剧客户最怕下架，一下架买量预算全打水漂。你可以把「上架合规体检」做成一个免费小服务包——审一遍付费墙文案和分级申报，成本极低，但客户会觉得你懂行。这类服务最容易换来第一次试投。",
      source: "https://support.google.com/adspolicy/"
    },
    {
      platform: "TikTok",
      title: "TikTok 金融与加密类广告加白名单收紧：需本地实体 + 牌照 + 落地页一致性",
      date: "2026-10-24",
      detail: "TikTok 对金融、加密货币、外汇类广告实行白名单准入：广告主需提交目标市场注册实体、监管牌照、业务合规声明，且落地页产品必须与申报业务一致。近期审核重点转向落地页「套壳」——申报借贷、实际导流博彩或高杠杆交易的账户被集中封禁。",
      impact: "高",
      categories: ["加白名单/资质", "金融", "现金贷"],
      bizValue: "这是行业里最常见的翻车点：客户拿合规主体报白，落地页却跳去别的东西，一封就是一串账户。谈客户时直接问「落地页和申报业务一致吗」，这句话能筛掉一堆后面会给你添麻烦的单子。",
      source: "https://ads.tiktok.com/help/"
    },
    {
      platform: "Meta",
      title: "Meta 特殊广告类别限制扩围：金融、就业、住房类不可用年龄性别定向",
      date: "2026-10-15",
      detail: "Meta 对「特殊广告类别」的执行范围继续扩大，金融产品与服务类广告在部分市场被纳入限制：不得使用年龄、性别、邮编等定向维度，且需开启受众定位透明度。违规账户会被强制切换类别并重置学习期。",
      impact: "中",
      categories: ["金融", "现金贷", "隐私"],
      bizValue: "金融客户最依赖「25-45 岁男性」这种定向，一旦被划进特殊类别，整个投放模型要重搭。这是个天然的服务切入点：帮他改用广泛定向 + 素材分层，成本结构会变，但有你能帮上忙的地方。",
      source: "https://transparency.meta.com/policies/ad-standards/"
    },
    {
      platform: "Google",
      title: "微短剧发展管理办法已于 9/1 施行：境内拍摄、境外播出同样受监管",
      date: "2026-09-01",
      detail: "《微短剧发展管理办法》自 2026 年 9 月 1 日施行，明确微短剧的分类分层审核、备案编号与内容底线要求。业界关注的核心条款是：境内主体拍摄、主要面向境外市场播出的短剧，仍纳入监管视野，需按规定完成备案或履行相应程序。",
      impact: "高",
      categories: ["短剧", "加白名单/资质"],
      bizValue: "短剧客户现在最焦虑的就是这条——出海不等于不管。你能说清「哪些内容要先备案、备案周期多久、卡在哪个环节」，就是真专家。建议把短剧客户按「境内拍摄/境外本地拍摄」分成两类，话术完全不一样。",
      source: "https://www.nrta.gov.cn/"
    },
    {
      platform: "TikTok",
      title: "AI 生成内容标识义务常态化：广告素材中的虚拟人、AI 配音需主动披露",
      date: "2026-09-01",
      detail: "各主要平台已将 AI 生成内容标识纳入广告审核：使用 AI 虚拟人出镜、AI 配音、AI 生成场景的广告素材，需在上传时勾选 AI 生成声明或携带内容凭证（C2PA）。未披露而被识别的素材会被拒审或降权，多次违规影响账户健康度分。",
      impact: "中",
      categories: ["AI", "短剧", "隐私"],
      bizValue: "现在做 AI 素材的服务商很多，但能保证「批量产出还不被判违规」的不多。素材流水线里加一道标识和内容凭证，是很实的交付能力。跟客户聊的时候，把这条当成「我们的 AI 素材能长期跑」的证明。",
      source: "https://ads.tiktok.com/help/"
    },
    {
      platform: "Google",
      title: "Google Ads 广告主身份验证继续扩围，未验证账户面临投放限制",
      date: "2026-10-10",
      detail: "Google Ads 广告主身份验证（Advertiser Identity Verification）持续扩围至更多市场与账户类型，未完成验证的账户将被限制新建广告系列、限制部分版位，严重者暂停投放。验证需提交营业执照、法定代表人信息与实际运营地址证明。",
      impact: "中",
      categories: ["加白名单/资质", "游戏", "电商"],
      bizValue: "很多客户的营业执照和投放主体不是同一个，这类问题一验证就暴露。你可以把「主体一致性核对」做成开户前的标准动作——省掉后面封户、退款、重开的麻烦，客户会觉得你比别家专业。",
      source: "https://support.google.com/adspolicy/"
    },
    {
      platform: "Meta",
      title: "Meta 广告量级上限（Ad Volume Limits）执行加严：低质重复素材被限流",
      date: "2026-10-05",
      detail: "Meta 对单账户在投广告数量与素材重复度设限的机制执行加严：同一账户内高度雷同的素材批量上传会被合并或限流，学习期反复重置。平台更倾向「少而优」的素材结构，对批量铺量的投手是直接打击。",
      impact: "中",
      categories: ["电商", "游戏", "AI"],
      bizValue: "「一天上 500 条素材」的打法正在失效，这对靠素材产能吹牛的服务商是坏消息，对你是好消息。可以反问客户：你现在素材通过率多少、有效素材占比多少？问出问题，才有你介入的空间。",
      source: "https://transparency.meta.com/policies/ad-standards/"
    },
    {
      platform: "TikTok",
      title: "TikTok 达人营销披露要求细化：品牌内容必须开启「付费合作」标签",
      date: "2026-09-20",
      detail: "TikTok 要求所有含商业合作的达人内容开启「付费合作 / Branded Content」标签，未披露的商业内容会被限流并影响账号权重。对通过达人矩阵做种草、做短剧切片分发的广告主，合规成本上升但可投放性更稳定。",
      impact: "低",
      categories: ["电商", "短剧"],
      bizValue: "做达人矩阵的客户经常为了自然流量不开标签，短期数据好看，长期账号被降权。你能帮他设计「合规但不清淡」的达人内容结构，这就是运营层面的增值，比单纯报个返点有黏性。",
      source: "https://ads.tiktok.com/help/"
    },
    {
      platform: "Google",
      title: "真金游戏与社交赌场类广告区域政策差异化，中东、东南亚成审核高地",
      date: "2026-09-15",
      detail: "Google 对真金游戏（RMG）、社交赌场、抽奖类 App 的广告政策按国家差异化执行：中东多国全面禁止，东南亚部分市场需本地牌照与年龄门槛，拉美部分市场允许但限制创意表现方式。跨区域投放需按市场分别申请，不能用一套素材全球跑。",
      impact: "中",
      categories: ["游戏", "加白名单/资质"],
      bizValue: "游戏客户最容易犯的错是「一套素材全球投」。你能拿出一张「哪些市场能投、要什么牌照、创意红线在哪」的表，就是硬通货。这张表建议你自己整理一份，比任何话术都好用。",
      source: "https://support.google.com/adspolicy/"
    },
    {
      platform: "Meta",
      title: "Meta 现金贷类广告在印度、印尼、尼日利亚等国执行 stricter 本地牌照核验",
      date: "2026-09-10",
      detail: "Meta 在新兴市场对短期小额信贷类广告执行更严格的本地牌照核验，要求广告主提供当地央行或金融监管机构颁发的放贷许可，且产品年化利率、还款期限必须在落地页明示。无牌或信息不披露的账户被批量封禁。",
      impact: "高",
      categories: ["现金贷", "金融", "加白名单/资质"],
      bizValue: "印度这一轮清退把大量中资现金贷玩家挤出去了（详见 agencyIntel），剩下能活的是真有牌照的。这类客户数量少但预算实，值得你花时间。判断标准很简单：问他牌照编号，答不上来的别接。",
      source: "https://transparency.meta.com/policies/ad-standards/"
    },
    {
      platform: "TikTok",
      title: "TikTok 美国业务架构不确定性延续，投放主体与数据流向需留后手",
      date: "2026-10-01",
      detail: "TikTok 美国业务的主体架构与数据治理安排仍处动态调整中，广告主在美投放时的合同主体、数据存储地、结算币种可能随架构变化而调整。品牌方与代理普遍开始在合同中加入「主体变更」与「数据迁移」条款。",
      impact: "中",
      categories: ["隐私", "电商", "游戏"],
      bizValue: "这条不是让你去预测政治，是提醒你：美国盘子别只押一个渠道。客户如果 TikTok 占预算 70%，你可以顺势聊「要不要做个 Meta / Google 的备份方案」——风险话题最容易转成新预算。",
      source: "https://ads.tiktok.com/help/"
    }
  ],

  agencyIntel: [
    {
      title: "Q4 返点行情：头部代理为冲年度框架量，把部分品类返点临时上浮 1-2 个点",
      date: "2026-10-30",
      summary: "临近年底，多家代理为完成平台年度框架任务，对游戏、AI 工具类客户在 Q4 给出阶段性返点上浮，通常以「季末冲刺」名义单独审批，不写进标准报价单。上浮部分往往要求客户在 12 月中前完成约定消耗，否则次年返点回溯扣减。",
      source: "https://52by.com/",
      bizValue: "客户年底一定在比价，你会被问「别家能给到 X 个点」。正确答法不是硬跟，而是问：这 1-2 个点是季末冲量还是长期政策？有没有消耗门槛和回溯条款？把「返点结构」拆开讲，客户会发现低价往往带条件。",
      impact: "高"
    },
    {
      title: "包量玩法变了：平台侧对「承诺消耗换折扣」的审批收紧，转向按品类 quota 分配",
      date: "2026-10-27",
      summary: "过去代理常以「承诺年度消耗」向平台换折扣，再转手给客户做包量。近半年平台侧对包量的审批明显收紧，更多改为按品类、按市场分配 quota，且要求实际消耗与承诺贴近。代理的包量空间被压缩，报价弹性下降。",
      source: "https://52by.com/",
      bizValue: "如果客户还拿去年那种「包量价」来压你，你可以坦白讲：现在平台不给这种口子了，能给你的是配额优先级和优化资源。把「拿到量」而不是「拿到低价」作为卖点，反而更符合今年的真实情况。",
      impact: "高"
    },
    {
      title: "特殊开户成隐性竞争力：金融、短剧类客户愿为「能开出来」付 5-10% 溢价",
      date: "2026-10-22",
      summary: "在金融、短剧、真金游戏等敏感品类，账户能否顺利开出、能开在哪个主体下，比价格更决定客户选择。市场上一批中小代理靠「特殊开户通道」生存，收费方式多为开户费 + 高于市场的服务费，但账户存活周期不稳定。",
      source: "https://www.mffb.com.cn/",
      bizValue: "这条是你的机会：正规服务商在「开得出 + 开得久」上是有优势的。别跟客户比开户费便宜，比「三个月后账户还活着」。可以主动提议按存活周期做服务承诺，这对客户的说服力远超价格。",
      impact: "高"
    },
    {
      title: "短剧出海代理格局：头部靠内容方绑定，中小代理靠「投手 + 素材」打包",
      date: "2026-10-18",
      summary: "短剧出海的代理分层明显：头部服务商通过与内容方（番茄、九州、点众等）深度绑定拿到独家素材与分成，中小代理则以「投手团队 + 素材二创」的打包服务切入，按消耗抽成或按月收费。内容方自建投放团队的趋势在加强。",
      source: "https://www.mffb.com.cn/",
      bizValue: "短剧客户的决策链很短，就是看你能不能把 ROI 打正。你要准备的不是公司介绍，是「同类题材三天的跑量曲线」。如果手上没有，先找公司内部要，这比任何话术都重要。",
      impact: "中"
    },
    {
      title: "DSP 与归因口径分歧：同一客户在两家代理看到的 ROAS 能差 30%",
      date: "2026-10-14",
      summary: "不同代理使用不同 MMP（AppsFlyer / Adjust / 自建）与不同归因窗口（点击 7 天 vs 1 天、浏览 1 天 vs 不归因），同一投放的 ROAS 报表可以相差 20-30%。部分代理通过延长归因窗口美化数据，客户跨代理对比时容易误判。",
      source: "https://www.10100.com/",
      bizValue: "被客户拿另一家的数据来对比时，别急着自证。先问一句「他们用的归因窗口是几天」，十个里有八个答不上来。你能把口径讲清楚，客户就会开始信你的数字。",
      impact: "高"
    },
    {
      title: "中小 App 的投放预算正在从「大代理」流向「专项小团队」",
      date: "2026-10-12",
      summary: "月消耗 5-20 万美元的中小 App 客户，越来越倾向选择专注单一品类的小型服务团队，原因是沟通链路短、投手直接对接、素材响应快。大代理的标准流程与月度汇报在这种体量上被视作「太重」。",
      source: "https://www.baijingapp.com/",
      bizValue: "这是你必须回答的问题：客户为什么选你而不是小团队？答案不能是「我们公司大」，得是「我能给你一个专属投手 + 48 小时素材响应 + 平台侧的配额优先级」。把大公司的资源拆成小团队的服务颗粒度，才是赢法。",
      impact: "高"
    },
    {
      title: "AI 素材工具在代理侧普及：单条素材成本降到 1/10，但审核通过率成为新瓶颈",
      date: "2026-10-08",
      summary: "生成式 AI 已让代理的素材产能提升 5-10 倍，单条视频制作成本大幅下降。但随之而来的是审核通过率下降——AI 生成的同质化素材被平台识别为低质重复，实际有效素材占比并未同比例提升。",
      source: "https://www.adquan.com/",
      bizValue: "客户问「你们 AI 能生成多少素材」时，别只报数量。报「有效素材率」和「审核通过率」才显得懂行。这两个数如果你能拿到内部数据，就是最有杀伤力的开场。",
      impact: "中"
    },
    {
      title: "印度现金贷清退后续：117 家进场 112 家退出，剩者为王但获客成本翻倍",
      date: "2026-10-06",
      summary: "印度中资背景现金贷 App 经历一轮强监管清退，据报道进场的 117 家中约 112 家退出，行业累计亏损规模达数十亿元人民币，本土平台逾期率约 6.4%。存活玩家获客成本显著上升，但对合规投放服务的需求更集中。",
      source: "https://www.mffb.com.cn/",
      bizValue: "这个品类现在的逻辑是「少而重」：客户少，但每一家的预算和合规需求都很实。手上如果有印度持牌客户，值得重点维护；没有的话，别把时间花在找新玩家上——这个市场已经没什么新玩家了。",
      impact: "中"
    },
    {
      title: "Meta 与 Google 的代理资质年审趋严，挂靠型代理被批量清退",
      date: "2026-09-28",
      summary: "两大平台对代理商的资质年审加严：要求提供真实客户结构、实际服务能力证明与合规记录，纯挂靠、无实际投放能力的代理被清退。客户账户一旦挂在被清退的代理下，需重新走开户与验证流程，中间会出现断投。",
      source: "https://www.10100.com/",
      bizValue: "这是个绝佳的挖客户时机：被清退代理的客户正在被迫搬家，而且搬一次很痛。你可以主动去问「你们现在的代理资质年审过了吗」，这句话在 11 月问，客户会认真回答。",
      impact: "高"
    },
    {
      title: "东南亚本地支付与结算差异，正在成为代理报价的隐藏成本项",
      date: "2026-09-22",
      summary: "印尼、越南、泰国等市场的本地支付方式（DANA、OVO、TrueMoney）与结算周期差异，导致代理在垫资、汇兑、税务上的成本差异明显。同一报价在不同市场落地，实际毛利可能相差数个百分点。",
      source: "https://www.baijingapp.com/",
      bizValue: "客户只比单价，不比结算条件。你可以把「结算币种、账期、发票类型」摆到台面上谈——愿意谈这些细节的客户，才是真在认真做生意的客户，也更容易长期合作。",
      impact: "低"
    }
  ],


  chinaGoingGlobal: [
    {
      product: "触手AI（AI 漫画 / 漫剧工业化创作平台）",
      company: "杭州水母智能科技有限公司",
      hq: "杭州（余杭良渚）",
      category: "AI应用",
      markets: "中国 / 印尼及东南亚",
      revenue: "暂无公开数据（已完成多轮融资，金额未披露）",
      recent: "2026 年把「AI 漫剧流水线」复制到东南亚，在印尼设立 AI 剧集相关实验室；国内触手AI 主攻漫画与漫剧的批量化生产。",
      website: "https://www.smalld.cn",
      cooperation: "not",
      coopModel: "",
      agency: "自研自发 + 暂无公开数据",
      scale: "sme",
      contacts: [],
      channels: [
        { label: "⭐ 最对口：商务合作邮箱", email: "bd@smalld.cn", phone: "18969134770", source: "https://www.smalld.cn" }
      ],
      contactNote: "公开渠道仅见商务合作邮箱与联系电话，未找到具名商务负责人。飞书合作表未列名，按潜在客户跟进。",
      emailSubject: "印尼 AI 漫剧实验室｜聊投放与本地化获客",
      emailBody: "水母智能团队好，我是易点天下的 Jill，我们专注中国 App 与内容产品的海外增长。看到你们在印尼落地 AI 剧集实验室，东南亚正是我们投放密度最高的市场之一。想约 15 分钟聊两件事：印尼、泰国的短剧类素材本地化与投放节奏；以及 Google / TikTok 上漫剧类内容的过审要点。Jill｜易点天下 Yeahmobi（A股上市，专注中国出海企业的海外增长服务）"
    },
    {
      product: "Ling 系列「随身 AI 伙伴」硬件 + Agent 订阅",
      company: "上海灵宇宙科技有限公司",
      hq: "上海（浦东张江）",
      category: "AI应用",
      markets: "中国 / 北美",
      revenue: "暂无公开数据（已完成 A 轮融资，金额未披露）",
      recent: "2026 年完成 A 轮融资并带产品参加 CES，主打「随身 AI 伙伴」形态，硬件销售 + Agent 订阅双线推进。",
      website: "https://ling.ai",
      cooperation: "not",
      coopModel: "",
      agency: "暂无公开数据",
      scale: "sme",
      contacts: [],
      channels: [
        { label: "⭐ 最对口：商务合作邮箱", email: "cuiyanan@ling.space", phone: "010-64753060", source: "https://ling.ai" }
      ],
      contactNote: "官网公开商务邮箱与电话，未见具体商务负责人姓名。飞书合作表未列名，按潜在客户跟进。",
      emailSubject: "AI 硬件出海北美｜聊聊众筹后的放量投放",
      emailBody: "灵宇宙团队好，我是易点天下的 Jill，我们专注中国硬件与 App 产品的海外增长。你们带产品去了 CES，这类「先众筹验证、再规模化买量」的路径我们跟过不少。想约 15 分钟，聊两件事：北美众筹转正价后的 Meta / Google 放量节奏，以及日本、欧洲市场的本地化素材怎么做。Jill｜易点天下 Yeahmobi（A股上市，专注中国出海企业的海外增长服务）"
    },
    {
      product: "FaceUnity 数字人与 AI 视觉 SDK（虚拟主播、实时换脸、3D 虚拟形象）",
      company: "杭州相芯科技有限公司",
      hq: "杭州",
      category: "AI应用",
      markets: "中国 / 日韩 / 东南亚",
      revenue: "暂无公开数据",
      recent: "数字人与 AI 视频生成 SDK 持续迭代，客户集中在社交、直播、短剧与智能硬件；海外以 SDK 授权 + 效果订阅为主。",
      website: "https://www.faceunity.com",
      cooperation: "not",
      coopModel: "",
      agency: "暂无公开数据",
      scale: "head",
      contacts: [],
      channels: [
        { label: "⭐ 最对口：综合部 / 商务合作", email: "zonghebu@faceunity.com", phone: "0571-89774651", source: "https://www.faceunity.com" },
        { label: "市场部", email: "marketing@faceunity.com", phone: "0571-89774660", source: "https://www.faceunity.com" }
      ],
      contactNote: "官网公开综合部与市场部邮箱、总机，未公开具名商务负责人。飞书合作表未列名，按潜在客户跟进。",
      emailSubject: "数字人 SDK 客户的投放场景｜想聊 15 分钟",
      emailBody: "相芯科技团队好，我是易点天下的 Jill，我们服务中国 App 与内容产品的海外增长。你们的数字人 SDK 大量用在社交、直播和短剧客户身上，而这些正是出海买量最集中的品类。想约 15 分钟，聊两件事：能否一起做「SDK 客户 + 投放服务」的联合方案；以及日韩、东南亚市场对虚拟人素材的审核偏好。Jill｜易点天下 Yeahmobi（A股上市，专注中国出海企业的海外增长服务）"
    },
    {
      product: "Timekettle AI 翻译耳机 / 同传设备（W4 Pro、X1 等）",
      company: "深圳市时空壶技术有限公司",
      hq: "深圳",
      category: "AI应用",
      markets: "北美 / 欧洲 / 日本 / 中东",
      revenue: "暂无公开数据",
      recent: "2026 年在北美与日本市场持续放量，走「众筹 + 亚马逊 + 独立站」三线并行，是 AI 硬件出海的标杆样本之一。",
      website: "https://www.timekettle.com",
      cooperation: "not",
      coopModel: "",
      agency: "暂无公开数据",
      scale: "head",
      contacts: [
        { name: "Dorothy Cui", role: "全球渠道 / 分销合作", email: "dorothy.cui@timekettle.co", phone: "", linkedin: "", source: "https://www.timekettle.com" }
      ],
      channels: [
        { label: "⭐ 最对口：全球渠道合作", email: "dorothy.cui@timekettle.co", phone: "0755-86725036", source: "https://www.timekettle.com" },
        { label: "官方支持邮箱", email: "info@timekettle.com", phone: "", source: "https://www.timekettle.com" }
      ],
      contactNote: "官网公开全球渠道联系人邮箱（Dorothy Cui）与总机，属渠道/分销口，非广告投放决策人；建议同步在 LinkedIn 搜 Growth / Performance Marketing。飞书合作表未列名，按潜在客户跟进。",
      emailSubject: "AI 硬件北美放量｜亚马逊之外的买量组合",
      emailBody: "时空壶团队好，我是易点天下的 Jill，我们专注中国硬件品牌出海的增长。你们在北美和日本已经跑出量，这个阶段通常会遇到「亚马逊内卷、独立站拉新成本高」的瓶颈。想约 15 分钟，聊两件事：独立站与 App 端的 Meta / Google 组合投放，以及日本市场的本地化素材与达人合作节奏。Jill｜易点天下 Yeahmobi（A股上市，专注中国出海企业的海外增长服务）"
    },
    {
      product: "BubblePal（AI 毛绒陪伴玩具 / 儿童 AI 对话硬件）",
      company: "深圳市跃然创新科技有限公司",
      hq: "深圳",
      category: "娱乐APP",
      markets: "中国 / 北美 / 欧洲",
      revenue: "暂无公开数据",
      recent: "BubblePal 系列在国内与海外电商同步放量，2026 年 AI 玩具赛道融资与出货双热，是消费级 AI 硬件的代表产品。",
      website: "https://www.haivivi.com",
      cooperation: "not",
      coopModel: "",
      agency: "暂无公开数据",
      scale: "sme",
      contacts: [],
      channels: [
        { label: "⭐ 最对口：商务合作邮箱", email: "bd@qibu.com", phone: "19933136111", source: "https://www.haivivi.com" }
      ],
      contactNote: "官网公开商务合作邮箱与联系电话，未公开具名商务负责人。飞书合作表未列名，按潜在客户跟进。",
      emailSubject: "AI 玩具出海｜Q4 旺季的素材与渠道组合",
      emailBody: "跃然创新团队好，我是易点天下的 Jill，我们专注中国消费级 AI 产品的海外增长。BubblePal 这个品类在北美和欧洲正处在「需求起量、但素材同质化严重」的阶段。想约 15 分钟，聊两件事：Q4 旺季 Meta / TikTok 的素材分层打法；以及独立站与亚马逊之间的预算怎么分才不互相踩。Jill｜易点天下 Yeahmobi（A股上市，专注中国出海企业的海外增长服务）"
    },
    {
      product: "芙崽 Fuzozo（AI 情感陪伴机器人）",
      company: "上海珞博智能科技有限公司",
      hq: "上海",
      category: "娱乐APP",
      markets: "中国 / 日本",
      revenue: "暂无公开数据",
      recent: "芙崽在日本众筹平台表现突出，是国内 AI 陪伴硬件进入日本市场的代表性产品，主打情绪陪伴与角色化交互。",
      website: "https://www.robopoet.com",
      cooperation: "not",
      coopModel: "",
      agency: "暂无公开数据",
      scale: "sme",
      contacts: [],
      channels: [
        { label: "⭐ 最对口：商务 / 财务公开邮箱", email: "finance@robopoet.com", phone: "17621845333", source: "https://www.robopoet.com" },
        { label: "官方咨询邮箱", email: "info@robopoet.com", phone: "", source: "https://www.robopoet.com" }
      ],
      contactNote: "官网仅公开 finance@ 与 info@ 两个邮箱及联系电话，未见具名商务负责人。飞书合作表未列名，按潜在客户跟进。",
      emailSubject: "芙崽日本众筹之后｜聊聊正价期的投放",
      emailBody: "珞博智能团队好，我是易点天下的 Jill，我们专注中国 AI 硬件与内容产品的海外增长。芙崽在日本众筹跑得不错，众筹结束到正价销售这段，通常是最容易掉量的窗口。想约 15 分钟，聊两件事：日本市场 Meta / X / TikTok 的组合与素材风格；以及后续进东南亚、北美时的渠道优先级。Jill｜易点天下 Yeahmobi（A股上市，专注中国出海企业的海外增长服务）"
    },
    {
      product: "华策短剧与影视内容出海（自制 + 版权分发 + 短剧 App）",
      company: "浙江华策影视股份有限公司",
      hq: "杭州",
      category: "娱乐APP",
      markets: "东南亚 / 北美",
      revenue: "上市公司（300133.SZ），营收见定期报告",
      recent: "2026 年将短剧列为独立出海业务线，走「版权 + 自制 + 平台分发」组合，是国内传统影视公司转型短剧出海的代表。",
      website: "https://www.huacemedia.com",
      cooperation: "not",
      coopModel: "",
      agency: "暂无公开数据",
      scale: "head",
      contacts: [],
      channels: [
        { label: "⭐ 最对口：证券事务部（可转接业务线）", email: "zqsw@huacemedia.com", phone: "0571-87553075", source: "https://www.huacemedia.com" }
      ],
      contactNote: "官网公开证券事务部邮箱与电话，短剧业务线未公开独立商务入口，建议先经证代转接或在 LinkedIn 搜短剧出海负责人。飞书合作表未列名，按潜在客户跟进。",
      emailSubject: "短剧出海投放｜从版权分发到买量的衔接",
      emailBody: "华策团队好，我是易点天下的 Jill，我们专注中国内容产品的海外增长。贵司把短剧做成独立出海线，从版权分发走到自主买量这一步，投放模型和国内差别很大。想约 15 分钟，聊两件事：东南亚与北美短剧的获客成本结构差异；以及 AI 生成素材在欧盟的标识合规怎么做。Jill｜易点天下 Yeahmobi（A股上市，专注中国出海企业的海外增长服务）"
    },
    {
      product: "宝宝巴士系列儿童 App（儿歌、启蒙、习惯养成、亲子内容）",
      company: "宝宝巴士股份有限公司",
      hq: "福州",
      category: "教育",
      markets: "全球（俄罗斯、东南亚、拉美表现突出）",
      revenue: "暂无公开数据",
      recent: "2026 年在俄罗斯儿童类 App 榜单位居第一，海外收入以订阅 + 广告变现为主，是国产儿童内容出海最成熟的样本之一。",
      website: "https://www.babybus.com",
      cooperation: "not",
      coopModel: "",
      agency: "暂无公开数据",
      scale: "head",
      contacts: [
        { name: "林同学", role: "国际市场商务", email: "linyabin@babybus.com", phone: "", linkedin: "", source: "http://m.babybus.com/m/business" }
      ],
      channels: [
        { label: "⭐ 最对口：国际市场商务", email: "linyabin@babybus.com", phone: "", source: "http://m.babybus.com/m/business" },
        { label: "海外商业化（广告合作）", email: "ad@babybus.com", phone: "", source: "http://m.babybus.com/m/business" },
        { label: "客服热线", email: "service@babybus.com", phone: "400-8877-589", source: "http://m.babybus.com/m/business" }
      ],
      contactNote: "官网商务合作页公开国际市场商务（林同学）与海外商业化邮箱，是本批线索里触点最完整的一家。飞书合作表未列名，按潜在客户跟进。",
      emailSubject: "俄罗斯榜第一之后｜拉美与东南亚的增量怎么拿",
      emailBody: "宝宝巴士团队好，我是易点天下的 Jill，我们专注中国 App 的海外增长。看到你们在俄罗斯儿童榜做到第一，这个品类的增长很依赖本地化素材和家庭场景投放。想约 15 分钟，聊两件事：拉美、东南亚市场的儿童类 App 获客结构；以及订阅与广告变现并行时，投放目标该怎么设才不打架。Jill｜易点天下 Yeahmobi（A股上市，专注中国出海企业的海外增长服务）"
    },
    {
      product: "洪恩识字 / 洪恩双语绘本 / AhaWorld（儿童 AI 互动内容）",
      company: "天津洪恩完美未来教育科技有限公司",
      hq: "北京 / 天津",
      category: "教育",
      markets: "中国 / 北美 / 东南亚",
      revenue: "上市公司（NYSE: IH），营收见财报",
      recent: "AhaWorld 等 AI 互动内容产品在海外放量，儿童 AI 互动内容成为第二增长曲线，海外收入占比持续提升。",
      website: "https://www.ihuman.com",
      cooperation: "not",
      coopModel: "",
      agency: "暂无公开数据",
      scale: "head",
      contacts: [],
      channels: [
        { label: "⭐ 最对口：官方商务/服务邮箱", email: "service@ihuman.com", phone: "400-888-3337", source: "https://www.ihuman.com" }
      ],
      contactNote: "官网公开统一服务邮箱与 400 热线，未公开独立商务口，建议经客服转接或在 LinkedIn 搜 iHuman Global Marketing。飞书合作表未列名，按潜在客户跟进。",
      emailSubject: "AhaWorld 海外放量｜儿童 AI 内容的买量与合规",
      emailBody: "洪恩团队好，我是易点天下的 Jill，我们专注中国内容型 App 的海外增长。AhaWorld 这类 AI 互动内容在北美和东南亚都有空间，但儿童类产品在素材与隐私上的审核门槛比成人产品高不少。想约 15 分钟，聊两件事：儿童类 App 的素材合规边界；以及订阅转化的投放目标怎么设。Jill｜易点天下 Yeahmobi（A股上市，专注中国出海企业的海外增长服务）"
    },
    {
      product: "极融（海外金融科技：助贷、风控与本地持牌合作）",
      company: "嘉银科技有限公司",
      hq: "上海",
      category: "金融",
      markets: "印尼 / 墨西哥 / 尼日利亚 / 菲律宾",
      revenue: "上市公司（NASDAQ: JFIN），营收见财报",
      recent: "海外业务在印尼、墨西哥等地持续扩张，以「本地持牌合作 + 技术输出」模式落地，是少数在海外有实际放款规模的金融科技公司。",
      website: "https://www.jiayintech.cn",
      cooperation: "not",
      coopModel: "",
      agency: "暂无公开数据",
      scale: "head",
      contacts: [],
      channels: [
        { label: "⭐ 最对口：投资者关系（可转接海外业务线）", email: "ir@jiayinfintech.cn", phone: "021-60828732", source: "https://www.jiayintech.cn" },
        { label: "综合业务邮箱", email: "jiayinpt@jiayinfintech.cn", phone: "", source: "https://www.jiayintech.cn" }
      ],
      contactNote: "官网公开投资者关系与综合业务邮箱，未公开海外投放负责人。金融客户决策链长，建议先经 IR 转接再补 LinkedIn。飞书合作表未列名，按潜在客户跟进。",
      emailSubject: "印尼、墨西哥市场的金融类投放与过审",
      emailBody: "嘉银科技团队好，我是易点天下的 Jill，我们服务中国金融科技公司的海外增长。印尼和墨西哥这两个市场今年在金融类广告的资质审核上收紧得很快。想约 15 分钟，聊两件事：Meta 与 Google 在两地金融类广告的资质路径；以及现金贷类素材在本地监管下的创意红线。Jill｜易点天下 Yeahmobi（A股上市，专注中国出海企业的海外增长服务）"
    },
    {
      product: "小游戏与休闲游戏发行（Island in the Air 等）",
      company: "邯郸太空船信息科技有限公司",
      hq: "河北邯郸",
      category: "游戏",
      markets: "全球（东南亚、拉美为主）",
      revenue: "暂无公开数据",
      recent: "2026 年多款小游戏进入海外榜单，团队规模小、试错快，是典型的「小团队 + 高频上新」休闲游戏出海样本。",
      website: "https://www.minigameland.com",
      cooperation: "not",
      coopModel: "",
      agency: "自研自发 + 暂无公开数据",
      scale: "sme",
      contacts: [],
      channels: [
        { label: "⭐ 最对口：商务合作邮箱", email: "sky@islandintheair.com", phone: "15910689832", source: "https://www.minigameland.com" },
        { label: "备用联系电话", email: "", phone: "15600000025", source: "https://www.minigameland.com" }
      ],
      contactNote: "公开渠道仅有商务邮箱与两个联系电话，未见具名商务负责人。飞书合作表未列名，按潜在客户跟进。",
      emailSubject: "小游戏出海｜测试期预算怎么花才不浪费",
      emailBody: "太空船团队好，我是易点天下的 Jill，我们专注游戏出海的增长。你们是高频上新的小游戏打法，这类团队最怕的是测试期预算撒太散、测不出结论。想约 15 分钟，聊两件事：小游戏在 TikTok 与 Meta 上的低成本测试结构；以及东南亚、拉美市场的 eCPM 与留存基准。Jill｜易点天下 Yeahmobi（A股上市，专注中国出海企业的海外增长服务）"
    }
  ],

  smeInsight: {
    painPoints: [
      "预算小、试错次数少：月消耗几万美元的团队，一轮测试没跑正就要停，导致决策越来越保守，反而更跑不出来。",
      "素材产能跟不上投放节奏：平台要求「少而优 + 高频换新」，但中小团队通常只有 1-2 个设计，素材一断量就掉。",
      "拿不到平台侧资源：配额、白名单、专属优化师基本向大客户倾斜，中小 App 遇到审核问题只能排队等回复。",
      "归因与数据口径混乱：不同 MMP、不同归因窗口算出来的 ROAS 差 20-30%，团队自己也不知道哪个数是真的。"
    ],
    needs: [
      "一个能直接对接的投手，而不是一套标准流程和月度 PPT。",
      "可复用的素材方法论：什么题材、什么钩子、什么时长在实际投放里有效，而不是泛泛的「创意建议」。",
      "敏感品类（金融、短剧、AI 生成内容）的过审路径与资质代办能力。",
      "透明的报价结构：返点、服务费、结算币种和账期讲清楚，别用「打包价」藏成本。"
    ],
    entryPoints: [
      "免费投放体检：用 30 分钟看一遍账户结构、归因设置和素材通过率，出 1 页问题清单——成本极低，最容易换来第一次试投。",
      "素材代产的轻量包：先不谈全案，只接「每月 N 条可投放素材」，用交付质量证明能力，再往上谈投放。",
      "政策预警服务：把三平台的政策变动做成月报主动推给客户（如 11/16 Google 哈希、11/20 Meta 条款），用信息差建立专业感。",
      "按品类做小样板：同一品类找 2-3 家客户做对照测试，用真实数据说话，比任何案例包装都有效。"
    ]
  }
};
