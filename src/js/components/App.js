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
            miliseconds: 0,
            results: []
        };
    }
    handleStart = () => {
        this.setState({
            running: true
        });
    }
    handleStop = () => {
        this.setState({
            running: false
        });
    }
    handleReset = () => {
        this.setState({
            minutes: 0,
            seconds: 0,
            miliseconds: 0
        });
    }
    handleSave = () => {
        let item = {
            minutes: this.state.minutes,
            seconds: this.state.seconds,
            miliseconds: this.state.miliseconds
        };
        this.setState({
            results: [...this.state.results, item]
        });
    }
    handleClear = () => {
        this.setState({
            results: []
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
        const BUTTONS = [
            {id: 'start', btnName: 'Start', action: () => {this.handleStart();}},
            {id: 'stop', btnName: 'Stop', action: () => {this.handleStop();}},
            {id: 'reset', btnName: 'Reset', action: () => {this.handleReset();}},
            {id: 'save', btnName: 'Save', action: () => {this.handleSave();}},
            {id: 'clear', btnName: 'Clear', action: () => {this.handleClear();}}
        ];
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
                <Results
                    results={this.state.results}
                />
            </div>
        );
    }
}


function pad0(value) {
    let result = value.toString();
    if (result.length < 2) {
        result = '0' + result;
    }
    return result;
}
