import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  image: {
    height: 200,
    aspectRatio: 1,
    borderRadius: 100,
    alignSelf: 'center',
    marginTop: 15,
  },
  name: {
    fontSize: 24,
    lineHeight: 32,
    color: '#10142D',
    textAlign: 'center',
    marginTop: 15,
  },
  fieldsContainer: {
    flexDirection: 'row',
  },
  field: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 200,
    marginHorizontal: 5,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.17,
    shadowRadius: 3.05,
    elevation: 4,
  },
  fieldTitle: {
    fontSize: 18,
    lineHeight: 22,
    color: '#10142D',
    width: 90,
  },
  link: {
    fontSize: 18,
    lineHeight: 22,
    color: 'blue',
  },
  fieldImage: {
    width: 30,
    aspectRatio: 1,
    marginRight: 10,
  },
});
