/*global React:true*/
/*eslint no-undef: "error"*/
/*eslint-disable no-unused-vars*/
class Controls extends React.Component {
    static PropTypes = {
        buttons: React.PropTypes.array.isRequired
    }
    render() {
        const buttons = this.props.buttons.map((button) =>
            <Button
                key={button.id}
                item={button}
            />
        );
        return (
            <nav className='controls'>
                {buttons}
            </nav>
        );
    }
}
