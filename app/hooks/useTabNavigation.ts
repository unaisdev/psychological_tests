import {NavigationTabScreens} from '@app/navigation';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export default function useTabNavigation() {
  const navigation =
    useNavigation<NativeStackNavigationProp<NavigationTabScreens>>();

  if (navigation === undefined) {
    throw new Error(
      "Couldn't find a navigation object. Is your component inside a screen in a navigator?",
    );
  }

  return navigation;
}
