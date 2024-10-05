import React, { PureComponent } from "react";
import CounterComponent from "../organisms/counterComponent";
import { Provider } from "react-redux";
import CounterStore from '../store/counterStore'


class Home extends PureComponent {

    render() {
        return <Provider store={CounterStore}><CounterComponent /></Provider>
    }

}

export default Home;