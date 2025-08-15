import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.tmri.app.main',
  name: '交管12123',
  groups: [
    {
      key: 3,
      name: '更新提示',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: 'com.tmri.app.ui.activity.main.MainTabHostNewActivity',
          matches: ['[text="立即更新"]', '[text="以后再说"]'],
          snapshotUrls: 'https://i.gkd.li/i/15751656',
        },
      ],
    },
  ],
});
