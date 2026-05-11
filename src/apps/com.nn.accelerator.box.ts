import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.nn.accelerator.box',
  name: '雷神加速器',
  groups: [
    {
      key: 1,
      name: '雷神加速器',
      desc: '开屏广告',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.nn.accelerator.box.activity.WelcomeActivity',
          matches:
            '[id="com.nn.accelerator.box:id/ptgSplashSkipFl"] @TextView[text*="跳过"]',
        },
      ],
    },
  ],
});
