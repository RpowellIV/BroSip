import React from 'react';

class ThumbsUpDown extends React.Component {
    
    componentDidMount () {
        console.log('Thumbs Up Mounted')
    }

    state = {
        likeOrDislike: ''
    }


    // boolean
    HandleClick = (value) => {
        this.setState({likeOrDislike: value})
    }
    



    render () {
        return (
            <div className="thumbs">
                <div className="like grow">
                    <i className={`fa fa-thumbs-up fa-3x like ${this.state.likeOrDislike === 'like' ?  'active': ''}`} aria-hidden="true" onClick={() => this.HandleClick('like')} value="like"></i>
                </div>

                <div className="dislike grow">
                    <i className={`fa fa-thumbs-down fa-3x like ${this.state.likeOrDislike === 'dislike' ?  'active': ''}`} aria-hidden="true" onClick={() => this.HandleClick('dislike')} value="dislike"></i>
                </div>
            </div>
            );
        }




}

export default ThumbsUpDown;






















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