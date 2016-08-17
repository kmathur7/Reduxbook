import React, {Component} from 'react';
import postItem from '../common/post_item';

class timeLine extends Component {
    render() {
        return (
            <div>
                {this.props.posts.map((post,i) => <postItem {...this.props} key={i} i={i} post={post} />)}
            </div>
        );
    }
}

export default timeLine;