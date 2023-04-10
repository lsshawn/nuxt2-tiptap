<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        TipTap Custom Extension Task
        <client-only>
          <tiptap-vuetify
            v-model="output.title"
            :extensions="extensions"
          />
          <br />
          <tiptap-vuetify
            v-model="output.description"
            :extensions="extensions"
          />
        </client-only>
      </v-col>
      {{ output }}
    </v-row>
  </v-container>
</template>

<script>
import {
  TiptapVuetify,
  Heading,
  Bold,
  Italic,
  Underline,
  BulletList,
  OrderedList,
  ListItem,
  History,
} from 'tiptap-vuetify';

export default {
  components: {
    TiptapVuetify,
  },
  data() {
    return {
      output: {
        title: '',
        description: '',
      },
      extensions: [
        Bold,
        Italic,
        Underline,
        ListItem,
        BulletList,
        OrderedList,
        History,
        [
          Heading,
          {
            options: {
              levels: [1, 2, 3],
            },
          },
        ],
      ],
    };
  },
};
</script>
