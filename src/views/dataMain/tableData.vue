<!--
 * @Author: 寒嫣
 * @Date: 2019-10-22 14:11:37
 * @Description: file content
 -->
<template>
  <div class="table-data">
    <!-- search -->
    <div class="search-box">
      <el-input size="small" v-model="searchVal" placeholder="请输入课程名称检索"></el-input>
      <el-button size="small" type="primary" icon="el-icon-search" @click="handleSearch">搜索</el-button>
    </div>
    <!-- form -->
    <el-table :data="tableData" type="index" label="序号" border style="width:100%" class="table-box">
      <el-table-column type="index" label="序号" width="60"></el-table-column>
      <el-table-column label="课程名称" prop="title"></el-table-column>
      <el-table-column width="120" label="课程等级" prop="level"></el-table-column>
      <el-table-column width="120" label="技术栈" prop="type"></el-table-column>
      <el-table-column width="120" label="报名人数" prop="count"></el-table-column>
      <el-table-column width="160" label="上线日期" prop="date"></el-table-column>
      <el-table-column width="160" label="操作">
        <template>
          <el-button size="mini">编辑</el-button>
          <el-button size="mini" type="danger">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="pages" ref="page-box">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :page-sizes="[5,10,20]"
        :page-size="size"
        layout="total,sizes,prev,pager,next,jumper"
        :total="total"
      ></el-pagination>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Provide } from "vue-property-decorator";
import { State, Getter, Mutation, Action } from "vuex-class";
@Component({
  components: {}
})
export default class TableDate extends Vue {
  @Getter("user") getUser: any;
  @Provide() searchVal: string = "";
  @Provide() tHeight: number = document.body.offsetHeight - 100;
  @Provide() tableData: any = [];
  @Provide() page: number = 1;
  @Provide() size: number = 5;
  @Provide() total: number = 0;
  created() {
    console.log(this.getUser);
    this.getDate();
  }
  getDate() {
    (this as any)
      .axios(`/api/profiles/loadMore/${this.page}/${this.size}`)
      .then((res: any) => {
        console.log(res.data);
        this.tableData = res.data.data.list;
        this.total = res.data.data.total;
      });
  }
  handleSizeChange(val: number): void {
    this.size = val;
    this.page = 1;
    console.log(val);
    this.searchVal ? this.loadSearchDate() : this.getDate();
  }
  handleCurrentChange(val: number): void {
    this.page = val;
    this.searchVal ? this.loadSearchDate() : this.getDate();
  }
  handleSearch(): void {
    this.page = 1;
    this.searchVal ? this.loadSearchDate() : this.getDate();
    // this.loadSearchDate();
  }
  // 加载搜索数据
  loadSearchDate() {
    (this as any)
      .axios(`/api/profiles/search/${this.searchVal}/${this.page}/${this.size}`)
      .then((res: any) => {
        // console.log(res.data);
        this.tableData = res.data.datas.list;
        console.log(this.tableData);
      });
  }
}
</script>
<style lang="scss" scoped>
.table-data {
  width: 100%;
  height: 100%;
  .table-box {
    font-size: 14px;
  }
  .pages {
    // position: fixed;
    // bottom: 0;
    background: #fff;
    margin-top: 10px;
    padding: 10px 10px;
    text-align: right;
    height: 55px;
    box-sizing: border-box;
  }
  .search-box {
    background: #fff;
    margin-bottom: 10px;
    padding: 10px 10px;
    border-radius: 4px;
    height: 55px;
    box-sizing: border-box;
    .el-input {
      width: 200px;
      margin-right: 10px;
    }
  }
}
</style>
