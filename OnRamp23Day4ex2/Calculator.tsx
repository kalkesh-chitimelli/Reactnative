import React, { useState } from "react";
import { Button, FlatList, SafeAreaView, StyleSheet, Text,TextInput,View,TouchableOpacity } from "react-native";

interface Icalculator{
    addFunction : Function,
    subFunction : Function,
    multiplyFunction : Function,
    divFunction : Function

}

const keypad = [
    {value : '1'},{value : '2'},{value : '3'},{value : '4'},{value : '5'},{value : '6'},
    {value : '7'},{value : '8'},{value : '9'},{value : '+'},{value:'0'},{value : '-'},{value : '/'},{value : '*'},
    {value : '='},{value:'Back'},{value : 'Reset'}
]




function Calculator(props: Icalculator){


    const [currentValue, setCurrentValue] = useState<string>('');
    //const [disableValue, setDisableValue] = useState<Boolean>(false);
    const [firstOperand, setFirstOperand] = useState<string>('')
    const [result,setResult] = useState<Number>(0);
    const [operator,setOperator] = useState<string>('')

    const setValue=(value: string)=> {
       if (value === 'Reset')
       {
        setCurrentValue('');
        setResult(0);
       }

       else if (value === 'Back')
       {
        setCurrentValue(prev => prev.slice(0,prev.length-1));
       }

       else if(value === '+' || value === '-' || value === '*' || value ==='/')
       {

            setFirstOperand(currentValue);
            setOperator(value);
            setCurrentValue('');

       } 
       else if(value === '=')
       {

        switch(operator){

        case '+' :{
            setResult(props.addFunction(Number(firstOperand),Number(currentValue)));
            setFirstOperand('');
            setCurrentValue('');
            break;
        }
        case '-' :{
            setResult(props.subFunction(Number(firstOperand),Number(currentValue)));
            setFirstOperand('');
            setCurrentValue('');
            break;
        }
        case '*' :{
            setResult(props.multiplyFunction(Number(firstOperand),Number(currentValue)));
            setFirstOperand('');
            setCurrentValue('');
            break;
        }
        case '/' :{
            setResult(props.divFunction(Number(firstOperand),Number(currentValue)));
            setFirstOperand('');
            setCurrentValue('');
            break;
        }
        }

        // setResult(Number(firstOperand) + Number(currentValue));
        // setFirstOperand('');

       }
       
       else{
        setCurrentValue(prev => prev+value);
       }
    
    }
    
    

    const Item = ({value}: ItemProps) => (
        <View style={styles.item}>
            <TouchableOpacity style={styles.button}   onPress={()=>setValue(value)}>
                <Text style={styles.value} >{value}</Text>
            </TouchableOpacity>
        </View>
      );
    
    
    type ItemProps = {value: string};

    

    return (
        
        <View >
            <Text style={styles.title}>Calculator</Text>
            <Text style={styles.output}>Disp: {currentValue}</Text>
            <Text style={styles.output}>Result:{String(result)}</Text>
            
            <FlatList
                data={keypad}
                renderItem={({item}) => <Item value={item.value} />}
                horizontal={false}
                numColumns={3}
            
            />
            
        </View>
        
    );
}

const styles = StyleSheet.create({
    item: {
      padding: 15,
      marginVertical: 4,
      marginHorizontal: 25,
      alignItems: 'center'
      
    },
    value: {
      fontSize: 25,
      
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        padding: 10,
    },
    output: {
        color:'red',
        backgroundColor:'pink',
        fontWeight:'bold',
        fontSize:20
    },
    title: {
        backgroundColor:'blue',
        fontWeight:'bold',
        color:'white',
        fontSize:25
    }
      
    
  });

export default Calculator;


