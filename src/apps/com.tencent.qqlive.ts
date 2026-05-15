import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.tencent.qqlive',
  name: '腾讯视频',
  groups: [
    {
      key: 1,
      name: '腾讯视频开屏广告',
      desc: '腾讯视频开屏广告',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.tencent.qqlive.ona.activity.SplashHomeActivity',
          matches: '[id="android:id/content"] @TextView[text*="跳过"]',
        },
      ],
    },
  ],
});
