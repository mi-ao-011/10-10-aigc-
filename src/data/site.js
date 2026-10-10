// 用 BASE_URL 拼接资源路径，保证部署到 GitHub Pages 的子路径（用户名.github.io/仓库名/）
// 时图片和视频也能正常加载。本地开发时同样生效。
const media = (file) => `${import.meta.env.BASE_URL}media/${file}`

export const profile = {
  name: '肖志豪',
  nameEn: 'XIAO ZHIHAO',
  role: '新媒体运营 / AI 产品视频营销运营',
  roleEn: 'AI VIDEO MARKETING · CONTENT OPERATION',
  city: '杭州',
  phone: '173-6057-2839',
  phoneHref: 'tel:+8617360572839',
  email: '2452358567@qq.com',
  school: '宜宾学院 · 数字媒体技术 · 2027 届',
  availability: '2026.10 起可到岗 · 可连续实习 6 个月以上 · 每周到岗 5 天',
  // 换成自己的照片时，只要替换这个文件即可（建议 3:4 竖构图）
  portrait: media('portrait.jpg'),
}

export const hero = {
  eyebrow: 'PORTFOLIO 2026 — 肖志豪',
  titleLines: ['用 AI 生产内容', '用数据验证增长'],
  lead: '从脚本与分镜，到成片与包装，再到数据复盘与下一轮选题 —— 我把 AIGC 内容生产与平台运营串成一条完整链路。',
  video: media('hero.mp4'),
  poster: media('hero-poster.jpg'),
}

export const stats = [
  { value: '60+', label: '独立剪辑短视频', note: 'Pr / AE / 剪映' },
  { value: '10W+', label: '经手内容累计播放', note: '实习 + 校园项目' },
  { value: '16', label: '协助电商直播场次', note: '单场观看破 1000' },
  { value: '30+', label: '竞品账号数据追踪', note: '选题方向提炼' },
]

export const intro = [
  '数字媒体技术专业 2027 届。做内容是手艺，做增长是习惯 —— 我习惯把「创意」和「数据」放在同一张桌子上：先定选题与人群，再拆脚本与分镜，最后用播放、完播、互动、转化这几组指标验证它到底成不成立。',
  '在 AI 内容方向上，我独立完成了商业 TVC 的分镜与成片，也做过 AI 漫剧的角色设定与系列短片，从提示词、画面一致性到成片节奏都由自己跑通。累计独立剪辑短视频 60+ 条，协助 16 场电商直播，经手内容累计播放 10W+。',
]

export const contacts = [
  { label: '电话 / PHONE', value: profile.phone, href: profile.phoneHref },
  { label: '邮箱 / EMAIL', value: profile.email, href: `mailto:${profile.email}` },
  { label: '坐标 / BASE', value: `浙江 · ${profile.city}`, href: null },
]

