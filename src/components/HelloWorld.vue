<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    
    <h3>Installed CLI Plugins <span>Phil</span></h3>
    <span v-for="(item,index) in girls" :key="item" class="pd20" @click="selectGirlFun(index)">{{item}}</span>

    <div>{{selectGirl}}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive, toRefs, onMounted } from 'vue';
import {getRequest} from "@/http/request_service";
// 定义数据类型接口
interface DataProps {
  girls: string[];
  selectGirl: string;
  selectGirlFun: (index: number) => void;
}
export default defineComponent({
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  
  setup(){
    onMounted(()=>{
      getData()
    });
    const data: DataProps = reactive({
      girls: ["TEST-A", "TEST-B", "TEST-C"],
      selectGirl: "",
      selectGirlFun: (index: number) => {
        data.selectGirl = data.girls[index];
      },
    });
    
    const refData = toRefs(data);
    const getData = ()=>{
      getRequest("https://api.shadiao.pro/chp").then((res:any)=>{
        console.log(res);
      })
    }
    return {
      ...refData,
      getData
    };
    // const list = ref([1,2,3]);
    // const clickValue =ref("");
    // const handleClick:(item:number)=>void=(item:number)=>{
    //   clickValue.value=item.toString()
    // }
    // return{
    //   list,
    //   clickValue,
    //   handleClick
    // }
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.pd20{
  display: inline-block;
  padding: 20px;
}
h3 {
  margin: 40px 0 0;
  span{
    font-size: 24px;
  }
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
