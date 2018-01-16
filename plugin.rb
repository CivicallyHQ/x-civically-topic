# name: civically-topic-extension
# about: Extends the Discourse topic functionality
# version: 0.1
# authors: Angus McLeod
# url: https://github.com/civicallyhq/x-civically-topic

register_asset "stylesheets/x-civically-topic.scss"

after_initialize do
  ## Allows use of custom_fields with TopicCreator
  DiscourseEvent.on(:before_create_topic) do |topic, creator|
    if creator.opts[:topic_custom_fields]
      creator.opts[:topic_custom_fields].each do |k, v|
        topic.custom_fields[k] = v
      end
    end
  end
end
