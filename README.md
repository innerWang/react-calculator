# calculator

##### 记录

* 注意在使用数据时，先用parseFloat转一下，根据字符串算出真实的最简的数值，再存入

* 要解决连续输入 + - * / 使得最后一个操作符更新为最新输入的，已解决！！

* [] === [] 不成立，改用length===0判断为空数组

* 部署到github pages时，键盘不显示，是由于 react router的原因吗？？？
    使用 process.env.PUBLIC_URL ，需要进一步修改 App.js

    <BrowserRouter>组件：在服务区来管理动态请求时使用。
    <HashRouter>组件：用于静态网站。
  所以要使用静态页面，用 HashRouter???

  BrowserRouter还支持后端跳转，而如果你的站点只需要展示静态文件，HashRouter会是很好的选择，不过为了保持项目的可扩展性，我们更加倾向于默认使用BrowserRouter来创建路由器。

  ```js
  <Route path={`${process.env.PUBLIC_URL}/normal`}   component={Keyboards.Normal} />
  ```