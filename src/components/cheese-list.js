import React from 'react';
import {connect} from 'react-redux';
import {fetchCheeses} from '../actions/cheese';

export class Cheeses extends React.Component {
    componentDidMount() {
        this.props.dispatch(fetchCheeses());
    }
    render() {
        return (
            <ul className="cheese-list">
                {this.props.cheeses.map((cheese, index) =>
                    <li key={index}>
                        {cheese}
                    </li>
                )}
            </ul>
        );
    }
}

const mapStateToProps = state => ({
    cheeses: state.cheeses,
    loading: state.loading,
    error: state.error
});

export default connect(mapStateToProps)(Cheeses);
