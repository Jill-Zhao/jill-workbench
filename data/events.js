/* 行业活动数据 — 每周一 09:15 由自动化重写
   注意：兼容 file:// 协议，必须用 window.XXX 挂载，不能改成 .json + fetch
   结构契约：
   window.EVENTS = {
     updatedAt: 'YYYY-MM-DD HH:mm',
     events: [{
       name,            // 活动名称
       dates,           // 展示用日期串，如 '10月15日' 或 '11月4日-5日'
       dateStart,       // 'YYYY-MM-DD' 用于倒计时与排序，必填
       dateEnd,         // 'YYYY-MM-DD' 可选
       location,        // 城市简写，如 '深圳' / '迪拜'
       venue,           // 具体场馆
       category,        // 综合 | 游戏 | 短剧 | AI | 金融 | 社交泛娱乐
       region,          // 国内 | 海外
       organizer,       // 主办方
       cost,            // 门票/费用，如 '免费' / '邀请制' / '门票约 X 元'
       audience,        // 针对的人群
       content,         // 活动内容（议程/亮点）
       whoToMeet,       // 作为广告代理商商务，可以在活动中建联什么样的人
       bizValue,        // 商务视角：为什么去、怎么用这场活动
       source,          // 可核实的报名/详情链接
       signoff          // 报名提示 / 截止时间提醒，可选
     }],
     note: '本周备注'
   }
   规则：只收录已核实、可报名或明确官宣的活动；查不到就删掉，绝不编造日期/地点/嘉宾。 */
