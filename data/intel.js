// data/intel.js — Jill 的工作台情报数据
// 更新时间：2026-09-18T09:30:00+08:00（9:30 自动化重写）
// 数据来源：Sensor Tower / DataEye / Insightrackr / 潮涌AI / 36氪·扬帆出海 / 亿邦动力 / The Asian Banker / FinTech Futures / Google·Meta·TikTok 官方政策页 / 52by.com / 10100.com 等
// 所有数据均来自公开信息源，未编造任何数据；查不到的写「暂无公开数据」

window.INTEL = {
  updatedAt: "2026-09-18T09:30:00+08:00",

  // ============================================================
  // 一、大盘速览 marketPulse
  // ============================================================
  marketPulse: [
    {
      label: "8 月中国手游出海",
      value: "头部 Top6 不变",
      note: "9/15 Sensor Tower 发布 8 月出海榜：收入前六名与 7 月完全一致，柠檬微趣《Gossip Harbor》环比 +11% 八连冠；三七《Last Asylum: Plague》$2500 万+(+37%) 跃升 9 位至第 7。头部焊死、中腰部靠周年/赛季洗牌",
      source: "Sensor Tower 2026-08 月报（腾讯新闻转载） https://new.qq.com/rain/a/20260915A0BLS500"
    },
    {
      label: "8 月海外短剧收入",
      value: "$2.89 亿 (+6%)",
      note: "8 月海外微短剧 App 双端内购收入 $2.89 亿环比 +6%，下载 2.80 亿次微降。美国占收入 29.3%；AI 短剧/漫剧投放素材超 200 万组成投放主力，在投 APP/网页达 1275 款(+5%)",
      source: "DataEye 研究院（澎湃·湃客转载） https://www.thepaper.cn/newsDetail_forward_34044251"
    },
    {
      label: "Q2 全球非游 vs 游戏",
      value: "+14.6% vs -4.5%",
      note: "Q2 全球非游 App 收入 $244 亿同比 +14.6%，游戏收入下滑 4.5%；生成式 AI 品类消费支出同比 +108%（ChatGPT 占品类约 6 成）。广告主预算继续从游戏向非游/AI 溢出",
      source: "Sensor Tower Q2 Digital Market Index（iDrop News 转载） https://www.idropnews.com/news/q2-2026-mobile-gaming-revenue-decline/267257"
    },
    {
      label: "AI 陪伴出海半年",
      value: "H1 合计 $1.63 亿",
      note: "全球 NSFW 及恋爱陪伴类 AI 应用 2026 上半年合计吸金 $1.628 亿；中国团队两款产品挤进全球 AI 陪伴收入榜前四（Tipsy Chat $1520 万全球第 2、Crushie AI $880 万第 4），靠高客单订阅而非流量规模",
      source: "AI趣谈（今日头条转载）/ Appfigures https://www.toutiao.com/article/7683763137362805299"
    },
    {
      label: "Fish Audio 融资",
      value: "$5200 万种子轮",
      note: "上海团队 AI 语音公司 Fish Audio（Fish Speech 开源起家）7 月末拿下今日资本领投 $5200 万种子轮，ARR 一年内从 0 做到 $2100 万、团队仅 22 人——中国 AI 原生出海公司「小团队高人效」样本",
      source: "The SaaS News / AITNT https://thesaasnews.com/news/fish-audio-raises-52m-seed"
    },
    {
      label: "51Talk 境外业务",
      value: "Q1 营收 +70.9%",
      note: "51Talk Q1 总营收 $3120 万、境外业务营收同比 +70.9%，AI 落地成核心增长驱动；「AI+真人」新一代学习产品年内落地。在线教育出海进入 AI 原生化兑现期",
      source: "51Talk 2026 Q1 财报（中国经济新闻网） https://www.cet.com.cn/wzsy/kjzx/10406490.shtml"
    }
  ],

  // ============================================================
  // 二、App 榜单 appRankings
  // ============================================================
  appRankings: {
    // —— 游戏 ——
    game: [
      {
        name: "Gossip Harbor",
        publisher: "柠檬微趣",
        isChinese: true,
        markets: "美国/全球",
        performance: "8 月海外收入再创纪录、环比 +11%，连续 8 个月稳居中国手游出海收入榜第一；4 周年活动（登录奖励+周年转盘+10 阶段淘汰赛）驱动",
        comment: "柠檬微趣是易点天下长期合作客户，连冠 8 个月说明其买量盘子还在扩张。Jill 可用「二合赛道四周年还能创新高」说服犹豫中的休闲客户：老产品靠节点运营就有二次买量价值。",
        source: "Sensor Tower 2026-08 月报 https://new.qq.com/rain/a/20260915A0BLS500",
        tier: "head"
      },
      {
        name: "Whiteout Survival",
        publisher: "点点互动（世纪华通旗下）",
        isChinese: true,
        markets: "韩国/美国/全球",
        performance: "8 月海外收入稳定超 $1 亿排第 3，与《Kingshot》联动「双星同行」；8/9-12 连续 4 天登顶韩国 Android 畅销榜，韩国收入环比 +16%",
        comment: "点点互动是易点已知合作客户。Jill 可用「美韩联动双爆款」跟 SLG 客户聊长线运营+节点联动的买量节奏——联动期前 1 个月就该锁定预算。",
        source: "Sensor Tower 2026-08 月报 https://new.qq.com/rain/a/20260915A0BLS500",
        tier: "head"
      },
      {
        name: "Last Asylum: Plague",
        publisher: "三七互娱",
        isChinese: true,
        markets: "美国/韩国/德国",
        performance: "8 月出海收入突破 $2500 万、环比 +37%，跃升 9 位至收入榜第 7，超越《Puzzles & Survival》成三七收入第一；美韩德合计约 55%，美国独占 36%",
        comment: "三七是易点长期合作客户，新品接棒老爆款证明其海外买量盘子还在扩。Jill 可用「美国占 36% 的收入结构」验证美区仍是 4X 主战场，跟 SLG 客户聊美区投放。",
        source: "Sensor Tower 2026-08 月报 https://new.qq.com/rain/a/20260915A0BLS500",
        tier: "head"
      },
      {
        name: "Clash of Critters",
        publisher: "莉莉丝（Farlight Games 发行）",
        isChinese: true,
        markets: "日本/美国/中国台湾",
        performance: "8 月出海收入环比 +42%、排名升至第 19；日本成仅次于美国的第二大市场，两地合计约 55%；月底中国台湾日收入已接近美日",
        comment: "莉莉丝宠物塔防切休闲赛道持续放量。Jill 可跟中重度客户聊「弹珠+营地掠夺」混合玩法的红利，也说明台日韩对新品类接受度高、值得多市场铺开。",
        source: "Sensor Tower 2026-08 月报 https://new.qq.com/rain/a/20260915A0BLS500",
        tier: "head"
      },
      {
        name: "Gangstar Mirage City",
        publisher: "腾讯（Gameloft IP 授权）",
        isChinese: true,
        markets: "东南亚/南美/印度",
        performance: "8 月中旬首发即登中国手游出海下载榜第 2，累计下载超 1300 万次，印度/印尼/埃及为主要增量；尚未进欧美主战场",
        comment: "腾讯用经典 IP 切开放世界，先吃新兴市场再图欧美。Jill 可跟大厂客户聊「新兴市场首发+欧美后续」的分段投放节奏——每段都是独立预算窗口。",
        source: "Sensor Tower 2026-08 月报 https://news.qq.com/rain/a/20260915A05JSM00",
        tier: "head"
      },
      {
        name: "热血江湖：NEXT",
        publisher: "恺英网络",
        isChinese: true,
        markets: "韩国/全球",
        performance: "7 月全球上线后收入快速攀升，8 月位列出海收入增长榜第 3；改编韩国经典武侠漫画 IP，韩国上线后迅速登顶当地 iOS 下载榜",
        comment: "经典 IP+目标市场本土化是 2026 年最稳的增长打法。Jill 可拿「恺英靠韩国 IP 在韩国登顶」跟拿 IP 的客户聊：IP 决定首发市场，买量决定能不能吃透。",
        source: "Sensor Tower 2026-08 月报 https://so.html5.qq.com/page/real/search_news?docid=70000021_3076aa9545563752",
        tier: "head"
      },
      {
        name: "Lordrush",
        publisher: "点点互动",
        isChinese: true,
        markets: "美国/韩国/英国",
        performance: "7 月底上线的 4X 新游，8 月入围出海收入增长榜第 8；玩法框架与《Kingshot》相似改用写实中世纪美术，8 月下旬在美国大幅加码移动广告投放，美国贡献近 40% 收入",
        comment: "【中小潜力】点点用「同框架换皮」快速复制第二条 4X 曲线，买量集中在投放后次月。Jill 可跟 4X 客户聊：新品冷启动的关键窗口是上线后 30-60 天，预算要提前锁定。",
        source: "Sensor Tower 2026-08 增长榜 https://so.html5.qq.com/page/real/search_news?docid=70000021_3076aa9545563752",
        tier: "sme"
      },
      {
        name: "Whoa Adventure",
        publisher: "Joy Net Games（JOY MOBILE NETWORK）",
        isChinese: true,
        markets: "全球",
        performance: "8 月位列中国手游出海收入增长榜第 17，继《菇勇者传说》后又一款进入增长榜的产品",
        comment: "【中小潜力】新加坡主体的中国发行团队连续两款产品进增长榜，说明中小发行靠垂直品类也能稳定起量。Jill 可把「同类中小发行都在加投放」作为触达同类客户的由头。",
        source: "Sensor Tower 2026-08 增长榜 https://new.qq.com/rain/a/20260915A0BLS500",
        tier: "sme"
      },
      {
        name: "Hotel Legacy: Merge Game",
        publisher: "点点互动",
        isChinese: true,
        markets: "美国/全球",
        performance: "8 月位列出海收入增长榜第 20，点点互动年内第 4 款进入增长榜的产品（另有 Tasty Travels/MysteryTown/Lordrush）",
        comment: "【中小潜力】头部厂的多产品矩阵已下沉到二合细分赛道，同品类中小厂面临挤压。Jill 可用这条提醒腰部二合客户：要么加速买量抢位，要么找差异化题材，观望成本在涨。",
        source: "Sensor Tower 2026-08 增长榜 https://new.qq.com/rain/a/20260915A0BLS500",
        tier: "sme"
      }
    ],

    // —— 金融 ——
    finance: [
      {
        name: "Webull 微牛证券",
        publisher: "Webull Corporation",
        isChinese: true,
        markets: "东南亚/全球",
        performance: "8 月斥资约 $1 亿收购泰国老牌券商 Pi Securities，加码东南亚本地牌照与零售经纪业务",
        comment: "华人创办的美股券商巨头在东南亚「买牌照扩市场」，说明合规金融出海进入资本密集期。Jill 可用这条跟金融客户聊：拿牌之后获客是下一个战场，海外投放预算会跟着牌照走。",
        source: "Fintech News Singapore https://fintechnews.sg/thailand/",
        tier: "head"
      },
      {
        name: "Grab × Atome Financial",
        publisher: "Grab（收购 Atome 60% 股权）",
        isChinese: false,
        markets: "东南亚",
        performance: "9 月 Grab 以 $14.9 亿现金收购先买后付平台 Atome Financial 60% 股权（约两年后收购剩余 40%），目标 2028 年消费金融贷款盘超 $60 亿",
        comment: "东南亚 BNPL/消金赛道被超级 App 整合，独立金融 App 的流量窗口在收窄。Jill 可提醒东南亚金融客户：站内流量被 Grab 系吸走后，站外获客（投放）只会更贵、要趁早。",
        source: "The Asian Banker https://www.theasianbanker.com/updates-and-articles/grab-strengthens-southeast-asia-consumer-finance-ecosystem-with-1-49-billion-atome-financial-acquisition",
        tier: "head"
      },
      {
        name: "Kapital",
        publisher: "Kapital（墨西哥 AI 银行）",
        isChinese: false,
        markets: "墨西哥/美国/西班牙",
        performance: "9/9 完成 $1.25 亿融资（Tru Arrow 领投），Q2 贷款盘 $17 亿同比 +220%，服务 35 万+B2B 客户，估值 $13 亿",
        comment: "【中小潜力】拉美 AI 金融新贵高速扩张期，投放与增长团队正处于搭建阶段。Jill 触达墨西哥/拉美客户时可用它做锚：「拉美 B2B 金融正在抢窗口，你们的同类竞品已经在投了」。",
        source: "FinTech Futures https://fintechfutures.com/venture-capital-funding/kapital-secures-125m",
        tier: "sme"
      },
      {
        name: "Atome Financial",
        publisher: "Atome（Advance Intelligence Group 旗下）",
        isChinese: false,
        markets: "东南亚",
        performance: "BNPL+消贷+保险组合，贷款盘约 $10 亿（2026 年中口径），被 Grab 收购 60% 股权、独立运营期约两年",
        comment: "【中小潜力】并购过渡期的金融平台最容易出现预算重排：新东家体系 vs 独立增长团队。Jill 可在这两年窗口期接触 Atome 增长团队，做并购期的投放续接方案。",
        source: "The Asian Banker https://www.theasianbanker.com/updates-and-articles/grab-strengthens-southeast-asia-consumer-finance-ecosystem-with-1-49-billion-atome-financial-acquisition",
        tier: "sme"
      },
      {
        name: "Pi Securities",
        publisher: "Pi Securities（泰国本地券商）",
        isChinese: false,
        markets: "泰国",
        performance: "泰国老牌证券服务商，被微牛 Webull 以约 $1 亿收购，成为 Webull 东南亚本地化的牌照载体",
        comment: "【中小潜力】本地牌照公司被外资并购后，通常要快速做品牌切换与新客获取。Jill 可关注泰国/东南亚被并购的本地金融品牌——它们是「新生即投放」的天然客户。",
        source: "Fintech News Singapore https://fintechnews.sg/thailand/",
        tier: "sme"
      }
    ],

    // —— AI 应用 ——
    ai: [
      {
        name: "Claude",
        publisher: "Anthropic",
        isChinese: false,
        markets: "全球",
        performance: "Q2 从生成式 AI 应用收入榜第 7 跃升至全球第 2，成为 IAP 收入增长最快的「爆发应用」（整体排名跳升 34 位至第 10）",
        comment: "生成式 AI 付费盘继续高速扩容，Claude 增长主要靠订阅提频。Jill 可用「AI 订阅应用集体暴涨」说服观望的 AI 工具客户：订阅制+投放的组合拳已被验证。",
        source: "Sensor Tower Q2 DMI（iDrop News 转载） https://www.idropnews.com/news/q2-2026-mobile-gaming-revenue-decline/267257",
        tier: "head"
      },
      {
        name: "可灵 AI（Kling AI）",
        publisher: "快手",
        isChinese: true,
        markets: "全球",
        performance: "首次入围 Q2 中国非游应用出海收入榜（第 17 名），海外收入突破 $1500 万，美国市场表现突出",
        comment: "可灵是易点已知合作客户（快手系）。AI 视频生成第一次证明能在海外榜上站着赚钱，Jill 可拿这条触达同类 AI 视频/图像客户：「可灵已跑通，你们的产品差距只在投放」。",
        source: "Sensor Tower Q2 非游榜 https://t.10jqka.com.cn/pid_661518888.shtml",
        tier: "head"
      },
      {
        name: "Dola（豆包海外版）",
        publisher: "字节跳动",
        isChinese: true,
        markets: "全球",
        performance: "Q2 位列中国非游应用海外下载榜前三（与 TikTok、CapCut 同门包揽），AI 助手类应用海外扩张的代表",
        comment: "字节把 AI 助手塞进自有流量矩阵冷启动。Jill 可跟 AI 助手类客户对比：没有字节流量的团队，增长几乎全靠买量——这正是我们能接住的地方。",
        source: "Sensor Tower Q2 非游榜（搜狐转载） https://www.sohu.com/a/1050966196_122598898",
        tier: "head"
      },
      {
        name: "PictureThis",
        publisher: "Glority 睿琪软件",
        isChinese: true,
        markets: "美国/英国/德国",
        performance: "Q2 收入环比飙升 237% 创历史新高，跃升至非游收入榜第 7；月活稳定约 1400 万，欧美园艺旺季（5-6 月）驱动",
        comment: "睿琪是易点已知长期合作客户。「发布近十年的工具应用靠季节性波峰再造纪录」——Jill 可用它说服垂类工具客户：每年固定做一个投放波峰，ROI 是可以预测的。",
        source: "Sensor Tower Q2 非游榜 https://t.10jqka.com.cn/pid_661518888.shtml",
        tier: "head"
      },
      {
        name: "Genspark",
        publisher: "MainFunc（景鲲/朱凯华创办）",
        isChinese: true,
        markets: "欧美",
        performance: "Super Agent 上线约一年 ARR 做到 $2.5 亿，主攻欧美市场，是中国/华人 AI 原生出海新锐中 ARR 最高梯队之一",
        comment: "前百度高管团队的 AI Agent 产品一年 $2.5 亿 ARR，验证欧美市场对 Agent 付费意愿。Jill 可用它跟 AI Agent 创业公司聊：产品跑通后投放是放大器，别在自然流量里等。",
        source: "潮涌AI（网易转载） https://www.163.com/dy/article/L5UEV05I0556MV0F.html",
        tier: "head"
      },
      {
        name: "Tipsy Chat",
        publisher: "国内团队（海外主体运营）",
        isChinese: true,
        markets: "全球",
        performance: "2026 H1 收入约 $1520 万、全球 AI 陪伴赛道第 2；年化订阅收入约 $5249 万且增速榜第一（环比 +39%），月活 307 万同比 +65%",
        comment: "【中小潜力】AI 陪伴赛道中国团队跑到全球第 2，增长靠「用户创作互动小说拿奖励」的自传播+高客单订阅。Jill 可用「月活 307 万做到年化 $5200 万」跟 AI 陪伴客户聊订阅型投放（回收周期长但 LTV 高）。",
        source: "AI趣谈（今日头条转载） https://www.toutiao.com/article/7683763137362805299",
        tier: "sme"
      },
      {
        name: "Crushie AI",
        publisher: "SoulZ AI Inc. / Qianfan Hong Kong Limited",
        isChinese: true,
        markets: "全球",
        performance: "2026 H1 收入 $880 万列全球 AI 陪伴第 4；月活仅 34.5 万但 ARPU 为头部最高（订阅 $29.99/月），一年迭代 44 个版本",
        comment: "【中小潜力】小月活高 ARPU 的极端样本——付费能力是规模的一倍以上。Jill 可跟小预算 AI 客户聊：别追大盘子，选对人群（女性向/情感向）小盘也能月入百万美金，投放关键是高价值人群定向。",
        source: "人人都是产品经理（今日头条转载） https://www.toutiao.com/article/7683450411163959835",
        tier: "sme"
      },
      {
        name: "Fish Audio",
        publisher: "上海奇塔灵动科技 / Hanabi AI Inc.",
        isChinese: true,
        markets: "全球",
        performance: "开源 TTS+声音克隆，平台用户超 800 万，一年内 ARR 从 0 做到 $2100 万；7 月完成今日资本领投 $5200 万种子轮，团队 22 人",
        comment: "【中小潜力】开源社区起家转 API 变现，企业/开发者业务占收入约三分之二。Jill 可触达同类「开源转商用」AI 团队：他们普遍不做投放但现金流极好，一单企业级投放测试就能打开预算。",
        source: "AITNT / The SaaS News https://thesaasnews.com/news/fish-audio-raises-52m-seed",
        tier: "sme"
      },
      {
        name: "Deepsearch AI Search Assistant",
        publisher: "TapSuite（土耳其 HubX 旗下工作室）",
        isChinese: false,
        markets: "拉美/全球",
        performance: "近 30 天全球双端下载 419.6 万（环比 +100.8%），内购收入 $189.5 万（+171.6%），近半来自巴西；9/9 登巴西 Google Play 免费总榜第 9",
        comment: "【中小潜力】「AI 找人/背调」这类场景化 AI 应用在拉美爆量，母公司 HubX 拿了 Point72 $7500 万准备收购扩张。Jill 可拿它提醒 AI 工具客户：细分场景+新兴市场是当前 AI 应用最快的放量组合。",
        source: "36氪·扬帆出海 https://www.36kr.com/p/3978208406321924",
        tier: "sme"
      },
      {
        name: "Meshy",
        publisher: "Meshy（华人团队）",
        isChinese: true,
        markets: "欧美/全球",
        performance: "AI 3D 生成工具 ARR 达 $6000 万、毛利率 85%，主攻欧美游戏与创意开发者市场",
        comment: "【中小潜力】AI 3D 是出海 AI 工具里商业化最扎实的细分之一（高毛利+B 端付费）。Jill 可用「$6000 万 ARR、85% 毛利」说服游戏美术/AI 资产类客户：这类产品用户全是付费方，投放边际收益极高。",
        source: "潮涌AI（网易转载） https://www.163.com/dy/article/L5UEV05I0556MV0F.html",
        tier: "sme"
      }
    ],

    // —— 教育 ——
    education: [
      {
        name: "51Talk",
        publisher: "51Talk COE（NYSE 美股上市）",
        isChinese: true,
        markets: "东南亚/全球",
        performance: "Q1 营收 $3120 万，境外业务营收同比 +70.9%；东南亚游戏化英语课搭载 AI 互动答题，活跃学员增速 63.9%；「AI+真人」新品年内落地",
        comment: "老牌在线教育把出海做成第二曲线，AI 是增长叙事核心。Jill 可用「境外营收 +70.9%」跟教育客户聊： AI 课程上线后的获客预算会结构性上涨，正是切入投放合作的时点。",
        source: "51Talk 2026 Q1 财报（中国经济新闻网） https://www.cet.com.cn/wzsy/kjzx/10406490.shtml",
        tier: "head"
      },
      {
        name: "HelloChinese",
        publisher: "HelloChinese Technology Co., Ltd.（中国）",
        isChinese: true,
        markets: "越南/美国/日本/俄罗斯",
        performance: "全球头部的学中文 App，iOS 端近 30 天收入约 $20 万、双端合计月流水数十万美元量级；订阅 $69.99/年，11 年长线运营、双端评分 4.8+，保持两周一次更新",
        comment: "【中小潜力】「中文学习」是被大厂忽略但持续赚钱的细分（越南/俄罗斯需求稳定）。Jill 可用它触达做小语种/细分语言学习的团队：小赛道+稳定订阅就能养活一个产品，投放重点在越南/俄语区。",
        source: "TrendApps / FoxData https://trendapps.dev/app/ios/1001507516/",
        tier: "sme"
      },
      {
        name: "Praktika AI",
        publisher: "Praktika.ai（中国团队/美运营）",
        isChinese: true,
        markets: "全球",
        performance: "AI 英语陪练 App（AI Avatars 对话），此前已披露 ARR 超 $2000 万，持续位列 AI 教育出海代表产品",
        comment: "【中小潜力】AI 陪练替代真人外教的模型已跑通，LTV 高、订阅回本周期可算。Jill 可拿它跟做口语/陪练的教育客户对比：同类产品已经靠 AI 头像+订阅月入百万美金级，投放可以按订阅回收模型放心加。",
        source: "Praktika 官网及行业公开报道（此前自动化已核实 ARR 数据） 暂无新公开数据",
        tier: "sme"
      },
      {
        name: "KaDa 故事",
        publisher: "杭州红花朵朵网络科技",
        isChinese: true,
        markets: "东南亚/全球",
        performance: "儿童绘本/有声内容出海代表产品，此前公开口径覆盖全球 200+ 国家和地区、多语种内容矩阵，儿童教育出海持续在榜",
        comment: "【中小潜力】儿童内容订阅制出海的隐性冠军。Jill 可用它触达儿童教育/内容类客户：儿童赛道受 COPPA 等隐私合规约束大，合规开户与家庭人群定向正是我们的专业服务点。",
        source: "KaDa 故事公开资料（此前自动化已核实） 暂无新公开数据",
        tier: "sme"
      }
    ]
  },

  // ============================================================
  // 三、热点事件 hotEvents
  // ============================================================
  hotEvents: [
    {
      title: "8 月出海手游收入榜：Top6 纹丝不动，三七《Last Asylum》成最大黑马",
      date: "2026-09-15",
      summary: "Sensor Tower 8 月榜：收入前六与 7 月完全一致，柠檬微趣《Gossip Harbor》+11% 八连冠；三七《Last Asylum: Plague》+37% 跃升 9 位至第 7；合成、SLG、塔防多品类集体上行",
      bizValue: "头部稳固意味着头部客户预算稳定，中腰部洗牌意味着新预算窗口。Jill 按榜跟客户：腰部客户问「第 7 名怎么做到的」，头部客户聊「联动/周年节点怎么提前锁预算」。",
      source: "https://new.qq.com/rain/a/20260915A0BLS500"
    },
    {
      title: "点点互动 4X 新游《Lordrush》进增长榜第 8，美国加码投放",
      date: "2026-09-15",
      summary: "《Lordrush》7 月底上线，8 月入围收入增长榜第 8；美国贡献近 40% 收入，Pathmatics 显示 8 月下旬在美国移动应用渠道大幅加码投放",
      bizValue: "头部厂新品冷启动=新增预算池。Jill 可借这条跟点点系及同类 4X 厂商聊「上线后 30-60 天的投放窗口」——这是各家 2026 Q4 预算争夺的关键期。",
      source: "https://new.qq.com/rain/a/20260915A0BLS500"
    },
    {
      title: "恺英《热血江湖：NEXT》韩国登顶，IP 本土化打法再验证",
      date: "2026-09-15",
      summary: "恺英网络 MMORPG《热血江湖：NEXT》8 月列出海收入增长榜第 3，韩国上线即登顶当地 iOS 下载榜，经典武侠漫画 IP 转化力强",
      bizValue: "「拿 IP 定市场」的确定性打法正在被反复验证。Jill 触达有 IP 储备的客户时，可直接用这条论证「IP 决定首发市场，投放效率决定吃多深」。",
      source: "https://so.html5.qq.com/page/real/search_news?docid=70000021_3076aa9545563752"
    },
    {
      title: "腾讯《Gangstar Mirage City》首发空降下载榜第 2，尚未进欧美",
      date: "2026-09-15",
      summary: "腾讯开放世界新游获 Gameloft IP 授权，8 月中旬首发东南亚/南美，累计下载破 1300 万（印度/印尼/埃及为主），欧美市场暂未上线",
      bizValue: "「新兴市场首发、欧美后置」的分段策略给了两波投放窗口。Jill 可跟计划分段上线的大厂客户聊：每一段市场的素材/开户/资质都要提前规划，这正是我们的全流程服务入口。",
      source: "https://news.qq.com/rain/a/20260915A05JSM00"
    },
    {
      title: "DramaWave 登顶 8 月短剧下载榜：下载 +48.2%、收入 +44.3%",
      date: "2026-09-15",
      summary: "昆仑万维 DramaWave 8 月以超 3100 万次下载登顶短剧下载榜（+50%），收入升至第 3；投放以 Facebook 生态为核心，活跃素材多次破 1.2 万条/日",
      bizValue: "昆仑万维系短剧矩阵全面放量。短剧客户的共识问题「该不该加大 FB 素材产能」现在有标杆答案——Jill 可用 DramaWave 的素材量级（日 1.2 万条）帮客户对齐投放强度。",
      source: "https://www.thepaper.cn/newsDetail_forward_34044251"
    },
    {
      title: "DramaBox 8 月收入 $4121 万蝉联第一，NetShort/DramaWave 逼近平手",
      date: "2026-09-15",
      summary: "8 月短剧收入榜 DramaBox $4121 万（+28.8%）居首，NetShort $2703 万（+24.3%）、DramaWave $2550 万（+44.3%）紧随；ReelShort 降至第 4",
      bizValue: "短剧收入头部三家合计占 Top20 近一半，但位次在快速轮动——每一家的位次焦虑都是投放预算。Jill 可用「位次轮动」制造紧迫感跟短剧客户谈 9-10 月的加量计划。",
      source: "https://www.insightrackr.com/"
    },
    {
      title: "掌中云 JoyReels 首次跻身短剧收入 Top10，环比翻倍",
      date: "2026-09-15",
      summary: "JoyReels 8 月名次提升 6 位首次进入收入榜 Top10（$542 万），收入环比增幅超 100%，跑出高增长曲线",
      bizValue: "腰部短剧平台单月翻倍证明赛道腰部仍有爆发位。Jill 可把「JoyReels 从榜外到 Top10 只用了两个月」讲给腰部短剧客户听：现在进场的投放成本虽高，但位次回报也快。",
      source: "https://www.thepaper.cn/newsDetail_forward_34044251"
    },
    {
      title: "Coin Drama 单月下载暴增 236%，Tera Link 用纯 AI 广告片打法",
      date: "2026-09-15",
      summary: "Coin Drama（Tera Link）8 月下载榜上升 20 位至第 9、下载量环比 +236%；素材以 AI 生成的 39 秒生活化短片为主，主投 Pangle/Mintegral/Meta AN，印尼/巴基斯坦/巴西为核心市场",
      bizValue: "【新兴】不用剧集切片、直接用 AI 生成广告短片的低成本打法被验证。Jill 可把它当案例讲给预算有限的短剧/AI 内容客户：素材成本低到万元级就能起盘，先测再放量。",
      source: "https://www.insightrackr.com/",
      tag: "emerging"
    },
    {
      title: "StoryReel 首进短剧下载 Top10（+67%），AI 短剧双雄留在收入前 10",
      date: "2026-09-15",
      summary: "StoryReel 8 月下载超 1100 万次（+67%）首次冲进下载榜 Top10；AI 短剧产品 VibeShort（$894 万）与 StoryReel（$836 万）继续留在收入 Top10",
      bizValue: "AI 短剧从「降本工具」变成「收入主力」，2026 Q1 全行业上线微短剧约 12.8 万部中 AI 微短剧占比超 95%。Jill 跟短剧客户聊时可直接给结论：AI 产能决定投放上限，内容端不上 AI、投放端就白花钱。",
      source: "https://www.thepaper.cn/newsDetail_forward_34044251",
      tag: "high-growth"
    },
    {
      title: "韩国本土短剧平台 Vigloo 收入环比 +130%，本土玩家开始反攻",
      date: "2026-09-15",
      summary: "8 月四款区域本土短剧平台进入收入 Top20：韩国 Vigloo（+130%）、德国 CandyJarTV、乌克兰 My Drama、以色列 Shortical；本土产品竞争力持续释放",
      bizValue: "出海短剧在成熟市场遇到本土对手，投放竞争加剧。Jill 可提醒在韩/欧客户：本土平台更懂本地买量，出海方要在素材本地化和投放精细度上加码才能守住份额。",
      source: "https://www.thepaper.cn/newsDetail_forward_34044251"
    },
    {
      title: "AniShort 获近亿元人民币融资，为今年短剧工具赛道最大单笔",
      date: "2026-09-10",
      summary: "北京 Eight Eight Digital（八八数字）旗下 AI 短剧全流程协作平台 AniShort 完成近亿元融资，资金投向智能体研发与标准化、自动化工业生产管线",
      bizValue: "【新兴】工具层融资落地说明资本在赌「AI 短剧工业化」。Jill 可接触 AniShort 及同类 AI 制作工具公司：它们上游连内容方、下游连投放，是天然的渠道合作与互推对象。",
      source: "https://cherrybowl.io/intelligence/mipcom-puts-vertical-on-the-main-stage-meta-copies-the-serial-stack-20260910",
      tag: "emerging"
    },
    {
      title: "万兴剧厂「万剧出海创投计划」开放征集：亿级资金池孵化万部 AI 影视",
      date: "2026-09-15",
      summary: "万兴科技旗下万兴剧厂开放「万剧出海创投计划」，亿级资金池+算力支持，AI 短剧单项目最高 30 万元、AI 电影最高 150 万元资金与算力，匹配海外发行渠道",
      bizValue: "【合作】万兴在用资金+算力圈内容供给，最终都要做海外发行——发行就意味着投放。Jill 可主动对接该计划生态：拿到创投的内容团队是现成的海外投放新客户池。",
      source: "https://i.ifeng.com/c/8wBGyqZCYpb",
      tag: "cooperation"
    },
    {
      title: "Fish Audio 拿下 $5200 万种子轮：开源语音社区转 API 商业化样本",
      date: "2026-09-10",
      summary: "上海团队 Fish Audio（Fish Speech 开源起家）ARR 一年做到 $2100 万、用户 800 万+，今日资本领投 $5200 万种子轮；企业 API 收入占比约三分之二",
      bizValue: "【新兴】中国 AI 原生团队「开源社区→付费 API」路径一年走通。Jill 触达开源 AI 团队时可用这条：你们有用户没投放，B 端 API 业务的获客用精准投放效率最高。",
      source: "https://thesaasnews.com/news/fish-audio-raises-52m-seed",
      tag: "emerging"
    },
    {
      title: "中国 AI 陪伴双雄 H1 合计吸金 $2400 万，小团队高客单打法成型",
      date: "2026-09-10",
      summary: "Tipsy Chat（H1 $1520 万，全球第 2）与 Crushie AI（$880 万，第 4）进入全球 AI 陪伴收入榜前四；共同点：月活不大、ARPU 极高、靠订阅而非广告",
      bizValue: "AI 陪伴已从「流量生意」变成「付费深度的生意」。Jill 可用「月活 30 万也能月入百万美金」说服中小 AI 团队：别怕盘子小，选对高价值人群做定向投放就能起飞。",
      source: "https://www.toutiao.com/article/7683763137362805299",
      tag: "high-growth"
    },
    {
      title: "Deepsearch AI 拉美爆量：月下载 400 万、单月拉美收入超 $100 万",
      date: "2026-09-11",
      summary: "AI 背调/找人应用 Deepsearch AI 登巴西 Google Play 免费总榜第 9，近 30 天双端下载 419.6 万（+100.8%）、内购 $189.5 万（+171.6%），近半收入来自巴西",
      bizValue: "【新兴】拉美再次证明自己是 AI 应用起量的最佳练兵场（流量便宜+付费意愿在涨）。Jill 跟 AI 工具客户聊新兴市场时，直接推拉美：起盘成本低、正反馈快。",
      source: "https://www.36kr.com/p/3978208406321924",
      tag: "emerging"
    },
    {
      title: "Tevo 获 $1000 万非稀释性 UA 融资，东南亚应用工厂模式受资本认可",
      date: "2026-09-09",
      summary: "东南亚消费/AI 应用矩阵公司 Tevo（约 45 款应用、累计安装近 2 亿）获 PvX $1000 万非稀释性用户获取融资，还款与营销表现挂钩",
      bizValue: "【合作】买量成本高企催生「按效果还钱的 UA 融资」，资金方赚的是投放利息。Jill 可把这类资金方当作渠道伙伴介绍给缺预算的应用客户——非稀释融资正成为 VC 降温后的主流补充。",
      source: "https://www.ebrun.com/20260909/706668.shtml",
      tag: "cooperation"
    },
    {
      title: "土耳其 HubX 获 Point72 $7500 万，准备收购扩张「App 工厂」",
      date: "2026-09-09",
      summary: "HubX（40+ 款 AI/教育/健康应用、累计下载 6 亿+）获首笔外部投资 $7500 万（Point72），投前估值 $12 亿，成为土耳其首个消费应用独角兽，资金用于启动收购战略",
      bizValue: "【新兴】「App 工厂」模式被资本定价，且进入并购扩张期。Jill 可关注 HubX 及其中国对标团队：矩阵型应用公司买量需求是持续的、可预测的，适合谈年度框架合作。",
      source: "https://www.ebrun.com/20260909/706668.shtml",
      tag: "emerging"
    },
    {
      title: "Grab $14.9 亿收购 Atome 60% 股权，东南亚消金进入超级 App 时代",
      date: "2026-09-16",
      summary: "Grab 现金收购 Atome Financial 60% 股权（贷款盘约 $10 亿），目标 2028 年消金贷款盘超 $60 亿；Atome 独立运营约两年后并入",
      bizValue: "东南亚金融流量入口加速集中。Jill 提醒东南亚金融客户：Grab 生态内的转化越便宜，生态外的获客就越贵——独立金融 App 的投放要趁窗口期提前布局。",
      source: "https://www.theasianbanker.com/updates-and-articles/grab-strengthens-southeast-asia-consumer-finance-ecosystem-with-1-49-billion-atome-financial-acquisition"
    },
    {
      title: "墨西哥 AI 银行 Kapital 再融 $1.25 亿，拉美金融科技持续高热",
      date: "2026-09-09",
      summary: "Kapital（35 万 B2B 客户、贷款盘 $17 亿 +220%）获 Tru Arrow/Fasanara $1.25 亿融资，扩张墨西哥/美国/西班牙；同期 Revolut 拿下哥伦比亚银行牌照",
      bizValue: "拉美金融科技融资密度不减，获客竞争跟着升温。Jill 触达拉美客户时可用「Kapital 贷款盘一年 3 倍」论证：市场还在高速增长期，现在的投放成本是未来最便宜的时候。",
      source: "https://fintechfutures.com/venture-capital-funding/kapital-secures-125m",
      tag: "high-growth"
    },
    {
      title: "Q2 中国非游出海榜：短剧占 8 席，PictureThis +237%，可灵首次入围",
      date: "2026-09-16",
      summary: "Sensor Tower Q2 非游榜：短剧应用占收入 Top20 中 8 席；PictureThis 收入环比 +237% 跃升至第 7；可灵 AI 首次入围列第 17；PineDrama 下载环比 +460%",
      bizValue: "非游出海的赚钱结构已经定型：短剧扛大头、垂类工具冲弹性、AI 开始进榜。Jill 可用这张图给新客户讲行业地图：你想做哪一块，我们对应就有哪一块的投放打法。",
      source: "https://t.10jqka.com.cn/pid_661518888.shtml"
    },
    {
      title: "Q2 全球生成式 AI 应用支出 +108%，Claude 成最大黑马",
      date: "2026-09-16",
      summary: "Sensor Tower Q2 DMI：非游收入 +14.6% 而游戏 -4.5%；生成式 AI 品类消费支出同比 +108%，ChatGPT 占品类约 6 成，Claude 跃升至品类第 2",
      bizValue: "AI 应用的付费大盘一年翻倍，是所有出海品类里增速最高的一条线。Jill 开发新客户时优先跑 AI 团队：行业增速就是最好的开场白。",
      source: "https://www.idropnews.com/news/q2-2026-mobile-gaming-revenue-decline/267257"
    },
    {
      title: "微短剧备案新规 9/1 施行：AI 生成微短剧须标注、无证不得播出",
      date: "2026-09-01",
      summary: "《微短剧发展管理办法》9/1 正式施行：未取得许可证/备案的微短剧不得播出；AI 生成的微短剧须在每集明显位置添加提示标识；境内主体出海实行双轨备案",
      bizValue: "国内备案收紧但出海不受阻，反而在推动内容端加速出海。Jill 可用新规做触达由头：「境内审核趋严，出海备案双轨怎么走、海外投放怎么配合」——内容方现在最需要有人给答案。",
      source: "https://i.ifeng.com/c/8wBGyqZCYpb"
    },
    {
      title: "MIPCOM 戛纳首设微短剧单元：竖屏内容进入国际版权交易主流",
      date: "2026-09-10",
      summary: "10 月 12-15 日 MIPCOM 市场首次设立 microdrama 专题单元，COL Group、Omdia、GammaTime 等将参与演讲，竖屏剧集与长剧同台交易；Meta 同期给 Instagram Reels 上线剧集式 Series 功能",
      bizValue: "短剧从 App 内购走向国际版权分发，多了一条变现路。Jill 可告诉短剧客户：版权交易带来的品牌曝光需要投放配合造势，MIPCOM 前后是拉新和品牌投放的节点。",
      source: "https://cherrybowl.io/intelligence/mipcom-puts-vertical-on-the-main-stage-meta-copies-the-serial-stack-20260910"
    },
    {
      title: "51Talk Q1 境外营收 +70.9%，AI+真人教育产品年内落地",
      date: "2026-09-16",
      summary: "51Talk Q1 营收 $3120 万、境外业务 +70.9%、活跃学员增速 63.9%；走 AI 原生路线重构学习路径，新一代产品 2026 年内推出，覆盖全球 50 多国",
      bizValue: "在线教育出海进入 AI 兑现期，头部公司的增长直接来自 AI 课程。Jill 触达教育客户时用这条：AI 课程上线→留存提升→投放 ROI 改善，是当下教育出海最确定的增长闭环。",
      source: "https://www.cet.com.cn/wzsy/kjzx/10406490.shtml",
      tag: "high-growth"
    },
    {
      title: "8 月短剧投放：素材 620 万组仅 +3%，纯内购产品份额被混合变现挤压",
      date: "2026-09-15",
      summary: "8 月海外微短剧投放素材 620 万组（环比 +3% 增速放缓）；IAA 纯广告变现产品 142 款环比 +18% 增速最快，IAP+IAAP 合计占比超八成；印度/印尼/巴西占下载五成",
      bizValue: "投放增速放缓+变现结构转向混合，意味着单用户收入模型在变。Jill 可跟短剧客户聊变现组合调整期的投放策略：IAA 产品要买量、IAAP 要精细化，两套打法我们都有成熟方案。",
      source: "https://www.thepaper.cn/newsDetail_forward_34044251"
    }
  ],

  // ============================================================
  // 四、出海线索池 chinaGoingGlobal
  // ============================================================
  chinaGoingGlobal: [
    {
      product: "AI 漫剧「超级工厂」（短剧/AI 漫剧出海）",
      company: "湖南秦九网络科技有限公司",
      hq: "湖南长沙",
      category: "娱乐APP",
      markets: "中国/出海起步（海外发行）",
      revenue: "暂无公开数据（自称短剧赛道头部、400+ 部剧、播放量破百亿）",
      recent: "9/8 长沙晚报报道：依托自研 AI 生产体系建成「漫剧超级工厂」，月产微短剧超千部，5-6 人小组即可完成一部短剧全流程；工商口径小微企业（注册资本 200 万）、高新技术企业",
      website: "http://www.qinjiu8.com/",
      cooperation: "not",
      coopModel: "",
      agency: "暂无公开数据",
      scale: "sme",
      contacts: [
        {
          name: "何经理",
          role: "商务合作",
          email: "",
          phone: "13786002969",
          linkedin: "",
          source: "FoodTalks 企业服务页 https://www.foodtalks.cn/wefood/post/80711"
        },
        {
          name: "",
          role: "企业工商披露邮箱",
          email: "15387582811@163.com",
          phone: "",
          linkedin: "",
          source: "爱企查-工商年报披露邮箱 https://aiqicha.baidu.com/company_shares_92198282617584"
        }
      ],
      channels: [
        {
          label: "短剧品牌植入与商务合作（何经理，最对口）",
          email: "",
          phone: "13786002969",
          source: "FoodTalks 企业服务页 https://www.foodtalks.cn/wefood/post/80711"
        }
      ],
      contactNote: "飞书合作表未列名，按潜在客户跟进。工商披露邮箱来自年报公开信息，非商务专岗邮箱，邮件外建议直接电话何经理",
      emailSubject: "关于秦九网络 AI 漫剧海外发行的投放合作思路",
      emailBody: "秦九网络团队好：\n\n我是易点天下 Yeahmobi 的 Jill，专注中国 App 与短剧内容的海外增长服务。\n\n看到贵司把 AI 漫剧做成月产千部的「超级工厂」（长沙晚报 9 月报道），产能已经是行业标杆。AI 漫剧出海当下有两个明确机会：一是国内监管新规（9/1 施行）推动内容加速出海，海外分发与买量是必经环节；二是漫剧在海外的投放素材成本极低，适合先小步测试、数据验证后再放量。\n\n我们服务过多家短剧/漫剧出海团队，可以帮贵司打通 Meta、TikTok、Google 等渠道的海外开户与投放，从素材本地化到数据归因全链路支持。\n\n方便的话，想约 15 分钟沟通，聊聊贵司出海节奏和我们的配合方式。\n\nJill｜易点天下 Yeahmobi（A股上市，专注中国出海企业的海外增长服务）"
    },
    {
      product: "安然环球 AI 短剧出海平台（本地化+投放+归因一体化）",
      company: "安然环球文化科技有限公司（中国香港）",
      hq: "中国香港",
      category: "娱乐APP",
      markets: "全球（英语/西语/阿语等多语种）",
      revenue: "暂无公开数据",
      recent: "9/17 行业报道：定位短剧出海「基建者」，提供 AI 多模态本地化引擎（翻译+AI 配音+口型同步）、整合全球广告渠道的智能投放引擎、以及从广告曝光到用户付费的全链路数据归因",
      website: "暂无公开数据",
      cooperation: "not",
      coopModel: "",
      agency: "暂无公开数据",
      scale: "sme",
      contacts: [],
      channels: [],
      contactNote: "飞书合作表未列名，按潜在客户跟进；未找到公开联系人/邮箱/官网，建议通过 LinkedIn 搜「安然环球 Anran Global」员工或行业展会名录建联",
      emailSubject: "",
      emailBody: ""
    },
    {
      product: "AniShort（AI 短剧全流程协作平台）",
      company: "Eight Eight Digital（八八数字，北京）",
      hq: "北京",
      category: "娱乐APP",
      markets: "全球（面向 AI 短剧制作方）",
      revenue: "暂无公开数据（近亿元人民币融资，今年短剧工具赛道最大单笔）",
      recent: "9 月披露完成近亿元融资，资金投向智能体研发与「从剧本到成片」的标准化、自动化工业生产管线，为行业目前最大单笔工具融资",
      website: "暂无公开数据",
      cooperation: "not",
      coopModel: "",
      agency: "暂无公开数据",
      scale: "sme",
      contacts: [],
      channels: [],
      contactNote: "飞书合作表未列名，按潜在客户跟进；未找到公开商务邮箱，建议 LinkedIn 搜「Eight Eight Digital / AniShort」员工或通过融资新闻稿媒体渠道转介",
      emailSubject: "",
      emailBody: ""
    },
    {
      product: "StardustTV（海外短剧平台）",
      company: "山海星辰",
      hq: "中国",
      category: "娱乐APP",
      markets: "欧美/东南亚",
      revenue: "8 月内购收入约 $271 万（Insightrackr 收入榜第 12 名，环比 +12.6%）",
      recent: "8 月海外短剧收入榜第 12、环比 +12.6%，是中腰部短剧平台里保持正增长的代表之一",
      website: "暂无公开数据",
      cooperation: "not",
      coopModel: "",
      agency: "暂无公开数据",
      scale: "sme",
      contacts: [],
      channels: [],
      contactNote: "飞书合作表未列名，按潜在客户跟进；未找到公开联系人/邮箱，建议通过 App Store 开发者信息或 LinkedIn 搜「StardustTV 山海星辰」建联",
      emailSubject: "",
      emailBody: ""
    },
    {
      product: "HelloChinese（学中文 App）",
      company: "HelloChinese Technology Co., Ltd.",
      hq: "中国",
      category: "教育",
      markets: "越南/美国/日本/俄罗斯/全球",
      revenue: "iOS 近 30 天收入约 $20 万、Android 约 $10 万（TrendApps 估算口径）",
      recent: "全球头部学中文 App，运营 11 年、双端评分 4.8+，订阅 $69.99/年；近 30 天 iOS 下载约 7 万；保持每两周一次版本更新，最新版本 2026 年 8 月底/9 月初发布",
      website: "https://www.hellochinese.cc/",
      cooperation: "not",
      coopModel: "",
      agency: "暂无公开数据",
      scale: "sme",
      contacts: [
        {
          name: "",
          role: "Premium 用户支持（官方披露联系邮箱）",
          email: "premium@hellochinese.cc",
          phone: "",
          linkedin: "",
          source: "App Store 应用页官方披露 https://foxdata.com/en/app-marketing-analytics/1001507516/as/US"
        }
      ],
      channels: [
        {
          label: "官方支持邮箱（官方披露入口，最对口）",
          email: "premium@hellochinese.cc",
          phone: "",
          source: "App Store 应用页官方披露 https://foxdata.com/en/app-marketing-analytics/1001507516/as/US"
        }
      ],
      contactNote: "飞书合作表未列名，按潜在客户跟进。premium@hellochinese.cc 为应用商店页官方披露邮箱（非商务专岗），邮件标题写明增长合作可转至市场团队",
      emailSubject: "HelloChinese 越南/俄语区增长合作探讨——易点天下 Jill",
      emailBody: "HelloChinese 团队好：\n\n我是易点天下 Yeahmobi 的 Jill，专注中国 App 出海的海外增长服务。\n\n一直关注 HelloChinese——在学中文这个细分坚持 11 年做到全球头部，越南、俄罗斯、日本市场的口碑和订阅表现都很扎实，这种小赛道长跑的产品力在出海团队里非常少见。\n\n两个可能帮上忙的方向：一是越南/俄语区流量红利期，付费搜索+应用商店投放的组合可以低成本放大订阅转化；二是学中文人群与中文考试/留学场景高度重合，人群定向和素材本地化我们有成熟方法。\n\n方便的话约个 15 分钟电话，聊聊你们下半年重点市场和我们的配合方式。\n\nJill｜易点天下 Yeahmobi（A股上市，专注中国出海企业的海外增长服务）"
    },
    {
      product: "51Talk 出海业务（AI+真人在线英语）",
      company: "51Talk Online Education Group（NYSE: COE）",
      hq: "新加坡（运营主体）/北京起家",
      category: "教育",
      markets: "东南亚/全球 50+ 国家",
      revenue: "2026 Q1 总营收 $3120 万，境外业务营收同比 +70.9%",
      recent: "Q1 活跃学员增速 63.9%、毛利率 73.7%；东南亚游戏化英语课搭载 AI 互动答题；「AI+真人」新一代学习产品 2026 年内落地",
      website: "https://www.51talk.com/",
      cooperation: "not",
      coopModel: "",
      agency: "暂无公开数据",
      scale: "head",
      contacts: [
        {
          name: "",
          role: "投资者关系（IR，公开披露邮箱）",
          email: "ir@51talk.com",
          phone: "",
          linkedin: "",
          source: "51Talk 历年财报新闻稿通用投资者联系邮箱（公司公开披露）"
        }
      ],
      channels: [
        {
          label: "投资者关系邮箱（公开披露，可请转市场团队）",
          email: "ir@51talk.com",
          phone: "",
          source: "51Talk 财报新闻稿公开披露信息"
        }
      ],
      contactNote: "飞书合作表未列名，按潜在客户跟进。ir@51talk.com 为公司公开披露的 IR 邮箱，邮件中注明「市场/增长团队转交」；建议同时 LinkedIn 搜 51Talk Marketing/Growth 负责人",
      emailSubject: "51Talk 东南亚 AI 课程的海外获客合作思路——易点天下 Jill",
      emailBody: "51Talk 团队好：\n\n我是易点天下 Yeahmobi 的 Jill，专注中国教育企业出海的海外增长服务。\n\n看到贵司 Q1 境外业务营收同比 +70.9%、活跃学员增速 63.9%，AI 互动课程在东南亚的接受度已经验证；年内「AI+真人」新品落地后，海外获客的量级需求预计会再上一个台阶。\n\n我们服务过教育品类的多个出海团队，能配合的点：东南亚（菲/泰/越）本地化投放与开户合规、AI 课程卖点的人群定向和素材测试体系、以及按订阅回收模型做的预算规划。\n\n方便的话约 15 分钟沟通，看怎么配合你们下半年的新品节奏。\n\nJill｜易点天下 Yeahmobi（A股上市，专注中国出海企业的海外增长服务）"
    },
    {
      product: "VMEG（AI 视频翻译/配音/本地化平台）",
      company: "VMEG AI（创始人胥彪，前腾讯云副总裁）",
      hq: "中国/海外双主体",
      category: "AI应用",
      markets: "欧美/日本/德国/印度/全球",
      revenue: "全球营收数百万美元（媒体公开报道口径）",
      recent: "AI 声音克隆跨语种配音，170+ 语言、17000+ 音色、口型同步；支持 5-6 种企业级工作流（含人机协同交付）；客户含德国电视台、日本地方文旅局、南印度影视公司、TELUS Health 等；团队不到 20 人，按单收费、十分钟视频上百美元",
      website: "https://www.vmeg.ai/",
      cooperation: "not",
      coopModel: "",
      agency: "暂无公开数据",
      scale: "sme",
      contacts: [],
      channels: [],
      contactNote: "飞书合作表未列名，按潜在客户跟进；官网未披露公开邮箱（有 Contact Sales 表单），建议 LinkedIn 搜「VMEG 胥彪」或通过表单/创始人行业人脉建联",
      emailSubject: "",
      emailBody: ""
    },
    {
      product: "Flowith（AI Agent 创作工作台）",
      company: "Flowith（中国团队/海外运营，10 人以内）",
      hq: "中国/海外",
      category: "AI应用",
      markets: "欧美/全球",
      revenue: "ARR 超 $100 万（潮涌AI 2026-09 报道口径）",
      recent: "团队不足 10 人 ARR 已超 $100 万，走订阅+工作流工具模式，2023 年 5 月获百度风投数百万美元种子轮；产品在海外以 Agent 类创作工具定位增长",
      website: "https://flowith.io/",
      cooperation: "not",
      coopModel: "",
      agency: "暂无公开数据",
      scale: "sme",
      contacts: [],
      channels: [],
      contactNote: "飞书合作表未列名，按潜在客户跟进；官网为纯产品页未披露邮箱，建议 LinkedIn 搜「Flowith」团队成员或通过投资人（百度风投）网络转介",
      emailSubject: "",
      emailBody: ""
    },
    {
      product: "Hyper3D Rodin（AI 3D 生成平台）",
      company: "上海影眸科技有限公司（Hyper3D / 影眸科技）",
      hq: "上海",
      category: "AI应用",
      markets: "全球（海外收入占比约 80%，客户含全球大厂）",
      revenue: "暂无公开数据（论文获 SIGGRAPH 2025 最佳论文级认可，海外大厂客户为主）",
      recent: "Hyper3D Rodin 支持 Text/Image to 3D、3D 编辑、ControlNet 空间控制；提供 API 平台与 Blender/Unity/Unreal 插件生态；企业级功能含 SSO/SAML/团队空间，游戏与创意行业为主要客户群",
      website: "https://hyper3d.ai/",
      cooperation: "not",
      coopModel: "",
      agency: "暂无公开数据",
      scale: "sme",
      contacts: [],
      channels: [],
      contactNote: "飞书合作表未列名，按潜在客户跟进；官网未披露公开邮箱，建议 LinkedIn 搜「影眸科技 Hyper3D」或通过 SIGGRAPH/游戏行业会议名录建联",
      emailSubject: "",
      emailBody: ""
    },
    {
      product: "Felo（多语言 AI 搜索与创作平台）",
      company: "Felo（金峰创办，日本东京运营）",
      hq: "日本东京（华人创始团队）",
      category: "AI应用",
      markets: "日本/韩国/中国台湾（避开欧美主战场）",
      revenue: "暂无公开数据",
      recent: "多语言 AI 搜索+文档问答+创作平台，策略性避开欧美红海、深耕日韩台市场；创始人金峰在东京创业，产品已接入 GPT 新代模型并推 Pro 订阅",
      website: "https://felo.ai/",
      cooperation: "not",
      coopModel: "",
      agency: "暂无公开数据",
      scale: "sme",
      contacts: [],
      channels: [],
      contactNote: "飞书合作表未列名，按潜在客户跟进；官网未披露公开邮箱，建议 LinkedIn 搜「Felo 金峰」或通过东京华人创投圈建联",
      emailSubject: "",
      emailBody: ""
    },
    {
      product: "Oceanpayment 钱海（全球数字支付服务）",
      company: "Oceanpayment 钱海网络技术（深圳）",
      hq: "深圳（香港设点）",
      category: "金融",
      markets: "全球（500+ 支付产品、服务 20 万+ 商户）",
      revenue: "暂无公开数据",
      recent: "提供全球收单、发卡、多币种收付平台（OPCCOUNT）与一体化支付套件（OPNexus），覆盖电商/游戏/金融科技/旅游场景；官网强调 AI+大数据风控与本地化支付转化率优化",
      website: "https://www.oceanpayment.com/",
      cooperation: "not",
      coopModel: "",
      agency: "暂无公开数据",
      scale: "head",
      contacts: [],
      channels: [
        {
          label: "官方商务咨询热线（官网披露，最对口）",
          email: "",
          phone: "+86 4006 290 296",
          source: "Oceanpayment 官网 Contact Sales https://www.oceanpayment.com/contact-sales/"
        }
      ],
      contactNote: "飞书合作表未列名，按潜在客户跟进。官网仅披露 400 热线与联系表单、未披露商务邮箱；建议电话转游戏/App 行业销售线",
      emailSubject: "",
      emailBody: ""
    },
    {
      product: "Age of Origins（《守卫者王国》系 4X 策略长线产品）",
      company: "Camel Games（北京骆驼，camelgames.com）",
      hq: "北京",
      category: "游戏",
      markets: "全球（美国/欧洲为主）",
      revenue: "8 月仍位列中国手游出海收入榜 Top20（Sensor Tower 第 20 位）",
      recent: "老牌北京出海游戏厂商，长线 4X 产品 Age of Origins 8 月仍稳定在中国手游出海收入榜第 20 位，多款休闲产品在海外长线运营",
      website: "https://www.camelgames.com/",
      cooperation: "not",
      coopModel: "",
      agency: "暂无公开数据",
      scale: "head",
      contacts: [],
      channels: [],
      contactNote: "飞书合作表未列名，按潜在客户跟进；官网暂无法访问核实商务邮箱，建议 LinkedIn 搜「Camel Games」BD/UA 岗或通过行业大会名录建联",
      emailSubject: "",
      emailBody: ""
    },
    {
      product: "WeRide 文远知行（自动驾驶全球化）",
      company: "文远知行 WeRide（NASDAQ: WRD / HKEX: 0800）",
      hq: "广州",
      category: "AI应用",
      markets: "全球 13 国 60+ 城市（中东/东南亚/欧美）",
      revenue: "暂无公开数据（NASDAQ+港交所双重上市）",
      recent: "全球自动驾驶规模化商业运营代表，Robotaxi/Robobus/Robovan/Robosweeper/ADAS 五条产品线，车队 3000+、公开运营近 6 年；出海重点市场含阿布扎比、新加坡等中东与东南亚城市",
      website: "https://www.weride.ai/",
      cooperation: "not",
      coopModel: "",
      agency: "暂无公开数据",
      scale: "head",
      contacts: [
        {
          name: "",
          role: "媒体与公众沟通（PR）",
          email: "pr@weride.ai",
          phone: "",
          linkedin: "",
          source: "WeRide 官网 Contact 页 https://www.weride.ai/contact"
        },
        {
          name: "",
          role: "商务合作热线",
          email: "contact@weride.ai",
          phone: "400-102-3883",
          linkedin: "",
          source: "WeRide 官网 Contact 页 https://www.weride.ai/contact"
        }
      ],
      channels: [
        {
          label: "商务合作入口（官网披露 contact 邮箱+热线，最对口）",
          email: "contact@weride.ai",
          phone: "400-102-3883",
          source: "WeRide 官网 Contact 页 https://www.weride.ai/contact"
        }
      ],
      contactNote: "飞书合作表未列名，按潜在客户跟进。自动驾驶企业不投效果广告，切入点是海外城市落地（阿布扎比/新加坡）期的品牌传播与政府/公众沟通投放，contact 邮箱可转品牌市场线",
      emailSubject: "文远知行海外城市落地的品牌传播配合——易点天下 Jill",
      emailBody: "文远知行团队好：\n\n我是易点天下 Yeahmobi 的 Jill，专注中国科技企业出海的海外增长与品牌服务。\n\n关注到贵司车队已在全球 13 国 60+ 城市公开运营，中东（阿布扎比）与东南亚是落地的重点区域。这类新业务进入新城市时，公众认知、政策沟通和品牌信任往往决定运营推进速度——而这正是我们可以配合的环节。\n\n我们在中东北非、东南亚有成熟的本地媒体与投放资源，服务过多家中国头部科技企业的海外品牌项目，可以做城市落地期的品牌传播与公众沟通支持。\n\n方便的话约 15 分钟沟通，看看下阶段落地城市有没有我们可以承接的部分。\n\nJill｜易点天下 Yeahmobi（A股上市，专注中国出海企业的海外增长服务）"
    }
  ],

  // ============================================================
  // 五、媒体政策 policies
  // ============================================================
  policies: [
    {
      platform: "Meta",
      title: "【12 天内生效】10/1 起六国广告加收地区服务费（DST 转嫁）",
      date: "2026-10-01",
      detail: "Meta 官方通知：10/1 起对投放至奥地利、土耳其（各 5%）、法国、意大利、西班牙（各 3%）、英国（2%）的广告额外收取地区服务费；按广告展示地区计费、与开户地/币种无关，独立列账、全产品适用无豁免",
      impact: "高",
      categories: ["游戏", "金融", "AI", "电商", "短剧"],
      bizValue: "欧洲投放成本直接上浮 2-5%。Jill 见欧洲放量客户必提这条：帮客户重算真实 CPA/ROI、把费率拆进报价模型，是最快建立专业信任的由头；9 月搭的计划 10/1 后新增曝光就计费，预算要现在调。",
      source: "Meta Business 帮助中心（邦阅网/大声出海转载） https://52by.com/article/216113"
    },
    {
      platform: "Google",
      title: "金融服务验证扩至 13 个 EEA 国家（9/15 起逐步执行）",
      date: "2026-09-15",
      detail: "针对保加利亚、克罗地亚、塞浦路斯、捷克、爱沙尼亚、希腊、拉脱维亚、立陶宛、马耳他、波兰、罗马尼亚、斯洛伐克、斯洛文尼亚的金融服务广告主，需先经外部合规伙伴 G2 验证（证明监管授权或豁免资格），再以第一方/授权广告主身份向 Google 申请验证；8/11 起开放申请",
      impact: "高",
      categories: ["金融", "加白名单/资质"],
      bizValue: "金融客户投欧洲的硬门槛：没有 G2 验证直接停投。Jill 可主动帮金融客户梳理「牌照证明+验证材料+时间线」，开户与资质服务正是我们的收费点；东欧 13 国市场投放要先办证再放量。",
      source: "省广营销出海服务 https://www.gimc-hk.com/?p=2190"
    },
    {
      platform: "TikTok",
      title: "9/9 广告政策收紧：落地页域名一致+断开式 Pre-lander 受限",
      date: "2026-09-09",
      detail: "TikTok 9/9 更新：广告展示域名必须与最终落地页顶级域名一致（重定向跳转被自动标记）；「断开式 pre-lander 体验」（与广告素材价值主张明显不符的导流页）被正式限制；新增创意真实性分（CAS），账号创意池被标记会直接推高 CPM",
      impact: "高",
      categories: ["短剧", "电商", "游戏"],
      bizValue: "跑灰产漏斗的买量账户风险陡增，正规客户的「合规红利」开始兑现。Jill 可用这条筛客户：被误伤的正规短剧/电商客户需要合规开户与账户健康度管理——正好是一级代理的申诉通道价值。",
      source: "Affiliate Times https://affiliate-times.com/tiktoks-new-affiliate-traffic-rules-are-reshaping-q4-media-buys",
      summary: "TikTok 9/9 更新：广告域名须与落地页顶级域名一致、断开式 pre-lander 受限、新增创意真实性分（CAS）"
    },
    {
      platform: "Google",
      title: "Limited Ads Serving 全面扩展到所有 Google Ads 产品（2026-2028 分阶段）",
      date: "2026-08-05",
      detail: "Google 8/5 更新政策，把「受限投放」（对不达标账户限制曝光量而非直接拒登）从搜索扩展到 YouTube/Gmail/Play/Discover 等全部产品；新账户、高滥用垂直、品牌信息不清、用户投诉多的账户最易受限；申诉需走专门表单",
      impact: "中",
      categories: ["金融", "游戏", "AI"],
      bizValue: "新开户广告主的头几个月曝光被隐性限流，客户消耗上不去会先怪渠道。Jill 要提前打预防针：新户投放规划里写清「账户成熟期」，用老户矩阵+账户养号方案对冲——这是体现服务深度的点。",
      source: "PPC Land https://ppc.land/unqualified-advertisers-lose-unlimited-google-ads-impressions-by-2028"
    },
    {
      platform: "Meta",
      title: "广告组版位排除功能移除，改用 Value Rules（最低 -90%）",
      date: "2026-08-25",
      detail: "Meta 从 8/25 起逐步移除广告组级版位/平台/设备/系统排除功能，改为 Value Rules 出价调节（+1000% 至 -90%）；账户级版位限制仍可用；测试期先覆盖 Sales/Leads 目标，敏感垂直豁免",
      impact: "中",
      categories: ["游戏", "电商", "AI"],
      bizValue: "客户习惯了「关掉 Audience Network」的操作会突然失效。Jill 可给存量客户做一次排除清单迁移（改成 -90% value rule），顺手盘点各户的账户级设置——既是服务动作也是续约触点。",
      source: "Grow With BA https://growwithba.com/blog/meta-removing-placement-controls-q4-2026"
    },
    {
      platform: "Meta",
      title: "【18 天内生效】Graph API v20.0 于 10/6 移除",
      date: "2026-10-06",
      detail: "Meta 开发者日历：Graph API v20.0 将于 10/6 移除，使用旧版本 API 的工具（归因、报表、投放脚本）需升级；后续 10/15 Marketing API v24.0 sunset、10/27 Embedded Signup v2/v3 弃用",
      impact: "中",
      categories: ["电商", "AI"],
      bizValue: "技术型客户（自建归因/BI 工具）容易踩 API 弃用坑导致数据断流。Jill 可在 10 月前给技术对接客户发提醒清单——低成本高感知的「专业服务动作」。",
      source: "Ads Uploader https://adsuploader.com/blog/meta-ads-updates"
    },
    {
      platform: "Meta",
      title: "【27 天内生效】Marketing API v24.0 于 10/15 sunset",
      date: "2026-10-15",
      detail: "Marketing API v24.0 将于 10/15 停止服务，涉及广告创建、报表、受众管理等接口；依赖旧版本的三方工具/自研系统需在此之前完成迁移",
      impact: "中",
      categories: ["电商", "游戏"],
      bizValue: "同上，属 10 月技术迁移窗口。给代投/工具类客户做 API 版本检查是加分项。",
      source: "Ads Uploader https://adsuploader.com/blog/meta-ads-updates"
    },
    {
      platform: "Google",
      title: "9 月下旬起搜索/PMax 语言定位简化：按广告语言自动匹配",
      date: "2026-09-22",
      detail: "自 2026 年 9 月下旬起：搜索广告系列移除系列级语言设置，按广告所用语言自动匹配；PMax 在 Google 搜索端同步改为按广告语言匹配，YouTube/展示/探索/Gmail 仍按原语言设置展示",
      impact: "中",
      categories: ["游戏", "AI", "电商"],
      bizValue: "多语言市场的客户会疑惑「为什么素材语言变了触达也变了」。Jill 提前给多市场客户讲清机制：素材本地化从「可选优化」变成「定向本身」——素材语言的准确性直接影响流量结构。",
      source: "省广营销出海服务 https://www.gimc-hk.com/?p=2190"
    },
    {
      platform: "Meta",
      title: "EU AI Act 披露义务 8/2 起对欧洲投放的广告生效",
      date: "2026-08-02",
      detail: "EU AI Act 关键条款已具约束力：AI 生成内容须披露、深度伪造须标注；Meta 于 8 月初将披露要求落实到欧洲投放的广告",
      impact: "中",
      categories: ["AI", "隐私", "短剧"],
      bizValue: "AI 短剧/AI 数字人素材投欧洲必须带披露标识。Jill 可给 AI 内容类客户做一次素材合规体检（水印/披露文案），避免突发拒登影响跑量。",
      source: "Ads Uploader https://adsuploader.com/blog/meta-ads-updates"
    },
    {
      platform: "Meta",
      title: "青少年安全和解协议落地：青少年库存收紧",
      date: "2026-08-26",
      detail: "Meta 与美国多州总检察长达成约 $180 亿和解（十年支付），同意青少年账户默认设置：每日 2 小时使用上限、0-6 点夜间模式、上学时段通知静音等；18 岁以下可用库存减少",
      impact: "中",
      categories: ["游戏", "隐私"],
      bizValue: "投美国青少年人群的客户（休闲游戏/教育）会感受到量级收缩与 CPM 上涨。Jill 可建议把 13-17 定向调整为家庭/家长人群，素材同步调整。",
      source: "Ads Uploader https://adsuploader.com/blog/meta-ads-updates"
    },
    {
      platform: "TikTok",
      title: "Q3 政策整备：紧急感文案、AI 名人声音禁令、一方数据定向要求",
      date: "2026-09-01",
      detail: "TikTok Q3 更新（托管户 8 月底、自助户 9 月初推送）：明确标记倒计时/伪造稀缺/前后对比等紧急感文案；禁止未经披露和授权模拟真实名人/网红声音的 AI 代言；再营销人群转向一方数据要求；健康与保健品宣称需更强证明",
      impact: "中",
      categories: ["短剧", "AI", "电商"],
      bizValue: "素材合规审查变严、审核延迟 24-48 小时成为常态。Jill 可给 Q4 大促客户提前做素材预审服务，避免旺季卡审。",
      source: "Affiliate Times https://affiliate-times.com/tiktoks-new-affiliate-ad-policies-are-reshaping-media-buyer-strategy/"
    },
    {
      platform: "TikTok",
      title: "2026 年三大结构性变化：Custom Identity 退役、AI 代言需授权、一方数据定向",
      date: "2026-08-01",
      detail: "TikTok 2026 年三项重要变化：Custom Identity 正式退役（所有广告主须绑定已验证的 TikTok Business 账号才能投放）；AI 生成的名人/网红声音或形象代言须披露并获授权；再营销受众转向一方数据要求；护肤/保健品宣称的举证要求更严",
      impact: "中",
      categories: ["短剧", "AI", "电商"],
      bizValue: "没绑 Business 账号的客户会直接开不了户——开户服务入口。AI 素材客户要做授权链路文档，Jill 可提醒并顺手绑定服务。",
      source: "TikAdSuite https://tikadsuite.com/?p=1530/"
    },
    {
      platform: "Meta",
      title: "加州 SB 1050「AI 合成演员披露法案」待签署（最早 2027/1/1 生效）",
      date: "2026-09-09",
      detail: "加州 SB 1050 已送交州长签署：广告显著使用 AI 生成合成演员（非真实可识别个人）须明确披露；若签署最早 2027/1/1 生效，按广告展示地适用；此前纽约同类法已生效",
      impact: "低",
      categories: ["AI", "短剧"],
      bizValue: "给用 AI 数字人/合成演员素材的客户提前建披露模板——纽约要求已经生效，加州只是时间问题，一套模板两边通用。",
      source: "Ads Uploader https://adsuploader.com/blog/meta-ads-updates"
    },
    {
      platform: "Google",
      title: "Google Ads 敏感操作强制 Passkey（7/15 已生效）",
      date: "2026-07-15",
      detail: "7/15 起 Google Ads 对敏感账户操作强制要求 Passkey 验证；政策变化 6 个月追溯期，7/21 起不再受理超 6 个月的政策申诉",
      impact: "低",
        categories: ["加白名单/资质", "隐私"],
      bizValue: "代管账户的客户需要配置 Passkey，Jill 可在账户交接/续约时统一配好，避免客户自助操作被卡。",
      source: "PPC Land https://ppc.land/unqualified-advertisers-lose-unlimited-google-ads-impressions-by-2028"
    },
    {
      platform: "Meta",
      title: "WhatsApp Business Tools MCP 上线：消息模板配置可交给 AI 代理",
      date: "2026-09-15",
      detail: "Meta 发布 WhatsApp Business Tools MCP 服务器，AI 代理可直接完成 WhatsApp 商业消息从开户到模板配置的全流程；与此前广告 MCP 并行",
      impact: "低",
      categories: ["电商"],
      bizValue: "Click-to-WhatsApp 广告客户的配置门槛下降，Jill 可借势推 CTWA 广告方案给电商/金融客户（WhatsApp 在拉美/东南亚转化好）。",
      source: "Ads Uploader https://adsuploader.com/blog/meta-ads-updates"
    },
    {
      platform: "TikTok",
      title: "TikTok 隐私政策重构（7/16）：数据披露范围扩大",
      date: "2026-07-16",
      detail: "TikTok Ads 7/16 大幅重构隐私政策，扩大数据收集披露范围；美国区隐私政策替换为「其他地区」通用版本，控制主体调整",
      impact: "低",
      categories: ["隐私"],
      bizValue: "隐私合规口径变化影响数据回传与受众积累，涉及敏感品类的客户建议复查数据回传配置。",
      source: "ConductAtlas https://conductatlas.com/change/2026-09-10-tiktok-ads-tiktok-advertising-terms-5005"
    }
  ],

  // ============================================================
  // 六、服务商侧小道消息 agencyIntel
  // ============================================================
  agencyIntel: [
    {
      title: "TikTok 彻底关闭个人开户：中国大陆 IP 自助注册 100% 驳回",
      date: "2026-09-04",
      summary: "TikTok 已彻底关闭个人开户通道，所有账户必须经官方认证代理商开户；行业最低起充普遍约 $1000，预付制；Meta 中国大陆一级代理仅 11 家，Google 认证伙伴 30 家",
      bizValue: "开户资质本身成了稀缺资源。Jill 谈新客户时直接亮身份：没有代理通道连户都开不了——一级代理资质是第一句开场白。",
      source: "新浪财经/大数跨境 https://www.10100.com/article/149255191"
    },
    {
      title: "Meta 一级代理仅 11 家，开户必须走 OE 通道且广告主自填",
      date: "2026-09-04",
      summary: "截至 2026 年 7 月 Meta 中国大陆官方一级代理商 11 家（飞书深诺/维卓/HuntMobi/GatherOne/熊猫新媒/易诺/雨果跨境/省广/猎豹/钛动/蓝标）；2024/2 起开户须经 OE 工具由广告主自行提交，代理商不得代填",
      bizValue: "开户流程去代理化后，代理商的价值从「代填」转向「风控+申诉+优化」。Jill 对客户的话术重点：我们能做的是封户误判时的官方申诉绿色通道和 BM 健康度管理。",
      source: "新浪财经 https://finance.sina.com.cn/tech/roll/2026-09-04/doc-iniqrpqy0920694.shtml"
    },
    {
      title: "返点时代终结：2026 年返点不再被官方认可，改以「消耗激励金」名义",
      date: "2026-09-15",
      summary: "行业共识：返点在 2026 年已不被官方认可；部分代理为拉高消耗客户设立「广告消耗激励金」，如何计算、何时结算、是否有阶梯需签约前问清；Meta 对二级代理政策收紧、对返点审计加强",
      bizValue: "客户问返点时的正确回答：官方口径已无返点，比返点更重要的是账户稳定性和申诉能力。Jill 可顺势把话题引到「资金安全+账户健康」的专业服务上。",
      source: "挖贝网 https://www.wabei.cn/Home/News/362812"
    },
    {
      title: "二级代理连坐风险上升：Meta 审计收紧后挂靠账户资金链路脆弱",
      date: "2026-09-15",
      summary: "2026 年 Meta 对二级代理商政策收紧、返点审计加强，账户风控关联和资金链路断裂风险显著上升；二级代理无直签资质、申诉链路长，中间商出问题可能连坐封禁",
      bizValue: "这是从二级代理手里抢客户的最好理由。Jill 遇到在二级渠道投放的客户，可直接讲连坐封禁+数据带不走的两个真实风险点，引导迁到一级代理。",
      source: "挖贝网 https://www.wabei.cn/Home/News/362812"
    },
    {
      title: "资产归属条款成 2026 年选代理的关键：BM/Pixel 必须自有主体",
      date: "2026-09-04",
      summary: "行业提示：广告账户/像素/受众/目录等资产必须用客户自有主体开立、代理只拿操作权限；部分代理用自有 BM 建资产，解约后历史转化数据和像素模型无法带走",
      bizValue: "换代理的客户最痛的就是资产被锁。Jill 挖角竞对客户时的标准话术：我们可以帮你把资产迁回自有 BM，历史数据不损失——这类迁移需求是天然的建联由头。",
      source: "大数跨境 https://www.10100.com/article/149255191"
    },
    {
      title: "Meta 六国 DST 附加费 10/1 落地：代理侧已开始逐户通知",
      date: "2026-09-18",
      summary: "Meta 对奥地利/土耳其（5%）、法意西（3%）、英国（2%）的广告收取地区服务费，与开户地/币种无关、独立列账、不占广告预算（后台消耗≠最终账单）；此前 Google 已在相关国家征收多年",
      bizValue: "账单口径变化会引发客户对账混乱。Jill 主动给欧洲客户做一次「真实成本重算」（CPM/CPA/ROI 含税费），是 10 月前最好的客户关怀动作。",
      source: "邦阅网 https://52by.com/article/216113"
    },
    {
      title: "TikTok 9 月政策后：pre-lander 类广告审批率跌破 60%，CPM 涨 18-34%",
      date: "2026-09-14",
      summary: "买量社群反馈：TikTok 9 月政策更新后，保险线索/家庭服务/财商教育等 pre-lander 依赖型类目审批率跌破 60%；常青电商与线索类目 CPM 上涨 18-34%；素材疲劳周期从 4-6 天压缩至 2-3 天",
      bizValue: "合规素材产能成为新的竞争力。Jill 可跟受影响客户推素材批量生产+快速迭代服务，把「审核延迟 24-48 小时」转化为我们的代运营优势。",
      source: "Affiliate Times https://affiliate-times.com/tiktoks-new-affiliate-ad-policies-are-reshaping-media-buyer-strategy/"
    },
    {
      title: "海外 agency 账户市价盘点：按消耗 1%-7% 或月租 $90-5000",
      date: "2026-09-10",
      summary: "海外市场 Facebook agency 账户报价：按消耗 1%-7% 或固定月租 $90-$5000；高级开户（Pixel/CAPI/追踪迁移）设置费 $500-$2000；Net Payment 账期账户费率更高",
      bizValue: "这是服务定价的对标表。Jill 谈价格异议时可引用海外市价：我们的服务费率处于市场合理区间，且带官方申诉通道和资产归属保障——便宜的二道贩子贵在出事之后。",
      source: "SpeedX Agency https://speedxagency.com/blog/facebook-agency-ad-account-price"
    },
    {
      title: "非稀释性 UA 融资兴起：买量资金从 VC 转向按效果结算的资本方",
      date: "2026-09-09",
      summary: "PvX 向 Tevo 提供 $1000 万非稀释性用户获取融资（还款与营销表现挂钩），其全球已承诺 UA 融资超 $7.5 亿；HubX 获 Point72 $7500 万准备收购扩张——增长资本正在绕过股权融资直接补给买量",
      bizValue: "缺预算的优质客户多了一条「不稀释股权拿投放资金」的路。Jill 可把这类 UA 资本方介绍给客户（或反向从资金方侧获取客户名单），成为资金-渠道的连接节点。",
      source: "亿邦动力 https://www.ebrun.com/20260909/706668.shtml"
    },
    {
      title: "Google Premier Partner 仅占全球合作商前 3%，资质分层肉眼可见",
      date: "2026-09-04",
      summary: "Google Partner 分三级（Member→Partner→Premier），Premier 为最高级、仅占全球前 3%；行业多数一代的 Google 资质为 Partner 级而非 Premier 级，专项认证披露少",
      bizValue: "帮客户验证代理商资质时用官网名录即可核实。Jill 自查自家资质等级后，可在比稿中直接用「资质穿透力」打差异——客户已学会查官网名录，先替客户查好显得专业。",
      source: "新浪财经 https://finance.sina.com.cn/tech/roll/2026-09-04/doc-iniqrpqy0920694.shtml"
    }
  ],

  // ============================================================
  // 七、中小 App 投放洞察 smeInsight
  // ============================================================
  smeInsight: {
    painPoints: [
      "开户门槛越抬越高：TikTok 个人通道关闭、Meta 仅 11 家一代且 OE 自填、Google 信用代码联网核验——中小团队自己摸流程动辄卡 1-2 周，错过新品上线窗口",
      "账单里的隐藏成本突然出现：Meta 10/1 起六国 2-5% 地区服务费、汇率与结算损耗、各类税费独立列账——中小团队按「后台消耗」算利润会直接算错账",
      "政策月月变、没人力盯：TikTok 域名一致/断开式 pre-lander 限制、Meta 版位排除移除、EU AI Act 披露义务——一次没跟上就是批量拒登或封户，账号资产一夜归零",
      "数据断在最后一公里：投放数据和内容/付费数据割裂（短剧哪部剧带来的用户、AI 工具哪次测试带来的订阅算不清），预算只能凭感觉加"
    ],
    needs: [
      "低门槛起步的开户通道：0 开户费、小额起充、能测试再放量，最好 1-3 个工作日下户（Meta）/3-7 天（TikTok）",
      "一条龙合规服务：金融服务 G2 验证材料、AI 内容披露标识、TikTok Business 账号绑定与 AI 素材授权链路——有人替他把材料备齐",
      "真实成本的可视化账单：含地区服务费/税费/汇率的实际 CPA、按产品/剧集/素材维度的 ROI 归因",
      "跟得上政策的代运营：政策变动主动提醒（如 10/1 DST、API 弃用）、封户时的官方申诉通道、素材合规预审避免旺季卡审"
    ],
    entryPoints: [
      "对新客第一句话讲「政策日历」：10/1 Meta 六国附加费、10/6/10/15 Meta API 弃用、TikTok 9/9 新规——中小团队几乎都不知道，一讲就是专业度",
      "用同行案例开门：短剧客户讲 JoyReels 两月进 Top10、AI 工具客户讲 Crushie AI 月活 30 万月入百万美金、教育客户讲 51Talk 境外 +70.9%——同体量案例比大厂案例有说服力",
      "把「资产归属」作为切旧客户的刀：帮客户把 BM/Pixel 迁回自有主体、历史数据不丢，二级渠道流失客户最吃这一套",
      "给缺预算的客户递「增长资本」钥匙：非稀释性 UA 融资（PvX 等）正流行，介绍资金方+承接投放的一揽子方案，既帮客户解决预算又锁定合作"
    ]
  }
};
