import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Sidebar from './screens/Sidebar';
import PostForSale from './screens/PostForSale';
import Offers from './screens/Offers';
import CropMSP from './screens/CropMSP';
import OngoingTransactions from './screens/OngoingTransactions';
import Complaints from './screens/Complaints';
import Entry from './screens/Entry';
import Signup from './screens/Signup';


const App = createStackNavigator({
  Sidebar: Sidebar,
  PostForSale: PostForSale,
  Offers: Offers,
  CropMSP: CropMSP,
  OGT: {
    screen: OngoingTransactions,
    navigationOptions: ({navigation}) => ({
      headerShown: false
    })

  },
  Complaints: Complaints,
  Entry: {
    screen: Entry,
    navigationOptions: ({navigation}) => ({
      headerShown: false
    })
  },
  Signup: {
    screen: Signup,
    navigationOptions: ({navigation}) => ({
      headerShown: false
    })
  }

},{
  initialRouteName: "Entry"
});

export default createAppContainer(App);