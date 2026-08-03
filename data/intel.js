/* ============================================================
   Jill 工作台 - 每日情报数据
   由 Mochi 每天早上 9:30 自动更新，不需要手动改
   ============================================================ */
window.INTEL = {
  updatedAt: "2026-08-03 13:50",

  /* 大盘速览：开场白级别的硬数据，见客户直接能用 */
  marketPulse: [
    { label: "中国厂商入围全球手游发行商收入 TOP100", value: "38 家", note: "2026年6月，合计创收 20.6 亿美元，占 TOP100 总收入 41.6%（Sensor Tower）" },
    { label: "上半年入围美国百大畅销榜的中国手游", value: "23 款", note: "合计吸金 14.1 亿美元，占百大总收入 20.6%" },
    { label: "美国 4X 策略手游收入 TOP20 中的中国产品", value: "13 款", note: "中国厂商已在定义这个品类，不只是参与竞争" },
    { label: "全球手游 + PC/主机大盘", value: "破 1200 亿美元", note: "《2026海外游戏市场洞察》，解谜手游成为海外收入最高品类" }
  ],

  /* ============ 一、海外 App 榜单动态（按品类）============ */
  appRankings: {
    game: [
      { name: "Whiteout Survival（无尽冬日海外版）", publisher: "点点互动 Century Games", isChinese: true, markets: "美国 / 欧洲 / 日韩", performance: "全球策略手游收入冠军，累计营收近 50 亿美元，6月收入环比 +11%", comment: "SLG 出海天花板。买量体量极大，是所有广告服务商的必争客户，但也早已被深度覆盖。" },
      { name: "Gossip Harbor", publisher: "柠檬微趣", isChinese: true, markets: "美国 / 欧洲", performance: "全球解谜手游收入第一，稳居中国出海收入榜前三", comment: "合成品类的标杆。解谜赛道 2026 年成为海外收入最高品类，同类新品会大量涌现，是找腰部线索的好方向。" },
      { name: "Kingshot（奔奔王国海外版）", publisher: "点点互动 Century Games", isChinese: true, markets: "美国 / 欧洲 / 中东", performance: "全球策略手游亚军，累计收入突破 15 亿美元", comment: "点点互动一家在出海收入 TOP5 里占三席，说明工业化买量体系的威力。" },
      { name: "鸣潮 Wuthering Waves", publisher: "库洛游戏", isChinese: true, markets: "日本 38% / 韩国 28% / 美国 13%", performance: "6月海外月收入超 3300 万美元，环比 +30%，出海收入榜 TOP7；Steam+PS 累计销量破 350 万份", comment: "6月8日首个跨 IP 联动（赛博朋克：边缘行者）拉动收入，但下载量持平——增长来自付费深度而非拉新。跟二次元客户聊「联动期集中投放」是好切口。" },
      { name: "Puzzles & Survival", publisher: "三七互娱", isChinese: true, markets: "日本超 50%", performance: "6月环比 +10%，升至 TOP9，创年内月度新高，累计海外收入逼近 20 亿美元", comment: "长线产品还能创新高，说明老游戏的再买量空间被严重低估。可以拿这个案例去撩有老产品的中型厂商。" },
      { name: "杖剑传说 Sword x Staff", publisher: "雷霆游戏", isChinese: true, markets: "美国贡献六成", performance: "6月海外收入破 1860 万美元，环比 +120%，出海收入增长榜冠军", comment: "上线六周破 2000 万美元，靠《KONOSUBA!》IP 联动引爆。典型的「爆发期急需买量放量」客户画像。" },
      { name: "异环 Neverness to Everness", publisher: "完美世界", isChinese: true, markets: "日本 40% / 韩国 20% / 美国 14%", performance: "5月上线首月移动端海外收入近 1700 万美元，空降收入榜 TOP16", comment: "上线即爆，多端同步发行。新品上线首年是广告预算最激进的阶段，优先级高。" },
      { name: "恋与深空 Love and Deepspace", publisher: "叠纸游戏", isChinese: true, markets: "全球，女性向", performance: "5月海外收入破 2200 万美元环比 +41%，海外累计超 5 亿美元，全球近 11 亿美元", comment: "全球收入最高的恋爱互动手游之一。女性向素材逻辑和 SLG 完全不同，能聊出专业度。" },
      { name: "Clash of Critters（塔塔冒险队）", publisher: "莉莉丝 / Farlight Games", isChinese: true, markets: "美国 / 澳洲 / 新加坡", performance: "上线当天登顶美国 iOS 游戏免费榜，5月 MAU 环比 +520%，6月冲上收入榜 TOP26", comment: "澳洲 ARPDAU 1.12 美元、新加坡 1.93 美元。新品冷启动期，是介入的黄金窗口。" },
      { name: "Arrows GO! / Block Blast! / Meowdoku", publisher: "多家中国厂商", isChinese: true, markets: "全球泛用户", performance: "Arrows GO! 6月下载超 2200 万次登顶下载榜；Meowdoku 6月下载超 1000 万次环比 +1160%", comment: "超休闲/益智靠广告变现，是变现侧（而非买量侧）的客户，聊法要换成「提升 eCPM / 填充率」。" },
      { name: "Soccer Superstar", publisher: "中国厂商", isChinese: true, markets: "全球", performance: "2026 世界杯推动 6月下载破 1080 万次，环比约 +55%", comment: "世界杯红利还在持续，体育题材产品的投放窗口期就在眼前，动作要快。" }
    ],
    finance: [
      { name: "蚂蚁国际 Ant International", publisher: "蚂蚁集团", isChinese: true, markets: "东南亚 / 中东 / 全球跨境支付", performance: "2026年7月完成约 12 亿美元 A 轮融资", comment: "刚拿到大钱的金融科技巨头，扩张期营销预算会跟着放大，是重点关注对象。" },
      { name: "东南亚数字钱包 / 借贷类 App", publisher: "多家中国出海团队", isChinese: true, markets: "印尼 / 越南 / 菲律宾 / 泰国", performance: "持续为出海金融最活跃赛道（公开榜单数据有限，以本地化牌照玩家为主）", comment: "这个赛道最大的痛点不是投放而是「投不出去」——各平台金融资质认证一年比一年严。你的切入点应该是合规投放能力，而不是价格。" },
      { name: "巴西 / 墨西哥 信贷与钱包类 App", publisher: "多家中国出海团队", isChinese: true, markets: "拉美", performance: "拉美为中国金融科技出海第二大战场", comment: "拉美监管相对宽松、获客成本低，是新团队首选。适合主动找早期客户建立关系。" },
      { name: "中东伊斯兰金融 / 先买后付", publisher: "本地及中国出海团队", isChinese: false, markets: "沙特 / 阿联酋 / 埃及", performance: "中东金融科技随主权基金投入持续升温", comment: "沙特资本正在大举买入科技资产（见热点：413 亿收购沐瞳），配套的本地金融应用会跟着起量。" }
    ],
    ai: [
      { name: "Kling AI（可灵）", publisher: "快手 Kuaishou", isChinese: true, markets: "美国 32% / 日本 / 韩国 / 英国 / 德国", performance: "2026 Q2 首次跻身中国非游应用出海收入榜 TOP20（第17名），海外收入破 1500 万美元，环比 +38%", comment: "榜单里唯一的 AI 内容生成应用，长期位列美国 iPhone 绘图设计类下载榜与畅销榜前三。AI 生成类客户预算增速最快。" },
      { name: "Dola（豆包海外版）", publisher: "字节跳动 ByteDance", isChinese: true, markets: "全球", performance: "Q2 下载榜排名较 Q1 上升两位，与 TikTok、CapCut 包揽下载榜 TOP3", comment: "字节生态自带流量，不太需要外部买量，但可作为行业风向标引用。" },
      { name: "PictureThis（植物识别）", publisher: "睿琪软件 Glority Global", isChinese: true, markets: "美国 / 英国 / 德国", performance: "Q2 收入环比暴涨 237% 创历史新高，排名跃升 9 位至第 7，MAU 稳定约 1400 万", comment: "本季度收入增幅最高的出海应用。素材大量用「Before & After」痛点对比——这个创意打法可以直接讲给其他工具类客户听。" },
      { name: "美图秀秀 / Airbrush", publisher: "美图公司 Meitu", isChinese: true, markets: "全球", performance: "两款产品稳居 Q2 中国非游戏应用出海收入榜 TOP20；3月点点数据出海收入榜排名第 4", comment: "AI 视觉创意赛道稳定盘。老牌厂商投放策略成熟，比拼的是资源和优化能力。" },
      { name: "Seedance 2.5", publisher: "字节跳动", isChinese: true, markets: "全球", performance: "2026年8月初发布的视频创作模型", comment: "AI 视频模型迭代直接降低广告素材制作成本，可作为你给客户提供「AI 素材生产」增值服务的谈资。" },
      { name: "AI 陪伴 / 聊天类应用", publisher: "多家中国团队", isChinese: true, markets: "美国 / 欧洲 / 东南亚", performance: "AI 应用整体为全球非游戏市场主要增长来源，付费转化能力持续提升", comment: "注意：AI 生成内容广告的披露标注要求正在各平台收紧，合规是聊单的抓手。" }
    ],
    education: [
      { name: "短剧 + 知识付费混合形态", publisher: "字节 PineDrama / NETSTORY NetShort / ShortMax", isChinese: true, markets: "欧美 / 东南亚", performance: "Q2 收入榜 TOP20 中 8 款为短剧应用；PineDrama 下载环比 +460% 首次进榜第 7；NetShort 下载环比 +25%", comment: "严格说不算教育，但抢的是同一批碎片时间用户，且是目前出海吸金能力最强的垂直赛道，值得单列观察。" },
      { name: "语言学习类 App", publisher: "多家中国出海团队", isChinese: true, markets: "东南亚 / 拉美 / 中东", performance: "订阅制模式在新兴市场渗透中（公开榜单数据有限）", comment: "教育类在你的重点品类里优先级最低，但新兴市场的英语学习需求是长期确定性机会。" },
      { name: "iQIYI（爱奇艺）", publisher: "爱奇艺", isChinese: true, markets: "东南亚 / 全球", performance: "凭《Pursuit of Jade（逐玉）》等内容创下季度出海收入新高", comment: "内容平台的投放逻辑是「内容周期驱动」，跟游戏的版本驱动很像，可以复用打法。" }
    ]
  },

  /* ============ 二、行业热点事件 ============ */
  hotEvents: [
    { title: "腾讯拟收购海外手游开发商 SuperPlay，金额有望达 15 亿美元", date: "2026-07-21", summary: "有消息称腾讯正洽购以色列手游厂商 SuperPlay，估值或超 100 亿人民币。", bizValue: "大厂并购潮意味着被收购方后续会有整合期的投放调整。也可当作和客户闲聊的行业谈资，显示你在跟盘。" },
    { title: "沙特主权资本约 60 亿美元（413 亿人民币）收购沐瞳科技", date: "2026年上半年", summary: "沙特资本入主中国头部游戏厂商，改写全球游戏资产所有权版图。", bizValue: "中东资本大举进场 = 中东市场投放预算会跟着涨。你的重点市场里中东北非的权重应该提高。" },
    { title: "游戏并购市场复苏：Q2 交易额破 23 亿美元，54 笔交易创近四年新高", date: "2026-07-21", summary: "二季度全球游戏行业并购活跃度大幅回升。", bizValue: "行业回暖信号。可以在开场白里用：「今年 Q2 游戏并购创四年新高，大家都在重新加码，你们海外这块今年的规划是？」" },
    { title: "Meta 发布 AI 驱动的广告新产品，移动应用与游戏出海迈入「AI 原生」时代", date: "2026-07-31", summary: "Meta 面向 App 与游戏广告主推出新一代 AI 投放产品。", bizValue: "最好用的破冰话题。客户对 AI 投放工具普遍焦虑「我自己投是不是就够了」，你要准备好回答：AI 降低了下限，但拉大了上限差距。" },
    { title: "蚂蚁国际完成约 12 亿美元 A 轮融资", date: "2026-07-26", summary: "蚂蚁集团国际业务板块获大额融资。", bizValue: "金融科技出海的融资风向标。刚融资的公司 = 有钱花且急着证明增长，是最好的销售时机。" },
    { title: "智象未来完成 15 亿元 C 轮融资", date: "2026-07-26", summary: "AI 视觉生成公司获大额融资。", bizValue: "同上。建议建立一个「近期融资公司」清单，融资后 1-3 个月是最佳建联窗口。" },
    { title: "番茄海外上线「AI 短剧爆款激励」计划，单部剧最高 5 万美元额外激励", date: "2026-07-31", summary: "平台侧用现金激励拉动 AI 短剧内容供给。", bizValue: "短剧赛道的内容供给在被平台补贴催热，随之而来的是投放需求暴涨。这是一条明确的线索方向。" },
    { title: "《2026 海外游戏市场洞察》发布：全球大盘破 1200 亿美元，解谜手游成海外收入最高品类", date: "2026-07-31", summary: "跨平台与内购/广告全渠道分析报告。", bizValue: "「解谜是海外收入最高品类」这条数据非常适合发给做休闲/解谜的客户当开场，显得你懂行。" },
    { title: "Google Play 年龄验证再升级", date: "2026-07-31", summary: "App 出海需注意 Google Play 对年龄验证的新要求。", bizValue: "合规提醒型话术：主动发给客户提示风险，比直接推销服务更容易建立信任。" },
    { title: "亚马逊推出新规，强制标注 AI 生成图片", date: "2026-07-27", summary: "电商平台开始强制 AI 内容标注。", bizValue: "AI 素材合规的风向在全平台收紧。如果客户在大量用 AI 出素材，这是必须提醒的风险点。" },
    { title: "TikTok 在美测试付费短剧 App（暂只有真人短剧）", date: "2026-07-27", summary: "TikTok 亲自下场做短剧付费。", bizValue: "平台亲自下场会挤压第三方短剧 App 的空间，这些客户会更需要外部流量能力。" },
    { title: "2026 Q2 全球智能手机出货量同比下降 6%", date: "2026-08-03", summary: "设备大盘承压。", bizValue: "存量竞争加剧的宏观注脚：新增设备变少 = 抢存量用户 = 买量效率更重要。这是你服务价值的底层逻辑。" },
    { title: "第五届迪拜商业论坛将于 2026年10月14日在深圳举办", date: "2026-10-14", summary: "迪拜政府机构、核心财团与投资机构将到场，设一对一商务对接议程，已有 500+ 企业报名。", bizValue: "线下获客机会，中东方向客户密度高。建议提前和主管报备是否参会。" },
    { title: "Global Connect Singapore / Global Growth Summit", date: "2026-09-17 至 09-18", summary: "新加坡滨海湾金沙，出海行业年度大会。", bizValue: "东南亚客户集中出没的场合，值得争取名额。" }
  ],

  /* ============ 三、中国公司出海产品数据榜单（线索池）============ */
  chinaGoingGlobal: [
    { product: "Whiteout Survival / Kingshot / Tasty Travels", company: "点点互动 Century Games", hq: "北京", category: "SLG / 合成", markets: "美国 / 欧洲 / 日韩", revenue: "Whiteout Survival 累计近 50 亿美元；Kingshot 累计破 15 亿美元；Tasty Travels 单月超 3900 万美元", recent: "出海收入 TOP5 中独占三席，工业化买量体系成熟" },
    { product: "Gossip Harbor", company: "柠檬微趣", hq: "北京", category: "解谜 / 合成", markets: "美国 / 欧洲", revenue: "全球解谜手游收入第一", recent: "长期霸占出海收入榜前三" },
    { product: "鸣潮 / 战双帕弥什", company: "库洛游戏", hq: "广州", category: "二次元 ARPG", markets: "日本 38% / 韩国 28% / 美国 13%", revenue: "鸣潮 6月海外月收入超 3300 万美元", recent: "首次跨 IP 联动，Steam+PS 累计 350 万份，跨平台策略见效" },
    { product: "Puzzles & Survival", company: "三七互娱 (002555.SZ)", hq: "广州", category: "SLG + 消除", markets: "日本超 50%", revenue: "累计海外收入逼近 20 亿美元", recent: "6月创年内月度新高，多款 IP 改编新作登陆东南亚、欧美" },
    { product: "杖剑传说 Sword x Staff", company: "雷霆游戏（吉比特系）", hq: "厦门", category: "RPG", markets: "美国六成", revenue: "上线六周破 2000 万美元，6月单月 1860 万美元", recent: "IP 联动带动环比 +120%，厂商全球排名跃升 24 位" },
    { product: "异环 Neverness to Everness", company: "完美世界 (002624.SZ)", hq: "北京", category: "开放世界 RPG", markets: "日本 40% / 韩国 20% / 美国 14%", revenue: "上线首月移动端海外近 1700 万美元", recent: "多端同步发行，PS 全球畅销榜第 5，官网访问量增长 716%" },
    { product: "恋与深空", company: "叠纸游戏", hq: "上海", category: "女性向 / 恋爱互动", markets: "全球", revenue: "海外累计超 5 亿美元，全球近 11 亿美元", recent: "5月海外收入破 2200 万美元创年内新高" },
    { product: "龙族：卡塞尔之门", company: "祖龙娱乐 (09990.HK)", hq: "北京", category: "IP 改编 RPG", markets: "日本七成", revenue: "6月创 2025年3月上市以来新高", recent: "深耕日本单一市场的典型样本" },
    { product: "六六英雄 Dicero! / 弓箭传说2", company: "海彼网络 Habby", hq: "上海", category: "轻度 Roguelike", markets: "中国港澳台 / 东南亚 / 美国 26.4%", revenue: "六六英雄 5月环比 +184%", recent: "新品迅速起量，Habby 的爆款方法论稳定输出" },
    { product: "Clash of Critters", company: "莉莉丝 Farlight Games", hq: "上海", category: "休闲竞技", markets: "美国 / 澳洲 / 新加坡", revenue: "澳洲 ARPDAU 1.12 美元、新加坡 1.93 美元", recent: "上线即登顶美国 iOS 免费榜，MAU 环比 +520%" },
    { product: "TikTok / CapCut / Dola / PineDrama", company: "字节跳动 ByteDance", hq: "北京", category: "社交 / 工具 / 短剧 / AI", markets: "全球", revenue: "TikTok 稳居非游收入与下载双榜第一", recent: "Q2 六款产品入围下载榜 TOP20，PineDrama 下载环比 +460%" },
    { product: "Kling AI 可灵", company: "快手 Kuaishou (01024.HK)", hq: "北京", category: "AI 视频生成", markets: "美国 32% / 日韩英德", revenue: "Q2 海外收入破 1500 万美元，环比 +38%", recent: "首次进入中国非游出海收入榜 TOP20" },
    { product: "PictureThis", company: "睿琪软件 Glority Global", hq: "上海", category: "AI 工具（植物识别）", markets: "美国 / 英国 / 德国", revenue: "Q2 环比 +237%，出海收入榜第 7", recent: "MAU 约 1400 万，季节性增长规律明显（每年 5-6 月为高峰）" },
    { product: "美图秀秀 / Airbrush", company: "美图公司 (01357.HK)", hq: "厦门", category: "AI 视觉创意", markets: "全球", revenue: "两款产品稳居出海收入榜 TOP20", recent: "3月点点数据中国非游厂商出海收入榜第 4" },
    { product: "SUGO", company: "赤子城科技 Newborn Town (09911.HK)", hq: "北京", category: "社交发现", markets: "中东 / 东南亚", revenue: "Q2 出海收入榜第 14 名", recent: "中东社交赛道的中国代表玩家" },
    { product: "NetShort", company: "NETSTORY", hq: "—", category: "短剧", markets: "欧美 / 东南亚", revenue: "Q2 下载与收入同步增长，下载榜第 6", recent: "下载量环比约 +25%" },
    { product: "小红书 rednote", company: "行吟信息科技", hq: "上海", category: "生活方式社区", markets: "全球华人 + 泛用户", revenue: "Q2 海外收入环比 +11%", recent: "海外化进程加速" }
  ],

  /* ============ 四、媒体广告政策变动 ============ */
  policies: [
    { platform: "Google", title: "欧洲经济区 24 国金融服务广告强制验证", date: "2026-07-23", detail: "Google 要求向奥地利、比利时、保加利亚、克罗地亚、塞浦路斯、捷克、丹麦、爱沙尼亚、芬兰、希腊、匈牙利、冰岛、拉脱维亚、列支敦士登、立陶宛、卢森堡、马耳他、荷兰、挪威、波兰、罗马尼亚、斯洛伐克、斯洛文尼亚、瑞典等 24 个 EEA 市场投放金融服务广告的广告主，必须通过外部合规合作伙伴 G2 完成验证，再凭验证码向 Google 申请金融服务验证。银行、信用卡、信贷、投资、证券经纪、债券期货、保险均在列。代投的代理商同样需要验证。G2 申请通道 6月23日开放。", impact: "高", categories: ["金融"], bizValue: "这是今年最硬的一条。凡是投欧洲的金融客户，没过认证就直接停投。主动帮客户梳理 G2 认证材料清单，是零成本建立信任的最佳切口——先帮忙，再谈单。" },
    { platform: "Google", title: "马来西亚金融服务广告新验证要求", date: "2026-04-14", detail: "在马来西亚推广金融服务的广告主须通过 G2 完成验证，以「第一方」或「授权广告主」身份向 Google 申请。需提交金融服务类型、经营许可、公司登记编号等，并证明已获监管机构授权或具备豁免资格。已获批准的第三方广告主不能自行申请，须由第一方代为申请。", impact: "高", categories: ["金融"], bizValue: "东南亚金融客户的第一道坎。很多中国团队卡在「拿不到本地牌照」这一步，你如果懂这套流程，专业形象立刻不一样。" },
    { platform: "Meta", title: "香港/泰国/爱尔兰/以色列/西班牙金融广告 + 美国证券投资广告强制广告主验证", date: "2026-06-30", detail: "受影响账户须在 2026年6月前完成广告主验证并披露广告主及付费方信息，否则无法在相关国家/地区发布新广告（不影响已在投的广告）。入口：Meta Business Suite → 授权和验证，或广告管理工具 → 验证和广告信息公示。2026年4月开始验证，5月起未完成会收到提醒并需在 30 天内完成。", impact: "高", categories: ["金融"], bizValue: "注意「不影响现有广告但无法发新广告」这个细节——客户往往要到想上新素材时才发现被卡。可以主动提醒，制造一次有价值的触达。" },
    { platform: "Meta", title: "印度金融证券及投资类广告新增 AMFI 验证方式", date: "2026年5月", detail: "除原有的 SEBI 注册验证外，Meta 新增支持通过 AMFI（印度共同基金协会）注册信息完成验证。已在 AMFI 注册但无需 SEBI 注册的广告主应尽快在 Meta Business Suite 更新验证信息，否则广告赞助方信息将显示「未在 SEBI 或 AMFI 注册」。", impact: "中", categories: ["金融"], bizValue: "印度市场虽不在你的核心区域，但金融客户常常多市场同时布局，知道这条能加分。" },
    { platform: "Meta", title: "发布 AI 驱动的广告新产品，App 与游戏出海迈入「AI 原生」时代", date: "2026-07-31", detail: "Meta 面向移动应用与游戏广告主推出新一代 AI 投放能力，进一步把定向、出价、创意组合交给自动化系统。", impact: "高", categories: ["游戏", "AI应用", "全品类"], bizValue: "客户会问「都 AI 自动化了，还要你们干嘛」。准备好答案：AI 抹平了操作差距，真正的差距转移到素材供给量、数据回传质量和多平台预算调度上——这三件事恰恰是代理商的价值。" },
    { platform: "Meta", title: "AI 驱动受众发现工具全量上线", date: "2026-06-17", detail: "广告主可用自然语言描述目标受众（如「线上购物的健身爱好者」），AI 自动解析并推荐最匹配的现有细分定位选项，无需逐项筛选兴趣标签。仅基于现有标签智能推荐，不新增标签。主要面向品牌认知、互动量、覆盖人数等上层漏斗广告活动。5月7日向 50% 广告主开放，6月17日全量。", impact: "中", categories: ["全品类"], bizValue: "上层漏斗提效工具。对品牌型客户是加分项，对效果型游戏客户意义有限，别说错对象。" },
    { platform: "Meta", title: "品牌权利保护工具提交举报需完成邮箱验证", date: "2026-05-06", detail: "为提升安全性和举报审核效率，所有账户须完成一次性邮箱验证后方可提交侵权举报。2026年5月6日起分阶段上线，5月29日前所有账户需完成。", impact: "低", categories: ["全品类"], bizValue: "小事，但客户被山寨素材困扰时你能立刻说出操作路径，是专业度的细节体现。" },
    { platform: "Meta", title: "商品目录能力升级，新增非零售行业支持", date: "2026年4月", detail: "新增 5 类以上商品类型（媒体、服务等）及行业专属属性，面向销售数字产品和服务的企业提供更适配的目录创建流程。目录驱动广告（进阶赋能型目录广告）可降低成本并提升转化。不影响现有目录设置，仅新增可选字段。", impact: "中", categories: ["AI应用", "教育", "电商"], bizValue: "订阅制 App（AI 工具、教育）现在也能用目录广告了，这是个不少客户还不知道的红利，适合作为「我帮你看看能不能用上」的由头。" },
    { platform: "Google", title: "目标页面要求政策更新，有条件允许跨域重定向", date: "2026年7月初", detail: "允许广告最终到达网址在经批准的特定场景下，通过重定向将用户引导至其他网域（例如品牌跳转至经批准的零售商网站）。未经批准的跨域重定向仍可能影响广告审核。", impact: "中", categories: ["电商", "全品类"], bizValue: "对有分发合作的客户是好消息，但「经批准」三个字是关键，别让客户误解成可以随便跳。" },
    { platform: "Google", title: "「预测市场」政策更新：禁止在美国俄亥俄州投放", date: "2026-06-02", detail: "Google 更新美国预测市场政策，自 2026年6月2日起禁止在俄亥俄州投放预测市场合约及相关产品广告。", impact: "低", categories: ["金融"], bizValue: "美国的州级监管在碎片化。提醒客户：美国不是一个市场，是 50 个。" },
    { platform: "Google", title: "个性化广告定位限制说明更新", date: "2026年6月", detail: "补充了需求开发广告系列（Demand Gen）和发现广告系列的相关信息，明确了宣传敏感兴趣类别产品服务时的投放影响。", impact: "中", categories: ["金融", "全品类"], bizValue: "金融、健康等敏感类目的定向能力在持续被收窄，客户如果反馈「量跑不出来」，这可能是原因之一。" },
    { platform: "Google", title: "默认广告处理政策更名为「在 Google 估算用户年龄期间限制的广告类别」", date: "2026年6月", detail: "明确临时保护措施仅在估算用户年龄期间适用。未成年识别期间会自动屏蔽成人、酒水、赌博类广告。", impact: "低", categories: ["游戏", "全品类"], bizValue: "游戏客户如果素材偏成人向，可能在年龄估算期被限流，是排查跑量问题的一个隐蔽点。" },
    { platform: "Google", title: "Google Play 年龄验证再升级", date: "2026-07-31", detail: "Google Play 对应用的年龄验证要求进一步收紧。", impact: "中", categories: ["游戏", "AI应用", "全品类"], bizValue: "属于「合规提醒型」触达素材，主动发给客户比推销更容易起对话。" },
    { platform: "TikTok", title: "TikTok Shop 6.02 人群圈选能力上线（TTMS 升级）", date: "2026年6月", detail: "入口：TTMS 人群资产 → 人群包列表 → 人群圈选 → 商品圈人，人群包可一键同步至 TTAM 投放后台。支持按商品类目（一/二/三级及跨类目）、价格范围（可圈选高消费群体）、商品关键词、行为场景（短视频/直播/商品卡全渠道）、用户行为（曝光/点击/加购/下单/搜索分层）多维筛选。", impact: "中", categories: ["电商", "全品类"], bizValue: "电商方向的实操能力升级。如果客户有 TikTok Shop 业务，能讲清这套圈人路径就是硬本事。" },
    { platform: "TikTok", title: "TikTok Shop 菲律宾调整手续费算法", date: "2026-07-27", detail: "运费纳入手续费计算基数，退款不再抵扣手续费。", impact: "中", categories: ["电商"], bizValue: "东南亚电商客户的成本结构直接受影响，是打开话题的好由头。" },
    { platform: "TikTok", title: "TikTok 在美测试付费短剧 App", date: "2026-07-27", detail: "TikTok 在美国测试独立的付费短剧应用，目前仅上线真人短剧。", impact: "中", categories: ["全品类"], bizValue: "平台亲自下场，第三方短剧 App 的流量焦虑会加重，这批客户对外部投放能力的需求会上升。" }
  ]
};
