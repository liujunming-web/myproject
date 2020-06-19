<template>
  <div class="row">

     
    <div class="col-3">
      <h3>Draggable 1</h3>
      <draggable 
        class="list-group"  
        group="people"
        :list="list1" 
        @change="log">
        <div
          class="list-group-item"
          v-for="element in list1"
          :key="element.name"
        >
            {{element.name}}
            <!-- <pre style="text-align:left">{{ listString }}</pre> -->
        </div>
      </draggable>
    </div>

    <div class="col-3">
      <h3>Draggable 2</h3>
      <draggable class="list-group" :list="list2" group="people" @change="log">
        <div
          class="list-group-item"
          v-for="element in list2"
          :key="element.name"
        >
          {{ element.name }}
        </div>
      </draggable>
    </div>

    <div class="col-3">
      <h3>Draggable 3</h3>
      <draggable class="list-group" :list="list3" group="people" @change="log">
        <div
          class="list-group-item"
          v-for="element in list3"
          :key="element.name"
        >
          {{ element.name }} 
        </div>
      </draggable>
    </div>

   
  </div>
</template>
<script>
import draggable from "vuedraggable";

export default {
  name: "two-lists",
  display: "Two Lists",
  order: 1,
  components: {
    draggable
  },
  data() {
    return {
        dragging: false,
        list1: [
            { name: "John", id: 1 },
            { name: "Joao", id: 2 },
            { name: "Jean", id: 3 },
            { name: "Gerard", id: 4 }
        ],
        list2: [
            { name: "Juan", id: 5 },
            { name: "Edgard", id: 6 },
            { name: "Johnson", id: 7 }
        ],
        list3: [
            { name: "buzhidao", id: 8 },
            { name: "nihaoya", id: 9 },
            { name: "shide", id: 10 }
        ]
    };
  },
  computed:{
      listString(){
          return JSON.stringify(this.list2,null,3)
      }
  },
  methods: {
    
     checkMove: function(e) {
      window.console.log("Future index: " + e.draggedContext.futureIndex);
    },
    log: function(evt) {
      window.console.log(evt);
    }
  }
};
</script>
<style scoped>
.row {
  margin-left: 0;
  margin-right: 0;
}
</style>

