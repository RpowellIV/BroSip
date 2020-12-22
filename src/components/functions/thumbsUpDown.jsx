import { React, useEffect, useState } from 'react';
import {connect} from 'react-redux'
import { likedReview, mostLiked } from '../../redux/actions'

// class ThumbsUpDown extends React.Component {
    
//     componentDidMount () {
//         console.log('Thumbs Up Mounted')
//     }

//     state = {
//         likeOrDislike: ''
//     }

//     const [addMovie, setAddMovie] = useState('') 

//     // boolean
//     HandleClick = (value) => {
//         this.setState({likeOrDislike: value})
        
//     }
    



//     render () {

const ThumbsUpDown = props => {

    const [likeOrDislike, setlikeOrDislike] = useState('')
    const [likeCount, setLikeCount] = useState(0)
    const [dislikeCount, setDislikeCount] = useState(0)
    const [currentMovie, setCurrentMovie] = useState('')
    

    const handleClick = (e, value) => {
        e.preventDefault();
        props.likedReview(value);
        setlikeOrDislike(value);
        setCurrentMovie(props.movie);
        props.mostLiked(likeCount, dislikeCount, currentMovie)
        if (value === 'like') setLikeCount(likeCount+1);
        if (value === 'dislike') setDislikeCount(dislikeCount+1);
    }

        return (
            <div className="thumbs">
                <i className="fa fa-2x">WHAT DID YOU THINK OF THE REVIEW?</i><br/>
                <i className="fa fa-2x">LIKES: {likeCount}  DISLIKES: {dislikeCount}</i>
                <br/>
                <div className="like grow">
                    <i className={`fa fa-thumbs-up fa-3x like ${likeOrDislike === 'like' ?  'active': ''}`} aria-hidden="true" onClick={(e) => handleClick(e, 'like')} name="like" value="like"></i>
                </div>

                <div className="dislike grow">
                    <i className={`fa fa-thumbs-down fa-3x like ${likeOrDislike === 'dislike' ?  'active': ''}`} aria-hidden="true" onClick={(e) => handleClick(e, 'dislike')} name="dislike" value="dislike"></i>
                </div>
            </div>
            );
        }


const mapDispatchToProps = dispatch => ({
    likedReview: likeOrDislike => dispatch(likedReview(likeOrDislike)),
    mostLiked: (likeCount, dislikeCount, currentMovie) => dispatch(mostLiked(likeCount, dislikeCount, currentMovie))
})

const mapStateToProps = state => ({
    liked: state.likedReview.liked,
    like: state.likeCount.likeIt,
    dislike: state.likeCount.dislikeIt,
    movie: state.likeCount.movie
})

export default connect( null, mapDispatchToProps )(ThumbsUpDown);






















// import { View, Text, TouchableOpacity } from 'react-native';
// import Icon from 'react-native-vector-icons/Feather';


// export default class ThumbsUpDown extends PureComponent {

//     constructor(props){
//         super(props);
//     }

//     render(){
//         return(
//             <View style={this.props.style}>
//                 {
//                     (this.props.readOnlyPositive)?
//                         (<TouchableOpacity disabled={true} style={[{flexDirection:"row",alignItems:"center"},this.props.buttonStyle]} onPress={this.props.onPositivePress}>
//                             {this.props.positiveIconDone}
//                         </TouchableOpacity>) :
//                         (<TouchableOpacity disabled={this.props.readonly} style={[{flexDirection:"row",alignItems:"center"},this.props.buttonStyle]} onPress={this.props.onPositivePress}>
//                             {this.props.positiveIcon}
//                         </TouchableOpacity>)
//                 }
//                 <Text style={[this.props.numbersStyle,{marginRight:this.props.spacing}]}>{this.props.positiveNumber}</Text>
//                 {
//                     (this.props.readOnlyNegative)?
//                         (<TouchableOpacity disabled={true} style={[{flexDirection:"row",alignItems:"center"},this.props.buttonStyle]} onPress={this.props.onPositivePress}>
//                             {this.props.negativeIconDone}
//                         </TouchableOpacity>) :
//                         (<TouchableOpacity disabled={this.props.readonly} style={[{flexDirection:"row",alignItems:"center"},this.props.buttonStyle]} onPress={this.props.onPositivePress}>
//                             {this.props.negativeIcon}
//                         </TouchableOpacity>)
//                 }
//                 <Text style={this.props.numbersStyle}>{this.props.negativeNumber}</Text>
//             </View>
//         );
//     }
// }

// ThumbsUpDown.defaultProps = {
//     readonly: false,
//     readOnlyPositive: false,
//     readOnlyNegative: false,
//     style: {flexDirection:"row",alignItems:"center",justifyItems:"center",padding:5},
//     buttonStyle: {padding:8,alignSelf:"flex-start"},
//     spacing:10,
//     positiveIcon: <Icon name="thumbs-up" size={18} color="#444"/>,
//     positiveIconDone: <Icon name="thumbs-up" size={18} color="#FFEB3B"/>,
//     onPositivePress: () => {},
//     positiveNumber: 0,
//     negativeIcon: <Icon name="thumbs-down" size={18} color="#444"/>,
//     negativeIconDone: <Icon name="thumbs-down" size={18} color="#FFEB3B"/>,
//     onNegativePress: () => {},
//     negativeNumber: 0,
//     numbersStyle: {fontSize:12,color:"#444",padding:3}
// }