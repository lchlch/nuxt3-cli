<template>
  <div >{{ route.params.id }}</div>
  <div >{{ route.query.test }}</div>
</template>

<script setup>
import { reactive, toRefs, onBeforeMount, onMounted, watchEffect } from 'vue';
const route = useRoute()

const data = reactive({})
onBeforeMount(() => {
  //console.log('2.组件挂载页面之前执行----onBeforeMount')
})
onMounted(() => {
  //console.log('3.-组件挂载到页面之后执行-------onMounted')
})
watchEffect(()=>{
})
// 使用toRefs解构
// let { } = { ...toRefs(data) } 
defineExpose({
  ...toRefs(data)
})

</script>
<style scoped lang='less'>
</style>