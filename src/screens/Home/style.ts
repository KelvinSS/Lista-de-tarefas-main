import { Platform, StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  container: {
    fontStyle: 'normal',
    flex: 1,
    backgroundColor: '#0D0D0D',
    alignItems: 'center',
    flexDirection: 'column',
  },

  titulo: {
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
    flex: 1,
    width: '50%',
    alignSelf: 'center',
    paddingTop: Platform.OS == 'ios' ? 40 : 0,
    minHeight: 30,
  },

  rocketIcon: {
    flex: 1,
  },

  image: {
    flex: 1,
    width: '90%'
  },

  containerText: {
    flex: 2,
    flexDirection: 'row',
    alignItems: 'flex-start',
  },

  textTitle1: {
    color: '#4EA8DE',
    fontSize: 70,
  },

  textTitle2: {
    color: '#8284FA',
    fontSize: 70,
  },

  form: {
    flexDirection: 'row',
    marginTop: 20,
    paddingLeft: 20,
    flex: 1,
  },

  input: {
    backgroundColor: '#262626',
    height: 50,
    borderRadius: 5,
    color: '#F2F2F2',
    padding: 16,
    fontSize: 16,
    marginRight: 4,
    flexGrow: 5,
    maxWidth: 265
  },

  divButton: {
    flexGrow: 1,
    alignContent: 'flex-end'
  },

  button: {
    width: 50,
    height: 50,
    borderRadius: 5,
    backgroundColor: '#1E6F9F',
    alignItems: 'center',
    justifyContent: 'center'
  },

  buttonText: {
    color: '#fff',
  },

  containerList: {
    width: '100%',
    flex: 8
  },

  menu: {
    flexDirection: 'row',
    paddingTop: 10,
  },

  created: {
    color: '#4EA8DE',
    alignItems: 'flex-start',
    flexGrow: 1,
    padding: 10,
    paddingLeft: 20,
    
  },

  completed: {
    color: '#8284FA',
    alignItems: 'flex-end',
    padding: 10,
    paddingRight: 20,
  },

  list: {
    flex: 1,
    marginTop: 0,
    width: '100%',
    paddingLeft: 7
  },

  listEmpty: {
    color: '#6b6b6b',
    alignItems: 'center',
  },

  emptyTextTitle: {
    color: '#808080',
    fontWeight: "700",
    paddingTop: 15,
  },

  emptyText: {
    color: '#808080',
  },


})
