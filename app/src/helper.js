import {Alert} from 'react-native';
const helper = {
	showAlert(title, msg){
    	Alert.alert(title, msg, [{text: 'Aceptar', onPress: () => console.log('Aceptar')}],
    	{cancelable: false })
  	},
  	money: (n) => {
    	var c = 0, 
	    d = ",", 
	    t = ".", 
	    s = n < 0 ? "-" : "", 
	    i = String(parseInt(n = Math.abs(Number(n) || 0).toFixed(c))), 
	    j: number = (j = i.length) > 3 ? j % 3 : 0;
	   return s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - parseInt(i)).toFixed(c).slice(2) : "");
    },
    handledErrors(error){
    	return Alert.alert("¡Vaya!, Hemos encontrado el siguiente error", error,
    		[{text: 'Aceptar'}]);
		},
		
	toFineDate(str){
		return str.substring(0, 10);
	},
	
	toFineHour(str){
		return str.substring(str.length, 11);
	},
}

export default helper;
