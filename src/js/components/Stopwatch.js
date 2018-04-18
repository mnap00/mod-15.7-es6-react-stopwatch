/*global React:true pad0:true*/
/*eslint no-undef: "error"*/
/*eslint-disable no-unused-vars*/
class Stopwatch extends React.Component {
    static propTypes = {
        minutes: React.PropTypes.number.isRequired,
        seconds: React.PropTypes.number.isRequired,
        miliseconds: React.PropTypes.number.isRequired
    }
    render() {
        return (
            <div className='stopwatch'>
                {pad0(this.props.minutes)}:
                {pad0(this.props.seconds)}.
                {pad0(this.props.miliseconds)}
            </div>
        );
    }
}
