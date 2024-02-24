import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: "#000000"
    },
    containerLogo:{
        flex:2,
        backgroundColor:"#000000",
        justifyContent:"center",
        alignItems:"center"
    },
    containerForm:{
        flex:1,
        backgroundColor:"#FFF",
        borderTopLeftRadius:25,
        borderTopRightRadius:25,
        paddingStart:'5%',
        paddingEnd:'5%',
    },
    title:{
       fontSize:24,
       fontWeight:'bold',
       marginTop:30,
       marginBottom:5
    },
    text:{
        color:'#a1a1a1',
    },
    button:{
        position:'absolute',
        backgroundColor:'#000000',
        borderRadius:50,
        paddingVertical: 8,
        width:'60%',
        alignSelf:'center',
        bottom:'15%',
        alignItems:'center',
        justifyContent:'center'
    },
    buttonText:{
        fontSize:18,
        color:'#FFF',
        fontWeight:'bold'
    }
})

