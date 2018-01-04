import Vue from 'vue';

export default {
  // 登录
  login(params) {
    return Vue.http.post('user/login', {
      'account': params.username,
      'password': params.password
    });
  },
  // 登出
  logout() {
    return Vue.http.get('user/logout');
  },
  // 获取菜单
  get_menu() {
    return Vue.http.get('admin/menu');
  }
}
