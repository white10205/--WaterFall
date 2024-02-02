<script setup>
import { ref } from "vue";
import waterFall from "./components/waterFall.vue";
const list = [
  {
    height:Math.floor(Math.random()* 500 + 100),
    url:`../src/assets/img/${Math.floor(Math.random()*5) + 1}.jpg`,
    title:'美女'
  },
  {
    height:Math.floor(Math.random()* 500 + 100),
    url:`../src/assets/img/${Math.floor(Math.random()*5) + 1}.jpg`,
    title:'美女'
  },
  {
    height:Math.floor(Math.random()* 500 + 100),
    url:`../src/assets/img/${Math.floor(Math.random()*5) + 1}.jpg`,
    title:'美女'
  },
  {
    height:Math.floor(Math.random()* 500 + 100),
    url:`../src/assets/img/${Math.floor(Math.random()*5) + 1}.jpg`,
    title:'美女'
  },
  {
    height:Math.floor(Math.random()* 500 + 100),
    url:`../src/assets/img/${Math.floor(Math.random()*5) + 1}.jpg`,
    title:'美女'
  },
  {
    height:Math.floor(Math.random()* 500 + 100),
    url:`../src/assets/img/${Math.floor(Math.random()*5) + 1}.jpg`,
    title:'美女'
  },
  {
    height:Math.floor(Math.random()* 500 + 100),
    url:`../src/assets/img/${Math.floor(Math.random()*5) + 1}.jpg`,
    title:'美女'
  },
  {
    height:Math.floor(Math.random()* 500 + 100),
    url:`../src/assets/img/${Math.floor(Math.random()*5) + 1}.jpg`,
    title:'美女'
  },
  {
    height:Math.floor(Math.random()* 500 + 100),
    url:`../src/assets/img/${Math.floor(Math.random()*5) + 1}.jpg`,
    title:'美女'
  },
  {
    height:Math.floor(Math.random()* 500 + 100),
    url:`../src/assets/img/${Math.floor(Math.random()*5) + 1}.jpg`,
    title:'美女'
  },
  {
    height:Math.floor(Math.random()* 500 + 100),
    url:`../src/assets/img/${Math.floor(Math.random()*5) + 1}.jpg`,
    title:'美女'
  },
  {
    height:Math.floor(Math.random()* 500 + 100),
    url:`../src/assets/img/${Math.floor(Math.random()*5) + 1}.jpg`,
    title:'美女'
  },
  {
    height:Math.floor(Math.random()* 500 + 100),
    url:`../src/assets/img/${Math.floor(Math.random()*5) + 1}.jpg`,
    title:'美女'
  },
  {
    height:Math.floor(Math.random()* 500 + 100),
    url:`../src/assets/img/${Math.floor(Math.random()*5) + 1}.jpg`,
    title:'美女'
  },
  {
    height:Math.floor(Math.random()* 500 + 100),
    url:`../src/assets/img/${Math.floor(Math.random()*5) + 1}.jpg`,
    title:'美女'
  },
  {
    height:Math.floor(Math.random()* 500 + 100),
    url:`../src/assets/img/${Math.floor(Math.random()*5) + 1}.jpg`,
    title:'美女'
  },
  {
    height:Math.floor(Math.random()* 500 + 100),
    url:`../src/assets/img/${Math.floor(Math.random()*5) + 1}.jpg`,
    title:'美女'
  },
  {
    height:Math.floor(Math.random()* 500 + 100),
    url:`../src/assets/img/${Math.floor(Math.random()*5) + 1}.jpg`,
    title:'美女'
  },
  {
    height:Math.floor(Math.random()* 500 + 100),
    url:`../src/assets/img/${Math.floor(Math.random()*5) + 1}.jpg`,
    title:'美女'
  },
  {
    height:Math.floor(Math.random()* 500 + 100),
    url:`../src/assets/img/${Math.floor(Math.random()*5) + 1}.jpg`,
    title:'美女'
  },
  {
    height:Math.floor(Math.random()* 500 + 100),
    url:`../src/assets/img/${Math.floor(Math.random()*5) + 1}.jpg`,
    title:'美女'
  },
  {
    height:Math.floor(Math.random()* 500 + 100),
    url:`../src/assets/img/${Math.floor(Math.random()*5) + 1}.jpg`,
    title:'美女'
  },
  {
    height:Math.floor(Math.random()* 500 + 100),
    url:`../src/assets/img/${Math.floor(Math.random()*5) + 1}.jpg`,
    title:'美女'
  },
  {
    height:Math.floor(Math.random()* 500 + 100),
    url:`../src/assets/img/${Math.floor(Math.random()*5) + 1}.jpg`,
    title:'美女'
  },
  {
    height:Math.floor(Math.random()* 500 + 100),
    url:`../src/assets/img/${Math.floor(Math.random()*5) + 1}.jpg`,
    title:'美女'
  },
  {
    height:Math.floor(Math.random()* 500 + 100),
    url:`../src/assets/img/${Math.floor(Math.random()*5) + 1}.jpg`,
    title:'美女'
  },
  {
    height:Math.floor(Math.random()* 500 + 100),
    url:`../src/assets/img/${Math.floor(Math.random()*5) + 1}.jpg`,
    title:'美女'
  },
];
const SingleWidth = ref(Math.floor(Math.random() * 400 + 100))
</script>
<template>
  <waterFall :dataList="list" :SingleWidth="SingleWidth"></waterFall>
</template>

<style scoped lang='scss'>
</style>