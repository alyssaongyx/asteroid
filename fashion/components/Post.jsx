import { StyleSheet, View, Image, Text } from "react-native";

function Avatar() {
    return (<View style={styles.avatarContainer}>
       <Image
       style={styles.avatar}   
       source={{uri: "https://gravatar.com/avatar/822ddbbdf5fad4208c8cc3a012a2d3dc?s=400&d=robohash&r=x"}} />
    </View>);
   
  }

  function MyCustomComponent({children}) {
    return (<View 
    style={{backgroundColor: "blue"}}>
        {children}
        </View>)
  }
  function Header({username}) {
    return (<MyCustomComponent style={styles.headerContainer}> 
      <Avatar />
      <Text>{username}</Text>
    </MyCustomComponent>)
  }

  export function Post(props) {
    const {username, image} = props;
    return (
      <View style={styles.postContainer}>
        <Header username={username}/>
        <Image
        style={styles.postImage} 
        source={{uri: image}}/>
      </View>
    );
  }

  const styles = StyleSheet.create({
    avatar:{
      width: 32,
      height: 32,
      borderRadius: 100 / 2,
      marginRight: 5,
      borderColor: 'red',
      borderWidth: 1,
    },
    headerContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    postContainer: {
      backgroundColor: 'grey',
    },
    postImage: {
      width: 200,
      height: 200,
    }
  });
