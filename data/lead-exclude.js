/* ============================================================
   线索池「永不推送」名单（源数据级 / canonical）
   ------------------------------------------------------------
   作用：每日自动化 automation-1785737255186 在生成 chinaGoingGlobal
   之前会读取本文件，凡 product|company（均小写、去空格）命中本名单的
   公司，一律不写进线索池，从源头保证「不再推送」。

   前端「🚫 不是我的客户」按钮写入的是浏览器 localStorage
   （jill_lead_exclude_v1），与这里互补：
     · 浏览器端 = 即时隐藏，点一次永久有效，不受每日推送影响；
     · 本文件   = 让每日推送的「源数据」本身也干净（需由 Mochi 维护）。

   维护方式（Mochi）：把任何要永久剔除的公司加进下面的数组，
   格式： "产品名|公司名"（保持原样即可，前端会自动规范化匹配，
   大小写 / 空格 / 全半角不影响命中）。

   本名单来源：用户曾点过「不是我的客户 / 已加为客户 / 合作过」的公司，
   按用户指令（2026-08-12）从源头不再推送。
   ============================================================ */
window.LEAD_EXCLUDE = [
  // —— 2026-08-12 起永久剔除（用户已排除的 15 家）——
  "Wapoo: Playable Video（可改写 / 可分支续写的视频共创社交）|上海哇卜智能科技有限公司",
  "Emochi（AI 角色扮演 / 情感陪伴）|FlowGPT（开发主体；美国主体 Flow Mobile Inc.）",
  "vivago.ai（AI 视频 / 图像生成，多模态创作智能体 vivago R1）|北京智象未来科技有限公司（HiDream.ai）",
  "PLAUD.AI（AI 录音笔 / 智能笔记，硬件 + 订阅）|Nicebuild Technology Limited（香港主体）",
  "Loopit（AI 互动内容社区）|北京涌跃智能科技有限公司",
  "XTransfer（B2B 跨境收付与资金管理）|XTransfer（上海总部）",
  "PingPong（跨境收付 / 全球账户 / 全球收单 / 多币种卡）|PingPong（杭州总部，PingPong Payments）",
  "UMU（AI 驱动的效果学习平台，企业培训 SaaS）|北京优幕科技有限责任公司",
  "PTE APEUni（PTE 备考 AI 评分 / 移民英语培训）|深圳猩宇宙教育科技有限公司（APEUni）",
  "伴鱼 PalFish（AI 外教 / AI 口语陪练，少儿英语出海）|伴鱼 PalFish（海外发行主体登记名 PALFISH PTE. LTD.）",
  "StoryReel: Exclusive Drama（AI 短剧）|Equinox Enterprises Technology Limited（埃奎諾克斯科技有限公司，中国香港）",
  "VibeShort: AI Comic Dramas（AI 漫剧短剧）|AGILE QUADRANT MEDIA LIMITED（靈動象限傳媒）",
  "NetShort（AI 漫剧 / 短剧出海）|NETSTORY PTE. LTD.",
  "Yalla / Yalla Ludo（中东语音社交 + 棋牌游戏）|Yalla Group（NYSE: YALA，杭州雅乐互动科技）",
  "中手游 CMGE（IP 手游研发发行 + GamePartner.AI 休闲游戏出海平台）|中手游科技集团有限公司（CMGE Technology Group Limited，0302.HK）",
];
