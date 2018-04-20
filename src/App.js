import React, {Component} from 'react';
import {MuiThemeProvider} from "material-ui";
import {configstore} from './store';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {Provider} from 'react-redux';
import {MainContainerPage} from './pages';
import {Header} from './components';
import {SideBar} from "./components/SideBar/index";


class App extends Component {
    constructor() {
        super();

        this.state = {
            drawer: false
        };

        this.handleDrawer = this.handleDrawer.bind(this);
    }

    handleDrawer() {
        this.setState({drawer: !this.state.drawer})
    };

    render() {
        return (
            <MuiThemeProvider>
                <Provider store={configstore}>
                    <BrowserRouter>
                        <React.Fragment>
                            <Header drawer={this.state.drawer} drawerHandler={this.handleDrawer}/>
                            <SideBar drawer={this.state.drawer} handleDrawer={this.handleDrawer}>
                                <div> asdasdasdsads1</div>
                                <div> asdasdasdsads2</div>
                                <div> asdasdasdsads3</div>
                            </SideBar>
                            <main>
                                <Switch>
                                    <Route path="/" component={MainContainerPage}/>

                                </Switch>
                            </main>
                        </React.Fragment>
                    </BrowserRouter>
                </Provider>
            </MuiThemeProvider>
        );
    }
}

export default App;
