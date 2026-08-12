/* ============================================================
   线索池「已推送历史」滚动名单（供每日自动化去重，保证「每日不同」）
   ------------------------------------------------------------
   由自动化 automation-1785737255186 在每次生成新线索后追加 / 维护。
   结构：
     window.LEAD_HISTORY = {
       updatedAt: "YYYY-MM-DD",
       entries: [
         { key: "产品名|公司名", company: "公司名", date: "YYYY-MM-DD" },
         ...
       ]
     }

   自动化去重规则：
     · 生成新线索前，凡是 entries 中 date 在「最近 14 天」内的公司，
       一律跳过（key 命中即跳过），保证每天推送的 10-15 家与近期不同；
     · 超过 14 天的历史可逐步淘汰（滚动窗口），避免候选池被永久占满；
     · 本名单 + LEAD_EXCLUDE（永久剔除）+ 客户 CRM 三者并集 = 候选黑名单。
   ============================================================ */
window.LEAD_HISTORY = {
  updatedAt: "2026-08-12",
  entries: [
    { key: "PixVerse（AI 视频生成）|北京爱诗科技有限公司", company: "北京爱诗科技有限公司", date: "2026-08-12" },
    { key: "Vidu（AI 视频生成大模型）|北京生数科技有限公司", company: "北京生数科技有限公司", date: "2026-08-12" },
    { key: "MiniCPM / 面壁小钢炮（端侧大模型）|北京面壁智能科技股份有限公司", company: "北京面壁智能科技股份有限公司", date: "2026-08-12" },
    { key: "万兴播爆 Virbo（AI 视频 / 数字人）|万兴科技（深圳）", company: "万兴科技（深圳）", date: "2026-08-12" },
    { key: "百川大模型 / Baichuan API|百川智能（北京）", company: "百川智能（北京）", date: "2026-08-12" },
    { key: "连连跨境收付 / 全球账户|连连数字（杭州）", company: "连连数字（杭州）", date: "2026-08-12" },
    { key: "Airwallex 全球收付 / 金融平台|空中云汇（Airwallex，海南主体）", company: "空中云汇（Airwallex，海南主体）", date: "2026-08-12" },
    { key: "讲真 / 启牛 / Kelly's Education（在线学习出海）|量子之歌（北京，纳斯达克 QSG）", company: "量子之歌（北京，纳斯达克 QSG）", date: "2026-08-12" },
    { key: "TalkAI 练口语（AI 外教）|深圳市惊叹科技有限公司", company: "深圳市惊叹科技有限公司", date: "2026-08-12" },
    { key: "Cake 求职平台 / AI 简历|川陀数位股份有限公司（中国台湾）", company: "川陀数位股份有限公司（中国台湾）", date: "2026-08-12" },
    { key: "FlexTV（海外短剧）|Yuder Pte. Ltd.（Mega Matrix MPU 间接全资子公司）", company: "Yuder Pte. Ltd.（Mega Matrix MPU 间接全资子公司）", date: "2026-08-12" },
    { key: "ShortMax（海外短剧）|嘉兴九州文化传媒（SHORTMAX LIMITED）", company: "嘉兴九州文化传媒（SHORTMAX LIMITED）", date: "2026-08-12" },
    { key: "BuzzCast（海外视频 / 语音社交直播）|WANDA TECHNOLOGY INC.", company: "WANDA TECHNOLOGY INC.", date: "2026-08-12" },
    { key: "梦幻模拟战 / 天地劫 等出海手游|紫龙游戏（北京紫御科技）", company: "紫龙游戏（北京紫御科技）", date: "2026-08-12" },
  ]
};
