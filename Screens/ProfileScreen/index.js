import {
  SafeAreaView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
  FlatList,
  ToastAndroid,
} from 'react-native';
import React, { useEffect, useState, useRef, useMemo } from 'react';
import styles from './style';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Colors } from '../../constants/colors';
import RBSheet from 'react-native-raw-bottom-sheet';
import { ActivityIndicator } from 'react-native';
import { Image } from 'react-native';
import RadioGroup from 'react-native-radio-buttons-group';
import CommonButton from '../../commons/commonButton';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';

const ProfileScreen = ({ navigation }) => {
  const [userDetails, setUserDetails] = useState({});



  useEffect(() => {
    getUserDetails();
  }, []);



  const getUserDetails = async () => {
    const userDetails = await AsyncStorage.getItem('userDetails');
    console.log('userDetails-=-=-=>>', userDetails)
    setUserDetails(JSON.parse(userDetails));
  };

  const renderLogout = async () => {
    const isSignedIn = await GoogleSignin.isSignedIn();
    console.log('info-=-=-=>>', isSignedIn)
    if (isSignedIn) {
      await GoogleSignin.signOut()
      AsyncStorage.clear()
      navigation.replace('LoginScreen')
      ToastAndroid.show('Logout successfully', 2);
    } else {
      AsyncStorage.clear()
      navigation.replace('LoginScreen')
      ToastAndroid.show('Logout successfully', 2);
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={Colors.borderColor} />
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => { navigation.goBack() }}
          style={{ marginLeft: 5 }} >
          <AntDesign
            name='arrowleft'
            size={30}
            color={Colors.white}
          />
        </TouchableOpacity>
        <View style={{ flex: 0.9, alignItems: 'center' }}>
          <Text style={styles.titleText}>Profile</Text>
        </View>
      </View>

      <View style={styles.listContainer}>


        <View style={styles.listView}>
          <View style={{ paddingHorizontal: 10, paddingVertical: 10 }}>
            <View style={styles.profileViewContainer}>
              <View style={{ flex: 0.4, }}>
                <Text style={styles.profileTextStyle}>Username : </Text>
              </View>
              <View style={{ flex: 1, }}>
                <Text style={styles.profileTextStyle}>{userDetails.userName}</Text>
              </View>
            </View>
            <View style={styles.profileViewContainer}>
              <View style={{ flex: 0.4, }}>
                <Text style={styles.profileTextStyle}>Email : </Text>
              </View>
              <View style={{ flex: 1, }}>
                <Text style={styles.profileTextStyle}>{userDetails.email}</Text>
              </View>
            </View>

          </View>
        </View>
      </View>

      <View style={{ flex: 0.2 }}>
        <CommonButton
          onPress={() => { renderLogout() }}
          text={'Logout'}
          buttonStyle={styles.buttonStyle}
        />
      </View>
    </SafeAreaView>
  );
};

export default ProfileScreen;
