import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.tmri.app.main',
  name: '交管12123',
  groups: [
    {
      key: 1,
      name: '全屏广告',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: [
            'com.tmri.app.ui.activity.main.MainTabHostNewActivity',
            'com.tmri.app.ui.activity.main.TmriNewActivity',
          ],
          matches: 'ImageButton[id="com.tmri.app.main:id/btn_cancel"]',
          snapshotUrls: [
            'https://i.gkd.li/i/13315944',
            'https://i.gkd.li/i/13779215',
          ],
        },
      ],
    },
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
