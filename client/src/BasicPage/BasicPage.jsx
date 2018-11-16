import React from 'react';
import connect from "react-redux/es/connect/connect";
import {Route, Switch} from "react-router-dom";
import {HomePage} from "../HomePage";
import {CommunityPage} from "../CommunityPage";
import {ProfilePage} from "../ProfilePage";
import {LeaderboardPage} from "../LeaderboardPage";
import HeaderComponent from "../HeaderComponent/HeaderComponent";

class BasicPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="basic-page">
                <HeaderComponent/>
                <Switch>
                    <Route path="/home" component={HomePage}/>
                    <Route path="/community" component={CommunityPage}/>
                    <Route path="/profile" component={ProfilePage}/>
                    <Route path="/leaderboard" component={LeaderboardPage}/>
                </Switch>
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { loggingIn } = state.authentication;
    return {
        loggingIn
    };
}

const connectedBasicComponent = connect(mapStateToProps)(BasicPage);
export { connectedBasicComponent as BasicPageComponent };