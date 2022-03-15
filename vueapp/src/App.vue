<template>
  <div>Hello {{ value }}</div>
</template>

<script>

import { getMessage } from './services/hello'


export default {
  name: "App",
  data() {
    return {
      value: "World"
    };
  },
  methods:{
    getValue(){
      getMessage().then(response => {
        console.log(response)
        this.value = response.message
      })
    }
  },
  mounted(){
    this.getValue()
  }
};
</script>