export const timeline = [
  {
    period: '2026.06 — 2026.08',
    org: '宜宾筋抖云传媒有限公司',
    role: '运营实习生',
    tag: '传媒实习',
    points: [
      '参与 3 个本地商家抖音账号的内容运营，独立完成 28 条短视频剪辑（Pr、剪映），负责脚本构思、字幕、调色与特效包装；所参与视频平均播放量 1.2 万+，其中 1 条突破 5 万。',
      '协助 16 场电商直播，负责直播间场控、弹幕互动与商品链接上架，单场直播最高观看人数突破 1000；整理观看、互动、转化数据，输出复盘表并完成直播效果评估。',
      '跟踪 30+ 本地同类账号数据，分析不同赛道内容表现，提炼高流量选题方向，为商家账号提供 5 个可复用选题建议。',
    ],
  },
  {
    period: '2025.10 — 2025.12',
    org: '宜宾学院 · 官方抖音账号',
    role: '校园文旅宣传项目 · 内容策划 & 视频后期',
    tag: '官方账号',
    points: [
      '参与学校官方抖音账号（粉丝 2.1 万 · 累计获赞 22.1 万）校园文旅宣传系列的内容策划与制作，独立完成 12 条系列短视频的素材筛选、剪辑调色、字幕与 AE 特效包装，并负责脚本创作与拍摄跟进。',
      '《她是踏碎星河落入梦境的梦想》以情绪化文案驱动校园形象表达，单条获赞 6872、转发 735，是系列中数据最好的一条。',
      '《军训总结表彰预告》以「军训行动 国之荣光」为主题，单条转发 2303（点赞 1027），被大量二次传播；《用星露谷的方式打开宜院的校园生活》把校园场景与游戏元素结合做年轻化表达，获赞 770。',
      '《用 AE 打开宜宾学院校徽》独立完成 AE 动态特效与后期，把静态校徽做成科技感动态呈现；系列内容累计播放 8.6 万。',
    ],
  },
  {
    period: '2024.09 — 2025.06',
    org: '宜宾学院摄影协会',
    role: '副会长',
    tag: '校园经历',
    points: [
      '负责社团抖音、公众号账号整体内容规划与线上宣传方案，牵头产出短视频 21 条、推文 4 篇，建立数据复盘机制与素材库。',
      '策划 4 场摄影分享活动，协调 10 名社员分工，吸引 100+ 同学参与，活动相关视频累计播放 2 万+。',
      '根据后台数据优化内容策略，账号 3 个月内涨粉 900+，公众号阅读量提升 20%，活动线上报名人数增长 30%。',
    ],
  },
  {
    period: '2023.09 — 2027.06',
    org: '宜宾学院',
    role: '数字媒体技术 · 本科',
    tag: '教育背景',
    points: [
      '主修课程：新媒体传播概论、数字图像处理、影视后期剪辑、视听语言、网页设计、小程序开发基础。',
      '荣誉奖项：中国国际大学生创新大赛（2025）省级铜奖；大学生新媒体创作大赛二等奖；一叶知秋摄影大赛二等奖；校荣誉学生；CET-4；普通话二级甲等。',
    ],
  },
]

export const skills = [
  { group: '视频后期', items: ['Pr', 'AE', '剪映', '调色', '字幕', '特效包装'] },
  { group: '平面与排版', items: ['Photoshop', '海报 / 封面', '秀米排版', 'Figma 基础'] },
  { group: '平台运营', items: ['抖音账号运营', '直播全流程', '公众号内容', '内容排期'] },
  { group: '数据与分析', items: ['播放 / 完播 / 互动 / 转化', 'Excel 统计', '竞品分析', '复盘报告'] },
]

export const strengths = [
  {
    index: '01',
    title: 'AI 视频内容生产',
    en: 'AIGC PRODUCTION',
    desc: '独立跑通「脚本 → 分镜 → 画面 → 成片」全流程，能稳定产出商业广告与 AI 漫剧，并控制角色与画风的一致性。',
    tags: ['分镜脚本', '提示词工程', '角色一致性'],
  },
  {
    index: '02',
    title: '短视频后期',
    en: 'POST PRODUCTION',
    desc: '熟练 Pr / AE / 剪映，可独立完成剪辑、调色、字幕与特效包装，累计独立剪辑短视频 60+ 条。',
    tags: ['剪辑调色', '字幕包装', '竖屏适配'],
  },
  {
    index: '03',
    title: '抖音账号运营',
    en: 'ACCOUNT OPERATION',
    desc: '从账号定位、选题排期到发布与日常维护，能按数据反馈持续调整内容方向，跑出可复用的选题模板。',
    tags: ['内容排期', '热点选题', '账号维护'],
  },
  {
    index: '04',
    title: '直播运营支持',
    en: 'LIVE COMMERCE',
    desc: '熟悉直播全流程：场控、弹幕互动、商品链接上架与节奏把控，经手 16 场电商直播实战。',
    tags: ['场控', '弹幕互动', '商品上架'],
  },
  {
    index: '05',
    title: '数据复盘与竞品分析',
    en: 'DATA & INSIGHT',
    desc: '看得懂播放、完播、互动、转化四组指标，用 Excel 输出复盘表与竞品分析，把结论落回下一轮内容。',
    tags: ['指标拆解', '竞品追踪', '复盘报告'],
  },
  {
    index: '06',
    title: '平面与视觉表达',
    en: 'GRAPHIC & VISION',
    desc: 'Photoshop 海报与封面制作、秀米公众号排版，了解 Figma 基础 UI 设计，能把内容包装成统一的视觉语言。',
    tags: ['海报封面', '公众号排版', '视觉统一'],
  },
]