window.EVENTS = {
  updatedAt: '2026-09-23 18:45',
  events: [
    {
      name: 'DataEye L!NK 2026短剧出海全球增长大会',
      dates: '10月15日（周四）',
      dateStart: '2026-10-15',
      dateEnd: '2026-10-15',
      location: '深圳',
      venue: '南山区 · 鹏瑞莱佛士酒店 2楼莱佛士宴会厅',
      category: '短剧',
      region: '国内',
      organizer: 'DataEye L!NK（指导单位：深圳市微短剧产业协会）',
      cost: '免费（活动行报名）',
      audience: '短剧出海平台、承制方、版权方、AI技术/支付/合规服务商，千人规模',
      content: '年度最大短剧出海盛会，聚焦成本、合规、发行三大痛点。TikTok for Business 行业客户经理林智乔讲《出海短剧从0到1的入局攻略》；麦芽、掌阅泡漫、万兴科技、中文在线、火山引擎、生数科技等确认出席/参展，另有路演专场。',
      whoToMeet: '① 短剧App/平台的投放与发行负责人（麦芽、巨日禄、不鸣文化等参展方都在现场）② TikTok for Business 短剧行业客户经理——平台侧人脉，帮客户跑白名单/资质时用得上 ③ AI视频工具厂商商务（万兴、生数、OiiOii）④ 跨境支付/合规服务商',
      bizValue: '你手里短剧客户多的话这场必去：一场集齐甲方（短剧平台）+平台方（TikTok）+服务商，当面建联效率比线上高十倍。建议提前把「易点短剧客户案例」话术备好，展位区逐家聊。',
      source: 'https://sellectiolife.huodongxing.com/event/1873445732700',
      signoff: '活动行免费报名；超千名从业者已报名，建议提前登记'
    },
    {
      name: 'AI全球化新范式：从增长出海到合规出海',
      dates: '10月13日（周二）13:30-17:00',
      dateStart: '2026-10-13',
      dateEnd: '2026-10-13',
      location: '北京',
      venue: '海淀区（报名成功后邮件通知具体地点）',
      category: 'AI',
      region: '国内',
      organizer: 'LSEG（World-Check 25周年系列活动）',
      cost: '免费',
      audience: 'AI 出海企业、金融科技公司、合规/法务负责人',
      content: '半天小型研讨：AI企业出海的全球增长与合规挑战、KYC 要求成为全球 AI 行业新标准的影响、中国 AI 企业出海的合规风险，含圆桌与自由交流环节。',
      whoToMeet: '① 正在出海的 AI 应用公司增长/合规负责人（合规焦虑正是切入投放合作的由头）② 金融科技公司国际化团队 ③ 合规与 KYC 服务商（可互推客户）',
      bizValue: '小场活动、人少而精，适合深度建联。AI 客户最怕 Google/Meta 审核和金融类资质——会前把「AI应用出海的媒体政策避坑」整理成你自己的谈资，现场人人都用得上。',
      source: 'https://finance.sina.com.cn/esg/2026-09-07/doc-iniqyrka5617290.shtml',
      signoff: ''
    },
    {
      name: '第七届全球互联网产业CEO大会（GICC）',
      dates: '10月21日-23日',
      dateStart: '2026-10-21',
      dateEnd: '2026-10-23',
      location: '北京',
      venue: '三里屯通盈中心洲际酒店 4F 大宴会厅（10/22 主会场）',
      category: '综合',
      region: '国内',
      organizer: '扬帆出海',
      cost: '免费（闭门会 10/21 需审核）',
      audience: '出海企业CEO/C级高管：短剧工业化、游戏D2C、社交陪伴、一人成军等赛道的操盘者',
      content: '扬帆出海年度最重磅品牌活动，主题「重构·增长——当AI重构一切」。Day1 AI×泛娱高层闭门思享会（20+产业领袖）；Day2 上午场C级对话大模型/智能体与产业出海，下午场拆解短剧工业化、游戏D2C破局、社交陪伴变现，同期颁金帆奖八大年度奖项。',
      whoToMeet: '① 出海公司的 CEO/增长VP——决策人密度全场最高 ② 短剧/游戏/社交陪伴公司的C级（都在讲变现路径，正是要买量的阶段）③ 扬帆出海官方BD（后续多个城市峰会可以复用这个关系）',
      bizValue: 'C级大会意味着你聊的不是执行层而是拍板的人。闭门会 10/21 需审核，建议立刻报名占位；主会场 10/22 免费区重点听「短剧工业化」「社交陪伴」两个专场——正好对应你手上的品类。',
      source: 'https://new.qq.com/rain/a/20260904A0DIV000',
      signoff: '闭门会审核制，越早报名越可能通过'
    },
    {
      name: 'TrafficTalking Global Summit 雅加达站',
      dates: '10月20日（周二）14:00-19:00',
      dateStart: '2026-10-20',
      dateEnd: '2026-10-20',
      location: '雅加达',
      venue: '雅加达 CBD Star Hotel（报名后告知）',
      category: '社交泛娱乐',
      region: '海外',
      organizer: 'TrafficTalking（邀请制闭门峰会）',
      cost: '邀请制',
      audience: '游戏、社交、电商、金融科技四大领域的一线操盘手；东南亚扩张团队；流量变现/广告技术从业者',
      content: '实操型闭门峰会：不讲 PPT 复盘，只讲正在跑的投放打法（渠道选择、ROI、踩坑、调优），现场有投放、支付、变现、本地化服务商精准对接。',
      whoToMeet: '① 正在打东南亚市场的社交/泛娱乐 App 增长负责人 ② 东南亚本地的投放与支付服务商（渠道侧人脉）③ 想找中国服务商的本地流量主',
      bizValue: '若公司愿意出人去东南亚，这是单场含金量最高的选择；邀请制峰会人少、彼此都是决策人，适合带着「东南亚买量实战」的案例去换信任。去不了也建议关注他们的后续场次（曼谷/吉隆坡）。',
      source: 'https://luma.com/g4tnhetc',
      signoff: '邀请制，需在 Luma 页面申请'
    },
    {
      name: 'AI赋能科创企业数字化出海路演资源对接会',
      dates: '10月30日（周五）13:30-17:00',
      dateStart: '2026-10-30',
      dateEnd: '2026-10-30',
      location: '上海',
      venue: '浦东 · 泰隆银行大厦 多功能会议厅',
      category: 'AI',
      region: '国内',
      organizer: '联贝集团（联合泰隆银行；国家技术转移东部中心、Google 出海生态支持）',
      cost: '免费',
      audience: '科创企业、AI应用企业、跨境电商、数字贸易企业，60-80人精品场',
      content: '2026 跨境政策解读（税务/海关/外汇/平台四端）+ 优质出海项目路演 + 政企精准资源对接，Google 出海生态作为配套资源参与。',
      whoToMeet: '① 上海本地 AI应用/科创公司的创始人或出海负责人（路演项目方即是筛选过的名单）② Google 出海生态的渠道伙伴——和你的代理业务直接同场 ③ 跨境金融/银行客户经理',
      bizValue: '小而精的场子，路演名单就是现成的潜在客户表。带着「你们出海的用户增长怎么解决」这个钩子去，路演公司基本都在愁获客。',
      source: 'https://hz.huodongxing.com/event/8878069746700',
      signoff: '报名后可查看详细地址'
    },
    {
      name: '香港金融科技周 Hong Kong FinTech Week 2026',
      dates: '11月2日-6日',
      dateStart: '2026-11-02',
      dateEnd: '2026-11-06',
      location: '香港',
      venue: '香港（联动深圳场次，具体场馆见官网）',
      category: '金融',
      region: '国内',
      organizer: '香港特区政府投资推广署等',
      cost: '以官网票务为准',
      audience: '银行、支付、财富科技、数字资产机构；关注大湾区与中国内地市场连接的金融科技公司',
      content: '全球主要金融科技周之一，聚焦内地与全球金融市场的连接、数字资产与大湾区扩张机会。',
      whoToMeet: '① 做香港/东南亚市场的中国金融科技公司市场负责人 ② 香港本地银行与支付机构的创新业务团队 ③ 监管侧与合规服务商（金融客户投放资质的活字典）',
      bizValue: '金融类客户是你要的品类但资质门槛最高——这场能让你把「香港/东南亚金融投放合规」聊成自己的专业标签。深港两地联动，去香港一天成本可控。',
      source: 'https://virtuslab.com/blog/business-insights/best-fintech-conferences-second-half-2026/',
      signoff: '日程细节以官网为准'
    },
    {
      name: 'GTC2026 全球流量大会（上海站）',
      dates: '11月4日-5日',
      dateStart: '2026-11-04',
      dateEnd: '2026-11-05',
      location: '上海',
      venue: '世博展览馆 H3馆',
      category: '综合',
      region: '国内',
      organizer: '白鲸出海',
      cost: '免费',
      audience: '跨境出海全产业链：游戏、短剧、AI+、电商等出海企业 + 服务商，万人规模',
      content: '白鲸出海年度旗舰展（深圳站已于4月举办），行业展会+主题峰会+对接会+闭门晚宴，覆盖出海全产业链。白鲸官方顾问会帮开发者对接服务商，华东/华南/华北都有对接人。',
      whoToMeet: '① 全品类出海App的发行/增长/商务负责人——万人场，潜在客户密度最高 ② 短剧、AI应用专场区的中小团队 ③ 白鲸出海区域顾问（Cassie/Ares/Lina，联系方式在活动页公开）——搞好关系等于持续拿一手客户线索',
      bizValue: '这是你下半年最该去的一场：免费、规模大、品类全覆盖，白鲸的顾问对接机制等于官方帮你筛客户。策略：第一天上午扫展位收名单，当天晚上整理，第二天约有意向的喝咖啡；记得带够名片。',
      source: 'https://www.baijing.cn/activity/2374',
      signoff: '免费报名，官方顾问对接可联系华东 Cassie 18506490569'
    },
    {
      name: 'Singapore Fintech Festival 2026 新加坡金融科技节',
      dates: '11月18日-20日',
      dateStart: '2026-11-18',
      dateEnd: '2026-11-20',
      location: '新加坡',
      venue: 'Singapore Expo',
      category: '金融',
      region: '海外',
      organizer: '新加坡金融管理局（MAS）等',
      cost: '票价 9月30日后上涨，官网购票',
      audience: '全球金融机构、金融科技公司、监管机构；官网口径 7万+ 参会者、140+ 国家和地区',
      content: '全球规模最大的金融科技盛会之一，2026 主题聚焦「金融系统重构：新风险、新规则、新增长」，含监管科技、AI金融、支付结算等议程与大型展区。',
      whoToMeet: '① 中国金融科技出海公司的东南亚负责人（钱包、支付、信贷 App 都会去）② 东南亚本地银行/钱包/持牌机构——他们常是中国 App 的本地合作方 ③ 区域监管与合规服务商',
      bizValue: '想拿东南亚金融客户就得在这出现。你的重点市场里东南亚+金融是最难啃也最值钱的组合，这场能一次性见到全生态。去之前先把 SFF 的展区图研究好，列出目标公司清单再动身。',
      source: 'https://www.fintechfestival.sg/',
      signoff: '9月30日后票价上调，计划去就尽早买票'
    },
    {
      name: 'G-STAR 2026 韩国国际游戏展',
      dates: '11月18日-22日',
      dateStart: '2026-11-18',
      dateEnd: '2026-11-22',
      location: '釜山',
      venue: '釜山 BEXCO（BTB展区 11/19-21，G-CON大会议程 11/19-20）',
      category: '游戏',
      region: '海外',
      organizer: '韩国游戏产业协会（K-GAMES）',
      cost: '门票以官网为准',
      audience: '全球游戏厂商、发行商、平台方；Google Play、HoYoverse、NetEase Games、Century Games 等已确认参展',
      content: '全球四大游戏展之一，2026 年扩展到内容与泛娱乐生态：BTB 商务展区 + G-CON 大会（主题「叙事」，CD Projekt RED 巫师剧组等嘉宾）+ Indie Showcase。中国厂商是参展主力之一。',
      whoToMeet: '① 中国游戏公司海外发行/商务团队（网易游戏、Century Games 等都在现场，是同乡也是潜在客户）② 韩国发行商与本地化/买量渠道 ③ Google Play 生态团队',
      bizValue: '游戏出海公司去韩国参展的密度极高，等于客户主动聚在一个馆里。若公司有韩国市场盘子，去一趟可顺路把「韩国买量+本地化」的服务案例收进弹药库；不去也值得留意参展商名录当客户名单用。',
      source: 'https://www.gstar.or.kr/eng/gstar/gstar_info.do',
      signoff: 'BTB 观展需提前在官网申请'
    },
    {
      name: 'GITEX GLOBAL 2026 迪拜科技展',
      dates: '12月7日-11日',
      dateStart: '2026-12-07',
      dateEnd: '2026-12-11',
      location: '迪拜',
      venue: '12/7 GITEX Summit（迪拜世界贸易中心）；12/8-11 Expo（Expo City Dubai）',
      category: '综合',
      region: '海外',
      organizer: '迪拜世界贸易中心（DWTC）',
      cost: '门票以官网为准（展期票约 1500 元人民币量级）',
      audience: '全球科技公司；上届 180 国 6800+ 展商，中国参展企业 372 家创历史新高，辐射中东/非洲/南亚三大市场',
      content: '全球最大科技展之一，2026 年起改档 12 月、迁址 Expo City Dubai。含 AI 主权、金融科技、初创展区 Expand North Star（1200+ 投资人）等，中国厂商把 GITEX 当作打开中东市场的跳板。',
      whoToMeet: '① 中国科技公司中东业务负责人——372 家中国展商，等于出海客户在海外开年会 ② 中东本地渠道、代理与经销资源 ③ 主权基金与投资人（GCC 资本正大举投科技）',
      bizValue: '中东北非是你的重点市场，这场是「中东客户浓度」最高的海外展会：想见在迪拜布局的中国公司，不用一家家约，直接去展馆扫。12 月是迪拜旅游旺季，行程要提前订。',
      source: 'https://www.gitex.com/',
      signoff: '展期票务与签证周期较长，如去需提前一个月规划'
    },
    {
      name: 'MAMA Cyprus 2026（AppsFlyer 高层峰会）',
      dates: '10月14日-16日',
      dateStart: '2026-10-14',
      dateEnd: '2026-10-16',
      location: '塞浦路斯',
      venue: 'Minthis Resort',
      category: '综合',
      region: '海外',
      organizer: 'AppsFlyer',
      cost: '邀请制（VIP/C-level）',
      audience: 'EMEA 东区游戏、金融科技、电商、媒体娱乐领域的 CXO 与营销决策者',
      content: 'AppsFlyer 旗舰闭门峰会：3 天高层私享，1对1 高管对接会 + 主题议程 + 颁奖晚宴，2026 年 MAMA 系列还包括 8 月曼谷场、6 月厦门场（已办）。',
      whoToMeet: '① EMEA 头部 App 的增长/营销 CXO ② AppsFlyer 大中华区团队（王玮博士等）——归因与买量圈的核心人脉 ③ 同场的广告平台与服务商高层',
      bizValue: '邀请制，普通商务拿不到名额也正常；但值得做两件事：① 联系 AppsFlyer 大中华区团队问后续 MAMA 场次（国内场次对代理商更友好）② MAMA 厦门站每年 6 月办，明年提前争取。这类会上认识的 AppsFlyer 侧人脉，能在你给客户讲归因/反作弊时直接加分。',
      source: 'https://event.appsflyer.com/mamacyprus2026',
      signoff: '需在页面申请席位，能否受邀由主办方审核'
    }
  ],
  note: '生活服务类（外卖/团购/出行等）暂无专属出海大会，这类公司通常出现在 GTC、GICC 等综合场；如需盯生活服务客户，建议以 GTC 上海站为主战场。'
};
