// 资源路径同样走 BASE_URL，兼容 GitHub Pages 子路径
const media = (file) => `${import.meta.env.BASE_URL}media/${file}`

// 学校官方抖音账号发布的作品（校园文旅宣传项目）
// url 为抖音短链，点击可直接跳转到原视频
export const campusAccount = {
  name: '宜宾学院',
  note: '官方认证账号 · 粉丝 2.1 万 · 累计获赞 22.1 万',
}

export const campusWorks = [
  {
    id: 'she',
    title: '她是踏碎星河落入梦境的梦想',
    kind: '校园形象 · 情绪文案',
    role: '脚本创作 / 拍摄跟进 / 后期剪辑',
    date: '2025.12',
    duration: '00:18',
    image: media('campus-she.png'),
    url: 'https://v.douyin.com/9M_ZFwfvjkU/',
    badge: '系列最高点赞',
    likes: '6872',
    shares: '735',
  },
  {
    id: 'junxun',
    title: '军训总结表彰预告',
    kind: '活动预告 · 军训',
    role: '脚本创作 / 拍摄跟进 / 后期剪辑',
    date: '2025.10',
    duration: '00:39',
    image: media('campus-junxun.png'),
    url: 'https://v.douyin.com/NDkHO143YWw/',
    badge: '转发破 2000',
    likes: '1027',
    shares: '2303',
  },
  {
    id: 'stardew',
    title: '用星露谷的方式打开宜院的校园生活',
    kind: '校园生活 · 创意策划',
    role: '脚本创作 / 拍摄跟进 / 后期剪辑',
    date: '2025.12',
    duration: '00:19',
    image: media('campus-stardew.png'),
    url: 'https://v.douyin.com/KA5fXm-e3BA/',
    badge: '游戏化创意',
    likes: '770',
    shares: '496',
  },
  {
    id: 'ae',
    title: '用 AE 打开宜宾学院校徽',
    kind: 'AE 动态特效',
    role: '脚本创作 / AE 特效 / 后期剪辑',
    date: '2025.10',
    duration: '00:14',
    image: media('campus-ae.png'),
    url: 'https://v.douyin.com/0FofvHTP1bw/',
    badge: 'AE 特效实操',
    likes: '341',
    shares: '108',
  },
]
