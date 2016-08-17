import React, {Component} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../../actions/actionCreators';
import postItem from '../common/post_item';

class homePage extends Component {

    render() {
        const results = this.props.posts.map((post,i) => {
            return (
                <postItem post={post} key={i}/>
            );
        });
        return (
            <div>
                HomePage
                {results}
                
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        posts: state.posts
    };
}

function mapDispatchToProps(dispatch){
    return {
        actions: bindActionCreators(actionCreators,dispatch)
    };

}

export default connect(mapStateToProps,mapDispatchToProps)(homePage);