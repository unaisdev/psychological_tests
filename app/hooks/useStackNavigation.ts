import {NavigationScreens} from '@app/navigation';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export default function useStackNavigation() {
  const navigation =
    useNavigation<NativeStackNavigationProp<NavigationScreens>>();

  if (navigation === undefined) {
    throw new Error(
      "Couldn't find a navigation object. Is your component inside a screen in a navigator?",
    );
  }

  return navigation;
}
