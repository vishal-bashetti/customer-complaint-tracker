import { Stack } from 'expo-router';
import { Formik } from 'formik';
import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import { useAuth } from '~/context/AuthProvider';

export interface ILoginFormValues {
  email: string;
  password: string;
}

const LoginScreen: React.FC = () => {
  const { setToken } = useAuth();
  const handleLogin = async (values: ILoginFormValues) => {
    try {
      setToken("something")
    } catch (err: any) {
      console.log(err);
      const status = err?.response?.status;
      const message = err?.response?.data?.message || 'An error occurred.';
      return { status, message };
    } 
  };

  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <Formik
        initialValues={{ email: 'demo', password: 'demo' }}
        onSubmit={handleLogin}
        validate={(values) => {
          const errors: Partial<ILoginFormValues> = {};
          if (!values.email) {
            errors.email = 'Email is required';
          }
          if (!values.password) {
            errors.password = 'Password is required';
          }
          return errors;
        }}>
        {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
          <View style={styles.container}>
            <Text>Logo</Text>
            {/* <SodepaLogo  color="red" /> */}
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder="Enter email address"
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
              />
              {errors.email && <Text style={styles.error}>{errors.email}</Text>}
              <TextInput
                style={styles.input}
                textContentType="password"
                placeholder="Enter password"
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
                secureTextEntry
              />
              {errors.password && <Text style={styles.error}>{errors.password}</Text>}
            </View>
            <TouchableOpacity
              style={[styles.submitButton]}
              onPress={() => handleSubmit()}
              >
               <Text style={styles.buttonText}>Login </Text>
            </TouchableOpacity>
            <View style={styles.footerContainer}>
              <Text style={styles.footerText}>Powered by  </Text>
              {/* <ImbanitaLogo width={80} height={50} color="red" /> */}
            </View>
          </View>
        )}
      </Formik>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f9c814',
    paddingHorizontal: 26,
  },
  logoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginBottom: 16,
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 16,
  },
  inputContainer: {
    width: '100%',
    marginBottom: 16,
  },
  input: {
    backgroundColor: '#ffffff',
    borderRadius: 4,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginBottom: 8,
  },
  error: {
    color: 'red',
    marginBottom: 8,
  },
  submitButton: {
    backgroundColor: '#153184',
    width: 104,
    alignItems: 'center',
    padding: 14,
    borderRadius: 8,
    marginTop: 10, // Adjust the margin as needed
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  logo: {
    height: 80,
    width: 180,
    resizeMode: 'contain',
  },
  footerContainer: {
    position: 'absolute',
    bottom: 20,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerText: {
    color: '#555556',
  },
});

export default LoginScreen;
