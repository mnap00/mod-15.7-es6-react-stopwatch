/*global React:true*/
/*eslint no-undef: "error"*/
/*eslint-disable no-unused-vars*/
class Button extends React.Component {
    static PropTypes = {
        item: React.PropTypes.object.isRequired
    }
    render() {
        return (
            <a
                id={this.props.item.id}
                className='button'
                onClick={this.props.item.action}
                href='#'
            >
                {this.props.item.btnName}
                {this.props.item.action}
            </a>
        );
    }
}
