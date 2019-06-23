// @flow
import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
  container: {
    width: '95%',
    aspectRatio: 3 / 1,
    padding: '5rem',
    '@media ios': {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.5,
      shadowRadius: 2,
    },
    '@media android': {
      elevation: 5,
    },
    borderWidth: 1,
    borderColor: '$middleGray',
    backgroundColor: '$primaryWhite',
    borderRadius: 5,
    marginBottom: '5rem',
    alignSelf: 'center',
  },
  avatarContainer: {
    width: '20%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    width: '80%',
    height: '100%',
    justifyContent: 'center',
  },
  imageContainer: {
    width: '100%',
    height: '100%',
  },
  messageContainer: {
    width: '100%',
    height: '30%',
    justifyContent: 'center',
    paddingHorizontal: '5rem',
  },
  detailContainer: {
    width: '100%',
    height: '70%',
    flexDirection: 'row',
    paddingVertical: '10rem',
  },
  messageText: {
    fontSize: '14rem',
    fontWeight: '500',
    color: 'black',
  },
  detailText: {
    fontSize: '12rem',
    fontWeight: '400',
    color: 'black',
  },
});
