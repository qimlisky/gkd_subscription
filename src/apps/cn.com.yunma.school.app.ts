import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'cn.com.yunma.school.app',
  name: '易校园',
  groups: [
    {
      key: 1,
      name: '开屏广告',
      desc: '开屏广告',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.yunma.app.ui.start.SplashActivity',
          matches:
            '[id="cn.com.yunma.school.app:id/fl_topon_container"] [text*="跳过"]',
        },
      ],
    },
  ],
});
