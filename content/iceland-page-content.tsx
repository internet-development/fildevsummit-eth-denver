import { BlockDirectionEnum, BlockTypeEnum, CallToActionVariantEnum } from '@root/common/types';

export const FILECOIN_DEV_SUMMIT_ICELAND_PAGE_CONTENT = [
  {
    id: 'iceland',
    backgroundColor: 'var(--color-white)',
    direction: BlockDirectionEnum.COLUMN,
    title: 'Iceland - Schedule',
    // cta: {
    //   type: CallToActionVariantEnum.BUTTON,
    //   textColor: 'white',
    //   target: '_blank',
    //   text: 'Showcase Your Project at the EXPO',
    //   buttonColor: 'linear-gradient(to right,#39C1CB, #006FEC)',
    //   link: 'https://airtable.com/appEjnh5rpWMsjocb/shr4Pv7K5CxTo6DGi',
    // },
    block: [
      {
        type: BlockTypeEnum.SCHEDULE_LIST_TOGGLE_BY_TRACK_TALK_ICELAND,
        scheduleData: {
          airtable: {
            tableName: 'NA/EU Talk Track Submissions + Forms',
            endPoint: 'airtable/iceland',
            host: 'internet-apis.onrender.com',
            data: [],
          },
        },
      },
    ],
  },
];
