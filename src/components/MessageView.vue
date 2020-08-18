<template>
  <div>
    <TextBox :onPost="addMessages" />
    <div class="devider"></div>
    <Spinner v-if="!initialLoaded" />
    <p class="no-messages" v-else-if="initialLoaded && messages.length === 0">投稿データ0件</p>
    <MessageList v-else :messages="reversedMessages" />
  </div>
</template>

<script>
import TextBox from './TextBox';
import MessageList from './MessageList';
import MessageModel from '../models/Message';
import Spinner from './Spinner';

export default {
  components: {
    TextBox,
    MessageList,
    Spinner
  },
  data() {
    return {
      messages: [],
      initialLoaded: false
    }
  },
  computed: {
    reversedMessages() {
      return this.messages.slice().reverse();
    }
  },
  async created() {
    const messages = await this.fetchMessages();
    this.messages = messages;
    this.initialLoaded = true;
  },
  methods: {
    addMessages(message) {
      this.messages.push(message);
    },
    async fetchMessages() {
      let messages = [];
      try {
        messages = await MessageModel.fetchMessages();
      } catch (error) {
        alert(error.message);
      }
      return messages;
    }
  }
}
</script>

<style scoped>
.devider {
  border-top: 10px solid #ccc;
}

.no-messages {
  text-align: center;
}
</style>