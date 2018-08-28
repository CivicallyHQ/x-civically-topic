import { withPluginApi } from 'discourse/lib/plugin-api';
import { default as computed } from 'ember-addons/ember-computed-decorators';
import { categoryBadgeHTML } from 'discourse/helpers/category-link';

export default {
  name: 'civically-topic-edits',
  initialize() {
    withPluginApi('0.8.12', api => {
      api.modifyClass('component:topic-timer-info', {
        classNameBindings: ['executeAt::empty']
      });

      api.modifyClass('component:suggested-topics', {
        @computed('topic')
        browseMoreMessage(topic) {
          if (topic.get('isPrivateMessage')) { return; }

          const category = topic.get('category');
          if (!category) return;

          let catLink = categoryBadgeHTML(category);

          return I18n.t("topic.read_more_in_category_simple", {
            catLink
          });
        }
      });
    });
  }
};
