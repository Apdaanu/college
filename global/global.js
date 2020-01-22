import AsyncStorage from '@react-native-community/async-storage';

export async function setLoggedInInfo(_val){
  try{
    await AsyncStorage.setItem('loggedinUser', _val);
  }catch(e){
    throw(e);
  }
}

export async function getLoggedInInfo(){
  try {
    const value = await AsyncStorage.getItem('loggedinUser');
    return value;
  }catch(e) {
    throw (e)
  }
}

export async function getUsers(){
  try {
    const value = await AsyncStorage.getItem('user')
    return value;
  }catch(e) {
    throw e;
  }
}

export async function setUSer(_val){
  try {
    await AsyncStorage.setItem('user', _val);
  } catch(e) {
    throw e;
  }
}