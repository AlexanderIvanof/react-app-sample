import React from "react";
import ReactDOM from "react-dom";
import SampleComponent from "./component/SampleConponent";
import Square from "./component/Square";
import Input from "./component/InputSample";
import Clock from "./component/Clock";
import LoggingButton from "./component/LoggingButton";
import Mailbox from "./component/Mailbox";
import PageWithWarning from "./component/PageWithWarning";

const Index = () => {
    return <div>
        <h1>React is awesome!</h1>
        <Square value="From Tag"/>
        <LoggingButton onClick={() => confirm("Are you sure?")}/>
    </div>;
};

const App = (props) => {
    return (
        <div>
            <Index/>
            <SampleComponent name={props.author.name}/>
        </div>
    );
};

const book = {
    name: "My Apocalypse",
    author: {
        name: "Oleg Blok",
        birthday: "10/21/1962"
    }
};

const secondAuthor = {
    name: "Nickola"
};

const messages = ["One", "Two", "Three"];
ReactDOM.render(<Mailbox unreadMessages={{name: 12}}/>, document.getElementById("condition-render"));

ReactDOM.render(<Clock/>, document.getElementById("clock"));
ReactDOM.render(<Input/>, document.getElementById("input"));
ReactDOM.render(<App author={book.author}/>, document.getElementById("react1"));
ReactDOM.render(<App author={secondAuthor}/>, document.getElementById("react2"));

ReactDOM.render(<PageWithWarning />, document.getElementById("page_with_warning"));