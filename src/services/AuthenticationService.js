import Api from '@/services/Api'

export default {
  signIn(credentials) {
    let config = {
      headers: {
        "x-api-key": "2BAAFD2BE944AAA5B21BCBDF99F6E",
        "x-api-secret": "CA41A12EA2828DBC49CDBDA88D521"
      }
    };

    return Api().post("authenticate/login", credentials, config);
  }
}
