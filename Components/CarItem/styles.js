import { StyleSheet }   from "react-native";

const styles = StyleSheet.create({
    carContainer:{
      width:'100%',
      height:'100%'
    },
    titles:{
      alignItems:'center',
      marginTop:'30%',
      width:'100%'
    },
    title:{
      fontSize:40,
      fontWeight:'500'
    },
    subTitle:{
      fontSize:16,
      color:'#5c5e62'
    },
    image:{
      width:'100%',
      height:'100%',
      resizeMode:'cover', // how resize if pic do not fit to the screen 'cover' iterps, uzdengs visa, 'contain' rodis visa pav
      position:'absolute' // kad nustumptu i gala
    }
  });

export default styles  