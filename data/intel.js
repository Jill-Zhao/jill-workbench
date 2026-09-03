// data/intel.js — Jill 的工作台情报数据
// 更新时间：2026-09-03T09:30:00+08:00（每日 9:30 自动化重写）
// 数据来源：Sensor Tower / 白鲸出海 / 东方财富 / 智通财经 / 10100.com / 52by.com / mffb.com.cn / DataEye / JMDedu 等公开信息
// 所有数据均来自公开信息源，未编造任何数据；查不到的写「暂无公开数据」

window.INTEL = {
  updatedAt: "2026-09-03T09:30:00+08:00",

  // ============================================================
  // 一、大盘速览 marketPulse
  // ============================================================
  marketPulse: [
    {
      label: "7 月中国手游出海收入",
      value: "$22.9 亿",
      note: "2026 年 7 月 38 家中国厂商入围全球手游 Top100，合计收入 $22.9 亿，占全球 42.8%。Gossip Harbor / Kingshot / Whiteout 占据出海收入前三",
      source: "Sensor Tower 2026-07 月报"
    },
    {
      label: "7 月出海增长榜",
      value: "明日方舟 +280%",
      note: "《明日方舟》海外收入环比 +280% 领涨，《三国：谋定天下》+215%，《崩坏：星穹铁道》+150%。新品与老游活动共振带动增长",
      source: "Sensor Tower 2026-07 出海榜"
    },
    {
      label: "Q2 非游出海排行",
      value: "短剧 8/20",
      note: "Q2 中国非游出海收入 Top20 中短剧占 8 席。PictureThis 收入 +237%，Kling AI 首入榜 #17（$1500 万+），PineDrama 下载 +460%",
      source: "Sensor Tower Q2 2026 排行 / sensortower.cn"
    },
    {
      label: "漫剧市场规模",
      value: "220-243 亿元",
      note: "DataEye 预测 2026 年国内漫剧市场规模 220-243 亿元。AI 将短剧单集成本从几十万压至数千元，产能是传统 20 倍",
      source: "DataEye / 巨量引擎 2026-09"
    },
    {
      label: "东南亚数字银行市场",
      value: "$600 亿",
      note: "2026 年东南亚数字贷款市场规模预计达 $600 亿，同比 +25%。数字银行、消费金融仍是出海热点",
      source: "Fintech News / Sensor Tower 2026"
    },
    {
      label: "全球教育 App 收入",
      value: "$64 亿",
      note: "2025 年全球教育 App 收入 $64 亿(+6.7%)，Duolingo 以 $10 亿领跑。中国 AI 教育应用（Gauth/Question.AI）进入美国免费教育榜前三",
      source: "Business of Apps / AppMagic 2026"
    },
    {
      label: "AI 应用融资",
      value: "¥50 亿+/半年",
      note: "VAST 三启万物半年融资约 ¥50 亿刷新 3D AI 纪录；演语科技 ARR 破 $3 亿启动港交所 IPO。AI 应用层进入商业化验证期",
      source: "智东西 / 钛媒体 2026-09"
    }
  ],

  // ============================================================
  // 二、App 榜单 appRankings
  // ============================================================
  appRankings: {
    // —— 游戏 ——
    game: [
      {
        name: "Gossip Harbor (浪漫餐厅)",
        publisher: "微帆 Microfun / 柠檬微趣",
        isChinese: true,
        markets: "欧美",
        performance: "2026 年 7 月出海收入榜 #1。H1 全球收入 $10.6 亿(+30%)，日营收 $50 万。79% 玩家为女性，均龄 32 岁",
        comment: "合成消除品类全球第一，柠檬微趣是易点天下已知合作客户。Jill 可用「女性向合成消除全球 #1」帮同类客户理解受众与品类天花板。",
        source: "Sensor Tower 2026-07 / app2top",
        tier: "head"
      },
      {
        name: "Kingshot",
        publisher: "世纪华通 / Century Games",
        isChinese: true,
        markets: "全球",
        performance: "2026 年 7 月出海收入榜 #2，海外营收超越 Whiteout 达到较高水平",
        comment: "世纪华通旗下又一爆款，与 Whiteout 双雄并立。Jill 可跟策略/休闲射击类客户聊「同厂商多品类矩阵化出海」的打法。",
        source: "Sensor Tower 2026-07 月报",
        tier: "head"
      },
      {
        name: "Whiteout Survival (无尽冬日)",
        publisher: "世纪华通 / Century Games",
        isChinese: true,
        markets: "全球",
        performance: "2026 年 7 月出海收入榜 #3。累计下载 3 亿次，累计收入接近 $50 亿",
        comment: "4X 生存赛道长线运营标杆。世纪华通是易点天下长期合作客户，Jill 可用来证明易点天下服务头部游戏的持续效果。",
        source: "Sensor Tower 2026-07-15",
        tier: "head"
      },
      {
        name: "明日方舟 (Arknights)",
        publisher: "鹰角网络 / Hypergryph",
        isChinese: true,
        markets: "全球",
        performance: "2026 年 7 月海外收入环比 +280%，出海增长榜第一。日服 4.5 周年活动带动明显回流",
        comment: "二次元塔防长线运营+周年活动爆发力。Jill 可用「+280% 环比增长」跟二次元客户聊节点营销与回流策略。",
        source: "Sensor Tower 2026-07 增长榜",
        tier: "head"
      },
      {
        name: "三国：谋定天下",
        publisher: "哔哩哔哩 / Bilibili",
        isChinese: true,
        markets: "日韩/东南亚",
        performance: "2026 年 7 月海外收入环比 +215%，出海增长榜前列。SLG 赛道新品表现强劲",
        comment: "B 站 SLG 出海首战告捷。Jill 可跟视频平台/SLG 客户聊「内容社区+买量」的组合打法。",
        source: "Sensor Tower 2026-07 增长榜",
        tier: "head"
      },
      {
        name: "崩坏：星穹铁道 (Honkai: Star Rail)",
        publisher: "米哈游 / miHoYo",
        isChinese: true,
        markets: "全球",
        performance: "2026 年 7 月海外收入环比 +150%，版本更新后回流显著",
        comment: "米哈游全球化叙事能力再次验证。Jill 可用此案例跟 RPG 客户聊「内容型产品如何通过版本节奏稳定回收」。",
        source: "Sensor Tower 2026-07 增长榜",
        tier: "head"
      },
      {
        name: "Block Blast!",
        publisher: "Hungry Studio / 北京迦游",
        isChinese: true,
        markets: "全球",
        performance: "2026 年 7 月继续位列出海手游下载榜第一，下载量环比持续双位数增长",
        comment: "休闲益智品类下载霸主，北京迦游在 wiki 版图已有记录。Jill 可关注其低 CPI 高留存策略作为休闲品类参考。",
        source: "Sensor Tower 2026-07 下载榜",
        tier: "sme"
      },
      {
        name: "菇勇者传说",
        publisher: "4399 / Joy Net Games",
        isChinese: true,
        markets: "日韩/东南亚",
        performance: "2024 出海手游榜第 5，贡献 4399 全球 91% 收入。4399 是易点天下已知合作客户",
        comment: "4399 通过单品打爆全球市场，是「中部厂商突围」的经典案例。Jill 可用这个案例跟中部游戏公司聊出海策略。",
        source: "Sensor Tower 2025 年度榜",
        tier: "head"
      }
    ],

    // —— 金融 ——
    finance: [
      {
        name: "Nubank",
        publisher: "Nubank (巴西)",
        isChinese: false,
        markets: "拉美",
        performance: "2026 H1 全球数字银行下载第一，累计下载超 4600 万。拉美市场占全球银行 App 下载 21%",
        comment: "拉美数字银行龙头，虽非中国公司但展示了拉美金融科技市场的爆发力。Jill 可用此数据跟金融客户聊拉美市场机会。",
        source: "Sensor Tower State of Digital Banking 2026",
        tier: "head"
      },
      {
        name: "Revolut",
        publisher: "Revolut (英国)",
        isChinese: false,
        markets: "欧洲/全球",
        performance: "2026 H1 全球数字银行下载第二，持续拓展墨西哥等拉美市场",
        comment: "欧洲数字银行标杆，Jill 可参考其全球化路径跟金融客户聊欧洲/拉美市场进入策略。",
        source: "Sensor Tower 2026",
        tier: "head"
      },
      {
        name: "GoTyme Bank",
        publisher: "GoTyme Group (菲律宾/新加坡)",
        isChinese: false,
        markets: "菲律宾/东南亚",
        performance: "2026 年入选福布斯全球最佳银行榜菲律宾 #2，数字银行赛道增长迅速",
        comment: "东南亚数字银行新星。Jill 可关注菲律宾市场作为金融科技出海新据点。",
        source: "Forbes / Sensor Tower 2026",
        tier: "sme"
      },
      {
        name: "MoMo Super App",
        publisher: "MTN Group Fintech × 蚂蚁国际",
        isChinese: false,
        markets: "非洲/尼日利亚",
        performance: "2026 Q3 尼日利亚首发，蚂蚁国际提供技术。非洲移动货币最大市场",
        comment: "蚂蚁国际合作项目，非洲市场。Jill 可关注中非金融科技合作趋势作为谈资。",
        source: "itedgenews.africa 2026-07",
        tier: "sme"
      },
      {
        name: "嘉银金科 JiaYin",
        publisher: "嘉银金科 (NASDAQ: JFIN，中国上海)",
        isChinese: true,
        markets: "东南亚/拉美/非洲",
        performance: "2026 H1 持续拓展海外消费金融业务，在印尼、菲律宾、墨西哥等地布局信贷产品",
        comment: "中国金融科技出海腰部上市公司。Jill 可关注其海外获客与合规投放需求，现金贷/消费金融类客户近期受政策影响需提前布局。",
        source: "嘉银金科财报 / 公开报道 2026-08",
        tier: "head"
      },
      {
        name: "连连数字 LoopXPay",
        publisher: "连连数字科技 (杭州)",
        isChinese: true,
        markets: "全球",
        performance: "2026-07 完成大中华区首笔 B2B AI 智能体交易，推出连连智枢(300+ 模型)、LoopAI 营销、星小汇外汇助手",
        comment: "连连是跨境支付老兵切入 AI 赛道，且已验证真实商业交易场景。Jill 可关注其 AI 外汇+跨境支付产品线是否有投放需求。",
        source: "财联社 2026-08-31",
        tier: "sme"
      }
    ],

    // —— AI 应用 ——
    ai: [
      {
        name: "Kling AI (可灵)",
        publisher: "快手 Kuaishou",
        isChinese: true,
        markets: "美国/日本/韩国/英国/德国",
        performance: "Q2 2026 海外收入 $1500 万+(+38% QoQ)，首入中国非游出海 Top20（#17）。美国占 32% 海外收入。大多时间位列美国 iPhone 绘图设计类下载/畅销前三",
        comment: "快手是易点天下已知合作客户，可灵 AI 出海成功是合作价值的直接体现。Jill 可用「唯一入榜的 AI 内容生成应用」作为谈资。",
        source: "Sensor Tower Q2 2026 排行 / sensortower.cn",
        tier: "head"
      },
      {
        name: "Dola (豆包海外版)",
        publisher: "字节跳动 ByteDance",
        isChinese: true,
        markets: "巴西/马来西亚/全球",
        performance: "Q2 出海下载创新高(+11% QoQ)，与 TikTok、CapCut 包揽下载榜 Top3。Q1 下载量 7200 万",
        comment: "字节跳动是已知合作客户。豆包海外版在拉美增长强劲，Jill 可关注 AI 助手品类在拉美的获客趋势。",
        source: "Sensor Tower Q2 2026 / sensortower.cn",
        tier: "head"
      },
      {
        name: "演语科技 Evoken (LiblibAI/LibTV/Agent 星流)",
        publisher: "演语科技 (北京)",
        isChinese: true,
        markets: "全球",
        performance: "2026 年 5 月 ARR 突破 $3 亿，集团收入同比 +3000%。B+ 轮近 $3 亿，估值超 $20 亿。已启动港交所 IPO，估值达 $30 亿",
        comment: "中国 AI 应用层最大单轮融资纪录。Jill 可用「ARR $3 亿 +3000% 增长」作为 AI 应用商业化标杆谈资。",
        source: "钛媒体 / 彭博 2026-08-08",
        tier: "head"
      },
      {
        name: "PictureThis",
        publisher: "睿琪软件 Glority (北京)",
        isChinese: true,
        markets: "美国/英国/德国",
        performance: "Q2 收入 +237% 创历史新高，排名跃升 9 位至 #7。月活稳定 1400 万。近十年产品靠 AI 植物识别+Before&After 广告素材持续增长",
        comment: "睿琪是已知合作客户。垂类工具 + AI + 季节性营销 = 持续增长教科书。Jill 可用其 Before&After 广告策略跟工具类客户聊创意方法。",
        source: "Sensor Tower Q2 2026 / sensortower.cn",
        tier: "head"
      },
      {
        name: "VAST / Tripo P2.0",
        publisher: "VAST 三启万物 (上海)",
        isChinese: true,
        markets: "全球",
        performance: "半年融资约 ¥50 亿（B 轮 + B+ 轮 + A3 轮），发布 Tripo P2.0 首个原生四边面拓扑 3D 原生基座模型",
        comment: "3D AI 赛道独角兽，融资金额刷新领域纪录。Jill 可关注 3D 内容生成在游戏/影视/电商领域的应用是否催生新的投放需求。",
        source: "智东西 2026-09-01",
        tier: "head"
      },
      {
        name: "PineDrama",
        publisher: "字节跳动 ByteDance / 中文在线",
        isChinese: true,
        markets: "印尼/巴西/全球",
        performance: "Q2 下载量 +460%，累计近 7000 万。印尼+巴西贡献 82% 下载。6 月稳居两国 Google Play 总榜 Top3",
        comment: "字节系短剧新平台在新兴市场爆发。Jill 可用「印尼+巴西 82% 下载」跟短剧客户聊新兴市场获客节奏。",
        source: "Sensor Tower Q2 2026 / sensortower.cn",
        tier: "sme"
      },
      {
        name: "NetShort",
        publisher: "麦芽文化 / NETSTORY",
        isChinese: true,
        markets: "北美/欧洲/东南亚",
        performance: "Q2 海外收入 $9100 万(+31% QoQ)，是头部短剧 App 中唯一同时实现下载与收入双增长的产品",
        comment: "短剧赛道分化加剧，NetShort 靠内容迭代稳住增长。Jill 可跟短剧客户聊「内容更新频率与投放回收」的关系。",
        source: "Sensor Tower Q2 2026 / sensortower.cn",
        tier: "head"
      },
      {
        name: "Seekee",
        publisher: "字节跳动 ByteDance",
        isChinese: true,
        markets: "巴西/墨西哥/哥伦比亚",
        performance: "Q2 下载排名上升 1 位，拉美市场贡献约 60% 海外下载量",
        comment: "AI 智能搜索助手，字节系产品。拉美已成 AI 助手类应用主要获客阵地，Jill 可用此数据跟 AI 客户聊拉美市场。",
        source: "Sensor Tower Q2 2026 / sensortower.cn",
        tier: "sme"
      },
      {
        name: "小云雀 AI",
        publisher: "小云雀 AI (北京)",
        isChinese: true,
        markets: "全球",
        performance: "2026-09-01 品牌升级，未来 3 年投入 1 亿积分扶持创作者。4 月上线以来 AI 短剧全网播放超 60 亿次",
        comment: "AI 短剧新平台，60 亿播放说明内容产能已验证。Jill 可关注其出海投放需求——短剧出海 +60 亿次播放 = 买量素材天然丰富。",
        source: "北京商报 2026-09-01",
        tier: "sme"
      },
      {
        name: "DeepSeek",
        publisher: "深度求索 DeepSeek (杭州)",
        isChinese: true,
        markets: "全球",
        performance: "2026 年 6 月首轮融资 ¥510 亿，刷新国内 AI 单笔纪录。估值近 ¥4000 亿",
        comment: "虽是模型公司非 App 出海，但 ¥510 亿融资是 AI 行业最大新闻。Jill 可用作行业热度的宏观谈资。",
        source: "AIbase 2026-08 / 公开报道",
        tier: "head"
      }
    ],

    // —— 教育 ——
    education: [
      {
        name: "Duolingo",
        publisher: "Duolingo (美国)",
        isChinese: false,
        markets: "全球",
        performance: "2025 年收入 $10 亿，7 亿注册用户，1.72 亿下载。全球教育 App 渗透率 18.3% 第一",
        comment: "全球教育 App 标杆。Jill 可用 Duolingo 的免费+增值模式跟教育出海客户聊变现策略。",
        source: "Business of Apps 2026",
        tier: "head"
      },
      {
        name: "Gauth",
        publisher: "字节跳动 ByteDance",
        isChinese: true,
        markets: "美国/欧洲",
        performance: "2026 年 2-5 月位列美国 Google Play / App Store 免费教育榜前三。AppMagic 全球教育 App 下载第二",
        comment: "字节跳动 AI 教育工具出海标杆，拍照解题+步骤讲解。Jill 可跟 AI 教育客户聊「工具型产品如何通过 AI 功能打开海外市场」。",
        source: "SCMP / AppMagic 2026-05",
        tier: "head"
      },
      {
        name: "Question.AI",
        publisher: "作业帮 Zuoyebang / Yes Planet",
        isChinese: true,
        markets: "美国/欧洲",
        performance: "2026 年 2-5 月位列美国 Google Play / App Store 免费教育榜第七。作业帮旗下 AI 作业助手",
        comment: "作业帮是易点天下已知合作客户。Jill 可用「中国 AI 教育 App 集体进入美国教育榜 Top10」作为行业趋势谈资。",
        source: "SCMP / AppMagic 2026-05",
        tier: "head"
      },
      {
        name: "Tutor Luna",
        publisher: "LingoAce (新加坡/中国团队)",
        isChinese: true,
        markets: "北美/东南亚",
        performance: "定义「AI 口语系统课程」品类，4-12 岁。每 20 分钟课 60-70 次口语轮次，月收入环比 10 倍增长。团队<15 人",
        comment: "AI + 教育的效率标杆——不到 15 人做到 10x 月环比增长。Jill 可用此案例跟教育客户聊「AI 如何重构获客效率」。",
        source: "JMDedu 2026-08-31",
        tier: "sme"
      },
      {
        name: "豆神教育 Doushen (300010.SZ)",
        publisher: "豆神教育 (北京)",
        isChinese: true,
        markets: "国内/探索出海",
        performance: "H1 2026 收入 ¥5.25 亿(+16.95%)，AI 教育业务增长 664%，占营收超 20%",
        comment: "A股上市教育公司，AI 业务暴增 664%。Jill 可关注其 AI 教育产品是否有出海投放计划——664% 增长背后需要大量获客。",
        source: "JMDedu 2026-08-31",
        tier: "head"
      },
      {
        name: "高途 Gaotu (NYSE: GOTU)",
        publisher: "高途 (北京)",
        isChinese: true,
        markets: "国内",
        performance: "Q2 2026 收入 ¥16.7 亿(+20.2%)，调整后运营利润 +38.5%。AI 和线下拓展双轮驱动",
        comment: "纽交所上市教育公司，AI 转型见效。Jill 可关注其是否有出海业务拓展计划。",
        source: "JMDedu 2026-08-31",
        tier: "head"
      }
    ]
  },

  // ============================================================
  // 三、热点时间线 hotEvents
  // ============================================================
  hotEvents: [
    {
      title: "Sensor Tower 7 月出海榜：明日方舟 +280%、Kingshot 冲至 #2",
      date: "2026-07-16",
      summary: "7 月中国手游出海收入榜前三为 Gossip Harbor、Kingshot、Whiteout。增长榜上《明日方舟》+280%、《三国：谋定天下》+215%、《崩坏：星穹铁道》+150%。Block Blast! 继续统治下载榜",
      bizValue: "老游靠节点活动回流+新品快速冲顶。Jill 可用此数据跟游戏客户聊「版本节奏+买量回收」的协同打法。",
      source: "Sensor Tower 2026-07 月报",
      tag: "high-growth"
    },
    {
      title: "VAST 三启万物半年融资 ¥50 亿，发布 Tripo P2.0",
      date: "2026-09-01",
      summary: "3D AI 独角兽 VAST 完成 B 轮+B+ 轮合计约 ¥30 亿，叠加 7 月 A3 轮，半年累计约 ¥50 亿刷新领域纪录。同步发布 Tripo P2.0，行业首个原生四边面拓扑 3D 原生基座模型",
      bizValue: "3D AI 赛道吸金能力惊人。Jill 可关注 3D 内容生成在游戏/影视/电商领域的应用是否催生新的投放需求。",
      source: "智东西 2026-09-01",
      tag: "high-growth"
    },
    {
      title: "DataEye 预测 2026 漫剧市场规模 220-243 亿元",
      date: "2026-09-02",
      summary: "DataEye 研究院预测 2026 年国内漫剧市场规模 220-243 亿元。AI 将短剧单集成本从几十万压缩至数千元，产能是传统 20 倍。字节跳动 3 月漫剧日消耗破 7000 万",
      bizValue: "漫剧=短剧之后的新爆发点。Jill 可用 243 亿规模+成本降 90% 的数据跟客户聊「为什么漫剧出海是下一个机会」。",
      source: "DataEye / 巨量引擎 2026-09",
      tag: "high-growth"
    },
    {
      title: "EU AI Act 条款 50 已生效（9月2日）",
      date: "2026-09-02",
      summary: "EU AI Act 条款 50 生效：AI 生成内容必须加水印标识，深度伪造需强制披露。影响所有在欧盟运营的 AI 内容生成应用（短剧/AI 视频/AI 图片等）",
      bizValue: "合规门槛=竞争壁垒。Jill 可用此政策跟 AI 客户聊「合规投放」的必要性——不合规的广告在欧盟会被下架。",
      source: "EU AI Act 官方 / 公开报道",
      tag: "emerging"
    },
    {
      title: "《微短剧发展管理办法》已施行（9月1日）",
      date: "2026-09-01",
      summary: "国家《微短剧发展管理办法》9 月 1 日起施行。境内主体出海需双轨备案，微短剧内容审核趋严",
      bizValue: "合规要求提高 = 需要专业服务。Jill 可用此政策跟短剧客户聊「备案+合规投放」的增值服务机会。",
      source: "公开报道 2026-09-01",
      tag: "emerging"
    },
    {
      title: "Google Ads 已强制 AI Max 迁移",
      date: "2026-09-01",
      summary: "Google Ads ACA / Broad Match 9 月 1 日起强制迁移至 AI Max。广告主无法再使用旧版精确匹配，全面进入 AI 驱动竞价时代",
      bizValue: "Google 投放规则大变=客户需要重新理解投放策略。Jill 可用此节点跟 Google 投放客户聊「AI Max 迁移支持」的服务机会。",
      source: "Google Ads 官方公告 2026-08",
      tag: "emerging"
    },
    {
      title: "演语科技 Evoken 启动港交所 IPO，估值 $30 亿",
      date: "2026-08-05",
      summary: "90 后字节前高管陈冕创办的演语科技启动港交所 IPO 筹备。B+ 轮近 $3 亿，估值 $20 亿+。ARR $3 亿，集团收入同比 +3000%。旗下 LiblibAI/LibTV/Agent 星流跑通 AI 应用商业化闭环",
      bizValue: "中国 AI 应用层最大单轮融资 + 最快 IPO 节奏。Jill 可用此案例跟 AI 客户聊「AI 应用怎么赚钱」。",
      source: "钛媒体 / 彭博 2026-08-08",
      tag: "high-growth"
    },
    {
      title: "中文在线 H1 短剧收入 4.11 亿元，同比 +108.72%",
      date: "2026-08-31",
      summary: "中文在线 2026 H1 财报披露短剧业务收入 4.11 亿元，同比增长 108.72%。旗下 ReelShort 仍居出海短剧头部。同日兑吧 AI 短剧收入 2.23 亿元，掌阅短剧收入 17.84 亿元",
      bizValue: "短剧上市公司财报验证赛道盈利能力。Jill 可用「4.11 亿+108%」的数据跟短剧客户聊行业景气度。",
      source: "中文在线 H1 财报 / 东方财富 2026-08-31",
      tag: "high-growth"
    },
    {
      title: "TikTok 短剧 Q1 分账突破 $2400 万，AI 短剧 +6 倍",
      date: "2026-03-24",
      summary: "TikTok 短剧 2026 Q1 分账突破 $2400 万，其中 AI 短剧分账超 $200 万，增幅超 6 倍。字节跳动 3 月 24 日漫剧日消耗破 7000 万元，首超真人短剧",
      bizValue: "TikTok 短剧分账=官方流量红利。Jill 可用此数据跟短剧客户聊「TikTok 短剧投放+分账」的双收益模式。",
      source: "巨量引擎 / DataEye 2026-03",
      tag: "high-growth"
    },
    {
      title: "DeepSeek 首轮融资 ¥510 亿刷新 AI 纪录",
      date: "2026-06-01",
      summary: "DeepSeek 首轮融资 ¥510 亿，刷新国内 AI 单笔纪录。估值近 ¥4000 亿。2026 H1 共 257 家企业完成 2+ 轮投资(+164.9%)",
      bizValue: "AI 资本热度持续。Jill 可用 ¥510 亿的数字跟客户聊「AI 行业资本投入规模」——钱在哪，机会就在哪。",
      source: "AIbase 2026-08",
      tag: "high-growth"
    },
    {
      title: "Meta 返点持续下调至 3-7%，门槛提高至 $3 万/月",
      date: "2026-08-15",
      summary: "Meta 广告代理返点从去年的 5-10% 降至 3-7%，月消耗门槛从 $1 万提高到 $3 万。Advantage+ 全面替换后人工优化空间被压缩",
      bizValue: "返点时代终结=效果能力成为代理商核心竞争力。Jill 可跟客户聊「易点天下的 AI 优化能力比返点更值钱」。",
      source: "52by.com / 代理商行业交流",
      tag: "emerging"
    },
    {
      title: "Google 取消新客返点，转向 AI Max 优化服务费",
      date: "2026-08-20",
      summary: "Google Ads 代理商返点(3-8%)正在被逐步取消，取而代之的是 AI Max 迁移和优化服务费。9-1 强制迁移后，代理商收入模式从返点转向技术服务费",
      bizValue: "Google 返点取消=行业模式转型。Jill 需跟客户聊「返点时代结束，效果优化才是核心价值」。",
      source: "52by.com / 代理商行业交流",
      tag: "emerging"
    },
    {
      title: "豆神教育 AI 业务增长 664%，占比超 20%",
      date: "2026-08-31",
      summary: "豆神教育(300010.SZ) H1 收入 ¥5.25 亿(+16.95%)，AI 教育业务增长 664%，占营收超 20%",
      bizValue: "传统教育公司 AI 转型见效。Jill 可关注其 AI 教育产品出海是否需要投放支持。",
      source: "JMDedu 2026-08-31",
      tag: "high-growth"
    }
  ],

  // ============================================================
  // 四、出海线索池 chinaGoingGlobal
  // ============================================================
  chinaGoingGlobal: [
    // —— AI 应用 (4 家, 36%) ——
    {
      product: "讯飞听见 iFLYTEK Tingjian — AI 会议助手/语音转写",
      company: "科大讯飞股份有限公司 (002230.SZ)",
      hq: "安徽合肥",
      category: "AI应用",
      markets: "全球（重点：东南亚/中东/拉美）",
      revenue: "2025 年营收超 ¥200 亿，海外业务持续拓展",
      recent: "2026 年 Q2 讯飞听见进入中国 AI 应用出海收入榜 Top20。AI 语音技术在海外会议、教育、办公场景落地",
      website: "https://www.iflytek.com/",
      cooperation: "not",
      coopModel: "飞书合作表未列名，按潜在客户跟进",
      agency: "自研自发",
      scale: "head",
      contacts: [],
      channels: [
        { label: "投资者关系邮箱", email: "ir@iflytek.com", source: "年报披露" },
        { label: "公司总机", phone: "0551-62991888", source: "官网公示" }
      ],
      contactNote: "上市公司，建议通过投资者关系邮箱或 LinkedIn 搜索科大讯飞海外业务负责人（如国际业务部）进行触达",
      emailSubject: "科大讯飞出海投放合作 — 易点天下 x iFLYTEK",
      emailBody: "您好，我是易点天下的 Jill。关注到科大讯飞旗下的 AI 会议助手讯飞听见在海外市场持续拓展，AI 语音技术在办公/教育场景有较强的本地化需求。易点天下专注于为中国出海企业提供海外广告投放和用户增长服务，在 AI 应用、教育、办公工具等品类有丰富的投放经验。是否方便安排一次交流，探讨在东南亚/中东等市场的投放合作可能？"
    },
    {
      product: "商汤日日新 SenseNova — 多模态大模型与 AI 应用出海",
      company: "商汤集团股份有限公司 (00020.HK)",
      hq: "上海/香港",
      category: "AI应用",
      markets: "全球（重点：中东/东南亚/日韩）",
      revenue: "2024 年营收约 ¥40 亿，生成式 AI 业务占比持续提升",
      recent: "日日新大模型在海外智慧城市、自动驾驶、智慧医疗等场景落地。商汤与沙特、阿联酋等中东国家有合作项目",
      website: "https://www.sensetime.com/",
      cooperation: "not",
      coopModel: "飞书合作表未列名，按潜在客户跟进",
      agency: "自研自发",
      scale: "head",
      contacts: [],
      channels: [
        { label: "投资者关系邮箱", email: "ir@sensetime.com", source: "年报披露" }
      ],
      contactNote: "港股上市公司，建议通过 IR 邮箱或 LinkedIn 搜索商汤海外业务负责人触达",
      emailSubject: "商汤 AI 出海投放合作 — 易点天下 x SenseTime",
      emailBody: "您好，我是易点天下的 Jill。关注到商汤日日新大模型在中东、东南亚等海外市场有多个落地项目。随着生成式 AI 业务占比持续提升，海外品牌曝光与获客将成为新的增长点。易点天下在海外广告投放方面有丰富经验，尤其在 AI、金融科技、企业服务等领域。是否方便聊聊商汤在海外市场的品牌投放与获客合作？"
    },
    {
      product: "OpenCSG 开放传神 — 开源大模型平台与 AI 应用工厂",
      company: "开放传神(深圳)科技有限公司",
      hq: "深圳",
      category: "AI应用",
      markets: "全球（重点：北美/东南亚开发者市场）",
      revenue: "2026 年 Pre-A 轮数亿元融资，估值数亿美元",
      recent: "聚焦开源大模型生态，提供从模型训练、微调到应用部署的全栈工具链。面向出海企业提供 AI 应用开发与落地支持",
      website: "https://www.opencsg.com/",
      cooperation: "not",
      coopModel: "飞书合作表未列名，按潜在客户跟进",
      agency: "暂无公开数据",
      scale: "sme",
      contacts: [],
      channels: [],
      contactNote: "未找到公开联系人。建议通过官网表单、GitHub 社区或 AI 开发者大会触达",
      emailSubject: "OpenCSG 出海合作 — AI 开发者生态的海外增长",
      emailBody: "您好，我是易点天下的 Jill。关注到 OpenCSG 在开源大模型生态上的布局，面向开发者和企业客户提供全栈 AI 工具链。随着更多中国 AI 企业出海，开发者获客与品牌曝光将成为关键。易点天下在海外广告投放和开发者增长方面有丰富经验，是否方便交流一下 OpenCSG 在海外开发者市场的合作可能？"
    },
    {
      product: "无问芯穹 Infinigence — AI 大模型算力基础设施",
      company: "上海无问芯穹智能科技有限公司",
      hq: "上海",
      category: "AI应用",
      markets: "全球（重点：北美/中东/东南亚）",
      revenue: "累计融资数亿元，估值数十亿人民币",
      recent: "提供大模型推理加速、异构芯片适配和 MaaS 服务，帮助 AI 应用企业降低算力成本。积极拓展海外算力市场",
      website: "https://www.infinigence.ai/",
      cooperation: "not",
      coopModel: "飞书合作表未列名，按潜在客户跟进",
      agency: "暂无公开数据",
      scale: "sme",
      contacts: [],
      channels: [],
      contactNote: "未找到公开联系人。建议通过官网表单、AI 行业峰会或 LinkedIn 搜索 CEO 夏立雪/团队高管触达",
      emailSubject: "无问芯穹出海合作 — AI 算力基础设施的海外获客",
      emailBody: "您好，我是易点天下的 Jill。关注到无问芯穹在大模型推理加速和异构算力方面的技术积累，随着海外 AI 应用爆发，算力基础设施的出海需求正在快速增长。易点天下专注于为中国出海企业提供海外广告投放和用户增长服务，在 AI/企业服务领域有丰富经验。是否方便聊聊无问芯穹在海外市场的获客合作？"
    },

    // —— 教育 (2 家, 18%) ——
    {
      product: "叮咚课堂 — AI 少儿英语在线课堂",
      company: "叮咚课堂（北京）科技有限公司",
      hq: "北京",
      category: "教育",
      markets: "东南亚/中东/拉美",
      revenue: "暂无公开数据",
      recent: "主打 AI 外教 1v1 互动课堂，面向 4-12 岁儿童。2025-2026 年加速拓展东南亚和中东市场",
      website: "https://www.ddkt.com/",
      cooperation: "not",
      coopModel: "飞书合作表未列名，按潜在客户跟进",
      agency: "暂无公开数据",
      scale: "sme",
      contacts: [],
      channels: [],
      contactNote: "未找到公开联系人。建议通过官网客服或教育科技行业活动（如 JMDedu）触达",
      emailSubject: "叮咚课堂出海合作 — AI 少儿英语海外获客",
      emailBody: "您好，我是易点天下的 Jill。关注到叮咚课堂在 AI 少儿英语领域的创新，AI 外教 1v1 模式在海外家庭教育市场有很强吸引力。随着东南亚、中东等新兴市场教育支出增长，海外获客将成为关键。易点天下在教育 App 出海投放方面有丰富经验，是否方便聊聊叮咚课堂在海外市场的投放合作？"
    },
    {
      product: "美术宝 — 在线美术教育出海",
      company: "北京美术宝教育科技有限公司",
      hq: "北京",
      category: "教育",
      markets: "北美/欧洲/东南亚华人市场",
      revenue: "累计融资数亿美元，用户数超 1000 万",
      recent: "在线美术教育龙头，2025-2026 年探索海外市场，重点面向海外华人家庭与素质教育需求",
      website: "https://www.meishubao.com/",
      cooperation: "not",
      coopModel: "飞书合作表未列名，按潜在客户跟进",
      agency: "暂无公开数据",
      scale: "sme",
      contacts: [],
      channels: [],
      contactNote: "未找到公开联系人。建议通过官网客服或素质教育行业峰会触达",
      emailSubject: "美术宝出海合作 — 在线美术教育海外获客",
      emailBody: "您好，我是易点天下的 Jill。关注到美术宝在在线美术教育领域的深厚积累，海外华人家庭与素质教育市场是潜在蓝海。易点天下在教育 App 出海投放方面有丰富经验，是否方便聊聊美术宝在海外市场的品牌曝光与获客合作？"
    },

    // —— 娱乐 APP (3 家, 27%) ——
    {
      product: "映宇宙 Inkeverse — 直播+短剧+社交出海",
      company: "映宇宙集团有限公司 (03700.HK)",
      hq: "北京",
      category: "娱乐APP",
      markets: "东南亚/中东/拉美/欧洲",
      revenue: "2024 年营收约 ¥80 亿，海外收入占比持续提升",
      recent: "映客直播出海后布局短剧、社交等泛娱乐赛道。2026 年加速海外短剧内容生产与分发",
      website: "https://www.inkeverse.com/",
      cooperation: "not",
      coopModel: "飞书合作表未列名，按潜在客户跟进",
      agency: "自研自发",
      scale: "head",
      contacts: [],
      channels: [
        { label: "投资者关系邮箱", email: "ir@inke.cn", source: "年报披露" }
      ],
      contactNote: "港股上市公司，建议通过 IR 邮箱或 LinkedIn 搜索映宇宙海外业务负责人触达",
      emailSubject: "映宇宙出海投放合作 — 易点天下 x Inkeverse",
      emailBody: "您好，我是易点天下的 Jill。关注到映宇宙在直播、短剧、社交等泛娱乐赛道的海外布局，海外收入占比持续提升。易点天下在短剧、社交、直播等品类有丰富的海外投放经验，是否方便安排一次交流，探讨在东南亚/中东等市场的投放合作可能？"
    },
    {
      product: "喜马拉雅 Ximalaya — 音频内容出海",
      company: "上海喜马拉雅科技有限公司",
      hq: "上海",
      category: "娱乐APP",
      markets: "北美/东南亚/中东/欧洲",
      revenue: "累计用户超 6 亿，月活过 1 亿，海外用户持续增长",
      recent: "喜马拉雅海外版 Ximalaya 在北美、东南亚市场推广中文与本地语言有声内容。2026 年加速 AI 语音合成内容出海",
      website: "https://www.ximalaya.com/",
      cooperation: "not",
      coopModel: "飞书合作表未列名，按潜在客户跟进",
      agency: "自研自发",
      scale: "head",
      contacts: [],
      channels: [
        { label: "商务合作邮箱", email: "bd@ximalaya.com", source: "官网公示" }
      ],
      contactNote: "建议通过商务合作邮箱或 LinkedIn 搜索喜马拉雅海外业务负责人触达",
      emailSubject: "喜马拉雅出海合作 — 音频内容与 AI 语音海外获客",
      emailBody: "您好，我是易点天下的 Jill。关注到喜马拉雅在海外市场持续推广中文与本地语言音频内容，AI 语音合成内容也在加速出海。易点天下在内容型 App 海外投放方面有丰富经验，是否方便聊聊喜马拉雅在海外市场的用户增长合作？"
    },
    {
      product: "新片场 Xinpianchang — 短视频内容出海与 AI 创作工具",
      company: "北京新片场传媒股份有限公司",
      hq: "北京",
      category: "娱乐APP",
      markets: "全球（重点：东南亚/北美）",
      revenue: "新三板挂牌，2024 年营收数亿元",
      recent: "国内领先的新媒体影视创作人社区，2025-2026 年拓展海外短视频内容与 AI 创作工具业务",
      website: "https://www.xinpianchang.com/",
      cooperation: "not",
      coopModel: "飞书合作表未列名，按潜在客户跟进",
      agency: "暂无公开数据",
      scale: "sme",
      contacts: [],
      channels: [],
      contactNote: "未找到公开联系人。建议通过官网客服或短视频行业活动触达",
      emailSubject: "新片场出海合作 — 短视频内容与 AI 创作工具海外增长",
      emailBody: "您好，我是易点天下的 Jill。关注到新片场在短视频内容与创作者生态方面的积累，AI 创作工具与出海内容分发是值得关注的方向。易点天下在内容型 App、短剧/短视频出海投放方面有丰富经验，是否方便聊聊在海外市场的合作可能？"
    },

    // —— 金融 (1 家, 9%) ——
    {
      product: "嘉银金科 JiaYin — 海外消费金融",
      company: "嘉银金科 (NASDAQ: JFIN)",
      hq: "上海",
      category: "金融",
      markets: "东南亚/拉美/非洲",
      revenue: "2024 年营收约 ¥40 亿，海外业务占比持续提升",
      recent: "在印尼、菲律宾、墨西哥等地布局现金贷与分期产品。2026 年继续拓展新兴市场消费金融",
      website: "https://www.jiayinfintech.com/",
      cooperation: "not",
      coopModel: "飞书合作表未列名，按潜在客户跟进",
      agency: "暂无公开数据",
      scale: "head",
      contacts: [],
      channels: [
        { label: "投资者关系邮箱", email: "ir@jiayinfintech.com", source: "年报披露" }
      ],
      contactNote: "美股上市公司，建议通过 IR 邮箱或 LinkedIn 搜索嘉银金科海外业务负责人触达。注意金融类客户需提前完成 Google/Meta 金融资质验证",
      emailSubject: "嘉银金科出海合作 — 海外消费金融投放与合规",
      emailBody: "您好，我是易点天下的 Jill。关注到嘉银金科在印尼、菲律宾、墨西哥等新兴市场的消费金融布局持续扩大。易点天下在海外广告投放方面有丰富经验，尤其在金融科技、现金贷/分期品类有成熟的合规投放方案。是否方便聊聊嘉银金科在海外市场的获客与合规投放合作？"
    },

    // —— 游戏 (1 家, 9%) ——
    {
      product: "网元圣唐/烛龙 — 古剑奇谭 IP 出海",
      company: "北京网元圣唐娱乐科技有限公司",
      hq: "北京",
      category: "游戏",
      markets: "全球（重点：东南亚/日韩/欧美）",
      revenue: "暂无公开数据（《古剑奇谭》系列累计销售额超 ¥30 亿）",
      recent: "《古剑奇谭》《白荆回廊》等 IP 持续出海。2026 年《白荆回廊》海外版上线，在日韩市场表现亮眼",
      website: "https://www.aurogon.com/",
      cooperation: "not",
      coopModel: "飞书合作表未列名，按潜在客户跟进",
      agency: "暂无公开数据",
      scale: "sme",
      contacts: [],
      channels: [],
      contactNote: "未找到公开联系人。建议通过官网客服、ChinaJoy、游戏行业活动或 LinkedIn 搜索网元圣唐海外发行负责人触达",
      emailSubject: "网元圣唐出海合作 — 古剑/白荆回廊海外投放",
      emailBody: "您好，我是易点天下的 Jill。关注到《白荆回廊》海外版在日韩市场的表现，网元圣唐的古剑 IP 在海外玩家中有较高认知度。易点天下在游戏出海投放方面有丰富经验，是否方便聊聊《白荆回廊》及后续产品在海外市场的投放合作？"
    }
  ],

  // ============================================================
  // 五、媒体政策 policies
  // ============================================================
  policies: [
    {
      platform: "TikTok",
      title: "【2 天内生效】TikTok Shop 保证金政策",
      date: "2026-09-05",
      detail: "TikTok Shop 新增跨境店铺保证金要求，按类目和历史经营情况分级收取",
      impact: "medium",
      categories: ["电商", "短剧"],
      bizValue: "保证金政策提高了 TikTok Shop 入驻门槛。Jill 可提醒电商客户提前准备资金，也说明 TikTok 对商家质量要求提高。",
      source: "TikTok Shop 官方公告 2026-08"
    },
    {
      platform: "Google",
      title: "【12 天内生效】Google 24 国金融服务 Verify 强制",
      date: "2026-09-15",
      detail: "Google Ads 在 24 个国家/地区对金融服务广告主强制要求身份验证(Verify)。覆盖消费信贷、虚拟货币、投资等品类",
      impact: "high",
      categories: ["现金贷", "金融"],
      bizValue: "金融出海客户必须提前完成 Google Verify，否则 9-15 后广告会被暂停。Jill 可推销「Google 金融 Verify 合规」服务。",
      source: "Google Ads 官方公告 2026-07"
    },
    {
      platform: "TikTok",
      title: "【12 天内生效】TikTok Spark Ads 政策更新",
      date: "2026-09-15",
      detail: "TikTok Spark Ads（原生广告）政策更新，加强创作者内容与广告内容的区分标注要求",
      impact: "medium",
      categories: ["电商", "短剧"],
      bizValue: "Spark Ads 标注更严=创作者合作成本上升。Jill 可提醒短剧客户注意素材合规。",
      source: "TikTok for Business 官方 2026-08"
    },
    {
      platform: "Google",
      title: "【27 天内生效】Google 酒精类广告政策收紧",
      date: "2026-09-30",
      detail: "Google 更新酒精类广告政策，新增多国限制条件，部分国家从允许改为限制",
      impact: "low",
      categories: ["电商"],
      bizValue: "影响酒精类出海广告主，Jill 需提醒相关客户检查目标市场是否受影响。",
      source: "Google Ads 政策更新 2026-08"
    },
    {
      platform: "Google",
      title: "【28 天内生效】Google 10 月价格透明度新规",
      date: "2026-10-01",
      detail: "Google Ads 要求电商类广告主在广告中展示完整价格信息（含税费、运费），不得隐藏费用",
      impact: "medium",
      categories: ["电商"],
      bizValue: "电商广告素材需调整。Jill 可提醒电商客户提前更新广告素材中的价格展示。",
      source: "Google Ads 政策更新 2026-08"
    },
    {
      platform: "Meta",
      title: "【28 天内生效】Meta WhatsApp Business 10 月新规",
      date: "2026-10-01",
      detail: "Meta 更新 WhatsApp Business API 营销消息政策，新增用户同意要求，限制冷启动消息频率",
      impact: "medium",
      categories: ["电商", "AI"],
      bizValue: "影响通过 WhatsApp 做营销的出海企业。Jill 需提醒使用 WhatsApp 的客户更新合规流程。",
      source: "Meta for Business 官方 2026-08"
    },
    {
      platform: "Meta",
      title: "【29 天内生效】Meta 10 月强制双重验证 2FA",
      date: "2026-10-02",
      detail: "Meta Business 全部广告管理账户 10 月 2 日起强制启用双重验证(2FA)，未启用的账户将被限制投放",
      impact: "high",
      categories: ["电商", "金融", "游戏", "AI", "短剧", "教育"],
      bizValue: "所有 Meta 投放客户都会受影响。Jill 可提前提醒所有客户开启 2FA，避免投放中断。",
      source: "Meta for Business 官方 2026-08"
    },
    {
      platform: "EU",
      title: "EU AI Act 条款 50 已生效 — AI 生成内容水印+深度伪造披露",
      date: "2026-09-02",
      detail: "EU AI Act 条款 50 已生效。AI 生成内容必须加水印标识，深度伪造需强制披露。影响所有在欧盟运营的 AI 内容生成应用（短剧/AI 视频/AI 图片等）",
      impact: "high",
      categories: ["AI", "隐私", "短剧"],
      bizValue: "不合规的 AI 广告内容在欧盟会被下架。Jill 需提醒 AI 类客户确保广告素材符合水印+披露要求，否则投放会被拒审。",
      source: "EU AI Act 官方 / 公开报道"
    },
    {
      platform: "国家广电",
      title: "《微短剧发展管理办法》已施行 — 境内主体出海双轨备案",
      date: "2026-09-01",
      detail: "国家《微短剧发展管理办法》9 月 1 日起施行。境内主体出海需双轨备案，微短剧内容审核趋严",
      impact: "high",
      categories: ["短剧", "加白名单/资质"],
      bizValue: "短剧出海合规门槛提高=需要专业服务。Jill 可向短剧客户推销「备案+合规投放」增值服务。",
      source: "公开报道 2026-09-01"
    },
    {
      platform: "Google",
      title: "Google Ads 已强制 AI Max 迁移",
      date: "2026-09-01",
      detail: "Google Ads ACA / Broad Match 9 月 1 日起已强制迁移至 AI Max。广告主无法再使用旧版精确匹配，全面进入 AI 驱动竞价时代",
      impact: "high",
      categories: ["AI", "电商"],
      bizValue: "Google 投放规则大变=客户需重新理解投放策略。Jill 可推销「AI Max 迁移+优化」服务。",
      source: "Google Ads 官方公告 2026-08"
    },
    {
      platform: "Meta",
      title: "Meta Advantage+ 购物广告(ASC)正式弃用旧版",
      date: "2026-08-15",
      detail: "Meta Advantage+ Shopping Campaigns(ASC) 旧版已正式弃用，全面替换为 Advantage+ 通用版。广告主需迁移至新版 Advantage+ 广告系列",
      impact: "high",
      categories: ["电商", "游戏", "短剧"],
      bizValue: "Meta 投放方式已全面 AI 化。Jill 需确保客户已迁移至 Advantage+ 新版，否则广告会停止投放。",
      source: "Meta for Business 2026-08"
    },
    {
      platform: "Google",
      title: "Google AI Mode 医疗健康搜索测试",
      date: "2026-08-20",
      detail: "Google 在美国测试 AI Mode 医疗健康搜索，AI 生成的健康问答结果将展示在搜索顶部。影响健康类 App 的 SEO/SEM 策略",
      impact: "medium",
      categories: ["AI", "隐私"],
      bizValue: "健康类 App 的搜索流量可能被 AI Mode 截流。Jill 可提醒健康类客户关注 AI Mode 对自然流量的影响。",
      source: "Google 官方 2026-08"
    },
    {
      platform: "TikTok",
      title: "TikTok GMV Max 全量默认开启",
      date: "2026-08-10",
      detail: "TikTok GMV Max（电商最大化转化）已全量默认开启，自动优化出价和创意。广告主可手动关闭但默认状态为开",
      impact: "medium",
      categories: ["电商"],
      bizValue: "TikTok 电商广告进一步自动化。Jill 需了解 GMV Max 默认开启对客户投放效果的影响。",
      source: "TikTok for Business 2026-08"
    },
    {
      platform: "TikTok",
      title: "TikTok F.I.R.S.T. 框架上线",
      date: "2026-08-01",
      detail: "TikTok 发布 F.I.R.S.T. 广告创意框架（Fast/Immersive/Relevant/Simple/Trustworthy），指导广告主优化短视频广告创意",
      impact: "low",
      categories: ["电商", "短剧", "游戏"],
      bizValue: "TikTok 官方创意方法论。Jill 可用 F.I.R.S.T. 框架跟客户聊广告素材优化方向。",
      source: "TikTok for Business 2026-08"
    }
  ],

  // ============================================================
  // 六、广告服务商侧小道消息 agencyIntel
  // ============================================================
  agencyIntel: [
    {
      title: "TikTok 返点行情：5-10% + 新客 $6000 激励",
      date: "2026-09-01",
      summary: "TikTok 广告代理返点维持在 5-10% 区间。新客户首充可获 $6000 激励金（部分代理商渠道）。TikTok Shop 跨境店保证金按类目分级 $200-$2000",
      bizValue: "Jill 可用返点数据跟客户聊「通过易点天下开户能拿到的返点+激励」——$6000 新客激励是很好的开场筹码。",
      source: "52by.com / 代理商行业交流",
      impact: "medium"
    },
    {
      title: "Meta 返点持续下调：3-7% 且门槛提高",
      date: "2026-08-15",
      summary: "Meta 广告代理返点从去年的 5-10% 降至 3-7%，且月消耗门槛从 $1 万提高到 $3 万。Advantage+ 全面替换后人工优化空间被压缩",
      bizValue: "Meta 返点缩水是行业趋势。Jill 可跟客户聊「返点虽然降了但 Advantage+ AI 优化的效果反而更好」——转向效果导向而非返点导向。",
      source: "52by.com / 代理商行业交流",
      impact: "medium"
    },
    {
      title: "Google 返点 3-8% 逐步取消，转向 AI Max 优化费",
      date: "2026-08-20",
      summary: "Google Ads 代理商返点(3-8%)正在被逐步取消，取而代之的是 AI Max 迁移和优化服务费。9-1 强制迁移后，代理商收入模式从返点转向技术服务费",
      bizValue: "Google 返点取消=行业模式转型。Jill 需跟客户聊「返点时代结束，效果优化才是核心价值」——转向按效果收费模式。",
      source: "52by.com / 代理商行业交流",
      impact: "high"
    },
    {
      title: "程序化广告 RTB floor creep：Q3 英美澳地板价涨 18-25%",
      date: "2026-08-25",
      summary: "SSP 动态地板算法学习买家出价历史，英美澳 Tier-1 英语库存 Q3 地板价涨 18-25%。买家通过多 DSP 分散出价+Deal ID/PMP 直采应对",
      bizValue: "RTB 成本上涨=中小客户更需代理的谈判与优化能力。Jill 可跟客户聊「易点天下如何通过 PMP/多 DSP 组合帮你控成本」。",
      source: "Arbitrage Times / 行业交流 2026-08",
      impact: "medium"
    },
    {
      title: "TikTok Smart Performance Campaigns 重构买量打法",
      date: "2026-08-20",
      summary: "TikTok oCPM 与 Smart Performance Campaigns 压缩人工控价空间。内容套利类客户需用 session 时长等价值信号重新教育算法",
      bizValue: "TikTok 自动化加剧=需要更强的归因与信号回传能力。Jill 可推销「S2S 归因+价值出价优化」服务。",
      source: "Arbitrage Times 2026-08",
      impact: "medium"
    },
    {
      title: "2026 漫剧市场规模预估 243 亿，AI 漫剧成本降 70%",
      date: "2026-09-02",
      summary: "DataEye 研究院预测 2026 年国内漫剧市场规模 220-243 亿元。AI 将短剧单集成本从几十万压缩至数千元。字节跳动 3 月漫剧日消耗破 7000 万，首超真人短剧",
      bizValue: "漫剧赛道=短剧之后的新爆发点。Jill 可用 243 亿规模+成本降 70% 的数据跟客户聊「为什么漫剧出海是下一个机会」。",
      source: "DataEye / 巨量引擎 2026-09",
      impact: "high"
    },
    {
      title: "AI Agent 出海代理空白：尚未有专门服务商",
      date: "2026-08-31",
      summary: "AI Agent（智能体）出海赛道快速增长，但目前缺乏专门面向 AI Agent 产品的出海广告代理服务商。连连数字 LoopXPay、光年触达 iSales 等产品需要海外获客支持",
      bizValue: "AI Agent 出海=空白市场=先发优势。Jill 可抢先定位「AI Agent 出海投放专家」——这个细分品类目前没有专门的代理商。",
      source: "行业观察 2026-08",
      impact: "medium"
    },
    {
      title: "利欧股份成为 TikTok 全球代理商，切入 AI 漫剧出海",
      date: "2026-07-16",
      summary: "利欧股份(002131.SZ)是 TikTok 全球代理商，2026 Q1 数字营销收入双位数增长。推出 AI 漫剧平台 Mantur，从代理服务转型内容生产+投放一体化",
      bizValue: "利欧是竞品（TikTok 代理）但也是潜在客户（Mantur 出海需投放）。Jill 需了解利欧的「代理+内容」一体化模式对易点天下的竞争影响。",
      source: "中国证券网 / 利欧年报 2026-04",
      impact: "medium"
    },
    {
      title: "Google AI Max 迁移后点击成本+10%，线索成本承压",
      date: "2026-09-01",
      summary: "Google Ads 强制迁移 AI Max 后，部分行业广告主反馈单次点击成本 +10%。GEO+A2P+Agent 的新型获客模式开始被更多出海企业关注",
      bizValue: "传统投放成本上涨=需要 GEO 等新型获客补充。Jill 可跟客户聊「广告投放 + GEO 双轨获客」的组合方案。",
      source: "聚合增长 / 行业交流 2026-09",
      impact: "medium"
    }
  ],

  // ============================================================
  // 七、中小 App 投放洞察 smeInsight
  // ============================================================
  smeInsight: {
    painPoints: [
      "买量成本持续攀升：Google Ads 单次点击成本 +10%，Meta 单条线索 +20%。中小 App 月预算 $5000-$20000 难以跟头部竞争",
      "合规门槛提高：EU AI Act 水印+披露、Google 金融 Verify 9-15 截止、《微短剧管理办法》双轨备案，中小企业缺专人研究合规",
      "AI 投放全面替代人工：Google AI Max 已强制、Meta Advantage+ 全替换、TikTok GMV Max 默认开启——中小客户不懂怎么用 AI 投放工具",
      "素材产能不足：短剧/漫剧日需上千条素材，中小团队没有 AI 量产能力",
      "海外获客渠道窄：只知道 TikTok+Google，不了解 Meta/Shopee/Instagram 联盟/Pinterest/Reddit 等增量渠道",
      "数据孤岛：缺乏 AppsFlyer/Adjust 等归因工具的运用能力，不知道广告效果到底怎么样"
    ],
    needs: [
      "一站式投放+合规服务：从开户到投放到合规审核全流程托管",
      "AI 素材生成+投放一体化：用 AI 量产素材同时优化投放效果",
      "效果导向而非返点导向：按 CPI/ROAS 结果付费，而非按消耗拿返点",
      "新兴市场本地化：拉美/中东/非洲的本地化创意和渠道资源",
      "GEO+A2P 新型获客：除了传统广告投放，还需要在 AI 搜索入口建立曝光",
      "多平台覆盖：不仅 TikTok，还要 Meta/Google/Shopee/Pinterest/Reddit 等全渠道"
    ],
    entryPoints: [
      "用「Google AI Max 迁移支持」作为切入点——9-1 已强制，很多中小客户还没准备好，免费帮迁移+开户即可获客",
      "用「$6000 TikTok 新客激励」作为开场筹码——直接告诉客户能拿到多少激励金",
      "用「EU AI Act 合规审核」切入——AI 类客户 9-2 后急需合规支持",
      "用「Google 金融 Verify 9-15 截止」切入——金融类客户时间紧迫，不合规会被暂停投放",
      "用「漫剧 243 亿市场+成本降 70%」切入——漫剧赛道新爆点，中小客户可快速入局",
      "用「AI Agent 出海代理空白」切入——抢先定位细分品类，建立专业认知"
    ]
  }
};
