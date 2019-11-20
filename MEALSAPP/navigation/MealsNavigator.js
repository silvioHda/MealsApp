 import {
 	createStackNavigator,
 	createAppContainer
 	} from 'react-navigation-stack';
 import {Platform} from 'react-native';
 import CategoriesScreen from '../screens/CategoriesScreen';
 import CategoryMealsScreen  from '../screens/CategoryMealsScreen';
 import MealDetailScreen  from '../screens/MealDetailScreen';
 import Colors from '../constants/Colors';

 const MealsNavigator = createStackNavigator({
 	Categories: { 
 		screen:CategoriesScreen,
 		
 	},
 	CategoryMeals:{
 		screen: CategoryMealsScreen,
 		
 	}, 
 	MealDetail: MealDetailScreen 
 },
 {
 	mode: 'modal',
 	defaultNavigationOptions: {
 		headerStyle:{
		backgroundColor: Platform.OS === 'android' ? Colors.primaryColor: ''
	},
	headerTintColor: Platform.OS === 'android' ? 'white': Colors.primaryColor,
	headerTitle: 'A screen'
 	}
 });

 export default  createAppContainer(MealsNavigator);