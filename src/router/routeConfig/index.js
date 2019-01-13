const routers = [
  {
    path: "/",
    component: Mine,
    exact: true
  },
  {
    path: "/mine",
    component: Mine,
    child: [
      {
        path: "/mine/menu",
        component: Menu
      }
    ]
  }
];
export default routers;