export const works = [
  {
    id: 'mirinda',
    title: '美年达 15" TVC',
    subtitle: '分镜脚本与成片',
    kind: '商业广告 · AIGC',
    year: '2025',
    size: 'large',
    image: media('work-mirinda.jpg'),
    video: media('work-mirinda.mp4'),
    tags: ['品牌 TVC', '分镜脚本', 'AI 生成', '15s 成片'],
    desc: '从品牌调性出发完成分镜脚本，再用 AI 生成画面并剪成 15 秒 TVC 成片；独立负责创意、分镜、生成与后期包装的完整链路。',
    metrics: [
      { k: '片长', v: '15s' },
      { k: '类型', v: '品牌 TVC' },
      { k: '产出', v: '全流程 AI' },
    ],
  },
  {
    id: 'xiaoshimei',
    title: '《小师妹》',
    subtitle: 'AI 漫剧 · 角色设定与成片',
    kind: 'AI 漫剧 · 仙侠',
    year: '2025',
    size: 'large',
    image: media('work-xiaoshimei.png'),
    video: media('work-xiaoshimei.mp4'),
    tags: ['角色设定图', '三视图', 'AI 分镜', '漫剧成片'],
    desc: '从角色设定图（正面 / 侧面 / 背面 + 细节特写）到成片，控制服装、发饰与配色的统一，把仙侠世界观落成可连续生产的漫剧资产。',
    metrics: [
      { k: '类型', v: '仙侠漫剧' },
      { k: '资产', v: '角色三视图' },
      { k: '交付', v: '设定 + 成片' },
    ],
  },
  {
    id: 'langke',
    title: '《浪客》',
    subtitle: '角色与美术设定',
    kind: 'AI 漫剧 · 江湖',
    year: '2025',
    size: 'small',
    image: media('work-langke.png'),
    tags: ['角色三视图', '服装细节', '光影气质'],
    desc: '「一人一剑，浪迹天涯」的江湖角色设定，统一了色调、材质与细节语言，让画面在系列短片里保持一致。',
    metrics: [
      { k: '类型', v: '角色设定' },
      { k: '风格', v: '黑白灰水墨' },
    ],
  },
  {
    id: 'teacher',
    title: '《超级教师》',
    subtitle: 'AI 漫剧短片',
    kind: 'AI 漫剧 · 都市',
    year: '2025',
    size: 'small',
    video: media('work-teacher.mp4'),
    tags: ['AI 生成', '剪辑节奏', '音画包装'],
    desc: '都市题材的 AI 漫剧短片，重点在镜头节奏与情绪推进 —— 用剪辑和音画包装把生成的碎片镜头串成完整叙事。',
    metrics: [
      { k: '类型', v: '都市漫剧' },
      { k: '侧重', v: '节奏与包装' },
    ],
  },
  {
    id: 'fight',
    title: '《打戏》',
    subtitle: '动作片段',
    kind: 'AI 漫剧 · 动作',
    year: '2025',
    size: 'small',
    video: media('work-fight.mp4'),
    tags: ['动作设计', '镜头切换', '动态生成'],
    desc: '动作戏是最难用 AI 稳定生成的部分：通过拆分动势与镜头切换，控制打斗的连贯性和画面的力量感。',
    metrics: [
      { k: '类型', v: '动作片段' },
      { k: '难点', v: '动势连贯' },
    ],
  },
  {
    id: 'props',
    title: '道具与美术资产',
    subtitle: '剑 · 斗笠',
    kind: 'AI 美术 · 设定',
    year: '2025',
    size: 'small',
    image: media('work-prop-sword.png'),
    imageAlt: media('work-prop-hat.png'),
    tags: ['道具设定', '多角度', '材质细节'],
    desc: '为漫剧准备的可复用美术资产：剑与斗笠的多角度设定图，用于保证跨镜头出现的道具在形态与质感上不跑形。',
    metrics: [
      { k: '用途', v: '系列复用' },
      { k: '视图', v: '多角度' },
    ],
  },
]

export const marqueeItems = [
  'AI VIDEO',
  'AIGC 内容生产',
  '短视频运营',
  '直播电商',
  '数据复盘',
  '分镜脚本',
  'AI 漫剧',
  '品牌 TVC',
  '选题策划',
]

export const navItems = [
  { id: 'hero', label: '首页', en: 'HOME' },
  { id: 'about', label: '关于', en: 'ABOUT' },
  { id: 'work', label: '作品', en: 'WORK' },
  { id: 'strengths', label: '优势', en: 'EDGE' },
  { id: 'contact', label: '联系', en: 'CONTACT' },
]
