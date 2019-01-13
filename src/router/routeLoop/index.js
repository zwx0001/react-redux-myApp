import React from "react";
import { Route, Redirect } from "react-router-dom";
const routerMap = val =>
    val.map((item, index) => (
        <Route
            key={index}
            exact={item.exact ? true : false}
            path={item.path}
            render={(match) => {
                if (item.child) {
                    return <item.component {...match} routers={item.child} />
                } else {
                    if (item.path === '/') {
                        return <Redirect to="/mine"></Redirect>
                    }
                    return <item.component {...match} />
                }
            }}
        />
    ))
export default routerMap;
