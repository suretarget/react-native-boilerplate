import React, { Component } from "react";
import {
   View,
   Text,
   StyleSheet,
   Image
} from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import { Card, CardItem, Thumbnail, Body, Left, Right, Button } from 'native-base'

class CardComponent extends Component {

   render() {

       return (
           <Card>
               <CardItem>
                   <Left>
                      <Thumbnail source={{uri: 'http://prasanth-dev.herokuapp.com/114ee5a0a9a750f499f901931193745f.jpg'}} />
                       <Body>
                           <Text>Prasanth Lalapeta </Text>
                           <Text note>Jan 9, 2019</Text>
                       </Body>
                   </Left>
               </CardItem>
               <CardItem cardBody>
                 <Image source={{uri: 'https://cdn0.tnwcdn.com/wp-content/blogs.dir/1/files/2017/08/Samsung-Galaxy-S8-S8-14-of-17-796x448.jpg'}} style={{ height: 200, width: null, flex: 1 }} />
               </CardItem>
               <CardItem style={{ height: 45 }}>
                   <Left>
                       <Button transparent>
                           <Icon name="md-heart" size={20} />
                       </Button>
                       <Button transparent>
                           <Icon name="md-chatbubbles" size={20} />
                       </Button>
                       <Button transparent>
                           <Icon name="md-share" size={20} />
                       </Button>
                   </Left>
               </CardItem>
                <CardItem style={{ height: 20 }}>
                    <Text>10 Likes</Text>
                </CardItem>
               <CardItem>
                   <Body>
                       <Text>
                           <Text style={{ fontWeight: "900" }}>Prasanth
                           </Text>
                           Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
                       </Text>
                   </Body>
               </CardItem>
           </Card>
       );
   }
}
export default CardComponent;

const styles = StyleSheet.create({
   container: {
       flex: 1,
       alignItems: 'center',
       justifyContent: 'center'
   }
});
