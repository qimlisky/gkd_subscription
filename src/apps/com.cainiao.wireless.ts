import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.cainiao.wireless',
  name: '菜鸟',
  groups: [
    {
      key: 1,
      name: '菜鸟开屏广告',
      desc: '菜鸟开屏广告',
      rules: [
        {
          fastQuery: true,
          activityIds:
            'com.cainiao.wireless.homepage.view.activity.AdsActivity',
          matches:
            '[id="com.cainiao.wireless:id/homesplash_fullscreen_layout"] @TextView[text*="跳过"]',
        },
      ],
    },
  ],
});
