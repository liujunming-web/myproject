<template>
  <div>
    <!-- 多选 -->
    <div
      v-if="multiple"
      ref="tags">
      <!-- collapse tags 多选时是否将选中值按文字的形式展示 -->
      <span v-if="collapseTags && selected.length">
        <el-tag
          type="info"
          disable-transitions>
          <span class="el-select__tags-text">{{ selected[0].currentLabel }}</span>
        </el-tag>
        <el-tag
          v-if="selected.length > 1"
          type="info"
          disable-transitions>
          <span class="el-select__tags-text">+ {{ selected.length - 1 }}</span>
        </el-tag>
      </span>
      <!-- 多选，多个 el-tag 组成 -->
      <transition-group @after-leave="resetInputHeight" v-if="!collapseTags">
        <el-tag
          v-for="item in selected"
          :key="getValueKey(item)"
          type="info"
          disable-transitions>
          <span class="el-select__tags-text">{{ item.currentLabel }}</span>
        </el-tag>
      </transition-group>
      <!-- 可输入文本的查询框 -->
      <input
        v-model="query"
        v-if="filterable"
        ref="input">
    </div>
    <!-- 显示结果框 read-only -->
    <el-input
      ref="reference"
      v-model="selectedLabel">
      <!-- 用户显示清空和向下箭头 -->
      <i slot="suffix"></i>
    </el-input>
    <!-- 下拉菜单 -->
    <transition>
      <el-select-menu
        ref="popper"
        v-show="visible && emptyText !== false">
        <el-scrollbar
          tag="ul"
          wrap-class="el-select-dropdown__wrap"
          view-class="el-select-dropdown__list"
          ref="scrollbar"
          v-show="options.length > 0 && !loading">
          <!-- 默认项（创建条目） -->
          <el-option
            :value="query"
            created
            v-if="showNewOption">
          </el-option>
          <!-- 插槽，用于放 option 和 option-group -->
          <slot></slot>
        </el-scrollbar>
        <!-- loading 加载中文本 -->
        <p
          v-if="emptyText &&
            (!allowCreate || loading || (allowCreate && options.length === 0 ))">
          {{ emptyText }}
        </p>
      </el-select-menu>
    </transition>
  </div>
</template>
<script>
export default {
    data(){
        return {

        }
    },
    methods:{
        // 搜索功能实现
        handleQueryChange(val) {
            if (this.previousQuery === val) return;
            if (
            this.previousQuery === null &&
            (typeof this.filterMethod === 'function' || typeof this.remoteMethod === 'function')
            ) {
            this.previousQuery = val;
            return;
            }
            this.previousQuery = val;
            this.$nextTick(() => {
            if (this.visible) this.broadcast('ElSelectDropdown', 'updatePopper');
            });
            this.hoverIndex = -1;
            if (this.multiple && this.filterable) {
            const length = this.$refs.input.value.length * 15 + 20;
            this.inputLength = this.collapseTags ? Math.min(50, length) : length;
            this.managePlaceholder();
            this.resetInputHeight();
            }
            if (this.remote && typeof this.remoteMethod === 'function') {
            this.hoverIndex = -1;
            this.remoteMethod(val);
            } else if (typeof this.filterMethod === 'function') {
            this.filterMethod(val);
            this.broadcast('ElOptionGroup', 'queryChange');
            } else {
            this.filteredOptionsCount = this.optionsCount;
            this.broadcast('ElOption', 'queryChange', val);
            this.broadcast('ElOptionGroup', 'queryChange');
            }
            if (this.defaultFirstOption && (this.filterable || this.remote) && this.filteredOptionsCount) {
            this.checkDefaultFirstOption();
            }
        },
    }
}
</script>