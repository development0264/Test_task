import {
  SafeAreaView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,

} from 'react-native';
import React from 'react';
import styles from './style';
import { Colors } from '../../constants/colors';
import AntDesign from 'react-native-vector-icons/AntDesign';
const ListScreen = ({ navigation, route }) => {
  const { item } = route.params
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={Colors.borderColor} />
      <View style={styles.header}>
        <TouchableOpacity onPress={() => { navigation.goBack() }}>
          <AntDesign
            name='arrowleft'
            size={30}
            color={Colors.white}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.listContainer}>
        <View style={styles.listView}>
          <TouchableOpacity>
            {item.title ?
              <Text style={styles.titleText}>{item.title}</Text>
              : null}
            {item.body ?
              <View style={{ paddingHorizontal: 15, paddingVertical: 10 }}>
                <Text style={styles.descTitle}>Description</Text>
                <Text style={styles.descSubTitle}>{item.body}</Text>
              </View>
              : null}
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ListScreen;
