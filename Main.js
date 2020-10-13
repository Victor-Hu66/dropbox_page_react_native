
// import React, {useState} from 'react';
import React, {Component} from 'react';
import {
  SafeAreaView,
  Image,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Button
} from 'react-native';


// const App = (props) => {

//   const [counter, setCounter] = useState(0);

//   return(
//       <SafeAreaView>
//         <View>
//           <Text style={{fontSize:150}}>{counter}</Text>
//           <Button
//             title="up"
//             onPress={() =>  setCounter(counter + 1)}
//           />
//         </View>
//       </SafeAreaView>
//   )
// }

class App extends React.Component {
  constructor (props){
    super(props);

    this.state = {
      counter: 0
    }
  }

  render (){
    return(
    <SafeAreaView>
      <View>
        <Text style={{fontSize:150}}>{this.state.counter}</Text>
        <Button
          title="up"
          onPress={() =>  this.setState({counter: this.state.counter + 1 }) }
        />
      </View>
    </SafeAreaView>

    )
  }
}







export default App;