import React from "react";
import { TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Feather";

function Button(props){
	return (
		<TouchableOpacity>
			<Icon name={props.icon} size={25} />
		</TouchableOpacity>
	);
}

export default Button;
