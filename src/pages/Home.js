import React, { PureComponent } from "react";
import { Provider } from "react-redux";

import CounterComponent from "../organisms/counterComponent";
import CounterStore from '../store/counterStore'


class Home extends PureComponent {

    render() {
        return <Provider store={CounterStore}><CounterComponent /></Provider>
    }

}

export default Home;