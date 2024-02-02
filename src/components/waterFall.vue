<script setup>
import { onMounted, reactive, ref } from "vue";
//接收父组件传过来的参数
const props = defineProps({
  dataList: {
    type: Array,
    default: [],
  },
  SingleWidth:{
    type:Number,
    default:125
  }
});
//存储每个div的位置进行模板渲染
const waterList = reactive([]);
//维护高度数组
const heightList = reactive([]);
const init = () => {
  //每个div的宽度
  const width = props.SingleWidth;
  //可视区域的最大宽度
  const x = document.body.clientWidth;
  //一行能容纳多少个div，向下取整
  const column = Math.floor(x / width);
  for (let i = 0; i < props.dataList.length; i++) {
    //如果是第一行，进行特殊处理
    if (i < column) {
      props.dataList[i].left = i * width;
      //默认上下间距
      props.dataList[i].top = 20;
      waterList.push(props.dataList[i]);
      heightList.push(props.dataList[i].height);
    } else {
      //其他行
      //当前的最大高度
      let maxHeight = heightList[0];
      //最大高度的下标
      let index = 0;
      heightList.forEach((height, i) => {
        if (maxHeight > height) {
          maxHeight = height;
          index = i;
        }
      });
      props.dataList[i].top = maxHeight + 20;
      props.dataList[i].left = index * width;
      //更新高度数组
      heightList[index] += props.dataList[i].height;
      waterList.push(props.dataList[i]);
    }
  }
};
onMounted(() => {
  //初始化
  init();
});
</script>
<script>
//组件名称
export default {
  name: "WaterFall",
};
</script>
<template>
  <div class="wraps">
    <div
      class="items"
      v-for="item in waterList"
      :key="item"
      :style="{
        height: item.height + 'px',
        top: item.top + 'px',
        left: item.left + 'px',
        width:props.SingleWidth + 'px'
      }"
    >
      <img v-img-lazy="item.url">
      <!-- <div class="mask" :style="{height:item.height/4 + 'px'}">{{ item.title }}</div> -->
    </div>
  </div>
</template>

<style scoped lang='scss'>
.wraps {
  position: relative;
  height: 100%;
  .items {
    position: absolute;
    overflow: hidden;
    border-radius: 10px;
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    .mask{
      width: 100%;
      position: absolute;
      left: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.2);
      color: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
      backdrop-filter: blur(20px);
      font-weight: 600;
      font-size: 30px;
      transition: all 0.3s;
    }
  }
}
</style>