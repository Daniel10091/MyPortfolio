import { StatusBar } from "expo-status-bar"
import { StyleSheet } from "react-native"
import COLORS from "../../constants/Theme"

// const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight : 20

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    padding: 15,
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 10,
    marginTop: 8,
  },
  profileName: {
    marginTop: 20,
    fontSize: 20,
    fontWeight: 'bold',
    color: COLORS.White,
  },
  showProfile: {
    marginTop: 10,
  },
  buttonLabel: {
    color: COLORS.White,
  },
  navigation: {
    width: '53%',
    flexGrow: 1,
    alignItems: 'flex-start',
    marginTop: 50,
  },
  navItem: {
    width: '100%',
    marginTop: 15,
  },
  itemContent: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    paddingLeft: 13,
    paddingRight: 35,
    borderRadius: 8,
  },
  navIcon: {
    fontSize: 26,
  },
  navLabel: {
    marginLeft: 15,
    fontSize: 16,
    color: COLORS.SpaceCadet,
  },
  layout: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    flex: 1,
    flexGrow: 1,
    paddingHorizontal: 15,
    paddingVertical: 20,
    backgroundColor: COLORS.White,
  },
  menuButton: {
    borderRadius: 10,
  },
  buttonIcon: {
    fontSize: 26,
    color: COLORS.SpaceCadet
  },
  layoutTitle: {
    marginTop: 20,
    fontSize: 30,
    fontWeight: 'bold',
    color: COLORS.WinterSky,
  },
})

export default styles