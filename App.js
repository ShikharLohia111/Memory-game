import React from 'react';
import { StyleSheet, View, Button,Text,FlatList,TouchableOpacity } from 'react-native';

import Card from './components/Card';


export default class App extends React.Component {

  constructor(props) {
    super(props);
   
    this.state = {
      current_selection: [],
      selected_pairs: [],
      allCards:[],
      score: 0,
      try:0,
      select:true
    }}
    componentDidMount(){
      this.shuffle()
    }

    shuffle=()=>{
      const cards=[
        { id:1,
          value:'A',
          visible:true,
          show:'',
          disabled:false
        },
        { id:2,
          value:'B',
          visible:true,
          show:'',
          disabled:false
        },
        { id:3,
          value:'C',
          visible:true,
          show:'',
          disabled:false
        },
        { id:4,
          value:'D',
          visible:true,
          show:'',
          disabled:false
        },
        { id:5,
          value:'E',
          visible:true,
          show:'',
          disabled:false
        },
        { id:6,
          value:'F',
          visible:true,
          show:'',
          disabled:false
        },
        { id:7,
          value:'G',
          visible:true,
          show:'',
          disabled:false
        }, 
        { id:8,
          value:'H',
          visible:true,
          show:'',
          disabled:false
        },
        { id:9,
          value:'A',
          visible:true,
          show:'',
          disabled:false
        },
        { id:10,
          value:'B',
          visible:true,
          show:'',
          disabled:false
        },
        { id:11,
          value:'C',
          visible:true,
          show:'',
          disabled:false
        },
        { id:12,
          value:'D',
          visible:true,
          show:'',
          disabled:false
        },
        { id:13,
          value:'E',
          visible:true,
          show:'',
          disabled:false
        },
        { id:14,
          value:'F',
          visible:true,
          show:'',
          disabled:false
        },
        { id:15,
          value:'G',
          visible:true,
          show:'',
          disabled:false
        }, 
        { id:16,
          value:'H',
          visible:true,
          show:'',
          disabled:false
        },
  
      ] 
      for (let i=cards.length-1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = cards[i];
        cards[i] = cards[j];
        cards[j] = temp;
        const tempid=cards[i].id;
        cards[i].id = cards[j].id;
        cards[j].id = tempid;

      }
      this.setState({
        allCards:cards
      })
    }
  

  cardPress=(val)=>{
    console.log('value',val.value,this.state.current_selection.value,this.state.current_selection.length)
    console.log(this.state.allCards,'hello',val)
    let trial=[...this.state.allCards]
    console.log('trial')
    
    if(this.state.select==true)
    {
    trial[val.id-1].show=trial[val.id-1].value
    if(this.state.current_selection.value && this.state.current_selection.value==val.value)
    { 
      trial[val.id-1].visible=false;
      trial[this.state.current_selection.id-1].visible=false

      this.setState({
        score:this.state.score+1,
        try:this.state.try+1,

        current_selection:[],

      })
    }
    else
    if(this.state.current_selection.value && this.state.current_selection.valu!=val.value)
    {  this.setState({
      select:false
    })
      trial[this.state.current_selection.id-1].disabled=false
      setTimeout(()=>{console.log(this,val,'yahi')
        trial[val.id-1].show='';
      trial[this.state.current_selection.id-1].show=''
      console.log(this,val,'yahi ke bad')
      this.setState({
        allCards:trial,
        current_selection:[],
        select:true
      })
    }, 100)
      this.setState({
        try:this.state.try+1
      })
    }
    else
    { trial[val.id-1].disabled=true
    this.setState({
      current_selection:val,
    })
    }
  }
  }
  reset=()=>{
    let trial=[...this.state.allCards]
    trial.forEach((element, index) => {
      trial[index].visible = true;
      trial[index].disabled = false;
      trial[index].show=''
    });
    this.setState({
      score:0
      ,try:0,
      current_selection:[],
      selected_pairs:[],
      allCards:trial
    })
    this.shuffle();

    
  }

  render() {
    
    return (
      <View style={styles.container}>
        <View style={styles.header}>
				<Text style={styles.header_text}>MemoryGame</Text>
			  </View> 
        <View>
        <FlatList
            data={ this.state.allCards }
            renderItem={ ({item}) =>
            <Card isvisible={item.visible} isdisabled={item.disabled} val={item.show} pressed={()=>this.cardPress(item)}/>}
            numColumns={4}
         />
         </View>
        <View style={styles.score_container}>
          <Text>Matches formed</Text>
				<Text style={styles.score}>{this.state.score}</Text>
			  </View>
         <View style={styles.score_container}>
         <Text>Number of tries</Text>
				<Text style={styles.score}>{this.state.try}</Text>
			  </View>
        <Button
          onPress={()=>this.reset()}
          title="Reset"
          color="#008CFA" 
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#fff'
  },
  row: {
    flex: 1,
    flexDirection: 'row'
  },
  body: {
    flex: 18,
    justifyContent: 'space-between',
    padding: 10,
    marginTop: 20
  },
  header: {
		flex: 1,
		flexDirection: 'column',
		alignSelf: 'stretch',
		paddingTop: 20,
		paddingBottom: 5,
		backgroundColor: '#f3f3f3'
	},
	header_text: {
		fontWeight: 'bold',
		fontSize: 17,
		textAlign: 'center'
	},score_container: {
		flex: 1,
		alignItems: 'center',
		padding: 10,
	},
	score: {
		fontSize: 40,
		fontWeight: 'bold'
	}
});
