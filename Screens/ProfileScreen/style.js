import { StyleSheet } from 'react-native';
import { Colors } from '../../constants/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    justifyContent: 'space-between',
  },
  header: {
    backgroundColor: Colors.borderColor,
    // paddingHorizontal: 10,
    paddingVertical: 15,
    flexDirection: 'row',
    alignItems: 'center'
    // justifyContent: 'space-between',
  },
  listContainer: {
    flex: 1,
    marginBottom: '3%',
    marginTop: 15,
  },
  listView: {
    borderRadius: 16,
    paddingVertical: 10,
    marginHorizontal: 15,
    marginBottom: 20,
  },
  profileViewContainer: {
    flexDirection: 'row',
    justifyContent: "center",
    alignItems: 'center',
    marginVertical: 5
  },
  profileTextStyle: {
    color: Colors.title,
    fontSize: 16
  },
  buttonStyle: {
    marginHorizontal: '10%',
    paddingVertical: '4%'
  },

  titleText: {
    // paddingHorizontal: 20,
    // marginBottom: 10,
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.white,
    // textAlign: 'center',
  },
});

export default styles;
