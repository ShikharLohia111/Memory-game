import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

export default class Card extends React.Component {
	
	constructor(props) {
		super(props);
	}

	render() {
		return (this.props.isvisible==true?
            <TouchableOpacity disabled={this.props.isdisabled} style={styles.card} onPress={()=>{
                this.props.pressed()
            }}>
			<View >
                <Text style={{fontSize:25}}>{this.props.val}</Text>
			</View>
            </TouchableOpacity>:
			<View style={styles.nocard} >
			</View>
		);
	}

	

}


const styles = StyleSheet.create({
	card: {
		alignItems: 'center',
        borderWidth:1,
        borderRadius:10,
        margin:10,
        height:58,
        width:58,
        
	},
    nocard: {
		alignItems: 'center',
        borderRadius:10,
        margin:10,
        height:58,
        width:58,
        
	},
	card_text: {
		fontSize: 50,
		fontWeight: 'bold'
	}
});