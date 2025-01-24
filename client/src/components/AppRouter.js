import React, { useState } from 'react';
import { Switch, Route, Redirect, useLocation } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { publicRoutes } from "../routes";
import { SHOP_ROUTE } from "../utils/consts";
import { observer } from "mobx-react-lite";
import '../styles/transitions.css';

const AppRouter = observer(() => {
    const location = useLocation();
    const [isBackward, setIsBackward] = useState(false);

    const animatedRoutes = [];

    const isAnimated = animatedRoutes.includes(location.pathname);

    window.onpopstate = () => {
        setIsBackward(true);
    };

    return (
        <TransitionGroup>
            {isAnimated ? (
                <CSSTransition
                    key={location.key}
                    timeout={750}
                    classNames={{
                        enter: `page-enter ${isBackward ? 'backward' : 'forward'}`,
                        enterActive: `page-enter-active ${isBackward ? 'backward' : 'forward'}`,
                        exit: `page-exit ${isBackward ? 'backward' : 'forward'}`,
                        exitActive: `page-exit-active ${isBackward ? 'backward' : 'forward'}`,
                    }}
                    onExited={() => setIsBackward(false)}
                    unmountOnExit
                >
                    <Switch location={location}>
                        {publicRoutes.map(({ path, Component }) => (
                            <Route key={path} path={path} component={Component} exact />
                        ))}
                        <Redirect to={SHOP_ROUTE} />
                    </Switch>
                </CSSTransition>
            ) : (
                <CSSTransition
                    key={location.key}
                    timeout={750}
                    classNames={{
                        enter: `page-enter ${isBackward ? 'backward' : 'forward'}`,
                        enterActive: `page-enter-active ${isBackward ? 'backward' : 'forward'}`,
                        exit: `page-exit ${isBackward ? 'backward' : 'forward'}`,
                        exitActive: `page-exit-active ${isBackward ? 'backward' : 'forward'}`,
                    }}
                    onExited={() => setIsBackward(false)}
                    unmountOnExit
                >
                    <Switch location={location}>
                        {publicRoutes.map(({ path, Component }) => (
                            <Route key={path} path={path} component={Component} exact />
                        ))}
                        <Redirect to={SHOP_ROUTE} />
                    </Switch>
                </CSSTransition> 
            )}

        </TransitionGroup>
    );
});

export default AppRouter;
