import { Text, View } from 'react-native';

import EditScreenInfo from '../../components/edit-screen-info';

const Page = () => {
  return (
    <View className={styles.container}>
      <Text className={styles.title}>Home ttt</Text>
      <View className={styles.separator} />
    </View>
  );
};

export default Page;

const styles = {
  container: `items-center flex-1 justify-center`,
  separator: `h-[1px] my-7 w-4/5 bg-gray-200`,
  title: `text-xl font-bold`,
};
