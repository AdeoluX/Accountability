import {makeAutoObservable} from 'mobx';
// import axios from 'axios';
const delay = (ms = 1000) => new Promise(r => setTimeout(r, ms));
class AuthStore {
  constructor() {
    makeAutoObservable(this);
  }
  user_data = null;

  setUserData = user_data => {
    this.user_data = user_data;
  };

  //action
  loginFunc = (email, password) => {
    // console.log('hereuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu');
    // axios
    //   .post(`https://accountability-app.herokuapp.com/api/v1/auth/login`, {
    //     email,
    //     password,
    //   })
    //   .then(res => this.setUserData(res.data));
    setTimeout(() => {
      this.setUserData({});
    }, 2000);
  };
}

export default new AuthStore();
