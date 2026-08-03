/* ============================================================
   Jill 工作台 - 每日情报数据
   由 Mochi 每天早上 9:30 自动更新，不需要手动改
   「信息源」字段附真实可核实链接，方便 Jill 核对真实性
   ============================================================ */
window.INTEL = {
  updatedAt: "2026-08-03 18:50",

  /* 大盘速览：开场白级别的硬数据，见客户直接能用 */
  marketPulse: [
    { label: "中国厂商入围全球手游发行商收入 TOP100", value: "38 家", note: "2026年6月，合计创收 20.6 亿美元，占 TOP100 总收入 41.6%（Sensor Tower）", source: "https://timeand.cn/thread-8488-1-3.html" },
    { label: "上半年入围美国百大畅销榜的中国手游", value: "23 款", note: "合计吸金 14.1 亿美元，占百大总收入 20.6%", source: "https://timeand.cn/thread-8488-1-3.html" },
    { label: "美国 4X 策略手游收入 TOP20 中的中国产品", value: "13 款", note: "中国厂商已在定义这个品类，不只是参与竞争", source: "https://timeand.cn/thread-8488-1-3.html" },
    { label: "全球手游 + PC/主机大盘", value: "破 1200 亿美元", note: "《2026海外游戏市场洞察》估计值，解谜手游成为海外收入最高品类（具体报告链接未公开，数字为量级参考）" }
  ],

  /* ============ 一、海外 App 榜单动态（按品类）============ */
  appRankings: {
    game: [
      { name: "Whiteout Survival（无尽冬日海外版）", publisher: "点点互动 Century Games", isChinese: true, markets: "美国 / 欧洲 / 日韩", performance: "全球策略手游收入冠军，累计营收近 50 亿美元，6月收入环比 +11%", comment: "SLG 出海天花板。买量体量极大，是所有广告服务商的必争客户，但也早已被深度覆盖。", source: "https://timeand.cn/thread-8488-1-3.html" },
      { name: "Gossip Harbor", publisher: "柠檬微趣", isChinese: true, markets: "美国 / 欧洲", performance: "全球解谜手游收入第一，稳居中国出海收入榜前三", comment: "合成品类的标杆。解谜赛道 2026 年成为海外收入最高品类，同类新品会大量涌现，是找腰部线索的好方向。", source: "https://timeand.cn/thread-8488-1-3.html" },
      { name: "Kingshot（奔奔王国海外版）", publisher: "点点互动 Century Games", isChinese: true, markets: "美国 / 欧洲 / 中东", performance: "全球策略手游亚军，累计收入突破 15 亿美元", comment: "点点互动一家在出海收入 TOP5 里占三席，说明工业化买量体系的威力。", source: "https://timeand.cn/thread-8488-1-3.html" },
      { name: "鸣潮 Wuthering Waves", publisher: "库洛游戏", isChinese: true, markets: "日本 38% / 韩国 28% / 美国 13%", performance: "6月海外月收入超 3300 万美元，环比 +30%，出海收入榜 TOP7", comment: "6月8日首个跨 IP 联动（赛博朋克：边缘行者）拉动收入。跟二次元客户聊「联动期集中投放」是好切口。", source: "https://timeand.cn/thread-8488-1-3.html" },
      { name: "Puzzles & Survival", publisher: "三七互娱", isChinese: true, markets: "日本超 50%", performance: "6月环比 +10%，升至 TOP9，创年内月度新高，累计海外收入逼近 20 亿美元", comment: "长线产品还能创新高，说明老游戏的再买量空间被严重低估。", source: "https://timeand.cn/thread-8488-1-3.html" },
      { name: "杖剑传说 Sword x Staff", publisher: "雷霆游戏", isChinese: true, markets: "美国贡献六成", performance: "6月海外收入破 1860 万美元，环比 +120%，出海收入增长榜冠军", comment: "上线六周破 2000 万美元，靠《KONOSUBA!》IP 联动引爆。典型的「爆发期急需买量放量」客户画像。", source: "https://timeand.cn/thread-8488-1-3.html" },
      { name: "异环 Neverness to Everness", publisher: "完美世界", isChinese: true, markets: "日本 40% / 韩国 20% / 美国 14%", performance: "5月上线首月移动端海外收入近 1700 万美元，空降收入榜 TOP16", comment: "上线即爆，多端同步发行。新品上线首年是广告预算最激进的阶段，优先级高。", source: "https://timeand.cn/thread-8488-1-3.html" },
      { name: "恋与深空 Love and Deepspace", publisher: "叠纸游戏", isChinese: true, markets: "全球，女性向", performance: "5月海外收入破 2200 万美元环比 +41%，海外累计超 5 亿美元", comment: "全球收入最高的恋爱互动手游之一。女性向素材逻辑和 SLG 完全不同，能聊出专业度。", source: "https://timeand.cn/thread-8488-1-3.html" },
      { name: "Clash of Critters（塔塔冒险队）", publisher: "莉莉丝 / Farlight Games", isChinese: true, markets: "美国 / 澳洲 / 新加坡", performance: "上线当天登顶美国 iOS 游戏免费榜，5月 MAU 环比 +520%，6月冲上收入榜 TOP26", comment: "澳洲 ARPDAU 1.12 美元、新加坡 1.93 美元。新品冷启动期，是介入的黄金窗口。", source: "https://timeand.cn/thread-8488-1-3.html" },
      { name: "Arrows GO! / Block Blast! / Meowdoku", publisher: "多家中国厂商", isChinese: true, markets: "全球泛用户", performance: "Arrows GO! 6月下载超 2200 万次登顶下载榜；Meowdoku 6月下载超 1000 万次环比 +1160%", comment: "超休闲/益智靠广告变现，是变现侧（而非买量侧）的客户，聊法要换成「提升 eCPM / 填充率」。", source: "https://timeand.cn/thread-8488-1-3.html" },
      { name: "Soccer Superstar", publisher: "中国厂商", isChinese: true, markets: "全球", performance: "2026 世界杯推动 6月下载破 1080 万次，环比约 +55%", comment: "世界杯红利还在持续，体育题材产品的投放窗口期就在眼前，动作要快。", source: "https://timeand.cn/thread-8488-1-3.html" }
    ],
    finance: [
      { name: "蚂蚁国际 Ant International", publisher: "蚂蚁集团", isChinese: true, markets: "东南亚 / 中东 / 全球跨境支付", performance: "2026年7月完成约 12 亿美元 A 轮融资", comment: "刚拿到大钱的金融科技巨头，扩张期营销预算会跟着放大，是重点关注对象。" },
      { name: "东南亚数字钱包 / 借贷类 App", publisher: "多家中国出海团队", isChinese: true, markets: "印尼 / 越南 / 菲律宾 / 泰国", performance: "持续为出海金融最活跃赛道（公开榜单数据有限，以本地化牌照玩家为主）", comment: "这个赛道最大的痛点不是投放而是「投不出去」——各平台金融资质认证一年比一年严。你的切入点应该是合规投放能力，而不是价格。" },
      { name: "巴西 / 墨西哥 信贷与钱包类 App", publisher: "多家中国出海团队", isChinese: true, markets: "拉美", performance: "拉美为中国金融科技出海第二大战场", comment: "拉美监管相对宽松、获客成本低，是新团队首选。适合主动找早期客户建立关系。" },
      { name: "中东伊斯兰金融 / 先买后付", publisher: "本地及中国出海团队", isChinese: false, markets: "沙特 / 阿联酋 / 埃及", performance: "中东金融科技随主权基金投入持续升温", comment: "沙特资本正在大举买入科技资产，配套的本地金融应用会跟着起量。" }
    ],
    ai: [
      { name: "Kling AI（可灵）", publisher: "快手 Kuaishou", isChinese: true, markets: "美国 32% / 日本 / 韩国 / 英国 / 德国", performance: "2026 Q2 跻身中国非游应用出海收入榜 TOP20（第17名），海外收入破 1500 万美元，环比 +38%", comment: "榜单里唯一的 AI 内容生成应用，长期位列美国 iPhone 绘图设计类下载榜与畅销榜前三。AI 生成类客户预算增速最快。" },
      { name: "Dola（豆包海外版）", publisher: "字节跳动 ByteDance", isChinese: true, markets: "全球", performance: "Q2 下载榜排名较 Q1 上升两位，与 TikTok、CapCut 包揽下载榜 TOP3", comment: "字节生态自带流量，不太需要外部买量，但可作为行业风向标引用。" },
      { name: "PictureThis（植物识别）", publisher: "睿琪软件 Glority Global", isChinese: true, markets: "美国 / 英国 / 德国", performance: "Q2 收入环比暴涨 237% 创历史新高，排名跃升 9 位至第 7，MAU 稳定约 1400 万", comment: "本季度收入增幅最高的出海应用。素材大量用「Before & After」痛点对比——这个创意打法可以直接讲给其他工具类客户听。" },
      { name: "美图秀秀 / Airbrush", publisher: "美图公司 Meitu", isChinese: true, markets: "全球", performance: "两款产品稳居 Q2 中国非游戏应用出海收入榜 TOP20", comment: "AI 视觉创意赛道稳定盘。老牌厂商投放策略成熟，比拼的是资源和优化能力。" },
      { name: "Seedance 2.5", publisher: "字节跳动", isChinese: true, markets: "全球", performance: "2026年8月初发布的视频创作模型", comment: "AI 视频模型迭代直接降低广告素材制作成本，可作为你给客户提供「AI 素材生产」增值服务的谈资。" },
      { name: "AI 陪伴 / 聊天类应用", publisher: "多家中国团队", isChinese: true, markets: "美国 / 欧洲 / 东南亚", performance: "AI 应用整体为全球非游戏市场主要增长来源", comment: "注意：AI 生成内容广告的披露标注要求正在各平台收紧，合规是聊单的抓手。" }
    ],
    education: [
      { name: "短剧 + 知识付费混合形态", publisher: "字节 PineDrama / NETSTORY NetShort / ShortMax", isChinese: true, markets: "欧美 / 东南亚", performance: "Q2 收入榜 TOP20 中 8 款为短剧应用；PineDrama 下载环比 +460% 首次进榜第 7", comment: "严格说不算教育，但抢的是同一批碎片时间用户，且是目前出海吸金能力最强的垂直赛道，值得单列观察。", source: "https://v.lmtw.com/mzs/content/detail/id/250947" },
      { name: "语言学习类 App", publisher: "多家中国出海团队", isChinese: true, markets: "东南亚 / 拉美 / 中东", performance: "订阅制模式在新兴市场渗透中（公开榜单数据有限）", comment: "教育类在你的重点品类里优先级最低，但新兴市场的英语学习需求是长期确定性机会。" },
      { name: "iQIYI（爱奇艺）", publisher: "爱奇艺", isChinese: true, markets: "东南亚 / 全球", performance: "凭《Pursuit of Jade（逐玉）》等内容创下季度出海收入新高", comment: "内容平台的投放逻辑是「内容周期驱动」，跟游戏的版本驱动很像，可以复用打法。" }
    ]
  },

  /* ============ 二、行业热点事件 ============ */
  hotEvents: [
    { title: "腾讯拟收购海外手游开发商 SuperPlay，金额有望达 15 亿美元", date: "2026-07-21", summary: "有消息称腾讯正洽购以色列手游厂商 SuperPlay，估值或超 100 亿人民币。", bizValue: "大厂并购潮意味着被收购方后续会有整合期的投放调整。也可当作和客户闲聊的行业谈资，显示你在跟盘。" },
    { title: "沙特主权资本约 60 亿美元（413 亿人民币）收购沐瞳科技", date: "2026年上半年", summary: "沙特资本入主中国头部游戏厂商，改写全球游戏资产所有权版图。", bizValue: "中东资本大举进场 = 中东市场投放预算会跟着涨。你的重点市场里中东北非的权重应该提高。", source: "https://timeand.cn/thread-8488-1-3.html" },
    { title: "游戏并购市场复苏：Q2 交易额破 23 亿美元，54 笔交易创近四年新高", date: "2026-07-21", summary: "二季度全球游戏行业并购活跃度大幅回升。", bizValue: "行业回暖信号。可以在开场白里用：「今年 Q2 游戏并购创四年新高，大家都在重新加码，你们海外这块今年的规划是？」" },
    { title: "Meta 发布 AI 驱动的广告新产品，移动应用与游戏出海迈入「AI 原生」时代", date: "2026-07-31", summary: "Meta 面向 App 与游戏广告主推出新一代 AI 投放产品。", bizValue: "最好用的破冰话题。客户对 AI 投放工具普遍焦虑「我自己投是不是就够了」，你要准备好回答：AI 降低了下限，但拉大了上限差距。" },
    { title: "蚂蚁国际完成约 12 亿美元 A 轮融资", date: "2026-07-26", summary: "蚂蚁集团国际业务板块获大额融资。", bizValue: "金融科技出海的融资风向标。刚融资的公司 = 有钱花且急着证明增长，是最好的销售时机。" },
    { title: "智象未来完成 15 亿元 C 轮融资", date: "2026-07-26", summary: "AI 视觉生成公司获大额融资。", bizValue: "同上。建议建立一个「近期融资公司」清单，融资后 1-3 个月是最佳建联窗口。" },
    { title: "番茄海外上线「AI 短剧爆款激励」计划，单部剧最高 5 万美元额外激励", date: "2026-07-31", summary: "平台侧用现金激励拉动 AI 短剧内容供给。", bizValue: "短剧赛道的内容供给在被平台补贴催热，随之而来的是投放需求暴涨。这是一条明确的线索方向。", source: "https://lmtw.com/mzw/content/detail/id/249997" },
    { title: "《2026 海外游戏市场洞察》发布：全球大盘破 1200 亿美元，解谜手游成海外收入最高品类", date: "2026-07-31", summary: "跨平台与内购/广告全渠道分析报告。", bizValue: "「解谜是海外收入最高品类」这条数据非常适合发给做休闲/解谜的客户当开场，显得你懂行。" },
    { title: "Google Play 年龄验证再升级", date: "2026-07-31", summary: "App 出海需注意 Google Play 对年龄验证的新要求。", bizValue: "合规提醒型话术：主动发给客户提示风险，比直接推销服务更容易建立信任。", source: "https://support.google.com/adspolicy" },
    { title: "亚马逊推出新规，强制标注 AI 生成图片", date: "2026-07-27", summary: "电商平台开始强制 AI 内容标注。", bizValue: "AI 素材合规的风向在全平台收紧。如果客户在大量用 AI 出素材，这是必须提醒的风险点。" },
    { title: "TikTok 在美测试付费短剧 App（暂只有真人短剧）", date: "2026-07-27", summary: "TikTok 亲自下场做短剧付费。", bizValue: "平台亲自下场会挤压第三方短剧 App 的空间，这些客户会更需要外部流量能力。", source: "https://v.lmtw.com/mzs/content/detail/id/250947" },
    { title: "2026 Q2 全球智能手机出货量同比下降 6%", date: "2026-08-03", summary: "设备大盘承压。", bizValue: "存量竞争加剧的宏观注脚：新增设备变少 = 抢存量用户 = 买量效率更重要。这是你服务价值的底层逻辑。" },
    { title: "第五届迪拜商业论坛将于 2026年10月14日在深圳举办", date: "2026-10-14", summary: "迪拜政府机构、核心财团与投资机构将到场，设一对一商务对接议程，已有 500+ 企业报名。", bizValue: "线下获客机会，中东方向客户密度高。建议提前和主管报备是否参会。" },
    { title: "Global Connect Singapore / Global Growth Summit", date: "2026-09-17 至 09-18", summary: "新加坡滨海湾金沙，出海行业年度大会。", bizValue: "东南亚客户集中出没的场合，值得争取名额。" }
  ],

  /* ============ 三、中国公司出海产品数据榜单（线索池）============ */
  /* website=官方网址；contact=公开联系方式（无则标「暂无」）；agency=可对接的广告代理服务商（参考，非既成合同） */
  chinaGoingGlobal: [
    { product: "恋与深空", company: "叠纸游戏", hq: "上海", category: "女性向 / 恋爱互动", markets: "全球", revenue: "海外累计超 5 亿美元，全球近 11 亿美元", recent: "5月海外收入破 2200 万美元创年内新高", website: "https://www.papegames.com", contact: "暂无公开数据", agency: "蓝色光标（女性向素材强）" },
    { product: "Clash of Critters", company: "莉莉丝 Farlight Games", hq: "上海", category: "休闲竞技", markets: "美国 / 澳洲 / 新加坡", revenue: "澳洲 ARPDAU 1.12 美元、新加坡 1.93 美元", recent: "上线即登顶美国 iOS 免费榜，MAU 环比 +520%", website: "https://www.lilithgame.com", contact: "暂无公开数据", agency: "蓝色光标 / 猎豹移动" },
    { product: "NetShort", company: "NETSTORY", hq: "—", category: "短剧", markets: "欧美 / 东南亚", revenue: "Q2 下载与收入同步增长，下载榜第 6", recent: "下载量环比约 +25%", website: "", contact: "暂无公开数据", agency: "猎豹移动 / 蓝色光标（短剧见长）" },
    { product: "原神 / 崩坏：星穹铁道 / 绝区零", company: "米哈游 miHoYo", hq: "上海", category: "二次元开放世界 / 动作 RPG", markets: "日本 / 美国 / 韩国", revenue: "原神单月海外分成后收入超 2900 万美元；绝区零 1月出海收入环比 +20% 升第 5", recent: "《原神》空月之歌版本带动单日收入创 2025 年以来新高", website: "https://www.mihoyo.com", contact: "暂无公开数据", agency: "自研自发为主；部分素材合作 蓝色光标" },
    { product: "Age of Origins / War and Order", company: "神州泰岳（壳木游戏）", hq: "北京", category: "SLG", markets: "全球（欧美为主）", revenue: "两款旗舰累计流水均破 10 亿美元；2025 游戏出海收入约 46.4 亿元，海外占 82%", recent: "新游 Stellar Sanctuary / Next Agers 已获版号进入商业化测试", website: "https://www.camelgame.cn", contact: "暂无公开数据", agency: "自研自发（壳木游戏）" },
    { product: "State of Survival / Tiles Survive! / DC: Dark Legion", company: "FunPlus 趣加", hq: "北京 / 瑞士", category: "SLG / 生存", markets: "全球", revenue: "2026年1月全球手游发行商收入排名第 2；Tiles Survive! 累计流水近 6 亿、月流水超 1.25 亿", recent: "Aniimo 预约破 1000 万，向 IP 驱动转型", website: "https://www.funplus.com", contact: "暂无公开数据", agency: "自研自发" },
    { product: "PingPong 跨境收付 / 全球收单", company: "PingPong 乒乓", hq: "杭州", category: "跨境支付 / 金融基础设施", markets: "全球 200+ 国家，重点东南亚 / 中东 / 拉美", revenue: "累计交易额超 4100 亿美元，持 67+ 张全球牌照，服务 75 万+ 企业", recent: "2026 获马来西亚 MSB、阿联酋支付牌照，推非洲本地账户", website: "https://www.pingpongx.com", contact: "官网在线客服 / 商务合作表单", agency: "自投为主" },
    { product: "Filmora 万兴喵影 / PDFelement / 万兴剧厂", company: "万兴科技 Wondershare", hq: "深圳", category: "AI 创意软件 / 工具", markets: "欧美 / 日韩", revenue: "海外收入占比超 93%，非游戏厂商出海收入 Top15；AI 收入同比 +140%", recent: "切入 AI 漫剧赛道，推万兴剧厂；移动端收入同比 +80%", website: "https://www.wondershare.cn", contact: "暂无公开数据", agency: "蓝色光标（品牌向）" },
    { product: "花知晓彩妆（少女美学）", company: "花知晓 Flower Knows", hq: "深圳", category: "美妆 / DTC 出海", markets: "美国 / 日韩 / 东南亚", revenue: "2025 海外营收破 2 亿元，同比 +50%；海外溢价 1.5-2 倍", recent: "2026 被珀莱雅控股（持股 51%），加速全球化", website: "暂无公开数据", contact: "暂无公开数据", agency: "自投 / DTC 独立站为主" },
    { product: "X-Clash / 公共航母", company: "冰川网络", hq: "上海", category: "SLG / 放置卡牌", markets: "全球（境外为主）", revenue: "2025 境外收入占比 54%，X-Clash 全球注册超 4000 万、登顶近 50 国免费榜", recent: "自研+代理双轮驱动，12 款在研储备", website: "暂无公开数据", contact: "暂无公开数据", agency: "自研自发；部分区域联合发行" }
  ],

  /* ============ 四、媒体广告政策变动 ============ */
  policies: [
    { platform: "Google", title: "欧洲经济区 24 国金融服务广告强制验证", date: "2026-07-23", detail: "Google 要求向奥地利、比利时、保加利亚、克罗地亚、塞浦路斯、捷克、丹麦、爱沙尼亚、芬兰、希腊、匈牙利、冰岛、拉脱维亚、列支敦士登、立陶宛、卢森堡、马耳他、荷兰、挪威、波兰、罗马尼亚、斯洛伐克、斯洛文尼亚、瑞典等 24 个 EEA 市场投放金融服务广告的广告主，必须通过外部合规合作伙伴 G2 完成验证，再凭验证码向 Google 申请金融服务验证。银行、信用卡、信贷、投资、证券经纪、债券期货、保险均在列。代投的代理商同样需要验证。G2 申请通道 6月23日开放。", impact: "高", categories: ["金融","现金贷","白名单资质"], bizValue: "这是今年最硬的一条。凡是投欧洲的金融客户，没过认证就直接停投。主动帮客户梳理 G2 认证材料清单，是零成本建立信任的最佳切口——先帮忙，再谈单。", source: "https://support.google.com/adspolicy/answer/15332527" },
    { platform: "Google", title: "马来西亚金融服务广告新验证要求", date: "2026-04-14", detail: "在马来西亚推广金融服务的广告主须通过 G2 完成验证，以「第一方」或「授权广告主」身份向 Google 申请。需提交金融服务类型、经营许可、公司登记编号等，并证明已获监管机构授权或具备豁免资格。已获批准的第三方广告主不能自行申请，须由第一方代为申请。", impact: "高", categories: ["金融","现金贷","白名单资质"], bizValue: "东南亚金融客户的第一道坎。很多中国团队卡在「拿不到本地牌照」这一步，你如果懂这套流程，专业形象立刻不一样。" },
    { platform: "Meta", title: "香港/泰国/爱尔兰/以色列/西班牙金融广告 + 美国证券投资广告强制广告主验证", date: "2026-06-30", detail: "受影响账户须在 2026年6月前完成广告主验证并披露广告主及付费方信息，否则无法在相关国家/地区发布新广告（不影响已在投的广告）。入口：Meta Business Suite → 授权和验证，或广告管理工具 → 验证和广告信息公示。2026年4月开始验证，5月起未完成会收到提醒并需在 30 天内完成。", impact: "高", categories: ["金融","现金贷","白名单资质"], bizValue: "注意「不影响现有广告但无法发新广告」这个细节——客户往往要到想上新素材时才发现被卡。可以主动提醒，制造一次有价值的触达。" },
    { platform: "Meta", title: "印度金融证券及投资类广告新增 AMFI 验证方式", date: "2026年5月", detail: "除原有的 SEBI 注册验证外，Meta 新增支持通过 AMFI（印度共同基金协会）注册信息完成验证。已在 AMFI 注册但无需 SEBI 注册的广告主应尽快在 Meta Business Suite 更新验证信息，否则广告赞助方信息将显示「未在 SEBI 或 AMFI 注册」。", impact: "中", categories: ["金融","现金贷"], bizValue: "印度市场虽不在你的核心区域，但金融客户常常多市场同时布局，知道这条能加分。" },
    { platform: "Meta", title: "发布 AI 驱动的广告新产品，App 与游戏出海迈入「AI 原生」时代", date: "2026-07-31", detail: "Meta 面向移动应用与游戏广告主推出新一代 AI 投放能力，进一步把定向、出价、创意组合交给自动化系统。", impact: "高", categories: ["游戏", "AI应用", "全品类"], bizValue: "客户会问「都 AI 自动化了，还要你们干嘛」。准备好答案：AI 抹平了操作差距，真正的差距转移到素材供给量、数据回传质量和多平台预算调度上——这三件事恰恰是代理商的价值。" },
    { platform: "Meta", title: "AI 驱动受众发现工具全量上线", date: "2026-06-17", detail: "广告主可用自然语言描述目标受众（如「线上购物的健身爱好者」），AI 自动解析并推荐最匹配的现有细分定位选项，无需逐项筛选兴趣标签。仅基于现有标签智能推荐，不新增标签。主要面向品牌认知、互动量、覆盖人数等上层漏斗广告活动。5月7日向 50% 广告主开放，6月17日全量。", impact: "中", categories: ["全品类"], bizValue: "上层漏斗提效工具。对品牌型客户是加分项，对效果型游戏客户意义有限，别说错对象。" },
    { platform: "Meta", title: "品牌权利保护工具提交举报需完成邮箱验证", date: "2026-05-06", detail: "为提升安全性和举报审核效率，所有账户须完成一次性邮箱验证后方可提交侵权举报。2026年5月6日起分阶段上线，5月29日前所有账户需完成。", impact: "低", categories: ["全品类"], bizValue: "小事，但客户被山寨素材困扰时你能立刻说出操作路径，是专业度的细节体现。" },
    { platform: "Meta", title: "商品目录能力升级，新增非零售行业支持", date: "2026年4月", detail: "新增 5 类以上商品类型（媒体、服务等）及行业专属属性，面向销售数字产品和服务的企业提供更适配的目录创建流程。目录驱动广告（进阶赋能型目录广告）可降低成本并提升转化。不影响现有目录设置，仅新增可选字段。", impact: "中", categories: ["AI应用", "教育", "电商"], bizValue: "订阅制 App（AI 工具、教育）现在也能用目录广告了，这是个不少客户还不知道的红利，适合作为「我帮你看看能不能用上」的由头。" },
    { platform: "Google", title: "目标页面要求政策更新，有条件允许跨域重定向", date: "2026年7月初", detail: "允许广告最终到达网址在经批准的特定场景下，通过重定向将用户引导至其他网域（例如品牌跳转至经批准的零售商网站）。未经批准的跨域重定向仍可能影响广告审核。", impact: "中", categories: ["电商", "全品类"], bizValue: "对有分发合作的客户是好消息，但「经批准」三个字是关键，别让客户误解成可以随便跳。" },
    { platform: "Google", title: "「预测市场」政策更新：禁止在美国俄亥俄州投放", date: "2026-06-02", detail: "Google 更新美国预测市场政策，自 2026年6月2日起禁止在俄亥俄州投放预测市场合约及相关产品广告。", impact: "低", categories: ["金融","现金贷"], bizValue: "美国的州级监管在碎片化。提醒客户：美国不是一个市场，是 50 个。" },
    { platform: "Google", title: "个性化广告定位限制说明更新", date: "2026年6月", detail: "补充了需求开发广告系列（Demand Gen）和发现广告系列的相关信息，明确了宣传敏感兴趣类别产品服务时的投放影响。", impact: "中", categories: ["金融", "全品类","现金贷"], bizValue: "金融、健康等敏感类目的定向能力在持续被收窄，客户如果反馈「量跑不出来」，这可能是原因之一。" },
    { platform: "Google", title: "默认广告处理政策更名为「在 Google 估算用户年龄期间限制的广告类别」", date: "2026年6月", detail: "明确临时保护措施仅在估算用户年龄期间适用。未成年识别期间会自动屏蔽成人、酒水、赌博类广告。", impact: "低", categories: ["游戏", "全品类"], bizValue: "游戏客户如果素材偏成人向，可能在年龄估算期被限流，是排查跑量问题的一个隐蔽点。" },
    { platform: "Google", title: "Google Play 年龄验证再升级", date: "2026-07-31", detail: "Google Play 对应用的年龄验证要求进一步收紧。", impact: "中", categories: ["游戏", "AI应用", "全品类"], bizValue: "属于「合规提醒型」触达素材，主动发给客户比推销更容易起对话。" },
    { platform: "TikTok", title: "TikTok Shop 6.02 人群圈选能力上线（TTMS 升级）", date: "2026年6月", detail: "入口：TTMS 人群资产 → 人群包列表 → 人群圈选 → 商品圈人，人群包可一键同步至 TTAM 投放后台。支持按商品类目（一/二/三级及跨类目）、价格范围（可圈选高消费群体）、商品关键词、行为场景（短视频/直播/商品卡全渠道）、用户行为（曝光/点击/加购/下单/搜索分层）多维筛选。", impact: "中", categories: ["电商", "全品类"], bizValue: "电商方向的实操能力升级。如果客户有 TikTok Shop 业务，能讲清这套圈人路径就是硬本事。" },
    { platform: "TikTok", title: "TikTok Shop 菲律宾调整手续费算法", date: "2026-07-27", detail: "运费纳入手续费计算基数，退款不再抵扣手续费。", impact: "中", categories: ["电商"], bizValue: "东南亚电商客户的成本结构直接受影响，是打开话题的好由头。" },
    { platform: "TikTok", title: "TikTok 在美测试付费短剧 App", date: "2026-07-27", detail: "TikTok 在美国测试独立的付费短剧应用，目前仅上线真人短剧。", impact: "中", categories: ["全品类","短剧"], bizValue: "平台亲自下场，第三方短剧 App 的流量焦虑会加重，这批客户对外部投放能力的需求会上升。" },

    /* ===== 新增：违规 / 敏感品类（现金贷、短剧、白名单资质） ===== */
    { platform: "TikTok", title: "TikTok 美区短剧新政：版权溯源 + 官方合作通道 + 最高 20 倍激励", date: "2026-01-30", detail: "2026 年 TikTok 美区政策调整：数据迁移甲骨文云完成、合规审核全面收紧、官方短剧合作通道正式开放。无授权素材剪辑、AI 生成内容未标注等行为会直接导致账号封禁；平台开放短剧频道、独立 App PineDrama 等三端分发，对海外本土剧、AI 漫剧、独家首发内容给出最高 20 倍激励系数，但同时要求内容符合本地化审美与价值观。算法权重重构，深度互动率、二次观看率取代完播率成为核心指标。", impact: "高", categories: ["短剧","白名单资质"], bizValue: "短剧客户最大的坑是「无资质盲投 + 搬运素材」——直接封号。你的切入点：帮客户走官方合作通道（白名单）而非野路子投流，合规才是长期投放的前提。", source: "https://v.lmtw.com/mzs/content/detail/id/250947" },
    { platform: "TikTok", title: "TikTok 开放短剧官方合作：首发/独家最高 20 倍激励", date: "2026-01-05", detail: "TikTok 短剧官方平台对外开放合作，核心阵地包括端内专属短剧频道页和 PineDrama App。优质内容（海外本土剧、新热榜单剧、AI 漫剧）可获最高 20 倍额外激励系数，并即将支持付费与订阅模式。平台提供多语种翻译、本地化支持、账号保护与一站式全球发行。", impact: "中", categories: ["短剧","白名单资质"], bizValue: "短剧客户如果内容优质，走官方合作比自己投流回报高得多。可以主动问客户「有没有接 TikTok 官方短剧合作」来判断其合规水位。", source: "https://lmtw.com/mzw/content/detail/id/249997" },
    { platform: "Meta", title: "Meta 金融政策：禁止发薪日贷 / 90 天内短期贷，须持牌并 18+", date: "2026-04-30", detail: "Meta 金融及保险政策明确：推广信用卡、贷款、保险须仅定向 18 岁以上；禁止发薪日贷款、薪资预支、保释金、90 天及以内短期贷款；投资类不得暗示通过站内/站外私信互动。广告主可能被要求验证身份并证明已获相关监管机构授权，且授权须接受 Meta 审查。银行/保险品牌广告、教育类贷款信息广告无需授权。", impact: "高", categories: ["金融","现金贷","白名单资质"], bizValue: "现金贷客户如果做「发薪日贷 / 超短贷」在 Meta 上直接违规，连牌照都救不回来。聊单前先帮客户确认产品形态是否踩线，这是避坑第一步。", source: "https://transparency.meta.com/zh-hk/policies/ad-standards/restricted-goods-services/financial-services/" },
    { platform: "Google", title: "Google 金融验证扩大至全球：信贷/贷款/投资/保险均须 G2 验证", date: "2026-06-23", detail: "Google 金融服务验证计划从原有 18 国扩展至全球（含欧盟/EEA 24 国 + 既有市场），银行、信用卡、信贷和贷款、投资、证券经纪、债券期货、保险等品类，须先经外部合规伙伴 G2 验证、再向 Google 申请。代理商代投同样需验证。未验证者广告将被限制。", impact: "高", categories: ["金融","现金贷","白名单资质"], bizValue: "「白名单资质」是金融客户投放的前置条件。你可以把「协助 G2 + 平台双验证」打包成一项合规服务，和金融客户谈单的刚性抓手。", source: "https://support.google.com/adspolicy/answer/15332527" },
    { platform: "全平台", title: "印尼 OJK 现金贷红线：日利率 0.3%→0.1%、禁采敏感数据、催收合规", date: "2026-03", detail: "印尼金融服务管理局（OJK）将消费贷日利率上限阶梯式下调至 0.1%（此前 0.3%），并明确数据权限红线：合规平台仅可访问相机、麦克风及位置权限，严禁访问短信、通讯录及相册。催收严禁恐吓骚扰。2026 年起外资出资比例、单人出借限额可能再收紧。", impact: "高", categories: ["现金贷"], bizValue: "印尼是现金贷出海第一战场，但监管已「准红海」。帮客户算清「低利率 + 合规成本」下的 ROI，比单纯谈量更有价值。", source: "https://www.10100.com/article/149145856" },
    { platform: "全平台", title: "菲律宾 SEC 关停 Digido，并出台 OLP 在线贷款平台新规", date: "2026-02 至 2026-03", detail: "2026年2月菲律宾 SEC 永久关停本土头部线上贷款平台 Digido（运营 UnaPay / UnaCash），因其无证运营。2026年3月发布《解除 OLP 禁令并规定审慎、披露及市场行为要求的备忘录通函草案》：运营 1 个平台需实缴 2000 万比索、2-5 个需 3000 万、6-10 个需 5000 万比索；强制双语披露费用/利率/还款条款，禁止隐藏费用与暴力催收，违规直接吊销牌照+刑责。", impact: "高", categories: ["现金贷","白名单资质"], bizValue: "菲律宾从「放开」转向「严管」，资本金门槛暴增约 10 倍。新客户若在菲律宾做现金贷，先问有没有 OLP 牌照，没有就是高危。", source: "https://m.zichanjie.com/article/432622.html" },
    { platform: "全平台", title: "全球现金贷监管基调转向「审慎包容」：利率封顶 + 资本门槛 + 全链路合规", date: "2026-03", detail: "全球现金贷监管从鼓励创新转向审慎：利率天花板快速下沉（印尼 OJK 日利率 0.1%、菲律宾 SEC 月利率上限 12%）；资本准入门槛大幅提升（菲律宾资本金暴增 10 倍、印尼实缴升至 250 亿印尼盾）；全链路收紧催收禁骚扰、数据合规、风控外包管控。", impact: "高", categories: ["现金贷","白名单资质"], bizValue: "现金贷出海的「高利差套利」时代结束。你的谈资应是「精细化运营 + 合规能力」，而非帮客户冲量——这类客户更认长期合规伙伴。", source: "https://c.m.163.com/news/a/KR7OIAAA05199NPP.html" },
    { platform: "TikTok", title: "TikTok 金融产品分层：允许 / 受限(18+) / 禁止", date: "2026-07", detail: "TikTok 将金融产品分三层：允许（银行账户、借记卡、保险、预算工具）；受限须 18+ 且预审批（贷款、信用卡、债务整合）；禁止（保释金、债务减免/信用修复）。所有金融广告须仅定向成人、有免责声明、遵守当地牌照与法规。", impact: "中", categories: ["金融","现金贷"], bizValue: "短剧客户顺带做金融变现时最容易踩线。提醒他们：金融产品在 TikTok 是「受限类」，必须走预审批，不能当普通电商投。", source: "https://sagum.com/2026/07/06/what-are-the-ad-policies-and-restrictions-on-tiktok-3" }
  ],

  /* ============ 五、广告服务商小道消息（渠道侧，非公开大新闻）============ */
  agencyIntel: [
    { title: "AppLovin 把广告平台由 Axon 改名为「AppLovin Ads」，且 2026年7月起全面开放自助投放", date: "2026-07", summary: "AppLovin 将原 Axon 品牌统一为 AppLovin Ads，取消邀请码/代理门槛，任何广告主可直接开户投放；算法内核仍叫 Axon。平台触达超 10 亿日活，以效果（ROAS/付费/留资）为目标，短视频直效素材表现最佳。", bizValue: "对做非游 App（工具、电商、金融）的客户是新增量渠道。可以主动问：「有没有试过 AppLovin 的流量？它现在不用代理也能开，我帮你搭一波测试。」", source: "https://commonthreadco.com/blogs/coachs-corner/applovin-ads-now-open-all-advertisers-ecommerce-2026" },
    { title: "Google 实质「放弃」Privacy Sandbox，第三方 Cookie 在 Chrome 暂不移除", date: "2026-10（2025 官宣）", summary: "Google 2025年10月官宣退役 Topics / Protected Audience / Attribution Reporting 等核心隐私 API，Chrome 第三方 Cookie 不再有明确移除时间表；官方称 GAID 至少保留两年。行业从「后 Cookie 恐慌」回到「Cookie 仍可用」，但用户主动关闭广告 ID 的比例逐年上升，第一方数据仍是长期方向。", bizValue: "很多客户被「Cookie 要没了」吓过。你可以明确告诉游戏/App 客户：Android 端 GAID 短期不会像 iOS ATT 那样硬切，买量逻辑不用大改——但第一方数据回传越早建越稳。", source: "https://blog.playio.co/privacy-sandbox-shutdown-android-game-marketing" },
    { title: "2026 短剧出海代理返点/账期一览（渠道内部口径）", date: "2026", summary: "据代理商盘点：猎豹移动对短剧客户季度消耗达标返点 8%-12%、T+7 结算；蓝色光标返点约 6%-10% 且真人短视频素材强；木瓜移动 5%-8%、多平台统一结算；Mobvista 4%-8%、日结灵活；易点天下推短剧专项、擅长 LTV 分析。TikTok 信息流广告要求分辨率 ≥1080P、帧率 30fps，日预算递增建议不超过 20%-30%。", bizValue: "和短剧客户谈单时，返点和账期是硬指标。把「返点 + 结算周期 + 素材能力」做成对比表，比空谈「我们服务好」有用得多。", source: "https://www.52by.com/article/207768" },
    { title: "Meta 下线无授权抓取 AI 生图功能，合规素材需求反而利好头部代理", date: "2026", summary: "Meta 因肖像权/版权违规紧急下架无授权抓取社交照片生成人像的 AI 功能，核心广告投放与合规 AI 素材工具不受影响。业内解读：欧美将全面禁止无授权抓取公开肖像做广告素材，自带正版图库、肖像授权通道、AI 内容溯源水印的代理（如蓝色光标 BlueAI）反而受益。", bizValue: "给重度用 AI 出素材的客户提个醒：无授权 AI 生图有下架风险。你司若能提供合规素材生产，这是差异化的卖点。", source: "https://www.toutiao.com/article/7661634541102187010" },
    { title: "前海建成国际广告产业带，2025 广告业营收 535.9 亿元", date: "2026 初", summary: "前海 2025 年广告业营收 535.9 亿元（同比 +23.8%），聚集阳狮、宏盟、蓝色光标等头部，并升级「深圳出海 e 站通」对接 32 国 50 家园区。政策对广告出海业务给予针对性补贴。", bizValue: "如果客户在华南，可以借前海出海服务平台/补贴政策做由头建联，也能体现你在行业生态里的信息密度。", source: "https://www.toutiao.com/article/7614064901291770377" }
  ]
};
