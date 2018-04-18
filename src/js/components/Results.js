/*global React:true*/
/*eslint no-undef: "error"*/
/*eslint-disable no-unused-vars*/
class Results extends React.Component {
    static PropTypes = {
        results: React.PropTypes.array.isRequired
    }
    render() {
        const results = this.props.results.map((result, index) =>
            <Result key={index} item={result} />
        );
        return (
            <ul className='results'>
                {results}
            </ul>
        );
    }
}
