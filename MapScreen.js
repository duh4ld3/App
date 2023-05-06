import React from "react";































const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: Constants.statusBarHeight,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: 20,
    },
    
    title: {
      fontSize: 28,
      fontWeight: 'bold',
      color: Colors.secondary,
      textAlign: 'center',
      marginVertical: 20,
    },
    description: {
      fontSize: 16,
      color: '#666',
      textAlign: 'center',
      marginBottom: 30,
    },
    buttonsContainer: {
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop:80
    },
    button: {
      backgroundColor: Colors.success,
      paddingVertical: 15,
      paddingHorizontal: 25,
      borderRadius: 10,
      marginHorizontal: 5,
    },
    buttonText: {
      color: Colors.dark,
      fontSize: 16,
      fontWeight: 'bold',
    },
  });

export default MapScreen;
