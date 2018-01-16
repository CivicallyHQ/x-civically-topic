import { withPluginApi } from 'discourse/lib/plugin-api';

export default {
  name: 'civically-topic-edits',
  initialize() {
    withPluginApi('0.8.12', api => {
      api.modifyClass('component:topic-timer-info', {
        classNameBindings: ['executeAt::empty']
      });
    });
  }
};
