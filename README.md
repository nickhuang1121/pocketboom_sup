# Pocket Bomb 官方網站

純 HTML、CSS、JavaScript，無需安裝套件或建置。所有站內路徑皆為相對路徑，支援 GitHub Pages 專案子路徑。遊戲專案未修改；機器人圖片複製自既有遊戲素材。

## 檔案

- `index.html`：遊戲介紹、特色、截圖預留區、下載連結預留區。
- `support.html`：聯絡資訊、問題回報方式、原生可展開 FAQ。
- `privacy.html`：繁體中文隱私政策草稿與待確認項目。
- `assets/style.css`、`assets/site.js`：共用樣式與漸進增強。
- `assets/images/robot.png`：機器人素材及網站圖示。
- `.nojekyll`：GitHub Pages 直接發布靜態檔案。

## 本機預覽

直接開啟 index.html 即可。也可在此資料夾執行：

```sh
python3 -m http.server 8000
```

在瀏覽器開啟 http://localhost:8000 。網站主要內容、頁面導覽與 FAQ 在停用 JavaScript 時仍可使用。

## 送審前必填

1. 搜尋 `【待填` 與 `【待開發者確認`，補上 support.html、privacy.html 的真實信箱（文字與 mailto 連結）。確認信箱可收信。
2. 查核正式遊戲版本的資料蒐集、傳輸、儲存、SDK、第三方服務、保存及刪除機制，改寫 privacy.html 各段。確認後移除草稿告示，填入實際政策更新日期。同步核對 App Store Connect 的 App Privacy 回答。
3. App Store 網址確認後，將首頁 `.unavailable` 的 span 換成實際下載連結，例如 `<a class="button" href="實際的 App Store HTTPS 網址">在 App Store 下載</a>`，並更新 download-note。
4. 有實機截圖後，將 `.screen > div` 換成帶有描述性 alt 的 img；圖片存入 assets/images，以相對路徑引用，CSS 設定 width:100%、height:auto。預留框並非實機畫面。
5. 確認有權公開使用網站圖片。
6. 上線後用手機及無痕視窗檢查三頁與信箱連結。草稿政策及未填信箱不應直接作為正式送審資料。

## 部署至 GitHub Pages（不需購買網域）

目前尚未建立公開 Repository 或推送。以下步驟需由開發者決定並授權後執行。

1. 在自己的 GitHub 帳號建立公開 Repository，建議名稱 `pocketboom_sup`。僅上傳本網站資料夾，不上傳遊戲專案。
2. 將此資料夾的內容放在 Repository 根目錄（index.html 不要再包一層資料夾），推送至 main 分支；包含 `.nojekyll`。
3. 開啟 Repository → Settings → Pages。
4. 在 Build and deployment 的 Source 選擇 **Deploy from a branch**，Branch 選 **main**、資料夾 **/(root)**，按 Save。
5. 等待 GitHub Pages 完成發布，使用 Pages 設定中顯示的實際網址。無需 npm、GitHub Actions 自訂流程、後端或網域設定。

參考：[GitHub 官方 Pages 發布來源說明](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)。

## App Store Connect 網址

若帳號是 `YOUR_USERNAME`、Repository 是 `pocketboom_sup`，部署成功後填：

| 欄位 | 網址 |
| --- | --- |
| Support URL | `https://YOUR_USERNAME.github.io/pocketboom_sup/support.html` |
| Marketing URL（選填） | `https://YOUR_USERNAME.github.io/pocketboom_sup/` |
| Privacy Policy URL | `https://YOUR_USERNAME.github.io/pocketboom_sup/privacy.html` |

以上是格式範例，不是已上線的網址。以實際帳號、Repository 大小寫及 Pages 顯示網址為準。

[Apple：管理 App 隱私權資料](https://developer.apple.com/help/app-store-connect/manage-app-information/manage-app-privacy/)。

## 網站資料行為

網站沒有 Cookie、追蹤、第三方分析、外部字型、持久儲存或資料回報表單；JavaScript 僅同步 FAQ 展開狀態。託管平台及遊戲自身的資料行為需分別確認。
