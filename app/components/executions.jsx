const React = require('react');
const ReactDOM = require('react-dom');
const fetch = require('node-fetch')

class ExecutionsHeader extends React.Component {
    render() {
        return (
            <thead>
                <tr>
                    {this.props.headers.map((header, index) => 
                        <th key={index} scope="col">{header == 'id' ? '#' : header}</th>
                    )}
                </tr>
            </thead>
        );
    }
}

class ExecutionsBody extends React.Component {
    render() {
        return (
            <tbody>
                {this.props.rows.map((row, i) =>
                    <tr key={i}>
                        {Object.keys(row).map((k, j) =>
                            k == 'id' ? <th key={j} scope="row">{row[k]}</th> : <td key={j} >{row[k]}</td>
                        )}
                    </tr>
                )}
            </tbody>
        );
    }
}

class ExecutionsTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {data: {}};
    }

    UNSAFE_componentWillMount() {
        fetch('http://localhost:8000'.concat(this.props.match.url, '/'), {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                'Accept': 'application/json'
            }
        })
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    data: json,
                });
             });
    }

    handleClick() {
        console.log('1234');
    }

    render() {
        return (
            // <button type="button" class="btn btn-primary" onClick={this.handleClick}>Primary</button>
            <table className="table table-hover">
                {typeof(this.state.data.count) == "undefined" ? null : this.state.data.count > 0 ? <ExecutionsHeader headers={Object.keys(this.state.data.results[0])}/> : null}
                {typeof(this.state.data.results) == "undefined" ? null : <ExecutionsBody rows={this.state.data.results}/>}
            </table>
        );
    }
}

export default ExecutionsTable;