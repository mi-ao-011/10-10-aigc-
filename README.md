# 肖志豪 · AI 视频营销运营作品集

用 React + Vite 搭建的个人作品集网站，包含商业 TVC、AI 漫剧与校园官方账号作品。

---

## 一、这个文件夹里是什么

| 文件夹 / 文件 | 作用 | 你需要管它吗 |
| --- | --- | --- |
| `docs/` | **已经做好的成品网站**，GitHub Pages 直接用它 | 上传前不用动 |
| `public/` | 网站用到的图片和视频（源码素材） | 不用动 |
| `src/` | 网站源代码（页面文字、样式都在这里） | 改内容时才动 |
| `index.html`、`package.json`、`vite.config.js` | 项目配置文件 | 不用动 |

> `docs/` 和 `public/` 里有一部分内容是一样的（图片和视频各存了一份），
> 这是正常的：一份给线上访问用，一份留着以后重新构建用。

---

## 二、三步让网站在网上能打开

### 第 1 步：在 GitHub 创建仓库

1. 打开 <https://github.com/new>
2. **Repository name** 填一个英文名，建议：`portfolio`
3. 下面选 **Public**（必须公开，私有仓库用不了免费的 GitHub Pages）
4. **不要**勾选 “Add a README file”
5. 点最下面的绿色按钮 **Create repository**

### 第 2 步：上传文件

1. 新建好的仓库页面中间有 **uploading an existing file** 这个链接，点它
2. 打开 `10月10日aigc作品集` 文件夹，**全选里面的所有内容**
   （`docs`、`public`、`src`、`index.html`、`package.json`、`package-lock.json`、`vite.config.js`、`README.md`）
3. 把它们**拖进浏览器的上传区域**

> ⚠️ **注意**：拖的是文件夹**里面的内容**，不要把 `10月10日aigc作品集` 这个文件夹本身拖进去。
> 如果拖错了，仓库里会多一层目录，网站就打不开了。

4. 等进度条走完（约 93 MB，可能要几分钟，**不要中途关掉页面**）
5. 页面拉到最下面，点绿色按钮 **Commit changes**

### 第 3 步：开启 GitHub Pages

1. 在仓库顶部菜单点 **Settings**
2. 左侧栏找到 **Pages**（在 Code and automation 分组里）
3. **Source** 选 `Deploy from a branch`
4. **Branch** 第一个下拉选 `main`
5. 第二个下拉（文件夹）选 **`/docs`**
6. 点 **Save**
7. 等 1～2 分钟，刷新这个设置页，顶部会出现一行：

   > Your site is live at **https://你的用户名.github.io/portfolio/**

**这个网址就是你要发给 HR 的作品集链接，可以直接复制到 BOSS 直聘的聊天框。**

---

## 三、常见问题

**Q：打开是一片空白 / 只有黑底没内容？**

大概率是上传时多套了一层文件夹。检查仓库根目录里是不是直接能看到 `docs`、
`public`、`src` 这几个文件夹。如果看到的是 `10月10日aigc作品集/docs` 这种，就说明套错了，
需要重新上传。

**Q：页面能打开，但没有图片、没有首页视频？**

检查仓库里 `docs/media/` 文件夹是否存在、里面有没有 `.mp4` 和 `.png` 文件。
视频文件较大，上传时容易漏。

**Q：首页视频是一片黑 / 看不出来在动？**

先按 `Ctrl + Shift + R` 强制刷新排除缓存。如果背景变成一张静止画面，那是浏览器拦截了
视频自动播放，换 Chrome 或 Edge 打开通常就正常了。

**Q：改完设置多久生效？**

通常 1～2 分钟。刚点完 Save 马上打开可能还是 404，属于正常现象。

**Q：链接发给别人，预览卡片没有图？**

GitHub 上多数平台能正常抓取。如果发现预览图不显示，把 `docs/index.html` 里
`og:image` 和 `twitter:image` 的值从 `./og-cover.jpg` 改成完整网址：

```
https://你的用户名.github.io/portfolio/og-cover.jpg
```

**Q：国内打开会不会慢？**

GitHub Pages 的服务器在海外，国内打开一般能开，但速度不算快。
如果投递后发现 HR 说打不开，再换成国内的对象存储（腾讯云 COS / 阿里云 OSS），
网站文件不用改，直接传过去就行。

---

## 四、以后想改内容怎么办

页面上的文字都在 `src/data/` 这两个文件里：

- `site.js` —— 个人信息、自我介绍、简历经历、优势、作品列表
- `campus.js` —— 校园官方抖音账号的四条作品

改完之后需要**重新构建**，再把新的 `docs` 文件夹替换掉仓库里的旧 `docs`。

### 怎么重新构建

这台电脑已经装好了 Node（便携版），打开 PowerShell 依次执行：

```powershell
$env:PATH = "C:\Users\24523\.codex\tools\node;" + $env:PATH
cd "C:\Users\24523\Desktop\aigc作品集\site"
npm run build
```

构建结果会输出到 `site\dist`，把它复制成 `docs` 再上传即可。

> 如果这一步觉得麻烦，直接把要改的内容告诉我，我改完给你新的 `docs` 文件夹。

---

## 五、技术说明

- **框架**：React 19 + Vite（纯静态站点，无后端）
- **样式**：原生 CSS，无 UI 框架依赖
- **版心**：1700px，以 PC 展示为主，同时做了手机端适配
- **设计**：黑白灰界面 + 作品原色，1px 细线分隔，等宽字体小标签
- **体积**：约 93 MB（视频已压缩，最大的单个文件 15.6 MB）
- **构建产物路径**：使用相对路径（`base: './'`），
  因此可以部署在 `用户名.github.io/仓库名/` 这样的子路径下，
  也可以换成自定义域名，不需要改代码

### 本地预览

```powershell
$env:PATH = "C:\Users\24523\.codex\tools\node;" + $env:PATH
cd "C:\Users\24523\Desktop\aigc作品集\site"
npm run dev
```

然后浏览器打开 <http://127.0.0.1:5173/>

---

© 2026 肖志豪 · AI 视频营销运营
