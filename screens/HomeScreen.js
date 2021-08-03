import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  FlatList,
  ImageBackground,
} from 'react-native';
import db from '../config';
import firebase from 'firebase';
import { Card, Header, Icon } from 'react-native-elements';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default class HomeScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      userId: firebase.auth().currentUser.email,
      userName: '',
    };
    this.requestRef = null;
  }

  getDonorDetails = (donorId) => {
    db.collection('users')
      .where('email_id', '==', this.state.userId)
      .get()
      .then((snapshot) => {
        snapshot.forEach((doc) => {
          this.setState({
            userName: doc.data().first_and_last_name,
          });
        });
      });
  };

  componentDidMount() {
    this.getDonorDetails();
  }

  render() {
    return (
      <SafeAreaProvider>
        <ImageBackground
          source={require('../assets/homebg.png')}
          style={{ width: '100%', height: '100%' }}>
          <View style={styles.container}>
            <ScrollView>
              <Header
                leftComponent={
                  <Icon
                    name="close"
                    type="antdesign"
                    color="#000"
                    onPress={() => {}}
                  />
                }
                centerComponent={{
                  text: 'Home',
                  style: {
                    color: '#000',
                    fontSize: 18,
                    fontWeight: 'bold',
                    fontFamily: 'verdana',
                  },
                }}
                backgroundColor="#ffffff70"
              />
   <Text style={{
                        backgroundColor: "#00000000",
                        borderWidth: 0,
                        borderColor: '#00000000',
                        textAlign:'center',
                        justifyContent: 'center',
                      }}>Hello!!!!!, {this.state.userName}</Text>
              <Card>
                  <Text>Customization Tips</Text>
                <ScrollView
                  style={{
                  }}
                  horizontal={true}
                  showsVerticalScrollIndicator={false}
                  showsHorizontalScrollIndicator={false}>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <Card
                      containerStyle={{
                        padding: 25,
                        width: 100,
                        height: 100,
                        justifyContent: 'center',
                        borderRadius: 15,
                      }}>
                      <Icon name="home" type="antdesign" />
                      <Text
                        style={{
                          fontSize: 13,
                          marginTop: 6,
                          textAlign: 'center',
                        }}>
                        Living Room
                      </Text>
                    </Card>
                    <Card
                      containerStyle={{
                        padding: 25,
                        width: 100,
                        height: 100,
                        justifyContent: 'center',
                        borderRadius: 15,
                      }}>
                      <Icon name="fork-knife" type="fontawesome" />
                      <Text
                        style={{
                          fontSize: 13,
                          marginTop: 6,
                          textAlign: 'center',
                        }}>
                        Dining Room
                      </Text>
                    </Card>
                    <Card
                      containerStyle={{
                        padding: 25,
                        width: 100,
                        height: 100,
                        justifyContent: 'center',
                        borderRadius: 15,
                      }}>
                      <Icon name="bed-outline" type="ionicons" />
                      <Text
                        style={{
                          fontSize: 13,
                          marginTop: 6,
                          textAlign: 'center',
                        }}>
                        Bedroom
                      </Text>
                    </Card>
                    <Card
                      containerStyle={{
                        padding: 25,
                        width: 100,
                        height: 100,
                        justifyContent: 'center',
                        borderRadius: 15,
                      }}>
                      <Icon name="" />
                      <Text
                        style={{
                          fontSize: 13,
                          marginTop: 6,
                          textAlign: 'center',
                        }}>
                        Bathroom
                      </Text>
                    </Card>
                  </View>
                </ScrollView>
              </Card>
              <View
                style={{
                  flexDirection: 'row',
                }}>
                <Card
                  style={{
                    width: 250,
                  }}>
                  <Text>Recently Created Rooms</Text>
                  {}
                </Card>
                <Card>
                  <Text>Community Status</Text>
                </Card>
              </View>
            </ScrollView>
          </View>
        </ImageBackground>
      </SafeAreaProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  subtitle: {
    flex: 0.9,
    fontSize: 18,
    textAlign: 'center',
    alignSelf: 'center',
    marginTop: 160,
    fontFamily: 'monserrat',
  },
});