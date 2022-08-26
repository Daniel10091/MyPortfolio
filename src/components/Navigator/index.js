import React, { useRef, useState } from 'react'
import { 
  View, 
  Text, 
  Image, 
  TouchableOpacity,
  Animated
} from 'react-native'
import styles from './styles'
import profile from '../../../assets/images/profile.png'
// import Ionicons from 'react-native-vector-icons/Ionicons'
import { AntDesign } from "@expo/vector-icons"
import COLORS from '../../constants/Theme'

export default function Navigator () {
  
  const TabButton = ( currentTab, setCurrentTab, icon, label ) => {
    return (
      <TouchableOpacity 
        style={styles.navItem} 
        onPress={ () => {
          if (label === "LogOut") {
            // Do your Stuff...
          } else {
            setCurrentTab(label)
            toggleMenu()
          }
        } } 
        activeOpacity={0.6}
      >
        <View style={[styles.itemContent, {backgroundColor: currentTab == label ? COLORS.White : 'transparent',}]}>
          <AntDesign name={icon} style={[styles.navIcon, {color: currentTab == label ? COLORS.BlueViolet : COLORS.White}]} />
          <Text style={[styles.navLabel, {color: currentTab == label ? COLORS.BlueViolet : COLORS.White}]}>{label}</Text>
        </View>
      </TouchableOpacity>
    )
  }

  const [currentTab, setCurrentTab] = useState("Home")
  // To get the current Status of menu...
  const [showMenu, setShowMenu] = useState(false)
  
  // Animated Properties...

  const offsetValue = useRef(new Animated.Value(0)).current
  // Scale initially must be One...
  const scaleValue = useRef(new Animated.Value(1)).current
  const closeButtonOffset = useRef(new Animated.Value(0)).current

  function toggleMenu () {
    // Do Actions Here...
    // Scaling the view...
    Animated.timing(scaleValue, {
      toValue: showMenu ? 1 : 0.88,
      duration: 300,
      useNativeDriver: true
    })
      .start()
  
    Animated.timing(offsetValue, {
      // Your Random Value...
      toValue: showMenu ? 0 : 230,
      duration: 300,
      useNativeDriver: true
    })
      .start()
  
    Animated.timing(closeButtonOffset, {
      // Your Random Value...
      toValue: !showMenu ? -10 : 0,
      duration: 300,
      useNativeDriver: true
    })
      .start()
  
    setShowMenu(!showMenu)
  }

  return (
    <View style={styles.container}>
      <Image source={profile} style={styles.profileImage} />
      <Text style={styles.profileName}>Jenna Ezarik</Text>
      
      <TouchableOpacity style={styles.showProfile} activeOpacity={0.6}>
        <Text style={styles.buttonLabel}>View Profile</Text>
      </TouchableOpacity>

      <View style={styles.navigation}>
        {
          // Tav Bar Buttons...
        }
        {TabButton( currentTab, setCurrentTab, "home", "Home" )}
        {TabButton( currentTab, setCurrentTab, "user", "About Me" )}
        {TabButton( currentTab, setCurrentTab, "barschart", "Skills" )}
        {TabButton( currentTab, setCurrentTab, "CodeSandbox", "Projects" )}
        {TabButton( currentTab, setCurrentTab, "book", "Education" )}
        {/* {TabButton( currentTab, setCurrentTab, "setting", "Settings" )} */}

      </View>

      <View>
        {TabButton( currentTab, setCurrentTab, "logout", "LogOut" )}
      </View>

      {
        // Over lay View...
      }
      
      <Animated.View style={[styles.layout, { 
        borderRadius: showMenu ? 15 : 0, 
        transform: [
          { scale: scaleValue }, 
          { translateX: offsetValue },{
            translateY: closeButtonOffset}
        ], 
      }]}>
      
        {
          // Menu Button...
        }
        
          <TouchableOpacity 
            style={styles.menuButton} 
            onPress={ () => toggleMenu() } 
            activeOpacity={0.6}
          >
            <AntDesign name={showMenu ? "close" : "menuunfold"} style={styles.buttonIcon} />
          </TouchableOpacity>
          <Text style={styles.layoutTitle}>{currentTab}</Text>
        {/* <Animated.View>
        </Animated.View> */}

      </Animated.View>

    </View>
  )
}