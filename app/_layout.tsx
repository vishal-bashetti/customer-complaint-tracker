import '../global.css';

import { GestureHandlerRootView } from 'react-native-gesture-handler';
import App from './App';

import { AuthProvider } from '~/context/AuthProvider';

export default function RootLayout() {
  return (
    <AuthProvider>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <App />
        </GestureHandlerRootView>
    </AuthProvider>
  );
}
