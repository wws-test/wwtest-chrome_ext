<template>
  <div class="bg-gradient-to-r from-[#0d9488] to-[#14b8a6] p-4 ">
    <h1 class="flex-auto text-lg font-semibold text-white">Trun-快测</h1>
    <div class="flex items-center mb-4">
      <label class="mr-2 text-white">任务:</label>
      <select v-model="select1" class="w-1/2 rounded-md border-[#0d9488] border p-2 bg-[#2dd4bf] text-white">
        <option v-for="option in options1" :value="option.id" :key="option.id" class="bg-[#0d9488]-600 text-white">{{ option.name }}</option>
      </select>
    </div>
    <div class="flex items-center mb-4">
      <label class="mr-2 text-white">环境:</label>
      <select v-model="select2" class="w-1/2 rounded-md border-2 border-[#0d9488] bg-[#2dd4bf] text-white p-2">
        <option v-for="option in options2" :value="option.domain" :key="option.id" class="bg-[#0d9488] text-white">{{ option.domain }}</option>
      </select>
    </div>
    <button class="bg-[#2dd4bf] hover:bg-[#2dd4bf] text-white font-bold py-2 px-4 rounded-md" @click="submit">
      快速测试
    </button>
  </div>
</template>

  <script>
  import axios from 'axios';

  
  export default {
    data() {
      return {
        select1: '',
        select2: '',
        options1: [],
        options2: [],
        taskContent: [],
      };
    },
    computed: {
      options() {
        return this.taskContent.map(task => {
          return {
            value: task.name,
            label: task.name
          }
        })
      }
    },
    mounted() {
      console.log('created() is called');
      //请求后端接口，获取下拉框的选项数据
      axios.post('http://10.50.2.202:10083/api/task/taskList',{ taskType : 1 })
        .then((response) => {
          console.log('API response:', response.data);
          this.options1 = response.data.content.taskContent;
        })
        .catch((error) => {
          console.log(error);
        });
      // const data = {"code":0,"content":{"taskContent":[{"add_user":"\u674e\u6d0b\u6d0b","case_fail":0,"case_success":0,"case_total":131,"end_time":"","id":5315,"name":"(copy by)wx5.3_14.\u5206\u6790\u7814\u5224","owner_user":"\u674e\u6d0b\u6d0b","runTime":"07:30","start_time":"","status":0,"tag":2,"taskDesc":""},{"add_user":"\u674e\u6d0b\u6d0b","case_fail":0,"case_success":0,"case_total":132,"end_time":"","id":5316,"name":"(copy by)wx5.3_18.\u7cfb\u7edf\u7ba1\u7406","owner_user":"\u674e\u6d0b\u6d0b","runTime":"07:30","start_time":"","status":0,"tag":2,"taskDesc":""},{"add_user":"","case_fail":0,"case_success":9,"case_total":9,"end_time":"2023-03-02 10:30:10","id":3642,"name":"01.\u7edf\u4e00\u95e8\u6237","owner_user":"\u76db\u709c\u709c","runTime":"10:30","start_time":"2023-03-02 10:30:00","status":3,"tag":1,"taskDesc":""}]}}
      // this.options1 = data.content.taskContent
      axios.get('http://10.50.2.202:10083/api/environment/environmentList')
        .then((response) => {
          this.options2 = response.data.content;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    methods: {
      submit() {
        // 向后端接口发送数据，完成数据的提交
        const data = {
          id: this.select1,
          domain: this.select2,
        };

        axios.post('http://10.50.2.202:10083/api/task/taskExcutext', data)
          .then((response) => {
            console.log(data);
            console.log(response.data);
            alert(response.data.msg)
          })
          .catch((error) => {
            console.log(error);
          });
      },
    },
  };
  </script>
  