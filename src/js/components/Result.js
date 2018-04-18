/*global React:true pad0:true*/
/*eslint no-undef: "error"*/
/*eslint-disable no-unused-vars*/
class Result extends React.Component {
    static PropTypes = {
        item: React.PropTypes.object.isRequired
    }
    render() {
        return (
            <li>
                {pad0(this.props.item.minutes)}:
                {pad0(this.props.item.seconds)}.
                {pad0(this.props.item.miliseconds)}
            </li>
        );
    }
}
