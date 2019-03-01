# calculator

##### 记录

* 部署到github pages时，键盘不显示，是由于 react router的原因吗？？？
    可使用 process.env.PUBLIC_URL 

处于开发环境时：
```js
process.env = {{NODE_ENV: "development", PUBLIC_URL: ""}}
```

处于生产环境时：

```js
process.env = {NODE_ENV: "production", PUBLIC_URL: "/react-calculator/build"}
```


* `<BrowserRouter>` 与 `<HashRouter>` 的区别

   BrowserRouter还支持后端跳转，而如果你的站点只需要展示静态文件，HashRouter会是很好的选择，不过为了保持项目的可扩展性，更倾向于默认使用BrowserRouter来创建路由器。

 

```js
<Router basename={`${process.env.PUBLIC_URL}`}></Router>
```