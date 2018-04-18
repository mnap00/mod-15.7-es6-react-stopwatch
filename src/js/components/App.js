/*global React:true*/
/*eslint no-undef: 'error'*/
/*eslint-disable no-unused-vars*/
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            running: false,
            minutes: 0,
            seconds: 0,
            miliseconds: 0
        };
    }
    handleStart = (e) => {
        this.setState({
            running: true
        });
    }
    handleStop = (e) => {
        this.setState({
            running: false
        });
    }
    handleReset = (e) => {
        this.setState({
            minutes: 0,
            seconds: 0,
            miliseconds: 0
        });
    }
    componentDidMount() {
        this.watch = setInterval(
            () => this.step(),
            10
        );
    }
    componentWillUnmount() {
        clearInterval(this.watch);
    }
    step() {
        if(!this.state.running) return;
        this.calculate();
    }
    calculate() {
        this.setState((prevState, props) => ({
            miliseconds: prevState.miliseconds + 1
        }));
        if (this.state.miliseconds >= 100) {
            this.setState((prevState, props) => ({
                seconds: prevState.seconds + 1,
                miliseconds: 0
            }));
        }
        if (this.state.seconds >= 60) {
            this.setState((prevState, props) => ({
                minutes: prevState.minutes + 1,
                seconds: 0
            }));
        }
    }
    render() {
        return (
            <div className='app'>
                <Controls
                    buttons={BUTTONS}
                />
                <Stopwatch
                    minutes={this.state.minutes}
                    seconds={this.state.seconds}
                    miliseconds={this.state.miliseconds}
                />
                <Results />
            </div>
        );
    }
}

const BUTTONS = [
    {id: 'start', btnName: 'Start'},
    {id: 'stop', btnName: 'Stop'},
    {id: 'reset', btnName: 'Reset'},
    {id: 'save', btnName: 'Save'},
    {id: 'clear', btnName: 'Clear'}
];

function pad0(value) {
    let result = value.toString();
    if (result.length < 2) {
        result = '0' + result;
    }
    return result;
}
