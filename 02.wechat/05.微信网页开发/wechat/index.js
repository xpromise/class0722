/**
 * 微信接口实现类
 */
const request = require('request-promise-native');
const fetchAccessToken = require('./access-token');
const { url } = require('../config');

// 菜单的配置
// http://bj.96weixin.com/tools/emoji
const menus =  {
  "button":[
    {
      "type": "click",
      "name": "首页😂",
      "key":"home"
    },
    {
      "name":"下拉菜单👻",
      "sub_button":[
        {
          "type":"view",
          "name":"微信SDK测试页面",
          "url": `${url}/search`
        },
        {
          "type": "scancode_waitmsg",
          "name": "扫码带提示",
          "key": "rselfmenu_0_0",
        },
        {
          "type": "scancode_push",
          "name": "扫码推事件",
          "key": "rselfmenu_0_1",
        },
        {
          "name": "发送位置",
          "type": "location_select",
          "key": "rselfmenu_2_0"
        },
      ]
    },
    {
      "name": "发图",
      "sub_button": [
        {
          "type": "pic_sysphoto",
          "name": "系统拍照发图",
          "key": "rselfmenu_1_0",
        },
        {
          "type": "pic_photo_or_album",
          "name": "拍照或者相册发图",
          "key": "rselfmenu_1_1",
        },
        {
          "type": "pic_weixin",
          "name": "微信相册发图",
          "key": "rselfmenu_1_2",
        }
      ]
    },
  ]
};

class Wechat {
  async createMenu() {
    const { accessToken } = await fetchAccessToken();

    const result = await request({
      method: 'POST',
      url: `https://api.weixin.qq.com/cgi-bin/menu/create?access_token=${accessToken}`,
      json: true,
      body: menus
    });
    return result;
  }

  async deleteMenu() {
    const { accessToken } = await fetchAccessToken();
    const result = await request({
      method: 'GET',
      url: `https://api.weixin.qq.com/cgi-bin/menu/delete?access_token=${accessToken}`,
      json: true,
    });
    return result;
  }
}


const wechat = new Wechat();

(async () => {
  let result = await wechat.deleteMenu();
  console.log(result);
  result = await wechat.createMenu();
  console.log(result);
})();
